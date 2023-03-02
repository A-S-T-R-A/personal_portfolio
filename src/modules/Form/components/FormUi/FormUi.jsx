import { classNames } from "modules/common/helpers/classNames"
import { Button } from "modules/common/ui/Button"
import React from "react"
import styles from "./FormUi.module.css"

export function FormUi({
    submitHandler,
    handleNameChange,
    handleEmailChange,
    formRef,
    nameError,
    emailError,
    name,
    email,
    onClick,
    message,
    handleMessageChange,
}) {
    const nameInputClassName = classNames(styles.inputs, {
        [styles.inpError]: nameError,
    })

    const emailInputClassName = classNames(styles.inputs, {
        [styles.inpError]: emailError,
    })

    return (
        <form onSubmit={submitHandler} className={styles.form} ref={formRef}>
            <div className={styles.formContainer}>
                <div className={styles.inputWrap}>
                    <input
                        id="nameInput"
                        className={nameInputClassName}
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Your Name"
                    />
                    {nameError && (
                        <p className={styles.error}>Enter Valid Name</p>
                    )}
                </div>
                <div className={styles.inputWrap}>
                    <input
                        className={emailInputClassName}
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Your Email"
                    />
                    {emailError && (
                        <p className={styles.error}>Enter Valid Email</p>
                    )}
                </div>
                <div className={styles.textareaWrap}>
                    <textarea
                        className={styles.textarea}
                        type="text"
                        name="message"
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Your Message"
                    />
                </div>

                <Button className={styles.btn} onClick={onClick}>
                    Submit
                </Button>
            </div>
        </form>
    )
}
