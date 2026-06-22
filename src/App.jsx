 import React, { useState } from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative selection:bg-gray-700 selection:text-white">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,40,40,0.3),transparent_50%)] pointer-events-none z-0"></div>
      
      {/* 1. LOGO & MENU BAR */}
      <Header />

      {/* Main Content Containers */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-24">
        
        {/* HERO & ABOUT INTEGRATION */}
        <section id="about" className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16 py-12 scroll-mt-24">
          
          {/* Left Side: The Rust Profile Card */}
          <div className="w-full lg:w-[380px] bg-[#66331F] p-10 flex flex-col items-center text-center shadow-xl flex-shrink-0">
            <div className="w-44 h-44 rounded-full overflow-hidden mb-8 border-4 border-black/10 shadow-inner">
              <img 
                src="https://static.wixstatic.com/media/193d6b_0d136c9479644f00af862d90728f4b44~mv2.jpg/v1/crop/x_0,y_66,w_219,h_215/fill/w_211,h_207,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1708338557940-removebg-preview_edited_jp.jpg" 
                alt="Suren R. Tuladhar" 
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-wide leading-tight">
              Suren R. Tuladhar
            </h1>
            <div className="w-16 h-[2px] bg-white/40 my-6"></div>
            <h2 className="text-sm font-semibold tracking-[0.35em] text-white uppercase leading-relaxed">
               <br/> 
            </h2>
            
            {/* Quick Links on Card */}
            <div className="flex space-x-4 mt-8">
              <a href="https://www.facebook.com/nerus69srt/" target="_blank" rel="noreferrer" className="hover:opacity-80 transition">
                <img src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_37,h_37,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0fdef751204647a3bbd7eaa2827ed4f9.png" alt="Facebook" className="w-6 h-6 invert" />
              </a>
              <a href="https://www.linkedin.com/in/nerus/" target="_blank" rel="noreferrer" className="hover:opacity-80 transition">
                <img src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_37,h_37,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6ea5b4a88f0b4f91945b40499aa0af00.png" alt="LinkedIn" className="w-6 h-6 invert" />
              </a>
              <a href="https://www.instagram.com/nerus69srt/" target="_blank" rel="noreferrer" className="hover:opacity-80 transition">
                <img src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_37,h_37,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01c3aff52f2a4dffa526d7a9843d46ea.png" alt="Instagram" className="w-6 h-6 invert" />
              </a>
            </div>
          </div>

          {/* Right Side: Bio Text Content */}
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-none">
              Bridging Data & Security
            </h2>
            <div className="space-y-4 text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl">
              <h3 className="text-lg font-bold text-white tracking-wide uppercase text-gray-400">
                Beyond the Code
              </h3>
              <p>
                I am an aspiring Cybersecurity Data Scientist and a dedicated SOC Analyst with a passion for the unseen patterns in digital traffic.
              </p>
              <p>
                My journey began in data analytics, working with global teams at Worldview International in Dubai to drive strategic decisions across the UK, US, and Africa.
              </p>
              <p>
                Today, I leverage that analytical foundation at CryptoGen Nepal, where I monitor threats, investigate anomalies, and ensure system integrity. I hold a BTech in Cyber Security (Distinction) and constantly push the boundaries of what is possible with AWS, SQL, and Threat Intelligence.
              </p>
            </div>
            <div className="pt-4">
              <a 
                href="https://06d3b683-1248-433a-a255-dc99a2f6af1f.filesusr.com/ugd/193d6b_c8737e88672d4224b63b1742d1a6f362.pdf" 
                download 
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-white text-white bg-transparent px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* 3. PROJECTS SECTION */}
        <section id="projects" className="py-20 border-t border-gray-800 scroll-mt-24">
          <h3 className="text-3xl font-extrabold tracking-wider uppercase mb-12 text-center lg:text-left">
            Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-gray-400">
              <h4 className="text-xl font-bold text-white">Cybersecurity & Data Frameworks</h4>
              <p className="leading-relaxed">
                Developing robust pipelines that blend security intelligence metrics with actionable logs. Architecting localized dashboards to track vector shifts and mitigate system vulnerabilities across operational environments.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://static.wixstatic.com/media/193d6b_d3c3598d281e4ee592c70af5d4f8237c~mv2.jpg/v1/fill/w_552,h_690,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/193d6b_d3c3598d281e4ee592c70af5d4f8237c~mv2.jpg" 
                alt="Data Security Visualization" 
                className="w-full max-w-[340px] h-auto object-cover border border-gray-800 shadow-md opacity-90"
              />
            </div>
          </div>
        </section>

        {/* 4. CONTACT SECTION */}
        <section id="contact" className="py-20 border-t border-gray-800 scroll-mt-24">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h3 className="text-3xl font-extrabold tracking-wider uppercase">
              Get In Touch
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Open for professional collaborations, telemetry analysis tracking discussions, and cybersecurity architecture inquiries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 pt-4">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-gray-500 block">Call / Whatsapp</span>
                <a href="tel:+9779715666600" className="text-lg font-medium hover:text-gray-300 transition">+977 9715-6666-00</a>
              </div>
              <div className="w-px h-8 bg-gray-800 hidden sm:block"></div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-gray-500 block">Secure Email</span>
                <a href="mailto:Nerus.srt@outlook.com" className="text-lg font-medium hover:text-gray-300 transition underline underline-offset-4">Nerus.srt@outlook.com</a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 5. FOOTER */}
      <Footer />

      {/* Floating Action 'Let's Chat' Trigger */}
      <a 
        href="#contact" 
        className="fixed bottom-6 right-6 bg-[#E8C4E9] text-black px-6 py-3 rounded-full flex items-center gap-2 font-semibold shadow-xl hover:bg-[#d9b2db] transition-all z-50 transform hover:-translate-y-0.5 text-sm tracking-wide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
        Let's Chat!
      </a>
    </div>
  );
};

