"use client";

import { useEffect, useState } from "react";

type TypingWordsProps = {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
};

export default function TypingWords({
  words,
  className,
  typingSpeed = 105,
  deletingSpeed = 65,
  pauseMs = 1650,
}: TypingWordsProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) {
      return;
    }

    const currentWord = words[wordIndex] ?? "";
    const isComplete = displayText === currentWord;
    const isEmpty = displayText.length === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && !isComplete) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          return;
        }

        if (!isDeleting && isComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && !isEmpty) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
          return;
        }

        setIsDeleting(false);
        setWordIndex((previous) => (previous + 1) % words.length);
      },
      !isDeleting && isComplete ? pauseMs : isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => window.clearTimeout(timeout);
  }, [deletingSpeed, displayText, isDeleting, pauseMs, typingSpeed, wordIndex, words]);

  return (
    <span className={className}>
      {displayText}
      <span className="ml-1 inline-block h-[0.95em] w-[2px] rounded-full bg-current align-[-0.08em] opacity-80 animate-[pulse_1.4s_ease-in-out_infinite]" />
    </span>
  );
}
