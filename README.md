# 🤖 React Conversational UI 🤖

A react component for conversational UI. Define your question and get the users input in return.

<img src="https://cloud.githubusercontent.com/assets/4348783/22630685/cfdfe330-ebfe-11e6-8d4c-ea39a82b3bb4.gif" width="500" />

__work in progress__

### How to use
#### 1. Import the component
```
import Conversation from '../containers/Conversation';
```
#### 2. Define the questions
The questions supports these field.
* `text` - the text for your question (string) __(required)__
* `image` - url to a image (string)
* `buttons` - if you want to have answer alternatives (array)
* `key` - the key that will be returned with the questions. If not key defined the question will not be returned.

### Example

Questions:
```
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
```
React component
```
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
```

### Settings

Comming soon...

### Dependencies

* Create React App
* Styled Components
* Flexbox
