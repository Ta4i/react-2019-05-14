import React from "react";
import LocalizedString from "../../localization/LocalizedString";
import { THANK_YOU_PAGE__TITLE } from "../../localization/textKeys";

function OrderCompletePage(props) {
  return (
    <div>
      <h2 style={{ textAlign: "center", padding: "12px" }}>
        <LocalizedString name={THANK_YOU_PAGE__TITLE} />
      </h2>
    </div>
  );
}

export default OrderCompletePage;
