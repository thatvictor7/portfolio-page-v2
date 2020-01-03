import React from 'react'
import { Image, Divider, Header, Icon, Segment } from 'semantic-ui-react'

const style = {
    aboutDivider: {
        color: 'rgba(23, 168, 158, 1)',
        fontSize: '2rem',
    },
    imageTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    aboutContainer: {
        textAlign: 'center',
        marginTop: '3%'
    },
    aboutText: {
        color: 'rrba(1,1,1,1)',
        margin: '3% 20%'
    },
    image: {
        objectFit: 'cover', 
        width: '25vw',
        borderRadius: '5%',
        alignSelf: 'center',
    },
    dividerContainer: {
        marginTop: '3%'
    }
}

function About() {
    return(
        <div>
            <Divider style={style.dividerContainer} horizontal>
                <Header style={style.aboutDivider} as='h4'>
                    {/* <Icon name='user' /> */}
                    About Me:
                </Header>
            </Divider>
            <div style={style.aboutContainer} >
                <div style={style.imageTextContainer}>
                    <Image bordered style={style.image} src={require('./assets/profile-pic.jpg')} size='small' />
                    {/* <Segment> */}

                    <p style={style.aboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque iaculis ante, et ornare dolor vestibulum vitae. Vestibulum placerat malesuada sagittis. Vivamus ac fermentum sapien. Mauris sit amet ipsum ultrices, pellentesque purus in, suscipit lectus. Morbi sagittis lorem ac nisl suscipit tincidunt. Pellentesque vehicula ut metus id lobortis. Etiam id augue felis. Integer aliquam ornare bibendum.</p>
                    {/* </Segment> */}
                </div>
            </div>
        </div>
    )
}

export default About