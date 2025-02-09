"use client";
import React, { useState } from 'react';
import { FAQCOMPONENT } from '@/utils/data';
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import Faqbtn from './faqbtn';
import { motion } from 'framer-motion';


const FaqsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggleDown = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <motion.div 
    initial={{opacity: 0, scale: 0}}
    whileInView={{opacity: 1, scale: 1}}
    transition={{duration: 2}}
      className="flex place-items-center">
      <div className="flex flex-col gap-6 my-4">
      <div className="header text-center text-[24px]/[32px] font-[600] md:text-[40px]/[48px]">{FAQCOMPONENT.title}</div>

      <div className="faqs-ans flex flex-col lg:items-center  w-[340px] h-[472px] md:w-[712px] md:h-[384px] lg:w-[1200px] lg:h-[320px] divide-y divide-gray-400 ">
        {FAQCOMPONENT.questions.map((question, index: number) => {
          
          const answer = FAQCOMPONENT.answers.find((answer) => answer.id === question.id)?.answer;

          return (
            <div key={question.id} >
              <h1 key={index} className="last:border-b flex justify-between items-center py-3 text-[16px]/[24px] md:text-[20px]/[28px] lg:w-[1142px]" onClick={() => toggleDown(index)}>{question.question}  <span className="block lg:hidden text-[24px]/[24px] md:text-[32px]/[32px]">{selected === index ?(<BiChevronUp />): (<BiChevronDown /> )}</span> <span className="hidden lg:block"> <Faqbtn/></span></h1>
              {selected === index && answer && (
                <div className="last:border-b">{answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
    </motion.div>
  );
};

export default FaqsSection;
