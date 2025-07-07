import ROUTESTATS from './routestats';

export default function ROUTELIST({ stats, totalreqs }) {
  if (!stats || stats.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>no statistics available yet</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Endpoint Statistics</h3>
      <div className="space-y-3">
        {stats.map((stats, index) => (
          <ROUTESTATS
            key={index} 
            route={stats} 
            totalreqs={totalreqs} 
          />
        ))}
      </div>
    </div>
  );
}
