import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { typr: String },
  url: { type: String, required: true, unique: true },
  likes: Number,
});

// blogSchema.set("toJSON", {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   },
// });

blogSchema.set("toJSON", {
  transform: (originalDoc, returnedDoc) => {
    returnedDoc.id = originalDoc._id.toString();
    (delete returnedDoc._id, delete returnedDoc.__V);
  },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
