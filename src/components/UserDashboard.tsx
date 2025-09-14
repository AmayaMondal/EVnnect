// src/components/UserDashboard.tsx
import { Battery, MapPin, Star } from "lucide-react";

type Station = {
  id: number;
  name: string;
  location: string;
  power: string;
  connectorType: string[];
  price: number;
  available: boolean;
  rating: number;
  image: string;
};

type UserDashboardProps = {
  currentUser: { id: string; name: string; email: string; type: string } | null;
  setCurrentUser: (user: any) => void;
  setCurrentPage: (page: string) => void;
  setSelectedStation: (station: Station | null) => void;
};

const mockStations: Station[] = [
  {
    id: 1,
    name: "Downtown Supercharger",
    location: "123 Main St, City Center",
    power: "150kW",
    connectorType: ["Tesla", "CCS"],
    price: 12,
    available: true,
    rating: 4.7,
    image: "https://source.unsplash.com/400x300/?tesla,charger",
  },
  {
    id: 2,
    name: "Mall Parking Charger",
    location: "456 Oak Avenue, Suburb",
    power: "50kW",
    connectorType: ["CCS", "CHAdeMO"],
    price: 6,
    available: false,
    rating: 4.3,
    image: "https://source.unsplash.com/400x300/?electric,car",
  },
];

export const UserDashboard = ({
  currentUser,
  setCurrentUser,
  setCurrentPage,
  setSelectedStation,
}: UserDashboardProps) => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <Battery className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Evnnect</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage("map")}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
            >
              <MapPin className="w-4 h-4" />
              <span>View Map</span>
            </button>
            <span className="text-gray-700">Welcome, {currentUser?.name}</span>
            <button
              onClick={() => {
                setCurrentUser(null);
                setCurrentPage("home");
              }}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Find Charging Stations
        </h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search location..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Connector Types</option>
            <option>Tesla</option>
            <option>CCS</option>
            <option>CHAdeMO</option>
            <option>Type 2</option>
          </select>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockStations.map((station) => (
          <div
            key={station.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <img
              src={station.image}
              alt={station.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-gray-900">{station.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{station.rating}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-2">{station.location}</p>
              <p className="text-sm text-gray-600 mb-3">
                {station.power} • {station.connectorType.join(", ")}
              </p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-gray-900">
                  ${station.price}/hour
                </span>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    station.available
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {station.available ? "Available" : "In Use"}
                </span>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setSelectedStation(station);
                    setCurrentPage("map");
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
                  disabled={!station.available}
                >
                  <MapPin className="w-4 h-4" />
                  <span>Navigate</span>
                </button>
                <button
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
                  disabled={!station.available}
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default UserDashboard;