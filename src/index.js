import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';

const API_KEY='AIzaSyAD4tR7VBZV29-e7edIb7eoCxQLucHckXE';



//  Create a new component.  This component should produce some HTML.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });//{ videos: videos }
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

//Take this component's gneerated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
