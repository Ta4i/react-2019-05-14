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
    const { onClick } = this.props;

    const menu = (
      <LocaleConsumer>
        {({ getLocales, setLocale }) => {
          return getMenu(getLocales(), ({ key }) => {
            setLocale(key);
            this.setState({ locale: key });
            onClick && onClick();
          });
        }}
      </LocaleConsumer>
    );

    return [
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          {this.state.locale}
          <Icon type="down" />
        </a>
      </Dropdown>
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
