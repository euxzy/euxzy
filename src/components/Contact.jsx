import React from 'react';

export default function Contact() {
  return (
    <div className="flex h-screen w-full items-center justify-evenly bg-secondary-dark text-primary-light">
      <div className="w-1/3 text-right">
        <div>
          <h4 className="text-sm font-extralight">Contact</h4>
          <h3 className="text-lg font-normal">0090009090</h3>
        </div>
      </div>
      <div className="w-1/3">
        <div>Form Email</div>
      </div>
    </div>
  );
}
