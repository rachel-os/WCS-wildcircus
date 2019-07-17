import React from 'react';
import circus from '../../assets/images/circus.gif';
import media from '../../assets/images/media.jpg';
import { Row, Col } from 'antd';
import './Home.css'

export default function Home() {
  return (
    <div>
      <Row type="flex" justify="center" className="hero" >
        <img className="hero-bg" src={circus} alt="hero background" />
      </Row>
      <h1>Wild Circus</h1>
      <Row type="flex" justify="center">
        <Col span={10}>
          <p>Pommy ipsum picalilly spend a penny eton mess sod's law made a pig's ear of it, baffled wibbly-wobbly timey-wimey stuff daft cow by 'eck love eton mess flip flops, tosser bangers and mash anorak gravy cheese and chips got a lot of brass. Bugger meat and two veg mush nowt chap accordingly mince pies a right corker, conked him one on the nose pezzy little doofer rambunctious Bob's your uncle.</p>
        </Col>
        <Col span={12}>
          <img className="media" src={media} alt="article media" />
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col span={12}>
          <img className="media" src={media} alt="article media" />
        </Col>
        <Col span={10}>
          <p>Flip flops not some sort of dosshouse a tenner River Song marvelous made a pig's ear of it quid, put me soaps back on a cuppa fancy a cuppa the black death bog roll make a brew slappers, chin up completely starkers cotton on bossy britches at the boozer. Pommy ipsum picalilly spend a penny eton mess sod's law made a pig's ear of it. Bugger meat and two veg mush nowt chap accordingly mince pies a right corker.</p>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col span={10}>
          <p>Pommy ipsum picalilly spend a penny eton mess sod's law made a pig's ear of it, baffled wibbly-wobbly timey-wimey stuff daft cow by 'eck love eton mess flip flops, tosser bangers and mash anorak gravy cheese and chips got a lot of brass. Bugger meat and two veg mush nowt chap accordingly mince pies a right corker. Pommy ipsum picalilly spend a penny eton mess sod's law made a pig's ear of it conked him one on the nose pezzy little doofer rambunctious Bob's your uncle.</p>
        </Col>
        <Col span={12}>
          <img className="media" src={media} alt="article media" />
        </Col>
      </Row>
    </div>
  )
}
