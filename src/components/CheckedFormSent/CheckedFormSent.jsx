import React from 'react'
import "./checkedForm.css"
export const CheckedFormSent = () => {
    return (
        <div className='cont-form-sent'>
            <h6 className='form_form-sent-message'>Form sent with success!</h6>
            <div className="success-checkmark">
                <div className="check-icon">
                    <span className="icon-line line-tip"></span>
                    <span className="icon-line line-long"></span>
                    <div className="icon-circle"></div>
                    <div className="icon-fix"></div>
                </div>
            </div>
        </div>

    )
}
