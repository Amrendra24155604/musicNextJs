"use client";
import { p } from 'motion/react-client';
import React from 'react'
import courseData from "../../data/music_courses.json"
import Link from 'next/link';
import { Button } from './Moving-border';
import { BackgroundGradient } from './Background-gradient';
interface Course{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course:Course)=> course.isFeatured)

    return (
       <div className='py-12 bg-gray-900'>
            <div>
                <div className="text-center">
                    <h2 className='text-base uppercase text-teal-600 font-semibold tracking-wide'>Featured Courses</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the Best</p>
                </div>
            </div>
            <div className='mt-10 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {featuredCourses.map((course:Course)=>(
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient
                            className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                    <p className='text-lg sm:text-xl  font-semibold text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                    <Link href={`/courses/${course.slug}`} className='mt-2.5'>
                                       <button className='px-4 py-2  rounded-lg bg-white text-black'>
                                        Learn More
                                       </button>
                                 </Link   >
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-20 text-center'>
            <Button className='bg-black'>
                <Link href={"/courses"}>View All Courses</Link>
            </Button>
                
            </div>
       </div>
    )
}

export default FeaturedCourses
