import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css"



const RegistrationForm = () => {

  const dispatch = useDispatch()
    const handleSubmit = (values, actions)=> {
        dispatch(register(values));
        actions.resetForm();
    }
    return (
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className={css.form} autoComplete="off">
            <label className={css.label}>
              Username
              <Field className={css.input} type="text" name="name" placeHolder="User Name"/>
            </label>
            <label className={css.label}>
              Email
              <Field className={css.input} type="email" name="email" placeHolder="exemple@mail.com"/>
            </label>
            <label className={css.label}>
              Password
              <Field className={css.input} type="password" name="password" placeHolder="Password"/>
            </label>
            <button className={css.btn} type="submit">Register</button>
          </Form>
        </Formik>
      );
  
}

export default RegistrationForm;