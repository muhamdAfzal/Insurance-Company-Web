const Loader = () => {
  return (
    <div className="border border-tartiary shadow rounded-md p-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-greenLite h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-greenLite rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-greenLite rounded col-span-2"></div>
              <div className="h-2 bg-greenLite rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-greenLite rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
