import React, { useState } from "react"

function LoginComponent() {
	return (
		<div className="absolute">
			<div className=""></div>
			<form
				className="absolute p-5 bg-black w-3/12 my-16 text-white mx-auto right-0 left-0  rounded-lg bg-opacity-85 shadow-xl"
				onSubmit={(e) => e.preventDefault()}
			>
				<div className=" p-15 m-8">
					<h1 className=" py-4 font-bold text-3xl">
						{isSignInForm ? "Login" : "Sign Up"}
					</h1>

					{!isSignInForm && (
						<input
							type="text"
							placeholder=" Full Name"
							className="p-4 my-1 w-full opacity bg-gray-900 bg-opacity-80 border  border-slate-700  "
						></input>
					)}

					<input
						type="text"
						placeholder=" Email ID"
						className="p-4 my-1 w-full opacity bg-gray-900 bg-opacity-80 border  border-slate-700"
					></input>

					<input
						type="password"
						placeholder=" Password"
						className="p-3 my-1 w-full  bg-gray-900 bg-opacity-80 border border-slate-700 "
					></input>

					<button
						className="p-3 my-6 bg-red-600 w-full rounded-lg"
						onClick={handleButtonClick}
					>
						{isSignInForm ? "Login" : "Registe"}
					</button>
					<p className=" text-red-700 text-lg font font-bold p-2">
						{errormessage}
					</p>
				</div>
			</form>
		</div>
	)
}

export default LoginRegisterComponent
