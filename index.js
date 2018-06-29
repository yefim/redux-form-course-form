import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {reducer as formReducer} from 'redux-form';
import {render} from 'react-dom';

const reducers = combineReducers({
  form: formReducer
});

const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={() => { console.log('submitted') }}>
          <label>
            Course Name
            <input type="text" placeholder="Course Name" />
          </label>
          <label>
            Teacher
            <input type="text" placeholder="Teacher" />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
