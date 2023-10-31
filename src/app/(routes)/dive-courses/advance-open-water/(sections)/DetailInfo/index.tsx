'use client'

import { FaCheckCircle } from 'react-icons/fa'
import { SubTitle, List, ListItem, Icon } from './styles'

export default function DetailInfo() {
  return (
    <div>
      <div>
        <SubTitle>What`s Included</SubTitle>
        <List>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Hotel Transfer (Sanur, Kuta, Seminyak, Nusa Dua areas)
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            PADI E-Learning theory and online certification
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Log Book
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Daily Lunch
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Drinks & Snacks
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Fresh Towel
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Diving Equipment Rental
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Oxygen Tanks
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Memorable journey!
          </ListItem>
        </List>
      </div>
      <div>
        <SubTitle>Why Should I Get the PADI Advance Open Water Certification with Bali Stingray Divers?</SubTitle>
        <p>Here at Bali Stingray, we are a PADI Dive Centre. Trust our experienced and well-trained staff and our safety-first procedures.</p>
        <p>We run this course at the two best locations in Bali – Tulamben and Nusa Penida. You’ll get to explore the World War II Shipwreck in Tulamben, and you have the chance to see Manta at Nusa Penida (year-round) and MolaMola (July-Oct). Bali is a beautiful island with rich culture, fantastic climate and bountiful marine life.</p>
      </div>
    </div>
  )
}
