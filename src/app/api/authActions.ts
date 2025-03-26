import axiosInstance from "@/services/axiosInstance";

export async function Login(payload: {
  email: string;
  password: string;
}): Promise<unknown> {
  const {data} = await axiosInstance.post("/auth/login", payload);
  return data;
}
