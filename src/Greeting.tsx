// Strict interface defining exactly what data this component accepts
interface GreetingProps {
  name: string;
  role?: "HR" | "Employee";
}

export const Greeting: React.FC<GreetingProps> = ({
  name,
  role = "Employee",
}) => {
  return (
    <div>
      <h2>Welcome, {name}!</h2>
      <p>Your access level is: {role}</p>
    </div>
  );
};
