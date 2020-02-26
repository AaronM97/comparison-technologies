import React, { Component } from 'react'
import axios from 'axios';
import Provider from '../components/Provider'

export default class Gas extends Component {
    state = {
        gasResults: null, 
        currentSpend: null,
      }
    
      getGasProviderDetails() {
        axios.get("https://demo.staging.energyhelpline-aws.com/api/results/a8823b4b-1abe-41de-a5b3-ab6700c08d98")
          .then(res => {
            this.setState({gasResults: res.data.gasResults, currentSpend: res.data.annualSpendStatement})
          })
      }
    
      componentDidMount() {
        this.getGasProviderDetails()
      }
    render() {
        return (
            <div>
                <h3>Gas providers</h3>
                <p>{this.state.currentSpend}</p>
                <p>We are fixing out gas database :/</p>
            </div>
        )
    }
}
