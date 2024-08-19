import { useQuery } from '@tanstack/react-query';
import { getCovidHistoricalData, getCovidCountryData, getCovidWorldData } from './api';

export const useCovidCountryData = () => {
    return useQuery({
        queryKey: ['covidCasesByCountry'],
        queryFn: getCovidCountryData,
    });
};

export const useCovidHistoricalData = () => {
    return useQuery({
        queryKey: ['covidHistoricalData'],
        queryFn: getCovidHistoricalData,
    });
};

export const useCovidWorldData = () => {
    return useQuery({
        queryKey: ['covidWorldData'],
        queryFn: getCovidWorldData,
    });
};