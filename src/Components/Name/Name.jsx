import { useEffect, useState } from 'react';

const Name = () => {
  const [texts] = useState([" Wasim Hossain.", " a MERN Stack Developer."])
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      const fullText = texts[currentIndex];

      if (!isDeleting) {
        // Adding letters
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000); 
        }
      } else {
        // Deleting letters
        setCurrentText((prev) => prev.slice(0, prev.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to next text
        }
      }
    }, 100); 

    return () => clearInterval(interval);
  }, [currentText, isDeleting, currentIndex, texts]);
  return (
    <>
      <div
        className="text-xl font-bold text-black border-r-2 border-black animate-blink"
        style={{ whiteSpace: "nowrap" }}
      >
        <h1 className="text-white">I'm <span className='text-orange-700'>{currentText}</span></h1>
      </div>
    </>
  );
};

export default Name;
