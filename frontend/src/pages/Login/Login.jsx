import { useFormik } from 'formik'
import { Link } from 'react-router'
import { loginschema } from './Loginformschema';

export default function Login() {
    const onSubmit = (values , actions)=>{
        console.log(values);
        actions.resetForm();
    }
    const { values , errors , touched , handleBlur , handleChange , handleSubmit} = useFormik({
        initialValues:{
            identifier:"",
            userpassword:"",
        },
        validationSchema:loginschema,
        onSubmit,
    })
  return (
    <>
        <div className='registerparent'>
            <h4 className='text-center'>sign in</h4>
            <p className='text-center'>Don't have an account? <Link to={"/register"}> Sign up</Link></p>
            
            <form onSubmit={handleSubmit} className='d-flex flex-column gap-4 col-lg-5 col-md-8 col-9 mx-auto'>
                <input 
                    type="email" 
                    placeholder='email'
                    name='identifier'
                    value={values.identifier}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='px-4 py-3 text-capitalize'
                />
                {
                    errors.identifier && touched.identifier &&
                    <small className='text-danger'>{errors.identifier}</small>
                }
                <input 
                    type="password" 
                    placeholder='password'
                    name='userpassword'
                    value={values.userpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='px-4 py-3 text-capitalize'
                />
                {
                    errors.userpassword && touched.userpassword &&
                    <small className='text-danger'>{errors.userpassword}</small>
                }
                <button type="submit" className='text-capitalize p-2 mx-auto rounded-pill registerbtn'>
                    login
                </button>
            </form>
        </div>
        
    </>
  )
}
