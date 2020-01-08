import React, { Component } from 'react'
import {
    Divider,
    Icon,
    Header,
    Image,
    Modal,
    Segment,
    Label,
    Grid,
    Form,
    Button,
    Message
} from 'semantic-ui-react'
import axios from 'axios';


const style = {
    dividerContainer: {
        paddingLeft: '5%'
    },
    contactDivider: {
        color: 'rgba(23, 168, 158, 1)',
        fontSize: '3.0rem',
        fontWeight: '700',
        textAlign: 'left',
    },
    resume: {
        display: 'inline-block',
        marginTop: '14%',
        marginBottom: '8%',
    },
    fullContainer: {
        margin: '7% 0',
        textAlign: 'center'
    },
    modalHeader: {
        color: 'teal'
    },
    contactForm: {
        marginTop: '12%',
        marginBottom: '8%',
        fontSize: '1.3 rem'
        // color: 'rgba(23, 168, 158, 1)'
        // boxShadow: '0 2px 4px 0 rgba(34, 36, 38, .12)',
    },
    field: {
        color: 'rgba(31, 41, 41, 0.927)'
    },
    message: {
        position: 'absolute',
        bottom: '.5%',
        zIndex: '1',
        width: '100%'
    },
    formDescription: {
        fontSize: '1.6rem'
    }
}

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            buttonColor: '',
            fontColor: '',
            sent: false
        }
    }

    render() {

        const isEnabled = this.state.message.length > 0 && this.state.name.length > 0 && this.state.email.length > 0 ? true : false
        const { sent, name, email } = this.state

        return (
            <div style={style.fullContainer}>
                <Divider hidden style={style.dividerContainer} horizontal>
                    <Header style={style.contactDivider} as='h4'>
                        Contact<b style={{ letterSpacing: '-8px' }}>___</b>
                    </Header>
                </Divider>

                <Grid stackable container columns={2}>
                    <Grid.Column >
                        <div style={style.resume}>
                            <Segment>
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
                        <Form style={style.contactForm} onSubmit={this.handleSubmit} method="POST" success={sent}>
                            <p style={style.formDescription}>Interested in working together? Fill out the form below and let's have a chat.</p>
                            <Form.Field required>
                                <label style={style.field}>Name</label>
                                <input name='name' type='text' onChange={this.handleName} value={name} placeholder='Name' />
                            </Form.Field>
                            <Form.Field required>
                                <label value={this.state.email} style={style.field}>Email</label>
                                <input onChange={this.handleEmail} type='email' value={email} placeholder='example@email.com' aria-describedby="emailHelp" />
                            </Form.Field>
                            <Form.Field required className='form-field'>
                                <label style={style.field}>Message</label>
                                <textarea onChange={this.handleMessage} value={this.state.message} cols="50" rows="10" />
                            </Form.Field>
                            <Message
                                success
                                color='teal'
                                style={style.message}
                                header='Your form was succesfully submited'
                                content='I will be getting in touch soon!'
                            />
                            <Button onClick={this.handleButtonStyle} style={{ backgroundColor: this.state.buttonColor, color: this.state.fontColor }} disabled={!isEnabled} content='submit' type='Submit'>Submit</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

    handleClose = () => this.setState({ open: false })

    handleEmail = (e) => {
        this.setState({ email: e.target.value })
        this.handleButtonStyle()
    }

    handleName = (e) => {
        this.setState({ name: e.target.value })
        this.handleButtonStyle()
    }

    handleMessage = (e) => {
        this.setState({ message: e.target.value })
        this.handleButtonStyle()
    }

    handleButtonStyle = () => {
        if (this.state.message.length > 0 && this.state.name.length > 0 && this.state.email.length > 0) {
            this.setState({ buttonColor: 'rgba(23, 168, 158, 1)', fontColor: 'white' })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            url: "https://portfolio-contact-nodemail.appspot.com/send",
            // url: "http://localhost:8080/send",
            data: {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            }
        }).then((response) => {
            if (response.data.status === 'success') {
                console.log("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm = () => {
        this.setState({ name: '', email: '', message: '', sent: true })
    }
}