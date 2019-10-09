import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { dispatch } from 'rxjs/internal/observable/range';

import { featureReducer } from './reducers'
import { createStore } from 'redux';


const store = createStore(featureReducer);

const App = () => {
  

  const removeFeature = item => {
    // dispatch an action here to remove an item

  };

  const buyItem = item => {
    dispatch({type: '', payload: item})
    // dispatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={store.car} />
        <AddedFeatures car={store.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} />
        <Total car={store.car} additionalPrice={store.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
