import React from 'react'
import { Button, TextInput } from '../../ui/Form'
import { Field, Form, Formik } from 'formik'
import {
  checkoutValidationSchema,
  countryList,
  postData,
} from './Checkout.helpers'
import { Cart } from './Cart'
import { toast } from 'react-toastify'

export const Checkout = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    postalCode: '',
    creditCard: '',
    CVV: '',
    expDate: '',
  }

  const handleOnSubmit = async (values, { resetForm }) => {
    const res = await postData('/order', values)

    if (res.ok) {
      toast.success('Order sent successfully', {
        autoClose: 5000,
        draggable: true,
      })

      resetForm()
    } else {
      toast.error('There was an error processing your order', {
        autoClose: 5000,
        draggable: true,
      })
    }
  }

  return (
    <div className="checkout-container">
      <Cart />
      <Formik
        initialValues={initialValues}
        onSubmit={handleOnSubmit}
        validationSchema={checkoutValidationSchema}
      >
        {({ errors, touched }) => (
          <Form className="checkout">
            <h2 className="checkout-step-title mb-1">
              <div className="badge">1</div>
              PERSONAL INFORMATION
            </h2>

            <div className="flex mb-2">
              <div className="w-50">
                <Field
                  component={TextInput}
                  label="First name"
                  placeholder="Elon"
                  name="firstName"
                />
              </div>
              <div className="w-50">
                <Field
                  component={TextInput}
                  label="Last name"
                  placeholder="Musk"
                  name="lastName"
                />
              </div>
            </div>

            <div className="mb-2">
              <Field
                component={TextInput}
                label="Email"
                name="email"
                placeholder="elon@spacex.com"
              />
            </div>

            <div className="flex mb-2">
              <div className="w-50">
                <div
                  className={`form-select ${
                    errors.country && touched.country ? 'has-error' : ''
                  }`}
                >
                  <label className="form-select-label">Country</label>
                  <Field as="select" label="Country" name="country">
                    <option disabled value="">
                      Select a country
                    </option>
                    {countryList.map((country) => (
                      <option key={country.code} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </Field>
                  {errors.country && touched.country && (
                    <div className="error">{errors.country}</div>
                  )}
                </div>
              </div>
              <div className="w-50">
                <Field
                  component={TextInput}
                  label="Postal code"
                  name="postalCode"
                  placeholder="10001"
                />
              </div>
            </div>

            <div>
              <Field
                component={TextInput}
                label="Phone number"
                name="phone"
                placeholder="(212) 456 789"
              />
            </div>

            <h2 className="checkout-step-title mt-2 mb-1">
              <div className="badge">2</div>
              PAYMENT DETAILS{' '}
              <img src="/images/icons8-lock-24.png" className="icon icon-sm" />
            </h2>

            <div className="mb-2">
              <Field
                component={TextInput}
                label="Credit card"
                name="creditCard"
                placeholder="0000 - 0000 - 0000 - 0000"
                addon={
                  <img
                    src="/images/icons8-visa-48.png"
                    className="credit-card-icon"
                  />
                }
              />
            </div>

            <div className="flex mb-2">
              <div className="w-50">
                <Field
                  component={TextInput}
                  label="Security code"
                  name="CVV"
                  placeholder="***"
                />
              </div>
              <div className="w-50">
                <Field
                  component={TextInput}
                  label="Expire date"
                  name="expDate"
                  placeholder="MM/YY"
                />
              </div>
            </div>

            <div className="mt-2">
              <Button type="submit" buttonType="form-submit">
                <img
                  src="/images/icons8-shopping-cart-64.png"
                  className="icon mr-1"
                />
                COMPLETE PURCHASE
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
