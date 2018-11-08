import Review from "./review"
import reviewData from "./reviewData"
import DOMComponent from "nss-domcomponent"

let reviewsArray = []

reviewData.forEach(review => {
  let singleReview = new Review(review)
  reviewsArray.push(singleReview.build())
})

let reviews = new DOMComponent("section", {classList: "reviews"}, new DOMComponent("h2", "Reviews"), ...reviewsArray)

export default reviews