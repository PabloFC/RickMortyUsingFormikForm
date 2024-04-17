
import { useFormik } from 'formik';
import { FormikFormSchema } from './FormikFormSchema';
import '../App.css';

async function onSubmit(values,actions){
    console.log("Values",values);
    console.log(actions)

    await new Promise((resolve)=>setTimeout(()=>resolve(),2000));
    actions.resetForm()
}


function FormikForm() {

    // const {login, errorMessage } = useAuthContext();

    const { values, errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting } = useFormik({
        initialValues: {
          email: "",
          password: "",
         
        },
        validationSchema: FormikFormSchema,
        onSubmit
      });


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

            <button disabled={isSubmitting}>Submit</button>
        </form>

        <pre>
            {JSON.stringify({ values, errors }, null, 1)}
        </pre>

    </div>
  )
}

export default FormikForm