import React from 'react'
import Header from './pages/home'
import Logo from './components/header/logo/logo'
import Cart from './pages/cart'
import {Route} from 'react-router-dom'
import './scss/app.scss'




function App() {

  return (
   <div className="wrapper">
     <div className="header">
       <Logo /> 
      <Route  to path="/corzin" component={Cart}  /> 
        <div className="container"> 
         <Route exact to path="/" component={Header}  />
         </div>        
      </div> 
     </div>
   );
}

export default App;


// const array = ["a", "b", "c", "d"],
// removeFromIndex = [4,5];    
// for (const i = removeFromIndex.length -1; i >= 0; ){
  // return array
// };
// console.log(array)

// function sum (a,b) {
//   if (b){
//     return a+b
//   }
// }

// console.log(sum(2,3));
 
// function munar(a) {
//   const newArr = [];
//   for(let i = 1; i < 4; i= i + i){
//    newArr.push(a[i])
//   }
//   return newArr;
// }
// let b = ['a','b','d','e','f','g'];
// console.log(munar((b)))

// let array = [1, 2, 3, 4];
// let  = chet ;
// let  = nechet;

// function isPrime(num) {
//   for (let i = 0; i < num.length; i= + +) {
//     if (num[i]% 2 ==0)
//         chet ++;
//     else nechet ++;
//   }
//    return [ chet,nechet]

// }

// console.log(isPrime(arr));   // [53, 2, 5, 7, 31, 97, 17]
// const  arr1 = ['a','b'];
// const  arr2 = ['c','d'];

// const arr3 = arr1.concat(arr2);
// console.log(arr3)
// const number = [2,3,4];
// const total = number.reduce((a,b) => a + b);
// console.log(total)

// const emotions = ['happy', 'sad', 'angry'];
// const newarr = [];
// emotions.push()
// console.log(newarr)
// const arr = [1,2,3,4,5];
// console.log(arr.reverse())
