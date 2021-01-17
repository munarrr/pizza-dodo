import React from 'react'
import logo from '../../../images/pizza-logo.svg'
import {Link} from 'react-router-dom'
import Corzin from '../../card/corzin/corzin'

const Logo = () => {
  const [result,setResult] = React.useState(0)
     return (
               <div className="container">
                 <div className="header__logo">
                  <Link to="/"> <img width="38" src={logo} alt="Pizza logo" />
                
                  </Link>
                   <div>
                     <h1 >React Pizza</h1>
                     <p>самая вкусная пицца во вселенной</p>
                   </div>
                 </div>
              <div className="header__cart">
                   <Link  to="/corzin" className="button button--cart">
                     <span>0 Р </span>
                     <div className="button__delimiter"></div>
                     <svg
                       width="18"
                       height="18"
                       viewBox="0 0 18 18"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                         stroke="white"
                         strokeWidth="1.8"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                       />
                       <path
                         d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                         stroke="white"
                         strokeWidth="1.8"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                       />
                       <path
                         d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                         stroke="white"
                         strokeWidth="1.8"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                       />
                     </svg>
                     <span>{result}</span>
                     <button onClick={()=> {setResult(result + 1)}}>ff</button>
                   </Link>
                 
                 <section class="hdblz8-0 YWLBm">
                   <article class="hdblz8-1 kEZJQu">
                     <h1 class="title">60 минут или пицца бесплатно</h1>Если мы не успеем доставить любые продукты, кроме сувенирной продукции и соусов, в течение 60 минут, курьер подарит вам сертификат на большую пиццу.</article>
                     <article class="hdblz8-1 kEZJQu">
                       <h1 class="title">
                         <span class="money ">
                           <span class="money__value">345</span>
                           <span class="money__currency money__currency_on-the-right"> сом</span>
                           </span></h1><p class="p">Минимальная сумма доставки без учета товаров из категории «Другие товары»</p>
                           <h1 class="title"><span class="money "><span class="money__value">7&nbsp;000</span>
                           <span class="money__currency money__currency_on-the-right"> 67сом</span></span></h1>
                           <p>Максимальная сумма при оплате наличными</p>Изображения продуктов могут отличаться от продуктов в заказе.</article>
                           <article class="hdblz8-1 jOeIIG"><h1 class="title">Зона доставки ограничена</h1>
                             <span class="delivery-zone-menu-page__title">Зона доставки</span></article>
                             </section>
                             </div>
               </div>
     )
}

export default Logo;
