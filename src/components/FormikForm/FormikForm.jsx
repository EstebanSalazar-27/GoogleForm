import React, { useState } from 'react'

import logoGogle from "../../images/buscar.png"
import "./form.css"
//Components
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { InputPassword } from '../InputPassword/InputPassword'
import { InputPersonal } from '../InputPersonal/InputPersonal'
import { CheckedFormSent } from '../CheckedFormSent/CheckedFormSent'
export const FormikForm = () => {
    const [formSent, setFormSent] = useState(false)
    console.log(formSent)

    const validate = (values) => {
        const errors = {}

        if (values.password.length < 6) { errors.password = `this field needs a minimum length of six and the current is ${values.password.length}` }
        if (values.confirmPassword && values.password != "") {
            if (values.confirmPassword !== values.password) {
                errors.confirmPassword = "Password is not the same"
            }
        }
        if (!/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(values.name)) {
            errors.name = " This field can only contain letters! "
        }
        if (!/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(values.lastname)) {
            errors.lastname = " This field can only contain letters!"
        }
        if (!/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/.test(values.email)) {
            errors.email = "This field doesn't meet the requirements. Remeber use @ and .com at the end of your gmail  "
        }

        return errors
    }
    const onSubmit = (values) => {
        setFormSent(true)
    }

    return (
        <div>
            <Formik
                initialValues={{ name: "", lastname: "", email: "", password: "", confirmPassword: "" }}
                onSubmit={onSubmit}
                validate={validate}
            >
                <Form className='form'>
                    <header className='form__header'>
                        <h3>Google Form</h3>
                        <img src={logoGogle} className="form-header__logo-google" width={90} style={{ position: "absolute", bottom: "50%", right: "50%", transform: "translate(50%, 50%)" }} alt="" />
                    </header>
                    <div className='form__container'>

                        <div className='form__cont-input'>
                            <InputPersonal label="Name" name="name" id="name" placeholder="Name" type="text" />
                        </div>

                        <div className='form__cont-input'>
                            <InputPersonal label="Lastname" name="lastname" id="lastname" placeholder="Lastname" type="text" />
                        </div>

                        <div className='form__cont-input'>
                            <InputPersonal label="email" name="email" id="email" placeholder="Email@" type="email" />
                        </div>

                        <div className='form__cont-input' >
                            <InputPassword label="Password" name="password" id="password" placeholder="Password" />
                        </div>

                        <div className='form__cont-input'>
                            <InputPassword label="confirm password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
                        </div>
                        <div style={{ display: "flex", flexDirection:"column", width: "100%", gap:"1rem", alignItems: "flex-start" }}>
                            
                            {
                            !formSent 
                            ?  
                            <input type="submit" value="Register" style={{ color: "white", fontWeight: "600", backgroundColor: "#23a7ff", padding: ".7rem 1.8rem", border: "none", borderRadius: "2px", cursor: "pointer" }} /> 
                            : 
                            <div className='cont-form-sent'>
                                <h6 className='form_form-sent-message'>Form sent with success!</h6>
                            <CheckedFormSent/>
                            </div>   }
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
