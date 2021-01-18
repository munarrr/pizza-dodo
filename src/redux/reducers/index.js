import filter from './filter'
import cart from './cart'
import pizzas from './pizzas'
import {combineReducers} from 'redux'



const rootReducer = combineReducers  ({
     filter,
     cart,
     pizzas
});
export default rootReducer;
