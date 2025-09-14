import React from "react";
import { Zap, MapPin, Users, Shield } from "lucide-react";

interface HomeProps {
  setPage: (
    page:
      | "home"
      | "host-auth"
      | "user-auth"
      | "host-dashboard"
      | "user-dashboard"
      | "map"
  ) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Evnnect</h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="features"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="how-it-works"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                How it Works
              </a>
              <a
                href="about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </a>
            </nav>

            <div className="flex space-x-3">
              <button
                onClick={() => setPage("host-auth")}
                className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Become a Host
              </button>
              <button
                onClick={() => setPage("user-auth")}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Find Chargers
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Connect. Charge.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Drive Forward.
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Evnnect brings together EV drivers and charging station hosts. Share
            charging infrastructure, earn money as a host, or discover
            convenient charging spots as a driver.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setPage("user-auth")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Find Charging Stations
            </button>
            <button
              onClick={() => setPage("host-auth")}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white text-lg font-semibold rounded-xl hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg"
            >
              List Your Charger
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Evnnect?
            </h3>
            <p className="text-lg text-gray-600">
              Everything you need for seamless EV charging
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                GPS Navigation
              </h4>
              <p className="text-gray-600">
                Real-time GPS directions to the nearest available charging
                station
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Community Driven
              </h4>
              <p className="text-gray-600">
                Connect with local hosts and contribute to sustainable
                transportation
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Secure & Reliable
              </h4>
              <p className="text-gray-600">
                Verified hosts, secure payments, and 24/7 customer support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h3>
            <p className="text-lg text-gray-600">
              Simple steps to start charging or hosting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Drivers */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900 text-center">
                For EV Drivers
              </h4>
              <div className="space-y-4">
                <Step
                  number={1}
                  title="Find Stations"
                  description="Browse available charging stations near you"
                />
                <Step
                  number={2}
                  title="Book & Navigate"
                  description="Reserve your spot and get GPS directions"
                />
                <Step
                  number={3}
                  title="Charge & Pay"
                  description="Connect your vehicle and pay securely"
                />
              </div>
            </div>

            {/* For Hosts */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900 text-center">
                For Charging Hosts
              </h4>
              <div className="space-y-4">
                <Step
                  number={1}
                  title="List Your Charger"
                  description="Add your charging station details and pricing"
                />
                <Step
                  number={2}
                  title="Accept Bookings"
                  description="Manage availability and confirm reservations"
                />
                <Step
                  number={3}
                  title="Earn Money"
                  description="Get paid automatically after each session"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold">Evnnect</span>
            </div>
            <p className="text-gray-400">
              © 2025 Evnnect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Reusable Step component
interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
      {number}
    </div>
    <div>
      <h5 className="font-semibold text-gray-900">{title}</h5>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Home;
