import React from "react";
import Section from "../Shared/Section";

import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";

import BlogCard from "./Blog-card";

import "./style.scss";
const Blogs = () => {
  return (
    <Section id="blog" title="Blogs & Articles" background="dark">
      <div className="blogs-content-wrapper">
        <BlogCard
          user="Inam Ullah"
          date="mar 16 2025"
          image={Blog1}
          title="Quis Autem Vea  Eum Iure Reprehindrit"
          description="Contrary to popular belief, Lorem Ipsum is not simply random text."
        />
        <BlogCard
          user="Inam Ullah"
          date="mar 16 2025"
          image={Blog2}
          title="Quis Autem Vea  Eum Iure Reprehindrit"
          description="Contrary to popular belief, Lorem Ipsum is not simply random text."
        />
        <BlogCard
          user="Inam Ullah"
          date="mar 16 2025"
          image={Blog3}
          title="Quis Autem Vea  Eum Iure Reprehindrit"
          description="Contrary to popular belief, Lorem Ipsum is not simply random text."
        />
      </div>
    </Section>
  );
};

export default Blogs;
