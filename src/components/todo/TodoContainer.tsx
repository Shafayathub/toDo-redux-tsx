const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add to do</button>
        <button>Filter</button>
      </div>
      <div className="bg-green-600 max-w-7xl h-full rounded-lg p-5 space-y-2">
        <div className="bg-white p-5 flex justify-center items-center rounded-lg">
          <p className="font-bold text-lg">There is no task pending</p>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
