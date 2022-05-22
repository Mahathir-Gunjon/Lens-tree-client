import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Pages/Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const imageStorageKey='243070f0c2cd02651921337569298ea9';

    /**
     * 3 ways to store images
     * 1. Third party storage //Free open public storage is ok for Practice project 
     * 2. Your own storage in your own server (file system)
     * 3. Database: Mongodb 
     * 
     * YUP: to validate file: Search: Yup file validation for react hook form
    */
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                }
                // send to your database 
                fetch('http://localhost:5000/doctor', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Doctor added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the doctor');
                    }
                })

            }
            
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className="text-3xl text-center font-bold mt-6">Add a New Doctor</h1>

            <div className="lg:w-2/6 mx-auto">
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
                            <span className="label-text">Specialty</span>
                        </label>
                        <select {...register('specialty')} class="select input-bordered input-primary w-full max-w-xs">
                            {
                                services.map(service => <option
                                    key={service._id}
                                    value={service.name}
                                >{service.name}</option>)
                            }
                        </select>

                        <label className="label">
                            <span className="label-text">Doctor Photo</span>
                        </label>
                        <input
                            type='file'
                            className='input input-bordered input-primary w-full max-w-xs mb-4'
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'image is required'
                                }
                            })
                            }
                        />
                        {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name.message}</span>}

                    </div>
                    <br />
                    <input type="submit" value="Add Doctor" className="btn btn-outline w-full" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;