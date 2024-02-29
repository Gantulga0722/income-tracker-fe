import { NavBar } from "@/components";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex justify-center">
        <NavBar />
        <main className="mx-auto">{children}</main>
      </div>
    </>
  );
};
export default Layout;
