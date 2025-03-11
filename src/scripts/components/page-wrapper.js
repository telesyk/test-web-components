const template = document.createElement('template')
template.innerHTML = `
<style>
  :host {
    display: block;
  }
  .page-wrapper {
    margin: auto;
    padding: var(--container-inner-space);
    max-width: var(--container-width);
    border-radius: var(--container-border-radius, 0);
    background-color: var(--container-bg-color, transparent);
  }
</style>
<div class="page-wrapper">
  <slot name="header"></slot>
  <slot name="main"></slot>
  <slot name="footer"></slot>
</div>
`

export class PageWrapper extends HTMLElement {
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

customElements.define('page-wrapper', PageWrapper)
