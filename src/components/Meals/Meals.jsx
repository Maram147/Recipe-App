// src/components/Meals.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // استيراد axios
import CategorySelect from '../CategorySelect/CategorySelect';
import './../../styles/base.scss';
import logo from '../../assets/images/logo-BfNap0Pe.png';
import { PacmanLoader } from 'react-spinners'; 
import { Link } from 'react-router-dom';
export default function Meals() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  // دالة تغيير الفئة
  const handleCategoryChange = (category) => {
    setSelectedCategory(category); 
  };

  // جلب الفئات
  const getCategories = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
      setCategories(data.meals || []); 
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // جلب الوجبات
  const getMeals = async (category) => {
  try {
    setLoading(true);
    const url =
      category === "All"
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=`
        : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

    const { data } = await axios.get(url);
    const mealsList = data.meals || [];

    if (category === "All") {
      setMeals(mealsList); // البيانات كاملة بالفعل
    } else {
      // جلب التفاصيل الكاملة لكل وجبة
      const detailedMeals = await Promise.all(
        mealsList.map(async (meal) => {
          const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
          return res.data.meals[0]; // وجبة واحدة في الـ array
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



  // Effect لجلب الفئات عند التحميل الأول
  useEffect(() => {
    getCategories();
  }, []);

  // Effect لجلب الوجبات عند تغيير الفئة
  useEffect(() => {
    getMeals(selectedCategory);
  }, [selectedCategory]);
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
    'Swedish': 'se',
    'Filipino': 'ph',
    'Uruguayan': 'uy',
    'Kenyan': 'ke',
    'Ukrainian': 'ua',
  };

  return (
    <div className="p-4">
      <h1 className="  fontmeal  font-bold bg-gradient-to-r from-orange-400 via-[#ca1023c4] to-[#c90519] bg-clip-text text-transparent">
  Learn, Cook, Eat Your Food
</h1>
      <CategorySelect onCategoryChange={handleCategoryChange} categories={categories} />

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
                <img
                  className="recipe-card__image"
                  src={meal.strMealThumb || logo} 
                  alt={meal.strMeal}
                />
                <div className="recipe-card__content">
                  <h3 className="recipe-card__title">{meal.strMeal.split(' ').slice(0, 2).join(' ')}</h3>
                  <p className="recipe-card__area">
                    {flagCodeValue && (
                      <img
                        src={`https://flagcdn.com/32x24/${flagCodeValue}.png`}
                        alt={`${meal.strArea} flag`}
                        className="inline-block w-6 h-4 mr-2"
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