import cl from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <h1 className={cl.header}>Please leave a feedback</h1>
      <div>
        {options.map(option => (
          <button
            className={cl.button}
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

export default FeedbackOptions;
