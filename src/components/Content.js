// Import Bootstrap's Carousel component
import Carousel from 'react-bootstrap/Carousel';

// Define the Content component for the home page
const Content = () => {
  // Define adverts as an array of objects
  const adverts = [
    {
      title: "Game of the Year 2023",
      description: "Experience the ultimate adventure in 'Baldurs Gate 3'.",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg",
    },
    {
      title: "Exclusive Pre-order",
      description: "Pre-order 'Grand Theft Auto VI' and get exclusive in-game rewards.",
      image: "https://assets-prd.ignimgs.com/2023/12/06/gta6-ign-1701824432629.jpg",
    },
    {
      title: "Top Shooter",
      description: "'Sniper Elite 5' - The most realistic shooter of 2024.",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202202/2116/59jHCjMBRhuRhPUKUUy2gkNd.png",
    },
  ];

  return (
    <div className="container mt-5">
      {/* Header for the page */}
      <h1 className="text-center mb-4">Welcome to Game Library</h1>
      <Carousel>
        {/* Loop through adverts and render each one in the carousel */}
        {adverts.map((advert, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={advert.image}
              alt={advert.title}
            />
            <Carousel.Caption>
              <h3>{advert.title}</h3>
              <p>{advert.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

// Export the Content component
export default Content;
