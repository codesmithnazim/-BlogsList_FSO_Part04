import express from "express";
import Blog from "../models/blog.model.js";
// import logger from "../utils/logger.js";
const blogRouter = express.Router();

blogRouter.get("/", async (request, response, next) => {

  try {
    const ObtBlogs = await Blog.find({});
    response.status(200).json(ObtBlogs);
  } catch (error) {
    next(error);
  }
});

blogRouter.post("/",async (request, response, next) => {
const {body}= request
     try {
      const blog= new Blog(body)
     const savedBlog= await blog.save()
     response.status(201).json(savedBlog)
     console.log('status ', response.status)
    } catch (error) {
      next(error)
    }
});

export default blogRouter;
