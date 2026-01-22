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
    { name: 'Ms. Aastha Tiwari', title: 'Peer Review', image: '/images/faculty/1728539134550.jpeg' },
    { name: 'Mr. Suraj Karande', title: 'Peer Review', image: '/images/faculty/1777.jpeg' },
]

const eicMembers = [
    { name: 'Om', title: 'Editor-in-Chief', image: '/images/calstar board/Om Chandak- ASSOCIATE CONVENOR.jpg' },
    { name: 'Revant', title: 'Editor-in-Chief', image: '/images/calstar board/Screenshot_20250913_180357 - Revant Sinha-M-P.jpg' },
]

const advisors = [
    { name: 'Yashvardhan', title: 'Advisor', image: '/images/calstar board/yashwardhan kshirsagar- CONVENOR.png' },
    { name: 'Parth', title: 'Advisor', image: null },
]

const managingEditors = [
    { name: 'Rashi', title: 'Managing Editor', image: '/images/calstar board/Rashi Nayak- HEAD- R.jpg' },
    { name: 'Radhika', title: 'Managing Editor', image: '/images/calstar board/RADHIKA AGRAWAL- HEAD- P.jpeg' },
]

const contentEditors = [
    { name: 'Hrudya', title: 'Content Editor', image: '/images/calstar board/pic - Ravi Hrudya-M-R.jpeg' },
    { name: 'Rashi', title: 'Content Editor', image: null }, // Assuming duplication or diff person, keeping null if not sure. Mentions "Rashi" in ME above.
    { name: 'Radhika', title: 'Content Editor', image: null }, // Same.
    { name: 'Astha', title: 'Content Editor', image: '/images/calstar board/ASTHA TAMGADE- H- PR.jpeg' },
    { name: 'Sanskar', title: 'Content Editor', image: '/images/calstar board/Sanskar Chandak- M- R.jpeg' },
]

const technicalEditors = [
    { name: 'Yashika', title: 'Technical Editor', image: '/images/calstar board/YASHIKA PARASWANI- M- P.jpg' },
    { name: 'Rishith', title: 'Technical Editor', image: '/images/calstar board/rgarg horse - RISHITH GARG- M- PR.png' },
    { name: 'Rajnandini', title: 'Technical Editor', image: '/images/calstar board/RAJNANDINI PAWAR- M- R.jpg' },
    { name: 'Anamika', title: 'Technical Editor', image: '/images/calstar board/semi formal phoro  - Anamika Jaiswal-M-R.jpg' },
    { name: 'Shubhi', title: 'Technical Editor', image: '/images/calstar board/Shubhi Gupta- M- R.jpg' },
    { name: 'Madhura', title: 'Technical Editor', image: '/images/calstar board/Madhura Vedang- M- R.jpg' },
    { name: 'Divija', title: 'Technical Editor', image: '/images/calstar board/Divija Manaktala- M- R.jpeg' },
    { name: 'Vaishnavi', title: 'Technical Editor', image: '/images/calstar board/Vaishnavi Tyagi- M-R.jpg' },
    { name: 'Siddhi B.', title: 'Technical Editor', image: '/images/calstar board/Siddhi Bhosale- M- P.jpg' },
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
                        <Avatar className="h-10 w-10 border-2 border-secondary overflow-hidden">
                            {person.image && <AvatarImage src={person.image} alt={person.name} className="object-cover w-full h-full" />}
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
