import React from "react";
import Article from "../partials/Article";

const SectionTwo = () => {

    const data = [
        {
            title: 'Introducing an extensible editor',
            body: 'Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.'
        },
        {
            title: 'Robust content management',
            body: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
        }
    ]

  return (
    <section className="px-14 py-12 bg-svg2 min-h-[800px]">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-gray-dark text-5xl font-medium">Designed for the future</h2>
        <div className="content flex flex-row justify-start items-center mt-[2rem]">
          <section className="w-[50%] flex flex-col gap-24 px-32 py-7">
            {data.map((item, index) => (
                <Article key={index} title={item.title} body={item.body} color='gray-dark' />
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
