"use client"

import { div } from 'motion/react-client'
import React from 'react'
import { Button } from './ui/Moving-border'
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";


 const featuredWebinars = [
    {
        id:1,
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
        id:2,
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
        id:3,
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
        id:4,
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
        id:5,
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
        id:6,
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];


function UpcomingWebinars() {

    return (
        <div className='p-12 bg-gray-900'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className="text-center">
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance your Musical Journey</p>
                </div>
                <div className="mt-10">
                    <HoverEffect  items={featuredWebinars.map(webinar=>(
                        {
                            key:webinar.id,
                            title:webinar.title,
                            description:webinar.description,
                            link:'/courses'
                        }
                    ))}/>
                </div>
                <div className="mt-10 text-center">
                    <Button className='bg-gray-800 hover:bg-gray-900'>
                        <Link href={'/courses'}>Upcoming Webinars</Link>
                    </Button>
                </div>
            </div>
            </div>
    )
}

export default UpcomingWebinars
