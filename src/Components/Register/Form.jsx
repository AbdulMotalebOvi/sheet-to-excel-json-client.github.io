
import { useForm } from "react-hook-form";
// import { toast } from "react-hot-toast";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import ButtonBlack from "../ButtonBlack/ButtonBlack";
import { toast } from "react-hot-toast";

import Loader from "../../Loader/Loader";
import useToken from "../../Hooks/useToken";


export default function Form() {
    const imgbb = 'f8dd55d27cbe2841ea00d77e428e6944'
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false); // Set initial loading state to false
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const router = useRouter();
    const [tokenemail, setTokenEmail] = useState('')
    const [token] = useToken(tokenemail)
    if (token) {
        navigate('/dashboard')
    }

    const submit = (data) => {
        setLoading(true);

        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        // Set loading state to true when form is submitted

        fetch(`https://api.imgbb.com/1/upload?&key=${imgbb}`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                // user info 

                const saveUser = {
                    name: data.userName,
                    email: data.email,
                    password: data.password,
                    apiKey: data.apiKey,
                    secretKey: data.secretKey,
                    profilePicture: result.data.url
                }
                setTokenEmail(data.email)
                // save database

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        reset();
                        if (data.message) {
                            toast.error(data.message)
                        } else {

                            toast.success('User Created Successfully');
                            localStorage.setItem('userId', data.insertedId);
                        }
                        setLoading(false); // Set loading state to false when API call is complete

                    })
                    .catch(error => {
                        console.log(error)
                        setLoading(false); // Set loading state to false in case of error
                    });
            })



    }
    if (loading) {
        return <Loader />
    }

    return (
        <div className=" border-2 border-[#eaedff] max-w-screen-md mx-auto">
            <div className="p-[10%]">

                <h4 className="text-3xl text-center mb-5">Signup From Here</h4>

                <form onSubmit={handleSubmit(submit)} className="w-full flex flex-col justify-center">
                    {/* username */}
                    <div>
                        <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                            <input
                                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                {...register("userName", { required: true })}
                            />
                            <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                User Name
                            </span>
                            {errors.userName?.type === "required" && (
                                <p className="text-red-400 font-semibold">User name is required</p>
                            )}
                        </label>
                    </div>
                    <div className="form-control space-y-4 mt-8">
                        {/* name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                    <input
                                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                        {...register("apiKey", { required: true })}
                                    />
                                    <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                        Your Api Key
                                    </span>
                                    {errors.apikey?.type === "required" && (
                                        <p className="text-red-400 font-semibold">Api Key is required</p>
                                    )}
                                </label>
                            </div>
                            <div>
                                <label className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                    <input
                                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                        {...register("secretKey", { required: true })}
                                    />
                                    {errors.secretKey?.type === "required" && (
                                        <p className="text-red-400 font-semibold">secretKey is required</p>
                                    )}
                                    <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                        SecretKey
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {/* email  */}
                            <div >
                                <label htmlFor="UserEmail" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                    <input className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" {...register("email", { required: true })} />
                                    <span className="absolute start-0 top-2 -translate-y-1/2 text-[13px] text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[17px]">
                                        Email
                                    </span>
                                    {errors.email?.type === 'required' && <p className="text-red-600 font-semibold">Email is required</p>}

                                </label>
                            </div>

                        </div>
                        {/* Image */}
                        <div>
                            <label className="label">
                                <span className="label-text">Choose Your photo</span>
                            </label>
                            <div className="form-control w-full sm:max-w-md border p-8">
                                <input type="file" className="file-input file-input-bordered w-full" {...register("image", { required: 'Photo is required' })} />
                                {errors.image && <p className='text-red-500 font-semibold'>{errors.image?.message}</p>}
                            </div>
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

                                {errors.password?.type === 'required' && <p className="text-red-600 font-semibold">Password is required</p>}
                            </label>
                        </div>
                    </div>
                    <div className="space-y-5 my-10 m-auto">
                        <ButtonBlack type='submit' title='Register Account' />
                        <p className=" text-black text-center">Or</p>

                        <Link className=" ml-3" href='/SecurityLogin'>
                            <Button title='please login' />
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    )

}
