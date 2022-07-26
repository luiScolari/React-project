import './styles.css';
import P from 'prop-types';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      // Na minha cabeça não entra que somente o "this.handleChange" passa o atributo "e", porém funciona...
      // onChange={(e) => {
      //   this.handleChange(e)
      // }}
      placeholder="Type your search"
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
