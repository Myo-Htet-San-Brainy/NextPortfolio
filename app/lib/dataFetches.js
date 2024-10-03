import dbConnect from "./connectDb";

export const getBlogs = async () => {
  const conn = await dbConnect();
  const blogs = conn.connection.db.collection("blogs");
  const documents = await blogs.find().toArray();
  return documents;
};

export const getProjects = async () => {
  const conn = await dbConnect();
  const projects = conn.connection.db.collection("projects");
  const documents = await projects.find().toArray();
  return documents;
};
