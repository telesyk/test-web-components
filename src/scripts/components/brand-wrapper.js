const styles = `
<style>
.header-brand {
  display: var(--brand-layout);
  gap: var(--brand-gap);
  align-items: var(--brand-items-align);
}
</style>
`
const template = document.createElement('template')
template.innerHTML = `
${styles}
<div class="header-brand">
  <slot name="brand-logo"></slot>
  <slot name="brand-name"></slot>
</div>
`

export class BrandWrapper extends HTMLElement {
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

customElements.define('brand-wrapper', BrandWrapper)
