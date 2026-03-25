"use client";

import PrimaryButton from "../global/PrimaryButton";

type LoginUserClientProps = {
    loginAction: (formData: FormData) => Promise<void>;
};

const LoginUserClient = ({ loginAction }: LoginUserClientProps) => {

    return (
        <form
            action={loginAction}
            className="flex flex-col gap-2 w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
            <input name="user_email" type="email" placeholder="e-mail" />
            <input name="user_password" type="password" placeholder="password" />

            <PrimaryButton>Login</PrimaryButton>
        </form>
    );
};

export default LoginUserClient;