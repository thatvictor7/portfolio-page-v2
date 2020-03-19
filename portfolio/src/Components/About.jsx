import React from 'react'
import { Image, Divider, Header } from 'semantic-ui-react'

const style = {
    aboutDivider: {
        color: 'rgba(23, 168, 158, 1)',
        fontSize: '3.8rem',
        // fontWeight: '700',
        textAlign: 'left',
    },
    imageTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // textAlign: 'center'
    },
    aboutContainer: {
        textAlign: 'center',
        marginTop: '5%'
    },
    aboutText: {
        color: 'rrba(1,1,1,1)',
        margin: '5% 20%',
        fontSize: '1.8rem',
        textAlign: 'left',
    },
    image: {
        objectFit: 'cover', 
        width: '35%',
        borderRadius: '5%',
        alignSelf: 'center',
        // 0 2px 4px 0 rgba(34, 36, 38, .12)
        boxShadow: '0 2px 4px 0 rgba(34, 36, 38, .22)',
    },
    dividerContainer: {
        marginTop: '5%',
        paddingLeft: '5%',
        // fontFamily: 'Raleway'
    },
    nameText: {
        margin: '0',
    },
    lastName: {
        margin: '0',
        fontWeight: '800',
    }
}

function About() {
    return(
        <div>
            <Divider style={style.dividerContainer} horizontal>
                <Header style={style.aboutDivider} as='h4'>
                    <div>
                        {/* <div style={style.nameText}>Victor<b style={{ letterSpacing: '-8px' }}>---</b></div> */}
                        <div style={style.nameText}>Victor</div>
                        {/* <div style={style.lastName}>Montoya</div> */}
                    </div>
                </Header>
            </Divider>
            <div style={style.aboutContainer} >
                <div style={style.imageTextContainer}>
                    <Image bordered className='profile-image' style={style.image} src={require('./assets/profile-pic.jpg')} size='small' />
                    <p style={style.aboutText}>Hello, my name is Victor and I'm a Denver, CO based software developer.  I enjoy creating beautiful , easy to use and effective products. If you are looking for someone to design and develop an idea of yours, I can help you. </p>
                </div>
            </div>
        </div>
    )
}

export default About