export interface Life {
  image: string;
  title: string;
  description: string;
  alt?: string;
}

export const LIFE_DATA: readonly Life[] = [
  {
    image: "/about-me/family.jpg",
    title: "My Pillar since Young",
    description: "The faces who have watched me grow.",
    alt: "Family photo showing support system",
  },
  {
    image: "/about-me/computing_club_speech.jpg",
    title: "Computing Club Speech",
    description: "Giving a speech to kickstart the new committee.",
    alt: "Speaking at Computing Club event",
  },
  {
    image: "/about-me/earth_networking.jpg",
    title: "Earth VC Event",
    description: "Networking with venture capitalists at Earth VC.",
    alt: "Networking at Earth VC event",
  },
  {
    image: "/about-me/golf_course.jpg",
    title: "Golf Course",
    description: "Me and my pals at Marina Bay Golf Course",
    alt: "Group photo at Marina Bay Golf Course",
  },
  {
    image: "/about-me/guitar_on_stage.jpg",
    title: "Guitar Performance",
    description: "I play the guitar sometimes... and perform too!",
    alt: "Playing guitar on stage",
  },
  {
    image: "/about-me/hackathon_speech.JPG",
    title: "Hackathon",
    description: "Who doesn't love the mic?",
    alt: "Speaking at hackathon event",
  },
  {
    image: "/about-me/hackathon_speech_2.jpg",
    title: "Hackathon Speech",
    description: "Presenting our novel drone rental platform.",
    alt: "Presenting at hackathon",
  },
  {
    image: "/about-me/nice_uncle.jpg",
    title: "A Really Nice Uncle",
    description:
      "A memorable conversation with a friendly restaurant owner in Vietnam.",
    alt: "Meeting restaurant owner in Vietnam",
  },
  {
    image: "/about-me/nus_module_presentation.jpg",
    title: "NUS Module Presentation",
    description: "Presenting technological innovations at National Gallery.",
    alt: "Presenting at National Gallery",
  },
  {
    image: "/about-me/rider.jpg",
    title: "Riding Adventure",
    description: "Exploring the countryside on a bike ride.",
    alt: "Bike riding adventure",
  },
  {
    image: "/about-me/skillio_panel_discussion.jpg",
    title: "Skillio Panel Discussion",
    description: "Participating in a panel discussion at Skillio.",
    alt: "Panel discussion at Skillio",
  },
  {
    image: "/about-me/trip_with_friends.jpg",
    title: "Exploration with Friends",
    description: "A fun trip with friends around Vietnam.",
    alt: "Group trip in Vietnam",
  },
] as const;
