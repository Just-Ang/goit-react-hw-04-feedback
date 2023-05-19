import PropTypes from 'prop-types';
import css from './section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
{children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};