// import { assetPath } from "../utils/assets";
import type { Youtuber } from "../types";

/**
 * To add a channel: copy any object below, give it a unique `id`, fill in
 * the fields, and drop its avatar image into public/images/youtubers/.
 * That's it - no other file needs to change. See
 * docs/04-Content-and-Search-System.md for the full contributor guide.
 */

export const youtubers: Youtuber[] = [
  // ============================================================
  // TECH & PROGRAMMING
  // ============================================================

  {
    id: "apna-college",
    type: "youtuber",
    channelName: "Apna College",
    handle: "@ApnaCollegeOfficial",
    description:
      "Programming, data structures, algorithms, web development and placement-focused computer science education.",
    categories: ["Programming", "DSA", "Web Development", "Education"],
    knownFor: "DSA, Java, C++, Web Development and placement preparation",
    image:
      "https://yt3.ggpht.com/FEcjRtez5od8UowDo6tTt9WlE-MrIFEmcwPMTORmK9Swk6KCklOmA3xfIG9WuLWfNYfNThQE=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@ApnaCollegeOfficial",
    tags: ["coding", "dsa", "java", "cpp", "web-development", "placements"],
    featured: true,
  },

  {
    id: "code-with-harry",
    type: "youtuber",
    channelName: "CodeWithHarry",
    handle: "@CodeWithHarry",
    description:
      "Programming and web development tutorials covering Python, JavaScript, React, backend development and more.",
    categories: ["Programming", "Web Development", "Python", "JavaScript"],
    knownFor: "Hindi programming tutorials and web development courses",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_kX3sdbuu3KFmRPsmlu0R5Rx_BhpxwupjtvJmkEdNfla7w=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@CodeWithHarry",
    tags: [
      "coding",
      "python",
      "javascript",
      "react",
      "web-development",
      "hindi",
    ],
    featured: true,
  },

  {
    id: "programming-with-mosh",
    type: "youtuber",
    channelName: "Programming with Mosh",
    handle: "@programmingwithmosh",
    description:
      "Clear and structured programming tutorials for developers learning modern software development.",
    categories: ["Programming", "Software Development", "Web Development"],
    knownFor:
      "Programming fundamentals, JavaScript, Python, C# and software development",
    image:
      "https://yt3.ggpht.com/HCv0fXFEEcD0HRyF0_qR1K7b7qO3KCzmIoyH1DEJYB94CIUFhIE5i2t2IDIPX97W1-DK4hegww=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@programmingwithmosh",
    tags: [
      "programming",
      "javascript",
      "python",
      "csharp",
      "software-development",
    ],
    featured: true,
  },

  {
    id: "chai-aur-code",
    type: "youtuber",
    channelName: "Chai aur Code",
    handle: "@chaiaurcode",
    description:
      "Practical programming and full-stack development tutorials with a strong focus on modern JavaScript technologies.",
    categories: ["Programming", "JavaScript", "Web Development", "Backend"],
    knownFor: "JavaScript, React, Node.js and full-stack development",
    image:
      "https://yt3.ggpht.com/6tLBV-DRVemxhmanuezR5HkHshX2g7Y46Rq8cysyO1V-nd2SaQ2Fi8cdgVM-n6v_8XZ5BEimxXI=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@chaiaurcode",
    tags: ["javascript", "react", "nodejs", "backend", "full-stack", "hindi"],
    featured: true,
  },

  {
    id: "web-dev-simplified",
    type: "youtuber",
    channelName: "Web Dev Simplified",
    handle: "@WebDevSimplified",
    description:
      "Straightforward tutorials that simplify modern web development concepts and technologies.",
    categories: ["Web Development", "JavaScript", "CSS", "Frontend"],
    knownFor: "JavaScript, CSS, HTML and practical frontend development",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@WebDevSimplified",
    tags: ["javascript", "css", "html", "frontend", "web-development"],
    featured: true,
  },

  {
    id: "freecodecamp",
    type: "youtuber",
    channelName: "freeCodeCamp.org",
    handle: "@freecodecamp",
    description:
      "Long-form programming and computer science courses covering web development, Python, AI, databases and more.",
    categories: ["Programming", "Web Development", "Computer Science", "AI"],
    knownFor: "Full-length programming courses and project-based learning",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@freecodecamp",
    tags: [
      "programming",
      "web-development",
      "python",
      "ai",
      "computer-science",
    ],
    featured: true,
  },

  {
    id: "techworld-with-nana",
    type: "youtuber",
    channelName: "TechWorld with Nana",
    handle: "@TechWorldwithNana",
    description:
      "DevOps, cloud, Kubernetes and modern software engineering tutorials explained through practical examples.",
    categories: ["DevOps", "Cloud", "Kubernetes", "Software Engineering"],
    knownFor: "DevOps, Docker, Kubernetes, CI/CD and cloud technologies",
    image:
      "https://yt3.ggpht.com/ZAuMKdMcyV3mhX857oCGWzQAQ4AqZhiDIO76MTC_DqckrujSNg5Mh2AQh6ngWYv7bzfu7TBoj24=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@TechWorldwithNana",
    tags: ["devops", "docker", "kubernetes", "cloud", "cicd"],
    featured: true,
  },

  {
    id: "train-with-shubham",
    type: "youtuber",
    channelName: "Train With Shubham",
    handle: "@TrainWithShubham",
    description:
      "Cloud, DevOps, system design and software engineering content designed for developers and technology professionals.",
    categories: ["DevOps", "Cloud", "Software Engineering"],
    knownFor: "DevOps, AWS, cloud computing and system design",
    image:
      "https://yt3.ggpht.com/xwSdp5kDSdw3Qk69VE1GirY5OOI5hFs3VJDPvtHIfnkHX6csgMsjS7ez8ycib6vB2IkAyzL7-A=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@TrainWithShubham",
    tags: ["devops", "aws", "cloud", "system-design", "software-engineering"],
    featured: false,
  },

  {
    id: "three-blue-one-brown",
    type: "youtuber",
    channelName: "3Blue1Brown",
    handle: "@3blue1brown",
    description:
      "Visual explanations of mathematics, linear algebra, calculus, probability and mathematical concepts behind computing.",
    categories: ["Mathematics", "Education", "Computer Science"],
    knownFor: "Mathematical visualization and intuitive explanations",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_nFzZFPLxPZRHcE3SSwzdrbuWqfoWYwLAu0_2iO6blQYAU=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@3blue1brown",
    tags: ["math", "linear-algebra", "calculus", "education", "visualization"],
    featured: true,
  },

  {
    id: "sheryians",
    type: "youtuber",
    channelName: "Sheryians Coding School",
    handle: "@sheryians",
    description:
      "Coding and web development education focused on practical projects and modern development technologies.",
    categories: ["Programming", "Web Development", "Frontend"],
    knownFor: "Web development, JavaScript and practical coding projects",
    image:
      "https://yt3.ggpht.com/t8z86Svc4diX-k6VHCZ7AY0EFgVin91qLZigPwJLnavVaB0YPa0etWa-c7bG1BUEcbB4U4im=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@sheryians",
    tags: ["coding", "javascript", "web-development", "frontend", "projects"],
    featured: false,
  },

  {
    id: "nate-herk",
    type: "youtuber",
    channelName: "Nate Herk",
    handle: "@nateherk",
    description:
      "Automation, AI workflows, no-code tools and practical strategies for building efficient digital systems.",
    categories: ["AI", "Automation", "Productivity", "Technology"],
    knownFor: "AI automation and workflow building",
    image:
      "https://yt3.ggpht.com/rjiskq1h4EjTgsqvP_BOsnpwCdHUHKvSo00RmUraoWqDuHQN6RAUMdo1ircHs0ZcKQrrWNvukEs=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@nateherk",
    tags: ["ai", "automation", "workflows", "productivity", "nocode"],
    featured: false,
  },

  {
    id: "cutting-edge-school",
    type: "youtuber",
    channelName: "Cutting Edge School",
    handle: "@CuttingEdgeSchool",
    description:
      "Technology and programming education covering practical development and modern technical concepts.",
    categories: ["Programming", "Technology", "Education"],
    knownFor: "Programming and technology tutorials",
    image:
      "https://yt3.ggpht.com/_4WfQEfkuvl-8vEJW9GzCANNH-3xrwNNZcPJEG_uucZrlRQCNNMQl5jtF4QvWMAgdcMEAlilaw=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@CuttingEdgeSchool",
    tags: ["programming", "technology", "coding", "education"],
    featured: false,
  },

  {
    id: "traversy-media",
    type: "youtuber",
    channelName: "Traversy Media",
    handle: "@TraversyMedia",
    description:
      "Project-based tutorials covering frontend, backend, JavaScript frameworks and modern web technologies.",
    categories: ["Web Development", "JavaScript", "Frontend", "Backend"],
    knownFor: "Practical web development crash courses and projects",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_mLysKc36lc_FVk2j777olWvLOjgDz6NCNGdiQBnAKRENM=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@TraversyMedia",
    tags: ["javascript", "react", "nodejs", "frontend", "backend"],
    featured: true,
  },

  {
    id: "fireship",
    type: "youtuber",
    channelName: "Fireship",
    handle: "@Fireship",
    description:
      "Fast-paced explanations of programming, software engineering, web development and emerging technology.",
    categories: ["Programming", "Technology", "Web Development"],
    knownFor: "Fast technology explainers and developer news",
    image:
      "https://yt3.ggpht.com/3fPNbkf_xPyCleq77ZhcxyeorY97NtMHVNUbaAON_RBDH9ydL4hJkjxC8x_4mpuopkB8oI7Ct6Y=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@Fireship",
    tags: [
      "javascript",
      "web-development",
      "technology",
      "programming",
      "developer",
    ],
    featured: true,
  },

  {
    id: "the-net-ninja",
    type: "youtuber",
    channelName: "The Net Ninja",
    handle: "@NetNinja",
    description:
      "Structured coding tutorials covering JavaScript, React, Node.js, TypeScript and modern web development.",
    categories: ["Web Development", "JavaScript", "React", "Node.js"],
    knownFor: "Step-by-step web development courses",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_mk2Ex-8sW03SBlBX7D1EC5skH0kv9rS3rU9IXq2I-q2Zg=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@NetNinja",
    tags: ["javascript", "react", "nodejs", "typescript", "web-development"],
    featured: false,
  },

  {
    id: "bro-code",
    type: "youtuber",
    channelName: "Bro Code",
    handle: "@BroCodez",
    description:
      "Programming tutorials covering multiple languages, frameworks and software development fundamentals.",
    categories: ["Programming", "Web Development", "Software Development"],
    knownFor: "Beginner-friendly programming tutorials",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_mPFVsxROj1dOtTWc9iNBwDYV4z42Q8LPokBSewiW9pCSg=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@BroCodez",
    tags: ["programming", "javascript", "python", "java", "web-development"],
    featured: false,
  },

  {
    id: "kevin-powell",
    type: "youtuber",
    channelName: "Kevin Powell",
    handle: "@KevinPowell",
    description:
      "Frontend development education focused on CSS, responsive design and modern web interfaces.",
    categories: ["CSS", "Frontend", "Web Design"],
    knownFor: "CSS, responsive layouts and frontend design",
    image:
      "https://yt3.ggpht.com/gABekKWtQFmLIjVuhKwoPfd9nIRxAPPhyymO3XaOCc9wko28S9R_8CO125NFjZToZuLlSyfdrak=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@KevinPowell",
    tags: ["css", "frontend", "responsive-design", "web-design"],
    featured: false,
  },

  {
    id: "academind",
    type: "youtuber",
    channelName: "Academind",
    handle: "@academind",
    description:
      "In-depth software development tutorials covering JavaScript, React, Angular, Vue and backend technologies.",
    categories: ["Programming", "Web Development", "JavaScript"],
    knownFor: "Modern JavaScript frameworks and full-stack development",
    image:
      "https://yt3.ggpht.com/M4mm6T9eYXgCaQAaiROvSk96-VxRZzBn4bU41WBHDJkVSpV1AURGa1ZXqF6VJ-JXvdiVlOn6kw=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@academind",
    tags: ["javascript", "react", "angular", "vue", "full-stack"],
    featured: false,
  },

  {
    id: "the-coding-train",
    type: "youtuber",
    channelName: "The Coding Train",
    handle: "@TheCodingTrain",
    description:
      "Creative coding, JavaScript, algorithms, generative art and programming experiments.",
    categories: ["Programming", "Creative Coding", "JavaScript"],
    knownFor: "Creative coding and visual programming experiments",
    image:
      "https://yt3.ggpht.com/jx7pgOZeAW4tzBUOW3WVTCi8_RJEWZkJS4AiThnYvoS8TaL5zPwOk0gqBftyya9EMhOm80Yhgw=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@TheCodingTrain",
    tags: ["javascript", "creative-coding", "p5js", "algorithms"],
    featured: false,
  },

  {
    id: "cs50",
    type: "youtuber",
    channelName: "CS50",
    handle: "@cs50",
    description:
      "Harvard's computer science education covering programming, algorithms, systems and software development.",
    categories: ["Computer Science", "Programming", "Education"],
    knownFor: "CS50 computer science education",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_m7MWMBm4PynPndRMCxUEfNcU9Eufkk5ZkYI5RNjPchQ_c=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@cs50",
    tags: ["computer-science", "programming", "algorithms", "harvard"],
    featured: true,
  },

  {
    id: "computerphile",
    type: "youtuber",
    channelName: "Computerphile",
    handle: "@Computerphile",
    description:
      "Computer science concepts, programming, security, algorithms and computing explained by experts.",
    categories: ["Computer Science", "Programming", "Cybersecurity"],
    knownFor: "Computer science concepts and expert interviews",
    image:
      "https://yt3.ggpht.com/ebHMyRfch3u2UTZN1WQJDp9J5U7o38T_WnGkd2QhAIQwBgvozdaOCOnfDMtngtoHWutJvLl4i0c=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@Computerphile",
    tags: ["computer-science", "programming", "security", "algorithms"],
    featured: false,
  },

  {
    id: "sentdex",
    type: "youtuber",
    channelName: "sentdex",
    handle: "@sentdex",
    description:
      "Python programming, machine learning, data analysis and practical artificial intelligence projects.",
    categories: ["Python", "AI", "Machine Learning", "Programming"],
    knownFor: "Python, machine learning and AI projects",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_mWT-3HaBiihhDy3TGYNqjZt-OP8PivU_lMUjdhwntZ2LM=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@sentdex",
    tags: ["python", "machine-learning", "ai", "data-science"],
    featured: false,
  },

  {
    id: "telusko",
    type: "youtuber",
    channelName: "Telusko",
    handle: "@Telusko",
    description:
      "Programming and software development tutorials covering Java, Python, Spring, AI and web technologies.",
    categories: ["Programming", "Java", "Python", "AI"],
    knownFor: "Java, Python and software development tutorials",
    image:
      "https://yt3.ggpht.com/0nsZM3NF0C9bFr2IFXicMJ1w82ldRaZvGKFnezBe2lpW7F9gI92FaLubcTghnNNt4Ld8DfRvEMo=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@Telusko",
    tags: ["java", "python", "spring", "ai", "programming"],
    featured: false,
  },

  {
    id: "kunal-kushwaha",
    type: "youtuber",
    channelName: "Kunal Kushwaha",
    handle: "@KunalKushwaha",
    description:
      "Developer education focused on open source, DevOps, Java, cloud technologies and career development.",
    categories: ["Programming", "Open Source", "DevOps", "Career"],
    knownFor: "Open source, DevOps and developer career guidance",
    image:
      "https://yt3.ggpht.com/O8WpyZ5fkSpxQJDMA1N1WZeUp4foB4LTDeaQrRlZX_Ue4GTyMnz2J2yi4kXR4BNpGI55uzEs=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@KunalKushwaha",
    tags: ["opensource", "devops", "java", "cloud", "career"],
    featured: false,
  },

  {
    id: "codehelp",
    type: "youtuber",
    channelName: "CodeHelp - by Babbar",
    handle: "@CodeHelp",
    description:
      "Programming, DSA, web development and interview preparation for aspiring software developers.",
    categories: ["Programming", "DSA", "Web Development", "Interviews"],
    knownFor: "DSA, C++, Java and placement preparation",
    image:
      "https://yt3.ggpht.com/st0tjHROqHEs6scfJ0ZVyMPP1_bh18WJ7l4zAjR4yRf-9sX-eFz2heChzXkiF2TL2tyo2fj_mg=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@CodeHelp",
    tags: ["dsa", "cpp", "java", "coding", "interviews"],
    featured: false,
  },

  {
    id: "thapa-technical",
    type: "youtuber",
    channelName: "Thapa Technical",
    handle: "@ThapaTechnical",
    description:
      "Web development tutorials covering HTML, CSS, JavaScript, React, Node.js and full-stack projects.",
    categories: ["Web Development", "JavaScript", "React", "Full Stack"],
    knownFor: "Hindi web development tutorials",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_kFzvYt5kK5zhvKTRxXdB4th3a4y0b9zkedbplF6GnyOis=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@ThapaTechnical",
    tags: ["html", "css", "javascript", "react", "nodejs"],
    featured: false,
  },

  {
    id: "javascript-mastery",
    type: "youtuber",
    channelName: "JavaScript Mastery",
    handle: "@javascriptmastery",
    description:
      "Modern JavaScript, React, Next.js, AI applications and project-based software development tutorials.",
    categories: ["JavaScript", "React", "Next.js", "AI"],
    knownFor: "Modern React and full-stack project tutorials",
    image:
      "https://yt3.ggpht.com/ek0JxMA0h1uXpnYKFL_dYo1ny3LWzAuLwGvaqQwb9Qh2oEQJIPNEPjDrY9yKsvMmIrq_Ooq_=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@javascriptmastery",
    tags: ["javascript", "react", "nextjs", "ai", "projects"],
    featured: false,
  },

  // ============================================================
  // FACTS & GENERAL KNOWLEDGE
  // ============================================================

  {
    id: "minoqtopus",
    type: "youtuber",
    channelName: "Minoqtopus",
    handle: "@minoqtopus",
    description:
      "Interesting facts, unusual discoveries and entertaining educational information from around the world.",
    categories: ["Facts", "General Knowledge", "Education"],
    knownFor: "Interesting and unusual facts",
    image:
      "https://yt3.ggpht.com/kBKsXnc0eNFg0OXqf0-jnaAClE0FiTumUWm4k_vtJGNHU_BZZ8CcpUTdVL-DF8S5duanlxvOS90=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@minoqtopus",
    tags: ["facts", "knowledge", "interesting", "education"],
    featured: true,
  },

  {
    id: "developete",
    type: "youtuber",
    channelName: "Developete",
    handle: "@Developete",
    description:
      "Interesting knowledge, facts and educational content presented in an accessible and engaging format.",
    categories: ["Facts", "Education", "Knowledge"],
    knownFor: "Educational facts and general knowledge",
    image:
      "https://yt3.ggpht.com/DT7O_xioFBZllihmSaKnI_CSVIZlIuAURRTLwFGQNZb5910Xpx_CtsjeN6ZmemSf_VSH2camnw=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@Developete",
    tags: ["facts", "education", "knowledge", "interesting"],
    featured: false,
  },

  {
    id: "kurzgesagt",
    type: "youtuber",
    channelName: "Kurzgesagt - In a Nutshell",
    handle: "@kurzgesagt",
    description:
      "Animated explanations covering science, space, biology, technology and humanity.",
    categories: ["Science", "Education", "General Knowledge"],
    knownFor: "Animated science and educational explanations",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_n1Ribd7LwdP_qKtqWL3ZDfIgv9M1d6g78VwpHGXVR2Ir4=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@kurzgesagt",
    tags: ["science", "space", "biology", "education", "animation"],
    featured: true,
  },

  {
    id: "veritasium",
    type: "youtuber",
    channelName: "Veritasium",
    handle: "@veritasium",
    description:
      "Science and engineering topics explored through experiments, demonstrations and expert explanations.",
    categories: ["Science", "Engineering", "Education"],
    knownFor: "Science experiments and thought-provoking explanations",
    image:
      "https://yt3.ggpht.com/7vCbvtCqtjQ3YLgsJt7Y952MQV1sBvhllSCSxHP8_sVZdcPCBrITfhkN2RdyCuwPnsByq-1GoA=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@veritasium",
    tags: ["science", "engineering", "experiments", "education"],
    featured: true,
  },

  {
    id: "vsauce",
    type: "youtuber",
    channelName: "Vsauce",
    handle: "@Vsauce",
    description:
      "Curious explorations of science, philosophy, psychology, mathematics and unusual questions.",
    categories: ["Science", "Philosophy", "Psychology", "Facts"],
    knownFor: "Curiosity-driven science and philosophical questions",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_mpYedipdXUXCKkwjQEeFrepFlDHZ0LiczqWeKyG0YmJvA=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@Vsauce",
    tags: ["science", "philosophy", "psychology", "facts"],
    featured: false,
  },

  {
    id: "bright-side",
    type: "youtuber",
    channelName: "BRIGHT SIDE",
    handle: "@BRIGHTSIDEOFFICIAL",
    description:
      "General knowledge, interesting facts, mysteries, science and entertaining educational content.",
    categories: ["Facts", "Knowledge", "Entertainment"],
    knownFor: "Interesting facts and general knowledge",
    image:
      "https://yt3.ggpht.com/BimIuq2UYH1h-GQDEiV89I1dUEtpWVR8Mp_Q516vPN8rLw488Ap1G9ALhPUyqN8_HTPMbawTBDk=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@BRIGHTSIDEOFFICIAL",
    tags: ["facts", "knowledge", "mysteries", "science"],
    featured: false,
  },

  {
    id: "be-amazed",
    type: "youtuber",
    channelName: "Be Amazed",
    handle: "@BeAmazed",
    description:
      "Curious facts, unusual discoveries, mysteries and surprising information from around the world.",
    categories: ["Facts", "Mysteries", "Knowledge"],
    knownFor: "Amazing facts and unusual discoveries",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_lLu7luBolNV4u8h76qU8ANb2SdEw4OpXb8IP7-P1EFxJc=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@BeAmazed",
    tags: ["facts", "mysteries", "knowledge", "interesting"],
    featured: false,
  },

  {
    id: "top-tens",
    type: "youtuber",
    channelName: "TopTenz",
    handle: "@TopTenz",
    description:
      "Top lists, historical facts, strange events and interesting information across many subjects.",
    categories: ["Facts", "History", "Knowledge"],
    knownFor: "Top lists and interesting facts",
    image:
      "https://yt3.ggpht.com/L7rbeab3gcu99z7v6qw7-OrvOEMMftXQdPrtTh2ONdEZGikwF0tgoex3njDE9OPuJx6rzdhr=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@TopTenz",
    tags: ["facts", "history", "top-lists", "knowledge"],
    featured: false,
  },

  {
    id: "scishow",
    type: "youtuber",
    channelName: "SciShow",
    handle: "@SciShow",
    description:
      "Science news, explanations and fascinating discoveries covering biology, chemistry, physics and more.",
    categories: ["Science", "Education", "Knowledge"],
    knownFor: "Accessible science education",
    image:
      "https://yt3.ggpht.com/PeTBgposs2PwFQ9w75vPgEzKGZqHQb6slgisyh3dcF61uLD3y-tczPRhaH0s_AOSovMjtiBy1A=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@SciShow",
    tags: ["science", "biology", "chemistry", "physics"],
    featured: false,
  },

  {
    id: "smarter-every-day",
    type: "youtuber",
    channelName: "SmarterEveryDay",
    handle: "@smartereveryday",
    description:
      "Science, engineering and everyday phenomena explored through experiments and real-world demonstrations.",
    categories: ["Science", "Engineering", "Education"],
    knownFor: "Hands-on science and engineering experiments",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_l59Ewmp0DHZBRWbY9dVqjd2_mWwvrn8ad0bJfmdbMRYcA=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@smartereveryday",
    tags: ["science", "engineering", "experiments", "technology"],
    featured: false,
  },

  {
    id: "real-science",
    type: "youtuber",
    channelName: "Real Science",
    handle: "@RealScience",
    description:
      "Science documentaries and educational explanations about nature, technology and the world around us.",
    categories: ["Science", "Documentary", "Education"],
    knownFor: "Science documentaries and explanations",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_laXkwz2N1CloK3nQjouWj7uXLDgtXUbbmqlGpY7dDxFA=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@RealScience",
    tags: ["science", "documentary", "nature", "education"],
    featured: false,
  },

  {
    id: "history-matters",
    type: "youtuber",
    channelName: "History Matters",
    handle: "@HistoryMatters",
    description:
      "Concise and engaging explanations of historical events, people and geopolitical developments.",
    categories: ["History", "Education", "Knowledge"],
    knownFor: "Short historical explanations",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_m7VbNGf_qrMUEp3LQi8Rl8LP97JNqqX3mwOJFPkKyOkxw=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@HistoryMatters",
    tags: ["history", "education", "geography", "knowledge"],
    featured: false,
  },

  {
    id: "minuteearth",
    type: "youtuber",
    channelName: "MinuteEarth",
    handle: "@MinuteEarth",
    description:
      "Short animated explanations about Earth, biology, nature, evolution and environmental science.",
    categories: ["Science", "Nature", "Education"],
    knownFor: "Animated Earth and science explanations",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_katEIhwNI2gGmuRx4MGjzfCAn_VT96ty5YxNLQCY-MjQ=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@MinuteEarth",
    tags: ["earth", "science", "biology", "nature", "animation"],
    featured: false,
  },

  {
    id: "minutephysics",
    type: "youtuber",
    channelName: "MinutePhysics",
    handle: "@MinutePhysics",
    description:
      "Physics concepts explained using concise visual demonstrations and accessible storytelling.",
    categories: ["Physics", "Science", "Education"],
    knownFor: "Visual physics explanations",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_mNlRy8Ablr-4VtAT6eDe7ED-3tfNFZ0FwhEYdtc6B_oQ=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@MinutePhysics",
    tags: ["physics", "science", "education", "mathematics"],
    featured: false,
  },

  {
    id: "ted-ed",
    type: "youtuber",
    channelName: "TED-Ed",
    handle: "@TEDEd",
    description:
      "Animated educational lessons covering science, history, psychology, philosophy and everyday questions.",
    categories: ["Education", "Science", "Knowledge"],
    knownFor: "Animated educational lessons",
    image:
      "https://yt3.googleusercontent.com/PKUi-Lc3VFjUfsIhjK3n-FJDNBf-XQLdg4G4bv4fPFF96D3MVnkbub9ePpLoWdmdFgl5I1Zd=s160-c-k-c0x00ffffff-no-rj",
    channelUrl: "https://www.youtube.com/@TEDEd",
    tags: ["education", "science", "history", "psychology"],
    featured: true,
  },

  // ============================================================
  // MOTIVATION & PERSONAL DEVELOPMENT
  // ============================================================

  {
    id: "muniba-mazari",
    type: "youtuber",
    channelName: "Muniba Mazari",
    handle: "@MunibaMazariOfficial",
    description:
      "Motivational talks and personal stories focused on resilience, purpose, confidence and personal growth.",
    categories: ["Motivation", "Personal Development", "Inspiration"],
    knownFor: "Inspirational speaking and resilience",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_mmHwCZQu5OKRh8u0gS1FL6UfcSKQPAH0PIwusgf4TeSco=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@MunibaMazariOfficial",
    tags: ["motivation", "inspiration", "resilience", "growth", "pakistan"],
    featured: true,
  },

  {
    id: "ted",
    type: "youtuber",
    channelName: "TED",
    handle: "@TED",
    description:
      "Ideas and talks from experts, creators and leaders covering technology, science, business, society and personal growth.",
    categories: ["Motivation", "Education", "Ideas", "Personal Development"],
    knownFor: "TED Talks and expert ideas",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_koIFcCOrvh0KThLNOiazAIDu6hcs8bjkGNwe1f6A_OYm8=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@TED",
    tags: ["ted-talks", "motivation", "ideas", "education", "inspiration"],
    featured: true,
  },

  {
    id: "paritosh-anand",
    type: "youtuber",
    channelName: "Paritosh Anand",
    handle: "@iamparitoshanand",
    description:
      "Storytelling, motivation and personal development content centered around ambition, identity and growth.",
    categories: ["Motivation", "Storytelling", "Personal Development"],
    knownFor: "Motivational storytelling and personal growth",
    image:
      "https://yt3.ggpht.com/VN--7h0VvNY0uidA9W4jVk6Dp2PUTBBgvD_RqMYNRY3NYQcXeIRfF6-_BnkRtTxcUboQwKBK=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@iamparitoshanand",
    tags: ["motivation", "storytelling", "growth", "success", "mindset"],
    featured: true,
  },

  {
    id: "ali-abdaal",
    type: "youtuber",
    channelName: "Ali Abdaal",
    handle: "@aliabdaal",
    description:
      "Productivity, learning, career development, entrepreneurship and building a meaningful life.",
    categories: ["Productivity", "Motivation", "Career", "Business"],
    knownFor: "Productivity and intentional living",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_m2xx6mCZwsyjARnkwBKJxEv0FqGxGS2NwWNkjWH__Smw=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@aliabdaal",
    tags: ["productivity", "career", "business", "learning", "mindset"],
    featured: true,
  },

  {
    id: "mel-robbins",
    type: "youtuber",
    channelName: "Mel Robbins",
    handle: "@melrobbins",
    description:
      "Personal development, confidence, habits, mindset and practical strategies for improving everyday life.",
    categories: ["Motivation", "Personal Development", "Mindset"],
    knownFor: "Mindset and personal development",
    image:
      "https://yt3.ggpht.com/0k8TKNmLHIMquCtAvJPHB8u1Uy1vzb89aYghWZY8CRtKOkfMVmTBlUXvW2GoA3nTpVnputYuJw=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@melrobbins",
    tags: ["motivation", "mindset", "habits", "confidence", "growth"],
    featured: false,
  },

  {
    id: "brendon-burchard",
    type: "youtuber",
    channelName: "Brendon Burchard",
    handle: "@BrendonBurchard",
    description:
      "High-performance habits, motivation, leadership and personal development education.",
    categories: ["Motivation", "Leadership", "Personal Development"],
    knownFor: "High-performance personal development",
    image:
      "https://yt3.ggpht.com/zD6qAhO-HfGyHBJq-4TCj-nRdqvDl1b-igpBfclJLAxlAvHglEFISEzQQ2OZiLVcJeE4UvVULQ=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@BrendonBurchard",
    tags: ["motivation", "leadership", "performance", "mindset"],
    featured: false,
  },

  {
    id: "lewis-howes",
    type: "youtuber",
    channelName: "Lewis Howes",
    handle: "@lewishowes",
    description:
      "Personal development, entrepreneurship, relationships, mindset and conversations with influential guests.",
    categories: ["Motivation", "Business", "Personal Development"],
    knownFor: "The School of Greatness and personal growth",
    image:
      "https://yt3.ggpht.com/r0Te1zrZNGgavncanlYR4NY15ne1nHiYZgY3aVOtteHQu0ZKBJfTvkSaDNSVVrfD3O8LM42rAw=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@lewishowes",
    tags: ["motivation", "business", "mindset", "success", "entrepreneurship"],
    featured: false,
  },

  {
    id: "jordan-peterson",
    type: "youtuber",
    channelName: "Jordan B Peterson",
    handle: "@JordanBPeterson",
    description:
      "Lectures and discussions covering psychology, philosophy, responsibility, meaning and personal development.",
    categories: ["Psychology", "Personal Development", "Philosophy"],
    knownFor: "Psychology, meaning and personal responsibility",
    image:
      "https://yt3.ggpht.com/EjQNRQGTldnH7kUHaRRWa_yOa6Po-GODJN0xqJEmsji96cAVBdLggAgHlw2DbKSvomyo3xm2CX0=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@JordanBPeterson",
    tags: ["psychology", "philosophy", "motivation", "mindset"],
    featured: false,
  },

  {
    id: "brendon-show",
    type: "youtuber",
    channelName: "The School of Greatness",
    handle: "@lewishowes",
    description:
      "Conversations and lessons focused on personal growth, achievement, mindset and high performance.",
    categories: ["Motivation", "Personal Development", "Success"],
    knownFor: "Personal growth interviews and lessons",
    image:
      "https://yt3.ggpht.com/r0Te1zrZNGgavncanlYR4NY15ne1nHiYZgY3aVOtteHQu0ZKBJfTvkSaDNSVVrfD3O8LM42rAw=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@lewishowes",
    tags: ["motivation", "success", "mindset", "growth"],
    featured: false,
  },

  {
    id: "jay-shetty",
    type: "youtuber",
    channelName: "Jay Shetty",
    handle: "@JayShetty",
    description:
      "Personal growth, relationships, mindfulness and life advice through stories and conversations.",
    categories: ["Motivation", "Mindfulness", "Personal Development"],
    knownFor: "Personal growth and life advice",
    image:
      "https://yt3.ggpht.com/8D46kUdrcFj3uq2-nDAA39dBkRchnLcMdtXVu83amzCkGeLi8vl2GQWo-Smc2Xfub0aelS4S_w=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@JayShetty",
    tags: ["motivation", "mindfulness", "relationships", "growth"],
    featured: false,
  },

  {
    id: "robin-sharma",
    type: "youtuber",
    channelName: "Robin Sharma",
    handle: "@sharmaleadership",
    description:
      "Leadership, productivity, habits and personal mastery from the author and leadership educator.",
    categories: ["Motivation", "Leadership", "Productivity"],
    knownFor: "Leadership and personal mastery",
    image:
      "https://yt3.ggpht.com/dG45WAg0Ja5BJchvKZ3amyIDAJ8SHmPIawmV9qDyGa2S273hnrtGuVcgLD3gkfq2DqM7Lrjm=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@sharmaleadership",
    tags: ["leadership", "motivation", "productivity", "habits"],
    featured: false,
  },

  {
    id: "brendon-burchard-official",
    type: "youtuber",
    channelName: "Brendon Burchard",
    handle: "@BrendonBurchard",
    description:
      "Motivation and personal development content focused on high performance and achieving meaningful goals.",
    categories: ["Motivation", "Performance", "Personal Development"],
    knownFor: "High-performance habits and motivation",
    image:
      "https://yt3.ggpht.com/zD6qAhO-HfGyHBJq-4TCj-nRdqvDl1b-igpBfclJLAxlAvHglEFISEzQQ2OZiLVcJeE4UvVULQ=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@BrendonBurchard",
    tags: ["motivation", "performance", "goals", "mindset"],
    featured: false,
  },

  {
    id: "matt-davila",
    type: "youtuber",
    channelName: "Matt D'Avella",
    handle: "@MattDAvella",
    description:
      "Documentary-style videos about habits, minimalism, creativity, productivity and intentional living.",
    categories: ["Personal Development", "Productivity", "Lifestyle"],
    knownFor: "Minimalism, habits and intentional living",
    image:
      "https://yt3.ggpht.com/Ldpkcur-En5Qn8rcowaWiU6xbNt_yMrs1mAVcSRBIOdq0tSyTmGGIALRcgfm1a8aGKgYiYDEIQ=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@MattDAvella",
    tags: ["minimalism", "habits", "productivity", "lifestyle"],
    featured: false,
  },

  {
    id: "thomas-frank",
    type: "youtuber",
    channelName: "Thomas Frank",
    handle: "@ThomasFrank",
    description:
      "Productivity, learning, organization, Notion and systems for getting better work done.",
    categories: ["Productivity", "Education", "Personal Development"],
    knownFor: "Productivity systems and learning strategies",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_nIr5PB90HA3Uoa6w6PNkbMDZVVINovFpKb5hbHd7JwG0nP=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@ThomasFrank",
    tags: ["productivity", "notion", "learning", "organization"],
    featured: false,
  },

  {
    id: "lavendaire",
    type: "youtuber",
    channelName: "Lavendaire",
    handle: "@Lavendaire",
    description:
      "Personal growth, self-care, creativity, journaling and intentional lifestyle content.",
    categories: ["Personal Development", "Lifestyle", "Motivation"],
    knownFor: "Personal growth and intentional living",
    image:
      "https://yt3.ggpht.com/BV93psvV7-sWxPKcFRb7FlDEg2UEv9kDwDIOBppCE7Ri74uzAcn6O5lv3vidRTvfWOoklTR_h8M=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@Lavendaire",
    tags: ["self-growth", "journaling", "motivation", "lifestyle"],
    featured: false,
  },

  // ============================================================
  // FINANCE & BUSINESS
  // ============================================================

  {
    id: "graham-stephan",
    type: "youtuber",
    channelName: "Graham Stephan",
    handle: "@GrahamStephan",
    description:
      "Personal finance, investing, real estate and entrepreneurship discussions.",
    categories: ["Finance", "Investing", "Business"],
    knownFor: "Personal finance and real estate",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_m4km0pJvdvRxT_gFN6WS16Ggl9D_eX_K8uxCdgTA_hFBo=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@GrahamStephan",
    tags: ["finance", "investing", "real-estate", "business"],
    featured: false,
  },

  {
    id: "mark-tilbury",
    type: "youtuber",
    channelName: "Mark Tilbury",
    handle: "@marktilbury",
    description:
      "Business, entrepreneurship, money management and wealth-building content.",
    categories: ["Finance", "Business", "Entrepreneurship"],
    knownFor: "Business and financial education",
    image:
      "https://yt3.ggpht.com/BPc4IMSLYl66XoO5Ueb4N3Tcd1xYLAISjMEHVdJaPV-QeXpeROududxDnsGLqKuQxKpUnXcGZw=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@marktilbury",
    tags: ["business", "finance", "entrepreneurship", "money"],
    featured: false,
  },

  {
    id: "alex-hormozi",
    type: "youtuber",
    channelName: "Alex Hormozi",
    handle: "@AlexHormozi",
    description:
      "Business growth, entrepreneurship, sales, marketing and business strategy.",
    categories: ["Business", "Entrepreneurship", "Marketing"],
    knownFor: "Business growth and entrepreneurship",
    image:
      "https://yt3.ggpht.com/4To_zqG1x2hAszdNGNtYaNGxDOPoPA77fDlQTnLZ7ehDBCH0piv5XetKK_DAe7Uk3PY8odSCI98=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@AlexHormozi",
    tags: ["business", "sales", "marketing", "entrepreneurship"],
    featured: true,
  },

  {
    id: "gary-vee",
    type: "youtuber",
    channelName: "GaryVee",
    handle: "@garyvee",
    description:
      "Entrepreneurship, marketing, social media, business strategy and personal branding.",
    categories: ["Business", "Marketing", "Entrepreneurship"],
    knownFor: "Entrepreneurship and personal branding",
    image:
      "https://yt3.ggpht.com/zKI3aWmfoKkn1zZhwHAxp9KruXKFYKFuzW3jzQInHD34d15RaCZq-JMdjcP5dj9j3MW2horc=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@garyvee",
    tags: ["business", "marketing", "social-media", "branding"],
    featured: false,
  },

  {
    id: "codie-sanchez",
    type: "youtuber",
    channelName: "Codie Sanchez",
    handle: "@CodieSanchezCT",
    description:
      "Business acquisition, entrepreneurship, investing and practical wealth-building education.",
    categories: ["Business", "Investing", "Entrepreneurship"],
    knownFor: "Business acquisition and entrepreneurship",
    image:
      "https://yt3.ggpht.com/yFw8DI2FmldbPj4_RJy15oPzxI7oos16H2LLJ62Ow9EtdjwXpSgFbhrFLq5VcBWvTUWTf-ac=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@CodieSanchezCT",
    tags: ["business", "investing", "entrepreneurship", "wealth"],
    featured: false,
  },

  // ============================================================
  // DESIGN & CREATIVE
  // ============================================================

  {
    id: "flux-academy",
    type: "youtuber",
    channelName: "Flux Academy",
    handle: "@FluxAcademy",
    description:
      "Web design, freelancing, UI/UX and creative business education for digital designers.",
    categories: ["Design", "UI/UX", "Web Design", "Freelancing"],
    knownFor: "Web design and freelance design education",
    image:
      "https://yt3.ggpht.com/D-wuZT2I_1Y_DKzP6pg-jZIJwfiBanfX1YN7iIvk_u6thQT2bH7jO7tQor6PvoFMp_q7MeW4vg=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@FluxAcademy",
    tags: ["web-design", "uiux", "freelancing", "design"],
    featured: false,
  },

  {
    id: "designcourse",
    type: "youtuber",
    channelName: "DesignCourse",
    handle: "@DesignCourse",
    description:
      "UI/UX design, frontend development, visual design and practical web design tutorials.",
    categories: ["UI/UX", "Web Design", "Frontend"],
    knownFor: "UI/UX and frontend design",
    image:
      "https://yt3.ggpht.com/ieTt1p2twEf4cz0vhOtB-0UXPN4vk9-8HM8OqxcX8sRU3nm5Di8sohyFOvxR3M-pN_bo4rnL=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@DesignCourse",
    tags: ["uiux", "web-design", "frontend", "design"],
    featured: false,
  },

  {
    id: "the-futur",
    type: "youtuber",
    channelName: "The Futur",
    handle: "@thefutur",
    description:
      "Branding, design, creativity, freelancing, business and creative entrepreneurship.",
    categories: ["Design", "Branding", "Business", "Creativity"],
    knownFor: "Design business and creative entrepreneurship",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_nMoHSipNGFS_Uw9P3Rp69VUaDKBIqPY3-rmCJdHQwXTpw=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@thefutur",
    tags: ["design", "branding", "business", "freelancing"],
    featured: false,
  },

  {
    id: "satori-graphics",
    type: "youtuber",
    channelName: "Satori Graphics",
    handle: "@SatoriGraphics",
    description:
      "Graphic design, typography, branding, Illustrator and practical creative design tutorials.",
    categories: ["Graphic Design", "Branding", "Typography"],
    knownFor: "Graphic design and branding tutorials",
    image:
      "https://yt3.ggpht.com/aGosKnS__DL91zdVoZetCLWKn3tA6-Ddtl9i26euVHRLSOsVaXylGJf11zcd23rUmTwUYj98bA=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@SatoriGraphics",
    tags: ["graphic-design", "branding", "typography", "illustrator"],
    featured: false,
  },

  {
    id: "futur-academy",
    type: "youtuber",
    channelName: "Will Paterson",
    handle: "@willpatersondesign",
    description:
      "Logo design, branding, typography and creative design education from a professional designer.",
    categories: ["Graphic Design", "Logo Design", "Branding"],
    knownFor: "Logo design and branding",
    image:
      "https://yt3.ggpht.com/CMKCx9ZszzUgwHK810j2CkY4bVHnUMsYi-IqsOnO69z03QCi77GskfwF08fbGiYsOeZc-WxcEA=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@willpatersondesign",
    tags: ["logo-design", "branding", "graphic-design", "typography"],
    featured: false,
  },

  // ============================================================
  // CYBERSECURITY & NETWORKING
  // ============================================================

  {
    id: "networkchuck",
    type: "youtuber",
    channelName: "NetworkChuck",
    handle: "@NetworkChuck",
    description:
      "Networking, cybersecurity, Linux, cloud and IT education delivered through practical tutorials.",
    categories: ["Cybersecurity", "Networking", "Cloud", "Linux"],
    knownFor: "Networking and cybersecurity education",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_k01-_GpvVZW8w4ULtaQaa55ls8aMf2a5dXhIe56pjMvG0=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@NetworkChuck",
    tags: ["cybersecurity", "networking", "linux", "cloud", "ccna"],
    featured: true,
  },

  {
    id: "john-hammond",
    type: "youtuber",
    channelName: "John Hammond",
    handle: "@_JohnHammond",
    description:
      "Cybersecurity research, malware analysis, CTFs and practical security education.",
    categories: ["Cybersecurity", "Programming", "Security"],
    knownFor: "Cybersecurity research and CTF content",
    image:
      "https://yt3.ggpht.com/z4IRMWHxCA23E2Xb9z5-Aob4Wt1I6StDTUFUoGADbedjRWT3ycbdWJBI2uRFwVEyzgcftrF7eFk=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@_JohnHammond",
    tags: ["cybersecurity", "ctf", "malware", "security"],
    featured: false,
  },

  {
    id: "the-pc-security-channel",
    type: "youtuber",
    channelName: "The PC Security Channel",
    handle: "@pcsecuritychannel",
    description:
      "Cybersecurity, privacy, malware analysis and practical computer security demonstrations.",
    categories: ["Cybersecurity", "Privacy", "Technology"],
    knownFor: "Computer security and malware demonstrations",
    image:
      "https://yt3.ggpht.com/JS-NGLlPD2j9vZ4F4g1yLSjOJ0p7h7yjy2e22DP-Ao1r2SgLGWxtV88fpN-vUoYTy_xBkDrmZIY=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@pcsecuritychannel",
    tags: ["cybersecurity", "privacy", "malware", "security"],
    featured: false,
  },

  {
    id: "hak5",
    type: "youtuber",
    channelName: "Hak5",
    handle: "@hak5",
    description:
      "Cybersecurity, privacy, penetration testing, networking and security technology.",
    categories: ["Cybersecurity", "Networking", "Technology"],
    knownFor: "Cybersecurity tools and security education",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_m2AwyJGGqSgxlCUhtiNyhmntG_ph_Y5-TZ9Jxf7z4G-5g=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@hak5",
    tags: ["cybersecurity", "pentesting", "privacy", "networking"],
    featured: false,
  },

  // ============================================================
  // AI & MACHINE LEARNING
  // ============================================================

  {
    id: "andrej-karpathy",
    type: "youtuber",
    channelName: "Andrej Karpathy",
    handle: "@AndrejKarpathy",
    description:
      "Deep learning, neural networks, AI education and practical machine learning concepts.",
    categories: ["AI", "Machine Learning", "Programming"],
    knownFor: "Deep learning and AI education",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_nDvyq2NoPL626bk1IbxQ94SfQsD-B0qgZchghtQNkLWoEz=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@AndrejKarpathy",
    tags: ["ai", "machine-learning", "deep-learning", "neural-networks"],
    featured: true,
  },

  {
    id: "two-minute-papers",
    type: "youtuber",
    channelName: "Two Minute Papers",
    handle: "@TwoMinutePapers",
    description:
      "Accessible explanations of cutting-edge research in AI, computer graphics and machine learning.",
    categories: ["AI", "Machine Learning", "Research"],
    knownFor: "AI research paper explanations",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_ljAkSpv16cJNUsE_rI1X-Kz9s78w1WNojUga-aZ1uVzEQ=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@TwoMinutePapers",
    tags: ["ai", "machine-learning", "research", "graphics"],
    featured: true,
  },

  {
    id: "statquest",
    type: "youtuber",
    channelName: "StatQuest with Josh Starmer",
    handle: "@statquest",
    description:
      "Statistics, machine learning and data science explained using simple visual explanations.",
    categories: ["Data Science", "Statistics", "Machine Learning"],
    knownFor: "Simple explanations of statistics and machine learning",
    image:
      "https://yt3.ggpht.com/Lzc9YzCKTkcA1My5A5pbsqaEtOoGc0ncWpCJiOQs2-0win3Tjf5XxmDFEYUiVM9jOTuhMjGs=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@statquest",
    tags: ["statistics", "machine-learning", "data-science", "ai"],
    featured: false,
  },

  {
    id: "deep-learning-ai",
    type: "youtuber",
    channelName: "DeepLearningAI",
    handle: "@Deeplearningai",
    description:
      "Artificial intelligence and machine learning education from researchers and industry experts.",
    categories: ["AI", "Machine Learning", "Education"],
    knownFor: "AI and machine learning education",
    image:
      "https://yt3.ggpht.com/s8tzp3FGNvAlBe-egHp2UEXGvGLSqJycXzXe0brsXJ_bUUHgmo-2BjfXDzYofIejwjj5G6kd=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@Deeplearningai",
    tags: ["ai", "machine-learning", "deep-learning", "education"],
    featured: true,
  },

  {
    id: "sentdex-ai",
    type: "youtuber",
    channelName: "sentdex",
    handle: "@sentdex",
    description:
      "Python, artificial intelligence, machine learning and practical data-driven programming.",
    categories: ["AI", "Python", "Machine Learning"],
    knownFor: "Python and practical machine learning",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_mWT-3HaBiihhDy3TGYNqjZt-OP8PivU_lMUjdhwntZ2LM=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@sentdex",
    tags: ["python", "ai", "machine-learning", "data-science"],
    featured: false,
  },

  // ============================================================
  // BUSINESS, CAREER & PRODUCTIVITY
  // ============================================================

  {
    id: "y-combinator",
    type: "youtuber",
    channelName: "Y Combinator",
    handle: "@ycombinator",
    description:
      "Startup advice, entrepreneurship, product development and lessons from founders and investors.",
    categories: ["Startups", "Business", "Entrepreneurship"],
    knownFor: "Startup education and founder advice",
    image:
      "https://yt3.ggpht.com/dGyATx87Fp_s1nZvnupUFSnMqbAPZ6nqRby9Esk1m6YE41iBq-9Z8iGoIgHTCT9SiDBUpP2V=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@ycombinator",
    tags: ["startups", "business", "entrepreneurship", "fundraising"],
    featured: true,
  },

  {
    id: "lenny",
    type: "youtuber",
    channelName: "Lenny's Podcast",
    handle: "@LennysPodcast",
    description:
      "Product management, growth, startups, leadership and career lessons from industry experts.",
    categories: ["Product", "Business", "Career", "Startups"],
    knownFor: "Product management and startup conversations",
    image:
      "https://yt3.ggpht.com/Wk7-4UW17JqDXgVWDiE7s1gJxDkt_UwNa2oNw8OYRwc9deiCv2V2fFAdNgByDi0K9AAF0YMj=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@LennysPodcast",
    tags: ["product-management", "startups", "career", "growth"],
    featured: false,
  },

  {
    id: "my-first-million",
    type: "youtuber",
    channelName: "My First Million",
    handle: "@MyFirstMillionPod",
    description:
      "Business ideas, entrepreneurship, markets and unconventional opportunities discussed by founders.",
    categories: ["Business", "Entrepreneurship", "Startups"],
    knownFor: "Business ideas and entrepreneurship",
    image:
      "https://yt3.ggpht.com/BZUEtMBQyhsDlobpQl4esoPOLwz1uh_B8M5QsxWoGAaEpHkTnWhsqH5tukqBXrTEo-50UYwB0A=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@MyFirstMillionPod",
    tags: ["business", "startups", "entrepreneurship", "ideas"],
    featured: false,
  },

  {
    id: "productivity-game",
    type: "youtuber",
    channelName: "Productivity Game",
    handle: "@ProductivityGame",
    description:
      "Productivity systems, habits, focus, time management and practical self-improvement.",
    categories: ["Productivity", "Self Improvement", "Habits"],
    knownFor: "Productivity and habit-building systems",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_nI7YeF9MWZxiZviyrtSIu5ecxPF1p3GrHlmmlZ2RAOaA=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@ProductivityGame",
    tags: ["productivity", "habits", "focus", "timemanagement"],
    featured: false,
  },

  {
    id: "cal-newport",
    type: "youtuber",
    channelName: "Cal Newport",
    handle: "@CalNewportMedia",
    description:
      "Deep work, digital minimalism, productivity, career development and focused work strategies.",
    categories: ["Productivity", "Career", "Personal Development"],
    knownFor: "Deep work and digital minimalism",
    image:
      "https://yt3.ggpht.com/opQU-ZXVEnMqqT3gklqYTYiRktPOqiZsE8QXmImAGA-fhC0aP--PFlqi4k8MqB4jJCLsqYPzRcs=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@CalNewportMedia",
    tags: ["deep-work", "productivity", "career", "focus"],
    featured: false,
  },

  {
    id: "stanford-business",
    type: "youtuber",
    channelName: "Stanford Graduate School of Business",
    handle: "@stanfordgsb",
    description:
      "Business education, leadership, entrepreneurship and insights from Stanford faculty and business leaders.",
    categories: ["Business", "Leadership", "Education"],
    knownFor: "Business education and leadership insights",
    image:
      "https://yt3.googleusercontent.com/ytc/AIdro_lWoHJNSE1UPPiFdCG4_aQZ1apKXrKI7nZ_sFlKwhNwRl0=s176-c-k-c0x00ffffff-no-rj-mo",
    channelUrl: "https://www.youtube.com/@stanfordgsb",
    tags: ["business", "leadership", "entrepreneurship", "education"],
    featured: false,
  },
];

export function getFeaturedYoutubers(limit?: number): Youtuber[] {
  const featured = youtubers.filter((channel) => channel.featured);
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}
