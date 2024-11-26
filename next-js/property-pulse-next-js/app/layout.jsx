import "@/assets/styles/globals.css";

export const metadata = {
  title: "Proerty Pulse",
  keywords: "rental, property, real estate, house, housing",
  description: "Find a rental property perfect for you",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
