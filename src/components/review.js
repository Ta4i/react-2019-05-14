import * as React from "react";
import { Rate } from "antd";

const Review = props => {
  return (
    <div className="mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://image.ibb.co/jw55Ex/def_face.jpg"
              alt={"user_avatar"}
              className={"img-fluid"}
            />
          </div>
          <div className="col-md-8">
            <p className="font-weight-bold">{props.user}</p>
            <p className="font-italic">{props.text}</p>
            <Rate disabled defaultValue={props.rating} allowHalf={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
