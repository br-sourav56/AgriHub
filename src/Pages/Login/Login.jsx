import React, { useContext, useState } from 'react'
import Input from '../../Components/SmallComponents/Input'
import InputButton from '../../Components/SmallComponents/Button'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase/Firebase.js'
import { ShopContext } from '../../Components/Context/Context'
import RedAlert from '../../Components/Alert/RedAlert'
import toast from 'react-hot-toast';


export default function Login() {
    const { loginContext } = useContext(ShopContext)
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false);

    const emailChangeHandler = (text) => {
        setError(false)
        setEmail(text)
    }
    const passwordChangeHandler = (text) => {
        setError(false)
        setPassword(text)
    }

    const loginHandler = async (e) => {
        setError(false)
        e.preventDefault()
        if (email !== '' && password !== '') {
            try {
                await loginContext(email, password)
                toast.success('Successfully LoggedIn!')
                navigate('/')
                setError(false)

            } catch (error) {
                setError(false)
                toast.error('Login Faild!')

            }
        } else {

            setError(true)

        }
    }

    return (
        <section>

            <div className='grid grid-cols-2 gap-12 max-w-screen-xl m-auto lg:px-8 mt-28 mb-16'>
                <div>
                    <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53Muk2g-T4PvhVH8NK2cPrwO4p9uqGQwlFA&s" alt="" />
                </div>
                <div>
                    <h2 className='text-2xl font-bold text-center mt-5 mb-8  text-custom-primary'>LOGIN YOUR ACCOUNT!</h2>
                    <form action="" onSubmit={loginHandler}>
                        {error && <RedAlert />}
                        <span className='mb-1 block ml-2 font-bold'>E-mail</span>
                        <Input type="email" onChange={emailChangeHandler} placeholder={'Enter Your Email Address'} border={'primary'} />
                        <span className='mb-1 block ml-2 mt-3  font-bold'>Password</span>
                        <Input type="password" onChange={passwordChangeHandler} placeholder={'Enter Your Password'} border={'primary'} />
                        <br /><br />
                        <InputButton type={'submit'} text={'Log In'} />
                    </form>
                    <h3 className='mt-5'>Not Have an Account? <Link className='underline' to={'/signup'}>SignIn</Link></h3>
                </div>

            </div>
        </section>
    )
}
