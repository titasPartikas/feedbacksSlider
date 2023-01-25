import { feedbacks } from "./constants/feedbacks.js";
import { constructFeedbackCard } from './utils/constructFeedbackCard.js';

feedbacks.forEach(constructFeedbackCard);
let displayedFeedbackIndex = 0;

const displayFeedbacks = () => {
  const feedbackContainers = document.querySelectorAll(".feedback");
  feedbackContainers.forEach((feedback, index) => {
    index === displayedFeedbackIndex
      ? feedback.classList.remove("hidden")
      : feedback.classList.add("hidden");
  });

  displayedFeedbackIndex =
    displayedFeedbackIndex === feedbacks.length - 1
      ? 0
      : displayedFeedbackIndex + 1;

  setTimeout(displayFeedbacks, 3000);
};

displayFeedbacks();
