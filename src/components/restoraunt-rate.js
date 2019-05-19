import React from "react";
import { Rate } from "antd";

export default function({ reviews }) {
    let rate = 0;
    reviews.forEach(item => {
        rate += item.rating || 0;
    });

    rate = reviews.length ? rate / reviews.length : rate;

    return <Rate value={rate} />;
}
