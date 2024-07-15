

const notfound = (res,req,next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
}

export default notfound
