/* Builds the Product Listing and gets it ready for DOM output */
import productData from "./productData"
import Product from "./product"

let product = new Product(productData)
product = product.build()

export default product