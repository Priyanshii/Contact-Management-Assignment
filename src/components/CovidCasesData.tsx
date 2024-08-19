import React from 'react';
import { useCovidWorldData } from '../services/covidData.query';
import DashboardCasesCard from './DashboardCasesCard';

const CovidCasesData = () => {
    const { data, isLoading, error } = useCovidWorldData();
    return (
        <div className="flex w-auto flex-col items-center gap-4 rounded-lg p-8 shadow-lg bg-slate-100 ">
            <h1 className="text-2xl font-medium text-gray-700">
                Worldwide Covid Cases Stats
            </h1>
            <div className="flex flex-col items-center justify-normal gap-4 flex-wrap">
                <section className='flex flex-row items-center gap-4 flex-wrap'>
                    <DashboardCasesCard title="Total Cases" count={data?.cases} />
                    <DashboardCasesCard title="Affected Countries" count={data?.affectedCountries} />
                    <DashboardCasesCard title="Active Cases" count={data?.active} />
                </section>
                <section className='flex flex-row items-center gap-4 flex-wrap'>
                    <DashboardCasesCard title="Tests Taken" count={data?.tests} />
                    <DashboardCasesCard title="Recovered Cases" count={data?.recovered} />
                    <DashboardCasesCard title="Deaths" count={data?.deaths} />
                </section>
            </div>
        </div>
    )
}

export default CovidCasesData;
