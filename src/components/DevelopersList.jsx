"use client";

import ApiSpinner from "@/app/ApiSpinner";
import { ArrowRight, Briefcase, Calendar, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function DevelopersList() {
    const [developers, setDevelopers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDevelopers() {
            try {
                const response = await fetch("/api/developers/list");
                const data = await response.json();
                setDevelopers(data.developers);
            } catch (error) {
                console.error("Error fetching developers:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchDevelopers();
    }, []);

    if (loading) return <ApiSpinner />;

    return (
        <div className="space-y-8">
            {developers.map(({ name, experience, noticePeriod, currentCTC, experiences, userSkills }, idx) => (
                <div key={idx}
                    className="rounded-lg border border-gray-400 p-6 space-y-8 "
                >
                    <h1 className="text-4xl font-medium">{name}</h1>
                    <div className="space-y-2">
                        <div className="flex flex-col md:flex-row md:items-center justify-start gap-2 md:gap-8">
                            <div className="flex items-center gap-1 text-gray-300">
                                <Briefcase color="white" size={18} />
                                <p>Experience:</p>
                                <span>{experience}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-300">
                                <Calendar color="white" size={18} />
                                <p>Notice:</p>
                                <span>{noticePeriod}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-300">
                                <DollarSign color="white" size={18} />
                                <p>Current CTC:</p>
                                <span>{currentCTC}</span>
                            </div>
                        </div>
                        <hr className="border-[0.001rem] border-gray-500 rounded-full " />
                    </div>
                    <div className="flex flex-col  gap-y-2">
                        <h4 className="text-gray-300 text-lg font-medium">Worked at:</h4>
                        {experiences.map(({ role, companyName, startDate, endDate, duration }, idx) => (
                            <div key={idx} className="flex items-center text-gray-300">
                                <div className="flex items-center gap-4 justify-between w-full ">
                                    <div className="flex items-center gap-6">
                                        <div className="bg-black h-16 w-16 rounded-lg flex items-center justify-center ">
                                            <h5 className="text-4xl text-white font-medium ">{companyName.charAt(0)}</h5>
                                        </div>
                                        <div>
                                            <h6 className="text-xl font-semibold text-white">{companyName}</h6>
                                            <p className="text-gray-300 text-lg">{role}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p>{startDate.slice(0, 10)} - {endDate.slice(0, 10)}</p>
                                        <p>{duration} months</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        {
                            userSkills.map(({ skill: { name } }, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-gray-300">
                                    <p className="border rounded-full px-6 py-1.5" >{name}</p>
                                </div>
                            ))
                        }
                    </div>
                    <Button className="w-full bg-[#750ce7] hover:bg-[#560ba6] text-lg font-semibold h-12 ">Get a Quote <ArrowRight strokeWidth={4} size={40} /> </Button>
                </div>
            ))}
        </div>
    );
}