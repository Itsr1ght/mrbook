export async function loadJSX(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to load ${url}`);
  }

  const source = await response.text();

  const result = Babel.transform(source, {
    presets: [
      [
        "react",
        {
          runtime: "classic",
          pragma: "h",
          pragmaFrag: "Fragment",
        },
      ],
    ],
  });

  // Resolve imports relative to the original JSX file
  const baseURL = new URL(url, window.location.href);

  const code = result.code.replace(
    /(\bfrom\s*["'])([^"']+)(["'])/g,
    (match, start, specifier, end) => {
      if (
        specifier.startsWith("/") ||
        specifier.startsWith("./") ||
        specifier.startsWith("../")
      ) {
        return `${start}${new URL(specifier, baseURL).href}${end}`;
      }

      return match;
    }
  );

  const blob = new Blob([code], {
    type: "text/javascript",
  });

  const blobURL = URL.createObjectURL(blob);

  try {
    return await import(blobURL);
  } finally {
    URL.revokeObjectURL(blobURL);
  }
}
