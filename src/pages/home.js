import React from 'react'
import Catalogs from '../components/header/catalogs/index'
import Deserts from '../components/header/catalogs/deserts'
import Nav from '../components/header/nav/index'
import Sort from '../components/header/sort/sort'
import   initMap from '../components/map/map'
      

const Header = () => {
     const [pizzas,SetPizzas] = React.useState([]);
     const [desserts,SetDesserts] = React.useState([]);
     const [drinks,SetDrinks] = React.useState([]);
     const [snacks,Setsnacks] = React.useState([]);
     React.useEffect(() => {
       fetch ('http://localhost:3000/baza.json')
     .then(response => response.json())
     .then(({pizzas,snacks,drinks,desserts}) =>{
      SetPizzas(pizzas)
      SetDesserts(desserts)
      Setsnacks(snacks)
      SetDrinks(drinks)
     })
     },[])

     return (
          <div className="content">
            <div className="content__top">
                 <initMap />
                
               <Nav />
               <Sort />
               </div>
               <div id="map"></div>
               <div className="content__items">
                    {pizzas.map(item =>{ 
                  return <Catalogs item={item} />})}
                   </div>
                   <div className="content__items">
                    {snacks.map(item =>{ 
                  return <Deserts item={item} />})}
                   </div>
                   <div className="content__items">
                   {drinks.map(item =>{ 
                  return <Deserts item={item} />})}
                   </div>
                   <div className="content__items">
                   {desserts.map(item =>{ 
                  return <Deserts item={item} />})}
                   </div>
          </div>
          
     );
};

export default Header

