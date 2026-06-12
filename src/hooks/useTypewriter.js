import { useState, useEffect } from 'react';

export function useTypewriter(words, speed = 80, deleteSpeed = 45, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, deleteSpeed);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [words, wordIdx, charIdx, deleting, speed, deleteSpeed, pause]);

  return text;
}
