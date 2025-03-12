const styles = `
<style>
  svg {
    width: 100%;
    height: 100%;
    stroke: inherit;
    fill: inherit;
  }
</style>
`
const template = document.createElement('template')
template.innerHTML = `
${styles}
<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5021 1.40276C10.9577 1.14026 11.4742 1.00208 12 1.00208C12.5258 1.00208 13.0424 1.14027 13.4979 1.4028L13.5 1.404L20.5 5.40399C20.87 5.61763 21.1892 5.90725 21.437 6.25252C21.4973 6.31286 21.5508 6.38195 21.5955 6.45928C21.6341 6.52587 21.664 6.59505 21.6858 6.66555C21.8916 7.07909 21.9995 7.5354 22 7.999V16.0011C21.9995 16.5271 21.8606 17.0438 21.5973 17.4993C21.334 17.9548 20.9556 18.333 20.5 18.5961L20.4961 18.5983L13.5 22.5961L13.4982 22.5971C13.181 22.7799 12.8341 22.9025 12.4752 22.9601C12.3338 23.0366 12.172 23.08 12 23.08C11.828 23.08 11.6662 23.0366 11.5248 22.9601C11.1659 22.9025 10.8191 22.78 10.5019 22.5971L10.5 22.5961L3.50386 18.5983L3.5 18.5961C3.04439 18.333 2.66597 17.9548 2.40269 17.4993C2.13941 17.0438 2.00054 16.5271 2 16.0011V7.999C2.00048 7.53563 2.10827 7.07955 2.31385 6.66618C2.33566 6.59546 2.3657 6.52606 2.40433 6.45928C2.44917 6.38177 2.50282 6.31254 2.56328 6.25211C2.8111 5.90702 3.13012 5.61755 3.5 5.404L3.50386 5.40177L10.5021 1.40276ZM13 20.5783L19.5 16.864L19.5016 16.8631C19.6527 16.7754 19.7783 16.6497 19.8658 16.4984C19.9535 16.3466 19.9998 16.1744 20 15.999V8.53751L13 12.5868V20.5783ZM11 12.5868V20.5783L4.5 16.864L4.49842 16.8631C4.34726 16.7754 4.22169 16.6497 4.13423 16.4984C4.04654 16.3467 4.00025 16.1746 4 15.9994V8.53758L11 12.5868ZM12.5 3.13606L18.961 6.82803L11.9999 10.8547L5.03897 6.82807L11.4961 3.13828L11.5 3.13605C11.652 3.04828 11.8245 3.00208 12 3.00208C12.1755 3.00208 12.348 3.04829 12.5 3.13606Z" fill="#000000"/>
</svg>
`

export class BrandLogo extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  disconnectedCallback() {
    console.log('disconnected')
  }
}

customElements.define('brand-logo', BrandLogo)
