const template = document.createElement('template')
template.innerHTML = `
<style>
  .page-footer {
    display: var(--footer-layout);
    flex-direction: var(--footer-layout-direction);
    padding: var(--footer-inner-space);
    gap: var(--footer-gap);
    justify-content: var(--footer-justify-content);
    align-items: var(--footer-align-items);
  }
</style>
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
    this.render()
  }

  disconnectedCallback() {
    console.log('disconnected')
  }

  render() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('page-footer', Footer)
