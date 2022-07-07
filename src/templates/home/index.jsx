import './styles.css';
import { Component } from 'react';
// const axios = require("axios")

import { loadPosts } from '../../utils/load-posts'

import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput/TextInput';


class App extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    searchValue: ''
  }

  componentDidMount() {
    this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state
    const postAndPhotos = await loadPosts()
    this.setState({
      posts: postAndPhotos.slice(page, postsPerPage),
      allPosts: postAndPhotos
    })
  }

  loadMorePosts = () => {
    const {
      posts,
      allPosts,
      page,
      postsPerPage
    } = this.state

    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)
    this.setState({ posts, page: nextPage })
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length

    let filteredPosts = []
    if (!searchValue) {
      filteredPosts = posts
    } else {
      filteredPosts = allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue)
      })
    }

    return (
      <section className='container'>
        <div className="search-container">
          {!!searchValue && (
            <h1>Test: {searchValue}</h1>
          )}

          <TextInput searchValue={searchValue} handleChange={this.handleChange} />
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>Nenhum post</p>
        )}

        <div className="button-container">
          {/* Pensar como se realmente fosse um curto circuito, se a primeira for true (no caso do AND) */}
          {/* O botão será renderizado */}
          {!searchValue && (
            <Button
              text="Load more posts"
              quandoClicado={this.loadMorePosts}
              disabled={noMorePosts} />
          )}

        </div>
      </section>
    );
  }
}


export default App;
