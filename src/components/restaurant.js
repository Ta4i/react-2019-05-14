import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import RestorauntRate from "./restoraunt-rate";
import ReviewsList from "./reviews-list";
import { visibility } from "../decorators/visibility";

import { Avatar, Button, Card } from "antd";

class Restaurant extends PureComponent {
    render() {
        const { image, name, menu, isMenuOpen, reviews, isVisible } = this.props;

        const CardTitle = (
            <h3>
                <Avatar src={image} size={64} alt={name} shape="square" /> {name} <RestorauntRate reviews={reviews} />
            </h3>
        );

        return (
            <div>
                <Card title={CardTitle} size={"small"}>
                    <Button size="small" onClick={this.handleToggleOpenClick}>
                        {isMenuOpen ? "Close menu" : "Open menu"}
                    </Button>
                    <Button size="small" onClick={this.handleToggleVisibleItem}>
                        {isVisible ? "Close reviews" : "Open review"}
                    </Button>
                    {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
                    {isVisible ? <ReviewsList reviews={reviews} /> : null}
                </Card>
            </div>
        );
    }

    handleToggleOpenClick = () => {
        this.props.toggleOpenMenu(this.props.id);
    };

    handleToggleVisibleItem = () => {
        this.props.toggleVisibleItem();
    };
}

export default visibility(Restaurant);
