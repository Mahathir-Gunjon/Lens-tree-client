import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/Header/Loading';
import auth from '../firebase.init';
import useTokens from '../Hooks/useTokens';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithGoogle,
        gUser,
        gLoading,
        gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useTokens(user || gUser)

    let signInError;

    const navigate = useNavigate();
    const location = useLocation()
    let  from = location.state?.from?.pathname || '/'

    useEffect(()=>{
        if (token) {
            navigate(from, {replace: true})
        }
    },[token, from, navigate])

    if (loading || gLoading) {
        return <Loading/>
    }

    if(error || gError){
        signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-center font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type='email'
                                placeholder='Your Email'
                                className='input input-bordered input-primary w-full max-w-xs mb-4'
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'wrong mail address'
                                    }

                                })
                                }
                            />
                            {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type='password'
                                placeholder='Your password'
                                className='input input-bordered input-primary w-full max-w-xs mb-4'
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'wrong password, must be 6 character'
                                    }

                                })
                                }
                            />
                            {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                        </div>
                        {signInError}
                        <input type="submit" value="Login" className="btn btn-outline w-full" />
                    </form>
                    <p>New To Doctors Portal? <Link className='text-secondary' to='/signUp'>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;