const template = document.createElement('template')
template.innerHTML = `
<style>
  nav {
    display: var(--nav-layout);
    gap: var(--nav-gap);
  }
</style>
<nav>
  <slot></slot>
</nav>
`

export class Nav extends HTMLElement {
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

customElements.define('nav-wrapper', Nav)
