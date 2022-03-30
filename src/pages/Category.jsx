import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

const Category = () => {
    const {name} = useParams()
    const [meals, setMeals] = useState([])
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals))
    }, [name])
    return (
        <>
            <button className="btn" onClick={goBack}>Go back</button>
            {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
        </>
    );
};

export default Category;
