// Define a simple Footer component
const Footer = () => {
    return (
      // Styled footer with dynamic copyright year
      <footer className="bg-dark text-light text-center py-3">
        &copy; {new Date().getFullYear()} Game Library
      </footer>
    );
  };
  
  // Export the Footer component
  export default Footer;
  