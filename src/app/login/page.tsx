import Form from "@/components/form"
import { loginAccount } from "@/actions/account"
import { useRouter } from 'next/router';
import Container from "@/components/container";


export default function login() {
    return (
        <div className='flex flex-col'>
            <Form title='Login' fields={[{label: 'Username', name: 'username'}, {label: 'Password', name: 'password'}]} submitText='Login'
                footNote='Dont have an account? Register'
                formAction={loginAccount}
            />
        </div>
    )


}