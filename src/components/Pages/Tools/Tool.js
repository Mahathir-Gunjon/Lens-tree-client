import React from 'react';

const Tool = ({tool}) => {
    const {name, description, Price, minOrderLimit, availableQuantity, picture} = tool;
    return (
        <div>
            <div class="card w-96 glass text-white">
                <figure><img src={picture} alt="car!"/></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{Price}</p>
                    <p>{minOrderLimit}</p>
                    <p>{availableQuantity}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;