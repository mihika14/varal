import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <Menu.Item>
                    <img src = '../Assests/Group 114.png' alt='' />
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='Home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Services'
                        active={activeItem === 'Services'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Pricing'
                        active={activeItem === 'pricing'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='About US'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item>
                        <Button primary>Start a company</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

        )
    }
}
