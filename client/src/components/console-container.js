import { LitElement, html } from "lit-element";

class ConsoleContainer extends LitElement {
  static get properties() {
    return {
      language: { type: String },
    };
  }

  _handleNewLine() {
    // TODO when ConsoleLine merged : add new component
    console.log("new line required");
  }

  _handleDeleteLine() {
    // TODO when ConsoleLine merged : delete component
    console.log("delete line request received");
  }

  connectedCallback() {
    super.connectedCallback();
    const lines = document.querySelectorAll(`div[slot="line"]`);
    lines.forEach((line) => {
      line.addEventListener("keyup", (event) => {
        if (event.target.value.length === 0 && event.keyCode === 8) {
          line.dispatchEvent(new CustomEvent("deleteline", { bubbles: true }));
        }

        if (event.keyCode === 13) {
          // TODO when ConsoleLine merged : put line number into the custom event details
          line.dispatchEvent(new CustomEvent("newline", { bubbles: true }));
        }
      });
    });
  }

  render() {
    return html`
      <div>
        <h2>${this.language} ${this.language != null ? "c" : "C"}onsole</h2>
        <div
          id="lines-wrapper"
          @newline="${this._handleNewLine}"
          @deleteline="${this._handleDeleteLine}"
        >
          <slot name="line">
            <div>Fallback content (It will be an empty line by default)</div>
          </slot>
        </div>
      </div>
    `;
  }
}

customElements.define("console-container", ConsoleContainer);
