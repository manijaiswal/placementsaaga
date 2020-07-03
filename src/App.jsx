import React from 'react';
import './App.css';

const images = [
  {
    img:'/compu.png',
    text:'Final Touch with company specific questions',
    text2:"MOCK  \n TEST"
  },
  {
    img:'/man.svg',
    text:'Mock test of 250 Companies and solved solutions',
    text2:"HIGHLY \n QUALIFIED \n MENTORS"
  },
  {
    img:'/corosal1.svg',
    text:'HIGHLY QUALIFIED MENTORS FROM LEADING TECH GIANTS.',
    text2:"QUESTION \n LIBRARY"
  }
]


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      learning: [
        {
          "image": "/verticle.svg",
          "color": { backgroundColor: '#53d2dc', borderRadius: '0 50px 50px 50px' },
          "text": "Array",
          "img_style": { opacity: 0.25 }
        },
        {
          "image": "/circle.svg",
          "color": { backgroundColor: '#3096e1', borderRadius: '50px 50px 0 50px' },
          "text": "Sorting",
          "img_style": { opacity: 0.6 }
        },
        {
          "image": "/horizontal.svg",
          "color": { backgroundColor: '#ff826e', borderRadius: '0 50px 50px 50px' },
          "text": "String",
          "img_style": { opacity: 1 }
        },
        {
          "image": "/denseHori.svg",
          "color": { backgroundColor: '#ffbe5d', borderRadius: '50px 50px 50px 0' },
          "text": "Linked Lists",
          "img_style": { opacity: 1 }
        },
        {
          "image": "/denseCone.svg",
          "color": { backgroundColor: '#92a8ff', borderRadius: '0 50px 50px 50px' },
          "text": "Stack & Queues"
        },
        {
          "image": "/circle.svg",
          "color": { backgroundColor: '#f0a6ca', borderRadius: '0 50px 50px 50px' },
          "text": "Trees"
        },
        {
          "image": "/circle.svg",
          "color": { backgroundColor: '#f0a6ca', borderRadius: '0 50px 50px 50px' },
          "text": "Dynamic Programming"
        },
        {
          "image": "/denseCone.svg",
          "color": { backgroundColor: '#92a8ff', borderRadius: '0 50px 50px 50px' },
          "text": "Graphs"
        },
        {
          "image": "/denseHori.svg",
          "color": { backgroundColor: '#ffbe5d', borderRadius: '50px 50px 50px 0' },
          "text": "Searching",
          "img_style": { opacity: 1 }
        },
        {
          "image": "/horizontal.svg",
          "color": { backgroundColor: '#ff826e', borderRadius: '0 50px 50px 50px' },
          "text": "Recursion",
          "img_style": { opacity: 1 }
        },
        {
          "image": "/circle.svg",
          "color": { backgroundColor: '#3096e1', borderRadius: '50px 50px 0 50px' },
          "text": "Binary Search Tree",
          "img_style": { opacity: 0.6 }
        },
        {
          "image": "/verticle.svg",
          "color": { backgroundColor: '#53d2dc', borderRadius: '0 50px 50px 50px' },
          "text": "Mathematics",
          "img_style": { opacity: 0.25 }
        },
        {
          "image": "/verticle.svg",
          "color": { backgroundColor: '#53d2dc', borderRadius: '0 50px 50px 50px' },
          "text": "Bit-Manipulation",
          "img_style": { opacity: 0.25 }
        },
        {
          "image": "/circle.svg",
          "color": { backgroundColor: '#3096e1', borderRadius: '50px 50px 0 50px' },
          "text": "Heaps",
          "img_style": { opacity: 0.6 }
        },
        {
          "image": "/horizontal.svg",
          "color": { backgroundColor: '#ff826e', borderRadius: '0 50px 50px 50px' },
          "text": "Hashing",
          "img_style": { opacity: 1 }
        },
        {
          "image": "/denseHori.svg",
          "color": { backgroundColor: '#ffbe5d', borderRadius: '50px 50px 50px 0' },
          "text": "Backtracing",
          "img_style": { opacity: 1 }
        },
        {
          "image": "/denseCone.svg",
          "color": { backgroundColor: '#92a8ff', borderRadius: '0 50px 50px 50px' },
          "text": "Tries"
        },
        {
          "image": "/circle.svg",
          "color": { backgroundColor: '#f0a6ca', borderRadius: '0 50px 50px 50px' },
          "text": "Famous Algorithms"
        }

      ],
      companies: [
        {
          "image": "/adove.svg",
          "style": { animationDelay: "100ms" }
        },
        {
          "image": "/amazon.svg",
          "style": { animationDelay: "200ms" }
        },
        {
          "image": "/google.svg",
          "style": { animationDelay: "300ms" }
        },
        {
          "image": "/microsoft.svg",
          "style": { animationDelay: "100ms" }
        },
        {
          "image": "/flipcart.png",
          "style": { animationDelay: "200ms" }
        },
        {
          "image": "/paytm.svg",
          "style": { animationDelay: "300ms" }
        }
      ],
      bg:'/corosal1.svg',
      text1:"THE PERFECT PLAYGROUND TO PRACTICE YOUR CODING INTERVIEW QUESTIONS.",
      text2:"MOCK TEST"
    }
  }

  componentDidMount(){
    let index = 0;
    let index2 = 0;
    let index3 = 0;
    setInterval(() => {
      this.setState({
        bg: images[index++].img,
        text1:images[index2++].text,
        text2:images[index3++].text2
      })
      if (index === images.length) index = 0
      if (index2 === images.length) index2 = 0
      if (index3 === images.length) index3 = 0
    }, 3000);
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12" style={{padding:'2%'}}>
                  <p className="hero-text">
                    Master Your
                  </p>
                </div>
                <div className="col-md-12">
                  <p className="hero-text">
                    destinity with
                  </p>
                </div>
                <div className="col-md-12">
                  <p className="hero-text" style={{fontWeight:900}}>
                    <strong>placementSaaga</strong>
                  </p>
                </div>
                <div className="btn-container col-md-12" style={{ marginTop: 20, marginLeft: 10 }}>
                  <a className="hero-btn" href="/ques/90 Degree Shift">View Sample Question</a>
                </div>
              </div>
            </div>
            <div className="col-md-6" >
              <div className="carousel-images">
              <div className="carousel-image">
                <div className="carousel-image-img">
                  <img src={this.state.bg} alt="" />
                </div>
                <div className="carousel-image-text">
                  <span style={{color:'#1c67da'}} > 
                    {this.state.text2.split('\n').map((text,index)=>{
                      return (
                        <React.Fragment key={`${text}-${index}`}>
                          {text}
                          <br />
                        </React.Fragment>
                      )
                    })}
                  </span>
                </div>
                <div className="landing__jumbo-carousel-image-notch"></div>
              </div>
              <div className="carousel-text">
                <div className="carousel-text-content">
                  <span className="carousel-animate">{this.state.text1}</span>
                </div>
                <div className="landing__jumbo-carousel-text-notch"></div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            {this.state.companies.map((x, i) => {
              return (
                <div className="col-md-2 col-6 col-sm-4">
                  <div className="companies_img" style={x.style}>
                    <img src={x.image} alt="" className="companies__company-img" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="container" style={{ marginBottom: 50 }}>
          <p className="new_way">New way of <strong>learning</strong></p>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12">
              <div className="card landing-card landing-card-1" >
                <img className="card-img-top" src="/download2.png" alt="Card image cap" />
                <div className="card-body" style={{ padding: 0 }}>
                  <div className="card-title card-content">Question library</div>
                  <div className="custom-text">We’ve compiled 250 questions after intense research amongst recruiters and developers in leading companies for your coding interview preparations.</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="card landing-card landing-card-2" >
                <img className="card-img-top" src="/video.png" alt="Card image cap" />
                <div className="card-body" style={{ padding: 0 }}>
                  <div className="card-title card-content">Video Simplification</div>
                  <div className="custom-text">Each question contains video explanation that are designed to enhance your learning experience by creating a visual representation of the code behind it.</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="card landing-card landing-card-3" >
                <img className="card-img-top" src="/explanation.png" alt="Card image cap" />
                <div className="card-body" style={{ padding: 0 }}>
                  <div className="card-title card-content">Dedicated Teaching Assistant Support </div>
                  <div className="custom-text">We’ve compiled 250 questions after intense research amongst recruiters and developers in leading companies for your coding interview preparations.</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="card landing-card landing-card-1" >
                <img className="card-img-top" src="/theory.png" alt="Card image cap" />
                <div className="card-body" style={{ padding: 0 }}>
                  <div className="card-title card-content">Theory Series</div>
                  <div className="custom-text">We’ve compiled 250 questions after intense research amongst recruiters and developers in leading companies for your coding interview preparations.</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="card landing-card landing-card-2" >
                <img className="card-img-top" src="/test.png" alt="Card image cap" />
                <div className="card-body" style={{ padding: 0 }}>
                  <div className="card-title card-content">Mock Tests</div>
                  <div className="custom-text">We’ve compiled 250 questions after intense research amongst recruiters and developers in leading companies for your coding interview preparations.</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="card landing-card landing-card-3" >
                <img className="card-img-top" src="/learning.png" alt="Card image cap" />
                <div className="card-body" style={{ padding: 0 }}>
                  <div className="card-title card-content">Hand on Learning</div>
                  <div className="custom-text">We’ve compiled 250 questions after intense research amongst recruiters and developers in leading companies for your coding interview preparations.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container_head ">
          <div className="topics2-heading">
            Every Topic You need for your<br /><strong>Coding Interview</strong>
          </div>
          <div className="row" style={{ width: '100%' }}>
            {this.state.learning.map((x, i) => {
              return (
                <div className="col-md-2 col-sm-4 col-6">
                  <div class="topics-topic" style={x.color}>
                    <img src={x.image} class="topics-topic-bg" style={x.img_style} alt="" />
                    <div class="topics-topic-text">{x.text}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="container" style={{ marginTop: '5%' }}>
          <div className="topics2-heading">
            Every Topic You need for your<br /><strong>Coding Interview</strong>
          </div>
          <div class="video-subheading">Our brain processes visuals faster than anything and that has motivated us to<br />create these video explanations for a better understanding. Clear your concepts with the<br />most comprehensive explanations to each of the practice problems.</div>
        </div>
      </>

    );
  }
}

export default App;
