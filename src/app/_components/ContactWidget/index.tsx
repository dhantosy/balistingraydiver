'use client'

import { FaRegEnvelope, FaPhoneAlt } from 'react-icons/fa'

import { Wrapper, Content, Info, InfoIcon, Title } from './styles';

type Props = {
  title: string;
};

export default function ContactWidget({ title }: Props) {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <div>
          <Info>
            <InfoIcon><FaPhoneAlt /></InfoIcon>
            <a href='tel:+6281246529722'>+62 812 4652 9722</a>
          </Info>
          <Info>
            <InfoIcon><FaRegEnvelope /></InfoIcon>
            <a href='mailto:infobalistingray@gmail.com'>infobalistingray@gmail.com</a>
          </Info>
        </div>
      </Content>
    </Wrapper>
  );
}
