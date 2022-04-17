import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={`text-green-500 hover:text-green-600 text-xl ${match ? 'text-green-600 font-bold' : 'font-semibold'}`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}


export default CustomLink