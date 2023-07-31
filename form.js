import "./styles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function PKForm() {
  function handleSubmit(values) {
    // You can perform any additional validations here if needed
    console.log("Submitted successfully:", values);
    alert("Submitted successfully");
  }

  return (
    <div className="pk">
      <h1>Register form</h1>
      <Formik
        initialValues={{ name: "", number: "", dob: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Please enter a name";
          }
          if (values.number.length > 10) {
            errors.number = "Please enter a valid phone number";
          }
          if (!values.dob) {
            errors.dob = "Please enter your D.O.B";
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <label>Name</label>
            <Field type="text" name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" component="div" />

            <br />
            <br />
            <label>Phone number</label>
            <Field
              type="text"
              name="number"
              maxLength="10"
              placeholder="Please enter your mobile number"
            />
            <ErrorMessage name="number" component="div" />

            <br />
            <br />
            <label>DOB</label>
            <Field type="date" name="dob" />
            <ErrorMessage name="dob" component="div" />

            <br />
            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
