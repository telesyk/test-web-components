const styles = `
<style>
.page-header {
  display: var(--header-layout);
  padding: var(--header-inner-space);
  gap: var(--header-gap);
  justify-content: var(--header-justify-content);
  align-items: var(--header-place-content);
}
</style>
`
const template = document.createElement('template')
template.innerHTML = `
${styles}
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
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  disconnectedCallback() {
    console.log('disconnected')
  }
}

customElements.define('page-header', Header)
