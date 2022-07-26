import { render, screen } from '@testing-library/react';
import { Posts } from '.';

const postsMock = [
  {
    title: 'title 1',
    body: 'body 1',
    id: 1,
    cover: 'img/img.png',
  },
  {
    title: 'title 2',
    body: 'body 2',
    id: 2,
    cover: 'img/img.png 2',
  },
  {
    title: 'title 3',
    body: 'body 3',
    id: 3,
    cover: 'img/img.png 3',
  },
];

describe('<Posts />', () => {
  it('should loop the posts correctly', () => {
    render(<Posts posts={postsMock} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
    expect(screen.getByRole('img', { name: /title 3/i })).toHaveAttribute('src', 'img/img.png 3');
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts posts={postsMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
