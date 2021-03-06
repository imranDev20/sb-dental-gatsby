import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RecentBlogs = ({ blog }) => {
  const image = getImage(blog.image.localFile);

  return (
    <div className="">
      <Link to={`/blogs/${blog.slug}`}>
        <GatsbyImage
          className="rounded w-full md:h-28"
          imgClassName="w-full h-full object-cover"
          image={image}
          alt={blog.image.alternativeText}
        />
      </Link>
      <Link to={`/blogs/${blog.slug}`}>
        <h3 className="text-primary font-medium text-xl mt-2">{blog.title}</h3>
      </Link>
      <p className="text-neutral-500 text-sm leading-6">
        {blog.excerpt.length > 70
          ? blog.excerpt.substring(0, 70) + "..."
          : blog.excerpt}
        <Link className="text-primary font-medium " to={`/blogs/${blog.slug}`}>
          Read More
        </Link>
      </p>
    </div>
  );
};

export default RecentBlogs;
