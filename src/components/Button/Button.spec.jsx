import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  it('Should render the button with the text "load more"', () => {
    const fn = jest.fn();
    render(<Button text={'load more'} quandoClicado={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeInTheDocument();
    // console.log(button)
  });

  it('should call a function when the button is clicked', () => {
    const fn = jest.fn();
    render(<Button text={'load more'} quandoClicado={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);
    userEvent.click(button);

    expect(fn).toBeCalledTimes(2);
  });

  it('should disable the button when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text={'load more'} disabled={true} quandoClicado={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it('should enable the button when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text={'load more'} disabled={false} quandoClicado={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text={'load more'} quandoClicado={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
