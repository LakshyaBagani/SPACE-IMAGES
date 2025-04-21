import React, { useState, useEffect } from 'react';
import FavoritesGallery from './COMPONENTS/FavoritesGallery';
import DateSelector from './COMPONENTS/DateSelector';
import Header from './COMPONENTS/Header';
import Footer from './COMPONENTS/Footer';
import LoadingIndicator from './COMPONENTS/LoadingIndicator';
import ErrorDisplay from './COMPONENTS/ErrorDisplay';
import APODView from './COMPONENTS/APODView';

function NasaImageExplorer() {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [favorites, setFavorites] = useState([]);
  const [viewMode, setViewMode] = useState('card');

  const API_KEY = "TDfiz5bwW2psNU7OaGRoG1f0SiFL7fH0JgF2e4PQ"; 

  useEffect(() => {
    fetchAPOD(date);
  }, [date]);

  const fetchAPOD = async (selectedDate) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${selectedDate}`
      );
      
      if (!response.ok) {
        throw new Error(`NASA API error: ${response.statusText}`);
      }
      
      const data = await response.json();
      setApodData(data);
      setError(null);
    } catch (err) {
      setError(`Failed to fetch data: ${err.message}`);
      setApodData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const addToFavorites = () => {
    if (apodData && !favorites.some(fav => fav.date === apodData.date)) {
      const newFavorite = {
        date: apodData.date,
        title: apodData.title,
        url: apodData.url
      };
      setFavorites([...favorites, newFavorite]);
    }
  };

  const removeFromFavorites = (dateToRemove) => {
    setFavorites(favorites.filter(fav => fav.date !== dateToRemove));
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'card' ? 'fullscreen' : 'card');
  };

  const isInFavorites = apodData && favorites.some(fav => fav.date === apodData.date);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header />
        
        <DateSelector date={date} handleDateChange={handleDateChange} />
        
        {loading && <LoadingIndicator />}
        
        {error && <ErrorDisplay error={error} />}
        
        {apodData && !loading && (
          <APODView 
            apodData={apodData} 
            viewMode={viewMode} 
            toggleViewMode={toggleViewMode} 
            isInFavorites={isInFavorites} 
            addToFavorites={addToFavorites} 
          />
        )}

        {favorites.length > 0 && (
          <FavoritesGallery 
            favorites={favorites} 
            removeFromFavorites={removeFromFavorites} 
          />
        )}

        <Footer />
      </div>
    </div>
  );
}

export default NasaImageExplorer;