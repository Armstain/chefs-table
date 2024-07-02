
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts.jsx'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Recipes from './components/Recipes.jsx'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [carts, setCarts] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  const handleRecipeSelection = (recipe) => {
    const alreadyAdded = carts.find((cart => cart.recipe_name === recipe.recipe_name)
    );
    if (!alreadyAdded) {
      setCarts([...carts, recipe])
    }
    else {
      toast("Already added", {

      });

    }

  }
  const handlePrepared = (id) => {
    const newCarts = carts.filter(cart => cart.recipe_id !== id)
    setCarts(newCarts);
    const recipeToCook = carts.find(cart => cart.recipe_id === id);
    if (recipeToCook) {
      setCurrentlyCooking([...currentlyCooking, recipeToCook]);
    }
  };

  const totalTime = currentlyCooking.reduce((total, cart) => total + cart.preparing_time, 0);
  const totalCalories = currentlyCooking.reduce((total, cart) => total + cart.calories, 0);
  return (
    <>
      <div className='container mx-auto lg:px-24'>
        <Navbar></Navbar>
        <Header className=''></Header>
        <div className='text-center mt-16'>
          <h1 className='text-3xl font-bold'>Our Recipes</h1>
          <h1 className='text-xl mt-5'>A comforting and satisfying pasta dish loaded with vibrant roasted veggies. </h1>
        </div>
        <div className='grid grid-cols-12 mt-20 gap-4'>
          <div className='col-span-8'>
            <Recipes handleRecipeSelection={handleRecipeSelection}></Recipes>
          </div>
          <div className='col-span-4'>
            <Carts currentlyCooking={currentlyCooking} handlePrepared={handlePrepared} carts={carts} totalTime={totalTime} totalCalories={totalCalories}></Carts>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>

  )
}

export default App
