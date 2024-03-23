const TodoCard = () => {
  return (
    <div className="bg-white rounded-lg p-5 flex justify-between items-center">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-5">
        <button className="bg-yellow-500 p-2 rounded-lg text-white font-semibold">
          edit
        </button>
        <button className="bg-red-600 p-2 rounded-lg text-white font-semibold">
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
