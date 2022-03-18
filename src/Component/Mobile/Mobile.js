import React, { useState } from 'react'

const Mobile = () => {
    const [battary, setBattary] = useState(100)

    const battaryDown = () => {
        const NewBattary = battary - 10
        setBattary(NewBattary)
    }
    return (
        <div>
            <h2>{battary}</h2>
            <button onClick={battaryDown} >battary down</button>
        </div>
    )
}




export default Mobile