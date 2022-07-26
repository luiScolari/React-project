import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from './TextInput';

describe('< TextInput />', () => {
  it('should have a value of searchvalue', () => {
    const fn = jest.fn();
    render(<TextInput searchValue={'teste'} handleChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input).toBeInTheDocument();

    expect(input.value).toBe('teste');
  });

  it('should call a handleChange each time a key is pressed', () => {
    const fn = jest.fn();
    render(<TextInput searchValue={'teste'} handleChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    const value = 'o valor';

    userEvent.type(input, value);
    expect(input.value).toBe('teste');
    expect(fn).toBeCalledTimes(value.length);
  });

  it('should match the snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue={'teste'} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
