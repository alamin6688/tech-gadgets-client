const HowItWorks = () => {
    return (
      <section className="bg-[#1F2937] pt-12 pb-16 px-5 mt-20 rounded-xl max-w-screen-xl mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white">
              How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Discover how easy it is to explore, review, and purchase the latest tech gadgets on our platform.
          </p>
        </div>
  
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-200 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold text-gray-900">
              1. Browse Gadgets
            </h3>
            <p className="mt-2 text-gray-600">
              Start by exploring our extensive collection of the latest tech gadgets. Use filters to find exactly what you need.
            </p>
          </div>
  
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">
              2. Read Reviews
            </h3>
            <p className="mt-2 text-gray-600">
              Check out detailed reviews and ratings from other tech enthusiasts to make informed decisions about your purchase.
            </p>
          </div>
  
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">
              3. Compare Products
            </h3>
            <p className="mt-2 text-gray-600">
              Compare features, prices, and specifications of different gadgets to find the perfect match for your needs.
            </p>
          </div>
  
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">
              4. Make a Purchase
            </h3>
            <p className="mt-2 text-gray-600">
              Add your selected gadgets to the cart and proceed to checkout with our secure payment options.
            </p>
          </div>
  
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">
              5. Fast Delivery
            </h3>
            <p className="mt-2 text-gray-600">
              Enjoy fast and reliable delivery to your doorstep. Track your order status in real-time.
            </p>
          </div>
  
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">
              6. Post-Purchase Support
            </h3>
            <p className="mt-2 text-gray-600">
              Benefit from our excellent customer support for any post-purchase queries or assistance you might need.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  