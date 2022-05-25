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
            <div className="card w-96 bg-slate-100 text-black">
                <figure><img className='object-contain w-96 h-96 mt-[-50px]' src={picture} alt="car!" /></figure>
                <div className="card-body h-72 mt-[-70px]">
                    <h2 className="card-title">{name}</h2>
                    <table className="table border-info">
                        <thead className='bg-info'>
                            <tr>
                                <th scope="col">PRICE</th>
                                <th scope="col">MOQ</th>
                                <th scope="col">APQ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${Price}</td>
                                <td>{minOrderLimit}</td>
                                <td>{availableQuantity}</td>
                            </tr>
                        </tbody>
                    </table>
                     <p>{description}</p>
                    <div className="card-actions justify-end mb-20px">
                        <button onClick={() => handleNavigateClick(_id)} className='btn btn-primary shadow'>Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;