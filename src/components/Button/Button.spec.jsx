import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe('<Button />', () => {
    it('Should render the button with the text "load more"', () => {
        render(<Button text={'load more'} />)

        const button = screen.getByRole('button', { name: /load more/i })

        expect(button).toBeInTheDocument()
        // console.log(button)
    });

    it('should call a function when the button is clicked', () => {
        const fn = jest.fn()
        render(<Button text={'load more'} quandoClicado={fn} />)

        const button = screen.getByRole('button', { name: /load more/i })

        userEvent.click(button)
        userEvent.click(button)

        expect(fn).toBeCalledTimes(2)
    });

    it('should disable the button when disabled is true', () => {
        render(<Button text={'load more'} disabled={true} />)

        const button = screen.getByRole('button', { name: /load more/i })

        expect(button).toBeDisabled()
    });

    it('should enable the button when disabled is false', () => {
        render(<Button text={'load more'} disabled={false} />)

        const button = screen.getByRole('button', { name: /load more/i })

        expect(button).toBeEnabled()
    });

    it('should match snapshot', () => {
        const {container} = render(<Button />)
        expect(container.firstChild).toMatchSnapshot();
    })
});