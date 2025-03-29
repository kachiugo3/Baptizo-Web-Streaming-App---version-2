import axios from "axios";
export interface RegisterPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  client: string;
}
export async function Login(payload: {
  email: string;
  password: string;
}): Promise<unknown> {
  const {data} = await axios.post("/auth/login", payload);
  return data;
}

export async function Logout() {
  await axios.delete("/auth/logout");
}

export async function Register(payload: RegisterPayload): Promise<unknown> {
  const {data} = await axios.post("/auth/register", payload);
  return data;
}

export async function forgotPassword(payload: {client: string; email: string}) {
  const {data} = await axios.post("/auth/forgot-password", payload);
  return data;
}

export async function resetPassword(payload: any) {
  const {data} = await axios.post("/auth/reset-password", payload);
  return data;
}

export async function verifyEmail(params: {token: string; email: string}) {
  await axios.post("/auth/verify-email", {
    verificationToken: params.token,
    email: params.email,
  });
}
