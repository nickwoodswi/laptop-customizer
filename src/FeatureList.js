import React, {Component} from 'react'
import Feature from './Feature'
import slugify from 'slugify'
import Total from './Total'

class FeatureList extends Component {
    
    render() {
        let featureTypeArr = this.props.featureTypeObject
        return(
            <fieldset className="feature">
                <legend className="feature__name">
                    <h3>{this.props.featureName}</h3>
                </legend>
                {featureTypeArr.map((object) =>  {
                    return(
                        <Feature 
                            featureName={object.name} 
                            id={slugify(JSON.stringify(object))} 
                            type={this.props.featureName}
                            cost={object.cost}
                            click={() => this.props.changeState(object, this.props.featureName)} />
                    )
                })}
            </fieldset>
        )
    }
}

export default FeatureList