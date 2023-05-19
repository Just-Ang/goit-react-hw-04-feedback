import { useState } from 'react';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackBtn/FeedbackBtn';
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';

const options = ['good', 'neutral', 'bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotal = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((100 / (good + neutral + bad)) * good) || 0;
  };

  const onClickButton = e => {
    const element = e.currentTarget.dataset.type;
    console.log(element);
    if (element === 'good') return setGood(good + 1);
    if (element === 'neutral') return setNeutral(neutral + 1);
    if (element === 'bad') return setBad(bad + 1);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onClickButton} />
      </Section>

      <Section title="Statistics">
        {countTotal() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};
