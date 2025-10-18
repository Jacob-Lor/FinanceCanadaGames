"use client";

import React from "react";
import LiquidEther from "@/components/LiquidEther";

// --- Simple navigation helper ---
const navigateTo = (path: string) => {
  try {
    window.location.href = path;
  } catch (error) {
    console.error("Navigation failed:", error);
  }
};

// --- Reusable UI Components ---

const AnimatedButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="relative px-8 py-3 text-lg font-semibold rounded-lg bg-red-600 text-white overflow-hidden shadow-2xl transition-all duration-500 
               hover:bg-red-500 active:scale-95 border-2 border-transparent hover:border-red-300"
  >
    <span className="relative z-10">{text}</span>
    <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-10"></span>
  </button>
);

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-500 transform border border-gray-200 hover:border-red-500/80 hover:shadow-[0_0_25px_rgba(239,68,68,0.3)] cursor-pointer group">
    <div className="text-4xl text-red-600 mb-4 transition-colors duration-300 group-hover:text-red-700">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-3 tracking-wide">
      {title}
    </h3>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
);

// --- Main Page ---
export default function LiquidPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans relative overflow-hidden">

      {/* --- Animated Background --- */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <LiquidEther
          colors={["#270f0fff", "#432020ff", "#642c2cff"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* --- Foreground Content --- */}
      <div className="relative z-10 pt-48 pb-24 px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-8xl sm:text-9xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-600"
          style={{ fontFamily: "serif", lineHeight: "1.0" }}
        >
          LIQUID SIMULATION
        </h1>

        <p className="text-2xl text-gray-100 max-w-3xl mx-auto mb-12 drop-shadow-lg">
          Experience a mesmerizing **liquid-ether** animation while exploring
          how fluid motion and interactivity can elevate your app’s user
          experience.
        </p>

        <AnimatedButton
          text="Play Financial Game →"
          onClick={() => navigateTo("/game")}
        />
      </div>

      {/* --- Features Section --- */}
      <div className="relative z-10 bg-white bg-opacity-90 backdrop-blur-md py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-red-600 tracking-tight">
          Explore Our Features
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            title="Dynamic Motion"
            description="Harness smooth, interactive liquid effects powered by Reactbits for visual delight."
            icon={<span>💧</span>}
          />
          <FeatureCard
            title="Customizable Physics"
            description="Fine-tune viscosity, resolution, and interactivity for your design needs."
            icon={<span>⚙️</span>}
          />
          <FeatureCard
            title="Seamless Integration"
            description="Combine Liquid Ether backgrounds with any layout or component easily."
            icon={<span>🎨</span>}
          />
        </div>
      </div>
    </main>
  );
}
