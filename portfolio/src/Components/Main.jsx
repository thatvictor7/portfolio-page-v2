import React from 'react'
import '../App.css';

const style = {
    title: {
        gridColumn: '1',
        gridRow: '1',
    },
    titleContainer: {
        display: 'grid',
        // marginTop: '8%'
    },
    description: {
        paddingTop: '2.5vw',
        marginTop: '4%',
        fontSize: '3.8rem',
        width: '50%',
        // marginTop: '3%',
        // marginLeft: '2%',
        textAlign: 'left',
        lineHeight: '4.2rem',
        // fontWeight: '700',
    },
    name: {
        fontSize: '7.8rem',
        marginTop: '4%',
        marginBottom: '1%',
        // marginLeft: '4%',
        textAlign: 'left',
    },
    logo: {
        width: '15vw',
        marginBottom: '1%',
    }
}

function Main() {
    return(
        <div style={style.titleContainer}>
            <img style={style.title} className='background' alt='background' src={require('./assets/background.png')} />
            <div className='name' style={style.title}>
                <div>
                    <img style={style.logo} alt='logo' src={require('./assets/vm-logo.png')} />
                </div>
                <div className='name-container' style={style.name}>victor<b>m.io</b></div>
                <div className='description-container' style={style.description}>Hello and welcome to my homepage!</div>
            </div>
        </div>
    )
}

export default Main