import React from 'react'

import Article from '../partials/Article';

const SectionFour = () => {
    const data = [
        {
            title: 'Free, open, simple',
            body: 'Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.'
        },
        {
            title: 'Powerful tooling',
            body: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
        }
    ]

  return (
    <section className="px-14 py-12 bg-svg4 min-h-[800px] md:mt-[12rem] mb-20">
        <div className="content flex md:flex-row flex-col justify-center gap-72 items-center mt-[2rem] mr-[-10rem] md:mr-0 px-24 md:px-0">
          <section className="md:w-[50%] w-full flex flex-col gap-24 py-7 mr-[-10rem] text-center md:text-left ml-5 px-32 justify-center items-center
          mt-[15rem] md:mt-0
          ">
            {data.map((item, index) => (
                <Article key={index} title={item.title} body={item.body} color='gray-dark' />
            ))}
          </section>
        </div>
    </section>
  );
}

export default SectionFour