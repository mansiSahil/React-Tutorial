import React from 'react';
import classes from "./Burger.css";
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const ingredient = Object.keys( props.ingredients )
    .map( igKey => {
        return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        } );
    } );
    // const ingredient = Object.keys(props.ingredients).map(igKeys => {
    //     return [...Array(props.ingredients[igKeys])].reduce((arr, el, i) => {
    //         console.log(el);
    //         return arr.concat( <BurgerIngredient key={igKeys + i} type={igKeys}></BurgerIngredient>);
    //     }, []);
    // });


    let transformedIngredients = ingredient.reduce((arr, el) => {
        return arr.concat(el);
    }, []);
 
if(transformedIngredients.length === 0){
    transformedIngredients=<p>add some ingredients</p>
}
    const ingredientTypes = {
        breadTop: 'bread-top',
        breadBottom: 'bread-bottom',
        meat: 'meat',
        cheese: 'cheese',
        salad: 'salad'
    };
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={ingredientTypes.breadTop}></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type={ingredientTypes.breadBottom}></BurgerIngredient>
          
        </div>
    );
};

export default burger;