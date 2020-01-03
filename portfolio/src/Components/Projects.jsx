import React from 'react'
import { Grid, Segment, Divider, Header, Icon, Card } from 'semantic-ui-react'

// 'https://dummyimage.com/600x400/000/fff'

const style = {
    skillsText: {
        color: 'white',
        // backgroundColor: 'red'
    },
    card: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        height: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        // margin: '1px 0'
        // boxShadow: "5px 10px 15px #000",
    },
    gridContainer: {
        marginTop: '3%',
        marginBottom: '3%',
    },
    segment: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        height: '37em',
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },
}

const projects = [
    { 
        name: 'Denver Helps', 
        tech: ['React.JS /', ' Material UI /', ' Twilio'],
        description: 'Mile High Hacks Hackathon group project, received 1st place. Built responsive website with React.JS and Material UI, built textbot with Twilio. This project helps homeless people of Denver, they can find shelter, food, or mental/medical care from the website or text chatbot. Used machine learning on textbot to generate appropriate response according to certain keywords texted from user.',
        github: 'https://github.com/joelbrewer/mile-high-hackathon-2019',
        image: require('./assets/denverHelps.png')
    }, 
    { 
        name: 'Loan Calculator', 
        tech: ['React Native /', ' Expo'],
        description: 'Mobile app built with React-Native, published to Google Play Store for Android devices.This app allows you to calculate your loan interest and includes an easy to read monthly payment chart with principal and interest amounts.',
        github: 'https://github.com/thatvictor7/loanCalculatorApp2.0',
        image: require('./assets/loanApp.jpg')
    },
    { 
        name: 'Bookstore', 
        tech: ['React.JS'], 
        description: '',
        github: 'https://github.com/thatvictor7/bookstore-react',
        image: 'https://dummyimage.com/600x400/000/fff'
    },
    { 
        name: 'Angular Issues', 
        tech: ['React.JS /', ' API Integration /', ' Bootstrap'],
        description: "This is a React.js project using Bootstrap to style. It integrates Angular's Github issues repo, and displays issues for past 7 days.",
        github: 'https://github.com/thatvictor7/angular-issues',
        image: require('./assets/angularIssues.jpg')
    },
    { 
        name: 'Inbox', 
        tech: ['React.JS /', ' CSS'],
        description: 'Gmail clone app. It allows you to add, delete, star, and label messages.',
        github: 'Gmail clone app. It allows you to add, delete, star, and label messages.',
        image: require('./assets/inbox.jpg')
    },
    {
        name: 'Reads',
        tech: ['React.JS /', ' Material UI /', ' API Integration'],
        description: 'Gmail clone app. It allows you to add, delete, star, and label messages.',
        github: 'https://github.com/thatvictor7/gReads-2.0',
        image: require('./assets/reads.png')
    },
]

function Projects() {
    return(
        <div>
            <Divider horizontal>
                <Header style={style.skillsText} as='h4'>
                    <Icon name='briefcase' />
                    Projects:
                </Header>
            </Divider>
            <Grid style={style.gridContainer} container columns={3} stackable>
                {
                    projects.map((p,i) => {
                        return <Grid.Column>
                            <Segment style={style.segment}>
                                    <Card
                                        style={style.card}
                                        image={p.image}
                                        header={p.name}
                                        meta={p.tech}
                                        description={p.description}
                                        link={p.github}
                                        // extra='test'
                                    />
                                    </Segment>
                                </Grid.Column>
                    })
                }
            </Grid>
        </div>
    )
}

export default Projects