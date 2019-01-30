import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    console.log(props);
    let tranformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        console.log("igKey", igKey);
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            console.log("_ , i", _, i)
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    })
    if(tranformedIngredients.length === 0) {
        tranformedIngredients = <p>Please start add new ingredients..! </p>
    }
    console.log('tranformedIngredients', tranformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {tranformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );

};

export default burger;