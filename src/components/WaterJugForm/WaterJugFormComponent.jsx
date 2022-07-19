import React, { useState } from 'react'
import {InputComponent, ButtonComponent } from '../../utils'


const WaterJugFormComponent = ({setFormData}) => {

    const [bucketX, setBucketX] = useState("")
    const [bucketY, setBucketY] = useState("")
    const [waterAmount, setWaterAmount] = useState("")


    const handleSubmit = () => {
        const formData = {
            bucketX: bucketX,
            bucketY: bucketY,
            waterAmount: waterAmount
        }
        setFormData(formData)
    }

    

    return (
        <>
           
                    <InputComponent placeholder="Bucket X" type="number" value={bucketX} required={true} onChange={(e) => setBucketX(e.target.value)} />
                    <InputComponent placeholder="Bucket Y" type="number" value={bucketY} required={true} onChange={(e) => setBucketY(e.target.value)}/>
                    <InputComponent placeholder="Amount of water" type="number" value={waterAmount} required={true} onChange={(e) => setWaterAmount(e.target.value)}/>
                    
                    <ButtonComponent type="submit" text="Generate steps" onClick={handleSubmit}/>
                
        </>
    )
}

export default WaterJugFormComponent