class Bar extends HTMLElement {

	constructor(){
	
		super()
	
		this.shadow = this.attachShadow({mode: 'open'})
		
	}
	
  
	attributeChangedCallback(name, oldValue, newValue) {

		this.render()
  
  }
  
  connectedCallback() {
  
  	this.render()
  	
  }
	
	static get observedAttributes() {
	
    return ['position']

  }
  
  get position() {
  
    return this.hasAttribute('position') ? this.getAttribute('position') : 'bottom'
    
  }
  
  set position(val) {
  
    if (val && (val === "top" || val === "bottom") )
    
      this.setAttribute('position', val)
    
    else
    
      this.removeAttribute('position')
  }
  
  render(){
  
  	this.shadow.innerHTML = `
			<style>
				:host{
					position: absolute;
					${this.position}: 0;
					left: 0;z-index: 1000;background: silver;
					box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf;
					border: none;
					border-radius: 0;
					box-sizing: border-box;
					color: transparent;
					min-height: 23px;
					min-width: 75px;
					padding: 12px;
					text-shadow: 0 0 #222;
					-webkit-font-smoothing: none;
					font-family: "Pixelated MS Sans Serif", Arial;
					font-size: 11px;
				}
			</style>
			<slot></slot>
		`;
		
  }
  
}

customElements.define('fos-bar', Bar)
