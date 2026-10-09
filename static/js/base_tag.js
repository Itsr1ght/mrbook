class Base extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <div class="font-bold">Base Tag</div>
    `;
    this.addEventListener("click", this.handleClick);
  }
  async handleClick() {
    this.innerHTML = `<div class="font-bold">Clicked Tag</div>`;
  }

  async disconnectCallback() {
    this.removeEventListener("click", this.handleClick);
  }
}

customElements.define('base-tag', Base);
