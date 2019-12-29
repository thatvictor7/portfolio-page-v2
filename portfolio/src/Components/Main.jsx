import React from 'react'
import '../App.css';

const style = {
    title: {
        // color: 'white',
        // backgroundColor: 'black',
        // top: '10%',
        // marginTop: '0',
        gridColumn: '1',
        gridRow: '1',
        // top: '10%'

        // position: 'absolute'
    },
    // name: {
    // //    top: '10%',
    // },
    titleContainer: {
        display: 'grid',
        // marginTop: '0'
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
            <img style={style.title} className='background' alt='background' src={require('./background.png')} />
            <div className='name' style={style.title}>
                <div>
                    <img style={style.logo} alt='logo' src={require('./vm-logo.png')} />
                </div>
                <div>Victor <b>Montoya</b></div>
                <div style={style.job}>Software <b>Developer</b></div>
            </div>
        </div>
    )
}

export default Main