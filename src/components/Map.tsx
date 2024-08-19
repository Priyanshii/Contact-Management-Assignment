import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import { useCovidCountryData } from '../services/covidData.query';

// Configure Leaflet icon
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Define the type for country data
interface CountryData {
    country: string;
    countryInfo: {
        lat: number;
        long: number;
    };
    active: number;
    recovered: number;
    deaths: number;
}

const Map: React.FC = () => {
    // Default center position (can be updated based on data)
    const position: LatLngExpression = [21, 78];

    // Fetch data using custom hook
    const { data, isLoading, error } = useCovidCountryData();

    // if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {error.message}</div>;

    return (
        <div className='w-[100%] md:w-[90%] lg:w-[70%]'>
            <h3 className='my-4 text-center text-xl text-gray-600 font-medium'>Below Map shows COVID-19 Cases around different countries</h3>
            <MapContainer center={position} zoom={3} scrollWheelZoom={false} className="w-full h-96 md:h-[500px] relative z-[1]">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data?.map((country: CountryData, index: number) => (
                    <Marker
                        key={index}
                        position={[country.countryInfo.lat, country.countryInfo.long]}
                        title={country.country}
                    >
                        <Popup>
                            <h6 className='font-semibold text-center mb-2'>{country.country}</h6>
                            <div>Active cases: {country.active}</div>
                            <div>Recovered cases: {country.recovered}</div>
                            <div>Total deaths: {country.deaths}</div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;