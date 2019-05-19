import React from "react";
import { Comment } from "antd";

export default function({ review }) {
    return <Comment content={review.text} author={review.user} />;
}
