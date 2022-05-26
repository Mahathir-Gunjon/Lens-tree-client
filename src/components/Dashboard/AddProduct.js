import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useTools from '../../Hooks/useTools';

const AddProduct = () => {

    const [tools] = useTools()

    const [user] = useAuthState(auth);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://afternoon-eyrie-82354.herokuapp.com/tool`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success("Item added successfully");
            })
    }

    return (
        <>
            <div>
                <div className="flex justify-end bg-accent p-5 rounded-lg my-8 mt-[-55px]">
                    <h2 className='text-xl font-semibold'>Add a new Product</h2>
                </div>

                <div className="w-full mx-auto mt-28">
                    <div className="card lg:card-side shadow-xl">
                        <img className='w-3/6 object-contain' src="https://i.ibb.co/qCq1Dg8/undraw-add-information-j2wg.png" alt="Album" />
                        <div className='card-body'>
                            <form className='' onSubmit={handleSubmit(onSubmit)}>
                                <input className="input input-bordered input-warning w-full  my-2" type='text' placeholder='Enter name or brand' {...register("name", { required: true })} />
                                <br />
                                <input className="input input-bordered input-warning w-full  my-2" type='number' placeholder='Product Price' {...register("Price", { required: true })} />
                                <br />
                                <input className="input input-bordered input-warning w-full  my-2" type='number' placeholder='Product quantity' {...register("minOrderLimit", { required: true })} />
                                <br />
                                <input className="input input-bordered input-warning w-full  my-2" type='number' placeholder='Product available quantity' {...register("availableQuantity", { required: true })} />
                                <br />
                                <textarea className="input input-bordered input-warning w-full  my-2" type='text-area' placeholder='Details about the product' {...register("description", { required: true })} />
                                <br />
                                <input className="input input-bordered input-warning w-full mb-3" type='text' placeholder='Product Image url' {...register("picture", { required: true })} />
                                <br />
                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <span>This field is required</span>}

                                <input className='btn btn-block btn-info text-xl' type="submit" value="Add" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default AddProduct;