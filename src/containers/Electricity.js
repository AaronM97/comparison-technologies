import React, { Component } from 'react'
import axios from 'axios';
import Provider from '../components/Provider'

export default class Electricity extends Component {
    state = {
        elecResults: null, 
        currentSpend: null,
      }
    
      getElectricityProviderDetails() {
        axios.get("https://demo.staging.energyhelpline-aws.com/api/results/a8823b4b-1abe-41de-a5b3-ab6700c08d98")
          .then(res => {
            this.setState({elecResults: res.data.elecResults, currentSpend: res.data.annualSpendStatement})
            console.log(res.data)
          })
      }
    
      componentDidMount() {
        this.getElectricityProviderDetails()
      }

    render() {
        return (
            <div>
                <h3>Electricity providers</h3>
                <p>{this.state.currentSpend}</p>
                {this.state.elecResults && 
                this.state.elecResults.map((provider, index) => (
                    <Provider provider={provider}/>
                ))}
            </div>
        )
    }
}
