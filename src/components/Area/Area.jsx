// src/components/Meals.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // استيراد axios
import './../../styles/base.scss';
import logo from '../../assets/images/logo-BfNap0Pe.png';
import { PacmanLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AreaSelect from '../AreaSelect/AreaSelect';
import { Helmet } from 'react-helmet';
export default function Area() {
  const [countries, setcountries] = useState([]);
  const [selectedcountries, setSelectedcountries] = useState("All");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlecountriesChange = (countries) => {
    setSelectedcountries(countries);
  };

  const getcountries = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
      setcountries(data.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getMeals = async (countries) => {
    try {
      setLoading(true);
      const url =
        countries === "All"
          ? `https://www.themealdb.com/api/json/v1/1/search.php?s=`
          : `https://www.themealdb.com/api/json/v1/1/filter.php?a=${countries}`;

      const { data } = await axios.get(url);
      const mealsList = data.meals || [];

      if (countries === "All") {
        setMeals(mealsList);
      } else {
        const detailedMeals = await Promise.all(
          mealsList.map(async (meal) => {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
            return res.data.meals[0];
          })
        );
        setMeals(detailedMeals);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    getcountries();
  }, []);

  useEffect(() => {
    getMeals(selectedcountries);
  }, [selectedcountries]);
  const countryFlags = {
    'American': 'us',
    'British': 'gb',
    'Canadian': 'ca',
    'Chinese': 'cn',
    'Croatian': 'hr',
    'Dutch': 'nl',
    'Egyptian': 'eg',
    'French': 'fr',
    'Greek': 'gr',
    'Indian': 'in',
    'Irish': 'ie',
    'Italian': 'it',
    'Jamaican': 'jm',
    'Japanese': 'jp',
    'Malaysian': 'my',
    'Mexican': 'mx',
    'Moroccan': 'ma',
    'Russian': 'ru',
    'Spanish': 'es',
    'Thai': 'th',
    'Tunisian': 'tn',
    'Turkish': 'tr',
    'Polish': 'pl',
    'Vietnamese': 'vn',
    'Portuguese': 'pt',
    'Korean': 'kr',
    'Filipino': 'ph',
    'Uruguayan': 'uy',
    'Kenyan': 'ke',
    'Ukrainian': 'ua',
  };

  return (
    <div className="p-4">
      <Helmet>
        <title>Recipe App - Area</title>
        <meta name="description" content="Explore a variety of recipes based on different countries. Discover new meals and enjoy cooking!" />
        <meta name="keywords" content="recipes, area, cooking, meal ideas, food" />
      </Helmet>
      <h1 className="fontmeal font-bold bg-gradient-to-r from-orange-400 via-[#ca1023c4] to-[#c90519] bg-clip-text text-transparent">
        Learn, Cook, Eat Your Food
      </h1>
      <AreaSelect onAreaChange={handlecountriesChange} countries={countries} />

      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <PacmanLoader color="#ee850d" />
        </div>
      ) : (
        <div className="recipe-container">
          {meals.map((meal) => {
            const flagCodeValue = countryFlags[meal.strArea];

            return (
              <div key={meal.idMeal} className="recipe-card group">
                <LazyLoadImage 
                  className="recipe-card__image"
                  src={meal.strMealThumb || logo}
                  alt={meal.strMeal}
                  onError={(e) => {
                    e.target.src = logo;
                  }}
                />
                <div className="recipe-card__content">
                  <h3 className="recipe-card__title">{meal.strMeal.split(' ').slice(0, 2).join(' ')}</h3>
                  <p className="recipe-card__area">
                    {flagCodeValue && (
                      <LazyLoadImage
                        src={`https://flagcdn.com/32x24/${flagCodeValue}.png`}
                        alt={`${meal.strArea} flag`}
                        className="inline-block w-6 h-4 mr-2"
                        onError={(e) => {
                          e.target.src = logo;
                        }}
                      />
                    )}
                    {meal.strArea || ''}
                  </p>
                  <Link to={`/mealdetails/${meal.idMeal}`} className="recipe-card__link">
                    <button className="recipe-card__button">View Recipe</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}