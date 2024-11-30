import { Lightbulb, Compass, Basketball, Code } from "lucide-react"; // Importing icons from lucide-react

export default function YourComponent() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-2">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Hello,</span>{" "}
        <span className="bg-gradient-to-r from-pink-400 to-red-400 text-transparent bg-clip-text">Head</span>
      </h1>
      <h2 className="text-4xl text-gray-400 mb-12">How can I help you today?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {[
          { text: "Give me tips to stay in the present moment", icon: Lightbulb },
          { text: "Create a travel itinerary for a city", icon: Compass },
          { text: "Quiz me about different kinds of sports", icon: Basketball },
          { text: "Help design a database schema for a business", icon: Code },
        ].map((item, index) => (
          <button
            key={index}
            className="bg-gray-800 p-6 rounded-lg flex items-center justify-between hover:bg-gray-700 transition-colors"
          >
            <span className="text-lg text-left">{item.text}</span>
            <item.icon className="w-6 h-6 text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  );
}
