import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel' 
import Slide from "react-reveal";
import "./bootstrap.css"

class CarouselBootstrap extends Component {

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
    
        const skillmessage = this.props.data.skillmessage;
        
        const skills = this.props.data.skills.map((skills) => {
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

		return (
            <section id="skills">
			<Carousel prevLabel="" nextLabel="">
				<Carousel.Item>
                    <Slide>
                        <div className="row skill">
                            <div className="three columns header-col">
                            <h1>
                                <span>Skills</span>
                            </h1>
                            </div>

                            <div className="nine columns main-col">
                            <p>{skillmessage}</p>

                            <div className="bars">
                                <ul className="skills">{skills}</ul>
                            </div>
                            </div>
                        </div>
                        </Slide>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://picsum.photos/800/400?text=Second slide&bg=282c34"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://picsum.photos/800/400?text=Third slide&bg=20232a"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
            </section>
		)
	}
}

export default CarouselBootstrap