import React, { useState, memo } from 'react';
import logo from "../../images/see.png"
import { Field } from 'formik';
import { ControlErrorMessage } from '../ControlErrorsMessage/ControlErrorMessage';
import { useCallback } from 'react';



export const InputPassword = memo(({ label, ...props }) => {
    const [typePassword, setTypePassword] = useState(true)
    const type = typePassword ? "password" : "text"
    console.log("input password render")
    const handlePasswordVisibility = useCallback(() => {
        setTypePassword((type) => (!type))
    }, [setTypePassword])
    return (
        <>
            <label htmlFor="password">{label}</label>
            <div className='cont-input__watch-password-icon' style={{ display: "flex", alignItems: "center", position: "relative" }}>
                <Field type={type} {...props} />
                <button type='button' style={{ position: "absolute", right: "6px", cursor: "pointer", border: "none", backgroundColor: "transparent" }} onClick={handlePasswordVisibility}>
                    <img width={20} height={20} src={logo} alt="" />
                </button>
            </div>
            <h6 className='error-message'><ControlErrorMessage name={props.name} /></h6>
        </>
    )
})
