
const templateHi = document.createElement('template');
templateHi.innerHTML = `
   <style>
	    :host {
	      font-family: var(--ds-font-face-sans-serif);
	      margin-bottom: var( --ds-size-space-wide);
	    }
	    .wc-header{
	      background-color: var(--ds-color-role-surface);
	      padding: var( --ds-size-space-narrow) var( --ds-size-space-narrow) var( --ds-size-space-wide);
	      margin-bottom: var( --ds-size-space-wide);
	    }
	    .headline{
	    	font-size: var( --ds-size-font-x-large);
	    	font-weight: var( --ds-font-weight-bold);
	    	margin-bottom: var( --ds-size-space-narrow);
	    }
	    .strapline{
	    	font-size: var( --ds-size-font-large);
	    	font-weight: var( --ds-font-weight-light);
	    	margin-top: none;
	    	margin-bottom: var( --ds-size-space-narrow);
	    }

	    :host-context(.brand-acme) .wc-header{
	    	background-color:var( --brand-color-role-surface);
	    	border-bottom-color: var( --brand-color-role-primary);

	    }
	    :host-context(.theme-dark) .wc-header{
	    	background-color:var( --dark-color-role-surface);
	    	border-bottom-color: var( --dark-color-role-primary);

	    }
	</style>
	<div class="wc-header">
		<h1 class="headline">Headline</h1>
		<p class="strapline">strapline</p>
	</div>
	`;	

class WCHeader extends HTMLElement {
	constructor(){
		super();
		this.attachShadow({ mode: 'open'});
		this.shadowRoot.appendChild(templateHi.content.cloneNode(true));
		this.shadowRoot.querySelector('h1').innerText = this.getAttribute('txt-head');
		this.shadowRoot.querySelector('p').innerText = this.getAttribute('txt-strap');
	}
}

window.customElements.define('wc-header', WCHeader);