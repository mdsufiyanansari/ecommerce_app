import React from 'react';

const SidebarFilter = () => {
  return (
    <aside className="w-full md:w-64 bg-white shadow-lg rounded-2xl p-6 space-y-6 border">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Filters</h2>

      {/* Category */}
      <div>
        <h3 className="font-medium text-gray-700 mb-2">Category</h3>
        <div className="space-y-1 text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-cyan-500" />
            Men
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-cyan-500" />
            Women
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-cyan-500" />
            Kids
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-medium text-gray-700 mb-2">Price Range</h3>
        <div className="space-y-1 text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="radio" name="price" className="accent-cyan-500" />
            Under $50
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" className="accent-cyan-500" />
            $50 - $100
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="price" className="accent-cyan-500" />
            Over $100
          </label>
        </div>
      </div>

      {/* Brand */}
      <div>
        <h3 className="font-medium text-gray-700 mb-2">Brand</h3>
        <div className="space-y-1 text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-cyan-500" />
            Nike
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-cyan-500" />
            Adidas
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-cyan-500" />
            Puma
          </label>
        </div>
      </div>

      {/* Ratings */}
      <div>
        <h3 className="font-medium text-gray-700 mb-2">Rating</h3>
        <div className="space-y-1 text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" className="accent-cyan-500" />
            4★ & above
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" className="accent-cyan-500" />
            3★ & above
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="rating" className="accent-cyan-500" />
            All ratings
          </label>
        </div>
      </div>

      <button className="w-full mt-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition">
        Apply Filters
      </button>
    </aside>
  );
};

export default SidebarFilter;
