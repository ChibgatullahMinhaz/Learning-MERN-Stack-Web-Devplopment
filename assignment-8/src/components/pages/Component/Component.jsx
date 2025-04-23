import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Component = () => {
    const [info, setInfo] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('/Componetsdata.json')
            .then((res) => res.json())
            .then((data) => setInfo(data))
            .catch((err) => console.error('Error loading JSON:', err));
    }, []);

    const displayedData = showAll ? info : info.slice(0, 6);

    return (
        <div className='py-8'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Our Best Lawyers</h1>
                <p className='py-8'>
                Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {displayedData.map((data, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow overflow-hidden border border-gray-200"
                    >
                        <div className="flex">
                            <img
                                className="w-24 h-24 object-cover rounded-2xl mx-10 my-10"
                                src={data.image}
                                alt={data.name}
                            />
                            <div className="p-4 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                                            {data.specialty}
                                        </span>
                                        <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                                            {data.experience}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{data.name}</h3>

                                    {/* Education (first line only) */}
                                    <p className="text-sm text-gray-600 mb-2">
                                        {data.education[0]?.degree} - {data.education[0]?.institution}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <span className="text-xl">#</span>
                                        <span>{data.registration_number}</span>
                                    </div>
                                </div>

                                <div className="mt-4">
                                  <Link to={`/lawyer-details/${data.registration_number}`}>
                                  
                                  <button className="w-full text-blue-600 border border-blue-600 font-medium py-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
                                        View Details
                                    </button>
                                    </Link>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            { (
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowAll(true)}
                        className="btn bg-green-600 text-white px-12 py-4 rounded-full hover:bg-green-700"
                    >
                        Show All
                    </button>
                </div>
            )}
        </div>
    );
};

export default Component;
