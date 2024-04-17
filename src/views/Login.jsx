import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import {FormikFormSchema} from '../components/Formik/FormikFormSchema'
import '../App.css';




function Login() {

    const {login } = useAuthContext();
    const navigate = useNavigate();


    const { values, errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting } = useFormik({
        initialValues: {
          email: "",
          password: "",
         
        },
        validationSchema: FormikFormSchema,
        onSubmit
      });

      const user = {email:values.email, password: values.password}

      async function onSubmit(values,actions){
        console.log("values",values);
        console.log(actions)
        // await new Promise((resolve)=>setTimeout(()=>resolve(),2000));
      
        login(user);
        navigate('/');
        actions.resetForm()
    
    }
  

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

            <input 
            type='email' 
            id="email" 
            value={values.email}
            onChange={handleChange("email")}
            placeholder="Email"
            onBlur={handleBlur("email")}
            className={errors.email && touched.email ? "input-error" : ""}
            />
             {errors.email && touched.email &&(
            <p className="error">{errors.email}</p>
            )}

            <input 
            type='password' 
            id="password" 
            value={values.password}
            onChange={handleChange("password")}
            placeholder="Password"
            onBlur={handleBlur("password")}
            className={errors.password && touched.password ? "input-error" : ""}
            />

            {errors.password && touched.password &&(
            <p className="error">{errors.password}</p>
        )}

            <button type='submit' disabled={isSubmitting}>Submit</button>
        </form>

        <pre>
            {JSON.stringify({ values, errors }, null, 1)}
        </pre>

    </div>
  )
}

export default Login