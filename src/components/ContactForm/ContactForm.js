import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export default function ContactForm() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  function handleSubmit(values, { resetForm }) {
    resetForm();

    const dataNameLowerCase = values.name.toLowerCase().trim();

    if (
      contacts.find(el => dataNameLowerCase === el.name.toLowerCase().trim())
    ) {
      alert(`Contact was added`);
      return;
    }

    dispatch(addContact(values));
  }

  const initialValues = {
    name: '',
    number: '',
  };

  // ValidationSchema
  const Schema = yup.object({
    name: yup.string().required(),
    number: yup.number().required(),
  });

  return (
    <div>
      {/* Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Name
            <Field type="text" name="name"></Field>
          </label>

          <label>
            Number
            <Field type="tel" name="number"></Field>
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
