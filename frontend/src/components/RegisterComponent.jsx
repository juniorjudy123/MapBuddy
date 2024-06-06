import axios from "axios"
import React, { useRef, useState } from "react"
import CancelRoundedIcon from "@mui/icons-material/CancelRounded"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied"

function RegisterComponent({ setIsRegister }) {
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")
	const nameRef = useRef()
	const emailRef = useRef()
	const passwordRef = useRef()

	const handleLoginsubmit = async (e) => {
		e.preventDefault() //will prevent refreshing

		const newUser = {
			username: nameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
		}
		console.log("newUser:", newUser)

		try {
			await axios.post("/api/users/register", newUser)
			setSuccess(true)
			setError(false)
		} catch (error) {
			console.log(error.response.data.error)
			setErrorMessage(error.response.data.error)
			setError(true)
			setSuccess(false)
		}
	}
	return (
		<div className="flex items-center justify-center h-screen ">
			<div className=" absolute p-5  bg-white flex flex-col items-center w-[300px] opacity-95">
				<div className="flex p-2 m-2 ">
					<img
						src="../assets/mappinfavicon.jpg"
						alt="logo-img"
						className="w-12 h-12"
					/>
					<h1 className="text-center font-bold text-lg text-teal-300">
						MappInBuddy
					</h1>
				</div>

				<form className="flex flex-col w-full " onSubmit={handleLoginsubmit}>
					{/* <h1 className="text-center my-2 font-bold text-lg">Register</h1> */}
					<input
						ref={nameRef}
						type="text"
						placeholder="Full Name"
						className="p-2  my-2 border rounded-lg"
					/>
					<input
						ref={emailRef}
						type="text"
						placeholder="Email ID"
						className="p-2 my-2 border rounded-lg "
					/>
					<input
						ref={passwordRef}
						type="password"
						placeholder="Password"
						className="p-2 my-2 rounded-lg border"
					/>

					<button
						className=" bg-teal-400 text-white rounded-lg mt-5 p-2 mb-5"
						type="submit"
					>
						Register
					</button>
					{success && (
						<span className="text-center">
							<CheckCircleOutlineIcon />
							<h2 className="text-green-600 mb-2 text-lg  font-serif">
								Registration successful !
							</h2>
							<p>Thank you for registering</p>
						</span>
					)}
					{error && (
						<span className="text-center my-2 ">
							<SentimentVeryDissatisfiedIcon className="text-red-500 " />
							<h2 className="text-red-600 mb-2 text-lg font-serif font-semibold">
								Registeration failed
							</h2>
							<p className="text-sm font-semibold text-white bg-red-400  animate-bounce ">
								{errorMessage} !!!
							</p>
						</span>
					)}
				</form>
				<CancelRoundedIcon
					className="position absolute top-3 right-3 cursor-pointer "
					onClick={() => setIsRegister(false)}
				/>
			</div>
		</div>
	)
}

export default RegisterComponent
