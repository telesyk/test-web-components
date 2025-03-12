const styles = `
<style>
.page-footer {
  display: var(--footer-layout);
  flex-direction: var(--footer-layout-direction);
  padding: var(--footer-inner-space);
  gap: var(--footer-gap);
  justify-content: var(--footer-place-content);
  align-items: var(--footer-place-content);
}
</style>
`
const template = document.createElement('template')
template.innerHTML = `
${styles}
<footer class="page-footer">
  <slot name="brand"></slot>
  <slot name="copyright"></slot>
</footer>
`

export class Footer extends HTMLElement {
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

customElements.define('page-footer', Footer)
