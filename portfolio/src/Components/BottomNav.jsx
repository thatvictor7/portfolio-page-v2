import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import '../App.css'

const style = {
    name: {
        color: 'white',
        // textAlign: 'center'
        margin: 'auto auto auto 1%'
    },
    socialIcons: {
        // display: 'flex',
        // flexDirection: 'row'
    },
    barContainer: {
        // display: 'flex',
        // flexDirection: 'row' 
    }
}

function BottomNav() {
    return(
        // <div style={style.barContainer}> 
            <Menu size='large' stackable icon inverted>
                {/* <Icon name='copyright outline' />
                <Menu.Item
                    name='©Victor Montoya'
                >
                </Menu.Item> */}
                <div style={style.name}>
                    <Icon name='copyright outline' />
                    2020 Victor Montoya
                </div>
                {/* <div style={style.socialIcons}> */}

                
                <Menu.Item
                    // position='right'
                    >
                    <Icon size='large' name='github' />
                </Menu.Item>
                <Menu.Item
                    
                    >
                <Icon size='large' name='linkedin' />
                </Menu.Item>
                <Menu.Item

                >
                <Icon size='large' name='mail' />
                </Menu.Item>
                {/* </div> */}
            </Menu>
        // </div>
    )
}

export default BottomNav