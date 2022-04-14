import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <footer>
        <span> &copy; 2022 </span>
      </footer>
    </div>
  );
}

export default Layout;
