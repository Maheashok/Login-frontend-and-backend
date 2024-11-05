import { usestate } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setpassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "success") {
                    navigate('/register')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input type="text"
                            placeholder="Enter Email"
                            autoComplete='off'
                            name='email'
                            className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor='email'>
                            <strong>Password</strong>
                        </label>
                        <input type="password"
                            placeholder="Enter password"
                            name='password'
                            className='form-control rounded-0'
                            onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <button type="submit" className='btn btn-success w-100 rounded-0'>Login</button>
                </form>
                <p>Don't Have an Account?</p>
                <Link to="/register" className='btn btn-default border  w-100 bg-light rounded-0 text-decoration-none'>Register</Link>

            </div>
        </div>
    );
};

export default Login;







// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errors, setErrors] = useState({});
//     const [loginError, setLoginError] = useState('');
//     const navigate = useNavigate();

//     // Form validation function
//     const validateForm = () => {
//         let formErrors = {};
//         let valid = true;

//         // Check if email is valid
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!email) {
//             formErrors.email = "Email is required";
//             valid = false;
//         } else if (!emailRegex.test(email)) {
//             formErrors.email = "Email is not valid";
//             valid = false;
//         }

//         // Check if password is entered
//         if (!password) {
//             formErrors.password = "Password is required";
//             valid = false;
//         }

//         setErrors(formErrors);
//         return valid;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         if (validateForm()) {
//             axios.post('http://localhost:3001/login', { email, password })
//                 .then(result => {
//                     console.log(result);
//                     if (result.data === "Success") {
//                         navigate('/home')
//                         // alert("Login successful!");
//                         // window.location.href = 'https://careers.caterpillar.com/en/jobs/?searchTerm=cat+digital&country=India&pagesize=20&gad_source=5&gclid=EAIaIQobChMItLG3ysChiQMVLhKDAx0B3wP-EAAYASAAEgLcafD_BwE#results&utm_source=google&utm_medium=cpc&utm_campaign=catdigital_in_text_4KM48_2024_701Ho000001EN7dIAG&utm_content=catdigital_in_text_4KM48_2024_701Ho000001EN7dIAG&utm_keyword=it%20jobs';
                
//                         // navigate('/https://careers.caterpillar.com/en/jobs/?searchTerm=cat+digital&country=India&pagesize=20&gad_source=5&gclid=EAIaIQobChMItLG3ysChiQMVLhKDAx0B3wP-EAAYASAAEgLcafD_BwE#results&utm_source=google&utm_medium=cpc&utm_campaign=catdigital_in_text_4KM48_2024_701Ho000001EN7dIAG&utm_content=catdigital_in_text_4KM48_2024_701Ho000001EN7dIAG&utm_keyword=it%20jobs');
//                     } 
//                 })
//                 .catch(err => {
//                     console.log(err);
//                     setLoginError("An error occurred during login");
//                 });
//         }
//     };

//     return (
//         <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//             <div className="bg-white p-3 rounded w-25">
//                 <h2>Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     {/* Email input */}
//                     <div className="mb-3">
//                         <label htmlFor='email'>
//                             <strong>Email</strong>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Enter Email"
//                             autoComplete='off'
//                             name='email'
//                             className='form-control rounded-0'
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         {errors.email && <span className="text-danger">{errors.email}</span>}
//                     </div>

//                     {/* Password input */}
//                     <div className="mb-3">
//                         <label htmlFor='password'>
//                             <strong>Password</strong>
//                         </label>
//                         <input
//                             type="password"
//                             placeholder="Enter Password"
//                             name='password'
//                             className='form-control rounded-0'
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         {errors.password && <span className="text-danger">{errors.password}</span>}
//                     </div>

//                     {/* Login Error Message */}
//                     {loginError && <p className="text-danger">{loginError}</p>}

//                     {/* Submit button */}
//                     <button type="submit" className='btn btn-success w-100 rounded-0'>
//                         Login
//                     </button>
//                 </form>

//                 <p className="mt-3">Don't Have an Account?</p>
//                 <Link to="/register" 
//                 className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
//                     Register
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Login;

