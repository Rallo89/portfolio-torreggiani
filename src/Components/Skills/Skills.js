import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel' 
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import "./bootstrap.css"

class Skills extends Component {

  getRandomColor() {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

	render() {
    if (!this.props.data) return null;

    /** Programming Languages Skills */
    const plskillstext = this.props.data.plskillstext;
    
    const plskills = this.props.data.plskills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    /** Technologies Skills */
    const tskillstext = this.props.data.tskillstext;
    
    const tskills = this.props.data.tskills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    /** Soft Skills */
    const cskillstext = this.props.data.cskillstext;
    
    const cskills = this.props.data.cskills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    //ToDo: certificazioni

		return (
      <section id="skills">
			  <Carousel prevLabel="" nextLabel="">
				  <Carousel.Item>
              <div className="row skill">
                <div className="three columns header-col">
                  <h1>
                      <span>Skills</span>
                  </h1>
                </div>
                <div className="nine columns main-col">
                  <h3>{plskillstext}</h3>
                  <br />
                  <div className="bars">
                      <ul className="skills">{plskills}</ul>
                  </div>
                </div>
              </div>
				  </Carousel.Item>
				  <Carousel.Item>
            <div className="row skill">
              <div className="three columns header-col">
                <h1>
                    <span>Skills</span>
                </h1>
              </div>
              <div className="nine columns main-col">
                <h3>{tskillstext}</h3>
                <br />
                <div className="bars">
                    <ul className="skills">{tskills}</ul>
                </div>
              </div>
            </div>
				  </Carousel.Item>
          <CarouselItem>
            <div className="row skill">
              <div className="three columns header-col">
                <h1>
                    <span>Skills</span>
                </h1>
              </div>
              <div className="nine columns main-col">
                <h3>{cskillstext}</h3>
                <br />
                <div className="bars">
                    <ul className="skills">{cskills}</ul>
                </div>
              </div>
            </div>
          </CarouselItem>
			  </Carousel>
      </section>
		)
	}
}

export default Skills