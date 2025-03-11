const template = document.createElement('template')
template.innerHTML = `
<style>
  .page-header {
    display: var(--header-layout);
    padding: var(--header-inner-space);
    gap: var(--header-gap);
    justify-content: space-between;
  }
</style>
<header class="page-header">
  <slot name="brand"></slot>
  <slot name="nav"></slot>
</header>
`

export class Header extends HTMLElement {
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

customElements.define('page-header', Header)
