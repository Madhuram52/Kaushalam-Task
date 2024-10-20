const LoadingSpinner = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-purple-600 border-t-transparent"></div>
      </div>
    );
  };
  
  export default LoadingSpinner;
  