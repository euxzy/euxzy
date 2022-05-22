import React from 'react';

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-evenly bg-secondary-dark font-lexend text-primary-light">
      <div className="w-1/3 text-right">
        <div className="text-9xl">Home</div>
      </div>
      <div className="w-1/3">
        <div className="-mb-5">Hi! My name is</div>
        <div className="relative -left-1 text-7xl">euxzy</div>
      </div>
    </div>
  );
}
