export default function SHOWERROR({ error }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
      <div className="flex items-center">
        <div className="w-6 h-6 bg-red-500 rounded-full mr-3 flex items-center justify-center">
          <span className="text-white text-sm">!</span>
        </div>
        <p className="text-red-700">here is ur error: {error}</p>
      </div>
    </div>
  );
}
