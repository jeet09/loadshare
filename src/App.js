import React from 'react';
import './App.css';
import Editor from './components/Editor/Editor';
import Freezer from 'freezer-js';

function App() {
  var data = {
    "id": 1,
    "name": "Loadshare Networks",
    "isActive": true,
    "contactDetails": {
      "mobile": 9999999999,
      "email": "hr@loadshare.net"
    },
    "branches": [
      "Bangalore",
      "Guwahati",
      "Delhi"
    ],
    "customers": [
      {
        "name": "Flipkart",
        "active": true,
        "services": [
          "LINE_HUAL",
          "LAST_MILE"
        ]
      },
      {
        "name": "Swiggy",
        "active": true,
        "services": [
          "HYPER_LOCAL"
        ]
      },
      {
        "name": "Paytm",
        "active": true,
        "services": [
          "FIRST_MILE",
          "LINE_HUAL"
        ]
      }
    ]
  };
  const fr = new Freezer({json: data});
  return (
    <div className="App">
      <Editor data={fr.get()} />
    </div>
  );
}

export default App;
