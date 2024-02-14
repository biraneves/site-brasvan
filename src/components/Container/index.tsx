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
  id: string;
};

const Container = ({ type, photo, children, id }: Props) => {
  switch (type) {
    case 'dark':
      return <DarkContainer id={id}>{children}</DarkContainer>;
    case 'photo':
      return (
        <PhotoContainer id={id} photo={photo}>
          {children}
        </PhotoContainer>
      );
    case 'footer':
      return <FooterContainer id={id}>{children}</FooterContainer>;
    default:
      return <LightContainer id={id}>{children}</LightContainer>;
  }
};

export default Container;
