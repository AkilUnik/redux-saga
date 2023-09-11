import Sample from './Sample';
import store2 from './redux/store/store2';
import store from './redux/store/store';
import {Provider} from 'react-redux';
import React from 'react';
const App = () => {
  return (
    <Provider store={store}>
      <Sample />
    </Provider>
  );
};

export default App;
