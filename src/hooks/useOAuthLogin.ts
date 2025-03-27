import {useState} from "react";
import {useGoogleLogin} from "@react-oauth/google";
import {getAuth, OAuthProvider, signInWithPopup} from "firebase/auth";
import axios from "axios";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import {useAppContext} from "@/context/AuthContext";
import {app} from "../../firebase-config";
import Cookies from "js-cookie";

// Type definitions
interface OAuthUser {
  email: string;
  firstName?: string;
  lastName?: string;
  image?: string;
  password: string;
  client: string;
}

interface OAuthLoginHook {
  googleLogin: () => void;
  appleLogin: () => void;
  loadingState: {
    google: boolean;
    apple: boolean;
  };
}

export const useOAuthLogin = (
  onSuccessRedirect: string = "/home",
): OAuthLoginHook => {
  const [loadingState, setIsLoading] = useState({
    google: false,
    apple: false,
  });
  const {dispatch} = useAppContext();
  const router = useRouter();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      setIsLoading((prev) => {
        return {...prev, google: true};
      });
      const token = response.access_token;
      const newRegisteredUser: OAuthUser = {
        email: "",
        firstName: "",
        lastName: "",
        image: "",
        password: "",
        client: "provider_web",
      };

      try {
        const {data} = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        newRegisteredUser.email = data.email;
        newRegisteredUser.firstName = data.given_name;
        newRegisteredUser.lastName = data.family_name;
        newRegisteredUser.image = data.picture;
        newRegisteredUser.password = data.sub;
        setIsLoading((prev) => {
          return {...prev, google: false};
        });
      } catch (error: any) {
        toast.error("Error while fetching user info from Google");
        setIsLoading((prev) => {
          return {...prev, google: false};
        });
        return;
      }

      try {
        const {data} = await axios.post(`/auth/register`, newRegisteredUser);
        toast.success("Login successful!");
        dispatch({type: "UPDATE_USER", payload: data});
        router.push(onSuccessRedirect);
      } catch (error: any) {
        toast.error(error?.response?.data?.msg || "Oops! Something went wrong");
      }
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.msg || "Oops! Something went wrong");
    },
  });

  const appleLogin = async () => {
    setIsLoading((prev) => {
      return {...prev, apple: true};
    });
    const auth = getAuth(app);
    const provider = new OAuthProvider("apple.com");

    try {
      const result = await signInWithPopup(auth, provider);

      const {data} = await axios.post(`/auth/login-apple-web`, {
        email: result.user.email,
        uid: result.user.uid,
      });

      toast.success("Successful login!");
      dispatch({type: "UPDATE_USER", payload: data});
      setIsLoading((prev) => {
        return {...prev, apple: false};
      });
      router.push(onSuccessRedirect);
    } catch (error: any) {
      toast.error(error?.response?.data?.msg || "Oops! Something went wrong");
      setIsLoading((prev) => {
        return {...prev, apple: false};
      });
    } finally {
      setIsLoading((prev) => {
        return {...prev, apple: false};
      });
    }
  };

  const googleLoginWrapper = () => {
    // Save current URL in local storage if needed
    const url = window.location.href;
    localStorage.setItem("baptizo.io-redirectUrl", url);

    handleGoogleLogin();
    const serverCookie = Cookies.get("accessToken");
  };

  return {
    googleLogin: googleLoginWrapper,
    appleLogin,
    loadingState,
  };
};
