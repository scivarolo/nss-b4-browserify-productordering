import DOMComponent from "nss-domcomponent"

/* Creates DOMComponents for the site nav */

class navA extends DOMComponent {
  constructor(attributes, ...children) {
    super("a", attributes, ...children)
  }
}

class navLi extends DOMComponent {
  constructor(attributes, ...children) {
    super("li", attributes, ...children)
  }
}

let navLis = [
  new navLi({class: "nav__link"}, new navA({href:"#"}, "Categories")),
  new navLi({class: "nav__link"}, new navA({href:"#"}, "Orders")),
  new navLi({class: "nav__link"}, new navA({href:"#"}, "Log Out"))
]

let navUl = new DOMComponent("ul", {}, ...navLis)

let nav = new DOMComponent("nav", {class: "site-nav", id: "site-nav"}, navUl)

export default nav