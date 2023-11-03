'use client'

import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Section, ImageWrapper, BoxContainer } from './styles'

const data = [
  {
    image: '/assets/images/gili-tepekong/gili-tepekong-1.jpg',
    alt: 'gili tepekong diving',
  },
  {
    image: '/assets/images/gili-tepekong/gili-tepekong-2.jpg',
    alt: 'gili tepekong diving',
  },
  {
    image: '/assets/images/gili-tepekong/gili-tepekong-3.jpg',
    alt: 'gili tepekong diving',
  },
  {
    image: '/assets/images/gili-tepekong/gili-tepekong-4.jpg',
    alt: 'gili tepekong diving',
  },
  {
    image: '/assets/images/gili-tepekong/gili-tepekong-5.jpg',
    alt: 'gili tepekong diving',
  },
  {
    image: '/assets/images/gili-tepekong/gili-tepekong-6.jpg',
    alt: 'gili tepekong diving',
  },
  {
    image: '/assets/images/gili-tepekong/gili-tepekong-7.jpg',
    alt: 'gili tepekong diving',
  },
  {
    image: '/assets/images/gili-tepekong/gili-tepekong-8.jpg',
    alt: 'gili tepekong diving',
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
