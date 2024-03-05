import React from "react";
import { Link } from 'react-router-dom'

import "../Styles/Menu.css"

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, price } = item;
        return (
          <article key={id} className="menu-item">
            <div className="image">
            <img src={img} alt={title} className="photo" />
            </div>
            <div className="item-info">
              <demo>
                <h4>{title}</h4>
                <br></br>
                <h4 className="price">Rs {price}</h4>
              </demo>
            </div>
         <Link to={`/menu/${item.id}`} className="linkStyle">
      Order Now
    </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;


