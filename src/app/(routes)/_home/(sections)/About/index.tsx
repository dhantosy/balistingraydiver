'use client'

import { Section, Grid, GridContent, Title, VideoWrapper, Video } from './styles'

export default function About() {
  return (
    <Section>
      <Grid>
        <GridContent>
          <Title>Explore the Ocean with Us</Title>
          <p>Located in Denpasar, south of Sanur Kauh, our Bali Dive Center – Bali Stingray Divers dedicated to provide exceptional underwater experiences for diving enthusiasts of all levels.</p>
          <p>With a team of highly trained and experienced instructors, we offer a range of diving courses and guided tours to ensure a safe and enjoyable adventure. Whether you are a beginner looking to take your first breaths underwater or an experienced diver seeking new and exciting dive sites, we committed to deliver unforgettable diving experiences. We prioritize safety, professionalism, and environmental conservation, ensuring that every dive is conducted responsibly and with utmost care for the marine ecosystem.</p>
          <p>Join us and embark on an extraordinary journey into the depths of the ocean!</p>
        </GridContent>
      </Grid>
      <Grid>
        <VideoWrapper>
          <Video
            autoPlay
            loop
            muted
            poster='/assets/images/video-dive-poster.jpg'
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
