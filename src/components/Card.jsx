export default function Card({ children }) {
  return (
    <div className="flex flex-col gap-2 px-4 py-2 rounded-lg shadow-md border-2 border-gray-900 bg-gray-700 text-gray-50">
      {children}
    </div>
  );
};