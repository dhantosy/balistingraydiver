'use client'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { Title, SubTitle, List, ListItem, Icon } from './styles'

export default function Intro() {
  return (
    <div>
      <div>
        <Title>Diving in Padang Bai</Title>
        <p>Padang Bai offers colourful and diverse marine life Perfect for snorkelling. Padang Bai diving trip is ideal for macro photography.</p>
        <p>The marine life is abundant and healthy here. Cuttlefish, leaf scorpionfish, Crocodile fish, Oriental sweetlips, Moray eels, many Clownfish, and anemone fish can be seen during a Padang Bai diving. Chances of seeing sharks & turtles too!</p>
      </div>
      <div>
        <SubTitle>Padang Bai Dive Sites</SubTitle>
        <List>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Blue Lagoon
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Jepun
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Bias Tugel
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Ferry Channel
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Turtle Neck
          </ListItem>
          <ListItem>
          </ListItem>
        </List>
      </div>
    </div>
  )
}
