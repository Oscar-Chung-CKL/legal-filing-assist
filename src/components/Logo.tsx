const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <svg 
      width="42" 
      height="50" 
      viewBox="0 0 42 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="41.5548" height="41.5548" fill="white" fillOpacity="0.01"/>
      <path d="M20.7774 49.5548L20.7774 0.777344" stroke="currentColor" strokeWidth="1.5548"/>
      <path d="M0.777344 20.7773L40.7773 20.7773" stroke="currentColor" strokeWidth="1.5548"/>
      <path d="M20.7777 41.5549C31.3565 41.5549 39.936 32.9754 39.936 22.3965C39.936 11.8177 31.3565 3.23816 20.7777 3.23816C10.1988 3.23816 1.61931 11.8177 1.61931 22.3965C1.61931 32.9754 10.1988 41.5549 20.7777 41.5549Z" stroke="currentColor" strokeWidth="1.5548"/>
      <path d="M29.8485 20.7773C29.8485 25.7762 25.7772 29.8475 20.7784 29.8475C15.7795 29.8475 11.7083 25.7762 11.7083 20.7773C11.7083 15.7784 15.7795 11.7072 20.7784 11.7072C25.7772 11.7072 29.8485 15.7784 29.8485 20.7773Z" stroke="currentColor" strokeWidth="1.5548"/>
    </svg>
  );
};

export default Logo;
