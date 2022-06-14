import React from 'react'
import { ErrorMessage } from 'formik'
export const ControlErrorMessage= ({name}) => {

  return (
    <div>
        <ErrorMessage name={name}/>
    </div>
  )
}
