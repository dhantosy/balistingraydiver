'use client'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { Title, SubTitle, List, ListItem, Icon } from './styles'

export default function Intro() {
  return (
    <div>
      <div>
        <Title>Diving in Tulamben</Title>
        <p>Tulamben offers USAT Liberty Shipwreck (1942) colourful and diverse marine life. Tulamben diving is an excellent site for Beginners to Expert</p>
        <p>It`s a beautiful historic shipwreck from World War II. At this world-renowned dive site, our team will find you an abundance of all things to attract divers from the globe. Barracuda, turtles, hard corals, soft corals, pygmy seahorse, Bumphead parrotfish, Titan triggerfish, damselfish, trumpet fish, blue-spotted stingrays, garden eels, nudibranch, leaf scorpionfish, ghost pipefish, angelfish, octopus, cuttlefish, etc.</p>
      </div>
      <div>
        <SubTitle>Amed Dive Sites</SubTitle>
        <List>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            USAT Liberty Shipwreck
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Drop off
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Coral garden
          </ListItem>
          <ListItem>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            Boga Shipwreck
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
