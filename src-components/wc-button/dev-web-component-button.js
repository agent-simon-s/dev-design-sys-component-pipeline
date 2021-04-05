
const templateBtn = document.createElement('template');
templateBtn.innerHTML = `
	<style>
	    :host {
	      font-family: var(--ds-font-face-sans-serif);
	    }
	    .btn{
			font-size: var( --ds-size-font-large);
	    	background-color: var(--ds-color-role-fill);
	    }
	    :host-context(.brand-acme) .btn{
	    	background-color: var(--brand-color-role-primary);
	    }
	</style>
	<button class="btn">
		<span class="icon"></span>
		<span class="txt"></span>
	</button>
	`;

class WCBtn extends HTMLElement {
	constructor(){
		super();
		this.attachShadow({ mode: 'open'});
		this.shadowRoot.appendChild(templateBtn.content.cloneNode(true));
		this.shadowRoot.querySelector('.txt').innerText = this.getAttribute('txt');
		this.shadowRoot.querySelector('.icon').innerText = this.getAttribute('icon');

		this.shadowRoot.querySelector('button').addEventListener('click', () => {
      	this.onClick('Hello from within the Custom Element');
    	});
	}

	buttonAction(){ alert(`TXT ${this.getAttribute('txt')} `); }

	connectedCallback(){
		this.shadowRoot.querySelector('button').addEventListener( 'click', () => this.buttonAction() );
	}

	disconnectedCallback(){
		this.shadowRoot.querySelector('button').removeEventListener();
	}
}

window.customElements.define('wc-button', WCBtn);