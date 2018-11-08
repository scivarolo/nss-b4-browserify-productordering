import DOMComponent from "nss-domcomponent"

/* Creates a Review class that takes reviewData and has a method that builds a component for integrating with a Product instance */

class Review {
  constructor(reviewData) {
    this.reviewer = reviewData.reviewer
    this.rating = reviewData.rating
    this.text = reviewData.text
    this.date = reviewData.date
    this.title = reviewData.title
  }

  build() {
    let h1 = new DOMComponent("h3", {classList:"review__title"}, this.title)
    let ratingEl = new DOMComponent("span", {classList:"review__rating"}, this.rating)
    let dateEl = new DOMComponent("span", {classList:"review__date"}, this.date)
    let data = new DOMComponent("p", {}, ratingEl, dateEl)
    let p = new DOMComponent("p", {classList:"review__text"}, this.text)

    let wrapper = new DOMComponent("div", {classList: "review"}, h1, data, p)
    return wrapper
  }
}

export default Review