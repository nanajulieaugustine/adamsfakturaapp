// "use client";

// import { loginUser } from "@/app/lib/user";
// import PrimaryButton from "./global/PrimaryButton";

// const LoginUserClient = () => {

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         const form = e.currentTarget;
//         const formData = new FormData(form);

//         try {
//             await loginUser(formData);

//             window.location.href = "/";
//         } catch (error) {
//             console.error("Login failed:", error);
//         }
//     };

//     return (
//         <form
//             onSubmit={handleSubmit}
//             className="flex flex-col gap-2 w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//         >
//             <input name="user_email" type="email" placeholder="e-mail" />
//             <input name="user_password" type="password" placeholder="password" />

//             <PrimaryButton>Login</PrimaryButton>
//         </form>
//     );
// };

// export default LoginUserClient;