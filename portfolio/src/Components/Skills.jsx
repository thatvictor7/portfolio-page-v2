import React from 'react'
import { Grid, Segment, Divider, Header, Icon } from 'semantic-ui-react'

const style = {
    skillsText: {
        color: 'rgba(23, 168, 158, 1)',
        fontSize: '3.0rem',
        fontWeight: '700',
        // textAlign: 'left',
    },
    stack: {
        margin: '2% 0 5% 0'
    },
    dividerContainer: {
        // marginTop: '15%',
        paddingLeft: '5%'
    },
    segmentSkill: {
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
    },
    skillDescription: {
        marginTop: '6%',
        color: 'rgba(31,31,31,.9)',
        fontSize: '1.8rem',
        display: 'inline-block',
        width: '60%',
        // textAlign: 'left',
    },
}

function Skills() {
    return (
        <div>
            <Divider style={style.dividerContainer} hidden horizontal>
                <Header style={style.skillsText} as='h4'>
                    Skills<b style={{ letterSpacing: '-8px', color: '' }}>___</b>
                </Header>
            </Divider>
            {/* <div style={style.skillDescriptionContainer}> */}
                <p style={style.skillDescription}>I develop high quality and responsive websites and applications. Here are some of the technologies I have worked on recently.</p>
            {/* </div> */}
            <Grid style={style.stack} container columns={4} stackable>
                <Grid.Column>
                    <Segment style={style.segmentSkill}>
                        <Icon color='yellow' size='huge' name='js' />
                        JavaScript (ES6)
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segmentSkill}>
                        <Icon color='blue' size='huge' name='react' />
                        React.JS
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segmentSkill}>
                        <Icon color='blue' size='huge' name='react' />
                        React-Native
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segmentSkill}>
                        <Icon color='green' size='huge' name='node js' />
                        Node.JS
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segmentSkill}>
                        <Icon color='grey' size='huge' name='node js' />
                        Express.JS
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segmentSkill}>
                        <Icon color='teal' size='huge' name='database' />
                        SQL
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segmentSkill}>
                        {/* <Icon color='orange' size='huge' name='database' /> */}
                        <img style={style.logo} alt='knex.js' src={require('./assets/knex-logo.png')} />
                        Knex.JS
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segmentSkill}>
                        {/* <Icon size='huge' name='database' /> */}
                        <img style={style.logo} alt='postgresql' src={require('./assets/posgresql-logo.png')} />
                        PostgreSQL
                    </Segment>
                </Grid.Column>
                {/* <Grid.Column>
                    <Segment style={style.segment}>
                        <Icon color='red' size='huge' name='html5' />
                        HTML5
                    </Segment>
                </Grid.Column> */}
                {/* <Grid.Column>
                    <Segment style={style.segment}>
                        <Icon color='blue' size='huge' name='css3 alternate' />
                        CSS3
                    </Segment>
                </Grid.Column> */}
                {/* <Grid.Column>
                    <Segment style={style.segment}>
                        <img style={style.logo} alt='python' src={require('./assets/python-logo.png')} />
                        Python
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment style={style.segment}>
                        <img style={style.logo} alt='java logo' src={require('./assets/java-logo.png')} />
                        Java
                    </Segment>
                </Grid.Column> */}
            </Grid>
        </div>
    )
}

export default Skills