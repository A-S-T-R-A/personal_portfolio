import React, { useState } from "react"
/* import emailjs from "@emailjs/browser" */

import { FormUi } from "./components/FormUi/FormUi"
import { Section, SectionTitle } from "modules/common/ui"
import { FormLoading } from "./components/FormLoading/FormLoading"

export default function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const [showForm, setShowForm] = useState(true)
    const [loading, setLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    function sendEmail() {
        setLoading(true)
        /*  emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                formRef.current,
                process.env.REACT_APP_USER_ID
            ) */
        new Promise(resolve => {
            setShowForm(false)
            setTimeout(() => resolve(), 1500)
        })
            .then(
                result => {
                    setIsSuccess(true)
                    setName("")
                    setEmail("")
                    setNameError(false)
                    setEmailError(false)
                },
                error => {
                    error && console.log(error.text)
                }
            )
            .finally(() => {
                setLoading(false)
            })
    }

    function handleNameChange(e) {
        e.preventDefault()
        setName(e.target.value)
        setNameError(false)
    }

    function handleEmailChange(e) {
        e.preventDefault()
        setEmail(e.target.value)
        setEmailError(false)
    }

    function submitHandler(e) {
        e.preventDefault()

        const nameRegEx = /^[a-zа-яё\s]+$/iu
        const emailRegEx =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if (!nameRegEx.test(name)) {
            setNameError(true)
            return
        }
        if (!emailRegEx.test(email)) {
            setEmailError(true)
            return
        }
        sendEmail()
    }

    return (
        <Section id="contact">
            <SectionTitle>Contact me</SectionTitle>

            {showForm ? (
                <FormUi
                    submitHandler={submitHandler}
                    handleNameChange={handleNameChange}
                    handleEmailChange={handleEmailChange}
                    handleMessageChange={e => setMessage(e.target.value)}
                    nameError={nameError}
                    emailError={emailError}
                    name={name}
                    email={email}
                    message={message}
                    onClick={submitHandler}
                />
            ) : (
                <FormLoading loading={loading} isSuccess={isSuccess} />
            )}
        </Section>
    )
}
