import { useEffect } from 'react';
import '../components/Main/Section/styles.scss';
import List from '../components/List';
import ListItem from '../components/ListItem';
import Section from '../components/Main/Section';
import Title from '../components/Title';
import Image from '../components/Image';
import Wrapper from '../components/Wrapper';
import { Button } from '../components/Button';
import Description from '../components/Description';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectUsers, selectNextUrl, selectPage, selectTotalPage } from '../store/selectors';
import { moreUsersThunk, usersThunk } from '../store/redusers/usersSlice';

const GetUsersContainer = () => {
  const dispatch = useAppDispatch();
  const usersList = useAppSelector(selectUsers);
  const nextUrl = useAppSelector(selectNextUrl);
  const page = useAppSelector(selectPage);
  const totalPage = useAppSelector(selectTotalPage);

  useEffect(() => {
    dispatch(usersThunk());
  }, [dispatch]);

  const handleClickMoreUsers = () => {
    dispatch(moreUsersThunk(nextUrl));
  }

  return (
    <Section id='users' className='get'>
      <Title style={{ marginBottom: '50px' }}>Working with GET request</Title>
        <List>
          {usersList.map(users => {
            const { id, photo, name, position, email, phone } = users;

            return (
              <ListItem key={id}>
                <Wrapper className='get__content'>
                  <Image className='get__image' src={photo} alt="Person" />
                    <Description className='post__text'>{name}</Description>
                    <Wrapper className='get__wrapper'>
                      <Description className='get__text'>{position}</Description>
                      <Description className='get__text'>{email}</Description>
                      <Description className='get__text'>{phone}</Description>
                    </Wrapper>
                </Wrapper>
              </ListItem>
            )
          })}
        </List>
      {page !== totalPage && (
        <Button
          onClick={handleClickMoreUsers}
        >
          Show more
        </Button>
      )}
    </Section>
  )
}

export default GetUsersContainer;
