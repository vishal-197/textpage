import React from 'react'
import { Link } from "react-router-dom";

function SlideOne(props) {
    return (
      <div className="inner-card-box">
        <div className="img-box">
      <img  src={props.url} />
        </div>
      <div className="card-inner-content">
        <h5>{props.heading}</h5>
        <p>{props.text}</p>
        <Link to="">{props.link} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></Link>
      </div>
    </div>
    )
  }
export default SlideOne