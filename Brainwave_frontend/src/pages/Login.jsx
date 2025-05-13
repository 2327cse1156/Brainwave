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
import { useState } from "react";

const Login = () => {
  const [signUpInput, setSignUpInput] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const changeInputHandler = (e,type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignUpInput({ ...signUpInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration = (type) =>{
    const inputData = type === "signup" ? signUpInput : loginInput;
    
    console.log(signUpInput)
    console.log(loginInput)
  }
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
                  onChange={(e)=>changeInputHandler(e,"signup")}
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
                  onChange={(e)=>changeInputHandler(e,"signup")}
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
                  onChange={(e)=>changeInputHandler(e,"signup")}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="w-full" onClick={()=> handleRegistration("signup")}>Sign Up</Button>
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
                  onChange={(e)=>changeInputHandler(e,"login")}
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
                  onChange={(e)=>changeInputHandler(e,"login")}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="w-full" onClick={()=> handleRegistration("login")}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
