
import React from "react"
import data from "data.json"
import { Card, Button } from "react-bootstrap"

interface IProps {
    [key: string]: any
}
export default class CountryCard extends React.Component<IProps, any>{
    render() {
        const { name, flag, borders, index } = this.props
        return <div className="col-lg-3">
            <Card>
                <Card.Img src={flag} height={150} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {index}
                    </Card.Text>
                    <button className="btn btn-success" onClick={() => {
                        this.props.selectCountry(name)
                    }} > Select country  </button>
                </Card.Body>

            </Card>
        </div>
    }


}
