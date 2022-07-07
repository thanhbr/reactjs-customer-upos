import {useEffect, useState} from "react";

const Tabs = () => {
    const [data, setData]   = useState([])
    const [tab, setTab]     = useState('posts')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${tab}`)
            .then(response => response.json())
            .then(data => {setData(data)})
    }, [tab])

    return (
        <div style={{marginTop: 20}}>
            <div>
                <button onClick={() => setTab('posts')}>Posts</button>
                <button onClick={() => setTab('comments')}>Comments</button>
                <button onClick={() => setTab('albums')}>Albums</button>
            </div>
            <div style={{marginTop: 20}}>
                <ul>
                    {data.map(d => (
                        <li key={d.id}>{d.title || d.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Tabs;