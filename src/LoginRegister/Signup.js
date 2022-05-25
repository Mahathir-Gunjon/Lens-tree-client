import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
// import useToken from '../../hooks/useTokens';
import Loading from '../components/Header/Loading';
import auth from '../firebase.init';

const SignUp = () => {
    const [
        signInWithGoogle,
        gUser,
        gLoading,
        gError
    ] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [
        updateProfile,
        updating,
        userError
    ] = useUpdateProfile(auth);

    // const [token] = useToken(user || gUser)

    const navigate = useNavigate();

    let signInError;
    const { register, formState: { errors }, handleSubmit } = useForm();

    if (loading || gLoading || updating) {
        return <Loading />
    }

    if (error || gError || userError) {
        signInError = <p className='text-red-500'>{error?.message || gError?.message || userError?.message}</p>
    }

    if (user || gUser) {;
        navigate('/');
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
        navigate('/dashboard');
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-center font-bold">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type='text'
                                placeholder='Your name'
                                className='input input-bordered input-primary w-full max-w-xs mb-4'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })
                                }
                            />
                            {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name.message}</span>}

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
                        <input type="submit" value="Sign Up" className="btn btn-outline w-full" />
                    </form>
                    <p>Already SignUp? <Link className='text-secondary' to='/login'>Login Now</Link></p>
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

export default SignUp;