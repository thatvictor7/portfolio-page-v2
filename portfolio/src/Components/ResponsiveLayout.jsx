import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

function ResponsiveLayout(){
    return(
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
    )
}

export default ResponsiveLayout