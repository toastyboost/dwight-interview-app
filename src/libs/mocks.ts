type Impression = {
  name: string;
  points: number;
};

export const generalImpressions: Record<string, Impression[]> = {
  positive: [
    {
      name: 'Good soft skills',
      points: 1
    },
    {
      name: 'Readiness to learn',
      points: 1
    },
    {
      name: 'Positive attitude',
      points: 1
    },
    {
      name: 'Communication',
      points: 1
    },
    {
      name: 'Enthusiasm',
      points: 1
    },
    {
      name: 'Confidence',
      points: 1
    },
    {
      name: 'Critical thinking',
      points: 1
    },

    {
      name: 'Able to keep focus',
      points: 1
    },
    {
      name: 'Able to build logical chains',
      points: 1
    },
    {
      name: 'Self-sufficient',
      points: 1
    },
    {
      name: 'Not afraid to say that he doesnt know something',
      points: 1
    },
    {
      name: 'Answers informative and concise',
      points: 1
    },
    {
      name: 'I want to work with/over the candidate',
      points: 1
    }
  ],
  negative: [
    {
      name: 'Answears are wateded-down or general',
      points: 1
    },
    {
      name: 'Hard to keep focus on questions',
      points: 1
    },
    {
      name: 'Hard to to build logical chains',
      points: 1
    },
    {
      name: 'Slow thinking type of person',
      points: 1
    },
    {
      name: 'Gives a lot of unnecessary information',
      points: 1
    },

    {
      name: 'I think its not comfortable to work with candidate',
      points: 1
    },

    {
      name: 'CV skills not correspond to real skills',
      points: 1
    },
    {
      name: 'Difficult to handle stress',
      points: 1
    },
    {
      name: 'Hard to learn and use something new',
      points: 1
    },
    {
      name: 'Lack of enthusiasm',
      points: 1
    },
    {
      name: 'Can`t use theoretical knowledge in live-coding tasks',
      points: 1
    }
  ]
};

export const technicalImpressions: Record<string, Impression[]> = {
  positive: [
    {
      name: 'Codereview experience',
      points: 1
    },
    {
      name: 'Leading experience',
      points: 1
    },
    {
      name: 'Mentoring experience',
      points: 1
    },
    {
      name: 'Fullstack experience',
      points: 1
    },
    {
      name: 'In case of troubles refer to documentation',
      points: 1
    },
    {
      name: 'Confident knowledge of theory',
      points: 1
    },
    {
      name: 'The candidate able to close all gaps during probation and reach the next grade',
      points: 1
    }
  ],
  negative: [
    {
      name: 'Need to take out the answers from him',
      points: 1
    },
    {
      name: 'Lack of practical experience',
      points: 1
    },
    {
      name: 'Lack of theory knoweldge',
      points: 1
    }
  ]
};

export const achivents = {
  positive: [
    {
      name: 'fullstack experience',
      points: 1
    },
    {
      name: 'In case of troubles refer to documentation',
      points: 1
    },
    {
      name: 'In case of troubles refer to documentation',
      points: 1
    },
    {
      name: 'In case of troubles refer to documentation',
      points: 1
    }
  ],
  negative: [
    {
      name: '  Has mentoring expirience',
      points: 1
    }
  ]
};

// questions

export const browserQuestions = {
  Browser: [
    {
      name: 'Hosts',
      points: 1
    }
  ],
  DNS: [
    {
      name: 'How DNS works',
      points: 1
    },
    {
      name: 'DNS cache',
      points: 1
    }
  ],
  HTTP: [
    {
      name: 'Protocol',
      points: 1
    },
    {
      name: 'Handshake',
      points: 1
    },
    {
      name: 'Request',
      points: 1
    },
    {
      name: 'Response',
      points: 1
    },
    {
      name: 'CORS',
      points: 1
    }
  ],
  REST: [
    {
      name: 'What is REST',
      points: 1
    },
    {
      name: 'HTTP methods',
      points: 1
    }
  ],
  HTML: [
    {
      name: 'HTML Parsing',
      points: 1
    },
    {
      name: 'HTML Rendering',
      points: 1
    },
    {
      name: 'HTML Painting',
      points: 1
    }
  ],
  Storages: [
    {
      name: 'Cookies',
      points: 1
    },
    {
      name: 'LocalStorage',
      points: 1
    },
    {
      name: 'SessionStorage',
      points: 1
    },
    {
      name: 'IndexDB',
      points: 1
    }
  ]
};

// misc
// Didn't prepared for the interview
// Level is not enough for customer interview and everyday routine

// core
// scope, closure, context, hoisting, types, ES features

