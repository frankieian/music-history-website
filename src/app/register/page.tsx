import Form from "@/components/form"
import { loginAccount } from "@/actions/account"

export default function login() {
    return (
        <div className="flex justify-center">
            <Form title='Create an Account' fields={
                [{label: 'Username', name: 'username'}, {label: 'Password', name: 'password'}, {label: 'Confirm Password', name: 'confirmPassword'}, {label: 'Email', name: 'email'}]
            } submitText='Create Account'
            formAction={loginAccount}
            />
        </div>
    )
}