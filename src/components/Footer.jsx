import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around">
        <div className="mb-8 w-[350px]">
          <img
            src="src\assets\TechmindsLogo 1.png"
            alt="Logo 1"
            className="h-12 mb-4"
          />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Adipiscing facilisi velit
            quam viverra nibh aliquam ut risus vitae. Eu risus fames suscipit
            tellus augue elementum.
          </p>
          <div className="flex mt-4">
            <FaFacebook className="text-2xl mr-4" />
            <FaTwitter className="text-2xl mr-4" />
            <FaInstagram className="text-2xl mr-4" />
            <FaLinkedin className="text-2xl" />
          </div>
        </div>

        <div className="mb-8 w-[200px]">
          <h3 className="text-2xl font-medium mb-4">Quick Links</h3>
          <ul className="text-sm">
            <li className="mb-2">Home</li>
            <li className="mb-2">About</li>
            <li className="mb-2">career</li>
            <li className="mb-2">Services</li>
            <li className="mb-2">Contact</li>
            <li className="mb-2">Our Plans</li>
          </ul>
        </div>

        <div className="mb-8 w-[200px]">
          <h3 className="text-2xl font-medium mb-4">Useful Links</h3>
          <ul className="text-sm">
            <li className="mb-2">Privecy Policies</li>
            <li className="mb-2">Terms and Condtions</li>
            <li className="mb-2">Disclaimer</li>
            <li className="mb-2">Support</li>
            <li className="mb-2">FAQs</li>
          </ul>
        </div>

        <div className="w-[300px]">
          <h3 className="text-2xl font-medium mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur. Velit ut etiam justo lorem.
            Elit purus gravida mattis porta condimentum. Ac consectetur nunc id
            urna tincidunt eros.
          </p>
          <div className="flex items-center justify-center mr-2 py-2 px-2 rounded-full">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-2 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-full hover:bg-blue-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
