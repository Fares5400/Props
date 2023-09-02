import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
const Player = (prop) => {
    const name=prop.name;
    const team=prop.team;
    const nationality=prop.nationality;
    const jerseyNumber=prop.jerseyNumber;
    const age=prop.age;
    const ImageUrl=prop.imageUrl;
    
  return (
    <Card style={{ width: '25rem' }}>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle>
        {team}<br/>
        {nationality}<br/>
        {jerseyNumber}<br/>
        {age}
      </Card.Subtitle>
      <Image src={ImageUrl} style={{width:"40%",height:"40%"}}/>
      
    </Card.Body>
  </Card>


  )
  }

export default Player;