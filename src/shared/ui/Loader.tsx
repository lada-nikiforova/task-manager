export const Loader = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-indigo-600">
      <div className="w-20 h-20 border-2 border-indigo-600 border-t-transparent rounded-full mb-2 animate-spin"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;