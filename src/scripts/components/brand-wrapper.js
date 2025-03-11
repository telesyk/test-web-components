const template = document.createElement('template')
template.innerHTML = `
<style>
.header-brand {
  display: var(--brand-layout);
  gap: var(--brand-gap);
  align-items: var(--brand-items-align);
}
</style>
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
    this.render()
  }

  disconnectedCallback() {
    console.log('disconnected')
  }

  render() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('brand-wrapper', BrandWrapper)
