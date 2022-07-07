export const loadPosts = async () => {
    // MANEIRA 1
    // await fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(response => response.json())
    // .then(json => this.setState({posts: json}))

    // MANEIRA 2
    // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // this.setState({ posts: data })

    // MANEIRA 3
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse])

    const postsJson = await posts.json()
    const photosJson = await photos.json()

    // "zip de array"
    // https://www.delftstack.com/howto/javascript/zip-two-arrays-in-javascript/
    // no caso o postsJson tinha 100 posts, já o photos tinha 5000 fotos,
    // foi feito um map para associar cada post a uma foto
    const postAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });

    return postAndPhotos
}