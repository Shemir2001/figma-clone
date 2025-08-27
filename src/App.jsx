import React, { useState } from "react";
import logo from "./assets/logo.svg"; // Top-right navbar logo
import mainLogo from "./assets/logo.svg"; // "Standz Expo" main logo
import mainImage from "./assets/exhibition.png"; // Main booth image
import swipeUp from "./assets/swipe-up.svg"; // Swipe-up icon
import svg from "./assets/svg-icon.svg"; // Top-right navbar logo

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add Google Fonts
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Rozha+One&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="bg-[#4FBBB7AD] min-h-screen flex flex-col relative overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      
      {/* Blurred background image - top right */}
      <div 
        className="absolute top-8 right-0 w-96 h-96 opacity-70"
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)',
          transform: 'translate(30%, -20%)',
          zIndex: 0
        }}
      />
        
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 bg-white md:px-12 py-1 relative z-10">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8" style={{ color: '#87D1CE', fontFamily: 'Poppins, sans-serif', fontWeight: 200 }}>
  <li className="cursor-pointer hover:text-gray-600" style={{ fontSize: '14px',fontWeight:700 }}>Home</li>
  <li className="cursor-pointer hover:text-gray-600" style={{ fontSize: '14px' }}>About</li>
  <li className="cursor-pointer hover:text-gray-600" style={{ fontSize: '14px' }}>Services</li>
  <li className="cursor-pointer hover:text-gray-600" style={{ fontSize: '14px' }}>Algerian Expos</li>
  <li className="cursor-pointer hover:text-gray-600" style={{ fontSize: '14px' }}>Our Projects</li>
  <li className="cursor-pointer hover:text-gray-600" style={{ fontSize: '14px' }}>Contact</li>
  <li className="cursor-pointer hover:text-gray-600" style={{ fontSize: '14px' }}>Language Switcher</li>
</ul>

        {/* Logo */}
        <img src={svg} alt="Logo" className="h-10 md:h-12" />

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 px-6 py-4 bg-white shadow-md md:hidden relative z-10" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
          <li className="cursor-pointer hover:text-gray-600" style={{ fontSize: '14px' }}>Home</li>
          <li className="cursor-pointer hover:text-gray-600" style={{ fontSize: '14px' }}>About</li>
          <li className="cursor-pointer hover:text-gray-600" style={{ fontSize: '14px' }}>Services</li>
          <li className="cursor-pointer hover:text-gray-600" style={{ fontSize: '14px' }}>Algerian Expos</li>
          <li className="cursor-pointer hover:text-gray-600" style={{ fontSize: '14px' }}>Our Projects</li>
          <li className="cursor-pointer hover:text-gray-600" style={{ fontSize: '14px' }}>Contact</li>
          <li className="cursor-pointer hover:text-gray-600" style={{ fontSize: '14px' }}>Language Switcher</li>
        </ul>
      )}

      {/* MAIN SECTION */}
      <section className="flex flex-col md:flex-row justify-between py-12 px-6 md:px-15 gap-8 md:gap-12 pt-12 pl-16 relative z-10">
        {/* LEFT TEXT/LOGO */}
        <div className="max-w-lg text-center md:text-left flex-shrink-0 mt-0">
          {/* Logo instead of text for "Standz Expo" */}
          <img src={mainLogo} alt="Standz Expo Logo" className="w-52 mb-2 mx-auto md:mx-0" />

          {/* Text content as in reference image */}
          <h1 className="text-3xl md:text-4xl text-white mb-2" 
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 600,
                lineHeight: '1.2',
                letterSpacing: '-0.02em'
              }}>
            Connecting the World to
          </h1>
          <h2 
            className="text-2xl md:text-3xl text-white mb-6"
            style={{ 
              fontFamily: 'Rozha One, serif', 
              fontWeight: 400,
              lineHeight: '1.2',
              letterSpacing: '-0.01em'
            }}>
            Algerian Expos
          </h2>

          <p className="text-white text-base md:text-lg mb-8 leading-relaxed"
             style={{ 
               fontFamily: 'Poppins, sans-serif', 
               fontWeight: 400,
               lineHeight: '1.6'
             }}>
            Standz helps international companies exhibit with ease. From concept
            to realization, we offer full-service custom stand and event
            solutions tailored to your brand.
          </p>

          {/* Swipe Up */}
          <div className="flex justify-center md:justify-start">
            <img src={swipeUp} alt="Swipe Up" className="w-16 md:w-20" />
          </div>
        </div>

        {/* RIGHT IMAGE + BUTTON - Tightly Grouped */}
        <div className="flex flex-col w-full md:w-full">
          {/* Container for image and button - tightly spaced */}
          <div className="flex flex-col items-center gap-1">
            {/* Exhibition Image */}
            <img
              src={mainImage}
              alt="Exhibition Booth"
              className="w-full md:w-[2000 px] h-[500px] lg:max-w-xl "
            />
            
            {/* Button immediately below image */}
            <button className="cursor-pointer bg-[#185fa0] text-white font-semibold text-xl px-16 py-3 rounded shadow hover:bg-blue-800 transition">
              Get A Free Quote
            </button>
          </div>
          
          {/* Text below button */}
          <p className="text-white text-sm md:text-base text-center mt-3 font-medium">
            Your Exhibition Partner Wherever You Go
          </p>
        </div>
      </section>
    </div>
  );
}
// import React, { useState } from "react";
// import logo from "./assets/logo.svg"; // Top-right navbar logo
// import mainLogo from "./assets/logo.svg"; // "Standz Expo" main logo
// import mainImage from "./assets/exhibition.png"; // Main booth image
// import swipeUp from "./assets/swipe-up.svg"; // Swipe-up icon

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="bg-[#A7D6D6] min-h-screen flex flex-col">
//       {/* NAVBAR */}
//       <nav className="flex justify-between items-center px-6 md:px-12 py-4">
//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
//           <li className="cursor-pointer hover:text-gray-600">Home</li>
//           <li className="cursor-pointer hover:text-gray-600">About</li>
//           <li className="cursor-pointer hover:text-gray-600">Services</li>
//           <li className="cursor-pointer hover:text-gray-600">Algerian Expos</li>
//           <li className="cursor-pointer hover:text-gray-600">Our Projects</li>
//           <li className="cursor-pointer hover:text-gray-600">Contact</li>
//           <li className="cursor-pointer hover:text-gray-600">Language Switcher</li>
//         </ul>

