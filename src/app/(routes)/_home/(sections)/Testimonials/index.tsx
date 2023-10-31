'use client'

import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import Container from '@/app/_components/Container'
import { Section, Title, Name, Subtitle, Source, Heading, BoxContainer, Rating, Quote } from './styles'

const data = [
  {
    name: 'Joni Kumpulainen',
    title: 'This was my fifth fun dive dip. I feel safe all time. We saw lot of big turtles, octopussy and lot of corals and colorfull fishes. Our instructor was funny guy and show tricks under the water.',
    source: 'Google Review',
  },
  {
    name: 'Suhair Suhaimi',
    title: 'Excellent dive shop! Spent 4 days with them, no fuss, flexible, and most importantly, safe divers. Had the pleasure of diving with guides Jance and Gede who took care of me the whole time 🤩 Will not disappoint!',
    source: 'Google Review',
  },
  {
    name: 'Jennifer Ho',
    title: 'I have dive with Bali Stingray for more than 10 years and each trip never fails. The Bali Stingray crew not only took me on guaranteed sightings but captured memorable videos too!',
    source: 'Google Review',
  },
  {
    name: 'Roy Huang',
    title: 'I wholeheartedly recommend Bali Stingray Divers for their outstanding services. The meticulous maintenance of personal dive gears, and the luxurious accommodations, Bali Stingray Divers truly deserves praise for providing an exceptional diving adventure.',
    source: 'Google Review',
  },
]

export default function Testimonials() {
  return (
    <Section id='testimonials'>
      <Container>
        <Heading>
          <Title>What Our Clients Say</Title>
        </Heading>
        <BoxContainer>
          <Swiper
            loop
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={80}
            autoplay
            breakpoints={{
              1: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            slidesPerView={2}
          >
            {data.map(({name, title, source}) => {

              return (
                <SwiperSlide key={name}>
                  <Quote><FaQuoteLeft /></Quote>
                  <Name>{name}</Name>
                  <Subtitle>{title}</Subtitle>
                  <Rating>
                    {Array.apply(null, Array(5)).map((_, i) => {
                      return (
                        <FaStar key={i} />
                      )
                    })}
                  </Rating>
                  <Source>{`Source: ${source}`}</Source>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </BoxContainer>
      </Container>
    </Section>
  )
}
