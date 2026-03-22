import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        {children}
      </div>
    </>
  );
};

export default Layout;