const template = document.createElement('template')
template.innerHTML = `
<style>
  .nav {
    display: var(--nav-layout);
    gap: var(--nav-gap);
    justify-content: var(--nav-justify);
    flex-direction: var(--nav-direction);
  }
  @media screen and (min-width: 720px) {
    .header-nav {
      --nav-direction: row;
    }
  }
</style>
<nav class="nav">
  <slot></slot>
</nav>
`

export class Nav extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.state = {}
  }

  static observedAttributes = ['data-class']

  attributeChangedCallback(name, prevVal, newVal) {
    if (name === 'data-class') this.updateClassName(newVal)
  }

  connectedCallback() {
    this.render()

    const navElement = this.shadowRoot.querySelector('nav')

    if (this.state?.className !== '')
      navElement.classList.add(this.state.className)
  }

  disconnectedCallback() {
    console.log('disconnected')
  }

  updateClassName(value) {
    this.state.className = value
  }

  render() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('nav-wrapper', Nav)
