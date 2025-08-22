import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Changed to true for dark mode by default

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'resume', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "Fitness App Marketing Strategy",
      subtitle: "Lead Strategist – Mock Presentation",
      description: "Developed a comprehensive marketing strategy for a fitness app targeting health-conscious millennials. Created user personas, conducted competitive analysis, and designed a go-to-market strategy focused on social media engagement and influencer partnerships.",
      contributions: [
        "Developed detailed user personas based on market research",
        "Conducted comprehensive competitive analysis of top fitness apps",
        "Designed a 90-day go-to-market strategy with phased rollout",
        "Created compelling presentation materials for stakeholder pitch",
        "Identified key performance indicators for campaign success"
      ],
      image: "https://placehold.co/400x250/1e40af/ffffff?text=Fitness+App+Strategy",
      type: "mock"
    },
    {
      id: 2,
      title: "Budget University Marketing Strategy",
      subtitle: "Marketing Consultant – Real Client Pitch",
      description: "Presented a data-driven marketing strategy to Budget University stakeholders to increase enrollment and improve brand awareness. Our recommendations were implemented in their upcoming academic year campaigns.",
      contributions: [
        "Analyzed current marketing performance and identified opportunities",
        "Developed targeted messaging for different student demographics",
        "Created a digital marketing roadmap with budget allocation",
        "Presented findings and recommendations to university stakeholders",
        "Refined strategy based on stakeholder feedback and implementation feasibility"
      ],
      image: "https://placehold.co/400x250/059669/ffffff?text=Budget+University+Pitch",
      type: "real"
    }
  ];

  const skills = [
    "Marketing Campaign Execution", "Market Research", "Content Creation", 
    "Social Media Management", "Data Analysis", "Team Collaboration",
    "Creativity", "Organization", "Social Media Analytics", "Graphic Design",
    "Google Analytics", "Videography", "Photography"
  ];

  const experiences = [
    {
      title: "Server",
      company: "Mi Dia From Scratch",
      period: "March 2018 - Current",
      location: "Flower Mound, TX",
      description: [
        "Cultivated over 40 regular customers through personalized service, leading to increased repeat visits.",
        "Collaborated with management to promote menu items, contributing to successful upsell strategies.",
        "Trained over 30 new employees, ensuring they were well-prepared for their roles."
      ]
    },
    {
      title: "Student Volunteer",
      company: "NTTV, UNT",
      period: "Fall 2019 – Fall 2021",
      location: "",
      description: [
        "Trained and guided over 20 students in using broadcast equipment for live television.",
        "Produced a pilot talk show, managing all aspects from pre-production to on-air execution, resulting in successful proof of concept.",
        "Collaborated with department heads to integrate innovative production techniques."
      ]
    },
    {
      title: "Freelance Videographer",
      company: "",
      period: "Dec 2017 - Oct 2022",
      location: "DFW, TX",
      description: [
        "Provided videography services for private and commercial clients, including weddings, event broadcasting, and corporate advertising.",
        "Managed all aspects of freelance work, from client acquisition to invoicing.",
        "Directed video production phases, producing final products through effective shooting, lighting, and editing."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Business Administration in Marketing",
      school: "University of North Texas, Denton, TX",
      period: "Dec 2024",
      details: "GPA: 3.57, Graduated with honors (Cum Laude)"
    },
    {
      degree: "Bachelor of Arts in Media Arts",
      school: "University of North Texas, Denton, TX",
      period: "Dec 2024",
      details: "GPA: 3.57"
    },
    {
      degree: "Associate of Arts",
      school: "North Lake College, Irving, TX",
      period: "May 2020",
      details: ""
    }
  ];

  const certifications = [
    "Google Analytics Certified - Fall 2024",
    "Excel Certified - Fall 2022"
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-800/90 shadow-gray-700/20' 
          : 'bg-white/90 shadow-gray-200/50'
      } shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-gray-800'}`}>
              Garrett Weeks
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'projects', 'resume', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors duration-200 hover:${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  } ${
                    activeSection === item 
                      ? (isDarkMode ? 'text-blue-400' : 'text-blue-600') 
                      : (isDarkMode ? 'text-gray-300' : 'text-gray-700')
                  }`}
                >
                  {item}
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                className={`p-2 rounded-full mr-2 transition-colors duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              
              <button
                className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden border-t transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              {['home', 'projects', 'resume', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-3 transition-colors duration-200 capitalize ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-700' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-24 pb-16 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-teal-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Garrett Weeks
              </h1>
              <p className={`text-xl md:text-2xl mb-6 ${
                isDarkMode ? 'text-blue-400' : 'text-gray-600'
              }`}>
                Marketing Professional & Multimedia Producer
              </p>
              <p className={`text-lg mb-8 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Resilient marketing professional with expertise in client relationship management, 
                content creation, and data analysis. Proven ability to solve problems in high-pressure 
                environments while maintaining strong interpersonal skills.
              </p>
              <button
                onClick={() => scrollToSection('projects')}
                className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg ${
                  isDarkMode ? 'hover:shadow-blue-900/30' : ''
                }`}
              >
                View My Work
              </button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative">
                <img
                  src="https://placehold.co/500x600/374151/ffffff?text=Garrett+Weeks"
                  alt="Garrett Weeks professional headshot"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  👋
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Projects
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Selected marketing strategy presentations showcasing my approach to solving complex marketing challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700/60 shadow-gray-900/20 hover:shadow-gray-900/40' 
                    : 'bg-gray-50 shadow-gray-200/50 hover:shadow-gray-300/50'
                }`}
              >
                <div className="mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    project.type === 'mock' 
                      ? (isDarkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-800') 
                      : (isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800')
                  }`}>
                    {project.type === 'mock' ? 'Mock Project' : 'Real Client'}
                  </span>
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>{project.title}</h3>
                <p className={`font-medium mb-4 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>{project.subtitle}</p>
                
                <p className={`mb-6 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>{project.description}</p>
                
                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>Key Contributions:</h4>
                  <ul className="space-y-2">
                    {project.contributions.map((contribution, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`mr-2 mt-1 ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>•</span>
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                          {contribution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`font-medium px-6 py-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-800 hover:bg-gray-900 text-white'
                }`}>
                  View Presentation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>Resume</h2>
            <p className={`text-xl mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Professional experience, education, and skills
            </p>
            <a
              href="GarrettWeeksResume.pdf"
              download="Garrett_Weeks_Resume.pdf"
              className={`inline-flex items-center font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg ${
                isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-900/30' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-500/30'
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Full Resume (PDF)
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Experience */}
            <div className={`rounded-2xl p-8 shadow-lg transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 shadow-gray-900/20' 
                : 'bg-white shadow-gray-200/50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                </svg>
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className={`pl-6 ${
                    isDarkMode ? 'border-l-4 border-blue-500' : 'border-l-4 border-blue-600'
                  }`}>
                    <h4 className={`text-lg font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>{exp.title}</h4>
                    <p className={`font-medium ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>{exp.company}</p>
                    {exp.location && (
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {exp.location}
                      </p>
                    )}
                    <p className={`text-sm mb-3 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`mr-2 mt-1 ${
                            isDarkMode ? 'text-blue-400' : 'text-blue-600'
                          }`}>•</span>
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className={`rounded-2xl p-8 shadow-lg transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 shadow-gray-900/20' 
                : 'bg-white shadow-gray-200/50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.835-1.994 12.083 12.083 0 01.665-6.479L12 14z" />
                </svg>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className={`pl-6 ${
                    isDarkMode ? 'border-l-4 border-teal-500' : 'border-l-4 border-teal-600'
                  }`}>
                    <h4 className={`text-lg font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>{edu.degree}</h4>
                    <p className={`font-medium ${
                      isDarkMode ? 'text-teal-400' : 'text-teal-600'
                    }`}>{edu.school}</p>
                    <p className={`text-sm mb-2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>{edu.period}</p>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className={`rounded-2xl p-8 shadow-lg transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 shadow-gray-900/20' 
                : 'bg-white shadow-gray-200/50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Skills
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      isDarkMode 
                        ? 'bg-blue-900/30 text-blue-300' 
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div>
                <h4 className={`text-lg font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Certifications</h4>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-3 ${
                        isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></span>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <img
                src="images/graduation.png"
                alt="Professional photo"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>About Me</h2>
              <p className={`text-lg mb-6 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm a resilient marketing professional with a solid foundation in client relationship management. 
                While serving tables throughout the pandemic, I earned two bachelor's degrees and an associate's 
                degree while gaining hands-on multimedia production experience.
              </p>
              <p className={`text-lg mb-6 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                My loyalty and resilience are proven through a track record of problem solving in high pressure 
                environments while maintaining strong interpersonal skills during the most socially challenging 
                periods in recent history. My unique blend of adaptability, creativity, and relationship building 
                brings a fresh perspective to dynamic teams.
              </p>
              <div className={`rounded-xl p-6 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-700/60' : 'bg-blue-50'
              }`}>
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Fun Fact</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                  I earned two bachelor's degrees simultaneously while working full-time as a server 
                  and producing multimedia content. This experience taught me exceptional time management 
                  and the ability to thrive in fast-paced environments!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-800'
      } text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:Garrett.Weeks2018@gmail.com" className="text-lg hover:text-blue-300 transition-colors">
                    Garrett.Weeks2018@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <a href="https://linkedin.com/in/garretttweeks/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-300 transition-colors">
                    linkedin.com/in/garretttweeks/
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-lg">Dallas-Fort Worth, TX</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 hover:shadow-lg hover:shadow-blue-900/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              © 2025 Garrett Weeks. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;