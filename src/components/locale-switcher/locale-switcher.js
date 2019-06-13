import React, { Component } from "react";
import { Consumer as LocaleConsumer } from "../../localization/context";
import { Menu, Dropdown, Icon, message } from "antd";
import { LOCALE__RU_RU } from "../../localization/textKeys";

function getMenu(locales, onClick) {
  return (
    <Menu onClick={onClick}>
      {locales.map(l => (
        <Menu.Item key={l}>{l}</Menu.Item>
      ))}
    </Menu>
  );
}
class LocaleSwitcher extends Component {
  state = {
    locale: LOCALE__RU_RU
  };

  render() {
    return (
      <LocaleConsumer>
        {localeData => {
          let menu = getMenu(localeData.getLocales(), ({ key }) => {
            localeData.setLocale(key);
            this.setState({ locale: key });
          });
          return (
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                {localeData.locale}
                <Icon type="down" />
              </a>
            </Dropdown>
          );
        }}
      </LocaleConsumer>
    );
  }
}

export default LocaleSwitcher;

//
// const onClick = ({ key }) => {
//     message.info(`Click on item ${key}`);
// };
//
// ReactDOM.render(
//     ,
//     mountNode,
// );
