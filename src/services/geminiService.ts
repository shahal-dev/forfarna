export async function generateCompliments(name: string): Promise<string[]> {
  // Sweet, cheesy, cat-themed compliments—no API needed
  const compliments = [
    `You're purr-fect, ${name}! 🐾`,
    "You're the whiskers on my kitten—I'm feline lucky to have you!",
    "You make my heart do the biggest zoomies in history!",
    "I love you to the moon and back, and every paw-step in between!",
    "You're my meow-tain of love—paws-itively amazing!",
  ];
  return Promise.resolve(compliments);
}
