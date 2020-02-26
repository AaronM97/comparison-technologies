import React from 'react'

export default function Provider(props) {
    return (
        <div>
            <h5>{props.provider.supplierName}</h5>
            <p>Tariff type: {props.provider.tariffType}</p>
            <p>How you'd pay: {props.provider.paymentMethod}</p>
            <p>Do they have exit fees? {props.provider.hasExitFees}</p>
            <p>Given your current spend you could save £{props.provider.expectedAnnualSavings}/year</p>
            <p>You would look to spend £{props.provider.expectedAnnualSpend}/year</p>
        </div>
    )
}
