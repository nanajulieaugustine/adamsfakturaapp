// export async function loginUser(formData: FormData) {
//     const res = await fetch("http://localhost:3000/api-login-user", {
//         method: "POST",
//         body: formData,
//         credentials: "include", 
//     });

//     const text = await res.text();

//     if (!res.ok) {
//         throw new Error(text);
//     }

//     return text;
// }