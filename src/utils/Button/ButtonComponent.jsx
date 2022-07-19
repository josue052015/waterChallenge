import React from 'react'
import './styles.css'

const ButtonComponent = ({ type, text, onClick }) => {
    return (
        <>
            <button className='button' type={type} onClick = {onClick}>{text}</button>
        </>
    )
}

export default ButtonComponent