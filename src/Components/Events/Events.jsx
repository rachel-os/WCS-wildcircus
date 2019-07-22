import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Icon, Row, Button } from 'antd';
import './Events.css';
import _ from 'underscore';

export default function Events() {

  const { Meta } = Card;
  const [shows, setShows] = useState([]);
  const [filterPrice, setFilterPrice] = useState(false);
  const [filterName, setFilterName] = useState(false);
  const [filterDate, setFilterDate] = useState(false);



  useEffect(() => {
    axios.get('http://localhost:8000/events')
      .then((result) => {
        setShows(result.data);
        console.log(result.data.date)
      })
  }, [])

  // filter buttons function 
  const filterShows = (tag, [setFunc, param]) => {
    if(param) {
      setShows(shows.reverse());
    } else {
      setShows(_.sortBy(shows, tag));
    }
    setFunc(!param)
  }

  return (
    <div>
      <h1>Our Events</h1>
      <Row>
        <Button
          
          type="default"
          shape="round"
          icon="caret-down"
          onClick={() => filterShows('date', [setFilterDate, filterDate])}
        >
          Filter per date
      </Button>
        <Button
          type="default"
          shape="round"
          icon="caret-down"
          onClick={() => filterShows('name', [setFilterName, filterName])}
        >
          Filter per name
      </Button>
        <Button
          type="default"
          shape="round"
          icon="caret-down"
          onClick={() => filterShows('price', [setFilterPrice, filterPrice])}
        >
          Filter per price
      </Button>
      </Row>
      <Row>
        {shows.map((show, index) => {
          return (
            <div 
            className="cardcontainer" 
            key={index}
            >
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="Wild Circus event"
                  src={show.image}
                />
              }
              actions={[<Icon type="ellipsis" />]}
              hoverable={true}
              >
              <Meta
                justify="center"
                className="description"
                title={<h3>{show.name}</h3>}
                description={
                <p className="showtime">{`${new Date(show.date).toUTCString()} ${show.price}€ `}
                </p>
              }
              />
            </Card>
            </div>
          )
        }
        )}
      </Row>
    </div>
  )
}
