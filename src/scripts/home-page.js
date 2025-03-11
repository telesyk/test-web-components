import {
  PageWrapper,
  Heeader,
  MainWrapper,
  Nav,
  BrandWrapper,
  BrandLogo,
} from './components/index.js'

const template = document.createElement('template')
template.innerHTML = `
  <style>
    .main-additional {
      grid-column: var(--main-additional-column-position, initial);
      grid-row: var(--main-additional-row-position, initial);
      padding: var(--main-additional-inner-space, initial);
      border-radius: var(--main-additional-border-radius, initial);
      background-color: var(--main-additional-bg-color, initial);
    }
    .main-content {
      grid-column: var(--main-content-column-position, initial);
      grid-row: var(--main-content-row-position, initial);
    }
    .main-content-image {
      width: var(--main-image-width);
      border-radius: var(--main-image-border-radius);
      float: var(--main-image-float, none);
      margin-inline-end: var(--main-image-margin-end, 0);
      margin-block-end: var(--main-image-margin-end, 0);
    }
    .main-content-text {
      margin: var(--main-text-margin, revert);
      line-height: var(--main-text-line-height, initial);
    }
    .brand-logo {
      width: var(--brand-logo-size);
      stroke: var(--brand-logo-stroke);
    }
    .brand-logo + .brand-name {
      padding-left: var(--basic);
      border-left: var(--basic-border-width) solid var(--basic-border-color);
    }
    [slot="copyright"] {
      font-size: var(--footer-copyright-text-size);
    }
    nav-wrapper a {
      color: var(--nav-link-color);
      text-decoration: var(--nav-link-decoration);

      &:hover {
        --nav-link-color: var(--text-color);
      }
    }
  </style>
  <page-wrapper>
    <page-header slot="header">
      <brand-wrapper slot="brand">
        <brand-logo slot="brand-logo" class="brand-logo"></brand-logo>
        <div slot="brand-name" class="brand-name">Brand</div>
      </brand-wrapper>
      <nav-wrapper slot="nav" data-class="header-nav">
        <a title="Service page" href="#">Service</a>
        <a title="Company page" href="#">Company</a>
        <a title="Contact page" href="#">Contact</a>
      </nav-wrapper>
    </page-header>
    <page-main slot="main">
      <section slot="main-additional" class="main-additional">
        <nav-wrapper slot="nav" data-class="main-nav">
          <a href="#">Some informative link</a>
          <a href="#">Other link</a>
          <a href="#">And yet another info here</a>
        </nav-wrapper>
      </section>
      <section slot="main-content" class="main-content">
        <img
          src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="sample image" class="main-content-image" />
        <p class="main-content-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus odit
          quaerat asperiores debitis,
          molestiae maiores deleniti saepe cumque tempore. Atque ut quisquam at perspiciatis natus quos id. Asperiores,
          enim officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates sunt laborum inventore
          ipsum, sint adipisci in rerum consectetur soluta at alias perspiciatis repudiandae tenetur maxime esse id
          optio quo excepturi!</p>
      </section>
    </page-main>
    <page-footer slot="footer">
      <brand-wrapper slot="brand">
        <brand-logo slot="brand-logo" class="brand-logo"></brand-logo>
        <div slot="brand-name" class="brand-name">Brand</div>
      </brand-wrapper>
      <div slot="copyright">
        <p>Copyright @ 2025</p>
      </div>
    </page-footer>
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

  disconnectedCallback() {
    console.log('disconnected')
  }

  render() {
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('home-page', HomePage)
