function JapanPage() {
  const [departureDate, setDepartureDate] = React.useState('');
  const [returnDate, setReturnDate] = React.useState('');
  const [numPassengers, setNumPassengers] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission here
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-4">Discover Japan</h1>
        <p className="text-center mmy-4 p-3 bg-light">
        Experience the best of Japan with our carefully curated travel package. Immerse yourself in the country's unique blend of traditional and modern culture as you explore its vibrant cities, serene temples, and stunning natural beauty. Our package includes visits to iconic landmarks like Mount Fuji and the famous cherry blossom trees that bloom in spring, as well as unique experiences like soaking in natural hot springs or indulging in the quirky fashion scene of Harajuku.

        Our package also offers a variety of fun activities, from visiting amusement parks to attending tea ceremonies or participating in traditional Japanese crafts like origami and calligraphy. With our expertly planned itinerary, you'll have the opportunity to fully immerse yourself in the rich history and culture of Japan, while also enjoying the modern amenities and comforts of our carefully selected accommodations.

        Whether you're seeking adventure, culture, or simply a chance to unwind and relax, our Japan travel package has something for everyone. Don't miss out on the opportunity to experience one of the most fascinating and unique countries in the world – book your Japan travel package today.
        </p>

        <h2 className="text-center mb-4">A Look Into Japan</h2>
        <div className="row mb-5">
          <div className="col-md-4">
            <img
              src="https://wearetravelgirls.com/wp-content/uploads/2016/10/tokyo-mud-bath-bar-mudbath0716.jpg"
              alt="Cherry blossoms in Japan"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: '100%'}}
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://lp-cms-production.imgix.net/2021-04/shutterstockRF_713119015.jpg"
              alt="Tokyo Tower at night"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: '100%'}}
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://cdn1.matadornetwork.com/blogs/1/2011/05/Tokyo-Japan-Akihabara-neon-cityscape-destinations-1200x900.jpg"
              alt="Mount Fuji at sunrise"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: '100%',}}
            />
          </div>
        </div>

        <h2 className="text-center mb-4">Book Your Trip to Japan</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="departure-date">Departure Date:</label>
            <input
              type="date"
              id="departure-date"
              value={departureDate}
              onChange={(event) => setDepartureDate(event.target.value)}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="return-date">Return Date:</label>
            <input
              type="date"
              id="return-date"
              value={returnDate}
              onChange={(event) => setReturnDate(event.target.value)}
              required
              className="form-control"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="num-passengers">Number of Passengers:</label>
            <input
              type="number"
              id="num-passengers"
              value={numPassengers}
              min="1"
              max="10"
              onChange={(event) => setNumPassengers(event.target.value)}
              required
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Book Travel
          </button>
        </form>
      </div>
    </>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<JapanPage />);
