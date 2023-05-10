import React from 'react';
import '../static/css/Blog.css';

const Blog = () => {
  const getRandomBlogs = () => {
    const blogs = [];
    for (let i = 1; i <= 4; i++) {
      const randomBlog = {
        id: i,
        title: `Blog ${i}`,
        content: `Content for Blog ${i}`,
        author: `Author ${i}`,
      };
      blogs.push(randomBlog);
    }
    return blogs;
  };

  const blogs = getRandomBlogs();

  return (
    <div>
      {blogs.map((blog) => (
        <div className="blog-container" key={blog.id}>
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-content">{blog.content}</p>
          <p className="blog-author">Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
