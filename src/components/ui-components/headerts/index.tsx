import React from "react"
import css from "./style.module.css"
const element = <span> Sub title header </span>

interface IProps {
    title: string;
    color: string;

}


export default class HeaderTS extends React.Component<IProps, any>{

    render() {
        const { title, color = "blue" } = this.props
        if (!title) return null;
        return <div>
            <h1 style={{ color }} className={css.header}> {title || "default title"} </h1>
            <h2> {element} </h2>
        </div>
    }

}

