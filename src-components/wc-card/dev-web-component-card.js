
const templateCard = document.createElement('template');
templateCard.innerHTML = `
	<style>
	    :host {
	        font-family: var(--ds-font-face-sans-serif);
	    }
	    dt{
	    	font-size: var( --ds-size-font-small);
	    	font-weight:600;
	    	color: var( --ds-color-role-primary);
	    }
	    dd{
	    	font-size: var( --ds-size-font-small);
	    	font-weight:300;
	    }
	    p{

	    }
	    .wc-card{
	    	padding: var( --ds-size-space-medium) var( --ds-size-space-medium) var( --ds-size-space-wide);
	    	background-color:var( --ds-color-role-surface);
	    	border-bottom-size:1px;
	    	border-bottom-style:solid;
	    	border-bottom-color: var( --ds-color-role-primary);
	    	margin-bottom: var( --ds-size-space-wide);
	    }
	    :host-context(.brand-acme){
	    	font-family: var(--brand-font-face-sans-serif);

	    }
	    :host-context(.brand-acme) .wc-card{
	    	background-color:var( --brand-color-role-surface);
	    	border-bottom-color: var( --brand-color-role-primary);

	    }
	    :host-context(.theme-dark) .wc-card{
	    	background-color:var( --dark-color-role-surface);
	    	border-bottom-color: var( --dark-color-role-primary);

	    }
	</style>
	<div class="wc-card">
		<h3></h3>
		<p>buddy</p>
		<dl>
			<dt>Email: </dt><dd><slot name="email"></dd>
			<dt>Phone: </dt><dd><slot name="phone"></dd>
		</dl>
		<wc-button class="btn btn--btn-secondary" icon="&ocir;" txt="Contact"></wc-button>
	</div>
	`;

class WCIdCard extends HTMLElement {
	constructor(){
		super();
		this.attachShadow({ mode: 'open'});
		this.shadowRoot.appendChild(templateCard.content.cloneNode(true));
		this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
		this.shadowRoot.querySelector('p').innerText = this.getAttribute('info');
	}

	buttonAction(){ alert(this.getAttribute('name') ); }

	connectedCallback(){
		this.shadowRoot.querySelector('button').addEventListener( 'click', () => this.buttonAction() );
	}

	disconnectedCallback(){
		this.shadowRoot.querySelector('button').removeEventListener();
	}
}

window.customElements.define('wc-id-card', WCIdCard);