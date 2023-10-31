'use client'

import { FaCheckCircle } from 'react-icons/fa'
import { Title, SubTitle, List, ListItem, Icon } from './styles'

export default function Intro() {
  return (
    <div>
      <div>
        <Title>About Advance Open Water Diving</Title>
        <p>This course is the next step after you have completed your Open Water certification. This helps build confidence and advance your scuba diving skills through various adventure dives. You will complete the Deep and Navigation dive and can choose 3 more from Wreck, Drift, Boat, Naturalist, Fish ID, Peak Performance Buoyancy and Night.</p>
        <p>Let us know in advance if you want to do a Night dive as we have to run both days of your program in Tulamben. During Deep Adventure Dive, you learn how to plan a dive to deal with the physiological effects and challenges. Underwater Navigation Adventure Dive enhances your compass navigation skills and helps you navigate better using kick cycles, visual markers, and time. The knowledge and other skills you gain will vary according to your interests and adventures – photography, buoyancy control, fish identification, exploring shipwrecks, and more.</p>
      </div>
      <div>
        <SubTitle>Open Water Dive Requirements</SubTitle>
        <List>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            PADI Open Water Certification or Equivalent from Another Dive Association
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Recent diving experience within the past 6 months (or we can run a pool refresher for you on the day before your course)
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
