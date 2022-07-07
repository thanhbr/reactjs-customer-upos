import React, {useEffect, useState} from 'react';

function TimeDown() {
    const [countDown, setCountDown] = useState(10)
    useEffect(() => {
        const timer = setInterval( () => {
            setCountDown(pre => pre - 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div style={{marginTop: 20}}>
            <p>{countDown}</p>
        </div>
    );
}

export default TimeDown;