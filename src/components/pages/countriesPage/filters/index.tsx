import React from "react"

interface IProps {
    onChangeInput: any
    filters: any
}
export default class Filters extends React.Component<IProps, any>{

    render() {
        const { onChangeInput, filters } = this.props
        const { country, region } = filters

        return (
            <div>
                <form className="row">
                    <div className="form-group">
                        <label >Country</label>
                        <input value={country} type="text" onChange={onChangeInput} name="country" className="form-control" placeholder="country name" />
                    </div>
                    <div className="form-group">
                        <label >Region</label>
                        <input onChange={onChangeInput} type="text" name="region" className="form-control" placeholder="text" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" onChange={(e) => {
                            onChangeInput({ target: { name: e.target.name, value: e.target.checked } })
                        }} name="hasborders" className="form-check-input" />
                    </div>

                </form>
            </div>
        )
    }
} 