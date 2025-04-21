import React from 'react';
import { HeartIcon, DownloadIcon } from 'lucide-react';

function APODViewer({ apodData, viewMode, toggleViewMode, isInFavorites, addToFavorites }) {
  return (
    <div className={`transition-all duration-500 ${viewMode === 'fullscreen' ? 'fixed inset-0 z-50 bg-black p-4 overflow-auto' : 'relative'}`}>
      <div className={`bg-slate-800 rounded-2xl overflow-hidden shadow-2xl mb-12 transition-all ${viewMode === 'fullscreen' ? 'max-w-6xl mx-auto mt-8' : ''}`}>
        <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-blue-300 mb-1">{apodData.title}</h2>
              <p className="text-sm text-blue-200/70 mb-2">{apodData.date}</p>
            </div>
            <button 
              onClick={toggleViewMode}
              className="bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded-lg text-sm text-blue-200 transition-colors"
            >
              {viewMode === 'card' ? 'Fullscreen' : 'Exit Fullscreen'}
            </button>
          </div>
        </div>
        
        <div className="flex justify-center bg-black">
          {apodData.media_type === 'image' ? (
            <img 
              src={apodData.url} 
              alt={apodData.title}
              className={`object-contain transition-all ${viewMode === 'fullscreen' ? 'max-h-screen' : 'max-h-96'}`}
              onClick={viewMode === 'card' ? toggleViewMode : undefined}
              style={viewMode === 'card' ? { cursor: 'zoom-in' } : {}}
            />
          ) : (
            <div className={`aspect-video ${viewMode === 'fullscreen' ? 'w-full max-w-4xl mx-auto' : 'w-full'}`}>
              <iframe
                src={apodData.url}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title={apodData.title}
              ></iframe>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-3 mb-6">
            <button 
              onClick={addToFavorites}
              disabled={isInFavorites}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors shadow-md ${
                isInFavorites 
                ? 'bg-pink-800/50 text-pink-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
              }`}
            >
              <HeartIcon size={18} className={isInFavorites ? 'text-pink-400' : ''} />
              <span>{isInFavorites ? 'Added to Favorites' : 'Add to Favorites'}</span>
            </button>
            
            {apodData.media_type === 'image' && (
              <a 
                href={apodData.hdurl || apodData.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-blue-200 hover:text-blue-100 px-4 py-2 rounded-lg transition-colors shadow-md"
              >
                <DownloadIcon size={18} />
                <span>HD Image</span>
              </a>
            )}
          </div>
          
          <div className="bg-slate-700/40 p-6 rounded-xl border border-slate-600/50">
            <h3 className="text-xl font-medium text-blue-300 mb-3">Explanation:</h3>
            <p className="text-slate-200 leading-relaxed">{apodData.explanation}</p>
            
            {apodData.copyright && (
              <p className="text-right text-sm text-slate-400 mt-4 italic">
                © {apodData.copyright}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default APODViewer;