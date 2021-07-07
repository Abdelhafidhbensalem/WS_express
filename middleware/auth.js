// a middleware function takes 3 parameters
// req + res +next
// si la condition est vrai
// next to the callback function
// else the middleware send the the response
const isAuth = (req, res, next) => {
  let auth = true;
  if (auth) {
    console.log("authorised");
    next();
  } else {
    res.status(401).send("you are not authorised");
  }
};

// export the function
module.exports = isAuth;
