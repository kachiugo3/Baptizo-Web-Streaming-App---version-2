import axiosInstance from "@/services/axiosInstance";

export async function Login(payload: {
  email: string;
  password: string;
}): Promise<unknown> {
  const {data} = await axiosInstance.post("/auth/login", payload);
  return data;
}

export async function Logout() {
  await axiosInstance.delete("/auth/logout");
}

export async function Register(payload: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  client: "web";
}): Promise<unknown> {
  const {data} = await axiosInstance.post("/auth/register", payload);
  return data;
}
