import React from 'react';
import Meal from "./Meal";

const MealList = ({meals}) => {
    return (
        <div className='meals-list'>
            {meals.map(meal => <Meal key={meal.idMeal} {...meal}/>
            )}
        </div>
    );
};

export default MealList;
