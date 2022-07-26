import './styles.css';
// const axios = require("axios")

import { loadPosts } from '../../utils/load-posts';

import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput/TextInput';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(4);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postAndPhotos = await loadPosts();
    setPosts(postAndPhotos.slice(page, postsPerPage));
    setAllPosts(postAndPhotos);
  }, []);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
    // this.setState({ posts, page: nextPage })
  };

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const noMorePosts = page + postsPerPage >= allPosts.length;

  let filteredPosts = [];
  if (!searchValue) {
    filteredPosts = posts;
  } else {
    filteredPosts = allPosts.filter((post) => {
      return post.title.toLowerCase().includes(searchValue);
    });
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Test: {searchValue}</h1>}

        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

      {filteredPosts.length === 0 && <p>Nenhum post</p>}

      <div className="button-container">
        {/* Pensar como se realmente fosse um curto circuito, se a primeira for true (no caso do AND) */}
        {/* O botão será renderizado */}
        {!searchValue && <Button text="Load more posts" quandoClicado={loadMorePosts} disabled={noMorePosts} />}
      </div>
    </section>
  );
};

// class App extends Component {
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 4,
//     searchValue: ''
//   }

//   componentDidMount() {
//     this.loadPosts()
//   }

// }

// export default App;
