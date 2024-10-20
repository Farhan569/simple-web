import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
        <div className='px-20'>
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
