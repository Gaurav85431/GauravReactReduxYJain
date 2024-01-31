import { createStore } from 'redux';
import BookReducer from './BookReducer';

const store = createStore(BookReducer);
// hmari store  accept kiya BookReducer , BookReducer ke paas state hai. 
// ye(store)  hmarri application ke state ko hold karke rakhta hai.


export default store;