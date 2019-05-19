import React, { Component } from "react";

const ReviewsDecorator = OriginalComponent => {
  return class extends Component {
    render() {
      return <OriginalComponent {...this.props} {...this.state} />;
    }
  };
};

export default ReviewsDecorator;

// внизу старая версия декоратора, если бы мы создавали обработчик в декораторе и передавали дальше в props
// я изменил что бы можно било управлять с Restaurant отображением ReviewsList

// const ReviewsDecorator = OriginalComponent => {
// 	return class extends Component {
// 		state = {
// 			openReviews: false
// 		};
//
//
// 		toggleOpenReviews = () => {
// 			this.setState({
// 				openReviews: !this.state.openReviews
// 			})
// 		};
//
// 		render() {
//
// 			return (
// 				<OriginalComponent
// 					{...this.props}
// 					{...this.state}
// 					toggleOpenReviews = { this.toggleOpenReviews }
// 				/>
// 			);
// 		}
// 	};
// };
//
// export default ReviewsDecorator;
