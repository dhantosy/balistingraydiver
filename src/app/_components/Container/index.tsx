import { ReactNode } from 'react';
import { ContainerOuter, ContainerInner } from './styles';

type ContainerProps = {
  children?: ReactNode;
  maxWidth?: string;
};

export const containerWidth = 1180;
export const containerPaddingX = 20;

export default function Container({ children }: ContainerProps) {
  return (
    <ContainerOuter>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  );
}
