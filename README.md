# 🤖 React Conversational UI

A react component for conversational UI. Define your question and get the users input in return.

<img src="https://cloud.githubusercontent.com/assets/4348783/22630685/cfdfe330-ebfe-11e6-8d4c-ea39a82b3bb4.gif" width="500" />

## How to use

### Define the questions
The questions supports these field.
* `text` - the text for your question (string) __(required)__
* `image` - url to a image (string)
* `buttons` - if you want to have answer alternatives (array)
* `key` - the key that will be returned with the questions. If not key defined the question will not be returned.

### The React component
The component take these props:
* `questions` - an array of questions.
* `onEnded` - function to return the user input when session ends.
* `theme` - styles and settings (optional)

```js
import Conversation from '../containers/Conversation';

const App = (props) => {
  function getUserAnswers(answers) {
    console.log('answers', answers);
  }

  return (
    <div>
      <Conversation
        questions={questions}
        onEnded={getUserAnswers}
        theme={theme}
      />
    </div>
  );
}
```

### :nail_care: Themeing

You can customize the size, colors, fonts and avatars.

```js
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
```

### Example questions

Questions:
```js
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
```

### :package: Dependencies

* Create React App <3
* Styled Components
* Flexbox
