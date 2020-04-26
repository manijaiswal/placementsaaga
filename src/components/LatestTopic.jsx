import React,{Component} from 'react';

class LatestTopic extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="col-sm-3">
                <a href={this.props.props.link} id="cloud_link0" target="_blank" style={{display: "block"}}>
                    <div className="card-box widget-user">
                        <div class="text-center">
        <h4 className="text-custom" data-plugin="counterup" id="cloud_text0"><p style={{textTransform: "capitalize",fontSize:15}}>{this.props.props.title}</p></h4>
                            <h5 id="cloud_num0">292 | Gaining Traction | Probable</h5>
                        </div>
                    </div>
                </a>
            </div>
        )
    }

}

export default LatestTopic;