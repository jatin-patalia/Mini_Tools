import { Link, Outlet } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";

const Layout = () => {
  return (
    <section className="flex flex-col h-screen">
      {/* Fixed Navigation Bar */}
      <div className="flex-shrink-0">
        <NavigationBar />
      </div>

      {/* Scrollable Content Area */}
      <main className="flex-1 overflow-y-auto flex items-center justify-center">
        <Outlet />
      </main>

      {/* Fixed Footer */}
      <footer className="flex-shrink-0 bg-primary p-4 text-center text-blue-50 text-sm">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-2">
          <p>&copy; {new Date().getFullYear()} Jatin Soni</p>
          <div className="flex gap-4">
            <Link to="/privacy_policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms_conditions" className="hover:underline">
              Terms
            </Link>
            <Link to="/disclaimer" className="hover:underline">
              Disclaimer
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Layout;
