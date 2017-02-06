import React from 'react';
import { withTheme } from 'styled-components';

import { MessageBlobBot, MessageBlobUser } from '../primitives/MessageBlob';
import Avatar from '../primitives/Avatar';
import DancingDot from '../primitives/DancingDot';

const Message = (props) => {
  const { theme } = props;

  return (
    <section>
      {props.bot &&
        <div>
          <Avatar left>
            {theme.bot}
          </Avatar>
          <MessageBlobBot>
            <DancingDot>.</DancingDot>
            <DancingDot>.</DancingDot>
            <DancingDot>.</DancingDot>
          </MessageBlobBot>
        </div>
      }
      {props.user &&
        <div>
          <Avatar right>
            {theme.user}
          </Avatar>
          <MessageBlobUser>
            <DancingDot>.</DancingDot>
            <DancingDot>.</DancingDot>
            <DancingDot>.</DancingDot>
          </MessageBlobUser>
        </div>
      }
    </section>
  );
}

export default withTheme(Message);
