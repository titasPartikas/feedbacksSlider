const feedbacksContainer = document.querySelector(".feedback-container");

export const constructFeedbackCard = (feedback) => {
    const feedbackContainer = document.createElement("div");
    const profilePictureImg = document.createElement("img");
    const fullNameParagraph = document.createElement("p");
    const review = document.createElement("p");
  
    feedbackContainer.classList.add("feedback", "hidden");
    profilePictureImg.src = feedback.profilePicture;
    fullNameParagraph.textContent = `${feedback.firstName} ${feedback.lastName}`;
    review.textContent = feedback.review;
  
    feedbackContainer.append(profilePictureImg, fullNameParagraph, review);
  
    feedbacksContainer.append(feedbackContainer);
  };