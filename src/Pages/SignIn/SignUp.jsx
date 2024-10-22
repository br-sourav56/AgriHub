import React, { useState } from 'react'
import Input from '../../components/SmallComponents/Input'
import InputButton from '../../components/SmallComponents/Button'
import { Link } from 'react-router-dom'
import { auth, db } from '../../Firebase/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import RedAlert from '../../components/Alert/RedAlert'



export default function SignUp() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(true)

    
    const nameChangeHandler = (text) => {
        setError(false)
        setName(text)
    }
    const emailChangeHandler = (text) => {
        setError(false)
        setEmail(text)
    }
    const passwordChangeHandler = (text) => {
        setError(false)
        setPassword(text)
    }

    const SignUpHandler = async (e) => {
        e.preventDefault()
        setError(false)
        if (name === '' || email === "" || password === "") {
            setError(true)
            return;
        };

        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser

            if (user) {
                setDoc(doc(db, 'user', user.uid), {
                    name,
                    email,
                })

            }
        } catch (error) {
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
                    <h2 className='text-2xl font-bold text-center  mb-8 text-custom-primary'>SignUp</h2>
                    {error && <RedAlert />}
                    <form action="" onSubmit={SignUpHandler}>
                        <span className='mb-1 block ml-2 font-bold'>Name</span>
                        <Input type="text" value={name} onChange={nameChangeHandler} placeholder={'Enter Your Name'} border={'primary'} />
                        <span className='mb-1 block ml-2 mt-3 font-bold'>E-mail</span>
                        <Input type="email" value={email} onChange={emailChangeHandler} placeholder={'Enter Your Email Address'} border={'primary'} />
                        <span className='mb-1 block ml-2 mt-3  font-bold'>Password</span>
                        <Input type="password" onChange={passwordChangeHandler} value={password} placeholder={'Enter Your Password'} border={'primary'} />
                        <label className='text-red-600 mb-6 ml-3 block sr-only' ></label>
                        <br />
                        <br />
                        <InputButton type={'submit'} text={'Log In'} />
                    </form>
                    <h3 className='mt-5'>Already Have an Account? <Link className='underline' to={'/login'}>Login</Link></h3>
                </div>
            </div>
        </section>
    )
}
