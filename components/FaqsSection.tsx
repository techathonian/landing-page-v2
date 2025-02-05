"use client";
import React, { useState } from 'react';
import { FAQCOMPONENT } from '@/utils/data';
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import Faqbtn from './faqbtn';

const FaqsSection = () => {
  const [selected, setSelected] = useState(null);

  const toggleDown = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <div className="flex flex-col place-items-center gap-6">
      <div className="header text-center text-[24px]/[32px] font-[600] md:text-[40px]/[48px]">{FAQCOMPONENT.title}</div>

      <div className="faqs-ans flex flex-col lg:items-center  w-[340px] h-[472px] md:w-[712px] md:h-[384px] lg:w-[1200px] lg:h-[120px] divide-y divide-gray-400">
        {FAQCOMPONENT.questions.map((question, index) => {
          
          const answer = FAQCOMPONENT.answers.find((answer) => answer.id === question.id)?.answer;

          return (
            <div key={question.id} >
              <h1 className="flex justify-between items-center py-3 text-[16px]/[24px] md:text-[20px]/[28px] lg:w-[1142px]" onClick={() => toggleDown(index)}>{question.question}  <span className="block lg:hidden text-[24px]/[24px] md:text-[32px]/[32px]">{selected === index ?(<BiChevronUp />): (<BiChevronDown /> )}</span> <span className="hidden lg:block"> <Faqbtn/></span></h1>
              {selected === index && answer && (
                <div>{answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqsSection;
