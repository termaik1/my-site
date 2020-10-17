/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import "./MyProjects.scss";

const MyProjects = () => {
  return (
    <div className="my-projects">
      <div className="my-projects__content">
        <iframe
          src="https://view.genial.ly/5f860c5ba70c7d0d04027aec/presentation-untitled-genially"
          width="1000px"
          height="600px"
          frameborder="0"
        />
        <div>
          <a
            target="_blank"
            without
            rel="noopener noreferrer"
            href="https://view.genial.ly/5f860c5ba70c7d0d04027aec/presentation-untitled-genially"
          >
            Перейти по ссылке
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
