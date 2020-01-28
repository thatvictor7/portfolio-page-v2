import React, { Component } from 'react'
import { Grid, Divider, Header, Icon, Card, Button, Accordion } from 'semantic-ui-react'

const style = {
    skillsText: {
        color: 'rgba(23, 168, 158, 1)',
        fontSize: '3.0rem',
        fontWeight: '700',
        textAlign: 'left',
    },
    dividerContainer: {
        // marginTop: '5%',
        paddingLeft: '5%'
    },
    card: {
        display: 'flex',
        margin: '8% 0',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        // boxShadow: "5px 10px 15px #000",
        display: 'inline-block',
    },
    gridContainer: {
        marginTop: '3%',
        marginBottom: '3%',
        textAlign: 'center'
    },
    segmentProject: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        // fontSize: '1.5rem',
        // height: '37em',
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },
}

const projects = [
    {
        name: 'Denver Helps',
        tech: ['React.JS |', ' Material UI |', ' Twilio |', ' React-Router'],
        description: 'Mile High Hacks Hackathon group project, received 1st place. Built responsive website with React.JS and Material UI, built textbot with Twilio. This project helps homeless people of Denver, they can find shelter, food, or mental/medical care from the website or text chatbot. Used machine learning on textbot to generate appropriate response according to certain keywords texted from user.',
        github: 'https://github.com/joelbrewer/mile-high-hackathon-2019',
        image: require('./assets/denverHelps.png'),
        website: 'https://www.denverhelps.com/',
    },
    {
        name: 'Loan Calculator',
        tech: ['React Native /', ' Expo /', ' Google Admob'],
        description: 'Mobile app built with React-Native, published to Google Play Store for Android devices.This app allows you to calculate your loan interest and includes an easy to read monthly payment chart with principal and interest amounts.',
        github: 'https://github.com/thatvictor7/loanCalculatorApp2.0',
        image: require('./assets/loanApp.png'),
        website: 'https://play.google.com/store/apps/details?id=com.victory.yourloancalculator',
    },
    {
        name: 'Inbox',
        tech: ['React.JS /', ' CSS'],
        description: 'Gmail clone app. It allows you to add, delete, star, and label messages.',
        github: 'Gmail clone app. It allows you to add, delete, star, and label messages.',
        image: require('./assets/inbox.png'),
        website: '',
    },
    {
        name: 'Notesy',
        tech: ['React.JS /', ' Material UI /', ' Node.JS /', ' Knex.JS /', ' PostgreSQL /', ' Axios'],
        description: 'Responsive web app, allows you have an account, create, update, view existing notes by sending request to server. API server created with Node.JS, Knex.JS and PostgreSQL.',
        github: 'https://github.com/thatvictor7/NotesAppReact',
        image: require('./assets/notesy.png'),
        website: '',
    },
    {
        name: 'Bank API',
        tech: [`Node.JS /`, ` Express.JS ${"\n"}`],
        description: `API that holds user data and transactions.`,
        github: 'https://github.com/thatvictor7/Bank-API',
        image: require('./assets/bank-api.png'),
        website: '',
    },
    {
        name: 'Angular Issues',
        tech: ['React.JS /', ' API Integration /', ' Bootstrap'],
        description: "This is a React.js project using Bootstrap to style. It integrates Angular's Github issues repo, and displays issues for past 7 days.",
        github: 'https://github.com/thatvictor7/angular-issues',
        image: require('./assets/angularIssues.png'),
        website: 'https://condemned-good-bye.surge.sh/',
    },
]

// Images for cards are 900px by 600px

export default class Projects extends Component {

    state = { activeIndex: -1 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {

        const { activeIndex } = this.state
        return (
            <div>
                <Divider style={style.dividerContainer} hidden horizontal>
                    <Header style={style.skillsText} as='h4'>
                        Projects<b style={{letterSpacing: '-8px'}}>___</b>
                    </Header>
                </Divider>
                <Grid style={style.gridContainer} container columns={3} stackable>
                    {projects.map((p, i) => {
                        return <Grid.Column>
                            <Card
                                raised
                                style={style.card}
                                image={p.image}
                                header={p.name}
                                meta={p.tech}
                                description={
                                    <Accordion>
                                        <Accordion.Title
                                            active={activeIndex === i}
                                            index={i}
                                            onClick={this.handleClick} >
                                            <Icon name='dropdown' />
                                            Show more
                                            </Accordion.Title>
                                        <Accordion.Content active={activeIndex === i}>
                                            <p>{p.description}</p>
                                            <a href={p.github} rel="noopener noreferrer" target="_blank">
                                                <Button>
                                                    <Icon name='github' />
                                                    Github
                                                    </Button>
                                            </a>
                                            {p.website ? <a target="_blank" rel="noopener noreferrer" href={p.website}>
                                                <Button color='teal'>
                                                    <Icon name='external' />
                                                    Visit Website
                                                    </Button>
                                            </a> : null}
                                        </Accordion.Content>
                                    </Accordion>
                                }
                            />
                        </Grid.Column>
                    })
                    }
                </Grid>
            </div>
        )
    }
}