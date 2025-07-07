export default function TOTALREQS({ totalreqs }) {
  return (
    <div className="mb-6 text-center">
      <div className="inline-block bg-pink-100 rounded-lg p-4">
        <p className="text-sm text-gray-600 mb-1">Total Requests</p>
        <p className="text-3xl font-bold text-pink-700">
          {totalreqs?.toLocaleString() || '0'}
        </p>
      </div>
    </div>
  );
}
