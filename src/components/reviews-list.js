import React, { PureComponent } from "react";
import { List } from "antd";
import Review from "./reviews";

class ReviewsList extends PureComponent {
    render() {
        const { reviews } = this.props;

        return (
            <List
                dataSource={reviews}
                renderItem={item => {
                    return (
                        <List.Item>
                            <Review review={item} />
                        </List.Item>
                    );
                }}
            />
        );
    }
}

export default ReviewsList;