/* 1. HEADER & NAVIGATION MENU BAR COMPONENT */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black/95 backdrop-blur-md border-b border-gray-900 sticky top-0 z-50 transition-all">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* LOGO AS NAME IDENTIFIER */}
        <a href="#about" className="text-lg font-black tracking-[0.2em] uppercase text-white hover:text-gray-300 transition-colors">
          Suren R. Tuladhar
        </a>
        
        {/* Desktop Menu Bar */}
        <nav className="hidden md:flex space-x-10 text-xs font-bold tracking-[0.2em] text-gray-400">
          <a href="#about" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all">ABOUT ME</a>
          <a href="#projects" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all">PROJECTS</a>
          <a href="#contact" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all">CONTACT</a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-400 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer Expansion */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-gray-900 px-6 py-4 space-y-3 flex flex-col text-xs font-bold tracking-widest text-gray-400 animate-fadeIn">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-white py-2 transition-colors">ABOUT ME</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-white py-2 transition-colors">PROJECTS</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-white py-2 transition-colors">CONTACT</a>
        </div>
      )}
    </header>
  );
};

/* 5. FOOTER COMPONENT */
const Footer = () => (
  <footer className="w-full bg-black border-t border-gray-900 py-12 relative z-10">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      
      {/* Branding Info */}
      <div className="text-center md:text-left space-y-2">
        <p className="text-xs font-bold tracking-widest uppercase text-gray-500">
                  </p>
        <p className="text-xs text-gray-600">
          &copy; 2026 by Suren R. Tuladhar. All Rights Controlled.
        </p>
      </div>

      {/* Social Network Media Links */}
      <div className="flex flex-col items-center md:items-end gap-3">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Follow Grid</span>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/nerus69srt/" target="_blank" rel="noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
            <img src="https://static.wixstatic.com/media/11062b_2381e8a6e7444f4f902e7b649aa3f0ac~mv2.png/v1/fill/w_77,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_2381e8a6e7444f4f902e7b649aa3f0ac~mv2.png" alt="Facebook" className="w-6 h-6 invert" />
          </a>
          <a href="https://www.linkedin.com/in/nerus/" target="_blank" rel="noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
            <img src="https://static.wixstatic.com/media/11062b_7cf73902d06c4f3685c379a21c6c8285~mv2.png/v1/fill/w_77,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_7cf73902d06c4f3685c379a21c6c8285~mv2.png" alt="LinkedIn" className="w-6 h-6 invert" />
          </a>
          <a href="https://www.instagram.com/vroom_vo_om_babu/" target="_blank" rel="noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
            <img src="https://static.wixstatic.com/media/11062b_55e4be1e75564866b6c28290f9a9d271~mv2.png/v1/fill/w_77,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_55e4be1e75564866b6c28290f9a9d271~mv2.png" alt="Instagram" className="w-6 h-6 invert" />
          </a>
        </div>
      </div>

    </div>
  </footer>
);

export default App;