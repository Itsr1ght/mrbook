import Base from "../base/base.js";

export class Button extends Base {
  onClick(event) {
    window.alert(`event is ${event}`);
  }
  render() {
    this.innerHTML = `
      <div class="bg-amber-900 rounded-md w-fit">Hello</div>
    `;
  }
}
