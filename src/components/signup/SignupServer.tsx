import { signUpUser } from "@/app/lib/user";
import { redirect } from "next/navigation";
import SignupClient from "./SignupClient";

export default function SignupUserServer() {
    async function handleSignup(formData: FormData) {
        "use server";

        await signUpUser(formData);
    }

    return (
        <div>
            <SignupClient signupAction={handleSignup} />
        </div>
    );
}