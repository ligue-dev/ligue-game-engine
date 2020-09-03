const template = document.createElement("template");
template.innerHTML = `
<div>
  <h2>Javascript console</h2>
  <div id="lines-wrapper">
    <slot name="line">
      <div>Fallback content (It will be an empty line by default)</div>
    </slot>
  </div>
</div>
`;

class ConsoleContainer extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("console-container", ConsoleContainer);
