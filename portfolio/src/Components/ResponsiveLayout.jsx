import React from 'react'
import { Grid, Segment, Divider, Header, Icon } from 'semantic-ui-react'

const style = {
    skillsText: {
        color: 'white',
        // backgroundColor: 'red'
    }
}

function ResponsiveLayout(){
    return(
        <div>
            <Divider horizontal>
                <Header style={style.skillsText} as='h4'>
                    <Icon name='file code' />
                    Skills:
                </Header>
            </Divider>
            <Grid container columns={3} stackable>
                <Grid.Column>
                  <Segment>JavaScript</Segment>
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
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default ResponsiveLayout