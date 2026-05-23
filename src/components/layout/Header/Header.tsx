import Navbar from "./Navbar";
import CategoryNavigation from "./CategoryNavigation";

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <Navbar />
      <CategoryNavigation />
    </header>
  );
};

export default Header;
