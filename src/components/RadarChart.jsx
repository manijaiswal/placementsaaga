import React, { Component } from "react";
import { Radar } from "react-chartjs-2";
import data from '../data/jsondata.json';
import Switch from "react-switch";
import ReactWordcloud from 'react-wordcloud';
import LatestTopic from "./LatestTopic"


const options = {
  legend: {
    position: 'top'
  },
  title: {
    display: true,
    text: 'Chart.js Radar Chart'
  },
  scale: {
    reverse: false,
    gridLines: {
      color: [
        'white'
      ]
    },
    ticks: {
      beginAtZero: true
    }
  }
}

const optionsWord = {
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
  enableTooltip: true,
  deterministic: false,
  fontFamily: 'impact',
  fontSizes: [10, 60],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: 'sqrt',
  spiral: 'archimedean',
  transitionDuration: 1000,
};
class RadarChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      intensity: [],
      likelihood: [],
      relevance: [],
      topic: [],
      sector:[],
      region:[],
      pestle:[],
      yearRangeCheck: false,
      sector_all: [[]],
      region_all: [[]],
      topic_all: [[]],
      pestle_all: [[]],
      inten_check: true,
      rele_check: false,
      lkh_check: false,
      filter_check: 'topic',
      draw: "radar",
      selectedWord:"intensity",
      selectedTopic:"All",
      selectedSector:"All",
      selectedRegion:"All",
      selectedPestle:"All",
      sector_top:[],
      region_top:[],
      pestle_top:[],
      topic_top:[],
    }
    this.handleYearRangeChange = this.handleYearRangeChange.bind(this);
  }

  handleYearRangeChange(checked) {
    this.setState({ yearRangeCheck: checked })
  }
  handleSelectChange = (event)=>{
    this.setState({selectedWord:event.target.value});
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleButton = name => event => {
    console.log(name);
    this.setState({ draw: name });
  };

  handleRadioChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleFilterOptionChange = name=>event=>{
    this.setState({[name]:event.target.value})
  }

  componentDidMount() {
    var topic = [];
    var intensity = [];
    var likelihood = [];
    var relevance = [];
    var region = [];
    var sector = [];
    var pestle = [];
    var end_year = [];
    var swot = [];
    var topic_all = [[]];
    var sector_all = [[]];
    var region_all = [[]];
    var pestle_all = [[]];
    var topic_top = [];
    var sector_top = [];
    var region_top = [];
    var pestle_top = [];
    data.map((jsonData) => {
      if ((jsonData.intensity != "" && jsonData.relevance != "" && jsonData.likelihood != "" && jsonData.region != "" && jsonData.sector != "" && jsonData.pestle != "")) {
        if (region.indexOf(jsonData['region']) == -1) {
          region.push(jsonData['region']);
          if(region_top.length<8){
            var w = {};
            w['title'] = jsonData['region']
            w['link']  = jsonData['url']
            region_top.push(w);
          }
        }
        if (sector.indexOf(jsonData['sector']) == -1) {
          sector.push(jsonData['sector']);
          if(sector_top.length<8){
            var w = {};
            w['title'] = jsonData['sector']
            w['link']  = jsonData['url']
            sector_top.push(w);
          }
        }
        if (pestle.indexOf(jsonData['pestle']) == -1) {
          pestle.push(jsonData['pestle']);
          if(pestle_top.length<8){
            var w = {};
            w['title'] = jsonData['pestle']
            w['link']  = jsonData['url']
            pestle_top.push(w);
          }
        }
        if (topic.indexOf(jsonData['topic']) == -1) {
          topic.push(jsonData['topic']);
          if(topic_top.length<8){
            var w = {};
            w['title'] = jsonData['topic']
            w['link']  = jsonData['url']
            topic_top.push(w);
          }
        }
        if (end_year.indexOf(jsonData['end_year']) == -1) {
          end_year.push(jsonData['end_year']);
        }

        var flag = 1;

        for (var co = 0; co < topic_all.length; co++) {
          if (topic_all[co][0] == jsonData.topic) {
            topic_all[co][1] += jsonData.relevance;
            topic_all[co][2] += jsonData.likelihood;
            topic_all[co][3] += jsonData.intensity;
            topic_all[co][4] += 1
            flag = 0;
            break;
          }
        }
        if (flag == 1) {
          topic_all[topic_all.length] = [jsonData.topic, jsonData.relevance, jsonData.likelihood, jsonData.intensity, 1];
        }

        flag = 1;
        for (var co = 0; co < sector_all.length; co++) {
          if (sector_all[co][0] == jsonData.sector) {
            sector_all[co][1] += jsonData.relevance;
            sector_all[co][2] += jsonData.likelihood;
            sector_all[co][3] += jsonData.intensity;
            sector_all[co][4] += 1;
            flag = 0;
            break;
          }
        }
        if (flag == 1) {
          sector_all[sector_all.length] = [jsonData.sector, jsonData.relevance, jsonData.likelihood, jsonData.intensity, 1];
        }

        flag = 1;
        for (var co = 0; co < region_all.length; co++) {
          if (region_all[co][0] == jsonData.region) {
            region_all[co][1] += jsonData.relevance;
            region_all[co][2] += jsonData.likelihood;
            region_all[co][3] += jsonData.intensity;
            region_all[co][4] += 1;
            flag = 0;
            break;
          }
        }
        if (flag == 1) {
          region_all[region_all.length] = [jsonData.region, jsonData.relevance, jsonData.likelihood, jsonData.intensity, 1];
        }

        flag = 1;
        for (var co = 0; co < pestle_all.length; co++) {
          if (pestle_all[co][0] == jsonData.pestle) {
            pestle_all[co][1] += jsonData.relevance;
            pestle_all[co][2] += jsonData.likelihood;
            pestle_all[co][3] += jsonData.intensity;
            pestle_all[co][4] += 1;
            flag = 0;
            break;
          }
        }
        if (flag == 1) {
          pestle_all[pestle_all.length] = [jsonData.pestle, jsonData.relevance, jsonData.likelihood, jsonData.intensity, 1];
        }
      }
    })
    var t = [], its = [], rele = [], lkh = [];
    for (var x = 1; x < topic_all.length; x++) {
      t.push(topic_all[x][0]);
      rele.push(Math.floor(topic_all[x][1] / topic_all[x][4]));
      lkh.push(Math.floor(topic_all[x][2] / topic_all[x][4]));
      its.push(Math.floor(topic_all[x][3] / topic_all[x][4]));
    }
    var s = [], its1 = [], rele1 = [], lkh1 = [];
    for (var x = 1; x < sector_all.length; x++) {
      s.push(sector_all[x][0]);
      rele1.push(Math.floor(sector_all[x][1] / sector_all[x][4]));
      lkh1.push(Math.floor(sector_all[x][2] / sector_all[x][4]));
      its1.push(Math.floor(sector_all[x][3] / sector_all[x][4]));
    }
    var r = [], its2 = [], rele2 = [], lkh2 = [];
    for (var x = 1; x < region_all.length; x++) {
      r.push(region_all[x][0]);
      rele2.push(Math.floor(region_all[x][1] / region_all[x][4]));
      lkh2.push(Math.floor(region_all[x][2] / region_all[x][4]));
      its2.push(Math.floor(region_all[x][3] / region_all[x][4]));
    }
    var p = [], its3 = [], rele3 = [], lkh3 = [];
    for (var x = 1; x < pestle_all.length; x++) {
      p.push(pestle_all[x][0]);
      rele3.push(Math.floor(pestle_all[x][1] / pestle_all[x][4]));
      lkh3.push(Math.floor(pestle_all[x][2] / pestle_all[x][4]));
      its3.push(Math.floor(pestle_all[x][3] / pestle_all[x][4]));
    }
    this.setState({ topic_all: [t, rele, lkh, its], sector_all: [s, rele1, lkh1, its1], region_all: [r, rele2, lkh2, its2], pestle_all: [p, rele3, lkh3, its3],topic:topic,sector:sector,region:region,pestle:pestle,sector_top:sector_top,region_top:region_top,pestle_top:pestle_top,topic_top:topic_top })
  }
  render() {
    console.log(this.state)
    var data2 = {};
    var words = [];
    var topTenTopic = [];
    if (this.state.topic_all.length == 4) {
      if (this.state.filter_check == "topic" && this.state.draw == "radar") {
        var labels1 = [];
        var inten_data1 = [];
        var rele_data1 = [];
        var like_data1 = [];
        topTenTopic  = this.state.topic_top;
        if(this.state.selectedTopic=='All'){
          labels1 = this.state.topic_all[0];
          inten_data1 = this.state.topic_all[3];
          rele_data1 = this.state.topic_all[1];
          like_data1 = this.state.topic_all[2];
        }else{
          var idx = this.state.topic_all[0].indexOf(this.state.selectedTopic)
          labels1 = [this.state.selectedTopic];
          inten_data1 = [this.state.topic_all[3][idx]];
          rele_data1 = [this.state.topic_all[1][idx]];
          like_data1 = [this.state.topic_all[2][idx]];
        }
        data2['labels'] = labels1;
        var x = [];
        console.log(inten_data);
        if (this.state.inten_check) {
          x.push({
            label: "intensity",
            backgroundColor: "rgba(230,132,34,0.2)",
            pointBackgroundColor: "rgba(130,32,32,1)",
            data: inten_data1,
            borderColor: "rgba(12,12,216,1)"
          })
        }
        if (this.state.lkh_check) {
          x.push({
            label: "likelihood",
            backgroundColor: "rgba(120,135,125,0.2)",
            pointBackgroundColor: "rgba(220,100,50,1)",
            data: like_data1,
            borderColor: "rgba(230,34,34,1)"
          })
        }
        if (this.state.rele_check) {
          x.push({
            label: "relevance",
            backgroundColor: "rgba(230,34,230,0.2)",
            pointBackgroundColor: "rgba(100,120,220,1)",
            data: rele_data1,
            borderColor: "rgba(132,234,34,1)"
          })
        }
        data2['datasets'] = x;

      }
      else if (this.state.filter_check == "topic" && this.state.draw == "wordCloud") {
        topTenTopic  = this.state.topic_top;
        for (var c = 0; c < this.state.topic_all[0].length; c++) {
          var word = {};
          if(this.state.selectedWord=="intensity"){
            word['text'] = this.state.topic_all[0][c]
            word['value'] = this.state.topic_all[3][c]
          }else if(this.state.selectedWord=="likelihood"){
            word['text'] = this.state.topic_all[0][c]
            word['value'] = this.state.topic_all[2][c]
          }else if(this.state.selectedWord=="relevance"){
            word['text'] = this.state.topic_all[0][c]
            word['value'] = this.state.topic_all[1][c]
          }
          words.push(word);
        }
      }
    }
    if (this.state.sector_all.length == 4) {
      if (this.state.filter_check == "sector" && this.state.draw == "radar") {
        var labels = [];
        var inten_data = [];
        var rele_data = [];
        var like_data = [];
        topTenTopic = this.state.sector_top;
        if(this.state.selectedSector=='All'){
          labels = this.state.sector_all[0];
          inten_data = this.state.sector_all[3];
          rele_data = this.state.sector_all[1];
          like_data = this.state.sector_all[2];
        }else{
          var idx = this.state.sector_all[0].indexOf(this.state.selectedSector)
          labels = [this.state.selectedSector];
          inten_data = [this.state.sector_all[3][idx]];
          rele_data = [this.state.sector_all[1][idx]];
          like_data = [this.state.sector_all[2][idx]];
        }
        data2['labels'] = labels
        var x = [];
        if (this.state.inten_check) {
          x.push({
            label: "intensity",
            backgroundColor: "rgba(230,34,230,0.2)",
            pointBackgroundColor: "rgba(12,12,216,1)",
            data: inten_data,
            borderColor: "rgba(12,216,12,1)"
          })
        }
        if (this.state.lkh_check) {
          x.push({
            label: "likelihood",
            backgroundColor: "rgba(120,135,125,0.2)",
            pointBackgroundColor: "rgba(216,12,12,1)",
            data: like_data,
            borderColor: "rgba(16,16,216,1)"
          })
        }
        if (this.state.rele_check) {
          x.push({
            label: "relevance",
            backgroundColor: "rgba(220,120,120,0.2)",
            pointBackgroundColor: "rgba(225,225,9,1)",
            data: rele_data,
            borderColor: "rgba(12,12,216,1)"
          })
        }
        data2['datasets'] = x;
      }
      else if (this.state.filter_check == "sector" && this.state.draw == "wordCloud") {
        topTenTopic  = this.state.sector_top;
        for (var c = 0; c < this.state.sector_all[0].length; c++) {
          var word = {};
          if(this.state.selectedWord=="intensity"){
            word['text'] = this.state.sector_all[0][c]
            word['value'] = this.state.sector_all[3][c]
          }else if(this.state.selectedWord=="likelihood"){
            word['text'] = this.state.sector_all[0][c]
            word['value'] = this.state.sector_all[2][c]
          }else if(this.state.selectedWord=="relevance"){
            word['text'] = this.state.sector_all[0][c]
            word['value'] = this.state.sector_all[1][c]
          }
          words.push(word);
        }
      }
    }
    if (this.state.region_all.length == 4) {
      if (this.state.filter_check == "region" && this.state.draw=="radar") {
        var labels = [];
        var inten_data = [];
        var rele_data = [];
        var like_data = [];
        topTenTopic = this.state.region_top;
        if(this.state.selectedRegion=='All'){
          labels = this.state.region_all[0];
          inten_data = this.state.region_all[3];
          rele_data = this.state.region_all[1];
          like_data = this.state.region_all[2];
        }else{
          var idx = this.state.region_all[0].indexOf(this.state.selectedRegion)
          labels = [this.state.selectedRegion];
          inten_data = [this.state.region_all[3][idx]];
          rele_data = [this.state.region_all[1][idx]];
          like_data = [this.state.region_all[2][idx]];
        }
        data2['labels'] = labels
        var x = [];
        if (this.state.inten_check) {
          x.push({
            label: "intensity",
            backgroundColor: "rgba(220,220,220,0.2)",
            pointBackgroundColor: "rgba(12,12,216,1)",
            data: inten_data,
            borderColor: "rgba(12,12,216,1)"
          })
        }
        if (this.state.lkh_check) {
          x.push({
            label: "likelihood",
            backgroundColor: "rgba(120,135,125,0.2)",
            pointBackgroundColor: "rgba(216,12,12,1)",
            data: like_data,
            borderColor: "rgba(16,16,216,1)"
          })
        }
        if (this.state.rele_check) {
          x.push({
            label: "relevance",
            backgroundColor: "rgba(220,120,120,0.2)",
            pointBackgroundColor: "rgba(225,225,9,1)",
            data: rele_data,
            borderColor: "rgba(14,14,216,1)"
          })
        }
        data2['datasets'] = x;
      }
      else if (this.state.filter_check == "region" && this.state.draw == "wordCloud") {
        topTenTopic  = this.state.region_top;
        for (var c = 0; c < this.state.region_all[0].length; c++) {
          var word = {};
          if(this.state.selectedWord=="intensity"){
            word['text'] = this.state.region_all[0][c]
            word['value'] = this.state.region_all[3][c]
          }else if(this.state.selectedWord=="likelihood"){
            word['text'] = this.state.region_all[0][c]
            word['value'] = this.state.region_all[2][c]
          }else if(this.state.selectedWord=="relevance"){
            word['text'] = this.state.region_all[0][c]
            word['value'] = this.state.region_all[1][c]
          }
          words.push(word);
        }
      }
    }
    if (this.state.pestle_all.length == 4) {
      if (this.state.filter_check == "pestle" && this.state.draw=="radar") {
        topTenTopic = this.state.pestle_top;
        var labels = [];
        var inten_data = [];
        var rele_data = [];
        var like_data = [];
        if(this.state.selectedPestle=='All'){
          labels = this.state.pestle_all[0];
          inten_data = this.state.pestle_all[3];
          rele_data = this.state.pestle_all[1];
          like_data = this.state.pestle_all[2];
        }else{
          var idx = this.state.pestle_all[0].indexOf(this.state.selectedPestle)
          labels = [this.state.selectedPestle];
          inten_data = [this.state.pestle_all[3][idx]];
          rele_data = [this.state.pestle_all[1][idx]];
          like_data = [this.state.pestle_all[2][idx]];
        }
        data2['labels'] = labels
        var x = [];
        if (this.state.inten_check) {
          x.push({
            label: "intensity",
            backgroundColor: "rgba(220,220,220,0.2)",
            pointBackgroundColor: "rgba(12,12,216,1)",
            data: inten_data,
            borderColor: "rgba(12,17,216,1)"
          })
        }
        if (this.state.lkh_check) {
          x.push({
            label: "likelihood",
            backgroundColor: "rgba(120,135,125,0.2)",
            pointBackgroundColor: "rgba(216,12,12,1)",
            data: like_data,
            borderColor: "rgba(10,120,10,1)"
          })
        }
        if (this.state.rele_check) {
          x.push({
            label: "relevance",
            backgroundColor: "rgba(20,120,120,0.2)",
            pointBackgroundColor: "rgba(225,125,9,1)",
            data: rele_data,
            borderColor: "rgba(16,16,216,1)"
          })
        }
        data2['datasets'] = x;
      }
      else if (this.state.filter_check == "pestle" && this.state.draw == "wordCloud") {
        topTenTopic  = this.state.pestle_top;
        for (var c = 0; c < this.state.pestle_all[0].length; c++) {
          var word = {};
          if(this.state.selectedWord=="intensity"){
            word['text'] = this.state.pestle_all[0][c]
            word['value'] = this.state.pestle_all[3][c]
          }else if(this.state.selectedWord=="likelihood"){
            word['text'] = this.state.pestle_all[0][c]
            word['value'] = this.state.pestle_all[2][c]
          }else if(this.state.selectedWord=="relevance"){
            word['text'] = this.state.pestle_all[0][c]
            word['value'] = this.state.pestle_all[1][c]
          }
          words.push(word);
        }
      }
    }
    return (
      <div>
        <div className="row" style={{ marginBottom: 10, marginTop: 10 }}>
          <div className="col-md-12">
            <button type="button" class="btn btn-primary" style={{ marginRight: 15 }} onClick={this.handleButton("radar")}>Radar</button>
            <button type="button" class="btn btn-success" style={{ marginRight: 15 }} onClick={this.handleButton("wordCloud")}>Word Cloud</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-8 card">
            {this.state.draw == "radar" && <Radar data={data2} options={options} />}
            {this.state.draw == "wordCloud" && <ReactWordcloud words={words} options={optionsWord} />}
          </div>
          <div className="col-md-4 col-sm-4 center">
            <div className="row">
              <div className="col-md-12">
                <div className="card-box">
                  <div id="change1" className="m-t-0">
                    <h3>Click on a node</h3>
                  </div>
                </div>
                {/* <div className="card-box">
                  <h3 className="header-title m-t-0 m-b-5">Year Range <span id="radar_year_value"></span>
                    <span style={{ float: 'right' }}>
                      <label className="switch">
                        <Switch onChange={this.handleYearRangeChange} checked={this.state.yearRangeCheck} />
                      </label>
                    </span>
                  </h3>
                </div> */}
              </div>
              <div className="col-sm-6">
                <div className="card-box">
                  <h3 className="header-title m-t-0 m-b-5">Show and Filter</h3>
                  <div class="form-group">
                    <div className="form-check">
                      <input className="form-check-input" name="filter" type="radio" value="topic" checked={this.state.filter_check == "topic"} onChange={this.handleRadioChange("filter_check")} />
                      <label className="form-check-label" for="exampleRadios1">
                        Topic
                      </label>
                    </div>
                    <select className="form-control" value={this.state.selectedTopic} onChange={this.handleFilterOptionChange("selectedTopic")}>
                      <option value="All">All</option>
                      {this.state.draw=="radar" && this.state.topic.map(text => (
                        <option  value={text}>
                          {text}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="filter" value="sector" onChange={this.handleRadioChange("filter_check")} />
                      <label className="form-check-label" for="exampleRadios1">
                        Sector
                      </label>
                    </div>
                    <select className="form-control" value={this.state.selectedSector} onChange={this.handleFilterOptionChange("selectedSector")}>
                      <option value="All">All</option>
                      {this.state.draw=="radar" && this.state.sector.map(text => (
                        <option  value={text}>
                          {text}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="filter" value="region" onChange={this.handleRadioChange("filter_check")} />
                      <label className="form-check-label" for="exampleRadios1">
                        Region
                      </label>
                    </div>
                    <select className="form-control" value={this.state.selectedRegion} onChange={this.handleFilterOptionChange("selectedRegion")}>
                      <option value="All">All</option>
                      {this.state.draw=="radar" && this.state.region.map(text => (
                        <option  value={text}>
                          {text}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="filter" value="pestle" onChange={this.handleRadioChange("filter_check")} />
                      <label className="form-check-label" for="exampleRadios1">
                        Pestle
                      </label>
                    </div>
                    <select className="form-control" value={this.state.selectedPestle} onChange={this.handleFilterOptionChange("selectedPestle")}>
                      <option value="All">All</option>
                      {this.state.draw=="radar" && this.state.pestle.map(text => (
                        <option  value={text}>
                          {text}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card-box">
                  <h5 className="header-title m-t-0 m-b-5">Measures</h5>
                  {this.state.draw=="radar" && <div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" checked={this.state.inten_check} onChange={this.handleChange("inten_check")} />
                      <label class="form-check-label" for="defaultCheck1">
                        Intensity
                    </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" checked={this.state.lkh_check} onChange={this.handleChange("lkh_check")} />
                      <label class="form-check-label" for="defaultCheck2">
                        likelihood
                    </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" checked={this.state.rele_check} onChange={this.handleChange("rele_check")} />
                      <label class="form-check-label" for="defaultCheck2">
                        Relevance
                    </label>
                    </div>
                  </div>}
                  {this.state.draw == "wordCloud" && <div class="form-group">
                    <select class="form-control" value={this.state.selectedWord} onChange={this.handleSelectChange} >
                      <option value="intensity">Intensity</option>
                      <option value="likelihood">Likelihood</option>
                      <option value="relevance">Relevance</option>
                    </select>
                  </div> }
                </div>
                <div className="card-box">
                  <h5 className="header-title m-t-0 m-b-5">confidence</h5>
                </div>
                <div className="card-box">
                  <h5 className="header-title m-t-0 m-b-5">SWAT</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row" style={{marginTop:50}}>
          <strong style={{fontSize: "large", textTransform: "capitalize", marginLeft: 12}}> Top Ten sectors</strong>
        </div>
        
        <div className="row" style={{marginTop:60}}>
            {topTenTopic.map(e=>(
              <LatestTopic props={e} />
            ))}
        </div>
      </div>
    )
  }
}

export default RadarChart;