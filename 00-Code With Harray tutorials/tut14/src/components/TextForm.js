import React, { useState, useEffect } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('')

    useEffect(() => {
        document.title = 'Home 🏡'
        return () => { }
    }, [])

    const enterInput = (params) => {
        const { name, value } = params.target
        setText(value)
    }

    const upperCase = () => {
        props.showAlert("Converted to Upper Case 🐹", "info")
        setText((prev) => {
            return prev.toUpperCase()
        })
    }

    const lowerCase = () => {
        props.showAlert("Converted to Lower Case 🐹", "info")
        setText((prev) => {
            return prev.toLowerCase()
        })
    }

    const clearText = () => {
        props.showAlert("Text have been clear 🐹", "info")
        setText('')
    }

    const copyText = () => {
        props.showAlert("Copied to clipboard 🐹", "info")
        navigator.clipboard.writeText(text)
    }

    const removeExtraSpace = () => {
        props.showAlert("Removed Extra Space 🐹", "info")
        setText(text.split(/[ ]+/).join(' '))
    }

    return (
        <>
            <div className="container my-4">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">
                        {props.labeling}
                    </label>
                    <textarea
                        className="form-control"
                        name="text"
                        id="myBox"
                        rows={3}
                        onChange={enterInput}
                        value={text}
                    />
                </div>
                <button className="btn btn-outline-primary mx-2" onClick={upperCase}>
                    UpperCase
                </button>
                <button className="btn btn-outline-secondary mx-2" onClick={lowerCase}>
                    LowerCase
                </button>
                <button className="btn btn-outline-success mx-2" onClick={clearText}>
                    Clear
                </button>
                <button className="btn btn-outline-warning mx-2" onClick={copyText}>
                    Copy
                </button>
                <button className="btn btn-outline-info mx-2" onClick={removeExtraSpace}>
                    Remove Extra Space
                </button>
            </div>
            {text.length !== 0 ? <div className="container">
                <h2>🔥 Text Summary</h2>
                <p>{text.trim().split(/[ ]+/).length} Words, {text.length} Characters</p>
                <p>{text.trim().split(/[ ]+/).length * 0.008} Minutes reads</p>
                <h2>🐹 Preview</h2>
                <p>{text.substring(0, 50)} ..</p>
            </div> : ''}
        </>
    )
}

export default TextForm