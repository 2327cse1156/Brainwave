import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLoadUserQuery,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "@/features/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to control when to fetch user profile after login/register
  const [shouldFetchUser, setShouldFetchUser] = useState(false);

  const { data: userData, error: userError } = useLoadUserQuery(undefined, {
    skip: !shouldFetchUser,
  });

  const [signUpInput, setSignUpInput] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();

  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignUpInput({ ...signUpInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signUpInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };

  // When register or login succeeds, show toast and start fetching user profile
  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData.message || "Signup successfully");
      setShouldFetchUser(true);
    }
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Login successfully");
      setShouldFetchUser(true);
    }
  }, [registerIsSuccess, registerData, loginIsSuccess, loginData]);

  // When user profile data arrives, update redux store and navigate
  useEffect(() => {
    if (userData?.user) {
      dispatch(userLoggedIn({ user: userData.user }));
      navigate("/");
    }
  }, [userData, dispatch, navigate]);
  useEffect(()=>{
    refetch()
  },[])
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Tabs defaultValue="signup" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">SignUp</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card className="p-4 md:p-6">
            <CardHeader>
              <CardTitle>SignUp</CardTitle>
              <CardDescription>
                Create a new account and click signup when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={signUpInput.name}
                  placeholder="Ansh"
                  onChange={(e) => changeInputHandler(e, "signup")}
                  required={true}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={signUpInput.email}
                  required={true}
                  placeholder="abc@gmail.com"
                  onChange={(e) => changeInputHandler(e, "signup")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={signUpInput.password}
                  placeholder="A1a2298398479"
                  required={true}
                  onChange={(e) => changeInputHandler(e, "signup")}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                className="w-full"
                disabled={registerIsLoading}
                onClick={() => handleRegistration("signup")}
              >
                {registerIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "SignUp"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card className="p-4 md:p-6">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Welcome! Please log in to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={loginInput.email}
                  required={true}
                  placeholder="abc@gmail.com"
                  onChange={(e) => changeInputHandler(e, "login")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={loginInput.password}
                  placeholder="A1a2298398479"
                  required={true}
                  onChange={(e) => changeInputHandler(e, "login")}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                className="w-full"
                disabled={loginIsLoading}
                onClick={() => handleRegistration("login")}
              >
                {loginIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
