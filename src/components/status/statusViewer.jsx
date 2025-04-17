import { useState, useEffect } from "react";

export default function StatusViewer({ user, onClose }) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Handle story timer
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextStory();
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStoryIndex]);

  const nextStory = () => {
    if (currentStoryIndex < user.stories.length - 1) {
      setCurrentStoryIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const prevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prev) => prev - 1);
      setProgress(0);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50">
      <div className="flex gap-1 p-2.5">
        {user.stories.map((_, index) => (
          <div key={index} className="h-1 flex-1 bg-white/30 rounded-full">
            <div
              className="h-full bg-white rounded-full transition-all duration-50"
              style={{
                width: `${
                  index === currentStoryIndex
                    ? progress
                    : index < currentStoryIndex
                    ? 100
                    : 0
                }%`,
              }}
            />
          </div>
        ))}
      </div>

      <img
        src={user.stories[currentStoryIndex].image}
        alt="status"
        className="w-full h-[calc(100%-60px)] object-contain"
      />

      <div className="absolute inset-0 flex justify-between">
        <button
          onClick={prevStory}
          className="w-1/2 h-full cursor-default opacity-0 hover:opacity-20 transition-opacity"
        />
        <button
          onClick={nextStory}
          className="w-1/2 h-full cursor-default opacity-0 hover:opacity-20 transition-opacity"
        />
      </div>
    </div>
  );
}
