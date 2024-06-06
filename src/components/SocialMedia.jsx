import { styles } from "../styles";
import React from 'react';
import { motion } from 'framer-motion';
import { saveAs } from 'file-saver';

export default function SocialMedia() {
    const downloadPdf = async () => {
      try {
        // Replace 'path_to_your_pdf_file.pdf' with the actual path to your PDF file
        const pdfUrl = 'src/components/Reume-WithOut-Photo.pdf'; // Assuming it's in the public folder
  
        // Fetch the PDF file as a blob
        const response = await fetch(pdfUrl);
        const blob = await response.blob();
  
        // Save the blob as a PDF file using file-saver
        saveAs(blob, 'resume.pdf');
      } catch (error) {
        console.error('Error downloading PDF:', error);
      }
    };
    
    return (
      <div className="social-media">

        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        </head>
    
        <motion.button
          onClick={downloadPdf}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#184580',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            outline: 'none',
            marginLeft: '180px',
            marginBottom: '60px',
          }}
        >
          Download Resume
        </motion.button>
    
        <div className="relative bottom-0 left-0 z-50 w-full flex justify-start ">
          <div class="mx-left flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
            <div class="inline-flex items-left space-x-2">
            </div>
            <div class="hidden grow items-start lg:flex">
    
              <ul class="ml-12 inline-flex space-x-8">
                <li>
                  <a
                    href="https://github.com/Abhrajitdas02"
                    class="text-sm font-semibold text--300 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-github fa-2x text-gray-300 hover:text-gray-400"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/abhrajit_das_123/"
                    class="text-sm font-semibold text--300 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-instagram fa-2x text-gray-300 hover:text-gray-400"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/abhrajit-das-53a958231/"
                    class="text-sm font-semibold text--300 hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-linkedin fa-2x text-gray-300 hover:text-gray-400"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6 cursor-pointer"
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>
            
      </div>
    )
  }