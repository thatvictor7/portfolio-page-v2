import React from 'react'
import { Grid, Image, Divider, Header, Icon } from 'semantic-ui-react'

const style = {
    aboutDivider: {
        color: 'white',
    },
    imageTextContainer: {
        // display: 'inline-block',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    aboutContainer: {
        textAlign: 'center',
        marginTop: '3%'
    },
    aboutText: {
        color: 'white',
        margin: '3% 20%'
    },
    image: {
        objectFit: 'cover', 
        width: '25vw',
        borderRadius: '5%',
        alignSelf: 'center',
    }
}

function About() {
    return(
        <div>
            <Divider horizontal>
                <Header style={style.aboutDivider} as='h4'>
                    <Icon name='user' />
                    About Me:
                </Header>
            </Divider>
            <div style={style.aboutContainer} >
                <div style={style.imageTextContainer}>
                    <Image bordered style={style.image} src={require('./profile-pic.jpg')} size='small' />
                    <p style={style.aboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque iaculis ante, et ornare dolor vestibulum vitae. Vestibulum placerat malesuada sagittis. Vivamus ac fermentum sapien. Mauris sit amet ipsum ultrices, pellentesque purus in, suscipit lectus. Morbi sagittis lorem ac nisl suscipit tincidunt. Pellentesque vehicula ut metus id lobortis. Etiam id augue felis. Integer aliquam ornare bibendum.</p>
                </div>
            </div>
        </div>
    )
}

export default About