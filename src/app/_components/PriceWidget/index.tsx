'use client'

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
          <a href="">
            <BoxMore>
              <div>
                Make Enquiry
              </div>
              <BoxIcon>
                <FaAngleRight />
              </BoxIcon>
            </BoxMore>
          </a>
        </div>
      </Content>
    </Wrapper>
  );
}
