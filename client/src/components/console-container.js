const template = document.createElement("template");
template.innerHTML = `<div><h2>Javascript console</h2><slot name="lines">fallback</slot</div>`;

class ConsoleContainer extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("console-container", ConsoleContainer);
