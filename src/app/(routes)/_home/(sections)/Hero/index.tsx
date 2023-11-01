'use client'

import Container from '@/app/_components/Container'
import { Section, Content, VideoWrapper, Title, Subtitle, Button } from './styles'

export default function Hero() {
  return (
    <Section id='intro-banner'>
      <VideoWrapper>
        <video
          autoPlay
          loop
          muted
          webkit-playsinline='true'
          playsInline
          poster='/assets/images/video-dive-poster.webp'
        >
          <source
            src='/assets/images/video-dive.mp4'
          />
        </video>
      </VideoWrapper>
      <Container>
        <Content>
          <Title>Discover The Underwater World</Title>
          <Subtitle>Unleash your inner adventurer, dive into the world of underwater exploration with Bali Stingray Divers</Subtitle>
          <a href='#fun-diving'>
            <Button>
              Let`s Dive
            </Button>
          </a>
        </Content>
      </Container>

      <style jsx global>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </Section>
  )
}
