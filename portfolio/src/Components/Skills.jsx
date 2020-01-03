import React from 'react'
import { Grid, Segment, Divider, Header, Icon } from 'semantic-ui-react'

const style = {
    skillsText: {
        color: 'white',
    },
    stack: {
        margin: '3% 0'
    },
    segment: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '600',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    logo: {
        height: '56px',
        margin: 'auto',
    }
}

function Skills() {
    return (
        <div>
            <Divider horizontal>
                <Header style={style.skillsText} as='h4'>
                    <Icon name='file code' />
                    Skills:
                </Header>
            </Divider>
            <Grid style={style.stack} container columns={5} stackable>
                <Grid.Column>
                    <Segment style={style.segment}>
                        <Icon color='yellow' size='huge' name='js' />
                        JavaScript (ES6)
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segment}>
                        <Icon color='blue' size='huge' name='react' />
                        React.JS
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segment}>
                        <Icon color='blue' size='huge' name='react' />
                        React-Native
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segment}>
                        <Icon color='green' size='huge' name='node js' />
                        Node.JS
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segment}>
                        <Icon color='grey' size='huge' name='node js' />
                        Express.JS
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segment}>
                        <Icon color='teal' size='huge' name='database' />
                        SQL
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segment}>
                        {/* <Icon size='huge' name='database' /> */}
                        <img style={style.logo} alt='postgresql' src={require('./assets/posgresql-logo.png')} />
                        PostgreSQL
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segment}>
                        <Icon color='red' size='huge' name='html5' />
                        HTML5
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segment}>
                        <Icon color='blue' size='huge' name='css3 alternate' />
                        CSS3
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segment}>
                        {/* <Icon  size='huge' name='python' /> */}
                        <img style={style.logo} alt='python' src={require('./assets/python-logo.png')} />
                        Python
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Skills