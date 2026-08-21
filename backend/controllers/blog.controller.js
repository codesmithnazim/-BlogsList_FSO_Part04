import express from "express"
import Blog from "../models/blog.model.js";
// import logger from "../utils/logger.js";
const blogRouter= express.Router()


blogRouter.get("/", (request, response, next) => {
  Blog.find({}).then((blogs) => {
    response.status(200).json(blogs);
  }).catch(error=>{ next(error)})
});

blogRouter.post("/", (request, response, next) => {
  const blog = new Blog(request.body);

  blog.save().then((result) => {
    response.status(201).json(result);
  }).catch(error=>{  next(error)})
})


export default blogRouter