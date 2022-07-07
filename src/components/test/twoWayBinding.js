// Create button get gift
// Get value into form: input, radio, checkbox

import {useState} from "react";

const gifts = [
    'PC',
    'SH',
    'House',
    'Mazda',
    'Vila'
]
const skills = [
    {
        id: 1,
        name: 'Javascript',
    },
    {
        id: 2,
        name: 'JQuery',
    },
    {
        id: 3,
        name: 'ReactJS',
    },
    {
        id: 4,
        name: 'PHP',
    },
    {
        id: 5,
        name: 'Laravel',
    },
]
const jobs = [
    {
        'id': 1,
        'name': 'Intern'
    },
    {
        'id': 2,
        'name': 'Fresher'
    },
    {
        'id': 3,
        'name': 'Junior'
    },
    {
        'id': 4,
        'name': 'Middle'
    },
    {
        'id': 5,
        'name': 'Senior'
    },
    {
        'id': 6,
        'name': 'Leader'
    },
    {
        'id': 7,
        'name': 'PM'
    },
    {
        'id': 8,
        'name': 'CTO'
    },
    {
        'id': 9,
        'name': 'Founder'
    },
]


const TwoWayBinding = () => {
    const [gift, setGift] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [vJob, setVJob] = useState(3)
    const [vSkill, setVSkill] = useState([])

    const handleGift = () => {
        let index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index])
    }
    const changeSkill = (e) => {
        let id = e.target.value
        setVSkill(() => {
            let isChecked = vSkill.includes(id)
            if(isChecked) {
                return vSkill.filter(item => item !== id)
            } else {
                return [...vSkill, id]
            }
        })
    }
    const handleSubmit = () => {
        console.log({
            gift    : gift,
            name    : name,
            email   : email,
            job     : vJob,
            skill   : vSkill
        })
    }

    return (
        <div>
            <div style={{padding: 20}}>
                <p>{gift || 'Empty gift'}</p>
                <button onClick={handleGift}>Get gift</button>
            </div>
            <div>
                <div>
                    <span>Name</span>
                    <input placeholder={'Enter name'}
                           onChange={e => setName(e.target.value)}
                           value={name} />
                </div>
                <div>
                    <span>Email</span>
                    <input placeholder={'Enter email'}
                            onChange={e => setEmail(e.target.value)}
                            value={email}/>
                </div>
            </div>
            <div style={{marginTop: 20}}>
                {jobs.map(job => (
                    <div key={job.id}>
                        <input type={'radio'}
                               id={`job_${job.id}`}
                               value={job.id}
                               checked={vJob === job.id}
                               onChange={() => setVJob(job.id)} />
                        <label htmlFor={`job_${job.id}`}>{job.name}</label>
                    </div>
                ))}
            </div>
            <div style={{marginTop: 20}}>
                {skills.map(skill => (
                    <div key={skill.id}>
                        <input type={'checkbox'}
                               id={`skill_${skill.id}`}
                               value={skill.id}
                               onChange={changeSkill} />
                       <label htmlFor={`skill_${skill.id}`}>{skill.name}</label>
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default TwoWayBinding;