export async function loadJSX(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to load ${url}`);
    }

    const source = await response.text();

    const result = Babel.transform(source, {
        presets: ["react"],
        plugins: [
            ["transform-react-jsx", {
                pragma: "h"
            }]
        ],
    });

    const blob = new Blob([result.code], {
        type: "text/javascript"
    });

    const blobURL = URL.createObjectURL(blob);

    try {
        return await import(blobURL);
    } finally {
        URL.revokeObjectURL(blobURL);
    }
}
