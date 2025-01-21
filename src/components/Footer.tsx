import { FaGithub, FaDownload } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" text-white py-8" style={{ backgroundColor: "#001920" }}>
      <div className="container mx-auto px-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Social Media Icons */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/SiTa-SpeakerDiarization/SiTa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={24} className="hover:text-green-400" />
              </a>
              <a
                href="https://rtuthaya.staff.uom.lk/resources/dataset/44"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Dataset"
              >
                <FaDownload size={24} className="hover:text-green-400" />
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-bold mb-4">Address</h4>
            <div className="hover:text-green-400">
              <p>University of Moratuwa</p>
              <p>Bandaranayake Mawatha, Moratuwa</p>
              <p>Sri Lanka 10400</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p>
              <a
                href="mailto:rtuthaya@cse.mrt.ac.lk"
                className="hover:underline block hover:text-green-400"
              >
                rtuthaya@cse.mrt.ac.lk
              </a>
              <a
                href="mailto:thulasithan.20@cse.mrt.ac.lk"
                className="hover:underline block hover:text-green-400"
              >
                thulasithan.20@cse.mrt.ac.lk
              </a>
              <a
                href="mailto:kasuni.20@cse.mrt.ac.lk"
                className="hover:underline block hover:text-green-400"
              >
                kasuni.20@cse.mrt.ac.lk
              </a>
              <a
                href="mailto:shamila.20@cse.mrt.ac.lk"
                className="hover:underline block hover:text-green-400"
              >
                shamila.20@cse.mrt.ac.lk
              </a>
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center border-t border-gray-700 mt-8 pt-4">
          <p>&copy; {new Date().getFullYear()} SiTa. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
