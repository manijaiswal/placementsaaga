import React from 'react';
import Tables from './components/Tables';
import RadarChart from './components/RadarChart';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="container">
          <RadarChart />
          <div className="card-box row" style={{marginTop:45}}>
            <Tables />
          </div>
      </div>
    );
  }
}

export default App;
