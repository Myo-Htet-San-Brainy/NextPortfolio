import dbConnect from "./connectDb";
import mongoose from "mongoose";

export const getBlogs = async () => {
  const conn = await dbConnect();
  const blogs = conn.connection.db.collection("blogs");
  const documents = await blogs.find().toArray();
  return documents;
};

export const getBlog = async (blogId) => {
  const conn = await dbConnect();
  const blogs = conn.connection.db.collection("blogs");
  const blog = await blogs.findOne({
    _id: new mongoose.Types.ObjectId(blogId),
  });
  return blog;
};

export const getProjects = async () => {
  const conn = await dbConnect();
  const projects = conn.connection.db.collection("projects");
  const documents = await projects.find().toArray();
  return documents;
};
