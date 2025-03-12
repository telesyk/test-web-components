const styles = `
<style>
.page-main {
  display: var(--main-layout);
  grid-template-columns: var(--main-template-col);
  padding: var(--main-inner-space) 0;
  border-bottom: var(--main-border);
  border-top: var(--main-border);
}
</style>
`
const template = document.createElement('template')
template.innerHTML = `
${styles}
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
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  disconnectedCallback() {
    console.log('disconnected')
  }
}

customElements.define('page-main', MainWrapper)
