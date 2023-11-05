'use client'

import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Section, ImageWrapper, BoxContainer } from './styles'

const data = [
  {
    image: '/assets/images/tulamben/tulamben-1.jpg',
    alt: 'tulamben diving',
  },
  {
    image: '/assets/images/tulamben/tulamben-2.jpg',
    alt: 'tulamben diving',
  },
  {
    image: '/assets/images/tulamben/tulamben-3.jpg',
    alt: 'tulamben diving',
  },
  {
    image: '/assets/images/tulamben/tulamben-4.jpg',
    alt: 'tulamben diving',
  },
  {
    image: '/assets/images/tulamben/tulamben-5.jpg',
    alt: 'tulamben diving',
  },
  {
    image: '/assets/images/tulamben/tulamben-6.jpg',
    alt: 'tulamben diving',
  },
  {
    image: '/assets/images/tulamben/tulamben-8.jpg',
    alt: 'tulamben diving',
  },
  {
    image: '/assets/images/tulamben/tulamben-9.jpg',
    alt: 'tulamben diving',
  },
]

export default function Gallery() {
  return (
    <Section id='gallery'>
      <BoxContainer>
        <Swiper
          loop
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          autoplay
          slidesPerView={1}
        >
          {data.map(({ image, alt }, i) => {

            return (
              <SwiperSlide key={i}>
                <ImageWrapper>
                  <Image
                    src={image}
                    alt={alt}
                    sizes={`100vw, 33vw`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </ImageWrapper>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </BoxContainer>
    </Section>
  )
}
