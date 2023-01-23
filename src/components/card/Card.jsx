import React from "react";
import "./card.css"


export function Card(props) {
  return (
      <div className="container info">
        <div className="card__body">
          <img src={props.img} class="card__image" />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__content">{props.content}</p>
        </div>
      </div>
    );
}