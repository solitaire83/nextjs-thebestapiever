import STATS from "./int/sections/stats";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-16">
                <div className="flex justify-center">
                    <div className="relative">
                    <div className="text-6xl md:text-8xl font-bold text-gray-800 mb-4">
                        <span className="text-black">RE</span>
                        <span className="text-pink-800">GN</span>
                    </div>
                    <div className="absolute -top-4 -right-8 w-16 h-16 bg-pink-300 rounded-full opacity-60"></div>
                    <div className="absolute -bottom-2 -left-4 w-12 h-12 bg-pink-200 rounded-full opacity-40"></div>
                    </div>
                </div>

            <h1 className="text-2xl md:text-3xl text-gray-600 mb-10 font-medium">your nicest api & cdn</h1>
            </div>

            <section className="max-w-4xl mx-auto">
                <STATS/>
            </section>
        </div>
    </div>
  )
}
