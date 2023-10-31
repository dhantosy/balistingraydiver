'use client'

import Link from 'next/link';
import { FaClock, FaMapMarkerAlt, FaSwimmer, FaArrowsAltV, FaTag, FaAngleRight } from 'react-icons/fa'
import { Wrapper, Content, ContentTop, Info, InfoIcon, Title, BoxIcon, BoxMore } from './styles';

type Props = {
  title: string;
  price: string;
  duration?: string;
  location?: string;
  sessions?: string;
  depth?: string;
};

export default function PriceWidget({ title, price, duration, location, sessions, depth }: Props) {
  return (
    <Wrapper>
      <Content>
        <div>
          <ContentTop>
            <Title>{title}</Title>
            {duration && (
              <Info>
                <InfoIcon><FaClock /></InfoIcon>
                <div>{duration}</div>
              </Info>
            )}
            {location && (
              <Info>
                <InfoIcon><FaMapMarkerAlt /></InfoIcon>
                <div>{location}</div>
              </Info>
            )}
            {sessions && (
              <Info>
                <InfoIcon><FaSwimmer /></InfoIcon>
                <div>{sessions}</div>
              </Info>
            )}
            {depth && (
              <Info>
                <InfoIcon><FaArrowsAltV /></InfoIcon>
                <div>{depth}</div>
              </Info>
            )}
            {price && (
              <Info className='price'>
                <InfoIcon><FaTag /></InfoIcon>
                <div>{price}</div>
              </Info>
            )}
          </ContentTop>
          <Link
            href='https://api.whatsapp.com/send/?phone=6281246529722'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BoxMore>
              <div>
                Make Enquiry
              </div>
              <BoxIcon>
                <FaAngleRight />
              </BoxIcon>
            </BoxMore>
          </Link>
        </div>
      </Content>
    </Wrapper>
  );
}
