import { NavBar } from "@/components";

const Layout = ({ children }) => {
  return (
    <>
      <div className=" container max-w-[1440px] mx-auto flex  flex-col">
        <NavBar />
        <main className=" container max-w-[1440px] mx-auto">{children}</main>
      </div>
    </>
  );
};
export default Layout;
