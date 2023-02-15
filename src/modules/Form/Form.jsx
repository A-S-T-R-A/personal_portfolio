import React, { useEffect, useRef, useState } from "react"
/* import emailjs from "@emailjs/browser" */

import { FormUi } from "./components/FormUi/FormUi"
import FormModal from "./components/FormModal/FormModal"
import { Section, SectionDivider, SectionTitle } from "modules/common/ui"

export default function Form() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [showGratitudeModal, setShowGratitudeModal] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)

    const [loading, setLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const formRef = useRef()

    const [formContact, setFormContact] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#nameInput").focus({ preventScroll: true })
        }, 100)
    }, [formContact])

    useEffect(() => {
        function formContacted() {
            if (loading) return
            const formEl = document.querySelector("#form")
            const rect = formEl.getBoundingClientRect()
            if (rect.top < window.innerHeight) {
                setFormContact(true)
            }
        }
        window.addEventListener("scroll", formContacted)

        return () => {
            window.removeEventListener("scroll", formContacted)
        }
    }, [])

    function handleNameChange(e) {
        e.preventDefault()
        setName(e.target.value)
        setNameError(false)
    }

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
            setTimeout(() => resolve(), 1500)
        })
            .then(
                result => {
                    setIsSuccess(true)
                    setName("")
                    setPhone("")
                    setNameError(false)
                    setPhoneError(false)
                },
                error => {
                    error && console.log(error.text)
                }
            )
            .finally(() => {
                setLoading(false)
            })
    }

    function formatPhone(phone) {
        if (phone === "+") return "+"
        if (phone.length === 1) return `+${phone}`
        return phone
    }

    function handlePhoneChange(e) {
        e.preventDefault()
        setPhone(formatPhone(e.target.value))
        setPhoneError(false)
    }

    function submitHandler(e) {
        e.preventDefault()

        const nameRegEx = /^[a-zа-яё\s]+$/iu
        const phoneRegEx = /^[+()-\d ]+$/

        if (!nameRegEx.test(name)) {
            setNameError(true)
            return
        }
        if (!phoneRegEx.test(phone)) {
            setPhoneError(true)
            return
        }
        sendEmail()
    }

    return (
        <Section id="contact">
            <SectionTitle>Sign up</SectionTitle>

            <FormModal
                showGratitudeModal={showGratitudeModal}
                setShowGratitudeModal={setShowGratitudeModal}
                loading={loading}
                isSuccess={isSuccess}
            />
            <FormUi
                submitHandler={submitHandler}
                handleNameChange={handleNameChange}
                handlePhoneChange={handlePhoneChange}
                formRef={formRef}
                nameError={nameError}
                phoneError={phoneError}
                name={name}
                phone={phone}
            />
        </Section>
    )
}
