'use client'

import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Section, ImageWrapper, BoxContainer } from './styles'

const data = [
  {
    image: '/assets/images/menjangan/menjangan-1.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-2.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-3.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-4.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-5.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-6.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-7.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-8.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-9.jpg',
    alt: 'menjangan diving',
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
