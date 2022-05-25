import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success(result.message, 'review added');
            })
    }

    return (
        <div className='w-full mx-auto mt-5 pt-5'>
            <div className='text-center'>
                <h1 className='text-5xl'>Add a review</h1>
                <h2 className='text-2xl text-black'>Add a new review and Your experience</h2>
            </div>

            <div className="lg:py-5">
                <div className="lg:flex md:flex">
                    <div className="lg:w-6/6 w-full">
                        <img className='img-fluid' src="https://i.ibb.co/qCq1Dg8/undraw-add-information-j2wg.png" alt="" />
                    </div>
                    <div className='lg:w-5/6 text-center mx-auto h-max bg-accent py-10 mt-10'>
                        <form className='w-[320px] mx-auto' onSubmit={handleSubmit(onSubmit)}>
                            <textarea className="input input-bordered input-warning w-full max-w-xs" type='text-area' placeholder='Write Something you felt us and our product quality' {...register("description", { required: true })} />
                            <br />
                            <br />
                            <input className="input input-bordered input-warning w-full max-w-xs" type='number' placeholder='Rating out of 5 ?' {...register("rating", { required: true })} />
                            <br />
                            <br />
                            <input className="input input-bordered input-warning w-full max-w-xs" value={user.photoURL} {...register("user")} />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}
                            <br />
                            <br />
                            <input className='btn btn-secondary btn-md w-full' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default AddReview;