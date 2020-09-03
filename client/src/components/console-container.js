import { LitElement, html } from "lit-element";

class ConsoleContainer extends LitElement {
  static get properties() {
    return {
      language: { type: String },
    };
  }

  render() {
    return html`
      <div>
        <h2>${this.language} ${this.language != null ? "c" : "C"}onsole</h2>
        <div id="lines-wrapper">
          <slot name="line">
            <div>Fallback content (It will be an empty line by default)</div>
          </slot>
        </div>
      </div>
    `;
  }
}

customElements.define("console-container", ConsoleContainer);
