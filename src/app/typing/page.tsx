"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 임시 샘플 텍스트 데이터
const sampleTexts = [
  "좋은 책은 인류의 귀중한 보물이다. - 영원히 시들지 않는 생명의 꽃이다.",
  "당신이 할 수 있다고 믿으면 절반은 이미 된 것이나 다름 없다.",
  "삶이 있는 한 희망은 있다. 해가 뜨지 않을 것 같은 긴 밤도 언젠가는 끝이 나고 새벽은 오게 되어 있다.",
  "모든 시작은 미약하나 끝은 창대하리라. 오늘도 키보드의 타건 소리가 아름답게 울려 퍼지길.",
  "기계식 키보드의 매력은 타건의 즐거움과 소리에 있다. 오늘도 즐거운 타이핑을.",
];

export default function TypingPage() {
  const [currentText, setCurrentText] = useState("");
  const [typedText, setTypedText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  
  const inputRef = useRef<HTMLInputElement>(null);

  // 랜덤 텍스트 선택
  useEffect(() => {
    getRandomText();
  }, []);

  // 텍스트 입력 처리
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTypedText(value);

    // 처음 타이핑 시작할 때 시간 측정
    if (value.length === 1 && !startTime) {
      setStartTime(Date.now());
    }

    // 타이핑 완료 확인
    if (value === currentText) {
      setEndTime(Date.now());
      setIsCompleted(true);
    }
  };

  // 새로운 랜덤 텍스트 가져오기
  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * sampleTexts.length);
    setCurrentText(sampleTexts[randomIndex]);
    setTypedText("");
    setIsCompleted(false);
    setStartTime(null);
    setEndTime(null);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  // 타이핑 속도 계산
  const calculateSpeed = () => {
    if (startTime && endTime) {
      const timeInSeconds = (endTime - startTime) / 1000;
      const wordsCount = currentText.split(" ").length;
      const wpm = Math.round((wordsCount / timeInSeconds) * 60);
      return wpm;
    }
    return 0;
  };

  // 텍스트 하이라이팅
  const renderText = () => {
    const textArray = currentText.split("").map((char, index) => {
      let className = "text-muted-foreground"; // 아직 타이핑 안 됨
      
      if (index < typedText.length) {
        className = typedText[index] === char ? "text-primary font-semibold" : "text-destructive font-semibold";
      }
      
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
    
    return textArray;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-3xl font-bold">타이핑 연습</h1>
      
      <Card className="mx-auto mb-6 max-w-3xl">
        <CardContent className="p-6">
          <div className="mb-6 rounded-lg bg-muted p-6 font-mono text-lg leading-relaxed">
            {renderText()}
          </div>
          
          <input
            ref={inputRef}
            type="text"
            value={typedText}
            onChange={handleInput}
            disabled={isCompleted}
            className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="텍스트를 입력하세요"
            autoFocus
          />
          
          {isCompleted && (
            <div className="mt-4 text-center">
              <p className="mb-2 text-green-600 dark:text-green-400">완료했습니다!</p>
              <p className="text-lg font-semibold">
                타이핑 속도: {calculateSpeed()} WPM
              </p>
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="flex justify-center gap-4">
        <Button onClick={getRandomText} className="px-6">
          {isCompleted ? "다시 시작" : "다른 텍스트"}
        </Button>
      </div>
    </div>
  );
} 