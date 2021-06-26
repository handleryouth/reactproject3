import React from "react"

function Content(props){
    return(
        <div>
            <img className="avatar-img" src={props.avatar} alt="Avatar" />
            <p>{props.paragraph}</p>
            
            <div className="personinfo">
                <h3>{props.name}</h3>
                <p>{props.job}</p>
            </div>
        </div>
    )
}


export default Content