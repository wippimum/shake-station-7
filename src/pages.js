// SHAKE STATION 7 — pages 1 to 5
const PAGES_A = [
{
  n: 1, unit: 0, cover: true,
  unitTitle: "ARRIVAL",
  title: "Shake Station 7",
  hook: "The ground you are standing on is moving right now.",
  art: "cover",
  artCaption: "Station 7 sits on the cliff. The sea is on one side. A fault line is on the other.",
  coverBody: `You have been posted to Shake Station 7.

It is a small hut on a cliff. Inside there is one desk, one machine that draws a wobbly line all day, and one scientist called Dr. Okonkwo who drinks tea out of a chipped mug.

She has been waiting for you.

"Good. You are here," she says. "I need four assistants and I have four. Sign the log. Then take this."

She hands you a metal case. It is locked with six numbers.

"Everything you really need is inside. I am not giving you the code. You will earn one number for every unit you finish. Get to the last page and the case opens. Skip pages and it stays shut forever."

She sips her tea.

"One more thing. The line on that machine has been quiet for eleven months. Nothing local, anyway. Keep an eye on it."`,
  oath: `I will guess before I am told.
I will write down what went wrong.
I will not pretend to understand something I do not.`,
  seismo: 0
},
{
  n: 2, unit: 1, unitTitle: "WHAT IS DOWN THERE",
  title: "A Planet With Skin",
  hook: "Dig straight down for 35 km and you fall out of the world you know.",
  predict: {
    text: "The hard rock we live on wraps all the way around the Earth. How thick do you think it is compared to the whole planet?",
    options: [
      "About one tenth of the way down to the centre",
      "About one hundredth of the way down",
      "Thinner, next to the whole Earth, than an eggshell is next to an egg"
    ],
    answer: 2,
    reveal: "Thinner than an eggshell. An eggshell is about 1 part in 150 of an egg. The Earth's crust is about 1 part in 400 of the Earth's full width. We live on the thinnest part of our own planet."
  },
  core: `Cut the Earth in half and you find four layers.

The <b>crust</b> is on the outside. That is the rock under your shoes, under the grass, under the sea. It is thin. Very thin.

Under it is the <b>mantle</b>. Hot rock, and most of the planet is made of it.

Below that is the outer core, which really is liquid metal. And right in the middle is the inner core, a ball of iron squeezed so hard it stays solid even at 5000 degrees.

You will never see any of it. Nobody has. The deepest hole ever drilled did not even get through the crust.`,
  terms: [["crust", "The thin hard rock on top"], ["mantle", "Hot rock under the crust"]],
  art: "layers",
  artCaption: "The Earth, sliced open. Not to scale, because if it were, you could not see the crust at all.",
  okonkwo: "The deepest hole humans ever dug went down 12 km. The crust is about 35 km thick under land. We have never been through it.",
  doors: {
    little: {
      print: "Colour the four layers. Crust brown. Mantle orange. Outer core yellow. Inner core red. Then count how many layers you coloured and write the number in the box.",
      q: { text: "How many layers does the Earth have?", options: ["Two", "Three", "Four"], answer: 2, why: "Crust, mantle, outer core, inner core." }
    },
    field: {
      print: "Label the four layers on the drawing. Then write one sentence: which layer are you sitting on right now, and how do you know?",
      q: { text: "Which layer are you sitting on right now?", options: ["The mantle", "The crust", "The outer core"], answer: 1, why: "Everything you have ever touched sits on the crust." }
    },
    chief: {
      print: "The Earth's radius is about 6400 km. Continental crust is about 35 km. Work out roughly what fraction of the way to the centre the crust reaches. Then answer this: why do textbook drawings of the Earth always draw the crust far too thick?",
      q: { text: "Earth radius is about 6400 km. Crust is about 35 km. Roughly what fraction is the crust?", options: ["About 1 part in 20", "About 1 part in 200", "About 1 part in 2000"], answer: 1, why: "6400 divided by 35 is about 183. Drawings exaggerate it because an accurate crust would be a line too thin to see." }
    }
  },
  cooperate: null,
  check: null,
  seismo: 0
},
{
  n: 3, unit: 1, unitTitle: "WHAT IS DOWN THERE",
  title: "Rock That Flows",
  hook: "The mantle is solid rock. It is also moving. Both of those are true.",
  predict: {
    text: "Put a pot of thick soup on a low heat and watch the top. What happens?",
    options: [
      "Nothing moves until it boils",
      "Blobs rise in the middle and sink at the sides",
      "The whole surface spins in one direction"
    ],
    answer: 1,
    reveal: "Hot soup rises in the middle, spreads out, cools, and sinks at the edges. It goes round and round in a loop. That loop is called a convection cell, and the mantle does exactly the same thing."
  },
  core: `Here is the strange part. The mantle is not liquid. It is solid rock. You could stand on it.

But it is so hot, and it is under so much pressure, that over thousands of years it creeps. Like very cold honey. Like a glacier. Slow, but never stopping.

Heat from the core pushes rock upward. Near the crust it cools and sinks again. Round and round. This is called <b>convection</b>.

Those slow loops of creeping rock are the engine. Everything else in this book, every earthquake and every mountain, is powered by them.`,
  terms: [["convection", "Hot stuff rises, cool stuff sinks"]],
  art: "convection",
  artCaption: "Convection cells in the mantle. Red arrows go up. Blue arrows come down.",
  okonkwo: "People say the plates float on a sea of lava. That is wrong. It is solid rock that creeps. Please do not repeat the lava thing.",
  trap: {
    text: "MISCONCEPTION TRAP. Your cousin says: The plates float on top of a big ocean of melted lava. Is he right?",
    options: ["Yes, that is right", "No, the mantle is solid rock that creeps very slowly", "No, the mantle is made of water"],
    answer: 1,
    why: "The mantle is solid. It flows the way a glacier flows, over enormous amounts of time. Melted rock exists in pockets, not as a global ocean."
  },
  doors: {
    little: {
      print: "Draw arrows on the pot of soup to show which way the blobs move. Up in the middle. Down at the sides. Then colour the hot part red and the cool part blue.",
      q: { text: "In a pot of soup, where does the hot soup go?", options: ["Down", "Up", "Sideways only"], answer: 1, why: "Hot things rise. Cool things sink. That is convection." }
    },
    field: {
      print: "Write two sentences. Sentence one: what makes the mantle rock move? Sentence two: why does it move so slowly?",
      q: { text: "What powers the movement in the mantle?", options: ["Wind on the surface", "Heat escaping from below", "The pull of the Moon"], answer: 1, why: "Heat from the core, plus heat made inside the mantle rocks themselves as they slowly decay." }
    },
    chief: {
      print: "Mantle rock creeps at a few centimetres a year. Your fingernails grow at about four centimetres a year. Write a short argument explaining how something moving that slowly can break a bridge in ten seconds. Hint: think about where the energy is stored in between.",
      q: { text: "Mantle rock creeps a few cm a year. How can that cause violent shaking?", options: ["It suddenly speeds up to 100 km per hour", "Slow movement stores energy in bent rock for centuries, then it releases at once", "The shaking comes from a different cause entirely"], answer: 1, why: "Slow loading, sudden release. A bent ruler holds energy quietly, then snaps in an instant." }
    }
  },
  check: { from: 2, q: "From page 2. True or false: the outer core is liquid metal.", options: ["True", "False"], answer: 0, why: "True. The outer core is genuinely liquid. The mantle above it is not." },
  seismo: 0
},
{
  n: 4, unit: 1, unitTitle: "WHAT IS DOWN THERE",
  title: "The Cracked Shell",
  hook: "The hard outside of the Earth is not one piece. It is about fifteen pieces, and they do not fit tightly.",
  predict: {
    text: "If the hard crust sits on top of slowly creeping mantle rock, what do you think happens to the crust?",
    options: [
      "It stays perfectly still",
      "It cracks into pieces that get dragged around",
      "It melts"
    ],
    answer: 1,
    reveal: "It cracks. The pieces then get pulled about, mostly by their own cold edges sinking back down into the mantle, helped along by the creeping rock underneath. This goes on for millions of years."
  },
  core: `The crust is broken. So is the cold stiff top of the mantle that is welded underneath it.

Together they make one rigid sheet about 100 km thick, and that sheet is broken into big curved pieces, like the shell of a boiled egg you have rolled on the table. Each piece is called a <b>tectonic plate</b>.

There are about fifteen large ones and dozens of small ones. Some carry whole continents. Some are mostly under the ocean.

They all move. Slowly, in different directions, never stopping.

And every single place where two plates touch is a place where earthquakes happen. Draw the edges of the plates and you have drawn a map of nearly every earthquake on Earth.`,
  terms: [["tectonic plate", "One broken piece of the crust"]],
  art: "plates",
  artCaption: "The world, with the plate edges marked. Your job is to trace them.",
  okonkwo: "Look at the map. Now look at where the mountains are. Notice anything?",
  doors: {
    little: {
      print: "Trace over the thick plate lines with a red pencil. Then find the piece of crust you live on and colour it in.",
      q: { text: "The crust is broken into pieces. What do we call one piece?", options: ["A continent", "A tectonic plate", "A mantle"], answer: 1, why: "A tectonic plate. A continent is just land. A plate can carry land and sea both." }
    },
    field: {
      print: "Name four plates on the map. Then write down which plate your house is sitting on, and which plate is closest to it.",
      q: { text: "Which is the largest tectonic plate?", options: ["The African Plate", "The Pacific Plate", "The Indian Plate"], answer: 1, why: "The Pacific Plate is the biggest, and it is almost entirely under the ocean." }
    },
    chief: {
      print: "Plates carry continents but they are not the same thing as continents. Find one plate on the map that carries both land and ocean floor. Then explain, in three sentences, why the edge of a continent is usually NOT the edge of a plate.",
      q: { text: "Is the edge of a continent the same as the edge of a plate?", options: ["Yes, always", "No, most plates carry both land and seafloor", "Only in the Pacific"], answer: 1, why: "The Atlantic coast of South America is a continent edge, but the plate boundary is far out in the middle of the Atlantic." }
    }
  },
  cooperate: "LITTLE SEISMOLOGIST traces the red lines. STATION CHIEF cannot finish their task until the lines are traced. Wait for them. Do not do it yourself.",
  check: { from: 3, q: "From page 3. What is the name for hot rock rising and cool rock sinking in a loop?", options: ["Conduction", "Convection", "Collision"], answer: 1, why: "Convection. The engine under everything." },
  badge: {
    digit: 4,
    title: "BADGE 1 CHALLENGE: JUNIOR GEOLOGIST",
    questions: [
      { text: "Put the layers in order from the outside in.", options: ["Crust, mantle, outer core, inner core", "Mantle, crust, inner core, outer core", "Crust, outer core, mantle, inner core"], answer: 0, why: "Crust, mantle, outer core, inner core." },
      { text: "Which layer is liquid?", options: ["The crust", "The mantle", "The outer core"], answer: 2, why: "Only the outer core is truly liquid." },
      { text: "TRAP. My teacher says the crust is the thickest layer. Is that right?", options: ["Yes", "No, it is by far the thinnest"], answer: 1, why: "The crust is the thinnest layer by an enormous margin." },
      { text: "What drags the plates around?", options: ["Ocean currents", "Convection in the mantle", "The spin of the Earth"], answer: 1, why: "Convection, plus the pull of sinking plate edges." },
      { text: "TRAP. If the mantle is solid, plates cannot move. True or false?", options: ["True", "False, solid rock can still creep over long time spans"], answer: 1, why: "Solid does not mean rigid forever. Given millennia, rock flows." }
    ]
  },
  seismo: 0
},
{
  n: 5, unit: 2, unitTitle: "THE PIECES MOVE",
  title: "The Man Nobody Believed",
  hook: "In 1912 a German scientist said the continents were moving. Everyone laughed at him.",
  predict: {
    text: "Look at the shape of South America and the shape of Africa on the map. What do you notice?",
    options: [
      "Nothing, they are just random shapes",
      "They would fit together if you slid them",
      "They are exactly the same size"
    ],
    answer: 1,
    reveal: "They fit. The bulge of Brazil slots into the curve of West Africa. Alfred Wegener saw this and would not let it go."
  },
  core: `Alfred Wegener noticed the coastlines fitted. That was not enough on its own. Shapes can fit by accident.

So he went looking for more.

He found the same fossil plants on both sides of the ocean. He found the same rock layers in Brazil and in Africa. He found scratches from ancient glaciers in hot countries, pointing in directions that only made sense if the land had once been somewhere else.

He said all the land had once been joined in one giant continent. He called it <b>Pangaea</b>.

Then he published it, in 1912. And the scientists of the world told him he was ridiculous, for about fifty years.

He was right. He died before anyone admitted it.`,
  terms: [["Pangaea", "One giant continent, long ago"], ["fossil", "The stone shape of something once alive"]],
  art: "pangaea",
  artCaption: "Pangaea, about 250 million years ago, with the fossil evidence marked.",
  okonkwo: "Being right early is not the same as being believed. Remember that.",
  doors: {
    little: {
      print: "Cut out the continent shapes at the back of this book. Fit them together like a jigsaw. Glue your Pangaea into the box.",
      q: { text: "What was the giant continent called?", options: ["Atlantis", "Pangaea", "Australia"], answer: 1, why: "Pangaea. It means all the land." }
    },
    field: {
      print: "Wegener used three kinds of evidence. Coastline shapes, matching fossils, matching rocks. Which of the three do you think is the strongest, and why? Write four sentences.",
      q: { text: "Why were matching fossils better evidence than matching coastlines?", options: ["Fossils are prettier", "Coastline shapes could fit by chance, but identical species on two continents needs an explanation", "Fossils are older"], answer: 1, why: "One coincidence is weak. The same freshwater reptile on two continents separated by an ocean is very hard to explain any other way." }
    },
    chief: {
      print: "Wegener had good evidence and was rejected anyway. The reason: he could not explain WHAT was pushing the continents. Write a paragraph on this question. Should scientists reject a good idea because nobody has found the mechanism yet? Argue one side properly.",
      q: { text: "Why was Wegener rejected despite good evidence?", options: ["His evidence was fake", "He could not explain what force moved the continents", "He was not a real scientist"], answer: 1, why: "No mechanism. Seafloor spreading and mantle convection were not discovered until the 1950s and 60s." }
    }
  },
  check: { from: 4, q: "From page 4. Roughly how many large tectonic plates are there?", options: ["About 5", "About 15", "About 150"], answer: 1, why: "About fifteen large ones, plus many small ones." },
  seismo: 0
}
];

