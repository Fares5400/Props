import React from 'react'
import player from '../Data/player'
import {Container,Row,Col} from "react-bootstrap"
import Player from './Player'

const PlayerList = () => {
  return (
    <>
    <Container>
        
        <Row>{player.map(({name,team,nationality,jersyNumber,age,imageUrl})=>
        <Col>
        <Player
        name={name}
        team={team}
        nationality={nationality}
        jersyNumber={jersyNumber}
        age={age}
        imageUrl={imageUrl}
        />
        </Col>

        )}
       
        
        </Row>
        </Container>
    
    </>
    
  )
}

export default PlayerList;