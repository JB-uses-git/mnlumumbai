import React, { memo } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import './BoardOfEditorsSection.css'

const editorMembers = [
    { id: 1, name: 'Jalad', image: 'https://placehold.co/400', title: 'Editor', initials: 'E1' },
    { id: 2, name: 'Editor Name 2', image: 'https://placehold.co/400', title: 'Editor', initials: 'E2' },
    { id: 3, name: 'Editor Name 3', image: 'https://placehold.co/400', title: 'Editor', initials: 'E3' },
    { id: 4, name: 'Editor Name 4', image: 'https://placehold.co/400', title: 'Editor', initials: 'E4' },
    { id: 5, name: 'Editor Name 5', image: 'https://placehold.co/400', title: 'Editor', initials: 'E5' },
    { id: 6, name: 'Editor Name 6', image: 'https://placehold.co/400', title: 'Editor', initials: 'E6' },
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

const BoardOfEditorsSection = memo(() => {
    return (
        <section className="section board-of-editors-section" id="board-of-editors-section" style={{ background: 'var(--page-bg)' }}>
            <div className="container">
                <h2 className="section-title">Board of Editors</h2>
                <p className="section-subtitle">
                    Meet our distinguished Board of Editors
                </p>

                <div className="space-y-6 overflow-hidden">
                    <ScrollingRow people={editorMembers} />
                    {/* <ScrollingRow people={editorMembers} reverse /> */}
                    {/* Duplicating row for effect if needed, but 1 row might be enough for 3-6 members. 
              If user wants 'grid' replacement, maybe just one row or two. 
              I found 6 placeholders. I'll split them if I had more. 
              For now just one lively row or two identical ones moving opposite. */}
                    <ScrollingRow people={editorMembers} reverse />
                </div>
            </div>
        </section>
    )
})

export default BoardOfEditorsSection
