import React from "react";

export default function project({
  image,
  title,
  subtitle,
  paragraph,
  id,
  github,
  url,
}) {
  return (
    <ul className="project__list">
      <div className="project__wrapper">
        <img src={image} className="project__img" />
        <div className="project__wrapper--bg"></div>
        <div className="project__description">
          <h3 className="project__description--title" id={id}>
            {title}
          </h3>
          <h4 className="project__description--sub-title">{subtitle}</h4>
          <p className="project__description--para">{paragraph}</p>
          <div className="project__description--links">
            <a href={github} className="project__description--link">
              <i className="fab fa-github"></i>
            </a>
            <a href={url} className="project__description--link">
              <i className="fas fa-link"></i>
            </a>
          </div>
        </div>
      </div>
    </ul>
  );
}
