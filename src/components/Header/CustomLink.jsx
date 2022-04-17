import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, className, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={`text-white md:text-green-400 hover:text-green-700 text-xl ${match ? 'text-green-300 md:text-green-600 font-bold' : 'font-semibold'} ${className}`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}


export default CustomLink