import React, { Component } from "react";
import { Input, Menu, Dropdown } from "semantic-ui-react";

export default class Navi extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary style={{paddingLeft:'30px'}}>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name="count"
          active={activeItem === "count"}
          onClick={this.handleItemClick}
        >
            count
          <Dropdown>
            <Dropdown.Menu>
              <Dropdown.Item>ebu</Dropdown.Item>
              <Dropdown.Item>ahmet</Dropdown.Item>
              <Dropdown.Item>ramazan</Dropdown.Item>
              <Dropdown.Item>dem</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          
        </Menu.Menu>
      </Menu>
    );
  }
}
