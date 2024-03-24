import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = (props) => {
  const { store, actions } = useContext(Context);
  const { type, id } = useParams();
  console.log("TYPE!!", type);
  console.log("ID!!", id);
  const [properties, setProperties] = useState();

  useEffect(() => {
    // by Default method: 'GET'
    fetch(`https://www.swapi.tech/api/${type}/${id}`)
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
    (properties && (
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="https://dummyimage.com/600x400/adadad/ffffff.jpg" />
          </div>
          <div className="col">
            <h1> {properties.name}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <hr className="border border-danger border-1"></hr>

        {type == "planets" ? (
          <div className="d-flex gap-5">
            {/* Diameter Column */}
            <div className="d-flex flex-column">
              <h1>Diameter</h1>
              <p>{properties.diameter}</p>
            </div>

            {/* Rotation Period Column */}
            <div className="d-flex flex-column">
              <h1>Rotation Period</h1>
              <p>{properties.rotation_period}</p>
            </div>

            {/* Orbital Period Column */}
            <div className="d-flex flex-column">
              <h1>Orbital Period</h1>
              <p>{properties.orbital_period}</p>
            </div>

            {/* Gravity Column */}
            <div className="d-flex flex-column">
              <h1>Gravity</h1>
              <p>{properties.gravity}</p>
            </div>

            {/* Population Column */}
            <div className="d-flex flex-column">
              <h1>Population</h1>
              <p>{properties.population}</p>
            </div>

            {/* Climate Column */}
            <div className="d-flex flex-column">
              <h1>Climate</h1>
              <p>{properties.cliamte}</p>
            </div>

            {/* Terrain Column */}
            <div className="d-flex flex-column">
              <h1>Terrain</h1>
              <p>{properties.terrain}</p>
            </div>
          </div>

        ) 
        : type == "people" ? (
          <div className="d-flex gap-5">
            {/* Height Column */}
            <div className="d-flex flex-column">
              <h1>Height</h1>
              <p>{properties.height}</p>
            </div>

            {/* Mass Column */}
            <div className="d-flex flex-column">
              <h1>Mass</h1>
              <p>{properties.mass}</p>
            </div>

            {/* Hair Color Column */}
            <div className="d-flex flex-column">
              <h1>Hair Color</h1>
              <p>{properties.hair_color}</p>
            </div>

            {/* Skin Color Column */}
            <div className="d-flex flex-column">
              <h1>Skin Color</h1>
              <p>{properties.skin_color}</p>
            </div>

            {/* Eye Color Column */}
            <div className="d-flex flex-column">
              <h1>Eye Color</h1>
              <p>{properties.eye_color}</p>
            </div>

            {/* Birth Year Column */}
            <div className="d-flex flex-column">
              <h1>Year of Birth</h1>
              <p>{properties.birth_year}</p>
            </div>

            {/* Gender Column */}
            <div className="d-flex flex-column">
              <h1>Gender</h1>
              <p>{properties.gender}</p>
            </div>
          </div>
        ) 
        : type == "starships" ? (
          <div className="d-flex gap-5">
            {/* Model Column */}
            <div className="d-flex flex-column">
              <h1>Model</h1>
              <p>{properties.model}</p>
            </div>

            {/* Starship Class Column */}
            <div className="d-flex flex-column">
              <h1>Starship Class</h1>
              <p>{properties.starship_class}</p>
            </div>

            {/* Manufacturer Period Column */}
            <div className="d-flex flex-column">
              <h1>Manufacturer</h1>
              <p>{properties.manufacturer}</p>
            </div>

            {/* Cost in Credits Column */}
            <div className="d-flex flex-column">
              <h1>Cost in Credits</h1>
              <p>{properties.cost_in_credits}</p>
            </div>

            {/* Crew Column */}
            <div className="d-flex flex-column">
              <h1>Crew</h1>
              <p>{properties.crew}</p>
            </div>

            {/* Passengers Column */}
            <div className="d-flex flex-column">
              <h1>Passengers</h1>
              <p>{properties.passengers}</p>
            </div>

            {/* Consumables Column */}
            <div className="d-flex flex-column">
              <h1>Consumables</h1>
              <p>{properties.consumables}</p>
            </div>
          </div>
        ) : (
          <h1>Ooops... Wrong Type</h1>
        )}
      </div>
    )) || (
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  );
};
