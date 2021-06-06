import Footer from "./Footer";
import NavBar from "./Navbar";

const layout = ({ children }) => {
  return (
    <div className="content">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
