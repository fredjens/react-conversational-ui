import React from 'react';
import Conversation from '../containers/Conversation';

const theme = {
  blobColor: 'cyan',
  userBlobColor: 'deeppink',
  user: '👀',
  bot: '😾',
  baseColor: '#ccc',
  font: "'courier', monotype",
  height: '500px',
  width: '500px',
};

const questions = [{
    text: 'Hello!',
  }, {
    text: 'What is your first name?',
    key: 'firstName',
  }, {
    text: 'How are you?',
    key: 'emotion',
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
    }]
  }, {
    text: 'Do you like this image?',
    key: 'imageLike',
    image: 'https://unsplash.it/400/300/?random',
    buttons: [{
      text: 'Yes, looks great!',
      value: 'yes',
    }, {
      text: 'No really...',
      value: 'no',
    }]
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
        theme={theme}
      />
    </main>
  );
}

export default App;
