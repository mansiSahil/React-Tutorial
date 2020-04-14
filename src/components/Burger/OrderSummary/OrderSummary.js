import React from 'react';

const orderSummary = (props) => {
    const ingredient = Object.keys(props.ingredients)
        .map((igKey, value) => {
            return (<li key={igKey}>{igKey} :{props.ingredients[igKey]} </li>);
        });
    return (<div >
        <div>Your Order</div>
        <div >{ingredient}</div>
    </div>);

};

export default orderSummary;