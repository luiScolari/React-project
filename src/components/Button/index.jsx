import './styles.css'
export const Button = ({ text, quandoClicado, disabled }) => {
    return (
        <button
            className="button"
            disabled={disabled}
            onClick={quandoClicado}>{text}
        </button>
    )
}