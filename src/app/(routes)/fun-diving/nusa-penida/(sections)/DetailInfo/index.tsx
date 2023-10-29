'use client'

import { FaRegCheckCircle } from 'react-icons/fa'
import { SubTitle, List, ListItem, Icon, Note, Schedule, ScheduleTime, ScheduleTitle, ScheduleWrapper, Pricing, PricingTag, PricingTitle, PricingWrapper, PricingSection, Space } from './styles'

export default function DetailInfo() {
  return (
    <div>
      <div>
        <SubTitle>What`s included when dive with us</SubTitle>
        <List>
          <ListItem>
            <Icon>
              <FaRegCheckCircle />
            </Icon>
            2X Dives
          </ListItem>
          <ListItem>
            <Icon>
              <FaRegCheckCircle />
            </Icon>
            Hotel Transfer
          </ListItem>
          <ListItem>
            <Icon>
              <FaRegCheckCircle />
            </Icon>
            Lunch and Drinks
          </ListItem>
          <ListItem>
            <Icon>
              <FaRegCheckCircle />
            </Icon>
            Ticket and Porter
          </ListItem>
          <ListItem>
            <Icon>
              <FaRegCheckCircle />
            </Icon>
            Certified Instructor
          </ListItem>
          <ListItem>
            <Icon>
              <FaRegCheckCircle />
            </Icon>
            Oxygen Tanks
          </ListItem>
          <ListItem>
            <Icon>
              <FaRegCheckCircle />
            </Icon>
            Weight Belt
          </ListItem>
          <ListItem>
            <Icon>
              <FaRegCheckCircle />
            </Icon>
            Speed Boat
          </ListItem>
          <ListItem>
            <Icon>
              <FaRegCheckCircle />
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
          <ScheduleTitle>Pickup from your hotel</ScheduleTitle>
          <ScheduleTime>7.00 AM - 7.30 AM</ScheduleTime>
        </Schedule>
        <Schedule>
          <ScheduleTitle>Depart from Bali Stingray Dive Center</ScheduleTitle>
          <ScheduleTime>8.00 AM - 8.30 AM</ScheduleTime>
        </Schedule>
        <Schedule>
          <ScheduleTitle>Arrive in Nusa Penida</ScheduleTitle>
          <ScheduleTime>9.00 AM - 9.30 AM</ScheduleTime>
        </Schedule>
        <Schedule>
          <ScheduleTitle>1st and 2nd dive</ScheduleTitle>
          <ScheduleTime>Morning Session</ScheduleTime>
        </Schedule>
        <Schedule>
          <ScheduleTitle>Lunch included on the speed boat</ScheduleTitle>
          <ScheduleTime>Afternoon</ScheduleTime>
        </Schedule>
        <Schedule>
          <ScheduleTitle>3rd dive (afternoon)</ScheduleTitle>
          <ScheduleTime>Afternoon Session</ScheduleTime>
        </Schedule>
        <Schedule>
          <ScheduleTitle>Return to Bali Stingray Dive Center</ScheduleTitle>
          <ScheduleTime>16.00 PM - 16.30 PM</ScheduleTime>
        </Schedule>
      </ScheduleWrapper>
      <PricingSection>
        <SubTitle className='uppercase'>Pricing</SubTitle>
        <PricingWrapper>
          <Pricing>
            <PricingTitle>Certified Diver</PricingTitle>
            <PricingTag>IDR 2.300.000</PricingTag>
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
      <div>
        <SubTitle>Additional Services</SubTitle>
        <Space>
          <div>Private Divemaster</div>
          <div>IDR 750.000</div>
        </Space>
        <Space>
          <div>Fullset Dive Equipment Rental</div>
          <div>IDR 250.000</div>
        </Space>
        <Space>
          <div>Extra Dive</div>
          <div>IDR 450.000</div>
        </Space>
        <Space>
          <div>Dive Computer Rental</div>
          <div>IDR 150.000</div>
        </Space>
        <Space>
          <div>Professional Photography</div>
          <div>IDR 2.500.000</div>
        </Space>
      </div>
    </div>
  )
}
