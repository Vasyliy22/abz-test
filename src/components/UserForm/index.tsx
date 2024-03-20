import { ChangeEvent, FC, FormEvent } from 'react';
import '../Main/Section/styles.scss';
import Form from '../Form';
import Wrapper from '../Wrapper';
import { ErrorMessage, Field } from 'formik';
import ErrorImage from '../ErrorImage';
import Description from '../Description';
import UserFormik from '../../types/UserFormik';
import Label from '../Label';
import ButtonSubmit from '../ButtonSubmit';

type Props = {
  values: UserFormik,
  error: string,
  message: string,
  image: File | null,
  handleSubmit: (e?: FormEvent<HTMLFormElement>) => void,
  handleChange: (e: ChangeEvent<any>) => void,
  handleChangeImage: (value: ChangeEvent<HTMLInputElement>) => void,
}

const UserForm: FC<Props> = ({ values, image, error, message, handleSubmit, handleChange, handleChangeImage }) => {
  const { name, email, phone } = values;

  return (
    <Form onSubmit={handleSubmit} className='post__form'>
      <Label htmlFor="name" className='post__number'>
        <Field
          className='post__input'
          placeholder='Your Name'
          type="text"
          name='name'
          value={name}
          onChange={handleChange}
          id='name'
        />
        <ErrorMessage component="span" className='post__message' name="name" />
      </Label>

      <Wrapper>
        <Label htmlFor="email" className='post__number'>
          <Field
            className='post__input'
            placeholder='Email'
            type="email"
            name='email'
            value={email}
            onChange={handleChange}
          />
          <ErrorMessage component="span" className='post__message' name="email" />
        </Label>
      </Wrapper>

      <Wrapper>
        <Label htmlFor="phone" className='post__number'>
          <Field
            className='post__input'
            id='phone'
            placeholder='Phone'
            type="tel"
            name='phone'
            value={phone}
            onChange={handleChange}
          />
          <ErrorMessage component="span" className='post__message' name="phone" />
          <Description className='post__desc'>+38 (XXX) XXX - XX - XX</Description>
        </Label>
      </Wrapper>

      <Wrapper className='post__position'>
        Select your position
        <Label className='post__label' htmlFor="front">
          <Field
            type="radio"
            id='front'
            name="position"
            value='Frontend developer'
            onChange={handleChange}
          />
          Frontent developer
        </Label>

        <Label className='post__label' htmlFor="backend">
          <Field
            type="radio"
            id='backend'
            name="position"
            value='Backend developer'
            onChange={handleChange}
          />
          Backend developer
        </Label>

        <Label className='post__label' htmlFor="designer">
          <Field
            type="radio"
            id='designer'
            name="position"
            value='Designer'
            onChange={handleChange}
          />
          Designer
        </Label>

        <Label className='post__label' htmlFor="qa">
          <Field
            type="radio"
            id='qa'
            name="position"
            value='QA'
            onChange={handleChange}
          />
          QA
        </Label>
        <ErrorMessage
          component="span"
          className='post__message'
          name="position"
        />
      </Wrapper>

      <Wrapper>
        <Wrapper className='post__file'>
          <Label htmlFor="file">
            <Wrapper className='post__file-upload'>Upload</Wrapper>
            <Field
              id='file'
              className='post__input post__input--file'
              type="file"
              accept='.jpg, .jpeg'
              name='photo'
              onChange={handleChangeImage}
            />
          </Label>
          <Wrapper>{image ? image.name : 'Upload your photo'}</Wrapper>
        </Wrapper>
        {!image?.type.includes('jpg jpeg') && ( <ErrorImage>{error}</ErrorImage> )}
      </Wrapper>

      <Wrapper className='post__button'>
        <ButtonSubmit type='submit'>
          Sign up
        </ButtonSubmit>
      </Wrapper>
    </Form>
  )
}

export default UserForm;
