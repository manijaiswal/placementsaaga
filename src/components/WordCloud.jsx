import React, { Component } from 'react';
import ReactWordcloud from 'react-wordcloud';

const words = [
    {
      text: 'told',
      value: 64,
    },
    {
      text: 'mistake',
      value: 11,
    },
    {
      text: 'thought',
      value: 16,
    },
    {
      text: 'bad',
      value: 17,
    },
    {
      text: 'correct',
      value: 10,
    },
    {
      text: 'day',
      value: 54,
    },
    {
      text: 'prescription',
      value: 12,
    },
    {
      text: 'time',
      value: 77,
    },
    {
      text: 'thing',
      value: 45,
    },
    {
      text: 'left',
      value: 19,
    },
    {
      text: 'pay',
      value: 13,
    }]


class WordCloud extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card-box">
                            <ReactWordcloud words={words} />
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        )
    }
}

export default WordCloud;