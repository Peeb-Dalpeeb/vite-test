import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  email?: string;
  password?: string;
};

export default function Login() {
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email, password } = data;

    if (!email || !password) {
      return setMessage("Please enter email and password");
    }

    if (email === "scott@email.com" && password === "password") {
      return setMessage("Login successful");
    }

    setMessage("Login failed");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