// SHAKE STATION 7 — pages 6 to 10
const PAGES_B = [
{
  n: 6, unit: 2, unitTitle: "THE PIECES MOVE",
  title: "Three Ways To Meet",
  hook: "Two plates touching can only do three things. Learn the hand signs first.",
  predict: {
    text: "Press your palms flat together in front of you. Now think: what are the only three things your hands can do while they stay touching?",
    options: [
      "Push, pull, slide",
      "Push, twist, jump",
      "Only push and pull"
    ],
    answer: 0,
    reveal: "Push together, pull apart, slide past. That is the whole list. Plates have exactly the same three options, and geologists have a long word for each one."
  },
  core: `Do the hand signs before you read the words.

Pull your hands apart. A gap opens. Hot rock rises to fill it and makes new crust. That is a <b>divergent</b> boundary. Iceland is being torn in two by one right now.

Push your hands together. Something has to give. One plate dives under the other, or both crumple upward into mountains. That is a <b>convergent</b> boundary. The Himalayas are made this way.

Now slide one hand past the other, keeping them touching. They stick, then jerk, then stick again. That is a transform boundary. California has a famous one.

Three signs. Three words. That is the whole grammar of the planet.`,
  terms: [["divergent", "Plates pulling apart"], ["convergent", "Plates pushing together"]],
  art: "boundaries",
  artCaption: "Divergent, convergent, transform. Copy the hand sign under each one.",
  okonkwo: "I have taught this for twenty years. The children who do the hand signs remember it. The ones who only read it do not.",
  trap: {
    text: "MISCONCEPTION TRAP. Someone tells you: earthquakes only happen where plates crash into each other. Are they right?",
    options: ["Yes", "No, all three boundary types produce earthquakes", "No, only sliding boundaries make earthquakes"],
    answer: 1,
    why: "All three make earthquakes. Sliding boundaries like the San Andreas are extremely active, and they are neither crashing nor pulling apart."
  },
  doors: {
    little: {
      print: "Do all three hand signs out loud with a grown up. Then draw two arrows in each empty box to show which way the plates are going. Pointing away, pointing together, pointing past.",
      q: { text: "Your hands pull apart and a gap opens. What kind of boundary is that?", options: ["Pushing together", "Pulling apart", "Sliding past"], answer: 1, why: "Pulling apart. The long word is divergent." }
    },
    field: {
      print: "Match each boundary type to what it builds. Then write one real place on Earth for each of the three.",
      q: { text: "Which boundary type builds brand new crust?", options: ["Divergent", "Convergent", "Transform"], answer: 0, why: "At divergent boundaries molten rock rises into the gap and freezes into new seafloor." }
    },
    chief: {
      print: "At a convergent boundary between an ocean plate and a continent plate, the ocean plate always dives underneath. Work out why. Clue: ocean crust is basalt and continental crust is granite, and one is denser than the other. Write your reasoning.",
      q: { text: "When ocean crust meets continental crust, which one dives under?", options: ["Continental, it is heavier", "Oceanic, it is denser", "Whichever is moving faster"], answer: 1, why: "Oceanic crust is denser basalt, so it sinks beneath the lighter granite continent. This is called subduction." }
    }
  },
  cooperate: "The 6 year old calls out a hand sign. The 11 year olds must shout the correct scientific word within three seconds. Swap roles. Keep score.",
  check: { from: 5, q: "From page 5. Why did scientists reject Wegener?", options: ["His fossils were fake", "He could not explain what force moved the continents", "He never published his work"], answer: 1, why: "No mechanism. It took fifty years to find one." },
  seismo: 0
},
{
  n: 7, unit: 2, unitTitle: "THE PIECES MOVE",
  title: "What The Crashes Build",
  hook: "Everest is getting taller. A few millimetres a year, and it will not stop.",
  predict: {
    text: "India is crashing into Asia at about 5 cm a year and has been for 50 million years. What do you think the ground between them looks like?",
    options: [
      "Flat, it got worn down",
      "Crumpled upward into the tallest mountains on Earth",
      "A deep hole"
    ],
    answer: 1,
    reveal: "Crumpled. Two continents met, neither would sink, so the rock between them buckled upward. That buckle is the Himalayas, and India is still pushing."
  },
  core: `Every boundary builds something. Learn to read the landscape and you can read the plates.

Pull apart on land and the ground drops into a long valley. The Great Rift Valley in Africa is one, and Africa is slowly tearing along it.

Push together with an ocean plate and it dives down. Where it dives, the seafloor sags into a <b>trench</b>. The Mariana Trench is nearly 11 km deep. Behind the trench, the sinking plate gets hot and squeezes out water. That water makes the rock above it melt, and the melt rises as volcanoes in a curved line.

Push two continents together and neither one sinks. The rock has nowhere to go except up. Mountains.

Slide past and you build almost nothing. You just store trouble.`,
  terms: [["trench", "A deep groove in the seafloor"], ["subduction", "One plate sinking under another"]],
  art: "landforms",
  artCaption: "One cross section, three boundaries, and everything they build.",
  okonkwo: "Everest holds marine fossils near the summit. That rock was seabed. Think about what had to happen.",
  doors: {
    little: {
      print: "Draw a line from each picture to its name. Mountain. Volcano. Deep trench. Valley. Then colour the tallest one.",
      q: { text: "What happens when two continents crash into each other?", options: ["A deep hole forms", "Mountains push up", "Nothing"], answer: 1, why: "Neither will sink, so the rock buckles upward." }
    },
    field: {
      print: "There are marine fossils near the top of Mount Everest. Explain in four sentences how a sea creature ended up 8 km in the air.",
      q: { text: "Seashell fossils are found near the summit of Everest. Why?", options: ["Birds carried them up", "That rock was once seabed and got pushed up by the collision", "The sea used to be that high"], answer: 1, why: "The Tethys Sea floor was crushed between India and Asia and lifted into the sky." }
    },
    chief: {
      print: "Everest grows about 4 mm each year but is not getting 4 mm taller each year. Erosion removes rock at the same time. Write a short explanation of how a mountain can be rising and shrinking at once, and what decides the final height.",
      q: { text: "The Himalayas rise a few mm a year. Why are they not far taller after 50 million years?", options: ["The uplift stopped long ago", "Erosion removes rock almost as fast as uplift adds it", "Mountains have a maximum legal height"], answer: 1, why: "Uplift and erosion fight each other. Gravity also limits how tall rock can pile before it spreads sideways." }
    }
  },
  check: { from: 6, q: "From page 6. Which boundary type slides past without building much?", options: ["Divergent", "Convergent", "Transform"], answer: 2, why: "Transform. It builds little and stores a great deal of stress." },
  seismo: 0
},
{
  n: 8, unit: 2, unitTitle: "THE PIECES MOVE",
  title: "Plot It Yourself",
  hook: "Here are ten real earthquakes. Nobody is going to tell you what the pattern means.",
  predict: {
    text: "Before you plot anything. Do you think big earthquakes are scattered randomly across the world, or do they follow lines?",
    options: [
      "Scattered randomly",
      "They follow lines",
      "They are all in one country"
    ],
    answer: 1,
    reveal: "Do not read this box until you have plotted all ten points. Then come back."
  },
  core: `Below is a blank world map with a grid.

Here are ten real earthquakes. Plot each one with a dot. Take your time and be accurate.

1. Valdivia, Chile. 38 S, 73 W.
2. Anchorage, Alaska. 61 N, 148 W.
3. Tohoku, Japan. 38 N, 143 E.
4. Sumatra, Indonesia. 3 N, 96 E.
5. Kamchatka, Russia. 52 N, 160 E.
6. Maule, Chile. 36 S, 73 W.
7. Cascadia, USA. 45 N, 125 W.
8. Luzon, Philippines. 16 N, 121 E.
9. Tonga, South Pacific. 20 S, 175 W.
10. Michoacan, Mexico. The 1985 quake that wrecked Mexico City 350 km away. 18 N, 102 W.

Now join your dots, going round the edge of the Pacific Ocean in order. One of the ten will not fit on your loop. Leave that one out and draw a circle round it.

Write down the shape you made, and which dot refused to join it, before you turn the page.`,
  terms: [["Ring of Fire", "The earthquake circle round the Pacific"]],
  art: "worldgrid",
  artCaption: "Plot all ten. Then join them. The answer draws itself.",
  okonkwo: "I am not telling you. Plot it.",
  doors: {
    little: {
      print: "A grown up reads out each place. You stick a red dot sticker on the map where they point. Ten dots. Then say out loud what shape the dots make.",
      q: { text: "When you join the dots, what shape appears?", options: ["A straight line across the top", "A ring around the Pacific Ocean", "A star"], answer: 1, why: "A ring. Nine dots make the ring. Sumatra is the tenth and it sits on a different ocean. About ninety percent of the world's earthquakes happen along the ring." }
    },
    field: {
      print: "After plotting, answer this. Nine of the ten sit around one ocean. Which ocean? Now compare your dots to the plate map on page 4. What do you notice?",
      q: { text: "Which ocean is the ring around?", options: ["The Atlantic", "The Pacific", "The Indian"], answer: 1, why: "The Pacific. The edges of the Pacific Plate are ringed with subduction zones." }
    },
    chief: {
      print: "Your ring has a gap in it. Find where. Then answer the hard question: the Atlantic Ocean also has a plate boundary running down its middle, yet almost no huge earthquakes. Why is a spreading ridge so much quieter than a subduction zone?",
      q: { text: "Why does the mid-Atlantic ridge produce far smaller quakes than the Pacific rim?", options: ["It has no plate boundary", "Spreading boundaries are thin and shallow, so they store less stress than a giant locked subduction fault", "The water muffles them"], answer: 1, why: "Subduction zones lock over enormous areas and can slip all at once. Spreading ridges release stress in small, frequent, shallow events." }
    }
  },
  cooperate: "The 8 year old reads out the coordinates. The 6 year old places the stickers. The 11 year olds cannot start their question until all ten dots are on the map.",
  check: { from: 7, q: "From page 7. What is the deep groove in the seafloor called where a plate dives down?", options: ["A rift", "A trench", "A ridge"], answer: 1, why: "A trench. The Mariana Trench is the deepest place on Earth." },
  badge: {
    digit: 7,
    title: "BADGE 2 CHALLENGE: PLATE TRACKER",
    questions: [
      { text: "Two plates pull apart. What is the word?", options: ["Convergent", "Divergent", "Transform"], answer: 1, why: "Divergent." },
      { text: "What did Wegener call the giant continent?", options: ["Gondwana", "Pangaea", "Laurasia"], answer: 1, why: "Pangaea." },
      { text: "TRAP. My friend says the Ring of Fire is a ring of volcanoes only, no earthquakes. Correct?", options: ["Correct", "Wrong, it is the most earthquake-heavy zone on Earth as well"], answer: 1, why: "About 90 percent of the world's earthquakes happen along it." },
      { text: "Ocean crust meets continental crust. Which dives?", options: ["Oceanic", "Continental"], answer: 0, why: "Oceanic crust is denser and subducts." },
      { text: "TRAP. Someone says the continents stopped moving once Pangaea broke up. True?", options: ["True", "False, they are still moving right now"], answer: 1, why: "The Atlantic widens a few centimetres every year. Measured by satellite." }
    ]
  },
  seismo: 0
},
{
  n: 9, unit: 3, unitTitle: "HOW A QUAKE IS BORN",
  title: "Stick, Bend, SNAP",
  hook: "An earthquake is not the ground moving. It is the ground finally letting go.",
  predict: {
    text: "Take a stick of dry spaghetti in both hands and bend it slowly. Predict: at the moment it breaks, where does the energy go?",
    options: [
      "It disappears",
      "It shoots out as a snap you can feel and hear",
      "It stays in the broken pieces"
    ],
    answer: 1,
    reveal: "It shoots out. You feel the jolt in your fingers and you hear the crack. The energy you put in over ten seconds of bending comes back out in a thousandth of a second. That is an earthquake in your hands."
  },
  core: `Two tectonic plates are sliding past each other. But at the crack between them, called a <b>fault</b>, the rock is rough. It catches. It sticks.

The plates keep moving anyway. So the rock near the fault starts to bend. Fences built across the fault slowly warp. Roads develop a kink.

It bends for ten years. Fifty years. Three hundred years. Energy piles into the bent rock and stays there, quiet.

Then the rock reaches its limit and the stuck part lets go. Everything that was bent snaps straight in seconds, and the stored energy blasts outward in every direction.

That is the earthquake. Not the moving. The snapping back.

The proper name for it is <b>elastic rebound</b>.`,
  terms: [["fault", "A crack where rock slips"], ["elastic rebound", "Bent rock snapping straight"]],
  art: "rebound",
  artCaption: "A fence built straight across a fault. Watch what happens to it over 100 years.",
  okonkwo: "Look at the line on my machine. It twitched this morning. First time in eleven months. Probably nothing.",
  trap: {
    text: "MISCONCEPTION TRAP. In a film, the ground splits open into a huge crack and a car falls in. Does that happen?",
    options: ["Yes, that is what a fault is", "No, faults slip sideways or up and down, they do not gape open and swallow things", "Only in California"],
    answer: 1,
    why: "Faults grind past each other under enormous pressure. They do not yawn open. Small cracks appear at the surface, but nothing swallows a car. Films lie about this constantly."
  },
  doors: {
    little: {
      print: "Snap a piece of dry spaghetti with a grown up. Feel the jolt. Then draw the fence in the third box the way you think it looks AFTER the snap.",
      q: { text: "When does the shaking happen?", options: ["While the rock is slowly bending", "At the moment the rock snaps back", "Before anything moves"], answer: 1, why: "The bending is silent. The snap is the earthquake." }
    },
    field: {
      print: "A fence was built dead straight across a fault in 1900. By 2000 it is bent into an S shape. In 2001 there is an earthquake. Draw the fence in 1900, in 2000, and in 2002. Label each drawing.",
      q: { text: "A straight fence across a fault slowly bends over 100 years. After the quake, what does it look like?", options: ["Still bent the same way", "Straight again but broken and offset at the fault", "Bent the other way"], answer: 1, why: "Both halves snap back to straight, but they no longer line up. The offset shows how much slip occurred." }
    },
    chief: {
      print: "A fault has been locked for 150 years. The plates move 3 cm a year. Work out the total slip that must be released. Then explain why a fault locked for 300 years is far more dangerous than one that slips a little every year.",
      q: { text: "A fault locked 150 years, plates moving 3 cm per year. How much slip is stored?", options: ["About 45 cm", "About 4.5 m", "About 45 m"], answer: 1, why: "150 times 3 cm equals 450 cm, which is 4.5 metres. Longer locking means bigger release." }
    }
  },
  check: { from: 8, q: "From page 8. Roughly what share of the world's earthquakes happen around the Ring of Fire?", options: ["About 10 percent", "About 50 percent", "About 90 percent"], answer: 2, why: "About 90 percent." },
  seismo: 1
},
{
  n: 10, unit: 3, unitTitle: "HOW A QUAKE IS BORN",
  title: "Where It Really Happened",
  hook: "The news says the earthquake happened in the city. The news is wrong.",
  predict: {
    text: "An earthquake is reported at a town. Where do you think the rock actually broke?",
    options: [
      "Right at the town, on the surface",
      "Deep underground, maybe 10 km or more below",
      "In the sky above the town"
    ],
    answer: 1,
    reveal: "Deep underground. The break happens on a fault plane kilometres down. The town is just the spot on the surface that sits directly above it."
  },
  core: `Two words that get muddled constantly. Get them right and you will be ahead of most adults.

The <b>hypocentre</b> is where the rock actually broke. It is underground, often 10 to 30 km down, sometimes far deeper. It is also called the focus.

The <b>epicentre</b> is the point on the surface directly above the hypocentre. It is a spot on a map. Nothing broke there. It is just the closest place on the surface to where things did break.

Why does it matter? Depth changes everything. A shallow quake dumps its energy right under your feet. A deep quake spreads the same energy through hundreds of kilometres of rock before it reaches you, so it arrives weaker and smeared out.

Same magnitude. Very different day.`,
  terms: [["hypocentre", "Where the rock actually broke"], ["epicentre", "The surface point directly above"]],
  art: "epicentre",
  artCaption: "A slice through the ground. Label the fault, the hypocentre, and the epicentre.",
  okonkwo: "Reporters say epicentre when they mean centre of the disaster. It is not the same thing. Correct them politely.",
  doors: {
    little: {
      print: "There is a star deep underground. Draw a straight line from the star up to the surface. Put a red X where your line reaches the top. That X is the epicentre.",
      q: { text: "The epicentre is on the surface or underground?", options: ["On the surface", "Underground"], answer: 0, why: "On the surface, directly above the break." }
    },
    field: {
      print: "Label the diagram: fault plane, hypocentre, epicentre, and the depth arrow. Then write one sentence explaining why depth matters.",
      q: { text: "Two quakes, same magnitude. One is 10 km deep, one is 200 km deep. Which shakes the surface harder?", options: ["The 10 km one", "The 200 km one", "Exactly the same"], answer: 0, why: "Shallow energy arrives concentrated. Deep energy spreads out and weakens on the long journey up." }
    },
    chief: {
      print: "In 2011 a magnitude 6.3 quake devastated Christchurch, New Zealand. Five months earlier a magnitude 7.1 quake nearby caused far less damage. The 7.1 released roughly 16 times more energy. Using depth and distance, write an explanation of how the smaller quake did more harm.",
      q: { text: "How can a magnitude 6.3 do more damage than a nearby magnitude 7.1?", options: ["The scale is unreliable", "Shallower, and directly under the city rather than out of town", "The 7.1 was measured wrongly"], answer: 1, why: "The 6.3 was about 5 km deep and almost under the city centre. Depth and location beat raw magnitude." }
    }
  },
  cooperate: null,
  check: { from: 9, q: "From page 9. What is the proper name for bent rock snapping straight?", options: ["Convection", "Elastic rebound", "Subduction"], answer: 1, why: "Elastic rebound." },
  seismo: 2
}
];

// SHAKE STATION 7 — pages 11 to 15
const PAGES_C = [
{
  n: 11, unit: 3, unitTitle: "HOW A QUAKE IS BORN",
  title: "Three Kinds Of Shake",
  hook: "The first wave to reach you is not the one that hurts you.",
  predict: {
    text: "Stretch a slinky along the floor. Push one end sharply forward. Then shake the other end side to side. Which wave do you think travels faster through rock?",
    options: [
      "The push and pull one",
      "The side to side one",
      "Exactly the same speed"
    ],
    answer: 0,
    reveal: "The push and pull wave wins, every time, in every material. It is called the P wave because it arrives first. Primary."
  },
  core: `Two kinds of wave leave the hypocentre. When they reach the surface they make a third kind that runs along the top. All three travel at different speeds, so they arrive one after another.

<b>P waves</b> come first. They squeeze and stretch the rock forward and back, like a slinky being pushed. Fast, about 6 km per second. They can travel through solid rock and through liquid. They rattle windows and make a bang. They rarely knock things down.

<b>S waves</b> come second. They shake the rock sideways, like a rope you flick. Slower, about 3.5 km per second. They cannot travel through liquid at all, which is how we discovered the outer core is liquid.

Surface waves arrive last and travel along the top only. They roll the ground like a sea swell and they do most of the damage.

Feel a bang, then a jolt, then a slow roll? You just felt all three.`,
  terms: [["P wave", "Fast push and pull wave"], ["S wave", "Slower sideways wave"]],
  art: "waves",
  artCaption: "P wave squeezes. S wave shakes sideways. Surface wave rolls.",
  okonkwo: "The gap between the P and the S is the most useful few seconds in my whole profession. Remember that. It comes back on page 14.",
  trap: {
    text: "MISCONCEPTION TRAP. A boy says: the first wave you feel is always the strongest. Right or wrong?",
    options: ["Right", "Wrong, the first wave is the P wave and it is usually the weakest"],
    answer: 1,
    why: "P waves arrive first and are the mildest. The slow surface waves arriving last are the destroyers. That is why the shaking often gets worse before it stops."
  },
  doors: {
    little: {
      print: "Play the wave game. A grown up holds one end of a skipping rope. You shake it side to side. That is an S wave. Now push a slinky. That is a P wave. Draw a squiggle for each one in the boxes.",
      q: { text: "Which wave arrives first?", options: ["The P wave", "The S wave", "The surface wave"], answer: 0, why: "P for Primary. It is the fastest." }
    },
    field: {
      print: "Fill in the table. For each wave write: its speed order, how it moves the ground, and whether it does much damage. Then answer: why do the letters P and S make sense?",
      q: { text: "Which wave does most of the damage to buildings?", options: ["P waves", "S waves", "Surface waves"], answer: 2, why: "Surface waves. They roll along the top, they are large, and they last longest." }
    },
    chief: {
      print: "S waves cannot pass through liquid. From 1906 onwards scientists noticed that beyond about a third of the way round the world from a quake, S waves stop arriving altogether. This is called the S wave shadow zone. Explain what this proves about the inside of the Earth, and write down which page of this book you already met that fact on.",
      q: { text: "S waves stop arriving beyond a certain distance. What does that prove?", options: ["The Earth is hollow", "There is a liquid layer inside, the outer core", "S waves get tired"], answer: 1, why: "S waves die in liquid. The shadow zone is how we know the outer core is molten. You met the outer core on page 2." }
    }
  },
  cooperate: "S wave rope game needs two people holding and one shaking. Youngest shakes. Oldest counts how many waves pass a marked point in ten seconds.",
  check: { from: 5, q: "From page 5. Name two kinds of evidence Wegener used, apart from coastline shapes.", options: ["Fossils and rock layers", "Photographs and maps", "Volcanoes and rivers"], answer: 0, why: "Matching fossils and matching rock layers on separate continents." },
  seismo: 2
},
{
  n: 12, unit: 3, unitTitle: "HOW A QUAKE IS BORN",
  title: "Reading The Squiggle",
  hook: "A seismogram looks like a scribble. It is actually a sentence.",
  predict: {
    text: "A machine draws a line on moving paper. The machine shakes during an earthquake. What would happen to the line if the pen stayed perfectly still while the paper and machine shook?",
    options: [
      "The line would stay straight",
      "The line would draw the shaking as a squiggle",
      "The pen would fall off"
    ],
    answer: 1,
    reveal: "That is the trick. The pen hangs from a heavy weight, and heavy things resist being moved. So while the ground and the paper jerk about, the pen holds still and draws the shaking as a squiggle."
  },
  core: `A <b>seismograph</b> is a machine that stays still while the world moves.

A heavy weight hangs on a spring. When the ground jolts, the frame and the paper jolt with it, but the weight is too lazy to follow. The pen attached to it traces a record of exactly how the ground moved.

That record is called a <b>seismogram</b>, and you can read it.

Flat line means nothing happening. First small wobble is the P wave arriving. A bigger jump some seconds later is the S wave. Then the huge slow swings, the surface waves.

The height of the squiggle tells you how strong. The gap between P and S tells you how far away. That second one is the important one.`,
  terms: [["seismograph", "Machine that records shaking"], ["seismogram", "The paper record it draws"]],
  art: "seismogram",
  artCaption: "One real seismogram. Mark the P arrival, the S arrival, and the gap between them.",
  okonkwo: "Build your own. Box, string, weight, marker, and someone to pull the paper. It works. Mine sits on that shelf and it is thirty years old.",
  build: {
    title: "BUILD IT: THE BOX SEISMOGRAPH",
    materials: "One cardboard box, string, a marker pen, a heavy cup or a bag of coins, scissors, a long strip of paper cut from a cereal packet.",
    steps: [
      "Cut the top and one side off the box so you can see inside.",
      "Punch two holes in the top. Thread string through and hang the marker so the tip just touches the box floor.",
      "Tape the heavy cup to the marker to make it lazier.",
      "Feed the paper strip under the marker tip.",
      "One person pulls the paper slowly and steadily. Another person shakes the box.",
      "Compare a gentle shake and a hard shake. Compare a fast pull and a slow pull."
    ],
    predict: "Before you shake it, predict: will pulling the paper faster make the squiggle taller or wider?",
    result: "Faster pulling stretches the squiggle sideways but does not change its height. Height comes from how hard you shake. Width comes from paper speed. Real stations record time on the paper so the width always means the same thing.",
    wrong: "What went wrong? Write it here. Marker not touching? Paper jamming? Weight too light? Record it."
  },
  doors: {
    little: {
      print: "Colour the biggest wobble on the seismogram red and the smallest wobble blue. Then draw your own squiggle for a tiny earthquake and a huge earthquake.",
      q: { text: "A tall squiggle on the paper means the shaking was...", options: ["Weak", "Strong"], answer: 1, why: "Taller squiggle, stronger shaking." }
    },
    field: {
      print: "On the printed seismogram, mark P with a blue arrow and S with a red arrow. Measure the gap in seconds using the scale bar. Write the number in the box.",
      q: { text: "What does the gap between the P arrival and the S arrival tell you?", options: ["How strong the quake was", "How far away it was", "What time it happened"], answer: 1, why: "Bigger gap means further away, because the fast wave gets a longer head start over a longer journey." }
    },
    chief: {
      print: "P waves travel about 6 km per second and S waves about 3.5 km per second. If the gap between them at your station is 20 seconds, work out roughly how far away the quake was. Show your working. Then explain why a station 10 km from the quake sees almost no gap at all.",
      q: { text: "P travels 6 km/s, S travels 3.5 km/s. The gap is 20 seconds. Roughly how far away is the quake?", options: ["About 40 km", "About 170 km", "About 600 km"], answer: 1, why: "The S wave falls about 0.119 s further behind for every km it travels. 20 divided by 0.119 gives roughly 168 km. Close to the rule of thumb: gap in seconds times 8." }
    }
  },
  check: { from: 10, q: "From page 10. What is the underground point where the rock actually broke called?", options: ["The epicentre", "The hypocentre", "The fault line"], answer: 1, why: "The hypocentre, also called the focus." },
  badge: {
    digit: 2,
    title: "BADGE 3 CHALLENGE: WAVE READER",
    questions: [
      { text: "Put the waves in arrival order.", options: ["S, P, surface", "P, S, surface", "Surface, P, S"], answer: 1, why: "P first, S second, surface last." },
      { text: "Which wave cannot travel through liquid?", options: ["P wave", "S wave"], answer: 1, why: "S waves die in liquid. That is how we found the outer core." },
      { text: "TRAP. A boy says the epicentre is where the rock broke. Correct him.", options: ["He is right", "Wrong, that is the hypocentre. The epicentre is on the surface above it"], answer: 1, why: "Hypocentre is underground. Epicentre is the surface point above." },
      { text: "What makes the pen on a seismograph stay still?", options: ["A motor holds it", "A heavy weight resists being moved", "It is glued down"], answer: 1, why: "Inertia. Heavy things resist changing motion." },
      { text: "TRAP. Someone says a big earthquake means the fault opened up like a mouth. True?", options: ["True", "False, faults slip past each other, they do not gape open"], answer: 1, why: "Films invented the gaping crack. Real faults grind." }
    ]
  },
  seismo: 3
},
{
  n: 13, unit: 4, unitTitle: "MEASURING THE MONSTER",
  title: "Big Is Not The Same As Bad",
  hook: "A magnitude 7 in an empty desert can kill nobody. A magnitude 6 under a city can kill thousands.",
  predict: {
    text: "Magnitude 6 to magnitude 7 is one step up the scale. How much more energy do you think that is?",
    options: [
      "About twice as much",
      "About 10 times as much",
      "About 32 times as much"
    ],
    answer: 2,
    reveal: "About 32 times. The scale does not go up in ones, it multiplies. A magnitude 8 releases about 1000 times the energy of a magnitude 6."
  },
  core: `There are two completely different questions and people mix them up daily.

Question one: how much energy did the fault release? That is <b>magnitude</b>. It is one number for the whole earthquake, no matter where you stand. Scientists now use moment magnitude, which measures how much rock slipped and how far. The old Richter scale is still what people say, but it stops working properly on very large events.

Question two: how bad was the shaking where you were? That is <b>intensity</b>. It is measured on the Mercalli scale, from I to XII, and it is different in every street. It depends on depth, distance, and what kind of ground you are standing on.

One earthquake. One magnitude. A hundred different intensities.

The magnitude decides how much energy exists. Everything else decides who suffers.`,
  terms: [["magnitude", "How much energy was released"], ["intensity", "How hard the shaking felt here"]],
  art: "magnitude",
  artCaption: "The energy staircase. Each step up is about 32 times the one below.",
  okonkwo: "When a reporter says magnitude, they mean the fault. When they say devastating, they mean intensity. Two different words for two different things.",
  trap: {
    text: "MISCONCEPTION TRAP. Someone says: a magnitude 8 earthquake is twice as strong as a magnitude 4. Fix that sentence.",
    options: ["It is correct", "A magnitude 8 releases about a million times the energy of a magnitude 4", "A magnitude 8 is 4 times stronger"],
    answer: 1,
    why: "Four steps up. 32 x 32 x 32 x 32 is about a million. The scale is logarithmic, which means each step multiplies rather than adds."
  },
  doors: {
    little: {
      print: "Colour the magnitude staircase. Small quakes green. Medium quakes yellow. Huge quakes red. Then draw what you think a magnitude 2 feels like and what a magnitude 8 feels like.",
      q: { text: "Is a magnitude 8 a little bit bigger than a magnitude 7, or a LOT bigger?", options: ["A little bit", "A lot bigger"], answer: 1, why: "About 32 times more energy. That is a lot." }
    },
    field: {
      print: "Match each description to a Mercalli intensity level. Hanging lamps swing gently. Nobody feels it, machines only. Walls crack and chimneys fall. Buildings collapse and the ground cracks. Then write which of these is about magnitude and which is about intensity.",
      q: { text: "Two towns feel the same earthquake. Town A is on solid rock, Town B is on soft mud. Which shakes harder?", options: ["Town A on rock", "Town B on mud", "Both the same"], answer: 1, why: "Soft ground amplifies shaking. The waves slow down and grow taller, like a sea wave reaching a beach." }
    },
    chief: {
      print: "Work through this. Magnitude 5 to magnitude 8 is three steps. Calculate the approximate energy ratio. Then explain, in a short paragraph, why the Richter scale was replaced by moment magnitude for large earthquakes.",
      q: { text: "Roughly how much more energy is a magnitude 8 than a magnitude 5?", options: ["About 1000 times", "About 32000 times", "About 300 times"], answer: 1, why: "32 x 32 x 32 is about 32768. Richter was replaced because it saturates: above about magnitude 7 it stops distinguishing between large events." }
    }
  },
  check: { from: 11, q: "From page 11. Which wave does most of the damage?", options: ["P wave", "S wave", "Surface wave"], answer: 2, why: "Surface waves. Slow, large, and long-lasting." },
  seismo: 4
},
{
  n: 14, unit: 4, unitTitle: "MEASURING THE MONSTER",
  title: "Three Circles",
  hook: "One station cannot find an earthquake. Two cannot either. Three can.",
  predict: {
    text: "You know an earthquake happened exactly 200 km from your station. Where could it be?",
    options: [
      "At one exact spot",
      "Anywhere on a circle of radius 200 km around you",
      "Somewhere to the north"
    ],
    answer: 1,
    reveal: "Anywhere on the circle. One station gives you a distance but no direction. This is the whole problem, and the solution is beautiful."
  },
  core: `This is the most satisfying thing in seismology and you are about to do it yourself.

Step one. At each station, look at the seismogram and measure the gap between the P wave and the S wave.

Step two. Turn that gap into a distance. Longer gap means further away. Use the conversion strip below.

Step three. Draw a circle around each station, with a radius equal to that distance.

One circle tells you almost nothing. Two circles cross at two points, so you are down to two suspects. Three circles cross at exactly one point.

That point is the epicentre.

This is called <b>triangulation</b>, and it is the idea behind every earthquake location you have ever seen on the news.`,
  terms: [["triangulation", "Finding a spot using three distances"]],
  art: "triangulation",
  artCaption: "Three stations. Three gaps. Three circles. One answer.",
  okonkwo: "Do this one slowly. Sharp pencil. Proper compass. When the three circles meet you will feel something.",
  activity: {
    title: "THE REAL MISSION",
    body: `Three stations recorded the same earthquake this morning.

STATION ALPHA. P to S gap: 8 seconds.
STATION BRAVO. P to S gap: 15 seconds.
STATION CHARLIE. P to S gap: 11 seconds.

CONVERSION RULE: distance in km is roughly the gap in seconds multiplied by 8.

Work out the three distances. Convert each to centimetres using the map scale in the corner. Set your compass. Draw three circles.

Mark the epicentre with a red X.`
  },
  doors: {
    little: {
      print: "You are the compass helper. Hold the map flat and steady while the older ones draw. Then find the red X they made and draw a little house next to it. Count how many circles crossed there.",
      q: { text: "How many circles do you need to find the exact spot?", options: ["One", "Two", "Three"], answer: 2, why: "Three. Two circles leave you with two possible answers." }
    },
    field: {
      print: "Do the three multiplications. 8 x 8, 15 x 8, 11 x 8. Write the three distances. Then draw the three circles with a compass and mark where they meet.",
      q: { text: "A station reports a 15 second gap. Using the rule of 8, how far away is the quake?", options: ["About 60 km", "About 120 km", "About 240 km"], answer: 1, why: "15 x 8 = 120 km." }
    },
    chief: {
      print: "Do the mission, then answer this. In real life the three circles almost never meet at a single perfect point. They form a small triangle instead. Give two reasons why, and explain what a seismologist should report as the epicentre when that happens.",
      q: { text: "In real life three circles rarely meet perfectly. Why?", options: ["Seismologists are careless", "Wave speed varies with rock type, and timing has small errors, so each distance is slightly off", "The Earth is not round"], answer: 1, why: "Rock is not uniform, so wave speeds vary. Real networks use many stations and compute a best-fit location with an error estimate." }
    }
  },
  cooperate: "This page needs all four of you. Youngest holds the map. Two Chiefs each draw a circle and check the other's arithmetic. The 8 year old draws the third circle and marks the X.",
  check: { from: 12, q: "From page 12. What keeps a seismograph pen still while the ground shakes?", options: ["A motor", "A heavy weight", "A magnet"], answer: 1, why: "A heavy hanging weight resists motion." },
  seismo: 5
},
{
  n: 15, unit: 4, unitTitle: "MEASURING THE MONSTER",
  title: "Why Nobody Can Tell You Tomorrow",
  hook: "We can say a big quake is likely in the next thirty years. We cannot say next Tuesday. That gap is not laziness.",
  predict: {
    text: "Scientists can predict eclipses hundreds of years ahead, to the second. Why can they not do the same with earthquakes?",
    options: [
      "Nobody has tried hard enough",
      "The Moon follows simple rules, rock breaking does not",
      "They can, they just keep it secret"
    ],
    answer: 1,
    reveal: "The Moon obeys a few clean equations. A fault is thousands of square kilometres of rough, cracked, wet, uneven rock, and the exact moment it fails depends on details nobody can measure from the surface."
  },
  core: `Earthquakes come in families.

A <b>foreshock</b> is a smaller quake before the big one. The problem: you can only tell it was a foreshock afterwards. At the time it looks exactly like an ordinary small quake.

The mainshock is the biggest one.

An <b>aftershock</b> is one of the many smaller quakes that follow, as the rock around the break finishes its elastic rebound and settles. They can go on for months. Most are harmless. Some are not. Every one of them gets located by triangulation, usually within a minute.

Here is the honest position. Seismologists forecast probability over years, and they do it well. Prediction of a date and time does not exist, and there is currently no good reason to think it will.

Anyone who tells you they can predict earthquakes is selling something.`,
  terms: [["foreshock", "A small quake before the big one"], ["aftershock", "Smaller quakes following the main one"]],
  art: "prediction",
  artCaption: "Three myths that will not die, and the truth beside each one.",
  okonkwo: `A confession. In 2009 I told a village council that the sequence they were feeling was probably just a swarm and would fade out.

Eleven days later the mainshock arrived.

I was wrong. Not lying, not careless, just wrong, because the honest answer was I do not know and I said something more comfortable instead. I have never done it again.`,
  myths: [
    { myth: "Earthquake weather. Hot still days cause earthquakes.", truth: "No connection exists. Quakes start 10 km or more underground, where weather does not reach. They happen in every season and every climate." },
    { myth: "Animals can predict earthquakes.", truth: "Animals often react seconds before humans, because they feel the fast P wave first. That is detection, not prediction. No animal has ever given reliable warning days ahead in a controlled study." },
    { myth: "California will break off and fall into the sea.", truth: "The San Andreas is a sliding boundary. Los Angeles is moving north toward San Francisco at about 5 cm a year. In roughly 15 million years they will be neighbours. Nothing sinks." }
  ],
  doors: {
    little: {
      print: "Three myths are drawn in the boxes. Careful, it is a trick. Put a big X through every picture that is NOT true. Then count your Xs and say the number out loud.",
      q: { text: "Can animals tell us an earthquake is coming next week?", options: ["Yes", "No, they just feel the first wave a second or two before we do"], answer: 1, why: "Detection, not prediction." }
    },
    field: {
      print: "Write a short reply to a friend who says: my grandmother says the weather has been strange so an earthquake is coming. Be kind but be clear.",
      q: { text: "What is the difference between a foreshock and an ordinary small quake?", options: ["Foreshocks are always stronger", "You can only tell the difference afterwards, once a bigger one follows", "Foreshocks are deeper"], answer: 1, why: "There is no way to identify a foreshock at the time. That is precisely what makes prediction so hard." }
    },
    chief: {
      print: "After the 2009 earthquake in L'Aquila, six Italian scientists and one government official were put on trial in 2011 for what had been said publicly beforehand. All seven were convicted in 2012. On appeal in 2014 the six scientists were cleared, and only the official's conviction stood. Write a paragraph: what should a scientist say to the public when the honest answer is we do not know?",
      q: { text: "Seismologists CAN do which of these?", options: ["Predict a date and time", "Forecast the probability of a large quake in a region over decades", "Both"], answer: 1, why: "Probabilistic forecasting works and drives building codes. Deterministic prediction does not exist." }
    }
  },
  check: { from: 13, q: "From page 13. One step up the magnitude scale is roughly how much more energy?", options: ["Twice", "10 times", "32 times"], answer: 2, why: "About 32 times." },
  badge: {
    digit: 9,
    title: "BADGE 4 CHALLENGE: STATION ANALYST",
    questions: [
      { text: "How many stations do you need to locate an epicentre?", options: ["One", "Two", "Three"], answer: 2, why: "Three circles, one crossing point." },
      { text: "Magnitude measures energy released. What measures the shaking where you stand?", options: ["Intensity", "Depth", "Frequency"], answer: 0, why: "Intensity, on the Mercalli scale." },
      { text: "TRAP. My uncle says his dog predicted an earthquake last year. What do you tell him?", options: ["Amazing, dogs can predict quakes", "The dog probably felt the P wave a second or two early. That is detection, not prediction"], answer: 1, why: "Seconds of head start, not days." },
      { text: "A 24 second P to S gap. Using the rule of 8, how far?", options: ["About 96 km", "About 192 km", "About 240 km"], answer: 1, why: "24 x 8 = 192 km." },
      { text: "TRAP. Someone says scientists know exactly when the next big one will hit but governments hide it. Response?", options: ["Probably true", "No. Probability forecasts over decades exist. Date prediction does not, for anyone"], answer: 1, why: "There is no hidden method. The physics genuinely does not allow it yet." }
    ]
  },
  seismo: 6
}
];

// SHAKE STATION 7 — pages 16 to 20
const PAGES_D = [
{
  n: 16, unit: 5, unitTitle: "WHAT THE SHAKING DOES",
  title: "When The Sea Stands Up",
  hook: "If the sea suddenly pulls back and shows you the seabed, you may have only a few minutes. Sometimes less.",
  predict: {
    text: "Fill a tray with water. Now lift a tile on the bottom sharply upward. What happens to the water above it?",
    options: [
      "Nothing, water is too heavy",
      "The whole column of water above lifts and spreads outward as a wave",
      "It makes a small ripple only"
    ],
    answer: 1,
    reveal: "The entire column lifts. That is the difference between a tsunami and a normal wave. Wind waves are only the top few metres of water moving. A tsunami is the whole depth of the ocean, from surface to seabed, moving at once."
  },
  core: `An underwater earthquake, usually where two tectonic plates meet, shoves the seafloor upward. The water above has nowhere to go except up and then out.

In deep water a <b>tsunami</b> is almost invisible. Half a metre tall. Ships sail over it and feel nothing. But it can be 200 km from crest to crest, and it travels at about 800 km per hour, as fast as a jet.

Then it reaches shallow water. The front slows down. The back catches up. All that length piles into height.

The wave that was half a metre tall in the deep ocean can arrive as a wall of water many metres high, and it does not curl and break like a surf wave. It keeps coming, like the sea has decided to be somewhere else.

Then it drains back out, and takes everything with it.`,
  terms: [["tsunami", "A wave made by the seafloor moving"]],
  art: "tsunami",
  artCaption: "Deep water: long and low. Shallow water: short and tall. Same energy, different shape.",
  okonkwo: "In 2004 a ten year old girl called Tilly Smith recognised the receding water from a geography lesson two weeks earlier. She told her parents. That beach was evacuated. About a hundred people lived because a child had been paying attention.",
  warning: {
    title: "THE THREE NATURAL WARNINGS",
    items: [
      "You feel a strong earthquake near the coast. Do not wait for a siren. Move inland and uphill.",
      "The sea pulls back and exposes seabed you have never seen before. Do not go and look. Run.",
      "You hear a roar from the sea like a train or an aeroplane. Go, now, uphill."
    ],
    rule: "A tsunami is not one wave. The second or third is often the biggest, and they can arrive an hour apart. Do not go back down. And it does not always pull back first. Sometimes the water simply rises with no warning at all, which is why warning number one is the one you must never ignore."
  },
  doors: {
    little: {
      print: "Do the tray experiment with a grown up. Then draw what you should do if the sea runs away from the beach. Draw yourself running to high ground, not walking toward the water.",
      q: { text: "The sea suddenly pulls far back from the beach. What do you do?", options: ["Go and look at the fish", "Run inland and uphill straight away", "Take a photo first"], answer: 1, why: "The sea pulling back means the trough of a tsunami arrived first. You have minutes." }
    },
    field: {
      print: "Explain in five sentences why a tsunami is dangerous even though it is only half a metre tall in the open ocean. Use the words shallow, slow, and pile up.",
      q: { text: "Why is a tsunami nearly invisible to a ship in deep water?", options: ["It travels underwater only", "It is very long and very low, so the ship rises and falls gently over many minutes", "Ships are too big to feel it"], answer: 1, why: "A half metre rise spread over 200 km of wavelength is a gentle swell. The energy is enormous but the shape is flat." }
    },
    chief: {
      print: "A tsunami travels at about 800 km/h in deep water. An earthquake occurs 3000 km from a coastline. Calculate how long the coast has to evacuate. Then explain why a quake 50 km offshore is far more dangerous even if it is smaller.",
      q: { text: "A tsunami travels 800 km/h. The quake is 3000 km away. How long until it arrives?", options: ["About 1 hour", "About 3 hours 45 minutes", "About 10 hours"], answer: 1, why: "3000 divided by 800 equals 3.75 hours. A quake 50 km offshore gives you minutes instead, which is why local natural warnings matter more than sirens." }
    }
  },
  check: { from: 14, q: "From page 14. What is the name for finding a spot using three distances?", options: ["Triangulation", "Navigation", "Calibration"], answer: 0, why: "Triangulation." },
  seismo: 6
},
{
  n: 17, unit: 5, unitTitle: "WHAT THE SHAKING DOES",
  title: "Ground That Turns To Soup",
  hook: "Two houses, same street, same earthquake. One is fine. One has sunk a metre into the ground.",
  predict: {
    text: "Put a coin on top of a cup of wet sand. Now tap the side of the cup steadily for thirty seconds. Predict what happens to the coin.",
    options: [
      "Nothing, sand is solid",
      "It sinks into the sand",
      "It slides to the edge"
    ],
    answer: 1,
    reveal: "It sinks. Shaking makes the sand grains lose contact with each other and the water gets between them. For a few seconds the sand stops behaving like a solid and behaves like a liquid. Anything heavy sinks. Anything light, like an empty pipe, floats up."
  },
  core: `The earthquake is only the beginning. What happens next depends entirely on what your house is standing on.

<b>Liquefaction</b> is the coin trick, at city scale. Loose wet sandy ground gets shaken until it behaves like a liquid. Buildings tilt and sink. Underground pipes and empty tanks float up through the road. Then the shaking stops and it all sets solid again, with everything in the wrong place.

Landslides come next. Shaking pushes a slope that was already close to giving way.

And then fire. Earthquakes snap gas pipes and electrical cables at the same moment they break the water mains needed to fight the fire. In San Francisco in 1906 the fire destroyed far more of the city than the shaking did.

One earthquake. One magnitude. Two completely different intensities, one street apart.

Same quake. Different ground. Completely different day.`,
  terms: [["liquefaction", "Shaken wet ground acting like liquid"]],
  art: "liquefaction",
  artCaption: "Solid ground on the left. Loose wet sand on the right. Watch the buildings.",
  okonkwo: "This is why I care so much where a school is built. The rock under it matters as much as the walls.",
  trap: {
    text: "MISCONCEPTION TRAP. A girl says: it does not matter where you build, a strong enough building survives anything. Is she right?",
    options: ["Yes, engineering solves everything", "No, a strong building on liquefying ground will simply tilt over intact"],
    answer: 1,
    why: "In Niigata in 1964 whole apartment blocks toppled over slowly and lay on their sides with almost no structural damage. The buildings were fine. The ground left."
  },
  doors: {
    little: {
      print: "Do the sand and coin experiment. Then draw the coin before and after. Now put a light plastic bottle cap on the sand and tap again. Draw what happens to that.",
      q: { text: "You tap a cup of wet sand with a coin on top. What happens?", options: ["The coin sinks", "The coin floats", "Nothing"], answer: 0, why: "Heavy things sink into liquefied ground. Light hollow things float up." }
    },
    field: {
      print: "Two houses on the same street. One is on solid rock, one on old river sand. The same earthquake hits. Describe what happens to each, and explain why using the word liquefaction.",
      q: { text: "During liquefaction, empty underground fuel tanks often do what?", options: ["Sink deeper", "Float up through the road surface", "Explode"], answer: 1, why: "They are hollow and light. In liquid ground they rise, and they have broken through roads in several real earthquakes." }
    },
    chief: {
      print: "In 1906 San Francisco, more damage came from fire than from shaking. Write a paragraph explaining the chain of events, including why the fire could not be stopped. Then suggest two things a modern city could do to break that chain.",
      q: { text: "Why was the 1906 San Francisco fire so hard to fight?", options: ["No firefighters were available", "The same shaking that started the fires also broke the water mains", "It was raining oil"], answer: 1, why: "Broken gas lines started fires. Broken water mains meant no pressure in the hydrants. Modern cities use automatic gas shutoff valves and independent emergency water systems." }
    }
  },
  cooperate: "One person taps the cup at a steady beat. One person watches the coin. The 6 year old counts the taps out loud so the rhythm stays even. It will not work if the tapping is uneven.",
  check: { from: 15, q: "From page 15. True or false: hot still weather can cause earthquakes.", options: ["True", "False"], answer: 1, why: "False. Earthquakes start kilometres underground where weather has no effect." },
  badge: {
    digit: 1,
    title: "BADGE 5 CHALLENGE: HAZARD OFFICER",
    questions: [
      { text: "What causes a tsunami?", options: ["Strong wind", "The seafloor suddenly moving up or down", "The tide"], answer: 1, why: "Displacement of the seafloor lifts the whole water column." },
      { text: "The sea pulls back off the beach. What does it mean?", options: ["Low tide", "A tsunami trough arrived first. Run uphill", "Good time to collect shells"], answer: 1, why: "Run. You may have only minutes." },
      { text: "TRAP. Someone says the first tsunami wave is always the biggest. Right?", options: ["Right", "Wrong, the second or third is often larger and they arrive far apart"], answer: 1, why: "People have died returning between waves. Stay high." },
      { text: "What is liquefaction?", options: ["Rock melting into lava", "Shaken wet loose ground temporarily behaving like a liquid", "Water flooding a city"], answer: 1, why: "The grains lose contact and the ground loses strength." },
      { text: "TRAP. A friend says fire has nothing to do with earthquakes. Reply?", options: ["Correct", "Wrong. Broken gas lines start fires and broken water mains stop anyone fighting them"], answer: 1, why: "Fire has repeatedly caused more destruction than the shaking itself." }
    ]
  },
  seismo: 7
},
{
  n: 18, unit: 6, unitTitle: "FIGHTING BACK",
  title: "Buildings That Dance",
  hook: "The strongest building is not the stiffest one. It is the one that knows how to move.",
  predict: {
    text: "Two towers on a shake table. One is rigid concrete. One can sway and bend. Which survives?",
    options: [
      "The rigid one, it resists the force",
      "The bendy one, it absorbs the energy by moving",
      "Neither"
    ],
    answer: 1,
    reveal: "The bendy one, almost always. A rigid building has to absorb all the energy by cracking. A flexible building turns the energy into motion instead. And where it does get bent too far, good steel bends and stays bent rather than snapping. Engineers call that second property ductility, and it is the single biggest idea in earthquake design."
  },
  core: `Engineers have four main weapons.

<b>Base isolation</b> is the best one. The building sits on huge rubber and steel pads instead of touching the foundation directly. The ground slides about underneath without taking the building with it. The building sways slowly and the people inside barely notice.

A tuned mass <b>damper</b> is a giant weight hung near the top of a skyscraper. When the building leans left, the weight swings right, and it cancels the sway.

Cross bracing turns rectangles into triangles. A rectangle can be pushed into a leaning parallelogram. A triangle cannot deform without breaking something, so it holds its shape.

Shape and symmetry matter too. Simple, regular, symmetrical buildings survive. Odd shapes twist and tear themselves apart at the corners.

And none of it saves you from liquefaction. If the ground turns to soup, a perfect building simply lies down in it.`,
  terms: [["base isolation", "Building sits on shock absorbers"], ["damper", "A weight that cancels the sway"]],
  art: "buildings",
  artCaption: "Base isolation, tuned mass damper, cross bracing. Three ways to survive.",
  okonkwo: "Push on a rectangle made of straws. It folds. Add one diagonal straw. Now push. That diagonal is worth more than all the concrete in the world.",
  build: {
    title: "BUILD IT: THE SHAKE TABLE CHALLENGE",
    materials: "A tray of set jelly, dry spaghetti, mini marshmallows or blu tack, a ruler, a stopwatch.",
    steps: [
      "Everyone builds a tower on a small card base. Spaghetti for the beams, marshmallows for the joints.",
      "Minimum height 25 cm. Put a coin on top as the roof load.",
      "Place each tower on the jelly tray, one at a time.",
      "Shake the tray side to side at a steady rhythm. Same rhythm for every tower.",
      "Time how many seconds each tower survives before the coin falls.",
      "Record the results. Then rebuild the worst one using what the best one did."
    ],
    predict: "Predict first, before any shaking. Write down whose tower will last longest, and why.",
    result: "Towers with triangles beat towers with rectangles. Wide bases beat narrow ones. Symmetrical beats lopsided. If a tall thin tower beat a short fat one, look at whether it was swaying in time with your shaking. That is resonance, and it is why some buildings fall while their neighbours stand.",
    wrong: "What went wrong? Which joint failed first on each tower? Write it down. This is the most useful thing on the page."
  },
  doors: {
    little: {
      print: "Build a square out of four straws and push it. Draw what happens. Now add one straw across the corner and push again. Draw what happens. Which one is stronger?",
      q: { text: "Which shape does not fold when you push it?", options: ["A square", "A triangle"], answer: 1, why: "A triangle cannot change shape without breaking a side. That is why bracing works." }
    },
    field: {
      print: "Label the three engineering defences on the diagram. Then run the tower challenge and fill in the results table: builder, height, seconds survived, first joint to fail.",
      q: { text: "What does base isolation actually do?", options: ["Makes the building heavier", "Lets the ground move without dragging the building with it", "Bolts the building to bedrock"], answer: 1, why: "The pads decouple the building from the ground. Ground moves, building mostly does not." }
    },
    chief: {
      print: "Every building has a natural sway rhythm. Earthquakes shake at many rhythms at once. When the two match, the building's sway grows enormously. This is resonance. Explain why tall flexible buildings and short stiff buildings are damaged by DIFFERENT earthquakes, and what an engineer can do about it.",
      q: { text: "In Mexico City in 1985, mid-height buildings collapsed while very tall and very short ones nearby survived. Why?", options: ["The mid-height ones were badly built", "The soft lake-bed soil shook at a rhythm matching mid-height buildings, causing resonance", "Random luck"], answer: 1, why: "The old lake bed filtered the waves to a slow rhythm that matched buildings of roughly 6 to 15 storeys. Matching rhythms means the sway builds with each cycle." }
    }
  },
  cooperate: "Four towers, four builders. The 6 year old is the official timekeeper with the stopwatch and their count is final. The 8 year old shakes the tray, and must shake identically for every tower or the test is not fair.",
  check: { from: 17, q: "From page 17. What is it called when shaken wet ground behaves like a liquid?", options: ["Subduction", "Liquefaction", "Convection"], answer: 1, why: "Liquefaction." },
  seismo: 8
},
{
  n: 19, unit: 6, unitTitle: "FIGHTING BACK",
  title: "Thirty Seconds",
  hook: "The line on the machine just went off the paper. This is not a drill. Well. It is a drill. But do it properly.",
  predict: {
    text: "The ground starts shaking hard and you are indoors. What is the safest thing to do?",
    options: [
      "Run outside as fast as you can",
      "Stand in a doorway",
      "Drop to the floor, get under a sturdy table, and hold on"
    ],
    answer: 2,
    reveal: "Drop, Cover, Hold On. Running outside is how most people get hurt, because the dangerous zone is right outside the building where glass and bricks fall. The doorway advice is out of date and comes from old adobe houses. In a modern building a doorway is no stronger than any other wall and has nothing to shield you from falling objects."
  },
  core: `In some countries a phone or a siren gives you a few seconds of warning. That alarm means drop, right now, do not stop to read it. Everywhere else there is no warning at all. Either way you get about thirty seconds and whatever you already knew.

DROP. Get down on your hands and knees before the shaking knocks you down. From here you can still move.

COVER. Get under a sturdy table and hold on to a leg. No table? Get next to an interior wall, away from windows, and cover your head and neck with your arms. In modern buildings most injuries come from things falling on people. Where buildings are old and unreinforced, collapse is still the biggest killer, which is why page 18 matters as much as this one.

HOLD ON. Keep hold of the table and move with it. It will slide.

Stay put until the shaking fully stops. Then check yourself, then check others, then leave calmly and stay away from walls, glass, and power lines.

If you are in bed, stay there and put a pillow over your head. If you are outdoors, move to open ground. If you are in a car, pull over away from bridges and stay inside.`,
  terms: [["Drop Cover Hold On", "The three moves that keep you alive"]],
  art: "dropcover",
  artCaption: "Indoors. In bed. Outdoors. In a car. Four situations, four correct answers.",
  okonkwo: "Practise this until it is boring. Boring is the point. In a real event you will not think, you will do whatever you have already done a hundred times.",
  drill: {
    title: "THE REAL DRILL. DO IT NOW.",
    body: `Someone shouts EARTHQUAKE without warning at some point today.

Everyone drops, covers, and holds on. Someone times it.

Do it again tomorrow, in a different room. Do it once with the lights off.

Then fill this in as a family:

OUR MEETING POINT OUTSIDE THE HOUSE: ______________
OUR MEETING POINT IF WE CANNOT GET HOME: ______________
OUR OUT OF AREA CONTACT (someone far away everyone can call): ______________
WHERE OUR GO BAG LIVES: ______________

GO BAG CONTENTS: water, torch, whistle, spare batteries, first aid kit, copies of documents, some cash, sturdy shoes, a warm layer, any medicine anyone needs.

WHY A WHISTLE: because after a few hours of shouting, nobody can hear you. A whistle carries much further and takes no energy.`
  },
  doors: {
    little: {
      print: "Do the drill three times. Then draw your safe spot in your bedroom and your safe spot in the kitchen. Put a big star on each one.",
      q: { text: "The ground starts shaking. What do you do first?", options: ["Run outside", "Drop down onto your hands and knees", "Stand still"], answer: 1, why: "Drop first, before it knocks you over. Then cover, then hold on." }
    },
    field: {
      print: "Walk through every room of your house and find the safest spot in each. Write them in the list. Then find three things that could fall on someone and tell a grown up which ones should be fixed to the wall.",
      q: { text: "Why is running outside during shaking a bad idea?", options: ["You might get lost", "The area just outside a building is where glass, bricks, and signs fall", "Outside is colder"], answer: 1, why: "The perimeter of a building is the most dangerous place to be. Stay in, get under, hold on." }
    },
    chief: {
      print: "You are responsible for the whole family for the first hour after a big quake. Write a numbered action plan. First 60 seconds. Next 10 minutes. Next hour. Include: who checks on whom, what to shut off, what not to do, and how you would communicate if the phone network is down.",
      q: { text: "Why does the doorway advice persist even though it is wrong for modern homes?", options: ["It is still correct", "It came from old adobe buildings where the doorframe was the only reinforced part. Modern doorways offer no extra strength and no overhead protection", "Doorways are magnetic"], answer: 1, why: "A famous photograph of a collapsed adobe house with only the doorway left standing created advice that outlived the buildings it applied to." }
    }
  },
  check: { from: 16, q: "From page 16. How fast does a tsunami travel in deep ocean?", options: ["About 80 km/h", "About 800 km/h", "About 8000 km/h"], answer: 1, why: "About 800 km/h, roughly the speed of a passenger jet." },
  badge: {
    digit: 3,
    title: "BADGE 6 CHALLENGE: STATION CHIEF",
    questions: [
      { text: "Shaking starts. First move?", options: ["Run outside", "Drop", "Stand in a doorway"], answer: 1, why: "Drop, Cover, Hold On." },
      { text: "Which shape resists being pushed out of shape?", options: ["Square", "Triangle"], answer: 1, why: "Triangles cannot deform without a side breaking." },
      { text: "TRAP. A friend says stand in a doorway, everyone knows that. Reply?", options: ["Good advice", "Out of date. It came from adobe houses. Get under a table instead"], answer: 1, why: "Modern doorways give no strength advantage and no overhead cover." },
      { text: "What does base isolation do?", options: ["Makes buildings taller", "Separates the building from the shaking ground with flexible pads", "Adds concrete"], answer: 1, why: "Decoupling. Ground moves, building mostly stays put." },
      { text: "TRAP. Someone says once the shaking stops it is all over. True?", options: ["True", "False. Aftershocks, fire, gas leaks, and damaged structures are all still ahead"], answer: 1, why: "The minutes after are often the most dangerous. Aftershocks bring down already weakened buildings." }
    ]
  },
  seismo: 10
},
{
  n: 20, unit: 7, unitTitle: "CERTIFICATION", capstone: true,
  title: "The Case Opens",
  hook: "You have six digits. Dr. Okonkwo is waiting.",
  core: `The shaking stopped four minutes ago. Dr. Okonkwo puts down her mug and looks at you.

"Well," she says. "That was a magnitude 6.1, about 30 km out, roughly 12 km deep. The intensity out here was mild. In town it will not have been. The station held. You all did the drill without being told. Good."

She slides the metal case across the desk.

"Open it."

Inside there is no equipment. There is a map, and a letter.

THE LETTER

A town of 8000 people is going to be built on the coastline shown on this map. A fault line runs through the valley. There is hard rock on the eastern hills, old soft river sand along the river, and low flat ground beside the sea.

You decide where everything goes. Nobody is going to check your answer against a key, because there isn't one. There is only better reasoning and worse reasoning.

PLACE THESE: the hospital, the school, the fire station, the housing, the power station, the emergency meeting point, the road out.

RULES: nothing sits directly on the fault. The hospital and fire station must still work the day after a large earthquake. The school must not be on liquefiable ground. Somebody has to live somewhere, so you cannot simply avoid every risk.

THEN DEFEND IT: pick your three hardest decisions and write a short paragraph on each explaining why you chose that spot and what you gave up to get it.`,
  art: "capstone",
  artCaption: "The valley. Fault line in red. Hard rock shaded. Soft sand dotted. Sea to the west.",
  okonkwo: "Every real town is a set of compromises somebody made, usually before anyone thought about the fault. You are getting to do it in the right order. Do not waste that.",
  doors: {
    little: {
      print: "Colour the map. Green for hills, yellow for sand, blue for sea. Draw the houses, the school with a flag, and the hospital with a cross. Then draw the safe path from the school to the meeting point.",
      q: { text: "Where should the school NOT be built?", options: ["On the hard rock hills", "On the soft river sand", "Near a road"], answer: 1, why: "Soft wet sand liquefies. That is liquefaction, from page 17. Hard rock is the safest foundation." }
    },
    field: {
      print: "Place all seven items on the map. Then write one sentence for each explaining why it is there. Your sentences must use at least four words from the vocabulary list.",
      q: { text: "Why must the fire station be on the most stable ground?", options: ["Fire engines are heavy", "It has to still function immediately after the quake, when fires start", "It looks better"], answer: 1, why: "Emergency services that fail in the event are worse than useless. They must survive to be of any use." }
    },
    chief: {
      print: "Full brief. Place everything, then write your three defences. Then do the hard part: identify the weakest decision you made, the one you are least sure about, and explain what evidence would change your mind. A plan with no admitted weak point is a plan nobody has thought about properly.",
      q: { text: "You cannot make every part of the town safe. What is the correct engineering response?", options: ["Refuse to build the town", "Rank what must survive, and concentrate protection there while accepting managed risk elsewhere", "Build everything identically"], answer: 1, why: "Risk management, not risk elimination. Hospitals and schools get the best ground and the strictest codes. That is how real building codes actually work." }
    }
  },
  certificate: {
    title: "CERTIFICATE OF SEISMOLOGY",
    body: "This certifies that the holder can explain what a tectonic plate is, read a seismogram, locate an epicentre by triangulation, tell magnitude apart from intensity, spot three earthquake myths, and knows exactly what to do in the first thirty seconds.",
    signature: "Dr. A. Okonkwo, Shake Station 7"
  },
  final: `Dr. Okonkwo signs your certificate and hands it over.

"One last thing," she says. "Everything in this book is what we knew this year. Some of it will be improved on. Some of it might turn out to be wrong. That is not a weakness of science, it is the whole method.

Wegener was laughed at for fifty years and he was right.

Somebody will be right about something we currently laugh at. It could be one of you.

Now go home and check your bookshelf is bolted to the wall."`,
  seismo: 0
}
];
