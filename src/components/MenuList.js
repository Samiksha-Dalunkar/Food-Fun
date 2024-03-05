import React, { useState } from "react";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import items from "../components/data";
import pic1 from "../Assets/Piizza.webp"
import pic2 from "../Assets/Burger.webp"
import pic3 from "../Assets/Fries.jpg"
import "../Styles/MenuList.css"

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
const MenuList = () => {
const [menuItems, setMenuItems] = useState(items);
const [activeCategory, setActiveCategory] = useState("");
const [categories, setCategories] = useState(allCategories);
const filterItems = (category) => {
    setActiveCategory(category);          
    if (category === "all") {
      setMenuItems(items);                 
      return;
    }                                  
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  console.log(menuItems)
  return (
    <>
    <main>

  {/* <div className="card">
  <img src={pc1} alt="Menu"></img>
  </div> */}

<section class="slider--container">
  <div class="slider--wrapper">
    <div class="slider">
      <img id="slide-1" src={pic1} alt="" />
      <img id="slide-2" src={pic2} alt="" />
      <img id="slide-3" src={pic3} alt="" />
    </div>
    <div class="slider--nav">
      <a href="#slide-1"></a>
      <a href="#slide-2"></a>
      <a href="#slide-3"></a>
    </div>
  </div>
</section>
<section className="menu section">
        <div className="title">
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>                                                                 
        <Categories 
          categories={categories}                                
          activeCategory={activeCategory}
          filterItems={filterItems}
        />                                                   
        <Menu items={menuItems}/>                                              
      </section>
    </main>
</>
);                       
};

export default MenuList;       