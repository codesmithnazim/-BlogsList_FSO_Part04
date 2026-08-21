import { test, beforeEach, describe, after } from "node:test";
import Blog from "../models/blog.model.js";
import supertest from "supertest";
import { app } from "../app.js";
import assert from "node:assert";
import mongoose from "mongoose";
import testsHelper from "./testsHelper.js";

const api = supertest(app);

beforeEach(async () => {
  await Blog.deleteMany();
  //    console.log('all the notes we get from the databse ',allBlogs )
  await Promise.all(testsHelper.blogs.map((blog) => Blog.create(blog)));
});

describe("Tests done on the blogs list", () => {
  test("testing the total number of blogs posts returned", async () => {
    const presentNotes = await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);
    const expected= 
    assert.strictEqual(presentNotes.body.length,await testsHelper.totalBlogs() +1);
  });
});

after(async () => {
  mongoose.connection.close();
});
