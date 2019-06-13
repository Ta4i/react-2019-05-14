import React from "react";
import PropTypes from "prop-types";
import { Consumer as LocaleConsumer } from "./context";

const LocalizedString = ({ name }) => {
  return (
    <LocaleConsumer>{localeData => localeData.getValue(name)}</LocaleConsumer>
  );
};

LocalizedString.propTypes = {
  name: PropTypes.string.isRequired
};

export default LocalizedString;
