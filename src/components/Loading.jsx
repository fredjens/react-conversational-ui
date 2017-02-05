import React from 'react';

import { MessageBlobBot, MessageBlobUser } from '../primitives/MessageBlob';
import Avatar from '../primitives/Avatar';
import DancingDot from '../primitives/DancingDot';

const Message = (props) => {

  return (
    <section>
      {props.bot &&
        <div>
          <Avatar left>
            🤖
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
            🙂
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

export default Message;
