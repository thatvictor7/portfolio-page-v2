import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import '../App.css';

const style = {
    bar: {
        borderRadius: 0,
        // color: 'teal',
    },
    barContainer: {
        borderBottom: 'none',
        position: 'fixed',
        width: '100%',
        top: '0',
        zIndex: '100',
        backgroundColor: '#fff',
        // color: 'black'
        // overflow: 'hidden'
    },
    selection: {
        borderRadius: 0,
        // color: 'red',
        fontSize: '1.3rem',
        // backgroundColor: 'red',
        color: 'black'
        // backgroundColor: 'linear-gradient(to right, #cc0000 0%, #00ff00 100%)'
        // backgroundImage: 'linear-gradient(to right,  red, yellow)'
    },
    logo: {
        // color: 'red',
        width: '2.8rem',
        alignSelf: 'center'
    },
    logoContainer: {
        textAlign: 'center',
        margin: 'auto 0',
        backgroundColor: 'black',
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
                <Segment className='nav' style={style.barContainer} >
                    <Menu color='teal' size='small' style={style.bar} stackable pointing secondary>
                        <div style={style.logoContainer} position='left'> 
                            <img style={style.logo} alt='logo' src={require('./assets/vm-logo.png')} />
                        </div>
                        <Menu.Item
                            name='Main'
                            // link={'#section1'}
                            href={'#main'}
                            position='right'
                            style={style.selection}
                            active={activeItem === 'Main'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='About'
                            // link={'#section1'}
                            href={'#about'}
                            // position='right'
                            style={style.selection}
                            active={activeItem === 'About'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Projects'
                            // position='right'
                            href={'#projects'}
                            style={style.selection}
                            active={activeItem === 'Projects'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Skills'
                            // position='right'
                            href={'#skills'}
                            style={style.selection}
                            active={activeItem === 'Skills'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Contact'
                            // position='right'
                            href={'#contact'}
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