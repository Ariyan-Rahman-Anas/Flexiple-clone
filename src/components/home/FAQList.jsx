"use client"

import ApiSpinner from "@/app/ApiSpinner";
import { useEffect, useState } from "react"
import { ChevronDownIcon } from "lucide-react";

const FAQList = () => {

    const [isOpen, setIsOpen] = useState(null);
    const toggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
    };
    const [FAQs, setFAQs] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFAQs() {
            try {
                const response = await fetch("/api/faq/list")
                const data = await response.json()
                setFAQs(data.faqs)
            } catch (error) {
                console.error("Error fetching faqs:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchFAQs()
    }, [])

    if (loading) return <ApiSpinner />;

    return (
        <div>
            <div className="w-full rounded-lg g-white">
                {FAQs.map(({ question, answer }, idx) => (
                    <div key={idx} className="pb4 borderb border-gray-500/50 py3 last-of-type:border-b-0">
                        <button onClick={() => toggle(idx)} className="flex h-full w-full items-center justify-between font-medium text-white outline-none">
                            <span className="hover:underline text-2xl font-semibold ">{question}</span>
                            <ChevronDownIcon className={`${isOpen === idx ? "rotate-180" : "rotate-0 "} duration-500 `} />
                        </button>
                        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-3' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden pr-4 text-xl">{answer}</div>
                        </div>
                        <hr className="border-[0.09rem] border-gray-600 rounded-full my-6"/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default FAQList