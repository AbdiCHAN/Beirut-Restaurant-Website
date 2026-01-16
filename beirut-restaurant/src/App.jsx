// src/App.jsx
import React from "react";
import "./App.css";
<h1>Beirut Restaurant - BBS Mall</h1>
const App = () => {
  const menuCategories = [
    { name: "Main Course", items: mainCourse },
    { name: "Breakfast", items: breakfast },
    { name: "Snacks", items: snacks },
    { name: "Italian Cuisine", items: italianCuisine },
    { name: "Milkshakes", items: milkshakes },
    { name: "Sandwiches", items: sandwiches },
    { name: "Salads", items: salads },
    { name: "Hot Beverages", items: hotBeverages },
    { name: "Juices", items: juices },
    { name: "Mineral Water", items: mineralWater },
    { name: "Side Orders", items: sideOrders },
    { name: "Cold Appetizers", items: coldAppetizers },
    { name: "Fruits", items: fruits },
  ];

  return (
    <div className="app">
      <header>
        <h1>🍴 Beirut Restaurant - BBS Mall</h1>
        <p>Full Menu with Prices in KES</p>
      </header>

      {menuCategories.map((category) => (
        <section key={category.name}>
          <h2>{category.name}</h2>
          <div className="menu-grid">
            {category.items.map((item, index) => (
              <div className="menu-item" key={index}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price} KES</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <footer>
        <p>© 2026 Beirut Restaurant - BBS Mall. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
