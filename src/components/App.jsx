import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { useState } from 'react';

export default function App() {
   const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };


  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

 const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  const options = Object.keys({ good, neutral, bad });
  
    // const { good, neutral, bad } = this.state;
    // const options = Object.keys(this.state);
    // const totalFeedback = this.countTotalFeedback();
    // const totalPercentage = this.countPositiveFeedbackPercentage();
    return (
      
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        {countTotalFeedback !== 0 ?
        <Section>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
        : <Notification message = "There is no feedback"/>}
      </div>
    );
  }

