export default function IconAndText({ icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <span className="material-icons text-[1rem] h-6 w-6 rounded-full flex justify-center items-center bg-yellow-100 border-2 border-yellow-500 text-yellow-500">
        {icon}
      </span>
      <p className="text-sm whitespace-nowrap">
        {text}
      </p>
    </div>
  );
};