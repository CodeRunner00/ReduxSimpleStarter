import React from 'react';
import ReactDOM from 'react-dom';
const API_KEY='AIzaSyAD4tR7VBZV29-e7edIb7eoCxQLucHckXE';

import SearchBar from './components/search_bar';
//  Create a new component.  This component should produce some HTML.

const App = () => {
  return (
   <div>
    <SearchBar />
  </div>
  );
}

//Take this component's gneerated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
