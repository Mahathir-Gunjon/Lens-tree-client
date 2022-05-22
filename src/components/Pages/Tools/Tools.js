import React from 'react';
import useTools from '../../../Hooks/UseTools';
import Tool from './Tool';

const Tools = () => {
    const [tools] = useTools();
    return (

        <div className='bg-base-200 py-10'>
            <h1 className='text-center text-4xl my-5'>Tools</h1>
            <div className="hero">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                tools.map(tool => <Tool
                    key={tool._id}
                    tool={tool}
                >
                </Tool>)
            }
        </div>
        </div>
        </div>
    );
};

export default Tools;