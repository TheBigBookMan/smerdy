//* Tech
import DalorianBeach from "../images/hobbiesImages/AI/DalorianBeach.png";
import BurningMan from "../images/hobbiesImages/AI/BurningMan.png";
import Cyborg from "../images/hobbiesImages/AI/Cyborg.png";
import EdgeUniverse from "../images/hobbiesImages/AI/EdgeUniverse.png";
import GingerElton from "../images/hobbiesImages/AI/GingerElton.png";
import JumpingNebula from "../images/hobbiesImages/AI/JumpingNebula.png";
import Nostalgia from "../images/hobbiesImages/AI/Nostalgia.png";
import SteamPunkParis from "../images/hobbiesImages/AI/SteamPunkParis.png";
import SurfingNebula from "../images/hobbiesImages/AI/SurfingNebula.png";
import WhaleBeach from "../images/hobbiesImages/AI/WhaleBeach.png";

//* Guitar
import Drifting from "../images/hobbiesImages/guitar/Drifting.png";
import Nothing from "../images/hobbiesImages/guitar/Nothing.png";
import River from "../images/hobbiesImages/guitar/River.png";
import Tears from "../images/hobbiesImages/guitar/Tears.png";

//* Hiking
import Big from "../images/hobbiesImages/hiking/Big.jpg";

//* Sport
import Surfing from "../images/hobbiesImages/sport/Surfing.png";

//* Travel
import Turkey from "../images/hobbiesImages/travel/Turkey.png";

import {
  FaGuitar,
  FaHiking,
  FaMapMarkerAlt,
  FaRunning,
  FaRobot,
} from "react-icons/fa";

export const reactIcons = [
  FaRobot,
  FaGuitar,
  FaHiking,
  FaMapMarkerAlt,
  FaRunning,
];

//!
//! NEED TO ADD IN BOOLEAN FOR HAS LINKS SO THE GUITAR ONE CAN BE CLCIKED ON AND TAKEN TO YOUTUBE LINK
//!

export const thumbnails = [
  {
    image: DalorianBeach,
    category: "Technology",
    mainDescription:
      "I love to learn about all different types of technology, that is what made me so interested in programming. I started out learning about blockchain and cryptocurrencies, which lead me to try understand how they were created. This brought me to programming, and since then I have continued to learn about the wide variety of different technologies related to programming- starting with web development. I have a big interest in AI and I have tried out the Dall-E text-to-image AI creator, here is just a showcase of some of the ones that I made. I am eager to learn more as I further my career.",
    showcase: [
      {
        imageShowcase: DalorianBeach,
        descriptionShowcase:
          "Image prompt- The Delorean from Back to the Future on a synthwave beach, digital art",
      },
      {
        imageShowcase: BurningMan,
        descriptionShowcase:
          "Image prompt- Burning Man festival looking up at the stars",
      },
      {
        imageShowcase: Cyborg,
        descriptionShowcase:
          "Image prompt- Futuristic cyborg standing on a train station platform smoking",
      },
      {
        imageShowcase: EdgeUniverse,
        descriptionShowcase:
          "Image prompt- Edge of the universe in the style of Salvador Dali",
      },
      {
        imageShowcase: GingerElton,
        descriptionShowcase:
          "Image prompt- Photorealistic ginger cat wearing Elton John glasses",
      },
      {
        imageShowcase: JumpingNebula,
        descriptionShowcase:
          "Image prompt- Jumping off a cliff into a pool that is the nebula",
      },
      {
        imageShowcase: Nostalgia,
        descriptionShowcase:
          "Image prompt- Listening to nostalgic music in the style of Salvador Dali",
      },
      {
        imageShowcase: SteamPunkParis,
        descriptionShowcase: "Image prompt- Photorealistic steam punk Paris",
      },
      {
        imageShowcase: SurfingNebula,
        descriptionShowcase: "Image prompt- Surfing into a nebula sunset",
      },
      {
        imageShowcase: WhaleBeach,
        descriptionShowcase:
          "Image prompt- Man standing on a beach looking at a whale in the sky",
      },
    ],
  },
  {
    image: Drifting,
    category: "Guitar",
    mainDescription: "",
    showcase: [
      {
        imageShowcase: Drifting,
        descriptionShowcase:
          "Drifting by Andy Mckee- Percussive acoustic fingerstyle arrangement which took me a full year to learn as it was very technically complex. However absolutely stoked I pushed through to complete it as it was very challenging. My favourite song to play with how fun the rhythm and beats are.",
        url: "https://www.youtube.com/watch?v=_6iANKhxPI0",
      },
      {
        imageShowcase: Nothing,
        descriptionShowcase:
          "Nothing Else Matters (Metallica) by James Bartholomew Arrangement- Always loved Metallica and being able to play a fingerstyle version of their massive hit song was an absolute dream. This was extremely fun to play!",
        url: "https://www.youtube.com/watch?v=NTdwrmbMnjA",
      },
      {
        imageShowcase: River,
        descriptionShowcase:
          "River Flows In You (Yiruma) by James Bartholomew Arrangement- Took a while to learn, but I absolutely loved how the song sounds, it is very relaxing and has a great flow to how it is played with fingerstyle. My second favourite song to play behind Drifting.",
        url: "https://www.youtube.com/watch?v=JbiCs6w7uPc",
      },
      {
        imageShowcase: Tears,
        descriptionShowcase:
          "Tears In The Rain by Joe Satriani- I learnt this when I was 16 and I just loved how simple yet great sounding the song was, this rendition I made around 7 years ago and I still love it.",
        url: "https://www.youtube.com/watch?v=axZytQDZzh4",
      },
    ],
  },
  {
    image: Big,
    category: "Hiking",
    mainDescription: "",
    showcase: [
      {
        imageShowcase: "",
        descriptionShowcase: "",
      },
    ],
  },
  {
    image: Turkey,
    category: "Travel",
    mainDescription: "",
    showcase: [
      {
        imageShowcase: "",
        descriptionShowcase: "",
      },
    ],
  },
  {
    image: Surfing,
    category: "Sport",
    mainDescription: "",
    showcase: [
      {
        imageShowcase: "",
        descriptionShowcase: "",
      },
    ],
  },
];