//         {/* Logo */}
//         <img src={logo} alt="Logo" className="h-10 md:h-12" />

//         {/* Hamburger Menu Button */}
//         <button
//           className="md:hidden text-gray-800"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? "✖" : "☰"}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <ul className="flex flex-col gap-4 px-6 py-4 bg-white shadow-md md:hidden">
//           <li className="cursor-pointer hover:text-gray-600">Home</li>
//           <li className="cursor-pointer hover:text-gray-600">About</li>
//           <li className="cursor-pointer hover:text-gray-600">Services</li>
//           <li className="cursor-pointer hover:text-gray-600">Algerian Expos</li>
//           <li className="cursor-pointer hover:text-gray-600">Our Projects</li>
//           <li className="cursor-pointer hover:text-gray-600">Contact</li>
//           <li className="cursor-pointer hover:text-gray-600">Language Switcher</li>
//         </ul>
//       )}

//       {/* MAIN SECTION */}
//       <section className="flex flex-col md:flex-row justify-between items-start px-6 md:px-12 gap-8 md:gap-12 mt-0">
//         {/* LEFT TEXT/LOGO */}
//         <div className="max-w-lg text-center md:text-left flex-shrink-0 mt-0">
//           {/* Imported Logo instead of text */}
//           <img src={mainLogo} alt="Standz Expo Logo" className="w-52 mb-6 mx-auto md:mx-0" />

//           <p className="text-white text-sm md:text-base mb-8 leading-relaxed">
//             Standz helps international companies exhibit with ease. From concept
//             to realization, we offer full-service custom stand and event
//             solutions tailored to your brand.
//           </p>

//           {/* Swipe Up */}
//           <div className="flex justify-center md:justify-start">
//             <img src={swipeUp} alt="Swipe Up" className="w-16 md:w-20" />
//           </div>
//         </div>

//         {/* RIGHT IMAGE + BUTTON */}
//         <div className="flex flex-col items-center  w-full md:w-auto">
//           {/* Exhibition Image - no top margin, aligned to start */}
//           <img
//             src={mainImage}
//             alt="Exhibition Booth"
//             className="w-full md:max-w-lg lg:max-w-xl object-contain mt-0"
//           />
          
//           {/* Button centered below image with minimal gap */}
//           <button className="bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow hover:bg-blue-800 transition ">
//             Get A Free Quote
//           </button>
          
//           {/* Text centered below button */}
//           <p className="text-white text-sm md:text-base text-center mt-2">
//             Your Exhibition Partner Wherever You Go
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }