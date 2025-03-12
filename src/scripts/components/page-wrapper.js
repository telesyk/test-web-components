const styles = `
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
`
const template = document.createElement('template')
template.innerHTML = `
${styles}
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
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  disconnectedCallback() {
    console.log('disconnected')
  }
}

customElements.define('page-wrapper', PageWrapper)
