import React from 'react'

function Types() {
     return (
          <div>
                        
     <div className="pizza-block">
           <img
             className="pizza-block__image"
             src={item.imageUrl}
             alt="Pizza"
           />
           <h4 className="pizza-block__title">{item.name}</h4>
           <div className="pizza-block__selector">
             <ul>
               <li className="active">тонкое</li>
               <li>традиционное</li>
             </ul>
             <ul>
               <li className="active">26 см</li>
               <li>30 см.</li>
               <li>40 см.</li>
             </ul>
            </div>
          </div>
          </div>
     )
}

export default Types;

