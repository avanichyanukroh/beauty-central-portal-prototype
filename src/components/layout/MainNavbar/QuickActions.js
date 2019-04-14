import React, { Component } from 'react';

import {
    NavItem,
    NavLink,
    Button,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
  } from "shards-react";

class QuickActions extends Component {
    render() {
        return (
            <NavItem className="border-right dropdown notifications mr-auto" style={{cursor: "pointer"}}>
                <NavLink
                className="nav-link-icon text-center"
                onClick={this.toggleNotifications}
                >
                    <Dropdown open={false} group>
                            <div className="my-auto text-muted">Quick Action</div>
                            <i className="material-icons mb-1 text-light">arrow_drop_down</i>
                        <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavLink>
            </NavItem>
        );
    }
}

export default QuickActions;
