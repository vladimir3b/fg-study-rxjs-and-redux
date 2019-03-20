// See https://next.json-generator.com/EkqNm1sP8
import { IPersonModel } from "./models/person.model";

const INIT_PERSON: IPersonModel = {
  gender: 'male',
  name: {
    firstName: 'Brooks',
    lastName: 'Emerson'
  },
  birthDate: new Date(new Date('1995-10-03')),
  contact: {
    emails: 'brooks_in@quis.net',
    phones: [
      '+1(339)537-4118',
      '+1(457)407-9078'
    ],
    addresses: [
      {
        street: 'Tennis Court',
        number: 701,
        city: 'Waterford',
        state: 'South Dakota',
        zip: 1928
      },
      {
        street: 'Laurel Avenue',
        number: 677,
        city: 'Sanford',
        state: 'Alabama',
        zip: 9367
      }
    ]
  }
}

const SOME_PERSONS: Array<IPersonModel> = [
  {
    gender: 'female',
    name: {
      firstName: 'Jennifer',
      lastName: 'Decker'
    },
    birthDate: new Date('1995-09-21'),
    contact: {
      emails: 'jennifer.eiusmod@sint.com',
      phones: [
        '+1(950)480-6159',
        '+1(611)945-4400'
      ],
      addresses: {
        street: 'Anna Court',
        number: 129,
        city: 'Wawona',
        state: 'Virgin Islands',
        zip: 2534
      }
    }
  },
  {
    gender: 'male',
    name: {
      firstName: 'Stewart',
      middleName: 'Booker',
      lastName: 'Tran'
    },
    birthDate: new Date('1954-02-13'),
    contact: {
      emails: [
        'stewarttran@sit.org',
        'stewart_tran@sunt.us',
        'stewartid@elit.net'
      ],
      phones: [
        '+1(546)923-1815',
        '+1(288)805-4098'
      ],
      addresses: [
        {
          street: 'Bowne Street',
          number: 101,
          city: 'Holcombe',
          state: 'South Carolina',
          zip: 8450
        },
        {
          street: 'Matthews Court',
          number: 195,
          city: 'Bloomington',
          state: 'Arizona',
          zip: 5319
        }
      ]
    }
  },
  {
    gender: 'female',
    name: {
      firstName: 'Olivia',
      middleName: 'Rosario',
      lastName: 'Phillips'
    },
    birthDate: new Date('1993-02-14'),
    contact: {
      emails: 'olivia.phillips@nulla.tv',
      phones: '+1(696)150-6618',
      addresses: {
        street: 'Jamaica Avenue',
        number: 834,
        city: 'Russellville',
        state: 'Maine',
        zip: 8115
      }
    }
  },
  {
    gender: 'female',
    name: {
      firstName: 'Carissa',
      middleName: 'Clare',
      lastName: 'Carrillo'
    },
    birthDate: new Date('1953-05-26'),
    contact: {
      emails: [
        'carissa.do@duis.name',
        'carissacarrillo@sint.io'
      ],
      phones: '+1(711)890-1136',
      addresses: {
        street: 'Alton Place',
        number: 583,
        city: 'Hollymead',
        state: 'Kentucky',
        zip: 7263
      }
    }
  },
  {
    gender: 'male',
    name: {
      firstName: 'George',
      middleName: 'Hess',
      lastName: 'Solis'
    },
    birthDate: new Date('1977-10-18'),
    contact: {
      emails: [
        'georgesolis@laborum.co.uk',
        'george-lorem@ex.ca'
      ],
      phones: [
        '+1(285)838-2754',
        '+1(682)603-4970'
      ],
      addresses: [
        {
          street: 'Fillmore Place',
          number: 422,
          city: 'Osage',
          state: 'New York',
          zip: 1585
        },
        {
          street: 'Hegeman Avenue',
          number: 330,
          city: 'Tivoli',
          state: 'American Samoa',
          zip: 962
        }
      ]
    }
  },
  {
    gender: 'female',
    name: {
      firstName: 'Margo',
      middleName: 'Marcie',
      lastName: 'Torres'
    },
    birthDate: new Date('1954-06-23'),
    contact: {
      emails: [
        'margo.nulla@irure.me',
        'margoid@laborum.biz',
        'margo-torres@ullamco.info'
      ],
      phones: '+1(514)582-9765',
      addresses: {
        street: 'Laurel Avenue',
        number: 683,
        city: 'Disautel',
        state: 'Marshall Islands',
        zip: 715
      }
    }
  },
  {
    gender: 'male',
    name: {
      firstName: 'Valentine',
      lastName: 'Dominguez'
    },
    birthDate: new Date('1957-09-25'),
    contact: {
      emails: 'valentine.officia@voluptate.com',
      phones: [
        '+1(533)625-4600',
        '+1(720)836-5644'
      ],
      addresses: [
        {
          street: 'Carlton Avenue',
          number: 815,
          city: 'Snyderville',
          state: 'Alabama',
          zip: 8111
        },
        {
          street: 'Harman Street',
          number: 127,
          city: 'Mahtowa',
          state: 'Ohio',
          zip: 199
        }
      ]
    }
  },
  {
    gender: 'male',
    name: {
      firstName: 'Mcfadden',
      lastName: 'Powers'
    },
    birthDate: new Date('1973-07-06'),
    contact: {
      emails: 'mcfaddennon@ea.org',
      phones: '+1(448)517-9392',
      addresses: {
        street: 'Stryker Street',
        number: 817,
        city: 'Sutton',
        state: 'Colorado',
        zip: 7872
      }
    }
  },
  {
    gender: 'male',
    name: {
      firstName: 'Rice',
      middleName: 'Dominguez',
      lastName: 'Jennings'
    },
    birthDate: new Date('1965-06-01'),
    contact: {
      emails: 'ricejennings@nostrud.us',
      phones: [
        '+1(938)301-8857',
        '+1(588)147-5747'
      ],
      addresses: {
        street: 'Hanover Place',
        number: 775,
        city: 'Corriganville',
        state: 'Palau',
        zip: 2222
      }
    }
  },
  {
    gender: 'female',
    name: {
      firstName: 'Jane',
      lastName: 'Allen'
    },
    birthDate: new Date('1970-07-03'),
    contact: {
      emails: 'jane-allen@voluptate.net',
      phones: '+1(136)747-7824',
      addresses: {
        street: 'Lacon Court',
        number: 319,
        city: 'Ballico',
        state: 'Louisiana',
        zip: 1670
      }
    }
  },
  {
    gender: 'female',
    name: {
      firstName: 'Julie',
      middleName: 'Aileen',
      lastName: 'Duran'
    },
    birthDate: new Date('1960-02-24'),
    contact: {
      emails: [
        'julieduran@veniam.tv',
        'julie.ea@aliqua.name',
        'julie-consectetur@mollit.io'
      ],
      phones: '+1(183)446-2827',
      addresses: {
        street: 'Grafton Street',
        number: 455,
        city: 'Highland',
        state: 'Iowa',
        zip: 9436
      }
    }
  },
  {
    gender: 'female',
    name: {
      firstName: 'Bette',
      lastName: 'Hoover'
    },
    birthDate: new Date('1962-07-01'),
    contact: {
      emails: [
        'bettenon@elit.co.uk',
        'bette.hoover@exercitation.ca',
        'bettehoover@dolore.me'
      ],
      phones: [
        '+1(720)128-4592',
        '+1(982)283-8955'
      ],
      addresses: {
        street: 'Dewey Place',
        number: 719,
        city: 'Wikieup',
        state: 'District Of Columbia',
        zip: 2094
      }
    }
  },
  {
    gender: 'male',
    name: {
      firstName: 'Stout',
      middleName: 'Buckner',
      lastName: 'Sellers'
    },
    birthDate: new Date('1966-10-05'),
    contact: {
      emails: 'stout-deserunt@qui.biz',
      phones: [
        '+1(527)302-2439',
        '+1(564)489-9078'
      ],
      addresses: {
        street: 'Boardwalk ',
        number: 909,
        city: 'Dellview',
        state: 'Missouri',
        zip: 9711
      }
    }
  },
  {
    gender: 'female',
    name: {
      firstName: 'Alexandria',
      lastName: 'Stark'
    },
    birthDate: new Date('1958-07-28'),
    contact: {
      emails: [
        'alexandria-labore@est.info',
        'alexandria-stark@in.com'
      ],
      phones: '+1(712)198-7538',
      addresses: {
        street: 'Newton Street',
        number: 647,
        city: 'Felt',
        state: 'Vermont',
        zip: 5623
      }
    }
  },
  {
    gender: 'male',
    name: {
      firstName: 'Glass',
      middleName: 'Greene',
      lastName: 'Newman'
    },
    birthDate: new Date('1987-11-21'),
    contact: {
      emails: [
        'glass.voluptate@mollit.org',
        'glassnewman@ullamco.us'
      ],
      phones: '+1(862)678-6327',
      addresses: {
        street: 'Williams Court',
        number: 782,
        city: 'Caspar',
        state: 'Texas',
        zip: 5839
      }
    }
  },
  {
    gender: 'female',
    name: {
      firstName: 'Tiffany',
      lastName: 'Robinson'
    },
    birthDate: new Date('1955-09-05'),
    contact: {
      emails: [
        'tiffany-consectetur@cillum.net',
        'tiffany-tempor@minim.tv'
      ],
      phones: [
        '+1(818)590-6055',
        '+1(205)663-9855'
      ],
      addresses: [
        {
          street: 'Liberty Avenue',
          number: 499,
          city: 'Marbury',
          state: 'Idaho',
          zip: 6805
        },
        {
          street: 'Metropolitan Avenue',
          number: 443,
          city: 'Colton',
          state: 'Tennessee',
          zip: 5213
        }
      ]
    }
  },
  {
    gender: 'male',
    name: {
      firstName: 'Livingston',
      middleName: 'Bond',
      lastName: 'Hughes'
    },
    birthDate: new Date('1982-06-10'),
    contact: {
      emails: 'livingston_qui@veniam.name',
      phones: [
        '+1(609)958-8587',
        '+1(551)736-2741'
      ],
      addresses: {
        street: 'Fleet Street',
        number: 603,
        city: 'Monument',
        state: 'Massachusetts',
        zip: 6781
      }
    }
  },
  {
    gender: 'female',
    name: {
      firstName: 'Dolores',
      middleName: 'Kay',
      lastName: 'Leblanc'
    },
    birthDate: new Date('1988-06-18'),
    contact: {
      emails: [
        'dolores.sunt@consectetur.io',
        'dolores.leblanc@esse.co.uk',
        'dolores.leblanc@adipisicing.ca'
      ],
      phones: [
        '+1(529)604-2584',
        '+1(438)851-8131'
      ],
      addresses: {
        street: 'Hunts Lane',
        number: 953,
        city: 'Fedora',
        state: 'Wyoming',
        zip: 5392
      }
    }
  },
  {
    gender: 'male',
    name: {
      firstName: 'Marsh',
      middleName: 'Love',
      lastName: 'Molina'
    },
    birthDate: new Date('1971-02-11'),
    contact: {
      emails: 'marshaute@ad.me',
      phones: [
        '+1(390)928-8966',
        '+1(406)948-5700'
      ],
      addresses: [
        {
          street: 'Maujer Street',
          number: 676,
          city: 'Morgandale',
          state: 'Georgia',
          zip: 9058
        },
        {
          street: 'Hooper Street',
          number: 769,
          city: 'Harborton',
          state: 'Washington',
          zip: 7219
        }
      ]
    }
  },
  {
    gender: 'male',
    name: {
      firstName: 'Christian',
      lastName: 'Stone'
    },
    birthDate: new Date('1979-04-27'),
    contact: {
      emails: 'christian-ex@minim.biz',
      phones: '+1(858)457-8168',
      addresses: [
        {
          street: 'Freeman Street',
          number: 905,
          city: 'Hackneyville',
          state: 'New Mexico',
          zip: 2799
        },
        {
          street: 'Dumont Avenue',
          number: 307,
          city: 'Boomer',
          state: 'Guam',
          zip: 3051
        }
      ]
    }
  }
]