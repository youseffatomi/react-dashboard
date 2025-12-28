import type { AxiosResponse } from "axios";
import { AuthAPI } from "../config/axios";

interface RESPONSE {
  accessToken: string;
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  refreshToken: string;
  username: string;
}

export const Login = async (
  username: string,
  password: string,
): Promise<void> => {
  const res: AxiosResponse<RESPONSE> = await AuthAPI.post("auth/login", {
    username,
    password,
    expiresInMins: 20,
  });

  const data = res.data;
  if (data) {
    localStorage.setItem("token", data.accessToken);

    window.location.href = "/";
  }
};