// 𝗔𝗦𝗬𝗡𝗖 𝗶𝗻 𝗝𝗦: Promises, async/await, observables, callbacks, Event loop, Micro & Macro tasks, Client-server interaction (XHR,WebSockets, Comet (long and short polling)), XHR, Fetch), HTTP protocol (v1,2, verbs, responce codes, CORS, AJAX, REST, ...)
// DOM interaction (finding elements, events, event handling, bubbling, capturing, delegation, canceling), browsers compatibility issues, storages (Cookies, IndexedDB, localStorage, sessionStorage), service workers, web components, webRTC
// 𝗙𝗨𝗡𝗖𝗧𝗜𝗢𝗡𝗔𝗟 𝗣𝗥𝗢𝗚𝗥𝗔𝗠𝗠𝗜𝗡𝗚: Pure function, carrying, reduce
// 𝗚𝗥𝗔𝗣𝗛𝗜𝗖𝗦 & 𝗗𝗥𝗔𝗪𝗜𝗡𝗚: JS animation, SVG, Canvas, Three.js, D3.js
// 𝗧𝗘𝗦𝗧𝗜𝗡𝗚: Unit tests, e2e, coverage, ...
// 𝗧𝗬𝗣𝗘𝗦𝗖𝗥𝗜𝗣𝗧: Interfaces, generics, type guard, decorators, type compatibility
// 𝗠𝗮𝗿𝗸𝘂𝗽: HTML5, CSS3, structure, tags, attributes, selector specificity
// 𝗖𝗦𝗦 𝗙𝗥𝗔𝗠𝗘𝗪𝗢𝗥𝗞𝗦 & 𝗣𝗥𝗘/𝗣𝗢𝗦𝗧 𝗣𝗥𝗢𝗖𝗘𝗦𝗦𝗢𝗥𝗦: Tailwind, bootstrap, material UI, PostCSS, SCSS, SASS, Less, Stylus
// 𝗥𝗘𝗦𝗣𝗢𝗡𝗦𝗜𝗩𝗘 + 𝗔𝗗𝗔𝗣𝗧𝗜𝗩𝗘 𝗗𝗘𝗦𝗜𝗚𝗡: Responsive vs adaptive, motivation, media query, ...
// 𝗔𝗡𝗜𝗠𝗔𝗧𝗜𝗢𝗡𝗦: Transitions, Animation, KeyFrames, performance
// ▶️𝗝𝗦 𝗙𝗥𝗔𝗠𝗘𝗪𝗢𝗥𝗞: React, AngularJS, Angular, VueJS, Ember. Advantages & disadvantages. Performance & optimization. Possible bottlenecks & pitfalls. ❗Please, specify the framework name in the comments section.
// 𝗗𝗔𝗧𝗔 𝗙𝗟𝗢𝗪, 𝗦𝗧𝗔𝗧𝗘 𝗠𝗔𝗡𝗔𝗚𝗘𝗠𝗘𝗡𝗧: RxJs, Observables, Unidirectional data flow (Flux, redux, mobX)
// 𝗔𝗥𝗖𝗛𝗜𝗧𝗘𝗖𝗧𝗨𝗥𝗘 & 𝗗𝗘𝗦𝗜𝗚𝗡 𝗣𝗔𝗧𝗧𝗘𝗥𝗡𝗦: MVC, REST, GOF, GRASP, SOLID
// 𝗢𝗢𝗣: Objects, Classes, Interfaces, Mixins, Functions, Prototypes, Inheritance
// 𝗣𝗥𝗢𝗙𝗜𝗟𝗜𝗡𝗚 & 𝗗𝗜𝗔𝗚𝗡𝗢𝗦𝗧𝗜𝗖: Performance, memory leaks, tools (Lighthouse, Webpagetest), web vs node
// ▶️𝗖𝗟𝗢𝗨𝗗𝗦: AWS, GCP, Azure
// ▶️𝗗𝗔𝗧𝗔 𝗦𝗧𝗥𝗨𝗖𝗧𝗨𝗥𝗘 & 𝗔𝗟𝗚𝗢𝗥𝗜𝗧𝗛𝗠𝗦: Sorting, searching, backtracking, network, etc.
// 𝗕𝗨𝗜𝗟𝗗 𝗧𝗢𝗢𝗟𝗦 𝗮𝗻𝗱 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗢𝗡: Webpack, Rolllup, npm, yarn,
// 𝗚𝗜𝗧: branch strategies, file statuses, merge, rebase, reset, commit, push, pull, fetch
// ▶️𝗦𝗢𝗙𝗧𝗪𝗔𝗥𝗘 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗠𝗘𝗡𝗧 𝗣𝗥𝗢𝗖𝗘𝗦𝗦. Environments: prod, dev, test; CI/CD,SCRUM, Code review
// ▶️𝗡𝗢𝗗𝗘𝗝𝗦: Framework, error first function, data storing, NoSQL, transactions
// ▶️𝗦𝗘𝗖𝗨𝗥𝗜𝗧𝗬: OWASP, OAuth, Authorization & authentication
