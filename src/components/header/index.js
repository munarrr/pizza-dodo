import React from 'react'
import Head from './header'
import Catalogs from './catalogs/index'
import Nav from './nav/index'
import Sort from './sort/sort'

const Header = () => {
     const [pizzas,SetPizzas] = React.useState([]);
     React.useEffect(() => {
       fetch ('http://localhost:3000/baza.json')
     .then(response => response.json())
     .then(({pizzas}) => SetPizzas(pizzas))
     },[])

     return (
          <div className="content">
            <div className="content__top">
               <Head /> 
               <Nav />
               <Sort />
               </div>
               <div className="content__items">
                    {pizzas.map(item=>{ 
                  return <Catalogs item={item} />})}
                   </div>
          </div>
     );
};

export default Header

