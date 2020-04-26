import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import data from '../data/jsondata.json'

const columns = [{
    dataField: 'title',
    text: 'Title',
    sort: true,
    style: { width:25+'%'},
    headerStyle: (colum, colIndex) => {
        return { width: '645px', textAlign: 'center' }
    }
  }, {
    dataField: 'topic',
    text: 'Topic',
    sort: true
  }, {
    dataField: 'start_year',
    text: 'Year'
  },{
    dataField: 'intensity',
    text: 'Intensity'
  },{
    dataField: 'sector',
    text: 'sector',
    sort: true
  },{
    dataField: 'region',
    text: 'Region',
    sort: true
  },{
    dataField: 'pestle',
    text: 'Pestle',
    sort: true
}];

const CaptionElement = () => <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>Component as Header</h3>;

class Tables extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="col-md-12">
                <BootstrapTable bootstrap4 keyField='title' data={data} columns={ columns }  pagination={ paginationFactory() } condensed/>
            </div>
        )

    }
}

export default Tables;