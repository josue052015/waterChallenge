import React from 'react'
import styles from './styles.css'

const InputComponent = ({placeholder, value, type, required = false, onChange = () => {}}) => {
    return (
        <>
            <div className="inputField">
                <input placeholder={placeholder} value = {value} type={type} required = {required} 
                onChange = {(e) => onChange(e)}/>
            </div>

        </>
    )
}

export default InputComponent