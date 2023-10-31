'use client'

import { FaCheckCircle } from 'react-icons/fa'
import { Title, SubTitle, List, ListItem, Icon } from './styles'

export default function Intro() {
  return (
    <div>
      <div>
        <Title>About Open Water Diving</Title>
        <p>Have you ever dreamt of breathing underwater? Have you ever wanted to explore a paralleled reality? The Open Water course is where the magic begins! The Open Water course is the world’s most popular diving course. This beginner PADI certification will teach you the skills to dive safely and independently anywhere in the world. And what better place to do it than the incredible Island of Bali. There is so much to explore! After you get this diving certification your life will never be the same.</p>
        <p>It takes three days to get your PADI Open Water course but the diving adventures will take a lifetime. This diving course is divided in three steps: theory and knowledge development with a PADI Instructor, skill practice in our pool – to learn the basic safety techniques of scuba diving, and diving in open water to apply the basic diving techniques learned in the pool. Then it’s time to explore the stunning underwater world of Bali. Turtles, stingray, barracuda and some of the most diverse corals and marine life in the world. Become the newest member of the worldwide scuba diving community and join 20 million other divers!</p>
      </div>
      <div>
        <SubTitle>Open Water Dive Requirements</SubTitle>
        <List>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Minimum 10 years old.
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Must be able to comfortably swim up to 300 meters in length using mask, fins and snorkel
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Must be able to float at least 10 minutes.
          </ListItem>
        </List>
      </div>
    </div>
  )
}
