
const templateHi = document.createElement('template');
templateHi.innerHTML = `
   <style>
	    :host {
	      font-family: var(--ds-font-face-sans-serif);
	    }
	    .headline{
	    	font-size: var( --ds-size-font-large);
	    	font-weight: var( --ds-font-weight);
	    	background-color: var(--ds-color-role-surface);
	    }
	    .strapline{
	    	font-size: var( --ds-size-font-large);
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