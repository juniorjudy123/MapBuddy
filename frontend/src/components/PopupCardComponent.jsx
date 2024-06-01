import React from "react"
import StarIcon from "@mui/icons-material/Star"
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder"
import { colors } from "@mui/material"

function PopupCardComponent() {
	return (
		<div className="  w-52 h-52 flex flex-col justify-around">
			<label className="text-tomato font-light  border-b-0.5 border-tomato  w-fit h-fit ">
				Place
			</label>
			<h4 className="font-bold">Eiffel Tower</h4>
			<label className="text-tomato font-light  border-b-0.5 border-tomato  w-fit h-fit ">
				Review
			</label>
			<p>Beautiful Place.I like it</p>
			<label className="text-tomato font-light  border-b-0.5 border-tomato  w-fit h-fit ">
				Rating
			</label>
			<div className="text-gold">
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
			</div>
			<label className="text-tomato font-light  border-b-0.5 border-tomato  w-fit h-fit ">
				Information
			</label>
			<span className="">
				created by <span className="font-bold">Benoy</span>
			</span>
			<div className="flex items-center ">
				<QueryBuilderIcon class="w-4 h-4 mr-1" />
				<span className="font-thin">1 hour ago</span>
			</div>
		</div>
	)
}

export default PopupCardComponent
