
import React from "react"
import data from "data.json"
import { Card, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { ADD_TO_FAVORITES } from "redux/actions"

interface IProps {
    [key: string]: any
}
export default function CountryCard(props: IProps) {

    const dispatch = useDispatch()
    const { name, flag, borders, index, buttons } = props
    return <div className="col-lg-3">
        <Card>
            <Card.Img src={flag} height={150} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {index}
                </Card.Text>
                {!buttons && <div>
                    <button className="btn btn-success" onClick={() => {
                        props.selectCountry(name)
                    }} > Select country  </button>
                    <button className="btn btn-primary" onClick={() => {
                        dispatch(ADD_TO_FAVORITES({ country: props }))
                    }} > Add To Favorites  </button>
                </div>}
            </Card.Body>

        </Card>
    </div>



}
