const Category = () => {
  return (
    <div className="text-sm">
      <p className="font-semibold">Category</p>
      <div className="grid grid-rows-4 grid-cols-1 gap-3 mt-5 text-gray-500">
        <div className="hover:text-black">
          Home
        </div>
        <div>
          Diary
        </div>
        <div>
          DevNote
        </div>
        <div>
          Todos
        </div>
      </div>
    </div>
  )
}

export default Category;