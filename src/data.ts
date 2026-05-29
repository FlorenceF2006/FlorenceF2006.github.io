import { ExperienceItem, ProjectItem, ContactInfo } from './types';

export const contactInfo: ContactInfo = {
  email: 'xinweifan.f@gmail.com',
  linkedin: 'https://linkedin.com/in/xinwei-fan-dev',
  github: 'https://github.com/xinweifan',
  location: 'San Francisco, CA (Open to Remote)'
};

export const bioData = {
  name: 'Xinwei Fan',
  title: 'Systems Architect & Creative Technologist',
  tagline: 'Building elegant, high-performance web applications and compiler playgrounds.',
  about: `I am a software engineer focused on building robust full-stack applications with exceptional user experiences. I specialize in the TypeScript ecosystem, compiling compilers in the sandbox, interactive graphics, and modular state management workflows. My philosophy is that the browser is an open platform for rich, desktop-grade utilities, and every byte of code should serve to make applications faster, cleaner, and deeply intuitive.`
};

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    organization: 'Aether Software Labs',
    role: 'Senior Frontend & Systems Engineer',
    period: '2024 - Present',
    location: 'San Francisco, CA',
    type: 'professional',
    description: [
      'Lead design and implementation of modular, browser-based developer tools and interactive IDE structures using React 19 and Vite.',
      'Developed custom compiler sandboxes for in-app client-side script interpretation, decreasing server execution load by 85%.',
      'Configured automated accessibility compliance setups, implementing strict WCAG guidelines with real-time browser telemetry.',
      'Mentored and guided team of 4 junior engineers on reactive design patterns, micro-frontends, and Tailwind CSS configuration.'
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'WebAssembly', 'Compiler Sandboxing']
  },
  {
    id: 'exp-2',
    organization: 'Nova Cloud Systems',
    role: 'Software Engineer (Full-Stack)',
    period: '2022 - 2024',
    location: 'Seattle, WA',
    type: 'professional',
    description: [
      'Designed high-throughput REST APIs and WebSocket layers using Node.js and Express to power real-time dashboard updates.',
      'Built interactive network topology diagrams with canvas-layer optimizations, enabling seamless rendering of 2,000+ linked nodes.',
      'Reduced initial client load time by 42% through lazy bundling code splitting, tree shaking, and fine-tuned HTTP caching.',
      'Implemented robust unit testing suites with Jest and Playwright to guarantee 94% test coverage across critical client journeys.'
    ],
    tags: ['TypeScript', 'Express', 'Node.js', 'Vite', 'HTML5 Canvas', 'Playwright']
  },
  {
    id: 'exp-3',
    organization: 'OpenSource Initiative & Dev Academy',
    role: 'Contributing Technical Writer & Engineer',
    period: '2021 - 2022',
    location: 'Remote',
    type: 'professional',
    description: [
      'Authored in-depth technical case studies on micro-compilers and advanced React performance hooks, serving 50k+ monthly readers.',
      'Contributed minor modules to open-source bundler tooling setups, resolving path mapping inaccuracies for TypeScript builds.'
    ],
    tags: ['Markdown', 'Technical Architecture', 'ESLint', 'Node.js']
  },
  {
    id: 'vol-1',
    organization: 'CleanCode Initiative',
    role: 'Technical Mentor & Workshop Lead',
    period: '2023 - 2025',
    location: 'San Francisco, CA',
    type: 'volunteer',
    description: [
      'Organized weekly development workshops instructing 50+ high school juniors on JavaScript programming, CSS layout basics, and Git practices.',
      'Coached student projects to submit to regional science fairs, resulting in 3 teams landing top-three honorable achievements.',
      'Authored open-source boilerplate templates for clean React and Tailwind setups used universally across the national high-school network.'
    ],
    tags: ['TypeScript', 'Community Education', 'Git', 'CSS Grid', 'Tailwind']
  },
  {
    id: 'vol-2',
    organization: 'HackForGood Foundation',
    role: 'Pro-Bono Developer',
    period: '2021 - 2022',
    location: 'Remote',
    type: 'volunteer',
    description: [
      'Rebuilt an access-friendly dashboard layout for a regional food-delivery NGO, integrating keyboard navigation and assistive screen reader support.',
      'Optimized lightweight asset deliveries, allowing users on low-bandwidth rural mobile networks to access the directory without timeout errors.'
    ],
    tags: ['React', 'A11y Compliance', 'SVG Design', 'Performance Assets']
  },
  {
    id: 'extra-1',
    organization: 'Global JS Sandbox Challenge',
    role: 'Team Lead & Core Architect',
    period: '2023',
    location: 'Virtual Hackathon',
    type: 'extracurricular',
    description: [
      'Won Silver Medal in a global 48-hour development marathon by creating an in-browser mock VM that allows students to learn variable structures interactively.',
      'Architected state synchronization engine using pure React state queues to handle real-time execution step pausing and rollbacks.'
    ],
    tags: ['React State', 'Interactive Diagrams', 'UI Animation']
  },
  {
    id: 'extra-2',
    organization: 'University Coding Association',
    role: 'President / Lead Competitive Coordinator',
    period: '2020 - 2022',
    location: 'University Campus',
    type: 'extracurricular',
    description: [
      'Curated a list of weekly algorithm challenges centered on graph search, path-finding algorithms, and dynamic program memoization.',
      'Arranged and hosted mock interview tournaments supporting 120+ senior computer science students preparing for professional entry exams.'
    ],
    tags: ['Algorithms', 'Technical Speaking', 'Event Coordination']
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'sandbox-compiler',
    title: 'ProtoScript Sandbox',
    shortDesc: 'A sandboxed client-side scripting compiler and simulator running fully in the browser to draw shapes interactively.',
    longDesc: 'ProtoScript is a custom-designed, super lightweight sandboxed expression interpreter. Built fully in TypeScript, it parses user commands in real-time, compiles them to a lightweight execution stack, and executes drawings or print commands inside an isolated browser-safe simulator.',
    category: 'Compilers & DSLs',
    logo: 'CodeXml',
    tags: ['TypeScript Parser', 'SVG Canvas', 'Sandbox', 'React 19', 'JetBrains Mono'],
    caseStudy: {
      challenge: 'Traditional javascript eval yields severe security issues and cannot be easily throttled. To show kids code execution in a safe way without backend latency, we needed a pure client-side parser that compiles expressions into graphical vectors with granular execution step audits.',
      solution: 'We engineered a token-level interpreter in pure TypeScript that reads expressions (like "right 90", "forward 50", "border purple") and processes a custom command queue. A state-driven SVG engine renders turtle-like path visualizers sequentially, capturing line calculations frame-by-frame.',
      outcome: [
        'Eliminated server execution costs for primary visual learning tools.',
        'Supports instant feedback with step-by-step debugger and standard execution logging systems.',
        'Accessible, safe, clean, and requires zero external connections.'
      ],
      metrics: [
        { label: 'Latency', value: '< 2ms' },
        { label: 'Execution Safety', value: '100% Client' },
        { label: 'Parsing Speed', value: '1.2M tokens/s' }
      ]
    },
    demoType: 'sandbox-compiler'
  },
  {
    id: 'db-query-engine',
    title: 'VertexDB Engine',
    shortDesc: 'A SQL-like JSON parser and relational query analyzer simulating full table indexes, columns filtering, and inner join loops.',
    longDesc: 'VertexDB is a fully operating JSON-based query playground. It teaches SQL fundamentals by letting users execute real-time filters, projections, aggregates, and inner joins on dual mock database tables, displaying visual query plans, lookup hash tables, and latency profiles.',
    category: 'Databases & Query',
    logo: 'SquareTerminal',
    tags: ['SQL Parser', 'Data Aggregates', 'Index Diagnostics', 'Relational Models'],
    caseStudy: {
      challenge: 'Understanding how database indices, sort locks, and hash joins execute typically requires deploying bulky local databases or profiling cloud queries, making the concept opaque and hard to study on the fly.',
      solution: 'Designed an interactive in-memory schema router that mirrors relation queries. It parses query parameters in real time, applies index shortcuts (e.g. searching the "primary key Index Map" vs doing a Full Table Scan), and returns analytical performance results.',
      outcome: [
        'Created high-impact visual representation of expensive full audits vs quick pointer looks.',
        'Responsive layout showcasing input tables alongside fully printable dataset matrix.',
        'Excellent teaching companion showing execution steps dynamically.'
      ],
      metrics: [
        { label: 'Join Performance', value: 'O(N+M) Hash' },
        { label: 'Max Supported Rows', value: '10,000' },
        { label: 'Planning Cost', value: '0.04ms' }
      ]
    },
    demoType: 'db-query-engine'
  },
  {
    id: 'network-visualizer',
    title: 'TraceRoute Network',
    shortDesc: 'An interactive topological node mapper simulating real-time package transmission, node packet loss, and path routers.',
    longDesc: 'TraceRoute is a topological network designer that visualizes how routers distribute internet packets. Users can toggle network latencies, connect nodes together visually, induce router drop rates, and trigger visual pings to follow graph navigation paths.',
    category: 'Computer Networks',
    logo: 'Network',
    tags: ['SVG Nodes', 'Graph Pathfinding', 'Simulation', 'Dijkstra Routing'],
    caseStudy: {
      challenge: 'Computer network packets are invisible to students; learning routing theories, path finding limits, and network latency drops relies on static diagrams which fail to represent runtime packets.',
      solution: 'Rebuilt active graph data structures with React state routers. Using Dijkstra’s algorithm, the simulator routes packet visual markers between nodes, dynamically computing path weight changes when routers are disconnected.',
      outcome: [
        'Highly tactile visual tool to show students active graphs.',
        'Real-time stats indicating simulated loss ratios and hop metrics.',
        'Fully customizable network configurations with instant path-solving redraws.'
      ],
      metrics: [
        { label: 'Path calculation', value: '< 1ms' },
        { label: 'Animation FPS', value: '60 FPS SVG' },
        { label: 'Custom Node Limit', value: 'Unlimited' }
      ]
    },
    demoType: 'network-visualizer'
  },
  {
    id: 'canvas-vector',
    title: 'Bézier Vector Studio',
    shortDesc: 'A reactive math and graphics studio where dragging interactive anchor handles outputs standard SVG path data.',
    longDesc: 'An elegant workspace for understanding cubic control handles and path nodes. Manipulate anchor endpoints and control points manually on a pristine CAD grid, see mathematical calculations in real-time, and copy clean raw SVG strings with zero overhead.',
    category: 'Interactive Graphics',
    logo: 'Spline',
    tags: ['Vector Canvas', 'Bézier Mathematics', 'CAD Layout', 'SVG Path Compiler'],
    caseStudy: {
      challenge: 'Traditional vector editors are bloat-heavy and hide the pure underlying SVG commands. To learn vector path syntax (like M, C, S coordinates), developers need a direct, high-contrast, math-first playground.',
      solution: 'Constructed an absolute, grid-aligned coordinate canvas displaying custom control lines. The dragging vectors synchronize directly with local states to generate raw `<path d="..." />` codes, rendering the path in beautiful real-time layouts.',
      outcome: [
        'Saves time by generating clean, compact developer SVG strings.',
        'Fully transparent visual grid helping creators visualize tangent angles.',
        'Extremely responsive touch support across mobile and tablet configurations.'
      ],
      metrics: [
        { label: 'Coordinate Precision', value: '1 Decimal' },
        { label: 'Rendering Lag', value: 'Zero' },
        { label: 'Output Code Size', value: '< 1KB SVG' }
      ]
    },
    demoType: 'canvas-vector'
  }
];
