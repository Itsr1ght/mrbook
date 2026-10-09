export default class Base extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListener("click", this.handleClick);
  }
  disconnectedCallback() {
    this.removeEventListener("click", this.handleClick);
  }

  handleClick = (event) => {
    this.onClick(event);
  }

  onClick(event) {
    throw new Error("Child class must implement click()");
  }
  render() {
    throw new Error("Child class must implement render()");
  }
}
