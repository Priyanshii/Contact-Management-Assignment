import React from 'react'
import LineChart from '../components/LineChart'
import Map from '../components/Map'
import CovidCasesData from '../components/CovidCasesData'

const Dashboard = () => {
    return (
        <div className='pt-6 w-full flex flex-col gap-16 items-center justify-center'>
            <CovidCasesData />
            <LineChart />
            <Map />
        </div>
    )
}

export default Dashboard;

