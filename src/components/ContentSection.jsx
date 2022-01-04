export default function ContentSection({ icon, title, children }) {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span class="material-icons h-8 w-8 rounded-full flex justify-center items-center bg-red-100 border-2 border-red-500 text-red-500">
          {icon}
        </span>
        <h2 className="text-xl font-bold">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
};
