import React, { Component } from "react";
import { Consumer as LocaleConsumer } from "../../localization/context";
import { Menu, Dropdown, Icon, message } from "antd";
import { LOCALE__RU_RU } from "../../localization/textKeys";
import LocalizedString from "../../localization/LocalizedString";

class LocaleSwitcher extends Component {
  state = {
    locale: LOCALE__RU_RU
  };

  getMenu = function({ getLocales, setLocale }) {
    return (
      <Menu
        onClick={({ key }) => {
          setLocale(key);
          this.setState({ locale: key });
        }}
      >
        {getLocales().map(l => (
          <Menu.Item key={l}>
            <LocalizedString name={l} />
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  render() {
    return [
      <LocaleConsumer>
        {localeContext => {
          let menu = this.getMenu(localeContext);
          return (
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                <LocalizedString name={this.state.locale} />
                <Icon type="down" />
              </a>
            </Dropdown>
          );
        }}
      </LocaleConsumer>
    ];
  }
}

export default LocaleSwitcher;
