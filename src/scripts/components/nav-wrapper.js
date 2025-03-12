const styles = `
<style>
  * {
    box-sizing: var(--box-sizing-border);
  }
  .header-nav {
    position: var(--nav-position);
    display: var(--nav-layout);
    justify-content: var(--nav-place-content);
    align-items: var(--nav-place-content);
    
    & .nav-menu {
      position: var(--nav-menu-position, initial);
      top: var(--nav-menu-position-y, unset);
      left: var(--nav-menu-position-x, unset);
      width: var(--nav-menu-width, initial);
      height: var(--nav-menu-height, initial);
      padding: var(--nav-menu-inner-space, unset);
      background-color: var(--nav-menu-background, unset);
      transition: all .25s ease-in-out;
    }
  }
  .nav-menu {
    display: var(--nav-menu-layout);
    gap: var(--nav-menu-gap);
    justify-content: var(--nav-menu-place-content);
    flex-direction: var(--nav-menu-direction);
  }
  .nav-button {
    --size: 48px;
    position: relative;
    display: var(--nav-button-layout);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: var(--size);
    height: var(--size);
    cursor: pointer;
    gap: calc(var(--size) / 4);
    padding: calc(var(--size) / 5);
    border: var(--nav-button-border);
    border-radius: var(--nav-button-border-radius);
    background: var(--nav-button-bg-color);

    &::after, &::before {
      content: '';
      display: block;
      height: 3px;
      width: 100%;
      background: var(--nav-button-color);
    }
  }
  @media screen and (max-width: 639.99px) {
    .header-nav {
      --nav-menu-width: 100%;
      --nav-menu-height: 100%;
      --nav-menu-position: fixed;
      --nav-menu-position-y: 100%;
      --nav-menu-position-x: 0;
      --nav-menu-gap: var(--basic-double);;
      --nav-menu-inner-space: var(--basic-double);
      --nav-menu-background: var(--color-basis-gradient);
      
      & .is-visible {
        --nav-menu-position-y: 25%;
      }
    }
  }
  @media screen and (min-width: 640px) {
    .header-nav {
      --nav-menu-direction: row;
      --nav-button-layout: none;
    }
  }
</style>
`
const template = document.createElement('template')
template.innerHTML = `
${styles}
<nav class="nav">
  <div class="nav-menu" role="menu">
    <slot></slot>
  </div>
</nav>
`
const MENU_ID = 'headerMenu'
const MENU_OWNER_ID = 'headerToggler'

export class Nav extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.state = {}
  }

  static observedAttributes = ['data-class', 'data-is-toggle']

  attributeChangedCallback(name, prevValue, newValue) {
    if (name === 'data-class') this.state.className = newValue
    if (name === 'data-is-toggle') this.state.isToggle = newValue
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    const navElement = this.shadowRoot.querySelector('nav')

    if (this.state.hasOwnProperty('className') && this.state.className !== '')
      navElement.classList.add(this.state.className)

    if (this.state.hasOwnProperty('isToggle') && !!this.state.isToggle) {
      this.addToggle(navElement)
    }

    this.shadowRoot.addEventListener('click', this.handleClick)
  }

  disconnectedCallback() {
    console.log('disconnected')
    this.shadowRoot.removeEventListener('click', this.handleClick)
  }

  expandMenu(toggler) {
    const controlElement = this.shadowRoot.querySelector(`#${MENU_ID}`)
    this.state.expandValue =
      toggler.getAttribute('aria-expanded') !== 'true' ? false : true
    controlElement.classList.toggle('is-visible')
    toggler.setAttribute('aria-expanded', !this.state.expandValue)
  }

  handleClick = event => {
    // use arrow-func to bind 'this' of class
    event.preventDefault() /* to ignore links */
    const { target } = event
    if (target.nodeName === 'BUTTON') this.expandMenu(target)
  }

  addToggle(rootElement) {
    const toggleButton = document.createElement('button')
    const spanHidden = document.createElement('span')
    const menuElement = rootElement.querySelector('.nav-menu')
    spanHidden.setAttribute('hidden', true)
    spanHidden.textContent = 'Toggle Menu'
    toggleButton.appendChild(spanHidden)
    toggleButton.classList.add('nav-button')
    toggleButton.setAttribute('id', MENU_OWNER_ID)
    toggleButton.setAttribute('aria-controls', MENU_ID)
    toggleButton.setAttribute('aria-expanded', false)
    menuElement.setAttribute('id', MENU_ID)
    menuElement.setAttribute('aria-owns', MENU_OWNER_ID)

    rootElement.appendChild(toggleButton)
  }
}

customElements.define('nav-wrapper', Nav)
