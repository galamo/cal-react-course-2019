import React from "react"

interface IProps {
    onChangeInput: any,
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
                    {/* <div className="form-group form-check">
               <input type="checkbox" className="form-check-input" id="exampleCheck1">
               <label className="form-check-label" for="exampleCheck1">Check me out</label>
             </div> */}
                    {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                </form>
            </div>
        )
    }
} 