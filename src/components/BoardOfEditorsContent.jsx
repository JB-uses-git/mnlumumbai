import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import InteractiveHoverButton from './ui/interactive-hover-button'
import './BoardOfEditorsContent.css'

// Helper to generate initials
const getInitials = (name) => {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
}

// Data Definition
const peerReviewers = [
    { name: 'Aastha ma’am', title: 'Peer Review' },
    { name: 'Suraj sir', title: 'Peer Review' },
]

const eicMembers = [
    { name: 'Om', title: 'Editor-in-Chief' },
    { name: 'Revant', title: 'Editor-in-Chief' },
]

const advisors = [
    { name: 'Yashvardhan', title: 'Advisor' },
    { name: 'Parth', title: 'Advisor' },
]

const managingEditors = [
    { name: 'Rashi', title: 'Managing Editor' },
    { name: 'Radhika', title: 'Managing Editor' },
]

const contentEditors = [
    { name: 'Hrudya', title: 'Content Editor' },
    { name: 'Rashi', title: 'Content Editor' },
    { name: 'Radhika', title: 'Content Editor' },
    { name: 'Astha', title: 'Content Editor' },
    { name: 'Sanskar', title: 'Content Editor' },
]

const technicalEditors = [
    { name: 'Yashika', title: 'Technical Editor' },
    { name: 'Rishit', title: 'Technical Editor' },
    { name: 'Rajnandini', title: 'Technical Editor' },
    { name: 'Anamika', title: 'Technical Editor' },
    { name: 'Shubhi', title: 'Technical Editor' },
    { name: 'Madhura', title: 'Technical Editor' },
    { name: 'Divija', title: 'Technical Editor' },
    { name: 'Vaishnavi', title: 'Technical Editor' },
    { name: 'Siddhi B.', title: 'Technical Editor' },
]

const ScrollingRow = ({ people, reverse = false }) => {
    // Ensure we have enough items for smooth scrolling by repeating the list
    // Aim for a minimum number of items (e.g., 15) to cover wide screens
    let duplicatedPeople = [...people]
    while (duplicatedPeople.length < 15) {
        duplicatedPeople = [...duplicatedPeople, ...people]
    }
    // Add one more triple strict set for good measure to ensure no gaps during loop reset
    duplicatedPeople = [...duplicatedPeople, ...duplicatedPeople]

    return (
        <div className="relative overflow-hidden w-full">
            <div
                className={`flex gap-3 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'} hover:pause-scroll`}
                style={{
                    width: 'fit-content'
                }}
            >
                {duplicatedPeople.map((person, index) => (
                    <div
                        key={`${person.name}-${index}`}
                        className="flex items-center gap-3 px-5 py-2 rounded-xl bg-white border border-secondary shadow-sm hover:shadow-md transition-all duration-300 min-w-[240px]"
                    >
                        <Avatar className="h-10 w-10 border-2 border-secondary">
                            <AvatarFallback className="bg-secondary text-primary font-semibold text-xs">
                                {getInitials(person.name)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col text-justify">
                            <span className="text-primary font-medium text-sm whitespace-nowrap">
                                {person.name}
                            </span>
                            <span className="text-xs text-gray-500 italic">
                                {person.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const BoardOfEditorsContent = memo(() => {
    const navigate = useNavigate()

    return (
        <div className="board-of-editors-content" id="board-of-editors-content" style={{ marginTop: '3rem' }}>
            <h3 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1rem', textAlign: 'center' }}>Board of Editors</h3>


            <div className="space-y-6 overflow-hidden">
                <ScrollingRow people={peerReviewers} />
                <ScrollingRow people={eicMembers} reverse />
                <ScrollingRow people={advisors} />
                <ScrollingRow people={managingEditors} reverse />
                <ScrollingRow people={contentEditors} />
                <ScrollingRow people={technicalEditors} reverse />
            </div>

            <div className="flex justify-center mt-8">
                <InteractiveHoverButton
                    className="btn btn-primary"
                    onClick={() => navigate('/board-of-editors')}
                >
                    Editors
                </InteractiveHoverButton>
            </div>
        </div>
    )
})

export default BoardOfEditorsContent
