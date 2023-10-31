'use client'

import { FaCheckCircle } from 'react-icons/fa'
import { Title, SubTitle, List, ListItem, Icon } from './styles'

export default function Intro() {
  return (
    <div>
      <div>
        <Title>About EFR & Rescue Diver</Title>
        <p>While Scuba Diving is an intrinsically safe sport, the PADI Rescue Diver course prepares you to deal with minor and significant dive emergencies (above and below the surface) using various techniques. Through knowledge development and rescue exercises, you learn what to look for and respond to. During rescue scenarios, you put into practice your knowledge and skills. The different topics include Self-rescue, recognising and managing panic, fear and stress in other divers and ultimately being equipped to prevent emergencies and provide emergency care if the situation arises.</p>
        <p>During the course, you will learn how to assist a tired diver and a panicked diver at the surface. You will practice some search patterns underwater with the aid of a compass to help you locate a missing buddy. You will learn how to surface, assess and transport an unresponsive diver with appropriate recovery for restoring breathing. You will also learn methods for exiting an unresponsive diver from the water. At Bali Stingray Divers, we ensure you are well-equipped to handle emergencies above and below the surface. We also make sure you have a great team to support you and HAVE FUN!</p>
      </div>
      <div>
        <SubTitle>EFR & Rescue Diver Requirements</SubTitle>
        <List>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Rescue Certification
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            PADI Emergency First Response (EFR) or other CPR and First Aid course within the past two years
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Be in good physical condition
          </ListItem>
        </List>
      </div>
    </div>
  )
}
