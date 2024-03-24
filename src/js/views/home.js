import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { PeopleCard } from "../component/peoplecard";
import { PlanetCard } from "../component/planetcard";
import { StarshipCard } from "../component/starshipcard";


export const Home = () => {

	const { store, actions } = useContext(Context);
	
	return <div className="container">
		<section> 
			<h1>People</h1>
            <div className=" d-flex gap-3 overflow-scroll">{
            store.people.map((people) => <PeopleCard url={people.url} id = {people.uid} />)
		}
		</div>		
		</section>
		<section>
		<h1>Planets</h1>
            <div className=" d-flex gap-3 overflow-scroll">{
            store.planets.map((planets) => <PlanetCard url={planets.url} id = {planets.uid} />)
			}
			</div>
		</section>
		<section>
			<h1>Starships</h1>
            <div className=" d-flex gap-3 overflow-scroll">{
            store.starships.map((starships) => <StarshipCard url={starships.url} id = {starships.uid} />)
			}
			</div>
		</section>
	</div>
};
