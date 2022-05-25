import React from 'react';
import useTools from '../../../Hooks/useTools';
import Tool from './Tool';
import './Tools.css'

const Tools = () => {
    const [tools] = useTools();
    return (

        <div className='tools-bg py-10'>
            <h1 className='text-center text-5xl font-semibold text-white my-5'>Tools</h1>
            <p className='text-center text-2xl text-slate-100 mb-16'>Tools that you need most for make your life easy</p>
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