import React from 'react'
import {withFormik, Form, Field} from 'formik'
import * as yup from 'yup'

const UserForm =({errors, touched, status}) => {
    console.log(errors)
    return(
       <Form>
           {touched.name && errors.name && <p className='error'>{errors.name}</p>}
           <Field type='text' name='name' placeholder="User" />

           {touched.email && errors.email && <p className='error'>{errors.email}</p>}
           <Field type='email' name='email' placeholder="Email" />

           {touched.password && errors.password && <p className='error'>{errors.password}</p>}
           <Field type='password' name='password' placeholder="Password" />
           <label>
           <Field type='checkbox' name='terms of service' />
            <span>Terms of Service</span>
           </label>
           <button type='submit'>Submit</button>

       </Form>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
        name: values.name || '',
        email: values.email || '',
        password: values.password || ''

        }
    },
    validationSchema:yup.object().shape({
        name: yup.string().required('Please enter first and last name'),
        email: yup.string().required('Please enter valid email'),
        password: yup.string().required('Please enter password')
        
    })
})(UserForm)