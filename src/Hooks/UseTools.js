import { useEffect, useState } from 'react';

const useTools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-eyrie-82354.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);

    return [tools, setTools];
};

export default useTools;