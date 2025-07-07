import TOTALREQS from './totalcomp';
import ROUTELIST from './routelist';

export default function CONTENT({ stats }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">API Statistics</h2>
      
      <TOTALREQS totalreqs={stats?.TOTALREQS} />
      <ROUTELIST stats={stats?.STATS} totalreqs={stats?.TOTALREQS}/>
    </div>
  );
}
