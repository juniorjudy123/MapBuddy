import React, { useState } from "react"

function RegisterComponent() {
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
						MappinBuddy
					</h1>
				</div>
				<form
					className="flex flex-col w-full "
					onSubmit={(e) => e.preventDefault()}
				>
					{/* <h1 className="text-center my-2 font-bold text-lg">Register</h1> */}
					<input
						type="text"
						placeholder="Full Name"
						className="p-2  my-2 border rounded-lg"
					/>
					<input
						type="text"
						placeholder="Email ID"
						className="p-2 my-2 border rounded-lg "
					/>
					<input
						type="password"
						placeholder="Password"
						className="p-2 my-2 rounded-lg border"
					/>
					<button className=" bg-tomato text-white rounded-lg mt-5 p-2 mb-5">
						Register
					</button>

					<span className="text-center">
						<h2 className="text-green-600 mb-2 text-lg">
							Registration successful !
						</h2>
						<p>Thank you for registering</p>
					</span>
					<span className="text-center">
						<h2 className="text-red-600 mb-2 text-lg">
							Registration Failed !!!
						</h2>
						<p>Something went Wrong </p>
					</span>
				</form>
			</div>
		</div>
	)
}

export default RegisterComponent
