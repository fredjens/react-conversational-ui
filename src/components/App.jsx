import React from 'react';

import Conversation from '../containers/Conversation';

const questions = [{
    text: 'Hello!',
  }, {
    text: 'What is your first name?',
    value: 'firstName',
  }, {
    text: 'Do you like this image?',
    image: 'https://unsplash.it/400/300/?random',
    key: 'imageLike',
    buttons: [{
      text: 'Yes, looks great!',
      value: 'yes',
    }, {
      text: 'No really...',
      value: 'no',
    }],
  }, {
    text: 'How are you?',
    buttons: [{
      text: 'Awesome!',
      value: 'great',
    }, {
      text: 'Good',
      value: 'good',
    }, {
      text: 'Could be better',
      value: 'medium',
    }, {
      text: 'Not so good...',
      value: 'bad',
    }],
    key: 'emotion',
}];

const App = (props) => {
  function getUserAnswers(answers) {
    console.log('answers', answers);
  }

  return (
    <main>
      <Conversation
        questions={questions}
        onEnded={getUserAnswers}
      />
    </main>
  );
}

export default App;
