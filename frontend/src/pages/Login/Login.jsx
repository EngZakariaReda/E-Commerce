import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router';
import { loginschema } from './Loginformschema';
import { useEffect } from 'react';
import { useStore } from '../../Store/Store';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

export default function Login() {
    const {jwt_token,settoken,errortostify,successtostify} = useStore();
    const navigate = useNavigate();

    useEffect(()=>{
        if(jwt_token){
            navigate("/register")
        }
    },[jwt_token])

    const onSubmit = async (values , actions)=>{
        try {
            const res = await axios.post("http://localhost:1337/api/auth/local",values);
            successtostify("Login successful 🎉");
            setTimeout(() => {
                settoken(res.data.jwt);
            }, 1250);
        } catch (error) {
            errortostify("nvalid email or password");
        }
    }

    const { values , errors , touched , handleBlur , handleChange , handleSubmit} = useFormik({
        initialValues:{
            identifier:"",
            password:"",
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
                    className='px-4 py-3'
                />
                {
                    errors.identifier && touched.identifier &&
                    <small className='text-danger'>{errors.identifier}</small>
                }
                <input 
                    type="password" 
                    placeholder='password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='px-4 py-3'
                />
                {
                    errors.password && touched.password &&
                    <small className='text-danger'>{errors.password}</small>
                }
                <button type="submit" className='text-capitalize p-2 mx-auto rounded-pill registerbtn'>
                    login
                </button>
            </form>
        </div>
        <ToastContainer />
    </>
  )
}
