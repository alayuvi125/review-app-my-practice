// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onClickLeftArrow = () => {
    const {count} = this.state
    if (count === 0) {
      this.setState({count: 0})
    } else {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  onCLickRightArrow = () => {
    const {count} = this.state
    if (count === 3) {
      this.setState({count: 3})
    } else {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    console.log(count)
    const {reviewsList} = this.props
    console.log(reviewsList)

    const displayItems = () => {
      const {imgUrl, username, companyName, description} = reviewsList[count]

      return (
        <div className="reviews-container">
          <img src={imgUrl} alt={username} className="profile-image" />
          <p className="username">{username}</p>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            className="button"
            type="button"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="image"
            />
          </button>
          {displayItems()}
          <button
            className="button"
            type="button"
            data-testid="rightArrow"
            onClick={this.onCLickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="image"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
