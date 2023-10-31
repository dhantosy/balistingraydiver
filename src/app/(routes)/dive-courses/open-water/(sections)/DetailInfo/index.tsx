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
        <SubTitle>Why Should I Get the PADI Open Water Certification with Bali Stingray Divers?</SubTitle>
        <p>Taking your Open Water with Bali Stingray is an excellent choice! We are a certified PADI Dive Centre and have been teaching PADI courses for more than 10 years. You can trust our experienced, well-trained staff and our safety-first procedures.</p>
        <p>Get up close and personal with your favourite characters from ‘Finding Nemo’ and more! The ocean covers over 70% of our planet. We estimate that 3/4 of all life on earth is found underwater. Breathing underwater will give you a new sense of freedom and happiness. You’ll discover fascinating marine life and increase your knowledge about this mysterious world. You will be the newest member of the ‘Aquaman’ community. Once you successfully complete this diving certification, you’ll be certified to dive to a maximum depth of 18 metres. You’ll be able to join dive trips around the world and find adventure and fun wherever there is water.</p>
      </div>
      <div>
        <SubTitle>What are the Options to Become an Open Water diver?</SubTitle>
        <p>If you want to maximise your diving time in Bali, you can take the theory online prior to arrival. If you take the eLearning you’ll need just 3 days to complete the course. You can start the Open Water eLearning immediately and work at your own pace whenever you have free time. The eLearning takes around 10 hours to complete and you have one year available to finish everything. It’s a fun and efficient way to learn and you will have lifetime access to all online learning.</p>
        <p>Another option is the PADI Open Water Referral. This great option allow you to take class and pool sessions with a dive centre in your home country before arrival in Bali. Once in Bali, you will just need 2 days (4 ocean dives) to complete your certification. It’s also a good choice if it’s too cold to dive in your home country. You can take your class and pool sessions at any PADI dive centre worldwide. If you want to get certified and make the most of it, we also offer special combo packages including Open Water and Advanced Open Water.</p>
      </div>
    </div>
  )
}
