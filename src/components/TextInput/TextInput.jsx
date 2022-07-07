import './styles.css'

export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input
            // Na minha cabeça não entra que somente o "this.handleChange" passa o atributo "e", porém funciona...
            // onChange={(e) => {
            //   this.handleChange(e)
            // }}
            className='text-input'
            onChange={handleChange}
            value={searchValue}
            type="search"
        />)
}