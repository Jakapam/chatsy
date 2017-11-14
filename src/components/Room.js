import React from "react";
import MessageInput from "../containers/MessageInput";
import LanguageSelector from "../containers/LanguageSelector";
import MsgList from "./MsgList";
import UserList from "./UserList";
import { Container, Grid } from "semantic-ui-react";

const Room = props => {
  return (
    <div style={{ marginTop: 30 }}>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={13}>
              <MsgList
                scrollRef={props.scrollRef}
                incoming={props.incoming}
                outgoing={props.outgoing}
                system={props.system}
              />
            </Grid.Column>
            <Grid.Column width={3}>
              <UserList users={props.users} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={13}>
              <MessageInput />
            </Grid.Column>
            <Grid.Column width={3} floated="right">
              <LanguageSelector />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Room;
