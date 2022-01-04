export default function Summary() {
  return (
    <div className="flex items-start bg-blue-100 border-2 border-blue-800 p-2 rounded-lg shadow-md">
      <span class="material-icons text-blue-800 scale-x-[-1] self-start">
        format_quote
      </span>
      <p className="text-center text-blue-800">
        Self-taught developer specializing in JavaScript, React, and Node.
      </p>
      <span class="material-icons text-blue-800 self-end">
        format_quote
      </span>
    </div>
  );
};