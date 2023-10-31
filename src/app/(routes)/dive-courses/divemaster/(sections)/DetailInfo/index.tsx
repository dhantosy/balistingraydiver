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
          <ListItem></ListItem>
        </List>
      </div>
      <div>
        <SubTitle>Why Should I Get the PADI Rescue Diver Certification with Bali Stingray Divers?</SubTitle>
        <p>Learn from the best – we have been conducting this course for 5 years! </p>
        <p>Improve Your Scuba Skills and Confidence Underwater and learn how to manage emergencies… Also, progress your PADI Certification level. Divers describe the PADI Rescue Diver course at Bali Stingray Divers as the “most challenging, yet most rewarding course”, and for a good reason. You will learn to become a better buddy by practising problem-solving skills until they become second nature. These skills will be put to the test, both on top of the water and underneath until you can complete them confidently. With skills and training comes confidence, and that’s precisely how the Rescue Diver Course will help your skills above and below the water.</p>
      </div>
      <div>
        <SubTitle>Be Prepare for any Emergency Situation</SubTitle>
        <p>We have all learnt about the possible emergencies that can arise from diving. But can you confidently say that you would know what to do in an emergency? That’s where the Rescue Diver course comes in. Combined with Emergency First Response and quality CPR training will ensure you’re prepared for any medical emergency – on top of the water or underneath.</p>
      </div>
      <div>
        <SubTitle>Improve Your Underwater Navigation Sklls</SubTitle>
        <p>Navigation. An essential skill to master – while you learn this in Open Water and Advanced Open Water, your Navigation skills will be more finely tuned. This is an excellent skill for you to take diving to the next level and prepare you to become a PADI Pro at the Divemaster level. You will learn search and rescue techniques – this is one of the many skills to utilise as a diver. This course presumes handling emergencies with another diver, but you may also use your navigations skills to recover a dive computer or mask that may go overboard!!! You will have plenty of practice, and you will ultimately be capable of ensuring you can navigate through any conditions.</p>
      </div>
      <div>
        <SubTitle>It`s the Last Course Before the PADI Divemaster Course</SubTitle>
        <p>If you’re interested in taking the next step and turning scuba diving into a career, then the PADI Divemaster Course at Bali Stingray Divers might be for you. The Rescue Diver course is the last scuba course you will need to complete before starting your journey to become an underwater tour guide (Divemaster or Master Scuba Diver for purely recreational divers). The skills and knowledge learnt in your Rescue Diver course will become the foundation of your Divemaster training.</p>
      </div>
    </div>
  )
}
