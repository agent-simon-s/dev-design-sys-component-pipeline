
const templateBtn = document.createElement('template');
templateBtn.innerHTML = `
	<style>
	    :host {
	      font-family: var(--ds-font-face-sans-serif);
	    }
	    button{
			font-size: var( --ds-size-font-large);
	    	line-height:var( --ds-size-button-large);
	    	background-color: var(--ds-color-role-fill);
	    	width: var( --ds-size-button-large);
	    	padding: var( --ds-size-space-narrow);
	    	border:none;
	    	border-radius: var( --ds-size-radius-button);
	    	margin-bottom: var( --ds-size-space-medium);
	    }
	    .btn--btn-primary button {
	    	background-color: var(--ds-color-role-fill);
	    }
	    .btn--btn-secondary button {
	    	background-color: var(--ds-color-role-surface);
	    }
	    :host-context(.brand-acme) button{
	    	background-color: var(--brand-color-role-primary);
	    }
	    :host-context(.theme-dark) button{
	    	background-color: var(--dark-color-role-primary);
	    }
	    	
	</style>
	<button>
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