import React from 'react'
import { Grid, Segment, Divider, Header, Icon } from 'semantic-ui-react'

const style = {
    skillsText: {
        color: 'white',
        // backgroundColor: 'red'
    }
}

function Projects() {
    return(
        <div>
            <Divider horizontal>
                <Header style={style.skillsText} as='h4'>
                    <Icon name='briefcase' />
                    Projects:
                </Header>
            </Divider>
        </div>
    )
}

export default Projects