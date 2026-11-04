import React from 'react'
import './ExploreMenu.css'
import menu1 from '../assets/menu_1.png';
import menu2 from '../assets/menu_2.png';
import menu3 from '../assets/menu_3.png';
import menu4 from '../assets/menu_4.png';
import menu5 from '../assets/menu_5.png';
import menu6 from '../assets/menu_6.png';
import menu7 from '../assets/menu_7.png';
import menu8 from '../assets/menu_8.png';


const menuItems = [
    { image: menu1, name: "Salad" },
    { image: menu2, name: "Rolls" },
    { image: menu3, name: "Dessert" },
    { image: menu4, name: "Sandwich" },
    { image: menu5, name: "Cake" },
    { image: menu6, name: "Pure Veg" },
    { image: menu7, name: "Pasta" },
    { image: menu8, name: "Noodles" },
];

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className="explore-menu-test">choose from a diverse menu featuting a delectable array of dishes. our mission is to staisfy your craving and elevate your
                dinin experenice,and delicious meal at a time
            </p>
            <div className="explore-menu-list">
                {menuItems.map((item) => (
                    <div onClick={() => setCategory((prev) => prev === item.name ? "All" : item.name)} className="explore-menu-list-item" key={item.name}>
                        <img className={category === item.name ? "active" : ""} src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
            <hr />

        </div>
    )
}

export default ExploreMenu;