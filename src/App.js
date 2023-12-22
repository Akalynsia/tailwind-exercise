// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin
export default function ButtonVariants() {
  return (
    <span className="flex gap-4 flex-col justify-start items-center mt-20">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Create
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Update
      </button>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        Delete
      </button>
    </span>
  );
}
