import DOMComponent from "nss-domcomponent"
import nav from "./nav"

let siteTitle = new DOMComponent("h1", {}, "Betsy")
let header = new DOMComponent("header", {classList: "site-header"}, siteTitle, nav)

export default header