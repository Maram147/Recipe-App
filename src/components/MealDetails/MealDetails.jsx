import React, { useState, useEffect } from 'react';
import './../../styles/base.scss';
import logo from '../../assets/images/logo-BfNap0Pe.png';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaYoutube } from 'react-icons/fa';
import { FaEarthAsia } from 'react-icons/fa6';

export default function MealDetails() {
  const { id } = useParams();
  const [mealDetails, setMealDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [showFullInstructions, setShowFullInstructions] = useState(false);

  const meal = mealDetails[0] || {};

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setMealDetails(response.data.meals);
      } catch (error) {
        setErrorMessage("Error fetching meal details");
      } finally {
        setLoading(false);
      }
    };

    fetchMealDetails();
  }, [id]);

  const toggleInstructions = () => {
    setShowFullInstructions(!showFullInstructions);
  };

  const maxLength = 250;
  const isLong = meal.strInstructions && meal.strInstructions.length > maxLength;
  const visibleInstructions = showFullInstructions
    ? meal.strInstructions
    : meal.strInstructions?.slice(0, maxLength);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PacmanLoader color="#ee850d" />
      </div>
    );
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (!mealDetails || mealDetails.length === 0) {
    return <div>No meal details found</div>;
  }
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
  const flagCodeValue = countryFlags[meal.strArea];


  return (
    <div className="mealdetails_content">
      
      <h1 className="mealdetails_title text-start">{meal.strMeal}</h1>
      <h6 className="mealdetails_subtitle text-black text-start">{meal.strCategory}</h6>
      <h6 className="mealdetails_subtitle text-black text-start">{flagCodeValue?.length === 2 && (
  <img
    src={`https://flagcdn.com/32x24/${flagCodeValue}.png`}
    alt={`${meal.strArea} flag`}
    title={`${meal.strArea} flag`}
    width="32"
    height="24"
    loading="lazy"
    className="inline-block w-6 h-4 mr-2"
    onError={(e) => {
      e.target.style.display = "none"; 
    }}
  />
)}

        {meal.strArea || ''}</h6>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* meal image */}
        <div className="lg:w-1/3 w-full rounded-2xl mb-4">
          <LazyLoadImage
            src={meal.strMealThumb}
            alt="meal"
            onError={(e) => {
              e.target.src = logo;
            }}
            className="mealdetails_image rounded-xl"
          />
          <ul className="flex gap-4 justify-center mt-4">
            <li className="bg-red-600 text-white py-2 px-4 rounded-xl flex items-center gap-2 hover:scale-105 transition duration-300">
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white"
              >
                <FaYoutube color='white' />
                <span className='text-white'>YouTube</span>
              </a>

            </li>

            {meal.strSource && (
              <li className="bg-[#21BA75] text-white py-2 px-4 rounded-xl flex items-center gap-2 hover:scale-105 transition duration-300">
                <a
                  href={meal.strSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaEarthAsia color='white' />
                  <span className='text-white'>Source</span>
                </a>
              </li>
            )}

          </ul>
        </div>

        {/* Instructions */}
        <div className="lg:w-1/3 font-cursive">
          <h2 className="text-2xl font-semibold mb-4 text-black">Instructions</h2>
          <article className="text-gray-700 whitespace-pre-line">
            {visibleInstructions}
            {!showFullInstructions && isLong && <span className="text-gray-400">...</span>}
          </article>
          {isLong && (
            <span
              onClick={toggleInstructions}
              className="mealdetails_toggle mt-3 text-blue-600 hover:underline font-medium transition cursor-pointer"
            >
              {showFullInstructions ? "less" : "more..."}
            </span>
          )}
        </div>

        {/* Ingredients */}
        <div className="lg:w-1/3 font-cursive">
          <div className="bg-white rounded-2xl p-4 shadow">
            <h2 className="text-2xl font-semibold pb-3 mb-4 border-b-3 border-gray-300 text-black">Ingredients</h2>
            {Array.from({ length: 20 }, (_, i) => {
              const ingredient = meal[`strIngredient${i + 1}`];
              if (ingredient && ingredient.trim() !== '') {
                const imgUrl = `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-2 p-2 border-b border-gray-200 last-of-type:border-b-0"
                  >
                    <div className="flex items-center gap-2">
                      <LazyLoadImage
                        src={imgUrl}
                        alt={ingredient}
                        onError={(e) => {
                          e.target.src = logo;
                        }}
                        className=" mealdetails_ingredient w-10 h-10 object-cover rounded-full border  p-1 bg-[#F4F2EE]"
                      />
                      <span className="text-black">{ingredient}</span>
                    </div>
                    <span className="text-[#f29724]">{meal[`strMeasure${i + 1}`]}</span>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
