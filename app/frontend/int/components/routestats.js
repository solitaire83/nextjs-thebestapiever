export default function ROUTESTATS({ route, totalreqs }) {
  const procent = ((route.REQUESTS / totalreqs) * 100).toFixed(1);
  const progres = Math.min(100, (route.REQUESTS / totalreqs) * 100);

  return (
    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
      <div className="flex-1">
        <a 
          href={`/api/v1${route.ROUTE}`} 
          target="_blank" 
          className="font-medium text-gray-800 underline"
        >
          {route.ROUTE}
        </a>
        <p className="text-sm text-gray-600">
          {route.REQUESTS?.toLocaleString() || '0'} requests
        </p>
        <p className="text-xs text-gray-500">
          Last time: {route.LAST_ACCESS_AT || 'n/a'}
        </p>
      </div>
      <div className="text-right">
        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-pink-500 transition-all duration-300"
            style={{ width: `${progres}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          {procent}%
        </p>
      </div>
    </div>
  )
}
