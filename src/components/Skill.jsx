import Link from "./Link.jsx";

export default function Skill({ link, technology }) {
  return (
    <Link
      href={link}
      styles="bg-green-200 text-green-800 border-2 border-green-800 px-4 py-1 rounded-full shadow-md"
    >
      {technology}
    </Link>
  );
};