import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap'
import VisitedPizzerias from './VisitedPizzerias'
// import Carousel from './Carousel';
import './App.css'
import { DateTime, Interval } from 'luxon'

const formatPizzeria = (name, link) => (
    <a href={ link } target="_blank" rel="noopener noreferrer">{ name }</a>
)

const nextPizzeria = {
    name: 'Otto Enoteca Pizzeria',
    // date: 'Feb 6, 2019',
    link: 'https://ny.ottopizzeria.com/'
}

const formattedNextPizzeria = formatPizzeria(nextPizzeria.name, nextPizzeria.link)

const pizzaDate = DateTime.fromObject({ 
    year: 2019, 
    month: 2, 
    day: 6, 
    hour: 12, 
    minute: 30, 
    zone: 'America/New_York', 
    numberingSystem: 'beng' 
})

const formattedPizzaDate = pizzaDate.setLocale('us').toFormat("h:mma 'on' cccc, LLLL d") 

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      done: false,
      totalSeconds: null
    }
   };
   
   componentDidMount() {
       const now = DateTime.local()
       const totalSeconds = Interval.fromDateTimes(now, pizzaDate).toDuration('seconds').seconds
       if (isNaN(totalSeconds)) {
           this.setState({ done: true })
        } else {
            this.setState({ totalSeconds })
            this.tick()
        }
    }

    calculateTimeFromSeconds = totalSeconds => {
        let remainingSeconds = totalSeconds
        const days = Math.floor(remainingSeconds / (60 * 60 * 24))
        remainingSeconds = remainingSeconds - (days * 60 * 60 * 24)
        const hours = Math.floor(remainingSeconds / (60 * 60))
        remainingSeconds = remainingSeconds - (hours * 60 * 60)
        const minutes = Math.floor(remainingSeconds / 60)
        remainingSeconds = remainingSeconds - (minutes * 60)
        const seconds = Math.floor(remainingSeconds)
        return ({
            'days': days, 
            'hours': hours, 
            'minutes': minutes, 
            'seconds': seconds 
        })
    }

    tick = () => {
        const refreshIntervalId = setInterval(() => {
            const now = DateTime.local()
            const totalSeconds = Interval.fromDateTimes(now, pizzaDate).toDuration('seconds').seconds
            if (isNaN(totalSeconds)) {
                this.setState({ done: true })
                clearInterval(refreshIntervalId)
            } else {
                this.setState({ totalSeconds })
            }
            }, 1000)
    }

    renderTime = () => {
    if (this.state.done) {
        return (
            <div className="timeIsUp">
            It's time!
            </div>
        )
    } else {
        const time = this.calculateTimeFromSeconds(this.state.totalSeconds)
        return (
            <div className="countdown">
                <div className="timeSection">
                    <div className="number">{time.days}</div>
                    <div className="label">days</div>
                </div>
                <div className="timeSection">
                    <div className="number">{time.hours}</div>
                    <div className="label">hours</div>
                </div>
                <div className="timeSection">
                    <div className="number">{time.minutes}</div>
                    <div className="label">minutes</div>
                </div>
                <div className="timeSection">
                    <div className="number">{time.seconds}</div>
                    <div className="label">seconds</div>
                </div>
            </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Jumbotron style={ {
                  height: '25vw',
                  backgroundImage: 'url("https://static.tumblr.com/7ab8fc3d6cf04fe141ddc9806b6f3466/cawphq4/cscp8oeo6/tumblr_static_tumblr_static_eqxp05j1t28gc8ks0wgcw8w4g_focused_v3.jpg")',
                  backgroundSize: 'cover',
                  marginBottom: '1vw' } }>
                </Jumbotron>
                <Container style={ { marginBottom: '3vw', fontSize: 60, textAlign: 'center', fontFamily: 'Playfair Display' } }>
                    Pizza Wednesday
                </Container>
                <Container>
                    <Row>
                        <Col className="nextPizzeriaSection" >
                            <div className="nextPizzeriaContainer">
                                <div className="nextPizzeria">
                                    <b>Next stop</b>: <span className="pizzeriaFormatted">{formattedNextPizzeria} at {formattedPizzaDate}</span>
                                </div>
                            </div>
                            {this.renderTime()}
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <iframe
                              title="pizza map" src="https://www.google.com/maps/d/embed?mid=1AkZdjDDkqOfiiCSsbA1HoN3XRN-huBt9" width="100%" height="750"></iframe>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <VisitedPizzerias />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
  }
