let posts = [
    { id: 1, post: "post 1" },
    { id: 2, post: "post 2" },
    { id: 3, post: "post 3" },
];
// All posts & filter with id
// method GET
export const allPosts =(req, res,next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if(!post)
    {
      const error = new Error(`A post with id of ${id} not found`);
      error.status = 404;
      return next(error);
    }
    res.status(200).json(post);
};
// All posts & filter with limit
// method GET
export const limitPosts =(req, res,next) => {
    const limit = parseInt(req.query.limit);
    const sort = req.query.sort;
    if (!isNaN(limit) && limit > 0) {
      res.json(posts.slice(0, limit));
    } else {
      res.json(posts);
    }
  };
  
// Create posts
// method POST
export const createPosts =(req, res,next) => {
    const newPost = {
      id: posts.length + 1,
      title: req.body.title,
    };
    if (!newPost.title) {
     
      const error = new Error(`please include title`);
      error.status = 404;
      return next(error);
      
    }
    posts.push(newPost);
    res.status(201).json(posts);
  };
// Update posts
// method PUT
export const updatePosts =(req, res,next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
      const error = new Error(`A post with id of ${id} not found`);
      error.status = 404;
      return next(error);
    }
    post.title = req.body.title;
    res.status(200).json(posts);
  };
// Delete posts
// method DELETE
export const deletePosts =(req, res,next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
      const error = new Error(`A post with id of ${id} not found`);
      error.status = 404;
      return next(error);
    }
    const deletePosts = posts.filter((post)=>post.id !== id)
    res.status(200).json(deletePosts);
  };
