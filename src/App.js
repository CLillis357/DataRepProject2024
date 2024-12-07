// Import necessary modules
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // For routing
import NavigationBar from './components/NavigationBar'; // Import NavigationBar
import Footer from './components/Footer'; // Import Footer
import Content from './components/Content'; // Import Content for the home page

// Define the App component
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* Define routes for the application */}
        <Route path="/" element={<Content />} /> 
      </Routes>
      {/* Footer displayed on all pages */}
      <Footer />
    </Router>
  );
}

// Export the App component
export default App;
