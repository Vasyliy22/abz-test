import '../components/Header/styles.scss';
import logo from '../images/logo-animal.svg';
import logoText from '../images/logo-text.svg';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import Image from '../components/Image';
import Title from '../components/Title';
import Description from '../components/Description';
import Link from '../components/Link';

const HeaderContainer = () => {
  return (
    <Header>
      <Wrapper className='header__content'>
        <Wrapper className="header__logo">
          <Image src={logo} alt="Logo" className="header__image header__image--animal" />
          <Image src={logoText} alt="Text" className="header__image header__image--text" />
        </Wrapper>
        <Wrapper className="header__buttons">
          <Link href='#users'>Users</Link>
          <Link href='#sign-up'>Sign Up</Link>
        </Wrapper>
      </Wrapper>
      <Wrapper className="header__background">
          <Wrapper className="header__wrapper">
            <Title style={{ color: '#fff' }}>Test assignment for front-end developer</Title>
            <Description className="header__description">
              What defines a good front-end developer is one that has
              skilled knowledge of HTML, CSS, JS with a vast understanding
              of User design thinking as they'll be building web interfaces
              with accessibility in mind. They should also be excited to learn,
              as the world of Front-End Development keeps evolving.
            </Description>
            <Link href='#sign-up'>Sign up</Link>
          </Wrapper>
      </Wrapper>
    </Header>
  )
}

export default HeaderContainer;