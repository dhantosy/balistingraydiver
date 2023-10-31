'use client'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { Title, SubTitle, List, ListItem, Icon } from './styles'

export default function Intro() {
  return (
    <div>
      <div>
        <Title>Diving in Menjangan</Title>
        <p>The home  Turtles, Fire Dartfish, Red-Toothed Triggerfish, Wall diving, Nudibranchs, Orangutan Crabs Bat fish, Blue dogtooth tuna, and Tip Reef in Menjangan.</p>
      </div>
      <div>
        <SubTitle>Menjangan Dive Sites</SubTitle>
        <List>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Anchor Wreck
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            POS I
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            POS II
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Bat Cave
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Temple Point
          </ListItem>
          <ListItem>
          </ListItem>
        </List>
      </div>
    </div>
  )
}
