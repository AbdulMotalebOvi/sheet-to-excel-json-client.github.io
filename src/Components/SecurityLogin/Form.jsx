
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function Form() {
    const [error, setError] = useState()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const submit = async (data) => {

        try {
            const user = {
                username: data.name,
                password: data.password
            };

            // Make a POST request to your login API
            const response = await axios.post("http://localhost:5000/login", user);

            if (response.data.accessToken) {
                // Successfully logged in
                reset()
                toast.success('Successfully logged in')

                // Store the JWT token in localStorage or sessionStorage
                localStorage.setItem("accessToken", response.data.accessToken);
                // You can redirect the user to a dashboard or another page here
                // For example: history.push("/dashboard");
                navigate(from, { replace: true });
            } else {
                setError("Invalid username or password"); // Set error message for display
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("An error occurred. Please try again.");
        }

    }


    return (
        <div className=" border-2 border-[#eaedff] max-w-screen-md mx-auto">
            <div className="p-[10%]">
                <h4 className="text-3xl text-center mb-5">Login From Here</h4>

                <form onSubmit={handleSubmit(submit)} className="w-full flex flex-col justify-center">
                    <div className="form-control space-y-4 mt-8">

                        {/* email  */}
                        <div >
                            <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                <input className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm " {...register("name", { required: true })} />
                                <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                    Username
                                </span>
                                {errors.className?.type === 'required' && <p className="text-red-600 font-semibold">Name is required</p>}
                            </label>
                        </div>
                        {/* password */}
                        <div>
                            <label htmlFor="password" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                <input type="password" className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" {...register("password", {
                                    required: true,
                                    minLength: { value: 6, message: 'Password must be at least 6 characters or longer' }
                                })} />
                                <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                    Password
                                </span>
                                <p className="text-red-600 font-semibold">{error}</p>
                                {errors.password?.type === 'required' && <p className="text-red-600 font-semibold">Password is required</p>}
                            </label>
                        </div>
                    </div>
                    <div className="space-y-5 my-10">
                        <button className="w-full px-3 py-4 text-xs font-bold text-black uppercase  duration-300 transform border border-[#323232] rounded hover:bg-gray-700 focus:outline-none hover:text-white focus:bg-gray-700 ">Login Now</button>
                        <p className="my-2 text-black text-center">Or</p>

                    </div>
                </form>
                <button

                    className="w-full px-3 py-4 text-xs font-bold text-black uppercase  duration-300 transform border border-[#323232] rounded hover:bg-gray-700 focus:outline-none hover:text-white focus:bg-gray-700 ">Register Now</button>
            </div>

        </div>
    )
}
