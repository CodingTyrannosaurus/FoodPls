import React, { Component } from 'react';
import Navigation from "../components/navbar/navbar";
import {Grid, Row, Carousel} from 'react-bootstrap'

export default class HomePage extends Component {

  render() {
    return (
      <div>
        <Navigation/>
        <Grid className="home-body">
          <Row>
            <h1 className="home-head">FoodPls - Tinder for Food</h1>
          </Row>
          <Row>
            <Carousel>
              <Carousel.Item>
                <img className="carousel-img" src="https://micocinarestaurantla.files.wordpress.com/2014/09/youbig.jpg" />
                {/*<Carousel.Caption>*/}
                  {/*<h3>First slide label</h3>*/}
                  {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                {/*</Carousel.Caption>*/}
              </Carousel.Item>
              <Carousel.Item>
                <img className="carousel-img" src="https://upload.wikimedia.org/wikipedia/commons/5/54/Healthy_food.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="carousel-img" src="https://hdwallsource.com/img/2016/9/sushi-food-wallpaper-background-49716-51395-hd-wallpapers.jpg" />
              </Carousel.Item>
            </Carousel>
          </Row>
        </Grid>
      </div>
    )
  }
}