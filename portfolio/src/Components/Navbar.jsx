import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import '../App.css';

const style = {
    bar: {
        borderRadius: 0,
    },
    barContainer: {
        borderRadius: 0,
        // position: 'fixed',
        // width: '100%',
        // top: '0',
        // overflow: 'hidden'
    },
    selection: {
        borderRadius: 0,
        color: 'red'
        // backgroundColor: 'red',
        // backgroundColor: 'linear-gradient(to right, #cc0000 0%, #00ff00 100%)'
        // backgroundImage: 'linear-gradient(to right,  red, yellow)'
    },
    logo: {
        color: 'red',
        width: '2.8rem',
        alignSelf: 'center'
    },
    logoContainer: {
        textAlign: 'center',
        margin: 'auto 0'
        // alignSelf: 'center'
    }
}

export default class Navbar extends Component {

    state = { activeItem: '' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        // const { activeB, selectedB } = this.state
        const { activeItem } = this.state

        return (
            <div>
                <Segment style={style.barContainer} inverted>
                    <Menu size='large' style={style.bar} stackable inverted pointing secondary>
                        <div style={style.logoContainer} position='left'> 
                            <img style={style.logo} alt='logo' src={require('./assets/vm-logo.png')} />
                        </div>
                        <Menu.Item
                            name='About'
                            position='right'
                            style={style.selection}
                            active={activeItem === 'About'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Projects'
                            // position='right'
                            style={style.selection}
                            active={activeItem === 'Projects'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Skills'
                            // position='right'
                            style={style.selection}
                            active={activeItem === 'Skills'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Resume'
                            // position='right'
                            style={style.selection}
                            active={activeItem === 'Resume'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>
                </Segment>

        {/* <Menu stackable>
        <Menu.Item>
          <img src='/logo.png' />
        </Menu.Item>

        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Features
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Testimonials
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>
      </Menu> */}
            </div>
        )
    }
}