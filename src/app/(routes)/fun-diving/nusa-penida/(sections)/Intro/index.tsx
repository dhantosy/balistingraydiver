'use client'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { Title, SubTitle, List, ListItem, Icon } from './styles'

export default function Intro() {
  return (
    <div>
      <div>
        <Title>Diving in Nusa Penida</Title>
        <p>Nusa Penida offers vibrant corals and unique marine life Exhilarating drift sites Nusa Penida diving trip is a favourite for experienced divers.</p>
        <p>It’s the only dive site in Bali where you can regularly see Manta all year round and Oceanic Sunfish (Mola) – mainly between July and October. Bali’s home to many reef fish including white tip reef sharks, eagle rays and blue-spotted stingrays, lionfish, octopus, moray eels, scorpionfish, and turtles.</p>
      </div>
      <div>
        <SubTitle>Nusa Penida Dive Sites</SubTitle>
        <List>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Manta point
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Crystal bay
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Blue corner
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Gamat Bay
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Toyopakeh
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Mangrove
          </ListItem>
        </List>
      </div>
    </div>
  )
}
