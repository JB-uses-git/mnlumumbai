import React, { memo } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import './BoardOfDirectors.css'

const bodMembers = [
    { id: 1, name: 'Jalad', image: 'https://placehold.co/400', title: 'Board Member', initials: 'D1' },
    { id: 2, name: 'Director Name 2', image: 'https://placehold.co/400', title: 'Board Member', initials: 'D2' },
    { id: 3, name: 'Director Name 3', image: 'https://placehold.co/400', title: 'Board Member', initials: 'D3' },
    { id: 4, name: 'Director Name 4', image: 'https://placehold.co/400', title: 'Board Member', initials: 'D4' },
    { id: 5, name: 'Director Name 5', image: 'https://placehold.co/400', title: 'Board Member', initials: 'D5' },
    { id: 6, name: 'Director Name 6', image: 'https://placehold.co/400', title: 'Board Member', initials: 'D6' },
]

const ScrollingRow = ({ people, reverse = false }) => {
    const duplicatedPeople = [...people, ...people, ...people] // Triple strictly to ensure smooth infinite scroll on wide screens

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

const BoardOfDirectors = memo(() => {
    return (
        <section className="section bod" id="bod" style={{ background: 'var(--page-bg)' }}>
            <div className="container">
                <h2 className="section-title">Board of Directors</h2>
                <p className="section-subtitle">
                    Meet our distinguished Board of Directors
                </p>

                <div className="space-y-6 overflow-hidden">
                    <ScrollingRow people={bodMembers} />
                    {/* <ScrollingRow people={bodMembers} reverse /> */}
                    {/* Duplicating row for effect if needed, but 1 row might be enough for 3-6 members. 
              If user wants 'grid' replacement, maybe just one row or two. 
              I found 6 placeholders. I'll split them if I had more. 
              For now just one lively row or two identical ones moving opposite. */}
                    <ScrollingRow people={bodMembers} reverse />
                </div>
            </div>
        </section>
    )
})

export default BoardOfDirectors
