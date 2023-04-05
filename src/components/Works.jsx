import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { sectionWrapper } from "../hoc";
import { styles } from "../style";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCards = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_demo_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div className="pr-2">
              <div
                onClick={() => window.open(website_demo_link, "_blank")}
                className='black-gradient w-10 h-10  rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src="https://media4.giphy.com/media/KecDcIs9qrqennrxGQ/giphy.gif?cid=6c09b9526po9xwvndjvn58tn20zx1t6ttehx8ng9tm1gmirk&rid=giphy.gif&ct=s"
                  alt='source code'
                  className='w-[32px] h-[29px] object-contain'
                />
              </div>
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>MY WORK</p>
        <h2 className={styles.sectionHeadText}>Projects!</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCards key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(Works, "work");
