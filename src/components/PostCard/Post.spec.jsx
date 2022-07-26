import { render, screen } from '@testing-library/react';
import PostCard from '.';

const mock = {
  title: 'title1',
  body: 'body1',
  id: 1,
  cover: 'img/img.png',
};

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard post={mock} />);

    expect(screen.getByRole('img', { name: 'title1' })).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: 'title1' })).toBeInTheDocument();
    expect(screen.getByText('body1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard post={mock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
