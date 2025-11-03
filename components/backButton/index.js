import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const BackButton = ({ 
  href = '/sparks',
  className = '',
  title = ''
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      router.back();
    }
  };

  // Only render the animated version after mounting to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="nav_work mt-24">
        <div className="inline-block" />
      </div>
    );
  }

  return (
    <motion.div 
      className="nav_work mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="inline-block">
        <div 
          className={`${className} cursor-pointer rounded-[50%] inline-block w-[40px] h-[40px]`}
          onClick={handleBack}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Go back to previous page"
        >
          <div className="go_back group">
          <svg 
    width="18" 
    height="18" 
    viewBox="0 0 100 72" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
  >
    <path 
      className="transition-colors duration-100 group-hover:fill-black group-hover:stroke-black fill-[#ababab] stroke-[#ababab]"
      strokeWidth="3"
      d="M93.0001 42.7733C92.9803 50.3076 89.9785 57.5277 84.6509 62.8552C79.3234 68.1828 72.1033 71.1845 64.5691 71.2043H34.1301C33.1427 71.2043 32.1957 70.8121 31.4975 70.1139C30.7993 69.4157 30.4071 68.4687 30.4071 67.4813C30.4071 66.4939 30.7993 65.547 31.4975 64.8488C32.1957 64.1506 33.1427 63.7583 34.1301 63.7583H64.5691C70.1097 63.7201 75.4103 61.4923 79.3147 57.5609C83.219 53.6295 85.4102 48.3136 85.4102 42.7728C85.4102 37.2321 83.219 31.9162 79.3147 27.9848C75.4103 24.0534 70.1097 21.8256 64.5691 21.7873H12.7091L20.7001 29.7743C21.3906 30.4741 21.7763 31.4186 21.773 32.4017C21.7697 33.3848 21.3777 34.3267 20.6826 35.0218C19.9874 35.717 19.0455 36.109 18.0624 36.1123C17.0793 36.1155 16.1348 35.7298 15.4351 35.0393L1.08906 20.6973C0.391689 19.9989 0 19.0523 0 18.0653C0 17.0784 0.391689 16.1317 1.08906 15.4333L15.4301 1.09233C16.1281 0.393486 17.0752 0.000563214 18.0629 6.05009e-07C19.0507 -0.000562004 19.9982 0.391281 20.6971 1.08933C21.3959 1.78738 21.7888 2.73446 21.7894 3.72221C21.7899 4.70996 21.3981 5.65749 20.7001 6.35633L12.7141 14.3423H64.5741C72.1075 14.3634 79.3262 17.3658 84.6527 22.6932C89.9792 28.0206 92.9803 35.2399 93.0001 42.7733Z" 
    />
  </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BackButton;