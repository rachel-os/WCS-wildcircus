import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Icon, Row } from 'antd';
import './Events.css';

export default function Events() {

  const { Meta } = Card;
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/events')
      .then((result) => {
        setShows(result.data);
      })
  }, [])

  return (
    <div className="showCards">
      <h1>Our Events</h1>
      <Row>
      {shows.map((show, index) => {
        return (
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="Wild Circus event"
                src={show.image}
              />
            }
            actions={[<Icon type="ellipsis" />]}
            hoverable= {true}
          >
            <Meta
              title={show.name}
              description={show.location, show.date}
            />
          </Card>
        )
      }
      )}
      </Row>
    </div>
  )
}
