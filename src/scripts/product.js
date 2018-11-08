import DOMComponent from "nss-domcomponent"

class Product {
  constructor(productData) {
    this.title = productData.title
    this.description = productData.description
    this.price = productData.price
    this.quantity = productData.quantity
    this.image = productData.image
  }

  build(reviews) {
    let title = new DOMComponent("h2", {id:"product-title", classList:"product-title"}, this.title)
    let image = new DOMComponent("img", {src: this.image})
    let description = new DOMComponent("p", {id:"product-description", classList:"product-description"}, this.description)
    let price = new DOMComponent("p", {id:"product-price", classList: "product-price"}, `Price: $${this.price}`)
    let quantity = new DOMComponent("p", {id: "product-quantity", classList: "product-quantity"}, `Hurry! Only ${this.quantity} left!`)
    let reviewsEl = reviews
    let wrapper = new DOMComponent("article", {classList: "product", id: "product"}, title, image, description, price, quantity, reviewsEl)
    return wrapper
  }
}

export default Product