import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, description, Price, minOrderLimit, availableQuantity, picture } = tool;
    const navigate = useNavigate();

    const handleNavigateClick = id => {
        navigate(`/tool/${id}`);
    }
    return (
        <div>
            <div className="card w-96 glass text-white">
                <figure><img src={picture} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{Price}</p>
                    <p>{minOrderLimit}</p>
                    <p>{availableQuantity}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleNavigateClick(_id)} className='btn btn-primary shadow'>Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;