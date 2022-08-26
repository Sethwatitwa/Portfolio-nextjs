import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import starbucksImg from '../public/assets/projects/starbucks.jpg';
import pintrestimg from '../public/assets/projects/pintrestimg.webp'
import netflixImg from '../public/assets/projects/netflix.webp'
import airbnbImg from '../public/assets/projects/airbnb.webp'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#228B22]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Starbucks Clone'
            backgroundImg={starbucksImg}
            projectUrl='/property'
            tech='React JS'
          />
            <ProjectItem
            title='Netflix Clone'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Pintrest Clone'
            backgroundImg={pintrestimg}
            projectUrl='/crypto'
            tech='React JS'

          />
        
          <ProjectItem
            title='Airbnb UI'
            backgroundImg={airbnbImg}
            projectUrl='/twitch'
            tech='REACT JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
