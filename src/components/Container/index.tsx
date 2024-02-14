import {
  DarkContainer,
  FooterContainer,
  LightContainer,
  PhotoContainer,
} from './styles';

export type Props = {
  type: 'light' | 'dark' | 'photo' | 'footer';
  photo?: string;
  children: JSX.Element;
};

const Container = ({ type, photo, children }: Props) => {
  switch (type) {
    case 'dark':
      return <DarkContainer>{children}</DarkContainer>;
    case 'photo':
      return <PhotoContainer photo={photo}>{children}</PhotoContainer>;
    case 'footer':
      return <FooterContainer>{children}</FooterContainer>;
    default:
      return <LightContainer>{children}</LightContainer>;
  }
};

export default Container;
