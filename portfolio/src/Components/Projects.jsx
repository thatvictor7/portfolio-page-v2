import React, { Component } from 'react'
import { Grid, Segment, Divider, Header, Icon, Card, Button, Accordion } from 'semantic-ui-react'

const style = {
    skillsText: {
        color: 'rgba(23, 168, 158, 1)',
        fontSize: '2rem',
    },
    card: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        // height: 'auto',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        // color: 'rgba(1,1,1,.6)',
        // margin: '1px 0'
        // boxShadow: "5px 10px 15px #000",
        display: 'inline-block',
    },
    gridContainer: {
        marginTop: '3%',
        marginBottom: '3%',
        textAlign: 'center'
        // margin: '3% auto'
    },
    segmentProject: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        // fontSize: '1.5rem',
        // width: '30%',
        // width: '110%',
        // height: '37em',
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

export default class Projects extends Component {
    state = { activeIndex: 0 }

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
                <Divider horizontal>
                    <Header style={style.skillsText} as='h4'>
                        {/* <Icon name='briefcase' /> */}
                        Projects:
                    </Header>
                </Divider>
                <Grid style={style.gridContainer} container columns={3} stackable>
                    {
                        projects.map((p, i) => {
                            return <Grid.Column>
                                {/* <Segment style={style.segmentProject}> */}
                                    <Card
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
                                                    {/* <Button.Group size='tiny'> */}
                                                        <Button>
                                                            <Icon name='github' />
                                                            Github
                                                        </Button>
                                                        {/* <Button.Or /> */}
                                                        <Button positive>
                                                            <Icon name='external' />
                                                            Visit Website
                                                        </Button>
                                                    {/* </Button.Group> */}
                                                </Accordion.Content>
                                            </Accordion>
                                        }
                                    // link={p.github}
                                    // extra='test'
                                    />
                                {/* </Segment> */}
                            </Grid.Column>
                        })
                    }
                </Grid>
            </div>
        )
    }
}

// function Projects() {

//     return(
//         <div>
//             <Divider horizontal>
//                 <Header style={style.skillsText} as='h4'>
//                     <Icon name='briefcase' />
//                     Projects:
//                 </Header>
//             </Divider>
//             <Grid style={style.gridContainer} container columns={3} stackable>
//                 {
//                     projects.map((p,i) => {
//                         return <Grid.Column>
//                             <Segment style={style.segment}>

//                                     {/* <Card
//                                         style={style.card}
//                                         image={p.image}
//                                         header={p.name}
//                                         meta={p.tech}
//                                         description={p.description}
//                                         link={p.github}
//                                         // extra='test'
//                                     /> */}
//                                 {/* <Popup content={p.description} trigger={<Card
//                                     style={style.card}
//                                     image={p.image}
//                                     header={p.name}
//                                     meta={p.tech}
//                                     // description={p.description}
//                                     link={p.github}
//                                 // extra='test'
//                                 />} /> */}
//                                 <Card
//                                         style={style.card}
//                                         image={p.image}
//                                         header={p.name}
//                                         meta={p.tech}
//                                         description={
//                                             <Accordion>
//                                                 <Accordion.Title >
//                                                     <Icon name='dropdown' />
//                                                     Show more
//                                                 </Accordion.Title>
//                                                 <Accordion.Content >
//                                                 <p>{p.description}</p>
//                                                 </Accordion.Content>
//                                             </Accordion>
//                                         }
//                                         // link={p.github}
//                                         // extra='test'
//                                     />
//                                     </Segment>
//                                 </Grid.Column>
//                     })
//                 }
//             </Grid>
//         </div>
//     )
// }

// export default Projects