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
