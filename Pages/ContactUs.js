import React from 'react'
import { Formik } from 'formik';
import { Field } from 'formik';
import { Form } from 'formik';
import '../main.css'

export default function ContactUs() {

  return (
    <div>
      <h1>♡Contact Us!♡</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <label htmlFor='message'>Send Us A Message!</label>
          <Field
            id='message' name='message' placeholder='Send us a Message'
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
};


