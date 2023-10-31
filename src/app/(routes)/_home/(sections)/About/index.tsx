'use client'

import Image from 'next/image'
import { Section, Grid, GridContent, Title, Text, VideoWrapper, Video, ImageWrapper } from './styles'

export default function About() {
  return (
    <Section>
      <Grid>
        <GridContent>
          <Title>Explore the Ocean with Bali Stingray Divers</Title>
          <Text>
            <p>Located in Denpasar, south of Sanur Kauh, our Bali Dive Center, <strong>Bali Stingray Divers</strong> dedicated to provide exceptional underwater experiences for diving enthusiasts of all levels.</p>
            <p>With a team of highly trained and experienced instructors, we offer a range of diving courses and guided tours to ensure a safe and enjoyable adventure. Whether you are a beginner looking to take your first breaths underwater or an experienced diver seeking new and exciting dive sites, we committed to deliver unforgettable diving experiences. We prioritize safety, professionalism, and environmental conservation, ensuring that every dive is conducted responsibly and with utmost care for the marine ecosystem.</p>
            <p>Join us and embark on an extraordinary journey into the depths of the ocean!</p>
          </Text>
        </GridContent>
      </Grid>
      <Grid>
        <VideoWrapper>
          <ImageWrapper>
            <Image
              src="/assets/images/padi-authorized.jpg"
              alt="Bali Stingray Diver"
              sizes={`100vw, 33vw`}
              width='250'
              height='75'
            />
          </ImageWrapper>
          <Video
            autoPlay
            loop
            muted
            poster='/assets/images/video-dive-poster.jpg'
            webkit-playsinline
            playsInline
          >
            <source
              src='/assets/images/video-dive.mp4'
            />
          </Video>
        </VideoWrapper>
      </Grid>
    </Section>
  )
}
