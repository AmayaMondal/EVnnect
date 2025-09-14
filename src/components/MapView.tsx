// src/components/MapView.tsx
import { MapPin, Zap, Star } from "lucide-react";

type Station = {
  id: number;
  name: string;
  location: string;
  power: string;
  price: number;
  available: boolean;
  rating: number;
};

type MapViewProps = {
  currentUser: { id: string; name: string; email: string; type: string } | null;
  setCurrentPage: (page: string) => void;
  selectedStation: Station | null;
  setSelectedStation: (station: Station | null) => void;
};

const mockStations: Station[] = [
  {
    id: 1,
    name: "Downtown Supercharger",
    location: "123 Main St, City Center",
    power: "150kW",
    price: 12,
    available: true,
    rating: 4.7,
  },
  {
    id: 2,
    name: "Mall Parking Charger",
    location: "456 Oak Avenue, Suburb",
    power: "50kW",
    price: 6,
    available: false,
    rating: 4.3,
  },
];

export const MapView = ({
  currentUser,
  setCurrentPage,
  selectedStation,
  setSelectedStation,
}: MapViewProps) => (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage("user-dashboard")}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              ←
            </button>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              Charging Station Map
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, {currentUser?.name}</span>
          </div>
        </div>
      </div>
    </header>

    {/* Map Section */}
    <div className="h-[calc(100vh-80px)] relative">
      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* Station Markers */}
        {mockStations.map((station, index) => (
          <div
            key={station.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all hover:scale-110 ${
              selectedStation?.id === station.id ? "z-20" : "z-10"
            }`}
            style={{
              left: `${30 + index * 20}%`,
              top: `${40 + index * 15}%`,
            }}
            onClick={() => setSelectedStation(station)}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                station.available
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              <Zap className="w-4 h-4 text-white" />
            </div>

            {selectedStation?.id === station.id && (
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-4 w-64 z-30">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {station.name}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedStation(null);
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
                <p className="text-xs text-gray-600 mb-2">{station.location}</p>
                <p className="text-xs text-gray-600 mb-3">
                  {station.power} • ${station.price}/hour
                </p>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-600">
                      {station.rating}
                    </span>
                  </div>
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

                <div className="space-y-2">
                  <button
                    className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xs"
                    disabled={!station.available}
                  >
                    Start Navigation
                  </button>
                  <button
                    className="w-full px-3 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 text-xs"
                    disabled={!station.available}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Current Location */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
          <div className="absolute inset-0 w-4 h-4 bg-blue-600 rounded-full animate-ping opacity-30"></div>
        </div>

        {/* Navigation Panel */}
        {selectedStation && (
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-xl p-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  {selectedStation.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Distance: 2.3 mi • ETA: 8 minutes
                </p>
              </div>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                Start Navigation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);
export default MapView;