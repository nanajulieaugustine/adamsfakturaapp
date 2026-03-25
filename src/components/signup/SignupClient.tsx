"use client";

import PrimaryButton from "../global/PrimaryButton";

type SignupClientProps = {
    signupAction: (formData: FormData) => Promise<void>;
};

const SignupClient = ({ signupAction }: SignupClientProps) => {

    return (
        <form
            action={signupAction}
            className="flex flex-col gap-2 w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
            <input name="user_first_name" type="text" placeholder="name" required />
            <input name="user_last_name" type="text" placeholder="name" required />
            <input name="user_email" type="email" placeholder="e-mail" required />
            <input name="user_phone" type="tel" placeholder="phone" required />
            <input name="user_address" type="text" placeholder="address" required />
            <input name="user_website" type="url" placeholder="website" />
            <input name="user_password" type="password" placeholder="password" required />
            <input name="repeat_user_password" type="password" placeholder="repeat password" required />
            <select name="user_role" required>
                <option value="">Select role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>
            
            <PrimaryButton>Sign Up</PrimaryButton>
        </form>
    );
};

export default SignupClient;