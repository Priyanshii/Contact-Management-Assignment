import React from "react";

interface DashboardCardProps {
    title: string;
    count: number;
}

const DashboardCasesCard: React.FC<DashboardCardProps> = ({ title, count }) => {
    return (
        <div className="flex-1 min-w-[300px] flex flex-col gap-4 rounded-lg bg-white p-4 shadow-md transition-all delay-100 duration-300 ease-linear hover:scale-105 hover:cursor-pointer">
            <div className="uppercase text-gray-600 text-base font-semibold whitespace-nowrap">{title}</div>
            <div className="text-xl font-medium text-cyan-600">
                {count}
            </div>
        </div>
    );
};

export default DashboardCasesCard;