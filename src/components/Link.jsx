export default function Link({ href, styles, children }) {
  return (
    <a
      className={`${styles} cursor-pointer`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};