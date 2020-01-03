import React, { Component } from 'react'
import { Divider, Icon, Header, Image, Modal, Segment, Label, Grid, Form, Button } from 'semantic-ui-react'


const style = {
    dividerContainer: {
        // marginTop: '3%',
    },
    aboutDivider: {
        color: 'rgba(23, 168, 158, 1)',
        fontSize: '2rem',
    },
    resume: {
        display: 'inline-block',
        marginTop: '3%',
        marginBottom: '3%',
    },
    fullContainer: {
        marginTop: '3%',
        textAlign: 'center'
    },
    modalHeader: {
        color: 'teal'
    },
    contactSegments: {
        border: 'none',
    }
}

export default class Contact extends Component {

    render() {

        return (
            <div style={style.fullContainer}>
                <Divider style={style.dividerContainer} horizontal>
                    <Header style={style.aboutDivider} as='h4'>
                        {/* <Icon name='file pdf' /> */}
                        Contact:
                    </Header>
                </Divider>

                <Grid stackable container columns={2}>
                    <Grid.Column >
                        <div style={style.resume}>
                            <Segment raised>
                                <Modal trigger={<div> <Label attached='top'><Icon name='zoom-in' />Click resume to enlarge</Label> <Image size='medium' fluid alt='resume' src={require('./assets/vm_resume-sd.png')} /></div>}>
                                    <Modal.Header style={style.modalHeader}>Resumé</Modal.Header>
                                    <Modal.Content>
                                        <Image size="huge" alt='resume' src={require('./assets/vm_resume-sd.png')} />
                                    </Modal.Content>
                                </Modal>
                            </Segment>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                        <Form>
                            <Form.Field required>
                                <label>Name</label>
                                <input placeholder='Name' />
                            </Form.Field>
                            <Form.Field required>
                                <label>Email</label>
                                <input type='email' placeholder='example@email.com' />
                            </Form.Field>
                            <Form.Field required className='form-field'>
                                <label>Message</label>
                                <textarea cols="50" rows="10"></textarea>
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}