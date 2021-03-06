import React from 'react'
import { List } from 'semantic-ui-react'

const SystemMsg= (props)=>{

  const itemStyle = {
    marginTop: 5,
    color: '#C0C0C0',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 5,
    fontSize: 15
  }



  return(
    <List.Item>
        <List.Content floated='left' style={itemStyle}>
          {props.msg.content}
        </List.Content>
    </List.Item>
  )
}

export default SystemMsg
