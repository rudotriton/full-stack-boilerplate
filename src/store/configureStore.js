import { createStore } from 'redux';
import reducer from '../reducers/counterReducer';


// createStore takes the reducer as an argument.

// here we export a function that when called creates the store for us.
// the 2nd argument is added in order to enable redux devtools.

// it could be just 'export default () => createStore(reducer);'
export default () => createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
