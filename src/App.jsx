import React, { useState } from "react";
import Header from "./component/Header/Header";
import Catalog from "./component/Catalog/Catalog";
import Main from "./component/Main/Main";
import Basket from "./component/Basket/Basket";
import Category from "./component/Category/Category";
import Products from "./component/Products/Products";
import News from "./component/News/News";
import Youtube from "./component/Youtube/Youtube";

// homework  react hooks деген эмне

// react hooks - реакт хуки
// useState()
const App = () => {
  const [showCatalog, setShowCatalog] = useState(false);
  const [showBasket, setShowBasket] = useState(false);

  const handleToggleCatalog = () => {
    setShowCatalog(!showCatalog)
  }
  const handleToggleBasket = () => {
    setShowBasket(!showBasket)
  }

  return (
    <div className="app">
      <Header 
      handleToggleCatalog={handleToggleCatalog}
      handleToggleBasket={handleToggleBasket}
      />
      <Main />
      <Category />
      <Products />
      <News /> 
      <Youtube />
      {showCatalog && <Catalog />} 
      {showBasket  && <Basket />} 
    </div>
  );
};

export default App;
