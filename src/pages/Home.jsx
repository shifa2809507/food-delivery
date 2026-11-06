import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';
import Header from '../components/Header';
import ExploreMenu from '../components/ExploreMenu';
import FoodDisplay from '../components/FoodDisplay';
import Appdownload from '../components/Appdownload';

const Home = () => {
  const[category,setCategory]=useState("All");
  const { hash } = useLocation();

  useEffect(() => {
    const sectionId = hash.slice(1);
    if (sectionId === 'explore-menu' || sectionId === 'app-download') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <>
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <Appdownload/>
    </div>
    </>
  );
};

export default Home;