'use client'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { Title, SubTitle, List, ListItem, Icon } from './styles'

export default function Intro() {
  return (
    <div>
      <div>
        <Title>Diving in Gili Tepekong / Mimpang</Title>
        <p>Gili Tepekong & Mimpang diving trip is suitable for experienced divers. The abundance of marine life Shark encounters</p>
        <p>Home of blacktip and white tip reef sharks and barracuda, stingray, trevally, sweetlips, napoleon fish, grouper, moray, nudibranch, cuttlefish, barracudas and turtles. With chances to see Mola around June - October.</p>
      </div>
      <div>
        <SubTitle>Gili Tepekong / Mimpang Dive Sites</SubTitle>
        <List>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Shark Alley
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Canyon
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Wall and Swim
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Gili Mimpang
          </ListItem>
          <ListItem>
          </ListItem>
          <ListItem>
          </ListItem>
        </List>
      </div>
    </div>
  )
}
