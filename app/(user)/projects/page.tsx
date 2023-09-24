import Projects from '@/components/Projects/Projects'
import Pageheader from '@/constants/Pageheader'
import { projectQuery } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanityFetch';
import { ProjectProps } from '@/typings';
import React from 'react'

export const metadata = {
  title: 'Projets | Our Projects',
  description: 'Some of the projects we have been working with',
}
export default async function page  () {
  const project = await sanityFetch<ProjectProps[]>({ query: projectQuery });
  console.log("Project: ", project)
  return (
    <div>
        <Pageheader title='projects'/>
        <Projects project={project}/>

    </div>
  )
}
