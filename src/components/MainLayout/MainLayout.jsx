export const MainLayout = ({ children }) => {
  return (
    <div className={"w-screen min-h-screen bg-slate-100 flex align-middle"}>
      {children}
    </div>
  );
};
