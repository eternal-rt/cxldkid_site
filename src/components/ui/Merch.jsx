import React from "react";

const Merch = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white py-16 px-6 md:px-12">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        CXLDKID MERCH
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Sample Merch Item */}
        <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="/merch/shirt1.png"
            alt="Classic Logo Tee"
            className="rounded-xl mb-4 w-full h-64 object-cover"
          />
          <h2 className="text-xl font-semibold">Classic Logo Tee</h2>
          <p className="text-sm text-zinc-400 mt-1">100% cotton, available in black and white.</p>
          <p className="mt-3 text-lg font-bold text-pink-500">$25.00</p>
          <button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 transition-colors py-2 rounded-lg font-medium">
            Buy Now
          </button>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="/merch/hoodie1.png"
            alt="Wavy Hoodie"
            className="rounded-xl mb-4 w-full h-64 object-cover"
          />
          <h2 className="text-xl font-semibold">Wavy Hoodie</h2>
          <p className="text-sm text-zinc-400 mt-1">Premium fleece hoodie with CXLDKID wavy logo.</p>
          <p className="mt-3 text-lg font-bold text-pink-500">$45.00</p>
          <button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 transition-colors py-2 rounded-lg font-medium">
            Buy Now
          </button>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="/merch/hatsnap.png"
            alt="Snapback Hat"
            className="rounded-xl mb-4 w-full h-64 object-cover"
          />
          <h2 className="text-xl font-semibold">Snapback Hat</h2>
          <p className="text-sm text-zinc-400 mt-1">Adjustable fit, embroidered logo on front.</p>
          <p className="mt-3 text-lg font-bold text-pink-500">$20.00</p>
          <button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 transition-colors py-2 rounded-lg font-medium">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Merch;
