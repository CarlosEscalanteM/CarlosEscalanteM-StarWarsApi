import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { PeopleCard } from "../component/peoplecard";


export const Home = () => {

	const { store, actions } = useContext(Context);
	
	return <div className="container">
		<div className=" d-flex gap-3 overflow-scroll">{
store.people.map((person) => <PeopleCard url={person.url}  />)
		}</div>		
	</div>
};
