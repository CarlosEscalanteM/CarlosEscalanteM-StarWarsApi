import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const PeopleCard = (props) => {
  const [properties, setProperties] = useState();
  useEffect(() => {
    // by Default method: 'GET'
    fetch(props.url)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error(
            "Oooops! Something went wrong, young Padawan. Please try again"
          );
        }

        return response.json();
      })
      .then((result) => {
        setProperties(result.result.properties);
      })
      .catch((e) => console.log(error));
  }, []);
  return (
    properties && <div class="card col-3">
      <img src="https://dummyimage.com/400x200/adadad/ffffff.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{properties.name}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
