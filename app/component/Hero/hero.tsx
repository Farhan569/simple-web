import Link from "next/link";

const Hero = () => {
    return (
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to MyWebsite
          </h1>
          <p className="text-xl mb-8">
            This is a sample website created with Next.js and Tailwind CSS.
          </p>
          <Link
            href="/about"
            className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            About Page
          </Link>
        </div>
      </section>
    );
  };
  
  export default Hero;
  