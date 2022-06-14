import React from 'react'
import { ControlErrorMessage } from '../ControlErrorsMessage/ControlErrorMessage'
import { Field } from 'formik'
export const InputPersonal = ({ name, placeholder, id, type, label}) => {
    return (
        <>
            <label htmlFor="lastname">{label}</label>
            <Field name={name} placeholder={placeholder} id={id} type={type} />
            <h6 className='error-message'><ControlErrorMessage name={name} /></h6>
        </>
    )
}
