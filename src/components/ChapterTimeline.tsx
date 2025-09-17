"use client";
import Image from "next/image";
import { ChapterTimelineProps } from '../types';

// Chapter Timeline Component
export default function ChapterTimeline({ currentModule }: ChapterTimelineProps): React.JSX.Element {
  return (
    <div className="timeline-container">
      {currentModule.chapters.map((chapter, index) => {
        const stepNumber = index + 1;

        return (
          <div key={`${currentModule.id}-${chapter.id}-${index}`} className={`single-learning-path step-${stepNumber}`}>
            <div
              className="learning-thumbnail"
              style={{ '--progress-percentage': `${chapter.progressPercentage}%` } as React.CSSProperties}
            >
              <Image
                src={chapter.image}
                className="rounded-full"
                alt={`Chapter ${stepNumber}`}
                width={145}
                height={145}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}