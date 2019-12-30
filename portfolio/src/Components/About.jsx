import React from 'react'
import { Grid, Image, Divider, Header, Icon } from 'semantic-ui-react'

const style = {
    skillsText: {
        color: 'white',
    },
    imageTextContainer: {
        // alignSelf: 'center',
        display: 'inline-block',
    },
    aboutContainer: {
        textAlign: 'center',
    },
    aboutText: {
        color: 'white',
        alignSelf: 'center',
    }
}

function About() {
    return(
        <div>
            <Divider horizontal>
                <Header style={style.skillsText} as='h4'>
                    <Icon name='user' />
                    About Me:
                </Header>
            </Divider>
            <div style={style.aboutContainer} >
                <div style={style.imageTextContainer}>

                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular />
                    <p style={style.aboutText}>text</p>
                </div>
            </div>
        </div>
    )
}

export default About