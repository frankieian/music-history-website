import { getAccount } from "@/lib/account"

export default async function user() {
    const account = await getAccount()
    console.log(account)


    return (
        <div>
            <p>Successfully logged in!</p>
            {Object.entries(account)}
        </div>
    )
}