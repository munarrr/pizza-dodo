import React from 'react'
import Catalogs from '../components/header/catalogs/index'
import Deserts from '../components/header/catalogs/deserts'
import Nav from '../components/header/nav/index'
import Sort from '../components/header/sort/sort'
      

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
               <Nav />
               <Sort />
               </div>
               <div className="content__items">
                    {pizzas.map(item =>{ 
                  return <Catalogs item={item} />})}
                   </div>
                   <div className="content__items">
                    {snacks.map(item =>{ 
                  return <Deserts item={item} />})}
                   </div>
                   
                  <section className="hdblz8-0 YWLBm">
                   <article className="hdblz8-1 kEZJQu">
                     <h1 className="title">60 минут или пицца бесплатно</h1>Если мы не успеем доставить любые продукты, кроме сувенирной продукции и соусов, в течение 60 минут, курьер подарит вам сертификат на большую пиццу.</article>
                     <article className="hdblz8-1 kEZJQu">
                       <h1 className="title">
                         <span className="money ">
                           <span className="money__value">345</span>
                           <span className="money__currency money__currency_on-the-right"> сом</span>
                           </span></h1><p className="p">Минимальная сумма доставки без учета товаров из категории «Другие товары»</p>
                           <h1 className="title"><span className="money "><span className="money__value">7&nbsp;000</span>
                           <span className="money__currency money__currency_on-the-right"> 67сом</span></span></h1>
                           <p>Максимальная сумма при оплате наличными</p>Изображения продуктов могут отличаться от продуктов в заказе.</article>
                           <article className="hdblz8-1 jOeIIG"><h1 className="title">Зона доставки ограничена</h1>
                             <span className="delivery-zone-menu-page__title">Зона доставки</span></article>
                             </section>
          </div>
          
     );
};

export default Header

