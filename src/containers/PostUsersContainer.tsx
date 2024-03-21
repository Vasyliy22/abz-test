import Section from '../components/Main/Section';
import Title from '../components/Title';
import '../components/Main/Section/styles.scss';
import * as Yup from 'yup';
import { ChangeEvent, useState } from 'react';
import { createUser } from '../api';
import UserForm from '../components/UserForm';
import { Formik } from 'formik';
import { useAppDispatch } from '../store/hooks';
import { setNewUser } from '../store/redusers/usersSlice';

const emailRules = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const phoneRules = /^\+38(0\d{9})$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(60, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email').required('Required')
    .matches(emailRules, { message: 'You need enter correct path, example .com' }),
  phone: Yup.string().matches(phoneRules, { message: 'Number must be started +380 and count 9 after 0' }).required('Required'),
  position: Yup.string().required('Required')
});

const PostUsersContainer = () => {
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files?.[0];

    if (file.size >= 5145728) {
      setError('Please reload less size');
      return;
    }

    if (!file.type.includes('jpg') && !file.type.includes('jpeg')) {
      setError('Wrong format, Please upload format jpeg or jpg');
      setMessage('Wrong Type');
      setImage(null);
      return;
    }

    setImage(event.target.files?.[0]);
    setError('');
    setMessage('');
  }

  return (
    <Section id='sign-up' className='post'>
      <Title style={{ marginBottom: '50px' }}>Working with POST request</Title>
      <Formik
        initialValues={{
            name: '',
            email: '',
            phone: '',
            position: '',
          }
        }
        validationSchema={SignupSchema}
         onSubmit={(values, action) => {

          const user = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            position: values.position,
            photo: image as File,
            position_id: String(1),
            registration_timestamp: +(new Date())
          }

          const currentUser = createUser(user);

          currentUser.then(res => {
            if (res.success === true) {
              fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users/${res.user_id}`)
              .then(res => res.json()).then(user => {
                dispatch(setNewUser(user));
              });
            }
          });

          setImage(null);
          setMessage('Upload your photo');
          action.resetForm();
        }}
      >
        {({ values, handleSubmit, handleChange }) => (
          <UserForm
            values={values}
            error={error}
            image={image}
            message={message}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleChangeImage={handleChangeImage}
          />
        )}
      </Formik>
    </Section>
  )
}

export default PostUsersContainer;