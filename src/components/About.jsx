import React from 'react';

export default function About() {
  return (
    <div className="flex h-screen w-full items-center justify-evenly bg-secondary-dark text-primary-light">
      <div className="w-1/3 text-right text-9xl">About</div>
      <div className="w-1/3 text-justify">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sequi quia doloremque non deserunt dolor ducimus, vitae fugiat quas nulla fuga recusandae voluptatibus, velit esse accusantium voluptas vel temporibus culpa laborum
          quod perferendis pariatur? Reiciendis.
        </div>
      </div>
    </div>
  );
}
