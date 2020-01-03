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
    job: {
        paddingTop: '2.5vw'
    },
    logo: {
        width: '15vw',
        marginBottom: '1vh',
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
                <div style={style.name}>Victor <b>Montoya</b></div>
                <div style={style.job}>Software <b>Developer</b></div>
            </div>
        </div>
    )
}

export default Main