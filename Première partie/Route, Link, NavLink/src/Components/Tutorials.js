import React from "react";

const Tutorials = (props) => {
    
    console.log(props);

    setTimeout(() => {
        props.history.push('/')
        
    }, 5000)

    return (
    <div className="container mt-3">
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Oups,</strong> This page is under construction.
            You'll be redirect to the Docs page in 5 seconds
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <h1>Intro to React JS</h1>
    </div>
    )
}

export default Tutorials;