import React, { useEffect, useRef, useState } from 'react';
import { HeadingSection, TestAbout, TestQuestionsList, TestResult } from '../components';
import { scrollToSection } from '../consts/consts';
import { QuestionType } from '../types/types';

const Test: React.FC = () => {
  const testSectionRef = useRef<HTMLDivElement>(null);
  const [questions, setQuestions] = useState<QuestionType[] | []>([])
  const [isLoading, setIsLoading] = useState(true)
  const fetchQuestions = async () => {
    try {
      const res = await fetch('http://localhost:5154/api/quiz?quizId=1');
      const data: QuestionType = await res.json();
      console.log(data);
      setQuestions(data.questions)
      setIsLoading(false)
    } catch (err) {
      console.error(err);
    } 
  }
  useEffect(() => {
    fetchQuestions()
  }, [])
  return (
    <>
      <HeadingSection scrollToSection={scrollToSection} eventSectionRef={testSectionRef} bgImage={'test-heading'} title={'Test diagnozujący'} />
      <TestAbout eventSectionRef={testSectionRef}/>
      <TestQuestionsList/>
      <TestResult/>
    </>
  );
};

export default Test;
