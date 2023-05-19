import css from './feedbackBtn.module.css'

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
      <div>
        {options.map(option => (
          <button
          className={css.btn}
            type="button"
            key={option}
            onClick={onLeaveFeedback}
            data-type={option}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };
  