import React from "react";
import { Modal, Input, Rate } from "antd";

export default function AddReview({ visible, handleOk, handleCancel }) {
  const { TextArea } = Input;
  const [review, setReview] = React.useState("");
  const [name, setName] = React.useState("");
  const [rating, setRating] = React.useState(0);

  return (
    <Modal
      title="Add restaurant review"
      visible={visible}
      onOk={() => {
        handleOk(review, name, rating);
      }}
      onCancel={handleCancel}
    >
      <Input
        onChange={event => setName(event.target.value)}
        placeholder="Write your name"
      />
      <TextArea
        onChange={event => setReview(event.target.value)}
        placeholder="Add review here"
        rows={4}
      />
      <Rate allowClear allowHalf onChange={setRating} />
    </Modal>
  );
}
