import React, { useEffect, useRef, useState } from 'react';
import { HeadingSection, TestAbout, TestQuestionsList, TestResult, TestSkeleton } from '../components';
import { scrollToSection } from '../consts/consts';
import { QuestionType, UserResult } from '../types/types';

const Test: React.FC = () => {
  const testSectionRef = useRef<HTMLDivElement>(null);
  const [quiz, setQuiz] = useState<QuestionType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isResult, setIsResult] = useState(false)
  const [userResult, setUserResult] = useState<UserResult | null>(null)

  const fetchQuestions = async () => {
    try {
      const res = await fetch('http://localhost:5154/api/quiz?quizId=1');
      const data: QuestionType = await res.json();
      setQuiz(data)
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
      { quiz !== null && !isLoading ? <TestQuestionsList setIsResult={setIsResult} quiz={quiz} setUserResult={setUserResult}/> : <TestSkeleton/>}
      {isResult && userResult && <TestResult quizName={quiz?.name} userResult={userResult}/>}
    </>
  );
};

export default Test;
