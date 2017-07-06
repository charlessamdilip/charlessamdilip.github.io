import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

jQuery(document).ready(function(){
  ReactDOM.render(<App/>, document.getElementById('app'));
});
