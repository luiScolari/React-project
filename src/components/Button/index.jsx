import P from 'prop-types';
import './styles.css';

export const Button = ({ text, quandoClicado, disabled = false }) => {
  return (
    <button className="button" disabled={disabled} onClick={quandoClicado}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  quandoClicado: P.func.isRequired,
  disabled: P.bool,
};
