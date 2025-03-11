const template = document.createElement('template')
template.innerHTML = `
<style>
  :host {
    display: block;
  }
</style>
<main class="page-main">
  <slot name="main-additional"></slot>
  <slot name="main-content"></slot>
</main>
`

export class MainWrapper extends HTMLElement {
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

customElements.define('page-main', MainWrapper)
