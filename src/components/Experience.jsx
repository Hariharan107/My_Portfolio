import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { sectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
const ExperinceCard = ({ title, company_name, icon, iconBg, date, points }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #1d1836" }}
      date={date}
      iconStyle={{ background: iconBg, color: "#fff" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={icon}
            alt={company_name}
            className=' w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div className=''>
        <h3 className='text-white text-[24px] font-bold'>{title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{
            margin: 0,
          }}
        >
          {company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {points.map((point, index) => (
          <li
            key={`experience-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Journey</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperinceCard
              index={index}
              key={experience.title}
              {...experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default sectionWrapper(Experience, "work");
