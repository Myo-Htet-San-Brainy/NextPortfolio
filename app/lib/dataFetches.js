import dbConnect from "./connectDb";
import mongoose from "mongoose";

export const getBlogs = async () => {
  try {
    const conn = await dbConnect();
    const blogs = conn.connection.db.collection("blogs");
    const documents = await blogs.find().toArray();
    return documents;
  } catch (error) {
    throw new Error("Something went wrong when fetching blogs");
  }
};

export const getBlog = async (blogId) => {
  try {
    const conn = await dbConnect();
    const blogs = conn.connection.db.collection("blogs");
    const blog = await blogs.findOne({
      _id: mongoose.Types.ObjectId.createFromHexString(blogId),
    });
    return blog;
  } catch (error) {
    throw new Error("Something went wrong when fetching a blog");
  }
};

export const getProjects = async () => {
  try {
    const conn = await dbConnect();
    const projects = conn.connection.db.collection("projects");
    const documents = await projects.find().toArray();
    return documents;
  } catch (error) {
    throw new Error("Something went wrong when fetching projects");
  }
};

export const getProject = async (projectId) => {
  try {
    const conn = await dbConnect();
    const projects = conn.connection.db.collection("projects");
    const project = await projects.findOne({
      _id: mongoose.Types.ObjectId.createFromHexString(projectId),
    });
    return project;
  } catch (error) {
    throw new Error("Something went wrong when fetching a project");
  }
};
