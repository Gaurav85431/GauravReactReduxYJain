import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './reduxContainer/Store';
import BookContainer from './reduxContainer/BookContainer';


function App() {
  return (

    <Provider store={store}>
      {/* we are passing store as a props to provider */}
      {/* hmne store banaye aur use react application se connect kraya, fir hm redux ko react ke sath connect kara diya, */}


      <BookContainer />



    </Provider>
  );
}

export default App;
