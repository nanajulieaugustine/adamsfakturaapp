
///////////////////////// SIGN UP USER FUNCTION //////////////////////////
export async function signUpUser(formData: FormData) {
    const res = await fetch("https://async-adamsfaktura.onrender.com/api-create-user", {
        method: "POST",
        body: formData,
        credentials: "include",
    });

    const text = await res.text();

    if (!res.ok) {
        console.log(res.status, text);
        throw new Error(text);
    }

    return text;
}

/////////////////////// LOGIN USER FUNCTION ///////////////////////////
export async function loginUser(formData: FormData) {
    const res = await fetch("https://async-adamsfaktura.onrender.com/api-login-user", {
        method: "POST",
        body: formData,
        credentials: "include",
    });

    const text = await res.text();

    if (!res.ok) {
        console.log(res.status, text);
        throw new Error(text);
    }

    return text;
}