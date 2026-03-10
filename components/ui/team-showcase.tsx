"use client";

import { useState } from 'react';
import { Linkedin, Twitter, Instagram, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    social?: {
        twitter?: string;
        linkedin?: string;
        instagram?: string;
        behance?: string;
    };
}

const DEFAULT_MEMBERS: TeamMember[] = [
    {
        id: '1',
        name: 'Sarah Davis',
        role: 'PRESIDENT',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
        social: { twitter: '#', linkedin: '#', behance: '#' },
    },
    {
        id: '2',
        name: 'Michael Brown',
        role: 'CHIEF ENGINEER',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
        social: { twitter: '#', linkedin: '#' },
    },
    {
        id: '3',
        name: 'Emily Chen',
        role: 'AVIONICS LEAD',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
        social: { twitter: '#', linkedin: '#' },
    },
    {
        id: '4',
        name: 'James Wilson',
        role: 'PROPULSION LEAD',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
        social: { linkedin: '#' },
    },
    {
        id: '5',
        name: 'Alex Johnson',
        role: 'RECOVERY LEAD',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
        social: { twitter: '#', linkedin: '#' },
    },
    {
        id: '6',
        name: 'David Kim',
        role: 'BUSINESS LEAD',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
        social: { instagram: '#' } as TeamMember['social'],
    },
];

interface TeamShowcaseProps {
    members?: TeamMember[];
}

export default function TeamShowcase({ members = DEFAULT_MEMBERS }: TeamShowcaseProps) {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const col1 = members.filter((_, i) => i % 3 === 0);
    const col2 = members.filter((_, i) => i % 3 === 1);
    const col3 = members.filter((_, i) => i % 3 === 2);

    return (
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-5xl mx-auto py-8 sm:px-4 font-sans text-white">
            {/* ── Left: photo grid ── */}
            <div className="flex gap-2 md:gap-3 flex-shrink-0 overflow-x-auto pb-1 md:pb-0 hide-scrollbar mask-image-fade">
                {/* Column 1 */}
                <div className="flex flex-col gap-2 md:gap-3">
                    {col1.map((member) => (
                        <PhotoCard
                            key={member.id}
                            member={member}
                            className="w-[110px] h-[120px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
                            hoveredId={hoveredId}
                            onHover={setHoveredId}
                        />
                    ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-2 md:gap-3 mt-[48px] sm:mt-[56px] md:mt-[68px]">
                    {col2.map((member) => (
                        <PhotoCard
                            key={member.id}
                            member={member}
                            className="w-[122px] h-[132px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]"
                            hoveredId={hoveredId}
                            onHover={setHoveredId}
                        />
                    ))}
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-2 md:gap-3 mt-[22px] sm:mt-[26px] md:mt-[32px]">
                    {col3.map((member) => (
                        <PhotoCard
                            key={member.id}
                            member={member}
                            className="w-[115px] h-[125px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]"
                            hoveredId={hoveredId}
                            onHover={setHoveredId}
                        />
                    ))}
                </div>
            </div>

            {/* ── Right: member name list*/}
            <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-5 pt-0 md:pt-2 flex-1 w-full mt-8 md:mt-0">
                {members.map((member) => (
                    <MemberRow
                        key={member.id}
                        member={member}
                        hoveredId={hoveredId}
                        onHover={setHoveredId}
                    />
                ))}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────
   Photo card 
───────────────────────────────────────── */

function PhotoCard({
    member,
    className,
    hoveredId,
    onHover,
}: {
    member: TeamMember;
    className: string;
    hoveredId: string | null;
    onHover: (id: string | null) => void;
}) {
    const isActive = hoveredId === member.id;
    const isDimmed = hoveredId !== null && !isActive;

    return (
        <div
            className={cn(
                'overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-500 border border-white/10 shadow-lg',
                className,
                isDimmed ? 'opacity-40' : 'opacity-100',
            )}
            onMouseEnter={() => onHover(member.id)}
            onMouseLeave={() => onHover(null)}
        >
            <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-[filter,transform] duration-700 hover:scale-105"
                style={{
                    filter: isActive ? 'grayscale(0) brightness(1.1)' : 'grayscale(0.8) brightness(0.7)',
                }}
            />
        </div>
    );
}

/* ─────────────────────────────────────────
   Member name section
───────────────────────────────────────── */

function MemberRow({
    member,
    hoveredId,
    onHover,
}: {
    member: TeamMember;
    hoveredId: string | null;
    onHover: (id: string | null) => void;
}) {
    const isActive = hoveredId === member.id;
    const isDimmed = hoveredId !== null && !isActive;
    const hasSocial = member.social?.twitter ?? member.social?.linkedin ?? member.social?.instagram ?? member.social?.behance;

    return (
        <div
            className={cn(
                'cursor-pointer transition-all duration-300 md:hover:-translate-y-0.5',
                isDimmed ? 'opacity-40' : 'opacity-100',
            )}
            onMouseEnter={() => onHover(member.id)}
            onMouseLeave={() => onHover(null)}
        >
            {/* Name + social*/}
            <div className="flex items-center gap-3">
                <span
                    className={cn(
                        'w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300',
                        isActive ? 'bg-red-500 w-6' : 'bg-red-900/50',
                    )}
                />
                <span
                    className={cn(
                        'text-lg md:text-[20px] font-semibold leading-none tracking-tight transition-colors duration-300',
                        isActive ? 'text-white' : 'text-zinc-300',
                    )}
                >
                    {member.name}
                </span>

                {/* Social icons */}
                {hasSocial && (
                    <div
                        className={cn(
                            'flex items-center gap-1.5 ml-2 transition-all duration-300',
                            isActive
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-4 pointer-events-none',
                        )}
                    >
                        {member.social?.twitter && (
                            <a
                                href={member.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                                title="X / Twitter"
                            >
                                <Twitter size={14} />
                            </a>
                        )}
                        {member.social?.linkedin && (
                            <a
                                href={member.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                                title="LinkedIn"
                            >
                                <Linkedin size={14} />
                            </a>
                        )}
                        {member.social?.instagram && (
                            <a
                                href={member.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                                title="Instagram"
                            >
                                <Instagram size={14} />
                            </a>
                        )}
                        {member.social?.behance && (
                            <a
                                href={member.social.behance}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                                title="Portfolio"
                            >
                                <Globe size={14} />
                            </a>
                        )}
                    </div>
                )}
            </div>

            {/* Role */}
            <p className="mt-2 pl-[36px] text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                {member.role}
            </p>
        </div>
    );
}
