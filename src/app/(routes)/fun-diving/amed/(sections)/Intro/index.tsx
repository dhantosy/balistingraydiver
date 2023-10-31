'use client'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { Title, SubTitle, List, ListItem, Icon } from './styles'

export default function Intro() {
  return (
    <div>
      <div>
        <Title>Diving in Amed</Title>
        <p>Amed diving trip is a hidden gem in the North East of Bali Combination of natural and artificial reefs is Perfect for photography.</p>
        <p>An abundance of macro species and schooling Barracuda, a Japanese Shipwreck, a variety of incredible fish species: titan triggerfish, damselfish, trumpet fish, blue-spotted stingrays, garden eels, nudibranch, leaf scorpionfish, ghost pipefish, angelfish, octopus, cuttlefish, And so much more.</p>
      </div>
      <div>
        <SubTitle>Amed Dive Sites</SubTitle>
        <List>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Jemeluk Wall
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Jemeluk Bay
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Pyramid
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Lipah
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Bunutan
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Japanese Wreck
          </ListItem>
        </List>
      </div>
    </div>
  )
}
