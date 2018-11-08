/* Builds the Product Listing and gets it ready for DOM output */
import productData from "./productData"
import Product from "./product"
import reviews from "./reviewListing"

let product = new Product(productData)
product = product.build(reviews)

export default product