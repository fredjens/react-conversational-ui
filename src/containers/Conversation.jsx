import React, { Component } from 'react';
import autoBind from 'auto-bind';

import Container from '../primitives/Container';
import UserInput from '../primitives/UserInput';
import Message from '../components/Message';
import MessageArea from '../primitives/MessageArea';
import Loading from '../components/Loading';
import SubmitButton from '../primitives/SubmitButton';

class Conversation extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      questions: props.questions.map(question => {
        return {
          ...question,
          sender: 'BOT',
        };
      }),
      questionNumber: 0,
      userInput: '',
      disableUserInput: false,
      messages: [],
      answers: {},
      loadingBot: false,
    }
  }

  componentWillMount() {
    const { questions, questionNumber } = this.state;

    this.setState({
      ...this.state,
      messages: [
        questions[questionNumber],
      ]
    })
  }

  componentDidMount() {
    this.userInput.focus();
  }

  handleUserInput(e) {
    e.preventDefault();
    this.setState({
      userInput: e.target.value,
    })
  }

  handleButtonSelect(select) {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          text: select.text,
          type: 'USER'
        }
      ],
      answers: this.state.questions[this.state.questionNumber].key ? {
        ...this.state.answers,
        [this.state.questions[this.state.questionNumber].key]: select.value,
      } : {
        ...this.state.answers,
      },
    }, () => {
      this.nextQuestion();
    })
  }
  finalMessage() {
    return {
      text: 'Thank you!',
      type: 'final',
      sender: 'BOT',
    }
  }

  nextQuestion() {
    this.setState({
      questionNumber: this.state.questionNumber + 1,
      loadingBot: true,
    }, () => {
      if (this.state.questionNumber < this.state.questions.length) {
        setTimeout(() => {
          this.setState({
            messages: [
              ...this.state.messages,
              this.state.questions[this.state.questionNumber],
            ],
            loadingBot: false,
          })

          if (this.state.questions[this.state.questionNumber].buttons) {
            this.setState({
              disableUserInput: true
            });
          } else {
            this.setState({
              disableUserInput: false
            });
            this.userInput.focus();
          }
        }, 500);
      } else {
        setTimeout(() => {
          this.setState({
            messages: [
              ...this.state.messages,
              this.finalMessage(),
            ],
            loadingBot: false,
            disableUserInput: true,
          });
          this.props.onEnded(this.state.answers)
        }, 500);
      }
    })
  }

  submitUserInput(e) {
    e.preventDefault();
    if (this.state.userInput.length > 0) {
      this.setState({
        messages: [
          ...this.state.messages,
          {
            text: this.state.userInput,
            type: 'USER'
          }
        ],
        answers: this.state.questions[this.state.questionNumber].key ? {
          ...this.state.answers,
          [this.state.questions[this.state.questionNumber].key]: this.state.userInput,
        } : {
          ...this.state.answers,
        },
        userInput: '',
      }, () => {
        this.nextQuestion();
      })
    }
  }

  render() {
    const { messages, userInput, answers, disableUserInput } = this.state;

    return (
      <Container>
        <MessageArea
          innerRef={div => this.messageArea = div }
        >
        {messages.map((message, index) =>
          <Message
            key={index}
            message={message}
            answers={answers}
            onButtonSelect={this.handleButtonSelect}
            active={messages.length === index + 1}
          />
        )}
        {this.state.loadingBot && <Loading bot/>}
        {this.state.userInput.length > 0 && <Loading user/>}
        </MessageArea>
        <form onSubmit={e => this.submitUserInput(e)}>
          <UserInput
            type="text"
            value={userInput}
            innerRef={input => this.userInput = input }
            onChange={e => this.handleUserInput(e)}
            disabled={disableUserInput}
          />
          <SubmitButton>↩</SubmitButton>
        </form>
      </Container>
    );
  }
}

export default Conversation;
