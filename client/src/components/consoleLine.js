const template = document.createElement("template");
template.innerHTML = `<div><span></span><input type="text" name="console-line-input" /></div>`;

class ConsoleLine extends HTMLElement {
    constructor(){
        super();
        this.value = "";
        this.attachShadow({ mode : "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("span").innerText = this.getAttribute("line-number");
    }
    setComponentValue(){
        this.value = this.shadowRoot.querySelector("input").value;
    }
    connectedCallback(){
        this.shadowRoot.querySelector("input")
        .addEventListener("change", () => this.setComponentValue());
    }
    disconnectedCallback(){
        this.shadowRoot.querySelector("input").removeEventListener();
    }
}
window.customElements.define("console-line", ConsoleLine);