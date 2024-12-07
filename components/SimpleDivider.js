// components/Divider.jsx
const Divider = ({ type = 'simple', text }) => {
    const dividerStyles = {
      simple: "w-full h-px bg-gray-200 my-5",
      gradient: "w-full h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent hover:via-blue-500 transition-all duration-300 my-2 opacity-80 hover:opacity-100 hover:h-1 rounded-full shadow-md",
      dashed: "w-full border-t-2 border-dashed border-gray-300 my-5",
      withText: "w-full flex items-center text-center my-5"
    };
  
    if (type === 'withText') {
      return (
        <div className={dividerStyles.withText}>
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="px-4 text-sm text-gray-600">{text}</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>
      );
    }
  
    return <div className={dividerStyles[type]} />;
  };
  
  export default Divider;
  