// Create todo list and add localstorage
import {useState} from "react";

const TodoList = () => {
    const [work, setWork]   = useState('')
    const [works, setWorks] = useState(() =>{
        let storage = localStorage.getItem('works')
        let storageWork = JSON.parse(storage)
        return storageWork || []
    })

    const handleAdd = () => {
        if(work.length === 0) return
        setWorks(() => {
            const newWork   = [...works, work]
            const jsonWorks = JSON.stringify(newWork)
            localStorage.setItem('works', jsonWorks)
            return newWork
        })
        setWork('')
    }

    return (
        <div>
            <div>
                <input placeholder={'add todo'}
                       value={work}
                       onChange={e => setWork(e.target.value)}
                       onKeyPress={e => {
                           if (e.target.value === 0) return
                           if (e.charCode  === 13) handleAdd()
                       }} />
                <button onClick={handleAdd}>Add</button>
            </div>
            <div>
                <ul>
                    {works.map((work, index) => (
                        <li key={index}>{work}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;