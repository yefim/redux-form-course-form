import React from 'react';
import {render} from 'react-dom';

console.log('gere');

// const store = createStore();

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
  <App />,
  document.getElementById('app')
);
