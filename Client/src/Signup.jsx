import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Simple form validation function
    const validateForm = () => {
        let formErrors = {};

        // Check if name is entered
        if (!name) {
            formErrors.name = "Name is required";
        }

        // Check if email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            formErrors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            formErrors.email = "Email is not valid";
        }

        // Check if password is strong enough
        if (!password) {
            formErrors.password = "Password is required";
        } else if (password.length < 6) {
            formErrors.password = "Password must be at least 6 characters long";
        }

        setErrors(formErrors);

        // Return true if no errors
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            axios.post('http://localhost:3001/register', { name, email, password })
                .then(result => {
                    console.log(result);
                    navigate('/login'); // Navigate to login page on success
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    {/* Name input */}
                    <div className="mb-3">
                        <label htmlFor='name'>
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            autoComplete='off'
                            name='name'
                            className='form-control rounded-0'
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                    </div>

                    {/* Email input */}
                    <div className="mb-3">
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            autoComplete='off'
                            name='email'
                            className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>

                    {/* Password input */}
                    <div className="mb-3">
                        <label htmlFor='password'>
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            name='password'
                            className='form-control rounded-0'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>

                    {/* Submit button */}
                    <button type="submit" className='btn btn-success w-100 rounded-0'>Register</button>
                </form>

                <p className="mt-3">Already have an account?</p>
                <Link to="/login" 
                className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </div>
        </div>
    );
};

export default Signup;
