import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import './ScrollingRow.css'

const ScrollingRow = ({ people, reverse = false }) => {
    // Triple strictly to ensure smooth infinite scroll on wide screens
    const duplicatedPeople = [...people, ...people, ...people]

    return (
        <div className="relative overflow-hidden w-full">
            <div
                className={`flex gap-6 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'} hover:pause-scroll`}
                style={{
                    width: 'fit-content'
                }}
            >
                {duplicatedPeople.map((person, index) => (
                    <div
                        key={`${person.id}-${index}`}
                        className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-secondary shadow-sm hover:shadow-md transition-all duration-300 min-w-[280px]"
                    >
                        <Avatar className="h-14 w-14 border-2 border-secondary">
                            <AvatarImage src={person.image} alt={person.name} />
                            <AvatarFallback className="bg-secondary text-primary font-semibold">
                                {person.initials}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col text-justify">
                            <span className="text-primary font-medium text-base whitespace-nowrap">
                                {person.name}
                            </span>
                            <span className="text-sm text-gray-500 italic">
                                {person.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScrollingRow
