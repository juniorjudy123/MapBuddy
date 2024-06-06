import React from "react"
import StarIcon from "@mui/icons-material/Star"
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder"
import { format } from "timeago.js"

const PopupCardComponent = ({ pin }) => {
	return (
		<div className="  w-52 flex flex-col justify-around">
			<label className="text-tomato font-light  border-b-0.5 border-tomato  w-fit h-fit ">
				Place
			</label>
			<h4 className=" font-semibold text-lg">{pin.title}</h4>
			<label className="text-tomato font-light  border-b-0.5 border-tomato  w-fit h-fit ">
				Review
			</label>
			<p className="  font-serif text-base">{pin.description}</p>
			<label className="text-tomato font-light  border-b-0.5 border-tomato  w-fit h-fit ">
				Rating
			</label>
			<div className="text-gold">{Array(pin.rating).fill(<StarIcon />)}</div>
			<label className="text-tomato font-light  border-b-0.5 border-tomato  w-fit h-fit ">
				Information
			</label>
			<span>
				created by <span className="font-bold">{pin.username}</span>
			</span>
			<div className="flex items-center ">
				<QueryBuilderIcon className="w-4 h-4 mr-1 " />
				<span className="font-thin text-gray-500">{format(pin.createdAt)}</span>
			</div>
			{/* <CancelRoundedIcon className="position absolute top-4 right-4 cursor-pointer " /> */}
		</div>
	)
}

export default PopupCardComponent
