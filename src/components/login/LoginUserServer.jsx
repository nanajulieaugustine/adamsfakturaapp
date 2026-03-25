import { loginUser } from "@/app/lib/user";
import { redirect } from "next/navigation";
import LoginUserClient from "./LoginUserClient";

export default function LoginUserServer() {
    async function handleLogin(formData) {
        "use server";

        await loginUser(formData);
        redirect("/");
    }

    return (
        <div>
            <LoginUserClient loginAction={handleLogin} />
        </div>
    );
}