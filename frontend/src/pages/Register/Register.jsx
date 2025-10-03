import Userinformation from '../../components/Userinformation/Userinformation';
import { Registerformschema } from './Registerformschema';
import { Link } from 'react-router';
import { useFormik } from 'formik';
import axios from 'axios';
import { useStore } from '../../Store/Store';
import { ToastContainer } from 'react-toastify';
import './Register.css'

export default function Register() {
    const {jwt_token,settoken,removetoken,successtostify,errortostify} = useStore();
    const userdata = JSON.parse(localStorage.getItem("userdata")) || {}
    const onSubmit = async (values , actions)=>{
        try {
            const res = await axios.post("http://localhost:1337/api/auth/local/register",values)
            settoken(res.data.jwt)
            localStorage.setItem("userdata",JSON.stringify(res.data.user))
            console.log(res.data.user)
            successtostify("Your account has been created successfully");
            actions.resetForm();
        } catch (error) {
            errortostify(error.response.data.error.message);
        }
    }

    const { values , errors , touched , handleBlur , handleChange , handleSubmit} = useFormik({
        initialValues:{
            email:"",
            username:"",
            password:"",
        },
        validationSchema:Registerformschema,
        onSubmit,
    })
    
  return (
    <>  

        {
            (!jwt_token) 
                ?
                <div className='registerparent'>
                    <h4 className='text-center'>sign up</h4>
                    <p className='text-center'>Already have an account? <Link to={"/login"}> Sign In</Link></p>
                    <form onSubmit={handleSubmit} className='d-flex flex-column gap-4 col-lg-5 col-md-8 col-9 mx-auto'>
                        <input 
                            type="text" 
                            placeholder='your Name'
                            name='username'
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='px-4 py-3'
                        />
                        {
                            errors.username && touched.username &&
                            <small className='text-danger'>{errors.username}</small>
                        }
                        <input 
                            type="email" 
                            placeholder='email'
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='px-4 py-3'
                        />
                        {
                            errors.email && touched.email &&
                            <small className='text-danger'>{errors.email}</small>
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
                            create
                        </button>
                    </form>
                </div>
            :
            <Userinformation
              username={userdata.username} 
              email={userdata.email} 
              createdAt={userdata.createdAt} 
            />
        }
        <ToastContainer style={{ top: '15vh' , right:'0' }} />
    </>
  )
}
