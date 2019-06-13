import React, { Component } from "react";
import { Consumer as LocaleConsumer } from "../../localization/context";
import { Menu, Dropdown, Icon, message } from "antd";
import { LOCALE__RU_RU } from "../../localization/textKeys";
import LocalizedString from "../../localization/LocalizedString";

function getMenu(locales, onClick) {
  return (
    <Menu onClick={onClick}>
      {locales.map(l => (
        <Menu.Item key={l}>
          <LocalizedString name={l} />
        </Menu.Item>
      ))}
    </Menu>
  );
}
class LocaleSwitcher extends Component {
  state = {
    locale: LOCALE__RU_RU
  };

  render() {
    return [
      <LocaleConsumer>
        {({ getLocales, setLocale }) => {
          let menu = getMenu(getLocales(), ({ key }) => {
            setLocale(key);
            this.setState({ locale: key });
          });

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

//
// const onClick = ({ key }) => {
//     message.info(`Click on item ${key}`);
// };
//
// ReactDOM.render(
//     ,
//     mountNode,
// );
