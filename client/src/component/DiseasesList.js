import React from 'react';

const diseases = [
  { name: 'Flu', doctor: 'Dr. Smith', image: 'https://via.placeholder.com/100' },
  { name: 'Diabetes', doctor: 'Dr. Johnson', image: 'https://via.placeholder.com/100' },
  { name: 'Hypertension', doctor: 'Dr. Lee', image: 'https://via.placeholder.com/100' },
];

const DiseaseList = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">List of Diseases</h2>
      <ul className="space-y-4">
        {diseases.map((disease, index) => (
          <li key={index} className="flex items-center space-x-4">
            <img src={disease.image} alt={disease.name} className="w-16 h-16" />
            <div>
              <h3 className="text-lg">{disease.name}</h3>
              <p className="text-gray-600">Doctor: {disease.doctor}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiseaseList;
