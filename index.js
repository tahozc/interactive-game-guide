
const introData = {
  "title": "Welcome to the Interactive WoW Guide",
  "description": "Enhance your raiding skills with our comprehensive guide to boss encounters.",
  "features": [
    {
      "title": "Precise Boss Encounter Strategies",
      "description": "Learn the intricacies of each boss encounter, including mechanics, positioning, and roles."
    },
    {
      "title": "Role-specific Guidance",
      "description": "Discover the key responsibilities and actions for tanks, healers, and damage dealers."
    },
    {
      "title": "Visuals and Media",
      "description": "Immerse yourself in boss encounter details with annotated maps, videos, and animations."
    },
    {
      "title": "Tips and Troubleshooting",
      "description": "Get expert tips, tricks, and troubleshooting advice for a successful raiding experience."
    },
    {
      "title": "Track Your Progress",
      "description": "Mark your achievements and track your progress as you conquer each boss encounter."
    }
  ]
};


const introTitle = document.getElementById('introTitle');
const introDescription = document.getElementById('introDescription');
introTitle.textContent = introData.title;
introDescription.textContent = introData.description;


const featuresContainer = document.getElementById('featuresContainer');


introData.features.forEach(feature => {
  const featureElement = document.createElement('div');
  featureElement.classList.add('feature');

  const titleElement = document.createElement('h2');
  titleElement.textContent = feature.title;
  featureElement.appendChild(titleElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = feature.description;
  featureElement.appendChild(descriptionElement);

  featuresContainer.appendChild(featureElement);
});

const signUpButton = document.createElement('button');
signUpButton.textContent = 'Sign Up';
signUpButton.classList.add('button');

signUpButton.addEventListener('click', () => {
  window.location.href = 'sign-up.html';
});

featuresContainer.appendChild(signUpButton);

const funButton = document.createElement('button');
funButton.textContent = 'Fun';
funButton.classList.add('fun-button');

funButton.addEventListener('click', () => {
  alert('What does my dad have in common with Nemo? They both can\'t be found.');
});

featuresContainer.appendChild(funButton);
