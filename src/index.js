import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
         <Provider store={store} >
            <App/>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// const arr = [1,2,3,false,'',4];
// const Munar = arr.filter( item => item === num )
// return Munar;
// console.log(Munar)

// var array = [1];
// var array2 = ([2], [3], [[4]]);
// var array3 = array.concat(array2);
// console.log(array3)
