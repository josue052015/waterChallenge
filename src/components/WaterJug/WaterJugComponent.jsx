import React, { useState } from 'react'
import WaterJugFormComponent from '../WaterJugForm/WaterJugFormComponent'
import InstructionsComponent from '../instructions/InstructionsComponent'
import styles from './styles.css'

const WaterJugComponent = () => {

    const [formData, setFormData] = useState()
    return (
        <>

            <div className="wrapper">
                <header>Water Jug Challenge</header>
                <WaterJugFormComponent setFormData={(formData) => setFormData(formData)} />

                <div style={{ "paddingBottom": "15px" }} />

                <div className='instructions'>
                    {formData && <InstructionsComponent waterJugInformation={formData} />}
                </div>

            </div>
            
        </>
    )
}

export default WaterJugComponent