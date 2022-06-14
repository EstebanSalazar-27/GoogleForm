import React, { useState, useRef, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import logo from "../images/see.png"
import logoGogle from "../images/buscar.png"
export const FormikComponent = () => {
    const passwordRef = document.getElementById("password")
    const [typePassword, setTypePassword] = useState(true)
    const type = typePassword ? "password" : "text"

    const handlePasswordVisibility = () => {
        setTypePassword(!typePassword)
    }

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

    return (
        <div>
            <Formik
                initialValues={{ name: "", lastname: "", email: "", password: "", confirmPassword: "" }}
                onSubmit={(values) => console.log(values)}
                validate={validate}
            >
                <Form style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", width: "45rem", backgroundColor: "#ffffff", boxShadow: " 2px 10px 10px #1f1f1f" }}>
                    <header className='form__header'>
                        <h3>Google Form</h3>
                        <img src={logoGogle} className="form-header__logo-google" width={90} style={{ position: "absolute", bottom: "50%", right: "50%", transform: "translate(50%, 50%)" }} alt="" />
                    </header>
                    <div className='form__container'>


                        <div className='form__cont-input'>
                            <label htmlFor="name">name</label>
                            <Field placeholder="Name" name="name" type="text" />
                            <h6 className='error-message'><ErrorMessage name="name" /></h6>
                        </div>

                        <div className='form__cont-input'>
                            <label htmlFor="lastname">lastname</label>
                            <Field placeholder="Lastname" name="lastname" type="text" />
                            <h6 className='error-message'><ErrorMessage name="lastname" /></h6>
                        </div>

                        <div className='form__cont-input'>
                            <label htmlFor="email">email</label>
                            <Field placeholder="@Email" name="email" type="email" />
                            <h6 className='error-message'><ErrorMessage name="email" /></h6>
                        </div>

                        <div className='form__cont-input' >
                            <label htmlFor="password">password</label>
                            <div className='cont-input__watch-password-icon' style={{ display: "flex", alignItems: "center", position: "relative" }}>
                                <Field placeholder="Password" name="password" type={type} id="password" />

                                <button type='button' style={{ position: "absolute", right: "6px", cursor: "pointer", border: "none", backgroundColor: "transparent" }} onClick={handlePasswordVisibility}>
                                    <img width={20} height={20} src={logo} alt="" />
                                </button>

                            </div>
                            <h6 className='error-message'><ErrorMessage name="confirmPassword" /></h6>

                            <h6 className='error-message'><ErrorMessage name="password" /></h6>
                        </div>
                        <div className='form__cont-input'>
                            <label htmlFor="password">verify password</label>
                            <div className='cont-input__watch-password-icon' style={{ display: "flex", alignItems: "center", position: "relative" }}>
                                <Field placeholder="Confirm Password" name="confirmPassword" id="confirmPassword" type={type} style={{ display: "flex", alignItems: "center", position: "relative" }} />
                                <button type='button' style={{ position: "absolute", right: "6px", cursor: "pointer", border: "none", backgroundColor: "transparent" }} onClick={handlePasswordVisibility}>
                                    <img width={20} height={20} src={logo} alt="" />
                                </button>

                            </div>

                            <h6 className='error-message'><ErrorMessage name="confirmPassword" /></h6>
                        </div>
                        <div>
                            <input type="submit" style={{ color: "white", fontWeight: "600", backgroundColor: "#23a7ff", padding: ".7rem 1.8rem", border: "none", borderRadius: "2px", cursor: "pointer" }} />
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
