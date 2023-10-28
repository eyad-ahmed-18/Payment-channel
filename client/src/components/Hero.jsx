const Hero = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Deposit Funds
          </p>
          <p className="mt-2 text-lg leading-8 font-bold tracking-tight text-gray-600 sm:text-2xl">
            Send funds to any party on the blockchain
          </p>
          <br></br>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"></dl>
        </div>
      </div>
    </div>
  );
};

export default Hero;
