import React from 'react';
import { XCircleIcon } from 'lucide-react';

function FavoritesGallery({ favorites, removeFromFavorites }) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 pb-3 border-b border-blue-900/50">
        Your Cosmic Favorites
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((fav) => (
          <div 
            key={fav.date} 
            className="bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl border border-slate-700 group"
          >
            <div className="h-48 bg-black flex items-center justify-center overflow-hidden">
              <img 
                src={fav.url} 
                alt={fav.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-blue-300 text-base mb-1 truncate" title={fav.title}>
                {fav.title}
              </h3>
              <p className="text-xs text-slate-400 mb-4">{fav.date}</p>
              <button 
                onClick={() => removeFromFavorites(fav.date)}
                className="flex items-center gap-1 text-xs bg-red-900/60 hover:bg-red-800 text-red-200 px-3 py-1.5 rounded-lg transition-colors w-full justify-center"
              >
                <XCircleIcon size={14} />
                <span>Remove</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesGallery;