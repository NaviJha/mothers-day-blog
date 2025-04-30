import { useRouter } from "next/router";

const storyData = [
  {
    id: 1,
    title: "A Mother’s Strength",
    content: `
From the moment I opened my eyes, she was there — unwavering, enduring, and strong.

My mother worked two jobs to make ends meet, often coming home exhausted, her hands raw and her feet sore. Yet she always managed a smile, a warm meal, and a soft goodnight hug. She bore her struggles in silence, so I could live in peace.

She wasn’t just strong in the physical sense — her real strength was in her heart. She carried our family through hard winters and harder losses, never letting us see the weight she bore. I remember the way she held my hand at the hospital when my younger brother was sick, whispering to me that everything would be okay even though I saw the fear in her eyes.

Now that I’m older, I see her sacrifices for what they truly were — acts of deep, unconditional love. She never asked for recognition, just that we grow up kind and whole. Her strength wasn’t loud or flashy — it was quiet, constant, and resilient.

To the woman who gave everything without asking for anything in return — this tribute is for you. You are, and always will be, my greatest inspiration.
    `,
  },
  {
    id: 2,
    title: "Lessons from Mom",
    content: `
My mom didn’t teach me from books — she taught me from life.

She taught me that kindness is strength, and that forgiveness is a gift we give ourselves. She taught me that when you fall, you don’t just get up — you rise with more courage than you had before. Her words weren’t lectures — they were stories, spoken over simmering pots of food and quiet evening walks.

One day, I came home crying after failing a math test. I expected disappointment. Instead, she handed me a piece of mango and said, “You’re not a grade. You’re a whole person. Let’s figure it out together.” That moment shifted something in me forever.

Later in life, when I lost my job, it was her calm voice that reminded me of my worth. “Your value,” she said, “is not tied to what you do. It's tied to who you are.”

The older I get, the more I realize she planted seeds of wisdom in every conversation. And they keep blooming — in how I parent, how I work, how I love.

She was my first teacher, and in so many ways, she still is.
    `,
  },
  {
    id: 3,
    title: "Mom’s Secret Recipes",
    content: `
Some say love is an emotion. I say it’s a flavor — and my mom knew the recipe.

Our tiny kitchen was her sanctuary. She didn’t follow cookbooks; she followed instinct. A pinch of salt, a flick of turmeric, a long stare out the window as she stirred the pot — her cooking was storytelling.

Every Sunday, she made her famous lentil stew, the one that hugged your insides and made you believe everything was going to be okay. When I moved away for college, she packed jars of homemade pickles and hand-written instructions — each one ending with “Add love generously.”

I never realized how healing her food was until I tried to recreate it on my own. Mine tasted close — but it always missed something. Her presence, perhaps. Her rhythm. Her energy.

Now I cook those same recipes for my children. And when the aroma fills our home, I see her — standing in my kitchen, smiling knowingly.

She’s gone now, but her recipes remain. Not just for food — but for life: patience, balance, creativity, and love. Always, love.
    `,
  },
];

export default function StoryDetail() {
  const router = useRouter();
  const { id } = router.query;
  const story = storyData.find((s) => s.id === parseInt(id));

  if (!story) {
    return <p className="p-6">Loading story...</p>;
  }

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 p-6">
      <h1 className="text-2xl font-bold mb-4">{story.title}</h1>
      <div className="whitespace-pre-line text-lg leading-relaxed text-gray-700">
        {story.content}
      </div>
      <button
        onClick={() => router.back()}
        className="mt-6 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
      >
        ← Go Back
      </button>
    </div>
  );
}
