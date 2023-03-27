import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification ';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(({ good, neutral, bad }) => {
      switch (option) {
        case 'good':
          return { good: good + 1 };
        case 'neutral':
          return { neutral: neutral + 1 };
        default:
          return { bad: bad + 1 };
      }
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, stateValue) => {
      return previousValue + stateValue;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return good > 0 ? Math.round((good / this.countTotalFeedback()) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={keys} onLeaveFeedback={this.handleClick} />
        </Section>
        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
