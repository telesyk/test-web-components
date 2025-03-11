const template = document.createElement('template')
template.innerHTML = `
<style>
  :host {
    display: block;
  }
  .page-wrapper {
    margin: auto;
    padding: var(--container-inner-space);
    width: var(--container-width);
    border-radius: var(--container-border-radius, 0);
    background-color: var(--container-bg-color, transparent);
  }
</style>
<div class="page-wrapper">
  <slot name="header"></slot>
  <slot name="main"></slot>
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

  render() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('page-wrapper', PageWrapper)
