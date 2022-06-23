import React,{memo} from 'react'
import { ControlErrorMessage } from '../ControlErrorsMessage/ControlErrorMessage'
import { Field } from 'formik'
export const InputPersonal = memo(({label, ...props}) => {
    console.log("input personal render")
    return (
        <>
            <label htmlFor="lastname">{label}</label>
            <Field {...props} />
            <h6 className='error-message'><ControlErrorMessage name={props.name} /></h6>
        </>
    )
})
