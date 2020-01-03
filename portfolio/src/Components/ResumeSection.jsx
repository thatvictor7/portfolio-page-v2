import React, { Component } from 'react'
import { Divider, Icon, Header, Image, Modal } from 'semantic-ui-react'


const style = {
    dividerContainer: {
        // marginTop: '3%',
    },
    aboutDivider: {
        color: 'white',
    },
    resume: {
        display: 'inline-block',
        marginTop: '3%',
        marginBottom: '3%',
    },
    fullContainer: {
        marginTop: '3%',
        textAlign: 'center'
    }
}

export default class ResumeSection extends Component {

    render() {

        return (
            <div style={style.fullContainer}>
                <Divider style={style.dividerContainer} horizontal>
                    <Header style={style.aboutDivider} as='h4'>
                        <Icon name='file pdf' />
                        Resume:
                </Header>
                </Divider>
                <div style={style.resume}>

                    <Modal trigger={<Image size='medium' alt='resume' src={require('./assets/vm_resume-sd.png')} />}>
                        <Modal.Header>Resumé</Modal.Header>
                        <Modal.Content>
                            <Image size='Huge' alt='resume' src={require('./assets/vm_resume-sd.png')} />
                        </Modal.Content>
                    </Modal>
                    <p>Click to enlarge</p>
                </div>
            </div>
        )
    }
}