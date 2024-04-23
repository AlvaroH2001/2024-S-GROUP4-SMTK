import React from 'react';

function MovieCard({ movie }) {
    return (
        <div className="group m-2 flex-shrink-0" style={{ width: '200px' }}>
            {/* Adding relative to this div to set the positioning context for the absolute overlay correctly */}
            <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-300" />
                {/* Overlay and button apply only to this div */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                        <p className="text-white font-semibold">{movie.title}</p>
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                            Play
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
