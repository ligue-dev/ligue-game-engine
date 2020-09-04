import { LitElement, html } from "lit-element";
import { ConsoleLine } from "./consoleLine";

class ConsoleContainer extends LitElement {
  static get properties() {
    return {
      language: { type: String },
    };
  }

  /**
   *
   * @param {Event} event
   */
  _handleNewLine(event) {
    // TODO when ConsoleLine merged : add new component
    console.log("new line required : " + event.detail.lineNumber);
    const line = new ConsoleLine();
    line.setAttribute("line-numer", Number(event.detail.lineNumber) + 1);
    line.setAttribute("slot", "line");
    event.target.after(line);
  }

  _handleDeleteLine() {
    // TODO when ConsoleLine merged : delete component
    console.log("delete line request received");
  }

  _handleKeyUp(event) {
    const target = event.target;
    console.log(
      `key received from console-line ${target.getAttribute("line-number")}`
    );
  }

  connectedCallback() {
    super.connectedCallback();
    const lines = document.querySelectorAll(`console-line[slot="line"]`);
    lines.forEach((line) => {
      line.addEventListener("keyup", (event) => {
        if (event.target.value.length === 0 && event.keyCode === 8) {
          line.dispatchEvent(new CustomEvent("deleteline", { bubbles: true }));
        }

        if (event.keyCode === 13) {
          // TODO when ConsoleLine merged : put line number into the custom event details

          const newLineEvent = new CustomEvent("newline", {
            bubbles: true,
            detail: {
              lineNumber: line.getAttribute("line-number"),
            },
          });

          line.dispatchEvent(newLineEvent);
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
          @keyup="${this._handleKeyUp}"
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
