
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Card from './components/Card';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className="bg-light min-vh-100">
        {/* <Card /> */}
        <Navbar />
    </div>
  );
}

export default App;
