"use client";
import { useState } from "react";

export default function DocsContent() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Button to Toggle Content */}
      <button
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        onClick={() => setShowContent(!showContent)}
      >
        Read our docs
      </button>

      {/* Content (Visible when showContent is true) */}
      {showContent && (
        <div className="mt-4 p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 shadow-md w-full max-w-3xl">
          <h2 className="text-xl font-bold">
            Land Suitability Analysis for Safe Construction using AI and IoT
          </h2>
          <p className="mt-2">
            <strong>Problem Statement:</strong> Unstable land conditions pose a significant risk to construction projects, leading to structural failures, landslides, and property loss...
          </p>

          <h3 className="mt-4 font-semibold">Objectives:</h3>
          <ul className="list-disc list-inside">
            <li>Monitor land elevation changes using satellite/drone data.</li>
            <li>Detect real-time slope instability, soil moisture levels, and vibrations using sensors.</li>
            <li>Issue warnings and alerts on potential landslide risks.</li>
            <li>Provide recommendations on safe construction limits.</li>
            <li>Enhance risk prediction accuracy with machine learning.</li>
            <li>Implement blockchain for secure and verifiable land records.</li>
            <li>Collaborate with government bodies for large-scale deployment.</li>
          </ul>

          <h3 className="mt-4 font-semibold">Features:</h3>
          <ul className="list-disc list-inside">
            <li>
              <strong>IoT-Based Land Monitoring:</strong> Real-time data collection, wireless transmission, cloud storage.
            </li>
            <li>
              <strong>AI-Powered Risk Assessment:</strong> Machine learning models, historical trend analysis.
            </li>
            <li>
              <strong>Web & Mobile Dashboard:</strong> Google Maps API, data visualization, push notifications.
            </li>
            <li>
              <strong>Advanced Features:</strong> Drone-based LiDAR mapping, blockchain, government collaboration.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
