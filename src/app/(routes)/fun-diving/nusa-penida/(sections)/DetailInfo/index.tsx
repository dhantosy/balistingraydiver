'use client'

import { FaCheckCircle } from 'react-icons/fa'
import { SubTitle, List, ListItem, Icon, Note, Schedule, ScheduleTime, StrongTitle, ScheduleWrapper, Pricing, PricingTag, PricingTitle, PricingWrapper, PricingSection, Space, AdditionalInfo } from './styles'

export default function DetailInfo() {
  return (
    <div>
      <div>
        <SubTitle>What`s included when dive with us</SubTitle>
        <List>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            3X Dives
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Hotel Transfer
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Lunch and Drinks
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Ticket and Porter
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Certified Instructor
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
            Weight Belt
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Speed Boat
          </ListItem>
          <ListItem>
            <Icon>
              <FaCheckCircle />
            </Icon>
            Snorkelling Set
          </ListItem>
        </List>
        <Note>
          Note: for open water course & discover scuba diving, full set dive equipments are inculded.
        </Note>
      </div>
      <ScheduleWrapper>
        <SubTitle>Departure & Return</SubTitle>
        <Schedule>
          <div>Pickup from your hotel</div>
          <ScheduleTime>7.00 AM - 7.30 AM</ScheduleTime>
        </Schedule>
        <Schedule>
          <div>Depart from Bali Stingray Dive Center</div>
          <ScheduleTime>8.00 AM - 8.30 AM</ScheduleTime>
        </Schedule>
        <Schedule>
          <div>Arrive in Nusa Penida</div>
          <ScheduleTime>9.00 AM - 9.30 AM</ScheduleTime>
        </Schedule>
        <Schedule>
          <div>1st and 2nd dive</div>
          <ScheduleTime>Morning Session</ScheduleTime>
        </Schedule>
        <Schedule>
          <div>Lunch included on the speed boat</div>
          <ScheduleTime>Afternoon</ScheduleTime>
        </Schedule>
        <Schedule>
          <div>3rd dive</div>
          <ScheduleTime>Afternoon Session</ScheduleTime>
        </Schedule>
        <Schedule>
          <div>Return to Bali Stingray Dive Center</div>
          <ScheduleTime>4.00 PM - 4.30 PM</ScheduleTime>
        </Schedule>
      </ScheduleWrapper>
      <PricingSection>
        <SubTitle className='uppercase'>Pricing</SubTitle>
        <PricingWrapper>
          <Pricing>
            <PricingTitle>Certified Diver</PricingTitle>
            <PricingTag>IDR 2.750.000</PricingTag>
          </Pricing>
          <Pricing>
            <PricingTitle>Discover Scuba Diving</PricingTitle>
            <PricingTag>IDR 2.750.000</PricingTag>
          </Pricing>
          <Pricing>
            <PricingTitle>Snorkeling</PricingTitle>
            <PricingTag>IDR 1.250.000</PricingTag>
          </Pricing>
        </PricingWrapper>
      </PricingSection>
      <AdditionalInfo>
        <div>
          <SubTitle>Additional Services</SubTitle>
          <Space>
            <StrongTitle>Private Divemaster</StrongTitle>
            <div>IDR 750.000</div>
          </Space>
          <Space>
            <StrongTitle>Fullset Dive Equipment Rental</StrongTitle>
            <div>IDR 250.000</div>
          </Space>
          <Space>
            <StrongTitle>Extra Dive</StrongTitle>
            <div>IDR 450.000</div>
          </Space>
          <Space>
            <StrongTitle>Dive Computer Rental</StrongTitle>
            <div>IDR 150.000</div>
          </Space>
          <Space>
            <StrongTitle>Professional Photography</StrongTitle>
            <div>IDR 2.500.000</div>
          </Space>
        </div>
        <div>
          <SubTitle>Additional Information</SubTitle>
          <Space>
            <div>INT valve scuba tanks available, DIN valve provided on demand.</div>
          </Space>
          <Space>
            <div>Nitrox provided on demand, additional Rp. 50,000 per tank.</div>
          </Space>
          <Space>
            <div>Dive in a small group, maximum 3 divers (Guide Ratio 3:1).</div>
          </Space>
          <Space>
            <div>Dive sites will be chosen based on diver experience.</div>
          </Space>
          <Space>
            <div>Emergency Oxygen and First Aid ready.</div>
          </Space>
          <Space>
            <div>We speak English & Bahasa Indonesia.</div>
          </Space>
        </div>
      </AdditionalInfo>
    </div>
  )
}
