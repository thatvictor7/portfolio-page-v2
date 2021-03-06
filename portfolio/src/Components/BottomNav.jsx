import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import '../App.css'

const style = {
    name: {
        color: 'black',
        margin: 'auto auto auto 1%'
    },
}

function BottomNav() {
    return (
        <Menu size='large' color='teal' borderless stackable icon >
            <div style={style.name}>
                <Icon name='copyright outline' />
                2020 Victor G M
                </div>
            <Menu.Item>
                <a href='https://github.com/thatvictor7' target="_blank">
                    <Icon size='large' color='black' name='github' />
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href='https://www.linkedin.com/in/victor-montoya/' target="_blank">
                    <Icon size='large' 
                        color='black' name='linkedin' />
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href='mailto:montoya.victor7@gmail.com' target="_blank" >
                    <Icon size='large' color='black' name='mail' />
                </a>
            </Menu.Item>
        </Menu>
    )
}

export default BottomNav