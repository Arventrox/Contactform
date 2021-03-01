import React from 'react';
import { Formik, Form } from 'formik';
import { InputForms } from './InputForms';
import { validation } from './ValidationScheme'

export const FormikData = () => {

    return(

        //Declares empty initial values to be used in the project

        <Formik
                initialValues={{
                firstName: '',
                lastName: '',
                birthDate: '',
                city: '',
                adress: '',
                mobileNumber: '',
                userName: '',
                email: '',
                password: '',
                confirmPassword: '',
                gender: '',
                message: ''
            }}

        //Points to our validation scheme and creating on submitt alert with the users input

            validationSchema={validation}

            onSubmit={(values , actions)  =>{
                alert(JSON.stringify(values));
                actions.resetForm();
            }}
        >

            {/* Creates the input forms in the browser */}

            {formik => (
                <div className="subcontainer">
                    <Form>
                    <div className="align-form">
                    <div className="left-container">
                        <InputForms label="First Name" name="firstName" type="text"/> 
                        <InputForms label="Last Name" name="lastName" type="text"/>
                        <InputForms label="Birth Date" name="birthDate" type="date"/>
                        <InputForms label="City" name="city" type="text"/>
                        <InputForms label="Adress" name="adress" type="text"/>
                        <InputForms label="Mobile Number" name="mobileNumber" type="tel"/>
                        <h3>Choose gender :</h3>
                        <InputForms className="radioButton" label="Male" name="gender" type="radio" value="1"/> 
                        <InputForms className="radioButton" label="Female" name="gender" type="radio" value="2"/> 
                    </div>
                    <div className="right-container">
                        <InputForms label="Username" name="userName" type="text"/>
                        <InputForms label="Email" name="email" type="email"/>
                        <InputForms label="Password" name="password" type="password"/>
                        <InputForms label="Confirm Password" name="confirmPassword" type="password"/>
                    </div>
                    </div>
                        <InputForms className="textArea" component="textarea" placeholder="Enter your message" name="message" type="text"/>
                        <button type="submit">Submit</button>
                    </Form>
                </div>         
            )}
        </Formik>
    )
}