import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Seth | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Seth Watitwa</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/seth-watitwa-423654178/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Sethwatitwa'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>React JS
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
          </p>
          <p className='py-2'>
            <span className='font-bold'></span>
            <span className='px-2'></span>
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
           {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Axlepin</span>
            <span className='px-2'>|</span>Freelance Work
          </p>
          <p className='py-1 italic'></p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Collaborated with a team of software Engineers to organize and design
            and ensure functionality.
            </li>
            <li>
             Contributed to development of four commercial projects using Javascript and Node.
            </li>
            <li>
            Ensured comprehensive mobile responsive UI layouts with understanding of HTML,CSS and Javascript
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className=''>
            <span className='font-bold '>
            BIGCOMMERCE
            </span>
            <span className='px-2'>|</span>
            <span className='px-2'>Freelance Work </span>
          </p>
          
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
          
          </ul>
        </div>
        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className=''>
            <span className='font-bold'>Information Technology</span>
            <span className='px-2'>-</span>KCA UNIVERSITY
          </p>
          <p className='py-1 italic font-bold'>Relevant Courses</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Database management systems
            </li>
            <li>
              Object oriented and Design
            </li>
            <li>
              Computer organisation and architecture
            </li>
            <li>
             Network Security
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
         
          </p>
          <p className='py-1 italic font-bold'>Intrests </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Books
            </li>
            <li>
             Brain Storming
            </li>
          </ul>
        </div>
     
      </div>
    </>
  );
};

export default resume;
