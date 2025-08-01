import { cn } from "../../utils/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, children, ...props }: Props) => (
  <button
    className={cn(
      "bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition",
      className
    )}
    {...props}
  >
    {children}
  </button>
);
