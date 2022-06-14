import React, { useState } from 'react';
import logo from "../../images/see.png"
import { Field } from 'formik';
import { ControlErrorMessage } from '../ControlErrorsMessage/ControlErrorMessage';



export const InputPassword = ({ label, id, name, placeholder }) => {
    const [typePassword, setTypePassword] = useState(true)
    const type = typePassword ? "password" : "text"

    const handlePasswordVisibility = () => {
        setTypePassword(!typePassword)
    }
    return (
        <>
            <label htmlFor="password">{label}</label>
            <div className='cont-input__watch-password-icon' style={{ display: "flex", alignItems: "center", position: "relative" }}>
                <Field type={type} id={id} name={name} placeholder={placeholder} />
                <button type='button' style={{ position: "absolute", right: "6px", cursor: "pointer", border: "none", backgroundColor: "transparent" }} onClick={handlePasswordVisibility}>
                    <img width={20} height={20} src={logo} alt="" />
                </button>
            </div>
            <h6 className='error-message'><ControlErrorMessage name={name} /></h6>
        </>
    )
}
