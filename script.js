const facts = [
    "I have honed my archery skills, making me proficient in this ancient and precise sport.",
    "I have a fondness for dogs, indicating a compassionate and caring nature.",
    "At 25 years old, I am in a vibrant stage of life, exploring various personal and professional opportunities.",
    "I enjoy staying active and engaging in physical activities that require concentration and skill.",
    "I possess a balanced personality that appreciates both the thrill of sport and the warmth of companionship."
];

document.getElementById('generateFactBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
});
