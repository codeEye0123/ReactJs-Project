import React from 'react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        {props.title}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            {props.lists.map((item, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <a className="nav-link" href="/">{item}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    lists: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Navbar.defaultProps = {
    title: "TextUtils",
    lists: ['about 🐹', 'contact 🔥', 'service 🔥']
}

export default Navbar