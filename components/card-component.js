class CardComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['product_brand', 'img', 'alt_img', 'product_category', 'product_name', 'product_description', 'product_price'];
  }

  attributeChangedCallback(atr, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[atr] = newValue;
      this.render();
    }
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = /*html*/ ` 
      <span class="product-brand">${this.product_brand}</span>
      <picture class="product-img-container">
        <img class="product-img" src="${this.img}" alt="${this.alt_img}" />
      </picture>
      <header class="product-info">
        <span class="product-category">${this.product_category}</span>
        <h2 class="product-name">${this.product_name}</h2>
        <p class="product-description">${this.product_description}</p>
        <div class="product-footer">
        <button class="product-button">${this.product_price} - Add to Cart</button>
        </div>
      </header>
      ${this.getStyle()}
    `;
    return template;
  }

  getStyle() {
    return /*html*/ `
    <style>
      :host {
        --cart-color: #f0f0f0;
        min-height: 540px; /* Fuerza altura mínima igual para todos los cards */

        position: relative;
        width: 100%;
        max-width: 400px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        background-color: var(--cart-color, #f0f0f0);
      }

      .product-brand {
        position: absolute;
        top: -15px;
        left: 10px;
        border-radius: 5px;
        font-size: 5em;
        font-weight: bold;
        color: #ffffff61;
      }

      .product-picture {
        width: 100%;
        min-height: 242px;
      }

      .product-img {
        position: relative;
        right: -20px;
        width: 100%;
        height: auto;
        transform: rotate(-35deg);
      }

      .product-info {
        border-radius: 0 0 10px 10px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        flex: 1 1 auto;
        min-height: 260px; /* Asegura que la info tenga altura mínima */
      }

      .product-category {
        font-size: 1.4em;
        color: #888;
      }

      .product-name {
        font-size: 1.8em;
        font-weight: bold;
        color: #333;
        margin: 10px 0;
      }
      .product-description {
        font-size: 1em;
        color: #666;
        margin: 10px 0;
        text-wrap: balance;
        min-height: 60px; /* Altura mínima para la descripción */
        display: flex;
        align-items: center;
        line-height: 1lh;
      }
      .product-footer {
        display: flex;
        justify-content: center;
        padding: 10px;
        margin-top: 10px;
      }
      .product-button {
        background-color: var(--cart-color, #f0f0f0);
        color: white;
        border: none;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1.2em;
        font-weight: bold;
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.4s ease-in-out ;
      }
      .product-button:hover {
        scale: 1.05;
      }
    </style>
    `
  }

  render() {
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('card-component', CardComponent);