import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {reducer as formReducer} from 'redux-form';
import {render} from 'react-dom';

import {fetchCourses, saveCourse} from './api';

const reducers = combineReducers({
  form: formReducer
});

const store = createStore(reducers);

class App extends React.Component {
  componentDidMount() {
    fetchCourses().then((courses) => {
      console.log(JSON.stringify(courses));
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveCourse({name: 'Algebra', teacher: 'Klay'}).then((course) => {
              console.log(course);
            });
          }}
        >
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
