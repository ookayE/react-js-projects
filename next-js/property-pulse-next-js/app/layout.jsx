import "@/assets/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import { GlobalProvider } from "@/context/GlobalContext";
import "photoswipe/dist/photoswipe.css";

export const metadata = {
  title: "Proerty Pulse",
  keywords: "rental, property, real estate, house, housing",
  description: "Find a rental property perfect for you",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html>
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;
