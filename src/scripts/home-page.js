import { PageWrapper, Heeader, MainWrapper, Nav } from './components/index.js'

const template = document.createElement('template')
template.innerHTML = `
  <style>
    :host {
      display: block;
    }
  </style>
  <page-wrapper>
    <page-header slot="header">
      <div slot="brand">Logo|Brand</div>
      <nav-wrapper slot="nav">
        <a title="Service page" href="#">Service</a>
        <a title="Company page" href="#">Company</a>
        <a title="Contact page" href="#">Contact</a>
      </nav-wrapper>
    </page-header>
    <page-main slot="main">
      <section slot="main-additional" class="main-additional">
        <nav-wrapper slot="nav">
          <a href="#">Some informative link</a>
          <a href="#">Other link</a>
          <a href="#">And yet another info here</a>
        </nav-wrapper>
      </section>
      <section slot="main-content" class="main-coontent">
        <img
          src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="sample image" class="" />
        <p class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus odit
          quaerat asperiores debitis,
          molestiae maiores deleniti saepe cumque tempore. Atque ut quisquam at perspiciatis natus quos id. Asperiores,
          enim officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates sunt laborum inventore
          ipsum, sint adipisci in rerum consectetur soluta at alias perspiciatis repudiandae tenetur maxime esse id
          optio quo excepturi!</p>
      </section>
    </page-main>
  </page-wrapper>
`

export class HomePage extends HTMLElement {
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

customElements.define('home-page', HomePage)
