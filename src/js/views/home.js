import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { PeopleCard } from "../component/peoplecard";


export const Home = () => {

	const { store, actions } = useContext(Context);
	
	return <div className="container">
		<section> 
			<h1>People</h1>
            <div className=" d-flex gap-3 overflow-scroll">{
            store.people.map((person) => <PeopleCard url={person.url} id = {person.uid} />)
		}
		</div>		
		</section>

		<section>
			<h1>Planets</h1>
		</section>

		<section>
			<h1>Vehicles</h1>
		</section>
		
	</div>
};
