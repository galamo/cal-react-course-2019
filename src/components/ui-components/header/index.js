import React from "react"
import css from "./style.module.css"
const element = <span> Sub title header </span>

export default class Header extends React.Component{
    //this.props
    render(){
    const { title , color = "blue" } = this.props
    if(!title) return null;
    return <div>
        <h1  style={{ color }} className={css.header}> {title || "default title"} </h1>
        <h2> {element} </h2>
    </div>
    }
    
}

