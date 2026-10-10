import Base from "../base/base.js";

export class Button extends Base {
  onClick(event) {
    window.alert(`event is ${event}`);
  }
  render() {
    this.innerHTML = `
      <div class="bg-amber-300 rounded-md w-fit cursor-pointer">${this.textContent}</div>
    `;
  }
}
