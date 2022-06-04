import React from "react";

const Article = ({ title, body, color}) => {
  return (
    <article className={`text-${color} flex flex-col gap-4`}>
      <h4 className="font-medium text-4xl">{title}</h4>
      <p className="text-xl font-light">
        {body}
      </p>
    </article>
  );
};

export default Article;
