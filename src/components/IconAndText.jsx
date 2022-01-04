export default function IconAndText({ icon, text }) {
  return (
    <div className="flex items-center gap-2 p-2 md:py-0">
      <span className="material-icons h-8 w-8 rounded-full flex justify-center items-center bg-yellow-100 border-2 border-yellow-500 text-yellow-500">
        {icon}
      </span>
      <p className="whitespace-nowrap">
        {text}
      </p>
    </div>
  );
};