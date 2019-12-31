import React from 'react'
import { Grid, Segment, Divider, Header, Icon, Card } from 'semantic-ui-react'

const style = {
    skillsText: {
        color: 'white',
        // backgroundColor: 'red'
    }
}

const projects = [
    { name: 'Denver Helps', tech: ['React.JS /', ' Material UI /', ' Twilio'] }, 
    { name: 'Loan Calculator', tech: ['React Native', 'Expo']  },
    { name: 'Bookstore', tech: ['React.JS']  },
    { name: 'Angular Issues', tech: ['React.JS /', ' API Integration'] },
    { name: 'Inbox', tech: ['React.JS /',] },
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
            <Grid container columns={2} stackable>
                {
                    projects.map((p,i) => {
                        return <Grid.Column>
                                    <Segment>
                                    <Card
                                        image='https://dummyimage.com/600x400/000/fff'
                                        header={p.name}
                                        meta={p.tech}
                                        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                        // extra={extra}
                                    />
                                    </Segment>
                                </Grid.Column>
                    })
                }
                {/* <Grid.Column>
                    <Segment></Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column> */}
            </Grid>
        </div>
    )
}

export default Projects