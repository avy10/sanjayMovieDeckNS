const crime = [
  {
    "title": "The Shawshank Redemption",
    "vote_average": 8.71,
    "vote_count": 25317,
    "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    "release_date": "1994-09-23"
  },
  {
    "title": "The Godfather",
    "vote_average": 8.708,
    "vote_count": 19287,
    "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    "release_date": "1972-03-14"
  },
  {
    "title": "The Godfather Part II",
    "vote_average": 8.59,
    "vote_count": 11631,
    "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    "release_date": "1974-12-20"
  },
  {
    "title": "The Dark Knight",
    "vote_average": 8.514,
    "vote_count": 31246,
    "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "genre_ids": [
      18,
      28,
      80,
      53
    ],
    "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    "release_date": "2008-07-16"
  },
  {
    "title": "The Green Mile",
    "vote_average": 8.51,
    "vote_count": 16354,
    "poster_path": "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
    "genre_ids": [
      14,
      18,
      80
    ],
    "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    "release_date": "1999-12-10"
  },
  {
    "title": "Pulp Fiction",
    "vote_average": 8.489,
    "vote_count": 26445,
    "poster_path": "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    "release_date": "1994-09-10"
  },
  {
    "title": "GoodFellas",
    "vote_average": 8.466,
    "vote_count": 12057,
    "poster_path": "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
    "release_date": "1990-09-12"
  },
  {
    "title": "City of God",
    "vote_average": 8.433,
    "vote_count": 6870,
    "poster_path": "/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
    "release_date": "2002-08-30"
  },
  {
    "title": "Once Upon a Time in America",
    "vote_average": 8.422,
    "vote_count": 5017,
    "poster_path": "/i0enkzsL5dPeneWnjl1fCWm6L7k.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
    "release_date": "1984-05-23"
  },
  {
    "title": "Se7en",
    "vote_average": 8.372,
    "vote_count": 19843,
    "poster_path": "/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "overview": "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
    "release_date": "1995-09-22"
  },
  {
    "title": "The Silence of the Lambs",
    "vote_average": 8.344,
    "vote_count": 15382,
    "poster_path": "/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Clarice Starling is a top student at the FBI's training academy.  Jack Crawford wants Clarice to interview Dr. Hannibal Lecter, a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism.  Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.",
    "release_date": "1991-02-14"
  },
  {
    "title": "High and Low",
    "vote_average": 8.313,
    "vote_count": 787,
    "poster_path": "/tgNjemQPG96uIezpiUiXFcer5ga.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "A shoe company executive who has mortgaged everything he has becomes a victim of extortion when his chauffeur's son is kidnapped and is conflicted over whether he should pay the ransom.",
    "release_date": "1963-03-01"
  },
  {
    "title": "Léon: The Professional",
    "vote_average": 8.313,
    "vote_count": 13970,
    "poster_path": "/yI6X2cCM5YPJtxMhUd3dPGqDAhw.jpg",
    "genre_ids": [
      80,
      18,
      28
    ],
    "overview": "Léon, the top hit man in New York, has earned a rep as an effective \"cleaner\". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Léon's footsteps.",
    "release_date": "1994-09-14"
  },
  {
    "title": "Le Trou",
    "vote_average": 8.3,
    "vote_count": 422,
    "poster_path": "/8kxtOm7D992iAaOzUoWmNQwbXjs.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "Four prison inmates have been hatching a plan to literally dig out of jail when another prisoner, Claude Gaspard, is moved into their cell. They take a risk and share their plan with the newcomer. Over the course of three days, the prisoners and friends break through the concrete floor using a bed post and begin to make their way through the sewer system -- yet their escape is anything but assured.",
    "release_date": "1960-03-18"
  },
  {
    "title": "Witness for the Prosecution",
    "vote_average": 8.215,
    "vote_count": 1265,
    "poster_path": "/bCj4EfuehAlgBwVd3diyWyhuuau.jpg",
    "genre_ids": [
      18,
      9648,
      80
    ],
    "overview": "When Leonard Vole is arrested for the sensational murder of a rich, middle-aged widow, the famous Sir Wilfrid Robarts agrees to appear on his behalf. Sir Wilfrid, recovering from a near-fatal heart attack, is supposed to be on a diet of bland, civil suits—but the lure of the criminal courts is too much for him, especially when the case is so difficult.",
    "release_date": "1957-12-17"
  },
  {
    "title": "A Clockwork Orange",
    "vote_average": 8.21,
    "vote_count": 12195,
    "poster_path": "/4sHeTAp65WrSSuc05nRBKddhBxO.jpg",
    "genre_ids": [
      878,
      80
    ],
    "overview": "In a near-future Britain, young Alexander DeLarge and his pals get their kicks beating and raping anyone they please. When not destroying the lives of others, Alex swoons to the music of Beethoven. The state, eager to crack down on juvenile crime, gives an incarcerated Alex the option to undergo an invasive procedure that'll rob him of all personal agency. In a time when conscience is a commodity, can Alex change his tune?",
    "release_date": "1971-12-19"
  },
  {
    "title": "The Usual Suspects",
    "vote_average": 8.19,
    "vote_count": 9816,
    "poster_path": "/99X2SgyFunJFXGAYnDv3sb9pnUD.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "Held in an L.A. interrogation room, Verbal Kint attempts to convince the feds that a mythic crime lord, Keyser Soze, not only exists, but was also responsible for drawing him and his four partners into a multi-million dollar heist that ended with an explosion in San Pedro harbor – leaving few survivors. Verbal lures his interrogators with an incredible story of the crime lord's almost supernatural prowess.",
    "release_date": "1995-07-19"
  },
  {
    "title": "Scarface",
    "vote_average": 8.167,
    "vote_count": 11040,
    "poster_path": "/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
    "release_date": "1983-12-09"
  },
  {
    "title": "Joker",
    "vote_average": 8.166,
    "vote_count": 23925,
    "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "release_date": "2019-10-01"
  },
  {
    "title": "The Departed",
    "vote_average": 8.166,
    "vote_count": 14076,
    "poster_path": "/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.",
    "release_date": "2006-10-04"
  },
  {
    "title": "Taxi Driver",
    "vote_average": 8.154,
    "vote_count": 11413,
    "poster_path": "/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feed his urge for violent action.",
    "release_date": "1976-02-09"
  },
  {
    "title": "The Hate U Give",
    "vote_average": 8.149,
    "vote_count": 2025,
    "poster_path": "/2icwBom0t5nmOuZI9FVXF3gkMK0.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Raised in a poverty-stricken slum, a 16-year-old girl named Starr now attends a suburban prep school. After she witnesses a police officer shoot her unarmed best friend, she's torn between her two very different worlds as she tries to speak her truth.",
    "release_date": "2018-10-19"
  },
  {
    "title": "Reservoir Dogs",
    "vote_average": 8.13,
    "vote_count": 13557,
    "poster_path": "/xi8Iu6qyTfyZVDVy60raIOYJJmk.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.",
    "release_date": "1992-09-02"
  },
  {
    "title": "Lock, Stock and Two Smoking Barrels",
    "vote_average": 8.124,
    "vote_count": 6193,
    "poster_path": "/wt2TRBmFmBn5M5MBcPTwovlREaB.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "A card shark and his unwillingly-enlisted friends need to make a lot of cash quick after losing a sketchy poker match. To do this they decide to pull a heist on a small-time gang who happen to be operating out of the flat next door.",
    "release_date": "1998-08-28"
  },
  {
    "title": "Double Indemnity",
    "vote_average": 8.119,
    "vote_count": 1665,
    "poster_path": "/kkfKLeOTo7RjS9TxHKpknlL7huS.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "A rich woman and a calculating insurance agent plot to kill her unsuspecting husband after he signs a double indemnity policy. Against a backdrop of distinctly Californian settings, the partners in crime plan the perfect murder to collect the insurance, which pays double if the death is accidental.",
    "release_date": "1944-07-06"
  },
  {
    "title": "Rashomon",
    "vote_average": 8.114,
    "vote_count": 2011,
    "poster_path": "/vL7Xw04nFMHwnvXRFCmYYAzMUvY.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "Brimming with action while incisively examining the nature of truth, \"Rashomon\" is perhaps the finest film ever to investigate the philosophy of justice. Through an ingenious use of camera and flashbacks, Kurosawa reveals the complexities of human nature as four people recount different versions of the story of a man's murder and the rape of his wife.",
    "release_date": "1950-08-26"
  },
  {
    "title": "Bound by Honor",
    "vote_average": 8.1,
    "vote_count": 1182,
    "poster_path": "/gvP6R6juhe2IpCG7QGDgjyUvm0g.jpg",
    "genre_ids": [
      80,
      28,
      18,
      53
    ],
    "overview": "Based on the true life experiences of poet Jimmy Santiago Baca, the film focuses on half-brothers Paco and Cruz, and their bi-racial cousin Miklo. It opens in 1972, as the three are members of an East L.A. gang known as the \"Vatos Locos\", and the story focuses on how a violent crime and the influence of narcotics alter their lives. Miklo is incarcerated and sent to San Quentin, where he makes a \"home\" for himself. Cruz becomes an exceptional artist, but a heroin addiction overcomes him with tragic results. Paco becomes a cop and an enemy to his \"carnal\", Miklo.",
    "release_date": "1993-02-05"
  },
  {
    "title": "Some Like It Hot",
    "vote_average": 8.106,
    "vote_count": 3227,
    "poster_path": "/hVIKyTK13AvOGv7ICmJjK44DTzp.jpg",
    "genre_ids": [
      35,
      10749,
      80
    ],
    "overview": "Two musicians witness a mob hit and struggle to find a way out of the city before they are found by the gangsters. Their only opportunity is to join an all-girl band as they leave on a tour. To make their getaway they must first disguise themselves as women, then keep their identities secret and deal with the problems this brings - such as an attractive bandmate and a very determined suitor.",
    "release_date": "1959-03-19"
  },
  {
    "title": "Big Deal on Madonna Street",
    "vote_average": 8.1,
    "vote_count": 656,
    "poster_path": "/f5OxD8Nl0pR3DcYHtYhHRfpsmjl.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Best friends Peppe and Mario are thieves, but they're not very good at it. Still, Peppe thinks that he's finally devised a master heist that will make them rich. With the help of some fellow criminals, he plans to dig a tunnel from a rented apartment to the pawnshop next door, where they can rob the safe. But his plan is far from foolproof, and the fact that no one in the group has any experience digging tunnels proves to be the least of their problems.",
    "release_date": "1958-07-26"
  },
  {
    "title": "Prisoners",
    "vote_average": 8.094,
    "vote_count": 10986,
    "poster_path": "/k1LDxbfSu7mCVhWf6byLAfFk1Pm.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "Keller Dover is facing a parent’s worst nightmare: his young daughter and her friend have gone missing. Heading the investigation, Detective Loki arrests the only suspect – the driver of an RV on which the girls had been playing – but a lack of evidence forces his release. As pressure mounts, Loki’s team pursues multiple leads while a frantic Dover decides he has no choice but to take matters into his own hands.",
    "release_date": "2013-09-19"
  },
  {
    "title": "M",
    "vote_average": 8.088,
    "vote_count": 1974,
    "poster_path": "/slsS6jT6SXjcTPOrsFcLIrHboXA.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "In this classic German thriller, Hans Beckert, a serial killer who preys on children, becomes the focus of a massive Berlin police manhunt. Beckert's heinous crimes are so repellant and disruptive to city life that he is even targeted by others in the seedy underworld network. With both cops and criminals in pursuit, the murderer soon realizes that people are on his trail, sending him into a tense, panicked attempt to escape justice.",
    "release_date": "1931-05-11"
  },
  {
    "title": "Three Billboards Outside Ebbing, Missouri",
    "vote_average": 8.08,
    "vote_count": 9596,
    "poster_path": "/pZRhqJj0DBy4ghB7g6pU7MGHsWJ.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "After seven months have passed without a culprit in her daughter's murder case, Mildred Hayes makes a bold move, painting three signs leading into her town with a controversial message directed at Bill Willoughby, the town's revered chief of police. When his second-in-command Officer Jason Dixon, an immature mother's boy with a penchant for violence, gets involved, the battle between Mildred and Ebbing's law enforcement is only exacerbated.",
    "release_date": "2017-12-01"
  },
  {
    "title": "The Young and the Damned",
    "vote_average": 8.071,
    "vote_count": 446,
    "poster_path": "/3bdfN2gosYSxpHBAXPkAhxkUJFr.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "A group of juvenile delinquents live a violent, criminal life in the festering slums of Mexico City, among them the young Pedro, whose morality is gradually corrupted and destroyed by the others.",
    "release_date": "1950-12-09"
  },
  {
    "title": "Memories of Murder",
    "vote_average": 8.07,
    "vote_count": 3447,
    "poster_path": "/lp3Qzzq1zzy6ToJul9DGBBd8ua1.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "During the late 1980s, two detectives in a South Korean province attempt to solve the nation's first series of rape-and-murder cases.",
    "release_date": "2003-05-02"
  },
  {
    "title": "Rocco and His Brothers",
    "vote_average": 8.1,
    "vote_count": 527,
    "poster_path": "/pngL8AraChIDOiWnKF2o3S9kJzJ.jpg",
    "genre_ids": [
      18,
      10749,
      80
    ],
    "overview": "When a impoverished widow’s family moves to the big city, two of her five sons become romantic rivals with deadly results.",
    "release_date": "1960-10-06"
  },
  {
    "title": "Elite Squad",
    "vote_average": 8.054,
    "vote_count": 2222,
    "poster_path": "/lwIXz785N2fXi8hsBr1IXciFlkM.jpg",
    "genre_ids": [
      18,
      28,
      80
    ],
    "overview": "In 1997, before the visit of the pope to Rio de Janeiro, Captain Nascimento from BOPE (Special Police Operations Battalion) is assigned to eliminate the risks of the drug dealers in a dangerous slum nearby where the pope intends to be lodged.",
    "release_date": "2007-10-12"
  },
  {
    "title": "Cruella",
    "vote_average": 8.04,
    "vote_count": 8720,
    "poster_path": "/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
    "release_date": "2021-05-26"
  },
  {
    "title": "The Wolf of Wall Street",
    "vote_average": 8.035,
    "vote_count": 22709,
    "poster_path": "/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
    "genre_ids": [
      80,
      18,
      35
    ],
    "overview": "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
    "release_date": "2013-12-25"
  },
  {
    "title": "Requiem for a Dream",
    "vote_average": 8.023,
    "vote_count": 9366,
    "poster_path": "/nOd6vjEmzCT0k4VYqsA2hwyi87C.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "The hopes and dreams of four ambitious people are shattered when their drug addictions begin spiraling out of control. A look into addiction and how it overcomes the mind and body.",
    "release_date": "2000-10-06"
  },
  {
    "title": "The Sting",
    "vote_average": 8.018,
    "vote_count": 2406,
    "poster_path": "/ckmYng37zey8INYf6d10cVgIG93.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "A novice con man teams up with an acknowledged master to avenge the murder of a mutual friend by pulling off the ultimate big con and swindling a fortune from a big-time mobster.",
    "release_date": "1973-12-25"
  },
  {
    "title": "Dial M for Murder",
    "vote_average": 8.015,
    "vote_count": 2408,
    "poster_path": "/2gDCAgl2iBQNuJuk6p2xtuS1ewg.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "An ex-tennis pro carries out a plot to have his wife murdered after discovering she is having an affair, and assumes she will soon leave him for the other man anyway. When things go wrong, he improvises a new plan—to frame her for murder instead.",
    "release_date": "1954-05-29"
  },
  {
    "title": "Casino",
    "vote_average": 8.011,
    "vote_count": 5414,
    "poster_path": "/4TS5O1IP42bY2BvgMxL156EENy.jpg",
    "genre_ids": [
      80,
      18,
      36
    ],
    "overview": "In early-1970s Las Vegas, Sam \"Ace\" Rothstein gets tapped by his bosses to head the Tangiers Casino. At first, he's a great success in the job, but over the years, problems with his loose-cannon enforcer Nicky Santoro, his ex-hustler wife Ginger, her con-artist ex Lester Diamond and a handful of corrupt politicians put Sam in ever-increasing danger.",
    "release_date": "1995-11-22"
  },
  {
    "title": "Kill Bill: The Whole Bloody Affair",
    "vote_average": 7.98,
    "vote_count": 926,
    "poster_path": "/nxbv9TPXrIpRKB5xQh6atWXAkPM.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "An assassin is shot and almost killed by her ruthless employer, Bill, and other members of their assassination circle – but she lives to plot her vengeance.  Kill Bill: The Whole Bloody Affair is a complete edit of the two-part martial arts action films Kill Bill: Vol. 1 and Kill Bill: Vol. 2. The film was originally scheduled to be released as one part. However, due to the film's over 4 hour running time, it was split into two parts.",
    "release_date": "2011-03-27"
  },
  {
    "title": "Catch Me If You Can",
    "vote_average": 7.975,
    "vote_count": 14726,
    "poster_path": "/ctjEj2xM32OvBXCq8zAdK3ZrsAj.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A true story about Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars worth of checks as a Pan Am pilot, doctor, and legal prosecutor. An FBI agent makes it his mission to put him behind bars. But Frank not only eludes capture, he revels in the pursuit.",
    "release_date": "2002-12-16"
  },
  {
    "title": "Forgotten",
    "vote_average": 7.971,
    "vote_count": 950,
    "poster_path": "/cBgj41y1RvmW1zJCEX0uNWL0UjW.jpg",
    "genre_ids": [
      53,
      9648,
      80
    ],
    "overview": "Seoul, South Korea, 1997. When the young but extremely anxious student Jin-seok, his parents and his successful older brother Yoo-seok move to a new home, mysterious and frightening events begin to happen around them, unexplained events that threaten to ruin their seemingly happy lives. Unable to understand what is happening, Jin-seok wonders if he is losing his mind.",
    "release_date": "2017-11-29"
  },
  {
    "title": "Trainspotting",
    "vote_average": 7.969,
    "vote_count": 9163,
    "poster_path": "/6UTzw3kipgTYAJCX8GExoXzcVOx.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Heroin addict Mark Renton stumbles through bad ideas and sobriety attempts with his unreliable friends -- Sick Boy, Begbie, Spud and Tommy. He also has an underage girlfriend, Diane, along for the ride. After cleaning up and moving from Edinburgh to London, Mark finds he can't escape the life he left behind when Begbie shows up at his front door on the lam, and a scheming Sick Boy follows.",
    "release_date": "1996-02-23"
  },
  {
    "title": "Kill Bill: Vol. 1",
    "vote_average": 7.969,
    "vote_count": 16484,
    "poster_path": "/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle – but she lives to plot her vengeance.",
    "release_date": "2003-10-10"
  },
  {
    "title": "Rope",
    "vote_average": 7.963,
    "vote_count": 2467,
    "poster_path": "/b26XeLSqZpC807rPvAvGgQM2c3c.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "Two men murder a man in cold blood for the thrill and invite his parents over for a celebration to prove they have committed the perfect crime, but they also have to deal with their former schoolmaster, who becomes suspicious.",
    "release_date": "1948-03-11"
  },
  {
    "title": "The Cabinet of Dr. Caligari",
    "vote_average": 7.95,
    "vote_count": 1433,
    "poster_path": "/myK9DeIsXWGKgUTZyGXg2IfFk0W.jpg",
    "genre_ids": [
      18,
      27,
      53,
      80
    ],
    "overview": "Francis, a young man, recalls in his memory the horrible experiences he and his fiancée Jane recently went through. Francis and his friend Alan visit The Cabinet of Dr. Caligari, an exhibit where the mysterious doctor shows the somnambulist Cesare, and awakens him for some moments from his death-like sleep.",
    "release_date": "1920-02-27"
  },
  {
    "title": "Argentina, 1985",
    "vote_average": 7.942,
    "vote_count": 544,
    "poster_path": "/u0TFD4YFMfYtNSLxfbWq5cg0KIh.jpg",
    "genre_ids": [
      18,
      36,
      80
    ],
    "overview": "In the 1980s, a team of lawyers takes on the heads of Argentina's bloody military dictatorship in a battle against odds and a race against time.",
    "release_date": "2022-09-29"
  },
  {
    "title": "On the Waterfront",
    "vote_average": 7.94,
    "vote_count": 1450,
    "poster_path": "/fKjLZy9W8VxMOp5OoyWojmLVCQw.jpg",
    "genre_ids": [
      80,
      18,
      10749
    ],
    "overview": "A dim-witted yet kind-hearted boxer, Terry Malloy, who failed to succeed unintentionally lures a man to his death after being tricked by a criminal called Johnny Friendly whose men pick of every man who has the courage to speak up to their crimes. As he works on the waterfronts that Friendly owns, he is sent to a church meeting run by a good preacher about how to deal with the problem and runs into the dead man’s sister. Slowly, he falls in love with her and begins to feel guilt about his crime.",
    "release_date": "1954-06-22"
  },
  {
    "title": "No Country for Old Men",
    "vote_average": 7.936,
    "vote_count": 11212,
    "poster_path": "/bj1v6YKF8yHqA489VFfnQvOJpnc.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Llewelyn Moss stumbles upon dead bodies, $2 million and a hoard of heroin in a Texas desert, but methodical killer Anton Chigurh comes looking for it, with local sheriff Ed Tom Bell hot on his trail. The roles of prey and predator blur as the violent pursuit of money and justice collide.",
    "release_date": "2007-06-13"
  },
  {
    "title": "Chinatown",
    "vote_average": 7.914,
    "vote_count": 3528,
    "poster_path": "/mQJz8J4naOA7RmCtypTPjgXZIMY.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "Private eye Jake Gittes lives off of the murky moral climate of sunbaked, pre-World War II Southern California. Hired by a beautiful socialite to investigate her husband's extra-marital affair, Gittes is swept into a maelstrom of double dealings and deadly deceits, uncovering a web of personal and political scandals that come crashing together.",
    "release_date": "1974-06-20"
  },
  {
    "title": "Divorce Italian Style",
    "vote_average": 7.913,
    "vote_count": 403,
    "poster_path": "/vZbdSpUFyFiDBBTY0AiSrN9f303.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Ferdinando Cefalù is desperate to marry his cousin, Angela, but he is married to Rosalia and divorce is illegal in Italy. To get around the law, he tries to trick his wife into having an affair so he can catch her and murder her, as he knows he would be given a light sentence for killing an adulterous woman. He persuades a painter to lure his wife into an affair, but Rosalia proves to be more faithful than he expected.",
    "release_date": "1961-12-20"
  },
  {
    "title": "Freedom Writers",
    "vote_average": 7.912,
    "vote_count": 2068,
    "poster_path": "/81AdeUQT99N0xPg3j6RVh0YGOTk.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "A young teacher inspires her class of at-risk students to learn tolerance, apply themselves, and pursue education beyond high school.",
    "release_date": "2007-01-05"
  },
  {
    "title": "Heat",
    "vote_average": 7.908,
    "vote_count": 6763,
    "poster_path": "/umSVjVdbVwtx5ryCA2QXL44Durm.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "Obsessive master thief Neil McCauley leads a top-notch crew on various daring heists throughout Los Angeles while determined detective Vincent Hanna pursues him without rest. Each man recognizes and respects the ability and the dedication of the other even though they are aware their cat-and-mouse game may end in violence.",
    "release_date": "1995-12-15"
  },
  {
    "title": "Bad Genius",
    "vote_average": 7.906,
    "vote_count": 734,
    "poster_path": "/mgyvwqn5SYKhfg5kofZDfgH8R0q.jpg",
    "genre_ids": [
      18,
      80,
      53,
      35
    ],
    "overview": "Lynn, a brilliant student, after helping her friends to get the grades they need, develops the idea of starting a much bigger exam-cheating business.",
    "release_date": "2017-05-03"
  },
  {
    "title": "Just Mercy",
    "vote_average": 7.895,
    "vote_count": 2090,
    "poster_path": "/4YJNp1cquIkX8JxFwkKNEFQ9tgr.jpg",
    "genre_ids": [
      18,
      80,
      36
    ],
    "overview": "The powerful true story of Harvard-educated lawyer Bryan Stevenson, who goes to Alabama to defend the disenfranchised and wrongly condemned — including Walter McMillian, a man sentenced to death despite evidence proving his innocence. Bryan fights tirelessly for Walter with the system stacked against them.",
    "release_date": "2019-12-25"
  },
  {
    "title": "Z",
    "vote_average": 7.892,
    "vote_count": 471,
    "poster_path": "/dFAJyFNgvOv24f2RQyI9KDxjGr3.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "Amidst a heated political climate, the opposition leader is killed in what appears to be a traffic accident. When a magistrate finds evidence of a government cover-up, witnesses start to get targeted. A thinly-fictionalized account of the events surrounding the assassination of Greek politician Grigoris Lambrakis in 1963, Z captures the outrage about the military junta that ruled Greece at the time.",
    "release_date": "1969-02-26"
  },
  {
    "title": "The Night of the Hunter",
    "vote_average": 7.9,
    "vote_count": 1443,
    "poster_path": "/rBka0nFWiHxabHRLr0KfIA8Yiaq.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "In the Deep South, a serial-killing preacher hunts two young children who know the whereabouts of a stash of money.",
    "release_date": "1955-08-26"
  },
  {
    "title": "Kill Bill: Vol. 2",
    "vote_average": 7.876,
    "vote_count": 13149,
    "poster_path": "/2yhg0mZQMhDyvUQ4rG1IZ4oIA8L.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "The Bride unwaveringly continues on her roaring rampage of revenge against the band of assassins who had tried to kill her and her unborn child. She visits each of her former associates one-by-one, checking off the victims on her Death List Five until there's nothing left to do … but kill Bill.",
    "release_date": "2004-04-16"
  },
  {
    "title": "Close-Up",
    "vote_average": 7.874,
    "vote_count": 333,
    "poster_path": "/m9HG2N9ZKCmNN9qOHJTNyy18wn3.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "This fiction-documentary hybrid uses a sensational real-life event—the arrest of a young man on charges that he fraudulently impersonated the well-known filmmaker Mohsen Makhmalbaf—as the basis for a stunning, multilayered investigation into movies, identity, artistic creation, and existence, in which the real people from the case play themselves.",
    "release_date": "1990-05-09"
  },
  {
    "title": "Fargo",
    "vote_average": 7.864,
    "vote_count": 7494,
    "poster_path": "/rt7cpEr1uP6RTZykBFhBTcRaKvG.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Jerry, a small-town Minnesota car salesman is bursting at the seams with debt... but he's got a plan. He's going to hire two thugs to kidnap his wife in a scheme to collect a hefty ransom from his wealthy father-in-law. It's going to be a snap and nobody's going to get hurt... until people start dying. Enter Police Chief Marge, a coffee-drinking, parka-wearing - and extremely pregnant - investigator who'll stop at nothing to get her man. And if you think her small-time investigative skills will give the crooks a run for their ransom... you betcha!",
    "release_date": "1996-03-08"
  },
  {
    "title": "Dancer in the Dark",
    "vote_average": 7.865,
    "vote_count": 1662,
    "poster_path": "/8Wdd3fQfbbQeoSfWpHrDfaFNhBU.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Selma, a Czech immigrant on the verge of blindness, struggles to make ends meet for herself and her son, who has inherited the same genetic disorder and will suffer the same fate without an expensive operation. When life gets too difficult, Selma learns to cope through her love of musicals, escaping life's troubles - even if just for a moment - by dreaming up little numbers to the rhythmic beats of her surroundings.",
    "release_date": "2000-06-30"
  },
  {
    "title": "Shoplifters",
    "vote_average": 7.863,
    "vote_count": 1887,
    "poster_path": "/4nfRUOv3LX5zLn98WS1WqVBk9E9.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "After one of their shoplifting sessions, Osamu and his son come across a little girl in the freezing cold. At first reluctant to shelter the girl, Osamu’s wife agrees to take care of her after learning of the hardships she faces. Although the family is poor, barely making enough money to survive through petty crime, they seem to live happily together until an unforeseen incident reveals hidden secrets, testing the bonds that unite them.",
    "release_date": "2018-06-02"
  },
  {
    "title": "See You Up There",
    "vote_average": 7.861,
    "vote_count": 1202,
    "poster_path": "/pkO5YoznMR9neuHVzhxHK9JJpAj.jpg",
    "genre_ids": [
      18,
      80,
      10752
    ],
    "overview": "In November 1918, a few days before the Armistice, when Lieutenant Pradelle orders a senseless attack, he causes a useless disaster; but his outrageous act also binds the lives of two soldiers who have nothing more in common than the battlefield: Édouard saves Albert, although at a high cost. They become companions in misfortune who will attempt to survive in a changing world. Pradelle, in his own way, does the same.",
    "release_date": "2017-10-25"
  },
  {
    "title": "Sherlock: The Abominable Bride",
    "vote_average": 7.861,
    "vote_count": 2172,
    "poster_path": "/hibE8cyZs2Bm0o4WaWd1pppvjO2.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      10770
    ],
    "overview": "Sherlock Holmes and Dr. Watson find themselves in 1890s London in this holiday special.",
    "release_date": "2016-01-01"
  },
  {
    "title": "Paper Moon",
    "vote_average": 7.9,
    "vote_count": 653,
    "poster_path": "/3GHG0kTcBWHKdXjj3RdK8GjBCd6.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "A bible salesman finds himself saddled with a young girl who may or may not be his daughter, and the two forge an unlikely partnership as a money-making con team in Depression-era Kansas.",
    "release_date": "1973-05-09"
  },
  {
    "title": "A Bronx Tale",
    "vote_average": 7.854,
    "vote_count": 2231,
    "poster_path": "/sDbO6LmLYtyqAoFTPpRcMgPSCEO.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Set in the Bronx during the tumultuous 1960s, an adolescent boy is torn between his honest, working-class father and a violent yet charismatic crime boss. Complicating matters is the youngster's growing attraction - forbidden in his neighborhood - for a beautiful black girl.",
    "release_date": "1993-10-01"
  },
  {
    "title": "Stand by Me",
    "vote_average": 7.85,
    "vote_count": 5461,
    "poster_path": "/vz0w9BSehcqjDcJOjRaCk7fgJe7.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Gordie, Chris, Teddy and Vern are four friends who decide to hike to find the corpse of Ray Brower, a local teenager, who was hit by a train while plucking blueberries in the wild.",
    "release_date": "1986-08-08"
  },
  {
    "title": "Papillon",
    "vote_average": 7.846,
    "vote_count": 1763,
    "poster_path": "/356oqQpug682OERsWV0bGZ0YxwQ.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "A man befriends a fellow criminal as the two of them begin serving their sentence on a dreadful prison island, which inspires the man to plot his escape.",
    "release_date": "1973-12-13"
  },
  {
    "title": "Knives Out",
    "vote_average": 7.846,
    "vote_count": 11463,
    "poster_path": "/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    "genre_ids": [
      35,
      80,
      9648
    ],
    "overview": "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
    "release_date": "2019-11-27"
  },
  {
    "title": "El Infierno",
    "vote_average": 7.842,
    "vote_count": 605,
    "poster_path": "/jeiBaHvMZhWtdWYyJGjYRhcW8ob.jpg",
    "genre_ids": [
      18,
      80,
      35
    ],
    "overview": "Benjamin Garcia, Benny is deported from the United States. Back home and against a bleak picture, Benny gets involved in the drug business, in which he has for the first time in his life, a spectacular rise surrounded by money, women, violence and fun. But very soon he will discover that criminal life does not always keep its promises.",
    "release_date": "2010-09-03"
  },
  {
    "title": "Anatomy of a Murder",
    "vote_average": 7.842,
    "vote_count": 882,
    "poster_path": "/zMxLbSPpToTCc6yK2Gddhx6nHNN.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "Semi-retired Michigan lawyer Paul Biegler takes the case of Army Lt. Manion, who murdered a local innkeeper after his wife claimed that he raped her. Over the course of an extensive trial, Biegler parries with District Attorney Lodwick and out-of-town prosecutor Claude Dancer to set his client free, but his case rests on the victim's mysterious business partner, who's hiding a dark secret.",
    "release_date": "1959-07-01"
  },
  {
    "title": "The Big Lebowski",
    "vote_average": 7.84,
    "vote_count": 10597,
    "poster_path": "/3bv6WAp6BSxxYvB5ozKFUYuRA8C.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Jeffrey 'The Dude' Lebowski, a Los Angeles slacker who only wants to bowl and drink White Russians, is mistaken for another Jeffrey Lebowski, a wheelchair-bound millionaire, and finds himself dragged into a strange series of events involving nihilists, adult film producers, ferrets, errant toes, and large sums of money.",
    "release_date": "1998-03-06"
  },
  {
    "title": "Dog Day Afternoon",
    "vote_average": 7.837,
    "vote_count": 2746,
    "poster_path": "/mavrhr0ig2aCRR8d48yaxtD5aMQ.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Based on the true story of would-be Brooklyn bank robbers John Wojtowicz and Salvatore Naturale. Sonny and Sal attempt a bank heist which quickly turns sour and escalates into a hostage situation and stand-off with the police. As Sonny's motives for the robbery are slowly revealed and things become more complicated, the heist turns into a media circus.",
    "release_date": "1975-09-21"
  },
  {
    "title": "Carlito's Way",
    "vote_average": 7.8,
    "vote_count": 2926,
    "poster_path": "/g6D7mjQtndu768cusGmoEQY9fTB.jpg",
    "genre_ids": [
      80,
      18,
      10749,
      53
    ],
    "overview": "A Puerto-Rican ex-con, just released from prison, pledges to stay away from drugs and violence despite the pressure around him, and lead a better life outside NYC.",
    "release_date": "1993-11-10"
  },
  {
    "title": "The Best Offer",
    "vote_average": 7.835,
    "vote_count": 2700,
    "poster_path": "/yfbsINSfotAHaeWKJbfsVKSckvq.jpg",
    "genre_ids": [
      18,
      10749,
      80
    ],
    "overview": "Virgil Oldman is a world renowned antiques expert and auctioneer. An eccentric genius, he leads a solitary life, going to extreme lengths to keep his distance from the messiness of human relationships. When appointed by the beautiful but emotionally damaged Claire to oversee the valuation and sale of her family’s priceless art collection, Virgil allows himself to form an attachment to her – and soon he is engulfed by a passion which will rock his bland existence to the core.",
    "release_date": "2013-01-01"
  },
  {
    "title": "Rififi",
    "vote_average": 7.829,
    "vote_count": 505,
    "poster_path": "/heVdAFNZUxXVmO6jiJcEHCvI5lK.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "overview": "Out of prison after a five-year stretch, jewel thief Tony turns down a quick job his friend Jo offers him, until he discovers that his old girlfriend Mado has become the lover of local gangster Pierre Grutter during Tony's absence. Expanding a minor smash-and-grab into a full-scale jewel heist, Tony and his crew appear to get away clean, but their actions after the job is completed threaten the lives of everyone involved.",
    "release_date": "1955-04-13"
  },
  {
    "title": "Infernal Affairs",
    "vote_average": 7.82,
    "vote_count": 1492,
    "poster_path": "/qdlwFWn2YdLzw5KHpMpzRY9BI7r.jpg",
    "genre_ids": [
      18,
      28,
      53,
      80,
      9648
    ],
    "overview": "Chan Wing Yan, a young police officer, has been sent undercover as a mole in the local mafia. Lau Kin Ming, a young mafia member, infiltrates the police force. Years later, their older counterparts, Chen Wing Yan and Inspector Lau Kin Ming, respectively, race against time to expose the mole within their midst.",
    "release_date": "2002-12-12"
  },
  {
    "title": "Elite Squad: The Enemy Within",
    "vote_average": 7.818,
    "vote_count": 1741,
    "poster_path": "/c7yCrf3PTSdp6RMGktZQhzFcFFM.jpg",
    "genre_ids": [
      18,
      28,
      80
    ],
    "overview": "After a bloody invasion of the BOPE in the High-Security Penitentiary Bangu 1 in Rio de Janeiro to control a rebellion of interns, the Lieutenant-Colonel Roberto Nascimento and the second in command Captain André Matias are accused by the Human Right Aids member Diogo Fraga of execution of prisoners. Matias is transferred to the corrupted Military Police and Nascimento is exonerated from the BOPE by the Governor.",
    "release_date": "2010-10-08"
  },
  {
    "title": "Don't Be Bad",
    "vote_average": 7.814,
    "vote_count": 925,
    "poster_path": "/taSfNqBkM6fVexayWLKcqHxMg7a.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "A story set in the 90s and in the outskirts of Rome to Ostia. A world where money, luxury cars, night clubs, cocaine and synthetic drugs are easy to run. A world in which Vittorio and Cesare, in their early twenties, act in search of their success.",
    "release_date": "2015-09-08"
  },
  {
    "title": "The Heist of the Century",
    "vote_average": 7.812,
    "vote_count": 724,
    "poster_path": "/1zL4VCVin4S8kOXhszMDqfwWPCM.jpg",
    "genre_ids": [
      35,
      53,
      80
    ],
    "overview": "In 2006, a group of thieves performed what is considered one of the most famous and smart bank heists in the history of Argentina. How they robbed the Rio bank is as surprising as what happened afterwards. This is their story.",
    "release_date": "2020-01-16"
  },
  {
    "title": "The Killer",
    "vote_average": 7.808,
    "vote_count": 312,
    "poster_path": "/5IQqdtTq1wH5YJynx86Ysi4sDVt.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "When retired hitman’s wife goes on vacation with her friend, she asks him to look after the friend's teenage daughter. Things go awry when he is forced to use a little violence to protect the girl from juvenile delinquents, but then they are found dead and the girl is kidnapped.",
    "release_date": "2022-07-13"
  },
  {
    "title": "Snatch",
    "vote_average": 7.806,
    "vote_count": 8511,
    "poster_path": "/56mOJth6DJ6JhgoE2jtpilVqJO.jpg",
    "genre_ids": [
      80,
      35
    ],
    "overview": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
    "release_date": "2000-09-01"
  },
  {
    "title": "Le Samouraï",
    "vote_average": 7.805,
    "vote_count": 934,
    "poster_path": "/5Fa6o5nfUPEatQ9b3OwEvdEdR7T.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "overview": "After carrying out a flawlessly planned hit, Jef Costello, a contract killer with samurai instincts, finds himself caught between a persistent police investigator and a ruthless employer, and not even his armor of fedora and trench coat can protect him.",
    "release_date": "1967-10-25"
  },
  {
    "title": "3-Iron",
    "vote_average": 7.802,
    "vote_count": 1063,
    "poster_path": "/myv6rYCghzi2lyWJLbdhZM43JYK.jpg",
    "genre_ids": [
      18,
      10749,
      80
    ],
    "overview": "A young man, whose only possession is a motorcycle, spends his time riding around the city looking for empty apartments. After finding one, he hangs out for a while, fixing himself something to eat, washing laundry or making small repairs in return. He always tries to leave before the owners get back but in one ostensibly empty mansion he meets the abused wife of a rich man and she escapes with him.",
    "release_date": "2004-10-15"
  },
  {
    "title": "L.A. Confidential",
    "vote_average": 7.788,
    "vote_count": 4597,
    "poster_path": "/lWCgf5sD5FpMljjpkRhcC8pXcch.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "overview": "Three detectives in the corrupt and brutal L.A. police force of the 1950s use differing methods to uncover a conspiracy behind the shotgun slayings of the patrons at an all-night diner.",
    "release_date": "1997-09-19"
  },
  {
    "title": "Monsieur Verdoux",
    "vote_average": 7.8,
    "vote_count": 384,
    "poster_path": "/mUPXIinTQsBdLlDaWiSl7GwQXVs.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "The film is about an unemployed banker, Henri Verdoux, and his sociopathic methods of attaining income. While being both loyal and competent in his work, Verdoux has been laid-off. To make money for his wife and child, he marries wealthy widows and then murders them. His crime spree eventually works against him when two particular widows break his normal routine.",
    "release_date": "1947-09-26"
  },
  {
    "title": "The Dark Knight Rises",
    "vote_average": 7.778,
    "vote_count": 21706,
    "poster_path": "/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
    "release_date": "2012-07-17"
  },
  {
    "title": "The Outlaws",
    "vote_average": 7.768,
    "vote_count": 327,
    "poster_path": "/pUd1FYQb5r55RqXpx08dnCbP1fs.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "In Chinatown, law and order is turned upside down when a trio of feral Chinese gangsters arrive, start terrorizing civilians, and usurping territory. The beleaguered local gangsters team up with the police, lead by the badass loose cannon Ma Seok-do, to bring them down. Based on a true story.",
    "release_date": "2017-10-03"
  },
  {
    "title": "The Untouchables",
    "vote_average": 7.772,
    "vote_count": 5293,
    "poster_path": "/8BquGK22zCcsmBWiaIakaaPpSZb.jpg",
    "genre_ids": [
      80,
      18,
      36,
      53
    ],
    "overview": "Young Treasury Agent Eliot Ness arrives in Chicago and is determined to take down Al Capone, but it's not going to be easy because Capone has the police in his pocket. Ness meets Jim Malone, a veteran patrolman and probably the most honorable one on the force. He asks Malone to help him get Capone, but Malone warns him that if he goes after Capone, he is going to war.",
    "release_date": "1987-06-03"
  },
  {
    "title": "Crooks in Clover",
    "vote_average": 7.771,
    "vote_count": 475,
    "poster_path": "/1uYCIsMpX7FtWu2xO1YMIAQYvLR.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "An aging gangster, Fernand Naudin is hoping for a quiet retirement when he suddenly inherits a fortune from an old friend, a former gangster supremo known as the Mexican. If he is ambivalent about his new found wealth, Fernand is positively nonplussed to discover that he has also inherited his benefactor’s daughter, Patricia. Unfortunately, not only does Fernand have to put up with the thoroughly modern Patricia and her nauseating boyfriend, but he also had to contend with the Mexican’s trigger-happy former employees, who are determined to make a claim.",
    "release_date": "1963-11-27"
  },
  {
    "title": "Nine Queens",
    "vote_average": 7.77,
    "vote_count": 651,
    "poster_path": "/tabMRXUTTBmprGax6ON2r9yBN0D.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "overview": "Two con artists try to swindle a stamp collector by selling him a sheet of counterfeit rare stamps (the \"nine queens\").",
    "release_date": "2000-08-31"
  },
  {
    "title": "Dogville",
    "vote_average": 7.768,
    "vote_count": 2261,
    "poster_path": "/lraVawavIXh5geMlVjpzCw9TGwR.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A mysterious woman named Grace hides in a small mountain town from criminals who pursue her. The town is two-faced and offers to harbor Grace as long as she can make it worth their effort, so Grace works hard under the employ of various townspeople to win their favor. Tensions flare, however, and Grace's status as a helpless outsider provokes vicious contempt and abuse from the citizens of Dogville.",
    "release_date": "2003-05-19"
  },
  {
    "title": "John Wick: Chapter 4",
    "vote_average": 7.765,
    "vote_count": 5371,
    "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    "release_date": "2023-03-22"
  },
  {
    "title": "The Chaser",
    "vote_average": 7.765,
    "vote_count": 1202,
    "poster_path": "/hy49xJiKN1nakkN1ZmKuOf6vQYR.jpg",
    "genre_ids": [
      80,
      53,
      28
    ],
    "overview": "Joong-ho is a dirty detective turned pimp in financial trouble as several of his girls have recently disappeared without clearing their debts. While trying to track them down, he finds a clue that the vanished girls were all called up by the same client whom one of his girls is meeting with right now.",
    "release_date": "2008-02-14"
  },
  {
    "title": "Touch of Evil",
    "vote_average": 7.764,
    "vote_count": 1333,
    "poster_path": "/1pvRgmfBaoMczIJBOi9gCOZ4FMC.jpg",
    "genre_ids": [
      80,
      53,
      9648
    ],
    "overview": "When a car bomb explodes on the American side of the U.S./Mexico border, Mexican drug enforcement agent Miguel Vargas begins his investigation, along with American police captain Hank Quinlan. When Vargas begins to suspect that Quinlan and his shady partner, Menzies, are planting evidence to frame an innocent man, his investigations into their possible corruption quickly put himself and his new bride, Susie, in jeopardy.",
    "release_date": "1958-03-30"
  },
  {
    "title": "The Gangster, the Cop, the Devil",
    "vote_average": 7.759,
    "vote_count": 891,
    "poster_path": "/oHlM4abRm6BzrRcz9Nup1uidw9H.jpg",
    "genre_ids": [
      80,
      28,
      53
    ],
    "overview": "After barely surviving a violent attack by an elusive serial killer, crime boss Jang Dong-su finds himself forming an unlikely partnership with local detective Jung Tae-seok to catch the sadistic killer simply known as K.",
    "release_date": "2019-05-15"
  },
  {
    "title": "Mystic River",
    "vote_average": 7.745,
    "vote_count": 6195,
    "poster_path": "/hCHVDbo6XJGj3r2i4hVjKhE0GKF.jpg",
    "genre_ids": [
      53,
      80,
      18,
      9648
    ],
    "overview": "The lives of three men who were childhood friends are shattered when one of them suffers a family tragedy.",
    "release_date": "2003-03-03"
  },
  {
    "title": "Cool Hand Luke",
    "vote_average": 7.742,
    "vote_count": 1298,
    "poster_path": "/4ykzTiHKLamh3eZJ8orVICtU2Jp.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "When petty criminal Luke Jackson is sentenced to two years in a Florida prison farm, he doesn't play by the rules of either the sadistic warden or the yard's resident heavy, Dragline, who ends up admiring the new guy's unbreakable will. Luke's bravado, even in the face of repeated stints in the prison's dreaded solitary confinement cell, \"the box,\" make him a rebel hero to his fellow convicts and a thorn in the side of the prison officers.",
    "release_date": "1967-11-01"
  },
  {
    "title": "Fallen Angels",
    "vote_average": 7.744,
    "vote_count": 897,
    "poster_path": "/yyM9BPdwttK5LKZSLvHae7QPKo1.jpg",
    "genre_ids": [
      28,
      10749,
      80
    ],
    "overview": "An assassin goes through obstacles as he attempts to escape his violent lifestyle despite the opposition of his partner, who is secretly attracted to him.",
    "release_date": "1995-09-06"
  },
  {
    "title": "Batman: Under the Red Hood",
    "vote_average": 7.74,
    "vote_count": 1493,
    "poster_path": "/7lmHqHg1rG9b4U8MjuyQjmJ7Qm0.jpg",
    "genre_ids": [
      878,
      80,
      28,
      16,
      9648
    ],
    "overview": "One part vigilante, one part criminal kingpin, Red Hood begins cleaning up Gotham with the efficiency of Batman, but without following the same ethical code.",
    "release_date": "2010-07-27"
  },
  {
    "title": "The Blues Brothers",
    "vote_average": 7.74,
    "vote_count": 3907,
    "poster_path": "/3DiSrcYELCLkwnjl9EZp2pkKGep.jpg",
    "genre_ids": [
      10402,
      35,
      28,
      80
    ],
    "overview": "Jake Blues, just released from prison, puts his old band back together to save the Catholic home where he and his brother Elwood were raised.",
    "release_date": "1980-06-16"
  },
  {
    "title": "Mother",
    "vote_average": 7.731,
    "vote_count": 1334,
    "poster_path": "/reAEOWk7UA14V1LMKWlK5pzsJui.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "A mother lives quietly with her son. One day, a girl is brutally killed, and the boy is charged with the murder. Now, it's his mother's mission to prove him innocent.",
    "release_date": "2009-05-28"
  },
  {
    "title": "Time of the Gypsies",
    "vote_average": 7.723,
    "vote_count": 338,
    "poster_path": "/fF9kWNMjiXC6f4YrdVFA0ScnWgQ.jpg",
    "genre_ids": [
      18,
      35,
      80,
      14
    ],
    "overview": "In this luminous tale set in the former Yugoslavia, Perhan, an engaging young Romany with telekinetic powers, is seduced by the quick-cash world of petty crime that threatens to destroy him and those he loves.",
    "release_date": "1988-12-21"
  },
  {
    "title": "The Maltese Falcon",
    "vote_average": 7.718,
    "vote_count": 1546,
    "poster_path": "/bf4o6Uzw5wqLjdKwRuiDrN1xyvl.jpg",
    "genre_ids": [
      9648,
      80,
      53
    ],
    "overview": "A private detective takes on a case that involves him with three eccentric criminals, a beautiful liar, and their quest for a priceless statuette.",
    "release_date": "1941-10-18"
  },
  {
    "title": "Drishyam",
    "vote_average": 7.71,
    "vote_count": 365,
    "poster_path": "/gIClWRv5OSe8rl5Koi0AeUcCZ9Z.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "overview": "A simple, street-smart man tries to protect his family from a cop looking for her missing son.",
    "release_date": "2015-07-30"
  },
  {
    "title": "Nightcrawler",
    "vote_average": 7.704,
    "vote_count": 10206,
    "poster_path": "/j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "When Lou Bloom, desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story. Aiding him in his effort is Nina, a TV-news veteran.",
    "release_date": "2014-10-23"
  },
  {
    "title": "Girl in the Basement",
    "vote_average": 7.704,
    "vote_count": 606,
    "poster_path": "/qmddUxRwbsxHa7oEXm4PWh1KZe8.jpg",
    "genre_ids": [
      80,
      53,
      10770
    ],
    "overview": "Sara is a teen girl who is looking forward to her 18th birthday to move away from her controlling father Don. But before she could even blow out the candles, Don imprisons her in the basement of their home.",
    "release_date": "2021-02-27"
  },
  {
    "title": "Batman Begins",
    "vote_average": 7.703,
    "vote_count": 19937,
    "poster_path": "/4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
    "release_date": "2005-06-10"
  },
  {
    "title": "Black Cat, White Cat",
    "vote_average": 7.696,
    "vote_count": 683,
    "poster_path": "/eEo03ShmRlMh3wkt28KQ6GYlnTW.jpg",
    "genre_ids": [
      35,
      10749,
      80
    ],
    "overview": "Matko is a small time hustler, living by the Danube with his 17-year-old son Zare. After a failed business deal he owes money to the much more successful gangster Dadan. Dadan has a sister, Afrodita, that he desperately wants to see get married so they strike a deal: Zare is to marry her.",
    "release_date": "1998-06-01"
  },
  {
    "title": "The Batman",
    "vote_average": 7.7,
    "vote_count": 9032,
    "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    "release_date": "2022-03-01"
  },
  {
    "title": "The Traitor",
    "vote_average": 7.688,
    "vote_count": 1268,
    "poster_path": "/bjb1zKlyw85hYwDXzz2UM6XqjUU.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "Palermo, Sicily, 1980. Mafia member Tommaso Buscetta decides to move to Brazil with his family fleeing the constant war between the different clans of the criminal organization. But when, after living several misfortunes, he is forced to return to Italy, he makes a bold decision that will change his life and the destiny of Cosa Nostra forever.",
    "release_date": "2019-05-23"
  },
  {
    "title": "The Man from Nowhere",
    "vote_average": 7.686,
    "vote_count": 1196,
    "poster_path": "/ld19CFIo27t41JXSGZdaPMUGTxh.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "An ex-special agent is involved in a convoluted drug ring drama. He has to save a drug smuggler's innocent daughter from being the victim of her parents' fight.",
    "release_date": "2010-08-04"
  },
  {
    "title": "Fireworks",
    "vote_average": 7.683,
    "vote_count": 612,
    "poster_path": "/bWIo1nDJnSyGJvVt8bRw8PHBqo4.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Detective Nishi is relieved from a stakeout to visit his sick wife in hospital. He is informed that she is terminally ill, and is advised to take her home. During his visit, a suspect shoots one detective dead and leaves Nishi's partner, Horibe, paralyzed. Nishi leaves the police force to spend time with his wife at home, and must find a way to pay off his debts to the yakuza.",
    "release_date": "1997-10-30"
  },
  {
    "title": "Knockin' on Heaven's Door",
    "vote_average": 7.682,
    "vote_count": 455,
    "poster_path": "/dsY09zCxKDFjfV1oqXFJJpVrHdP.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Two young men, Martin and Rudi, both suffering from terminal cancer, get to know each other in a hospital room. They drown their desperation in tequila and decide to take one last trip to the sea. Drunk and still in pajamas they steal the first fancy car they find, a 60's Mercedes convertible. The car happens to belong to a bunch of gangsters, which immediately start to chase it, since it contains more than the pistol Martin finds in the glove box.",
    "release_date": "1997-02-20"
  },
  {
    "title": "Strangers on a Train",
    "vote_average": 7.681,
    "vote_count": 1551,
    "poster_path": "/ihC083U7ef56Ui4x0P0dobojrZ1.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "Two strangers meet on a train. They’ve never met before. Both of whom have someone they’d like to murder. So, they swap murders. A psychopath shares this concept with tennis star Guy Haines, whose wife refuses to get a divorce. He agrees, thinking it is a joke. But now his wife is dead, Haines finds himself a prime suspect and the man wants Guy to kill his father.",
    "release_date": "1951-06-27"
  },
  {
    "title": "The Gentlemen",
    "vote_average": 7.68,
    "vote_count": 5257,
    "poster_path": "/jtrhTYB7xSrJxR1vusu99nvnZ1g.jpg",
    "genre_ids": [
      28,
      80,
      35
    ],
    "overview": "American expat Mickey Pearson has built a highly profitable marijuana empire in London. When word gets out that he’s looking to cash out of the business forever it triggers plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
    "release_date": "2020-01-01"
  },
  {
    "title": "Sleuth",
    "vote_average": 7.675,
    "vote_count": 563,
    "poster_path": "/jAREYLUnYGwPjbQr0vs1s38QLkH.jpg",
    "genre_ids": [
      9648,
      53,
      80,
      35
    ],
    "overview": "A mystery novelist devises an insurance scam with his wife's lover – but things aren't exactly as they seem.",
    "release_date": "1972-12-10"
  },
  {
    "title": "The Killing",
    "vote_average": 7.672,
    "vote_count": 1400,
    "poster_path": "/A6VzUPcADZGYdGHlVdWvpMNDF5d.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "Career criminal Johnny Clay recruits a sharpshooter, a crooked police officer, a bartender and a betting teller named George, among others, for one last job before he goes straight and gets married. But when George tells his restless wife about the scheme to steal millions from the racetrack where he works, she hatches a plot of her own.",
    "release_date": "1956-06-06"
  },
  {
    "title": "Mississippi Burning",
    "vote_average": 7.667,
    "vote_count": 1513,
    "poster_path": "/otzHnhXba5XsE6Gozl3Gzks0z8L.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Two FBI agents investigating the murder of civil rights workers during the 60s seek to breach the conspiracy of silence in a small Southern town where segregation divides black and white. The younger agent trained in FBI school runs up against the small town ways of his partner, a former sheriff.",
    "release_date": "1988-12-08"
  },
  {
    "title": "Kind Hearts and Coronets",
    "vote_average": 7.663,
    "vote_count": 488,
    "poster_path": "/eBvpyRjD3DcCsWgdV6Y9oqPS7dO.jpg",
    "genre_ids": [
      35,
      18,
      80
    ],
    "overview": "When his mother eloped with an Italian opera singer, Louis Mazzini was cut off from her aristocratic family. After the family refuses to let her be buried in the family mausoleum, Louis avenges his mother's death by attempting to murder every family member who stands between himself and the family fortune. But when he finds himself torn between his longtime love and the widow of one of his victims, his plans go awry.",
    "release_date": "1949-06-21"
  },
  {
    "title": "The Big Heat",
    "vote_average": 7.66,
    "vote_count": 451,
    "poster_path": "/n1xdAX2g6PU3aqQXmZtY9gXvvEz.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "Tough cop Dave Bannion takes on a politically powerful crime syndicate.  Preserved by the Academy Film Archive in partnership with Sony Pictures Entertainment in 1997.",
    "release_date": "1953-10-14"
  },
  {
    "title": "Wrath of Man",
    "vote_average": 7.656,
    "vote_count": 4813,
    "poster_path": "/M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
    "genre_ids": [
      53,
      28,
      80
    ],
    "overview": "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
    "release_date": "2021-04-22"
  },
  {
    "title": "Primal Fear",
    "vote_average": 7.7,
    "vote_count": 3126,
    "poster_path": "/qJf2TzE8nRTFbFMPJNW6c8mI0KU.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "An arrogant, high-powered attorney takes on the case of a poor altar boy found running away from the scene of the grisly murder of the bishop who has taken him in. The case gets a lot more complex when the accused reveals that there may or may not have been a third person in the room.",
    "release_date": "1996-03-06"
  },
  {
    "title": "Andhadhun",
    "vote_average": 7.65,
    "vote_count": 450,
    "poster_path": "/dy3K6hNvwE05siGgiLJcEiwgpdO.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "overview": "A series of mysterious events changes the life of a blind pianist who now must report a crime that was actually never witnessed by him.",
    "release_date": "2018-10-05"
  },
  {
    "title": "White Heat",
    "vote_average": 7.65,
    "vote_count": 432,
    "poster_path": "/4ekAK25fz1FDzRUHuJs171uiVaI.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A psychopathic criminal with a mother complex makes a daring break from prison and then leads his old gang in a chemical plant payroll heist. After the heist, events take a crazy turn.",
    "release_date": "1949-09-02"
  },
  {
    "title": "12 Angry Men",
    "vote_average": 7.7,
    "vote_count": 304,
    "poster_path": "/whDdYx3lh1LHTN0VlPFt51fX29g.jpg",
    "genre_ids": [
      80,
      18,
      10770
    ],
    "overview": "During the trial of a man accused of his father's murder, a lone juror takes a stand against the guilty verdict handed down by the others as a result of their preconceptions and prejudices.",
    "release_date": "1997-08-17"
  },
  {
    "title": "In the Heat of the Night",
    "vote_average": 7.65,
    "vote_count": 961,
    "poster_path": "/fvqHTabYej3LwzKRRZCm6jV3g0O.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "African-American Philadelphia police detective Virgil Tibbs is arrested on suspicion of murder by Bill Gillespie, the racist police chief of tiny Sparta, Mississippi. After Tibbs proves not only his own innocence but that of another man, he joins forces with Gillespie to track down the real killer. Their investigation takes them through every social level of the town, with Tibbs making enemies as well as unlikely friends as he hunts for the truth.",
    "release_date": "1967-08-02"
  },
  {
    "title": "Victoria",
    "vote_average": 7.648,
    "vote_count": 1132,
    "poster_path": "/9P8QgfoMcFX7vp2Gj2cYFecHVRZ.jpg",
    "genre_ids": [
      80,
      53,
      10749
    ],
    "overview": "A young Spanish woman who has newly moved to Berlin finds her flirtation with a local guy turn potentially deadly as their night out with his friends reveals a dangerous secret.",
    "release_date": "2015-06-11"
  },
  {
    "title": "Lilya 4-ever",
    "vote_average": 7.646,
    "vote_count": 497,
    "poster_path": "/5i1uhvcdv2Iogx0Bb1znvUmkCvN.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Lilja lives in poverty and dreams of a better life. Her mother moves to the United States and abandons her to her aunt, who neglects her. Lilja hangs out with her friends, Natasha and Volodya, who is suicidal. Desperate for money, she starts working as a prostitute, and later meets Andrei. He offers her a good job in Sweden, but when Lilja arrives her life quickly enters a downward spiral.",
    "release_date": "2002-08-23"
  },
  {
    "title": "Kingsman: The Secret Service",
    "vote_average": 7.635,
    "vote_count": 15909,
    "poster_path": "/17i5YPTfHOjXoieArpATWGRhLj1.jpg",
    "genre_ids": [
      80,
      35,
      28,
      12
    ],
    "overview": "The story of a super-secret spy organization that recruits an unrefined but promising street kid into the agency's ultra-competitive training program just as a global threat emerges from a twisted tech genius.",
    "release_date": "2014-12-13"
  },
  {
    "title": "Sweet Smell of Success",
    "vote_average": 7.6,
    "vote_count": 440,
    "poster_path": "/akzvV8JasNrgEl5iAP9K6zPHGJe.jpg",
    "genre_ids": [
      18,
      80,
      10749
    ],
    "overview": "New York City newspaper writer J.J. Hunsecker holds considerable sway over public opinion with his Broadway column, but one thing that he can't control is his younger sister, Susan, who is in a relationship with aspiring jazz guitarist Steve Dallas. Hunsecker strongly disapproves of the romance and recruits publicist Sidney Falco to find a way to split the couple, no matter how ruthless the method.",
    "release_date": "1957-07-04"
  },
  {
    "title": "Arsenic and Old Lace",
    "vote_average": 7.634,
    "vote_count": 856,
    "poster_path": "/xG1GEEQGgExKl0WT5sRo1Arst5D.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Mortimer Brewster, a newspaper drama critic, playwright, and author known for his diatribes against marriage, suddenly falls in love and gets married;  but when he makes a quick trip home to tell his two maiden aunts, he finds out his aunts' hobby - killing lonely old men and burying them in the cellar!",
    "release_date": "1944-09-01"
  },
  {
    "title": "Blue Velvet",
    "vote_average": 7.631,
    "vote_count": 3050,
    "poster_path": "/7hlgzJXLgyECS1mk3LSN3E72l5N.jpg",
    "genre_ids": [
      80,
      9648,
      53,
      10749,
      18
    ],
    "overview": "The discovery of a severed human ear found in a field leads a young man on an investigation related to a beautiful, mysterious nightclub singer and a group of criminals who have kidnapped her child.",
    "release_date": "1986-09-19"
  },
  {
    "title": "Le Cercle Rouge",
    "vote_average": 7.626,
    "vote_count": 572,
    "poster_path": "/w56La43IJnGpLepgqfGCAZsbQPp.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "When French criminal Corey gets released from prison, he resolves to never return. He is quickly pulled back into the underworld, however, after a chance encounter with escaped murderer Vogel. Along with former policeman and current alcoholic Jansen, they plot an intricate jewel heist. All the while, quirky Police Commissioner Mattei, who was the one to lose custody of Vogel, is determined to find him.",
    "release_date": "1970-10-19"
  },
  {
    "title": "A Short Film About Killing",
    "vote_average": 7.6,
    "vote_count": 315,
    "poster_path": "/x8zenootZTTB1iEdUQA9dnEuLqv.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Jacek climbs into the taxi driven by Waldemar, tells him to drive to a remote location, then brutally strangles him, seemingly without motive.",
    "release_date": "1988-03-11"
  },
  {
    "title": "The Raid 2",
    "vote_average": 7.624,
    "vote_count": 2170,
    "poster_path": "/olA39iaXISiKEkACdELgr0ZRvIF.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "After fighting his way through an apartment building populated by an army of dangerous criminals and escaping with his life, SWAT team member Rama goes undercover, joining a powerful Indonesian crime syndicate to protect his family and uncover corrupt members of his own force.",
    "release_date": "2014-03-27"
  },
  {
    "title": "The Killer",
    "vote_average": 7.62,
    "vote_count": 701,
    "poster_path": "/8hTxlSqMAHBXAh1eB69ir0BXhzE.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "Mob assassin Jeffrey is no ordinary hired gun; the best in his business, he views his chosen profession as a calling rather than simply a job. So, when beautiful nightclub chanteuse Jennie is blinded in the crossfire of his most recent hit, Jeffrey chooses to retire after one last job to pay for his unintended victim's sight-restoring operation. But when Jeffrey is double-crossed, he reluctantly joins forces with a rogue policeman to make things right.",
    "release_date": "1989-03-24"
  },
  {
    "title": "Boyz n the Hood",
    "vote_average": 7.619,
    "vote_count": 1825,
    "poster_path": "/v4ox4aSCNT5vyLXl4Q71JiWwCXW.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Boyz n the Hood is the popular and successful film and social criticism from John Singleton about the conditions in South Central Los Angeles where teenagers are involved in gun fights and drug dealing on a daily basis.",
    "release_date": "1991-07-12"
  },
  {
    "title": "Brother",
    "vote_average": 7.616,
    "vote_count": 366,
    "poster_path": "/dxeVQdd227B367xQxvabkYTfz0b.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Danila goes to his successful brother, Victor, in Petersburg to start a new life. Unknown to Danila, Victor is a contract killer, but is in hiding after asking for too much money to assassinate a Chechen mob boss. To avoid exposure, Victor convinces Danila to kill the boss instead.",
    "release_date": "1997-12-12"
  },
  {
    "title": "The Irishman",
    "vote_average": 7.613,
    "vote_count": 6365,
    "poster_path": "/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg",
    "genre_ids": [
      80,
      18,
      36
    ],
    "overview": "Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chicago with the task of helping Jimmy Hoffa, a powerful union leader related to organized crime, with whom Frank will maintain a close friendship for nearly twenty years.",
    "release_date": "2019-11-01"
  },
  {
    "title": "Scarlet Street",
    "vote_average": 7.608,
    "vote_count": 338,
    "poster_path": "/eGEDor1BWSQGaLtOntPHUSqNzRC.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Cashier and part-time starving artist Christopher Cross is absolutely smitten with the beautiful Kitty March. Kitty plays along, but she's really only interested in Johnny, a two-bit crook. When Kitty and Johnny find out that art dealers are interested in Chris's work, they con him into letting Kitty take credit for the paintings. Cross allows it because he is in love with Kitty, but his love will only let her get away with so much.",
    "release_date": "1945-12-25"
  },
  {
    "title": "Elevator to the Gallows",
    "vote_average": 7.608,
    "vote_count": 548,
    "poster_path": "/dLbf8LtbLQFM7KUaVgwkfKIPqXu.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A self-assured businessman murders his employer, the husband of his mistress, which unintentionally provokes an ill-fated chain of events.",
    "release_date": "1958-01-29"
  },
  {
    "title": "Mildred Pierce",
    "vote_average": 7.6,
    "vote_count": 361,
    "poster_path": "/iSXi0xvPUPwEI2xxWZrcKJXpUYc.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "A hard-working mother inches towards disaster as she divorces her husband and starts a successful restaurant business to support her spoiled daughter.",
    "release_date": "1945-10-20"
  },
  {
    "title": "Les Misérables",
    "vote_average": 7.6,
    "vote_count": 1419,
    "poster_path": "/pUc2ZaIxvPHROjT0Trd6tpSnTme.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Inspired by the 2005 riots in Paris, Stéphane, a recent transplant to the impoverished suburb of Montfermeil, joins the local anti-crime squad. Working alongside his unscrupulous colleagues Chris and Gwada, Stéphane struggles to maintain order amidst the mounting tensions between local gangs. When an arrest turns unexpectedly violent, the three officers must reckon with the aftermath and keep the neighborhood from spiraling out of control.",
    "release_date": "2019-11-14"
  },
  {
    "title": "The Big Sleep",
    "vote_average": 7.6,
    "vote_count": 950,
    "poster_path": "/lraHo9D8c0YWfxsKqT5P5sVqMKN.jpg",
    "genre_ids": [
      80,
      9648,
      10749,
      53,
      18
    ],
    "overview": "Private Investigator Philip Marlowe is hired by wealthy General Sternwood regarding a matter involving his youngest daughter Carmen. Before the complex case is over, Marlowe sees murder, blackmail, deception, and what might be love.",
    "release_date": "1946-08-23"
  },
  {
    "title": "Changeling",
    "vote_average": 7.599,
    "vote_count": 3937,
    "poster_path": "/iECXjFF8JkTnNJvik14WbPpc9s9.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "Christine Collins is overjoyed when her kidnapped son is brought back home. But when Christine suspects that the boy returned to her isn't her child, the police captain has her committed to an asylum.",
    "release_date": "2008-10-24"
  },
  {
    "title": "Sin Nombre",
    "vote_average": 7.597,
    "vote_count": 635,
    "poster_path": "/wncX4fshBUDvB2CaW3AYG7i3nUd.jpg",
    "genre_ids": [
      18,
      28,
      53,
      80
    ],
    "overview": "Sayra, a Honduran teen, hungers for a better life. Her chance for one comes when she is reunited with her long-estranged father, who intends to emigrate to Mexico and then enter the United States. Sayra's life collides with a pair of Mexican gangmembers who have boarded the same American-bound train.",
    "release_date": "2009-03-20"
  },
  {
    "title": "Sleepers",
    "vote_average": 7.595,
    "vote_count": 3304,
    "poster_path": "/yUpiEk2EojS9ZEXb3nIQonQCYYF.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Two gangsters seek revenge on the state jail worker who during their stay at a youth prison sexually abused them. A sensational court hearing takes place to charge him for the crimes.",
    "release_date": "1996-10-18"
  },
  {
    "title": "Out of the Past",
    "vote_average": 7.6,
    "vote_count": 536,
    "poster_path": "/xkP7PHExdCDzcBemGaiZCk6oCtZ.jpg",
    "genre_ids": [
      80,
      10749,
      53
    ],
    "overview": "Jeff Bailey seems to be a mundane gas station owner in remote Bridgeport, California. He is dating local girl Ann Miller and lives a quiet life. But Jeff has a secret past, and when a mysterious stranger arrives in town, Jeff is forced to return to the dark world he had tried to escape.",
    "release_date": "1947-11-25"
  },
  {
    "title": "A Prophet",
    "vote_average": 7.58,
    "vote_count": 1415,
    "poster_path": "/x9Jb8kewBHPzjTtgCQvoQoDsy4d.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Sentenced to six years in prison, Malik El Djebena is alone in the world and can neither read nor write. On his arrival at the prison, he seems younger and more brittle than the others detained there. At once he falls under the sway of a group of Corsicans who enforce their rule in the prison. As the 'missions' go by, he toughens himself and wins the confidence of the Corsican group.",
    "release_date": "2009-08-26"
  },
  {
    "title": "American Gangster",
    "vote_average": 7.578,
    "vote_count": 5045,
    "poster_path": "/sX9idXDqRUxE5ffww3n3RV5gL55.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Following the death of his employer and mentor, Bumpy Johnson, Frank Lucas establishes himself as the number one importer of heroin in the Harlem district of Manhattan. He does so by buying heroin directly from the source in South East Asia and he comes up with a unique way of importing the drugs into the United States. Partly based on a true story.",
    "release_date": "2007-11-02"
  },
  {
    "title": "Thelma & Louise",
    "vote_average": 7.6,
    "vote_count": 3134,
    "poster_path": "/vbRAGLzbC75QfiKD1lKjmnQGuph.jpg",
    "genre_ids": [
      18,
      53,
      80,
      12
    ],
    "overview": "Whilst on a short weekend getaway, Louise shoots a man who had tried to rape Thelma. Due to the incriminating circumstances, they make a run for it and thus a cross country chase ensues for the two fugitives. Along the way, both women rediscover the strength of their friendship and surprising aspects of their personalities and self-strengths in the trying times.",
    "release_date": "1991-05-24"
  },
  {
    "title": "Drive",
    "vote_average": 7.574,
    "vote_count": 11940,
    "poster_path": "/602vevIURmpDfzbnv5Ubi6wIkQm.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "Driver is a skilled Hollywood stuntman who moonlights as a getaway driver for criminals. Though he projects an icy exterior, lately he's been warming up to a pretty neighbor named Irene and her young son, Benicio. When Irene's husband gets out of jail, he enlists Driver's help in a million-dollar heist. The job goes horribly wrong, and Driver must risk his life to protect Irene and Benicio from the vengeful masterminds behind the robbery.",
    "release_date": "2011-09-15"
  },
  {
    "title": "Purple Noon",
    "vote_average": 7.6,
    "vote_count": 413,
    "poster_path": "/asTqniOVviEV8agTTeMA1Sy72Og.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "overview": "Tom Ripley is a talented mimic, moocher, forger and all-around criminal improviser; but there's more to Tom Ripley than even he can guess.",
    "release_date": "1960-03-10"
  },
  {
    "title": "Dogman",
    "vote_average": 7.563,
    "vote_count": 2075,
    "poster_path": "/eaZq1G8sJHv9f9a5IzioQlS3REX.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Marcello, a small and gentle dog groomer, finds himself involved in a dangerous relationship of subjugation with Simone, a former violent boxer who terrorizes the entire neighborhood. In an effort to reaffirm his dignity, Marcello will submit to an unexpected act of vengeance.",
    "release_date": "2018-05-17"
  },
  {
    "title": "Band of Outsiders",
    "vote_average": 7.562,
    "vote_count": 520,
    "poster_path": "/9oqyj79xmcypxLajJdefOtrYx64.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "Cinephile slackers Franz and Arthur spend their days mimicking the antiheroes of Hollywood noirs and Westerns while pursuing the lovely Odile. The misfit trio upends convention at every turn, be it through choreographed dances in cafés or frolicsome romps through the Louvre. Eventually, their romantic view of outlaws pushes them to plan their own heist, but their inexperience may send them out in a blaze of glory -- which could be just what they want.",
    "release_date": "1964-08-05"
  },
  {
    "title": "Lady Snowblood",
    "vote_average": 7.561,
    "vote_count": 327,
    "poster_path": "/wkcbaqCoYEXDUnSQ6NTnB2C7H05.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "Yuki's family is nearly wiped out before she is born due to the machinations of a band of criminals. These criminals kidnap and brutalize her mother but leave her alive. Later her mother ends up in prison with only revenge to keep her alive. She creates an instrument for this revenge by purposefully getting pregnant. Yuki never knows the love of a family but only killing and revenge.",
    "release_date": "1973-12-01"
  },
  {
    "title": "Breathless",
    "vote_average": 7.556,
    "vote_count": 1675,
    "poster_path": "/9Wx0Wdn2EOqeCZU4SP6tlS3LOml.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A small-time thief steals a car and impulsively murders a motorcycle policeman. Wanted by the authorities, he attempts to persuade a girl to run away to Italy with him.",
    "release_date": "1960-03-16"
  },
  {
    "title": "Hot Fuzz",
    "vote_average": 7.552,
    "vote_count": 7089,
    "poster_path": "/nC1RDiesGPywq616vCahDyLwWjF.jpg",
    "genre_ids": [
      80,
      28,
      35
    ],
    "overview": "Former London constable Nicholas Angel finds it difficult to adapt to his new assignment in the sleepy British village of Sandford. Not only does he miss the excitement of the big city, but he also has a well-meaning oaf for a partner. However, when a series of grisly accidents rocks Sandford, Angel smells something rotten in the idyllic village.",
    "release_date": "2007-02-14"
  },
  {
    "title": "Hard Boiled",
    "vote_average": 7.549,
    "vote_count": 717,
    "poster_path": "/wuljacjo7DCzUzDianeZZwPb6to.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "A cop who loses his partner in a shoot-out with gun smugglers goes on a mission to catch them. In order to get closer to the leaders of the ring he joins forces with an undercover cop who's working as a gangster hitman. They use all means of excessive force to find them.",
    "release_date": "1992-04-16"
  },
  {
    "title": "In a Lonely Place",
    "vote_average": 7.5,
    "vote_count": 512,
    "poster_path": "/mR72XsO7EQu3uH8TeqPxMd9V8mW.jpg",
    "genre_ids": [
      18,
      10749,
      9648,
      80,
      53
    ],
    "overview": "An aspiring actress begins to suspect that her temperamental and mentally impaired boyfriend is a murderer.",
    "release_date": "1950-05-17"
  },
  {
    "title": "The Man Who Wasn't There",
    "vote_average": 7.54,
    "vote_count": 1470,
    "poster_path": "/gQHBLxJmakVO1h7VnTHwnVplXZs.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "A tale of murder, crime and punishment set in the summer of 1949. Ed Crane, a barber in a small California town, is dissatisfied with his life, but his wife Doris' infidelity and a mysterious opportunity presents him with a chance to change it.",
    "release_date": "2001-10-26"
  },
  {
    "title": "Serpico",
    "vote_average": 7.539,
    "vote_count": 1770,
    "poster_path": "/c7fENg2o6SBBtL3z4V9xTAnEoDJ.jpg",
    "genre_ids": [
      80,
      18,
      36
    ],
    "overview": "Frank Serpico is an idealistic New York City cop who refuses to take bribes, unlike the rest of the force. His actions get Frank shunned by the other officers, and often placed in dangerous situations by his partners. When his superiors ignore Frank's accusations of corruption, he decides to go public with the allegations. Although this causes the Knapp Commission to investigate his claims, Frank has also placed a target on himself.",
    "release_date": "1973-12-18"
  },
  {
    "title": "Donnie Brasco",
    "vote_average": 7.538,
    "vote_count": 4145,
    "poster_path": "/xtKLvpOfARi1XVm8u2FTdhY5Piq.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "An FBI undercover agent infiltrates the mob and identifies more with the mafia life at the expense of his regular one.",
    "release_date": "1997-02-27"
  },
  {
    "title": "The French Connection",
    "vote_average": 7.537,
    "vote_count": 1687,
    "poster_path": "/pH4saPwMjhnVGwmSH6RkMaHrt3s.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Tough narcotics detective 'Popeye' Doyle is in hot pursuit of a suave French drug dealer who may be the key to a huge heroin-smuggling operation.",
    "release_date": "1971-10-09"
  },
  {
    "title": "True Romance",
    "vote_average": 7.536,
    "vote_count": 2519,
    "poster_path": "/39lXk6ud6KiJgGbbWI2PUKS7y2.jpg",
    "genre_ids": [
      28,
      80,
      10749
    ],
    "overview": "Clarence marries hooker Alabama, steals cocaine from her pimp, and tries to sell it in Hollywood, while the owners of the coke try to reclaim it.",
    "release_date": "1993-09-09"
  },
  {
    "title": "Enola Holmes 2",
    "vote_average": 7.531,
    "vote_count": 2276,
    "poster_path": "/tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg",
    "genre_ids": [
      12,
      9648,
      80
    ],
    "overview": "Now a detective-for-hire like her infamous brother, Enola Holmes takes on her first official case to find a missing girl, as the sparks of a dangerous conspiracy ignite a mystery that requires the help of friends — and Sherlock himself — to unravel.",
    "release_date": "2022-11-04"
  },
  {
    "title": "The Book of Henry",
    "vote_average": 7.53,
    "vote_count": 1235,
    "poster_path": "/suLFg4UjvM5BoDipg2Wu3gZ802T.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "Susan, a single mother of two, works as a waitress in a small town. Her son, Henry, is an 11-year-old genius who not only manages the family finances but acts as emotional support for his mother and younger brother. When Henry discovers that the girl next door has a terrible secret, he implores Susan to take matters into her own hands.",
    "release_date": "2017-06-16"
  },
  {
    "title": "Menace II Society",
    "vote_average": 7.5,
    "vote_count": 709,
    "poster_path": "/nS7yqmSVeNoH22VXj69JoFCxW1h.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A young street hustler attempts to escape the rigors and temptations of the ghetto in a quest for a better life.",
    "release_date": "1993-05-26"
  },
  {
    "title": "Badlands",
    "vote_average": 7.5,
    "vote_count": 1086,
    "poster_path": "/eJiVU3sTv9iYbytBzdaPijXsyIk.jpg",
    "genre_ids": [
      80,
      18,
      10749
    ],
    "overview": "An impressionable teenage girl from a dead-end town and her older greaser boyfriend embark on a killing spree in the South Dakota badlands.",
    "release_date": "1974-01-05"
  },
  {
    "title": "The Girl with the Dragon Tattoo",
    "vote_average": 7.527,
    "vote_count": 2784,
    "poster_path": "/r2pFUXKK20KD9RE3yybpQsNynRE.jpg",
    "genre_ids": [
      18,
      53,
      80,
      9648
    ],
    "overview": "Swedish thriller based on Stieg Larsson's novel about a male journalist and a young female hacker. In the opening of the movie, Mikael Blomkvist, a middle-aged publisher for the magazine Millennium, loses a libel case brought by corrupt Swedish industrialist Hans-Erik Wennerström. Nevertheless, he is hired by Henrik Vanger in order to solve a cold case, the disappearance of Vanger's niece",
    "release_date": "2009-02-27"
  },
  {
    "title": "The Conversation",
    "vote_average": 7.524,
    "vote_count": 1560,
    "poster_path": "/rI5EmMjfM2lOMzIPhnhD8mp0lVp.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "Surveillance expert Harry Caul is hired by a mysterious client's brusque aide to tail a young couple. Tracking the pair through San Francisco's Union Square, Caul and his associate Stan manage to record a cryptic conversation between them. Tormented by memories of a previous case that ended badly, Caul becomes obsessed with the resulting tape, trying to determine if the couple is in danger.",
    "release_date": "1974-04-07"
  },
  {
    "title": "Killers of the Flower Moon",
    "vote_average": 7.528,
    "vote_count": 1838,
    "poster_path": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
    "genre_ids": [
      80,
      18,
      36
    ],
    "overview": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
    "release_date": "2023-10-18"
  },
  {
    "title": "A Pure Formality",
    "vote_average": 7.52,
    "vote_count": 321,
    "poster_path": "/yBIc2Mc0Ds5HiYD1YOXGD3xTTUI.jpg",
    "genre_ids": [
      9648,
      53,
      80,
      18
    ],
    "overview": "Onoff is a famous writer, now a recluse. The Inspector is suspicious when Onoff is brought into the station one night, disoriented and suffering a kind of amnesia. In an isolated, rural police station, the Inspector tries to establish the events surrounding a killing, to reach a startling resolution.",
    "release_date": "1994-05-15"
  },
  {
    "title": "Zodiac",
    "vote_average": 7.52,
    "vote_count": 9822,
    "poster_path": "/6YmeO4pB7XTh8P8F960O1uA14JO.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "A cartoonist teams up with an ace reporter and a law enforcement officer to track down an elusive serial killer.",
    "release_date": "2007-03-02"
  },
  {
    "title": "Who Framed Roger Rabbit",
    "vote_average": 7.5,
    "vote_count": 5314,
    "poster_path": "/lYfRc57Kx9VgLZ48iulu0HKnM15.jpg",
    "genre_ids": [
      14,
      16,
      35,
      80
    ],
    "overview": "'Toon star Roger is worried that his wife Jessica is playing pattycake with someone else, so the studio hires detective Eddie Valiant to snoop on her. But the stakes are quickly raised when Marvin Acme is found dead and Roger is the prime suspect.",
    "release_date": "1988-06-21"
  },
  {
    "title": "BlacKkKlansman",
    "vote_average": 7.516,
    "vote_count": 7168,
    "poster_path": "/8jxqAvSDoneSKRczaK8v9X5gqBp.jpg",
    "genre_ids": [
      35,
      80,
      18,
      36
    ],
    "overview": "Colorado Springs, late 1970s. Ron Stallworth, an African American police officer, and Flip Zimmerman, his Jewish colleague, run an undercover operation to infiltrate the Ku Klux Klan.",
    "release_date": "2018-08-09"
  },
  {
    "title": "Police Story",
    "vote_average": 7.515,
    "vote_count": 794,
    "poster_path": "/1eFB0Iy1TMU4VO5hMcoCE064JAT.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Officer Chan Ka Kui manages to put a major Hong Kong drug dealer behind the bars practically alone, after a shooting and an impressive chase inside a slum. Now, he must protect the boss' secretary, Selina, who will testify against the gangster in court.",
    "release_date": "1985-12-14"
  },
  {
    "title": "Midnight Express",
    "vote_average": 7.513,
    "vote_count": 1582,
    "poster_path": "/rVW4FWGVtwlqGkNDlMCFgf4tZDj.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Billy Hayes is caught attempting to smuggle drugs out of Turkey. The Turkish courts decide to make an example of him, sentencing him to more than 30 years in prison. Hayes has two opportunities for release: the appeals made by his lawyer, his family, and the American government, or the \"Midnight Express\".",
    "release_date": "1978-08-31"
  },
  {
    "title": "The Insult",
    "vote_average": 7.513,
    "vote_count": 439,
    "poster_path": "/w9mlrckg3ZU2rsAlKUbLD1CgBTk.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "After an emotional exchange between a Lebanese Christian and a Palestinian refugee escalates, the men end up in a court case that gets national attention.",
    "release_date": "2017-09-14"
  },
  {
    "title": "Lupin the Third: The Castle of Cagliostro",
    "vote_average": 7.5,
    "vote_count": 932,
    "poster_path": "/vRWNAjvhY3vIOirWONi50y9bFDW.jpg",
    "genre_ids": [
      10751,
      16,
      12,
      35,
      80
    ],
    "overview": "After a successful robbery leaves famed thief Lupin the Third and his partner Jigen with nothing but a large amount of expertly crafted counterfeit bills, he decides to track down the forgers responsible—and steal any other treasures he may find in the Castle of Cagliostro, including the 'damsel in distress' he finds imprisoned there.",
    "release_date": "1979-12-15"
  },
  {
    "title": "The Asphalt Jungle",
    "vote_average": 7.5,
    "vote_count": 437,
    "poster_path": "/gECEOjjLjuHi9DDHeDLj28SXLHE.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Recently paroled from prison, legendary burglar \"Doc\" Riedenschneider, with funding from Alonzo Emmerich, a crooked lawyer, gathers a small group of veteran criminals together in the Midwest for a big jewel heist.",
    "release_date": "1950-05-12"
  },
  {
    "title": "The Thin Man",
    "vote_average": 7.501,
    "vote_count": 419,
    "poster_path": "/6cL89ok9t8xEKboOjOVga2W66jj.jpg",
    "genre_ids": [
      35,
      80,
      9648
    ],
    "overview": "A husband and wife detective team takes on the search for a missing inventor and almost get killed for their efforts.",
    "release_date": "1934-05-25"
  },
  {
    "title": "Once Upon a Time in Anatolia",
    "vote_average": 7.497,
    "vote_count": 432,
    "poster_path": "/jKnV5JDArGn6UyrI9HiYzs7Zykn.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "In the rural area around the Anatolian town of Keskin, the local prosecutor, police commissar, and doctor lead a search for a victim of a murder to whom a suspect named Kenan and his mentally challenged brother confessed. However, the search is proving more difficult than expected as Kenan is fuzzy as to the body's exact location. As the group continues looking, its members can't help but chat among themselves about both trivia and their deepest concerns in an investigation that is proving more trying than any of them expected.",
    "release_date": "2011-09-23"
  },
  {
    "title": "Training Day",
    "vote_average": 7.494,
    "vote_count": 5507,
    "poster_path": "/bUeiwBQdupBLQthMCHKV7zv56uv.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "On his first day on the job as a narcotics officer, a rookie cop works with a rogue detective who isn't what he appears.",
    "release_date": "2001-10-05"
  },
  {
    "title": "Gaslight",
    "vote_average": 7.5,
    "vote_count": 437,
    "poster_path": "/gXKszCl5Q1KrgWRWpPcqn94CP58.jpg",
    "genre_ids": [
      53,
      18,
      9648,
      80
    ],
    "overview": "A newlywed fears she's going mad when strange things start happening at the family mansion.",
    "release_date": "1944-05-04"
  },
  {
    "title": "In Bruges",
    "vote_average": 7.484,
    "vote_count": 4749,
    "poster_path": "/jMiBBqk72VRo1Y39x2ZbbenEU3a.jpg",
    "genre_ids": [
      35,
      18,
      80
    ],
    "overview": "Ray and Ken, two hit men, are in Bruges, Belgium, waiting for their next mission. While they are there they have time to think and discuss their previous assignment. When the mission is revealed to Ken, it is not what he expected.",
    "release_date": "2008-02-08"
  },
  {
    "title": "Bonnie and Clyde",
    "vote_average": 7.482,
    "vote_count": 1484,
    "poster_path": "/sCSQFK9kMsprT4jgWqgw82dT6WI.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "In the 1930s, bored waitress Bonnie Parker falls in love with an ex-con named Clyde Barrow and together they start a violent crime spree through the country, stealing cars and robbing banks.",
    "release_date": "1967-08-14"
  },
  {
    "title": "Batman: Mask of the Phantasm",
    "vote_average": 7.48,
    "vote_count": 994,
    "poster_path": "/l4jaQjkgznu2Rz05X18f24UjPNW.jpg",
    "genre_ids": [
      28,
      16,
      80,
      9648,
      18
    ],
    "overview": "When a powerful criminal, who is connected to Bruce Wayne's ex-girlfriend, blames the Dark Knight for killing a crime lord, Batman decides to fight against him.",
    "release_date": "1993-12-25"
  },
  {
    "title": "Cold Eyes",
    "vote_average": 7.5,
    "vote_count": 312,
    "poster_path": "/77Srq9bAJkB1RE1GBAyBA9Y6ivN.jpg",
    "genre_ids": [
      80,
      28,
      53
    ],
    "overview": "Ha Yoon-ju becomes the newest member of a unit within the Korean Police Forces Special Crime Department that specializes in surveillance activities on high-profile criminals. She teams up with Hwang Sang-jun, the veteran leader of the unit, and tries to track down James who is the cold-hearted leader of an armed criminal organization.",
    "release_date": "2013-07-03"
  },
  {
    "title": "Sonatine",
    "vote_average": 7.479,
    "vote_count": 576,
    "poster_path": "/mX9E4fEuG17L2e7bZmhBc0XdRbw.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Murakawa, an aging Tokyo yakuza tiring of gangster life, is sent by his boss to Okinawa along with a few of his henchmen to help end a gang war, supposedly as mediators between two warring clans. He finds that the dispute between the clans is insignificant and whilst wondering why he was sent to Okinawa at all, his group is attacked in an ambush. The survivors flee and make a decision to lay low at the beach while they await further instructions.",
    "release_date": "1993-04-10"
  },
  {
    "title": "Batman: The Long Halloween, Part One",
    "vote_average": 7.478,
    "vote_count": 565,
    "poster_path": "/sR7gppb0YGjwLvE6Vnj6wYv5MnW.jpg",
    "genre_ids": [
      16,
      9648,
      28,
      80
    ],
    "overview": "Following a brutal series of murders taking place on Halloween, Thanksgiving, and Christmas, Gotham City's young vigilante known as the Batman sets out to pursue the mysterious serial killer alongside police officer James Gordon and district attorney Harvey Dent.",
    "release_date": "2021-06-21"
  },
  {
    "title": "This Is England",
    "vote_average": 7.475,
    "vote_count": 1163,
    "poster_path": "/zzbVtj7qSVLig1sEgGDXJDPhaXF.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A story about a troubled boy growing up in England, set in 1983. He comes across a few skinheads on his way home from school, after a fight. They become his new best friends, even like family. Based on experiences of director Shane Meadows.",
    "release_date": "2006-09-12"
  },
  {
    "title": "A Bittersweet Life",
    "vote_average": 7.472,
    "vote_count": 792,
    "poster_path": "/iqUGAIQqHMMscatykpR6hVBxezA.jpg",
    "genre_ids": [
      28,
      18,
      80
    ],
    "overview": "Kim Sun-woo is an enforcer and manager for a hotel owned by a cold, calculative crime boss, Kang who assigns Sun-woo to a simple errand while he is away on a business trip; to shadow his young mistress, Hee-soo, for fear that she may be cheating on him with a younger man with the mandate that he must kill them both if he discovers their affair.",
    "release_date": "2005-04-01"
  },
  {
    "title": "Lucky Number Slevin",
    "vote_average": 7.47,
    "vote_count": 3823,
    "poster_path": "/x21s3p5wPww534nYj1cWakTcqz4.jpg",
    "genre_ids": [
      18,
      53,
      80,
      9648
    ],
    "overview": "Slevin is mistakenly put in the middle of a personal war between the city’s biggest criminal bosses. Under constant watch, Slevin must try not to get killed by an infamous assassin and come up with an idea of how to get out of his current dilemma.",
    "release_date": "2006-02-24"
  },
  {
    "title": "The Man Who Copied",
    "vote_average": 7.47,
    "vote_count": 322,
    "poster_path": "/8si8hwcxLiqa9M3zUGuvgxNQNwC.jpg",
    "genre_ids": [
      35,
      18,
      10749,
      80
    ],
    "overview": "André, 19, lives in Porto Alegre, Brazil, and works as a photocopier operator. He likes to see his neighbor Sílvia with a pair of binoculars. She works selling clothes. Becoming attracted to her, he tries to get nearer, and goes to her shop to buy something, but finds out that he can't afford it. So he puts the photocopier to other uses, and begins to envisage fishy schemes to earn some money.",
    "release_date": "2003-06-13"
  },
  {
    "title": "How to Steal a Million",
    "vote_average": 7.47,
    "vote_count": 542,
    "poster_path": "/xaf3pwmITJvfz9Ab8DiGM8OOtBC.jpg",
    "genre_ids": [
      35,
      80,
      10749
    ],
    "overview": "A woman must steal a statue from a Paris museum to help conceal her father's art forgeries.",
    "release_date": "1966-07-13"
  },
  {
    "title": "Key Largo",
    "vote_average": 7.469,
    "vote_count": 490,
    "poster_path": "/9ZhQ9iMUtck9DvKm7mfB2332fRr.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "A hurricane swells outside, but it's nothing compared to the storm within the hotel at Key Largo. There, sadistic mobster Johnny Rocco holes up - and holds at gunpoint hotel owner James Temple, his widowed daughter-in-law Nora, and ex-GI Frank McCloud.",
    "release_date": "1948-07-16"
  },
  {
    "title": "A Perfect World",
    "vote_average": 7.5,
    "vote_count": 1521,
    "poster_path": "/1II9kMjOuho3pnEvxkpx7e3ozOO.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A kidnapped boy strikes up a friendship with his captor: an escaped convict on the run from the law, headed by an honorable U.S. Marshal.",
    "release_date": "1993-11-24"
  },
  {
    "title": "Dirty Harry",
    "vote_average": 7.461,
    "vote_count": 2268,
    "poster_path": "/UHxxkYe9tRdiPu0JFgcEL5hmQ4.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "When a madman dubbed 'Scorpio' terrorizes San Francisco, hard-nosed cop, Harry Callahan – famous for his take-no-prisoners approach to law enforcement – is tasked with hunting down the psychopath. Harry eventually collars Scorpio in the process of rescuing a kidnap victim, only to see him walk on technicalities. Now, the maverick detective is determined to nail the maniac himself.",
    "release_date": "1971-12-22"
  },
  {
    "title": "In Cold Blood",
    "vote_average": 7.458,
    "vote_count": 334,
    "poster_path": "/aFbLcPT3DXMyUywvqBxNbE1R8Jp.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "After a botched robbery results in the brutal murder of a rural family, two drifters elude police, in the end coming to terms with their own mortality and the repercussions of their vile atrocity.",
    "release_date": "1967-12-15"
  },
  {
    "title": "Scarface",
    "vote_average": 7.5,
    "vote_count": 549,
    "poster_path": "/y4E5oRiHMTFkEB12IIcpbKbKzDW.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "In 1920s Chicago, Italian immigrant and notorious thug, Antonio \"Tony\" Camonte, shoots his way to the top of the mobs while trying to protect his sister from the criminal life.",
    "release_date": "1932-04-09"
  },
  {
    "title": "The Unforgivable",
    "vote_average": 7.458,
    "vote_count": 1698,
    "poster_path": "/1b3dNFDuE7i05TJlXrIC571yR01.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A woman is released from prison after serving a sentence for a violent crime and re-enters a society that refuses to forgive her past.",
    "release_date": "2021-11-24"
  },
  {
    "title": "New World",
    "vote_average": 7.456,
    "vote_count": 409,
    "poster_path": "/5Ai3BMJlDGOlZXbcDv3vnOM1CSp.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "An undercover cop has his loyalties tested when the boss of the corporate gang he's spent years infiltrating dies.",
    "release_date": "2013-02-21"
  },
  {
    "title": "Adam's Apples",
    "vote_average": 7.454,
    "vote_count": 640,
    "poster_path": "/e27WQTJ6TP7y4OIUQcWzXnZzxju.jpg",
    "genre_ids": [
      18,
      35,
      80
    ],
    "overview": "A neo-nazi sentenced to community service at a church clashes with the blindly devotional priest.",
    "release_date": "2005-04-15"
  },
  {
    "title": "Miller's Crossing",
    "vote_average": 7.454,
    "vote_count": 1526,
    "poster_path": "/ab3pnsTKp3BgcAFy0FgWBFBg9FL.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "Set in 1929, a political boss and his advisor have a parting of the ways when they both fall for the same woman.",
    "release_date": "1990-09-21"
  },
  {
    "title": "Miss Sloane",
    "vote_average": 7.451,
    "vote_count": 1669,
    "poster_path": "/ptfvQlqe2xJiMSewSj52qAVq5z0.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "An ambitious lobbyist faces off against the powerful gun lobby in an attempt to pass gun control legislation.",
    "release_date": "2016-11-25"
  },
  {
    "title": "Promising Young Woman",
    "vote_average": 7.452,
    "vote_count": 2910,
    "poster_path": "/73QoFJFmUrJfDG2EynFjNc5gJxk.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "A young woman, traumatized by a tragic event in her past, seeks out vengeance against those who crossed her path.",
    "release_date": "2020-12-13"
  },
  {
    "title": "Sin City",
    "vote_average": 7.45,
    "vote_count": 7684,
    "poster_path": "/i66G50wATMmPrvpP95f0XP6ZdVS.jpg",
    "genre_ids": [
      53,
      28,
      80
    ],
    "overview": "Welcome to Sin City. This town beckons to the tough, the corrupt, the brokenhearted. Some call it dark… Hard-boiled. Then there are those who call it home — Crooked cops, sexy dames, desperate vigilantes. Some are seeking revenge, others lust after redemption, and then there are those hoping for a little of both. A universe of unlikely and reluctant heroes still trying to do the right thing in a city that refuses to care.",
    "release_date": "2005-04-01"
  },
  {
    "title": "Baby Driver",
    "vote_average": 7.449,
    "vote_count": 14872,
    "poster_path": "/rmnQ9jKW72bHu8uKlMjPIb2VLMI.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
    "release_date": "2017-06-28"
  },
  {
    "title": "John Wick: Chapter 3 - Parabellum",
    "vote_average": 7.446,
    "vote_count": 9967,
    "poster_path": "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
    "release_date": "2019-05-15"
  },
  {
    "title": "Batman: The Long Halloween, Part Two",
    "vote_average": 7.444,
    "vote_count": 466,
    "poster_path": "/f46QMSo2wAVY1ywrNc9yZv0rkNy.jpg",
    "genre_ids": [
      16,
      9648,
      28,
      80
    ],
    "overview": "As Gotham City's young vigilante, the Batman, struggles to pursue a brutal serial killer, district attorney Harvey Dent gets caught in a feud involving the criminal family of the Falcones.",
    "release_date": "2021-07-26"
  },
  {
    "title": "A Better Tomorrow",
    "vote_average": 7.4,
    "vote_count": 467,
    "poster_path": "/3LaUyoLADXqndKaX7ZjGYrWCedt.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "A reforming ex-gangster tries to reconcile with his estranged policeman brother, but the ties to his former gang are difficult to break.",
    "release_date": "1986-08-02"
  },
  {
    "title": "The Long Goodbye",
    "vote_average": 7.433,
    "vote_count": 554,
    "poster_path": "/oBhUK54yBJ0aH6u9zCzSV5iV7OP.jpg",
    "genre_ids": [
      9648,
      80,
      35,
      53
    ],
    "overview": "In 1970s Hollywood, Detective Philip Marlowe tries to help a friend who is accused of murdering his wife.",
    "release_date": "1973-03-07"
  },
  {
    "title": "Boys Don't Cry",
    "vote_average": 7.436,
    "vote_count": 1228,
    "poster_path": "/nKXTgbruSrezC1tAeKB6Ri7cGkK.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "A young transgender man explores his gender identity and searches for love in rural Nebraska.",
    "release_date": "1999-09-02"
  },
  {
    "title": "Ocean's Eleven",
    "vote_average": 7.434,
    "vote_count": 10987,
    "poster_path": "/hQQCdZrsHtZyR6NbKH2YyCqd2fR.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "Less than 24 hours into his parole, charismatic thief Danny Ocean is already rolling out his next plan: In one night, Danny's hand-picked crew of specialists will attempt to steal more than $150 million from three Las Vegas casinos. But to score the cash, Danny risks his chances of reconciling with ex-wife, Tess.",
    "release_date": "2001-12-07"
  },
  {
    "title": "El Angel",
    "vote_average": 7.431,
    "vote_count": 520,
    "poster_path": "/iYrcnrxv80L9JbV9YfVv45VpNM2.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Buenos Aires, Argentina, 1971. Carlos Robledo Puch is a 19-year-old boy with an angelic face, but a vocational thief as well, who acts ruthlessly, without remorse. When he meets Ramón, they follow together a dark path of crime and death.",
    "release_date": "2018-08-09"
  },
  {
    "title": "Wind River",
    "vote_average": 7.431,
    "vote_count": 4864,
    "poster_path": "/pySivdR845Hom4u4T2WNkJxe6Ad.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "An FBI agent teams with the town's veteran game tracker to investigate a murder that occurred on a Native American reservation.",
    "release_date": "2017-08-03"
  },
  {
    "title": "The Stronghold",
    "vote_average": 7.429,
    "vote_count": 1136,
    "poster_path": "/nLanxl7Xhfbd5s8FxPy8jWZw4rv.jpg",
    "genre_ids": [
      53,
      28,
      80
    ],
    "overview": "A police brigade works in the dangerous northern neighborhoods of Marseille, where the level of crime is higher than anywhere else in France.",
    "release_date": "2021-08-18"
  },
  {
    "title": "The Woman in the Window",
    "vote_average": 7.429,
    "vote_count": 310,
    "poster_path": "/i8jDpAWByVYaQZJXbsg8XqDOF5y.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "A seductive woman gets an innocent professor mixed up in murder.",
    "release_date": "1944-10-25"
  },
  {
    "title": "The Trial",
    "vote_average": 7.429,
    "vote_count": 439,
    "poster_path": "/2o1oe54a4doiwB4uJq9Kx1RHal0.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "Josef K wakes up in the morning and finds the police in his room. They tell him that he is on trial but nobody tells him what he is accused of. In order to find out about the reason for this accusation and to protest his innocence, he tries to look behind the façade of the judicial system. But since this remains fruitless, there seems to be no chance for him to escape from this nightmare.",
    "release_date": "1962-12-21"
  },
  {
    "title": "Kung Fu Hustle",
    "vote_average": 7.426,
    "vote_count": 2579,
    "poster_path": "/exbyTbrvRUDKN2mcNEuVor4VFQW.jpg",
    "genre_ids": [
      28,
      35,
      80,
      14
    ],
    "overview": "It's the 1940s, and the notorious Axe Gang terrorizes Shanghai. Small-time criminals Sing and Bone hope to join, but they only manage to make lots of very dangerous enemies. Fortunately for them, kung fu masters and hidden strength can be found in unlikely places. Now they just have to take on the entire Axe Gang.",
    "release_date": "2004-02-10"
  },
  {
    "title": "The Godfather Part III",
    "vote_average": 7.425,
    "vote_count": 5778,
    "poster_path": "/lm3pQ2QoQ16pextRsmnUbG2onES.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "In the midst of trying to legitimize his business dealings in 1979 New York and Italy, aging mafia don, Michael Corleone seeks forgiveness for his sins while taking a young protege under his wing.",
    "release_date": "1990-12-25"
  },
  {
    "title": "The Life of David Gale",
    "vote_average": 7.423,
    "vote_count": 1882,
    "poster_path": "/7tcAvE82JyxIi79cwQV5br90KVz.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "A man against capital punishment is accused of murdering a fellow activist and is sent to death row.",
    "release_date": "2003-02-21"
  },
  {
    "title": "The Equalizer 3",
    "vote_average": 7.421,
    "vote_count": 2089,
    "poster_path": "/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
    "release_date": "2023-08-30"
  },
  {
    "title": "The Raid",
    "vote_average": 7.4,
    "vote_count": 3168,
    "poster_path": "/A5KIsFWQMlvUqobZb2FInzOPlIp.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Deep in the heart of Jakarta's slums lies an impenetrable safe house for the world's most dangerous killers and gangsters. Until now, the run-down apartment block has been considered untouchable to even the bravest of police. Cloaked under the cover of pre-dawn darkness and silence, an elite swat team is tasked with raiding the safe house in order to take down the notorious drug lord that runs it.  But when a chance encounter with a spotter blows their cover and news of their assault reaches the drug lord, the building's lights are cut and all the exits blocked. Stranded on the sixth floor with no way out, the unit must fight their way through the city's worst to survive their mission. Starring Indonesian martial arts sensation Iko Uwais.",
    "release_date": "2012-03-22"
  },
  {
    "title": "Scream",
    "vote_average": 7.418,
    "vote_count": 6429,
    "poster_path": "/aXAByjBN8UhaYvotqRCwa5MsMGu.jpg",
    "genre_ids": [
      80,
      27,
      9648
    ],
    "overview": "A year after the murder of her mother, Sidney Prescott is terrorized by a masked killer who targets her and her friends by using scary movies as part of a deadly game.",
    "release_date": "1996-12-20"
  },
  {
    "title": "Cure",
    "vote_average": 7.417,
    "vote_count": 426,
    "poster_path": "/nLZ2AJFLtMoAAAD54mbT4exj1Wp.jpg",
    "genre_ids": [
      80,
      53,
      27,
      9648
    ],
    "overview": "A wave of gruesome murders is sweeping Tokyo. The only connection is a bloody X carved into the neck of each of the victims. In each case, the murderer is found near the victim and remembers nothing of the crime. Detective Takabe and psychologist Sakuma are called in to figure out the connection, but their investigation goes nowhere...",
    "release_date": "1997-12-27"
  },
  {
    "title": "The Taking of Pelham One Two Three",
    "vote_average": 7.412,
    "vote_count": 451,
    "poster_path": "/vNhywp9w1DVG6BytxKp4kjtaaGC.jpg",
    "genre_ids": [
      80,
      53,
      28
    ],
    "overview": "In New York, armed men hijack a subway car and demand a ransom for the passengers. Even if it's paid, how could they get away?",
    "release_date": "1974-10-02"
  },
  {
    "title": "Saw",
    "vote_average": 7.411,
    "vote_count": 8684,
    "poster_path": "/tVOTLnDjhx9qul49urYUjYbMjoX.jpg",
    "genre_ids": [
      27,
      9648,
      80
    ],
    "overview": "Two men wake up to find themselves shackled in a grimy, abandoned bathroom. As they struggle to comprehend their predicament, they discover a disturbing tape left behind by the sadistic mastermind known as Jigsaw. With a chilling voice and cryptic instructions, Jigsaw informs them that they must partake in a gruesome game in order to secure their freedom.",
    "release_date": "2004-10-01"
  },
  {
    "title": "Violent Night",
    "vote_average": 7.408,
    "vote_count": 1834,
    "poster_path": "/e8CpMgdyihz9Td7amQDqubPuzfN.jpg",
    "genre_ids": [
      28,
      35,
      53,
      80,
      14
    ],
    "overview": "When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
    "release_date": "2022-11-30"
  },
  {
    "title": "Tekkonkinkreet",
    "vote_average": 7.408,
    "vote_count": 332,
    "poster_path": "/e2x1YDuZPpQiaQS25Ego7xMZYOI.jpg",
    "genre_ids": [
      16,
      80,
      53
    ],
    "overview": "Two penniless orphans, Black and White, struggle to survive on the mean streets of Treasure Town. When a megacorporation threatens to tear down the town to build an amusement park, Black and White engage in the fight of their life.",
    "release_date": "2006-10-21"
  },
  {
    "title": "American Psycho",
    "vote_average": 7.404,
    "vote_count": 10114,
    "poster_path": "/9uGHEgsiUXjCNq8wdq4r49YL8A1.jpg",
    "genre_ids": [
      53,
      18,
      80
    ],
    "overview": "A wealthy New York investment banking executive hides his alternate psychopathic ego from his co-workers and friends as he escalates deeper into his illogical, gratuitous fantasies.",
    "release_date": "2000-04-13"
  },
  {
    "title": "Inside Man",
    "vote_average": 7.401,
    "vote_count": 5433,
    "poster_path": "/wqbvzu1D60ZmhNdC6EI888Yrg7g.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "When an armed, masked gang enter a Manhattan bank, lock the doors and take hostages, the detective assigned to effect their release enters negotiations preoccupied with corruption charges he is facing.",
    "release_date": "2006-03-17"
  },
  {
    "title": "Sicario",
    "vote_average": 7.39,
    "vote_count": 8012,
    "poster_path": "/lz8vNyXeidqqOdJW9ZjnDAMb5Vr.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.",
    "release_date": "2015-09-17"
  },
  {
    "title": "I Can Quit Whenever I Want 2: Masterclass",
    "vote_average": 7.387,
    "vote_count": 1183,
    "poster_path": "/hBQgBWtDym6E7Qem6uhbWJUUHW8.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "Pietro Zinni is asked by the police to revive the old gang to create a task force that will stop the spread of smart drugs.",
    "release_date": "2017-02-02"
  },
  {
    "title": "The Basketball Diaries",
    "vote_average": 7.386,
    "vote_count": 1844,
    "poster_path": "/AhvO1GGDPIgN0hOqZEgaFCbswMK.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A high school basketball player’s life turns upside down after free-falling into the harrowing world of drug addiction.",
    "release_date": "1995-04-21"
  },
  {
    "title": "A Time to Kill",
    "vote_average": 7.386,
    "vote_count": 2323,
    "poster_path": "/w8UCke112E9jrhjKcwG32kyhTx5.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A young lawyer defends a black man accused of murdering two white men who raped his 10-year-old daughter, sparking a rebirth of the KKK.",
    "release_date": "1996-07-24"
  },
  {
    "title": "Law Abiding Citizen",
    "vote_average": 7.4,
    "vote_count": 4767,
    "poster_path": "/fcEXcip7v0O1ndV4VUdFqJSqbOg.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "A frustrated man decides to take justice into his own hands after a plea bargain sets one of his family's killers free. He targets not only the killer but also the district attorney and others involved in the deal.",
    "release_date": "2009-10-15"
  },
  {
    "title": "The Way of the Dragon",
    "vote_average": 7.4,
    "vote_count": 1055,
    "poster_path": "/m7AIITQ624sfldI4SsX4htXPH1f.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "Tang Lung arrives in Rome to help his cousins in the restaurant business. They are being pressured to sell their property to the syndicate, who will stop at nothing to get what they want. When Tang arrives he poses a new threat to the syndicate, and they are unable to defeat him. The syndicate boss hires the best Japanese and European martial artists to fight Tang, but he easily finishes them off.",
    "release_date": "1972-06-01"
  },
  {
    "title": "Falling Down",
    "vote_average": 7.378,
    "vote_count": 3404,
    "poster_path": "/7ujqyF96Zg3rfrsh9M0cEF0Yzqj.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "An ordinary man frustrated with the various flaws he sees in society begins to psychotically and violently lash out against them.",
    "release_date": "1993-02-26"
  },
  {
    "title": "Blindspotting",
    "vote_average": 7.377,
    "vote_count": 613,
    "poster_path": "/x4DRZfTqOlmzNWAvy4vcKWkgEGL.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "Collin must make it through his final three days of probation for a chance at a new beginning. He and his troublemaking childhood best friend, Miles, work as movers, and when Collin witnesses a police shooting, the two men’s friendship is tested as they grapple with identity and their changed realities in the rapidly-gentrifying neighborhood they grew up in.",
    "release_date": "2018-07-20"
  },
  {
    "title": "The Killers",
    "vote_average": 7.4,
    "vote_count": 353,
    "poster_path": "/uXnuc6pW01s1MDwb6QwBWg2JQeX.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "overview": "Two hit men walk into a diner asking for a man called \"the Swede\". When the killers find the Swede, he's expecting them and doesn't put up a fight. Since the Swede had a life insurance policy, an investigator, on a hunch, decides to look into the murder. As the Swede's past is laid bare, it comes to light that he was in love with a beautiful woman who may have lured him into pulling off a bank robbery overseen by another man.",
    "release_date": "1946-08-30"
  },
  {
    "title": "Cherry",
    "vote_average": 7.373,
    "vote_count": 1172,
    "poster_path": "/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Cherry drifts from college dropout to army medic in Iraq - anchored only by his true love, Emily. But after returning from the war with PTSD, his life spirals into drugs and crime as he struggles to find his place in the world.",
    "release_date": "2021-02-26"
  },
  {
    "title": "Glengarry Glen Ross",
    "vote_average": 7.372,
    "vote_count": 1236,
    "poster_path": "/zcaEDx8KlVfh4vKfMNLhiSi5Oz4.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "When an office full of Chicago real estate salesmen is given the news that all but the top two will be fired at the end of the week, the atmosphere begins to heat up. Shelley Levene, who has a sick daughter, does everything in his power to get better leads from his boss, John Williamson, but to no avail. When his coworker Dave Moss comes up with a plan to steal the leads, things get complicated for the tough-talking salesmen.",
    "release_date": "1992-09-15"
  },
  {
    "title": "Adaptation.",
    "vote_average": 7.372,
    "vote_count": 2301,
    "poster_path": "/ffEmHQAiD0m5dEQ6rlsuA9vlllW.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "Nicolas Cage is Charlie Kaufman, a confused L.A. screenwriter overwhelmed by feelings of inadequacy, sexual frustration, self-loathing, and by the screenwriting ambitions of his freeloading twin brother Donald. While struggling to adapt \"The Orchid Thief,\" by Susan Orlean, Kaufman's life spins from pathetic to bizarre. The lives of Kaufman, Orlean's book, become strangely intertwined as each one's search for passion collides with the others'.",
    "release_date": "2002-12-06"
  },
  {
    "title": "The Collini Case",
    "vote_average": 7.366,
    "vote_count": 336,
    "poster_path": "/crfpuX2d6TAGxQl3lnV2t3FIWmx.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "overview": "A young lawyer stumbles upon a vast conspiracy while investigating a brutal murder case.",
    "release_date": "2019-04-18"
  },
  {
    "title": "The Sucker",
    "vote_average": 7.365,
    "vote_count": 612,
    "poster_path": "/xkCGWJ0GYx3nK2PoFZdpl6L49q1.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "In this Frenco-Italian gangster parody, a shop keeper on his way to an Italian holiday suffers a crash which totals his car. The culprit can only compensate his ruined trip by driving an American friends car from Napels to Bordeaux, but as it happens to be filled with such contraband as stolen money, jewelry and drugs, the involuntary and unwitting companions in crime soon attract all but recreational attention from the \"milieu\".",
    "release_date": "1965-03-24"
  },
  {
    "title": "Blow",
    "vote_average": 7.365,
    "vote_count": 4080,
    "poster_path": "/yYZFVfk8aeMP4GxBSU9MTvqs9mJ.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "A boy named George Jung grows up in a struggling family in the 1950's. His mother nags at her husband as he is trying to make a living for the family. It is finally revealed that George's father cannot make a living and the family goes bankrupt. George does not want the same thing to happen to him, and his friend Tuna, in the 1960's, suggests that he deal marijuana. He is a big hit in California in the 1960's, yet he goes to jail, where he finds out about the wonders of cocaine. As a result, when released, he gets rich by bringing cocaine to America. However, he soon pays the price.",
    "release_date": "2001-04-04"
  },
  {
    "title": "The Girl with the Dragon Tattoo",
    "vote_average": 7.364,
    "vote_count": 6606,
    "poster_path": "/zqDopwg7XQ4IfFX2dRlQCT1SwMG.jpg",
    "genre_ids": [
      53,
      80,
      9648
    ],
    "overview": "This English-language adaptation of the Swedish novel by Stieg Larsson follows a disgraced journalist, Mikael Blomkvist, as he investigates the disappearance of a weary patriarch's niece from 40 years ago. He is aided by the pierced, tattooed, punk computer hacker named Lisbeth Salander. As they work together in the investigation, Blomkvist and Salander uncover immense corruption beyond anything they have ever imagined.",
    "release_date": "2011-12-14"
  },
  {
    "title": "The Cook, the Thief, His Wife & Her Lover",
    "vote_average": 7.364,
    "vote_count": 567,
    "poster_path": "/32iU6yyYzlHRgeOqL4RPVxotwU4.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "The wife of an abusive criminal finds solace in the arms of a kind regular guest in her husband's restaurant.",
    "release_date": "1989-10-13"
  },
  {
    "title": "Eastern Promises",
    "vote_average": 7.363,
    "vote_count": 3081,
    "poster_path": "/dpiJWb4NrWgcOg2rusuLhDM0hTm.jpg",
    "genre_ids": [
      53,
      80,
      9648
    ],
    "overview": "A Russian teenager living in London dies during childbirth but leaves clues in her diary that could tie her child to a rape involving a violent Russian mob family.",
    "release_date": "2007-09-14"
  },
  {
    "title": "Match Point",
    "vote_average": 7.362,
    "vote_count": 3853,
    "poster_path": "/vHjEVTD8ucuwKSFOZJeyAnTZYli.jpg",
    "genre_ids": [
      18,
      53,
      80,
      10749
    ],
    "overview": "Chris, a former tennis player, looks for work as an instructor. He meets Tom Hewett, a wealthy young man whose sister Chloe fall in love with Chris. But Chris has his eye on Tom's fiancee Nola.",
    "release_date": "2005-10-26"
  },
  {
    "title": "Down by Law",
    "vote_average": 7.36,
    "vote_count": 681,
    "poster_path": "/4IyxoUQ7BB5kcSd7gASe2dTyWu7.jpg",
    "genre_ids": [
      80,
      18,
      35
    ],
    "overview": "A disc jockey, a pimp and an Italian tourist escape from jail in New Orleans.",
    "release_date": "1986-09-20"
  },
  {
    "title": "The Lady from Shanghai",
    "vote_average": 7.4,
    "vote_count": 593,
    "poster_path": "/vDN6ue4RF85raOeU2aannFGfxlA.jpg",
    "genre_ids": [
      9648,
      80,
      18,
      53
    ],
    "overview": "A romantic drifter gets caught between a corrupt tycoon and his voluptuous wife.",
    "release_date": "1947-12-24"
  },
  {
    "title": "Jackie Brown",
    "vote_average": 7.358,
    "vote_count": 5939,
    "poster_path": "/ewbLUXvm4riZL0aepy90o0vMesn.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Jackie Brown is a flight attendant who gets caught in the middle of smuggling cash into the country for her gunrunner boss. When the cops try to use Jackie to get to her boss, she hatches a plan — with help from a bail bondsman — to keep the money for herself.",
    "release_date": "1997-12-25"
  },
  {
    "title": "American Me",
    "vote_average": 7.356,
    "vote_count": 330,
    "poster_path": "/eeoK2gRfAxZyYn9SiBgAlzfTiBI.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "During his 18 years in Folsom Prison, street-gang leader Santana rules over all the drug-and-murder activities behind bars. Upon his release, Santana goes back to his old neighborhood, intending to lead a peaceful, crime-free life. But his old gang buddies force him back into his old habits.",
    "release_date": "1992-03-13"
  },
  {
    "title": "Road to Perdition",
    "vote_average": 7.354,
    "vote_count": 3391,
    "poster_path": "/mcOD6BogT9jE3Gj2htXg4QLAM8x.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Mike Sullivan works as a hit man for crime boss John Rooney. Sullivan views Rooney as a father figure, however after his son is witness to a killing, Mike Sullivan finds himself on the run in attempt to save the life of his son and at the same time looking for revenge on those who wronged him.",
    "release_date": "2002-07-12"
  },
  {
    "title": "Operation Condor",
    "vote_average": 7.354,
    "vote_count": 502,
    "poster_path": "/vkj5JxVgY1ZYhX4pBHHgwdRNEkl.jpg",
    "genre_ids": [
      28,
      12,
      80,
      53
    ],
    "overview": "Hired by a Spanish baron, Hong Kong treasure hunter Jackie, a.k.a. \"Asian Hawk\" and his entourage seek WWII Nazi gold buried in the Sahara Desert.",
    "release_date": "1991-02-07"
  },
  {
    "title": "Perfume: The Story of a Murderer",
    "vote_average": 7.352,
    "vote_count": 4264,
    "poster_path": "/2wrFrUej8ri5EpjgIkjKTAnr686.jpg",
    "genre_ids": [
      80,
      14,
      18
    ],
    "overview": "Jean-Baptiste Grenouille, born in the stench of 18th century Paris, develops a superior olfactory sense, which he uses to create the world's finest perfumes. However, his work takes a dark turn as he tries to preserve scents in the search for the ultimate perfume.",
    "release_date": "2006-09-13"
  },
  {
    "title": "Mesrine: Killer Instinct",
    "vote_average": 7.347,
    "vote_count": 874,
    "poster_path": "/zCyuiyIhbhgEOZde81qTgXbO0pw.jpg",
    "genre_ids": [
      18,
      28,
      53,
      80
    ],
    "overview": "Jacques Mesrine, a loyal son and dedicated soldier, is back home and living with his parents after serving in the Algerian War. Soon he is seduced by the neon glamour of sixties Paris and the easy money it presents. Mentored by Guido, Mesrine turns his back on middle class law-abiding and soon moves swiftly up the criminal ladder.",
    "release_date": "2008-10-22"
  },
  {
    "title": "Blow Out",
    "vote_average": 7.346,
    "vote_count": 1285,
    "poster_path": "/weMW1wLzeagP3tw6BfmYf1iL7dz.jpg",
    "genre_ids": [
      53,
      9648,
      80
    ],
    "overview": "Jack Terry is a master sound recordist who works on grade-B horror movies. Late one evening, he is recording sounds for use in his movies when he hears something unexpected through his sound equipment and records it. Curiosity gets the better of him when the media become involved, and he begins to unravel the pieces of a nefarious conspiracy. As he struggles to survive against his shadowy enemies and expose the truth, he does not know whom he can trust.",
    "release_date": "1981-07-24"
  },
  {
    "title": "Undisputed II: Last Man Standing",
    "vote_average": 7.345,
    "vote_count": 737,
    "poster_path": "/4bE9t5ctBZXYV3GJ6Xr0l4KRplv.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Heavyweight Champ George \"Iceman\" Chambers is sent to a Russian jail on trumped-up drug charges. In order to win his freedom he must fight against the jailhouse fighting champ Uri Boyka in a battle to the death. This time he is not fighting for a title, he is fighting for his life!",
    "release_date": "2006-04-11"
  },
  {
    "title": "Now You See Me",
    "vote_average": 7.344,
    "vote_count": 14921,
    "poster_path": "/tWsNYbrqy1p1w6K9zRk0mSchztT.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
    "release_date": "2013-05-29"
  },
  {
    "title": "The Mafia Kills Only in Summer",
    "vote_average": 7.337,
    "vote_count": 1073,
    "poster_path": "/ckYR7w9XmbyQHNoC1UD5j1Lax3u.jpg",
    "genre_ids": [
      10749,
      35,
      80,
      18
    ],
    "overview": "While Arturo tries to gain the love of Flora, he witnesses the history of Sicily from 1969 to 1992, miraculously dodging the crimes of the Mafia and supporting as a journalist the heroic struggle of the judges and policemen who fought this infamous organization.",
    "release_date": "2013-11-28"
  },
  {
    "title": "21 Grams",
    "vote_average": 7.337,
    "vote_count": 2929,
    "poster_path": "/hdS0to9nUpgK0Zm1bZAF6BWRae7.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "Paul Rivers, an ailing mathematician lovelessly married to an English émigré; Christina Peck, an upper-middle-class suburban housewife and mother of two girls; and Jack Jordan, a born-again ex-con, are brought together by a terrible accident that changes their lives.",
    "release_date": "2003-09-06"
  },
  {
    "title": "The Yellow Sea",
    "vote_average": 7.336,
    "vote_count": 449,
    "poster_path": "/16Pkg2ChCdACbBKVIAPAZtLL6eb.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "A Korean man in China takes an assassination job in South Korea to make money and find his missing wife. But when the job is botched, he is forced to go on the run from the police and the gangsters who paid him.",
    "release_date": "2010-12-22"
  },
  {
    "title": "End of Watch",
    "vote_average": 7.332,
    "vote_count": 3012,
    "poster_path": "/pDeVKQICkcdwwjHxGj0MeS14YJ6.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Two young officers are marked for death after confiscating a small cache of money and firearms from the members of a notorious cartel during a routine traffic stop.",
    "release_date": "2012-09-20"
  },
  {
    "title": "25th Hour",
    "vote_average": 7.333,
    "vote_count": 2190,
    "poster_path": "/uW7tTRElr2tRhmAVESzvHy4ByXg.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "In New York City in the days following the events of 9/11, Monty Brogan is a convicted drug dealer about to start a seven-year prison sentence, and his final hours of freedom are devoted to hanging out with his closest buddies and trying to prepare his girlfriend for his extended absence.",
    "release_date": "2002-12-19"
  },
  {
    "title": "O Brother, Where Art Thou?",
    "vote_average": 7.33,
    "vote_count": 3878,
    "poster_path": "/2YztYilviFCYcEtDAnrOstUWGie.jpg",
    "genre_ids": [
      12,
      35,
      80
    ],
    "overview": "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them. On their journey they come across many comical characters and incredible situations. Based upon Homer's 'Odyssey'.",
    "release_date": "2000-08-30"
  },
  {
    "title": "John Wick: Chapter 2",
    "vote_average": 7.325,
    "vote_count": 12300,
    "poster_path": "/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world’s most dangerous killers.",
    "release_date": "2017-02-08"
  },
  {
    "title": "Mesrine: Public Enemy #1",
    "vote_average": 7.324,
    "vote_count": 824,
    "poster_path": "/k9lhZ0PhY78nzwG034rNpsLXlpW.jpg",
    "genre_ids": [
      28,
      53,
      80,
      18
    ],
    "overview": "The story of Jacques Mesrine, France's public enemy No. 1 during the 1970s. After nearly two decades of legendary criminal feats -- from multiple bank robberies and to prison breaks -- Mesrine was gunned down by the French police in Paris.",
    "release_date": "2008-11-19"
  },
  {
    "title": "Days of Being Wild",
    "vote_average": 7.3,
    "vote_count": 432,
    "poster_path": "/acfLUO8E61u0ooWS6htbzTHDBcI.jpg",
    "genre_ids": [
      80,
      18,
      10749
    ],
    "overview": "Yuddy, a Hong Kong playboy known for breaking girls' hearts, tries to find solace and the truth after discovering the woman who raised him isn't his mother.",
    "release_date": "1990-12-15"
  },
  {
    "title": "A Place in the Sun",
    "vote_average": 7.321,
    "vote_count": 344,
    "poster_path": "/3tKYbChwIRYCwFrMUDBkbZyDIoN.jpg",
    "genre_ids": [
      18,
      10749,
      80
    ],
    "overview": "An ambitious young man wins an heiress's heart but has to cope with his former girlfriend's pregnancy.",
    "release_date": "1951-06-12"
  },
  {
    "title": "Chocolate",
    "vote_average": 7.321,
    "vote_count": 456,
    "poster_path": "/g8CBVNFdJOGINQW2KuOvl5NAPS5.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "Zen, an autistic teenage girl with powerful martial arts skills, gets money to pay for her sick mother Zin's treatment by seeking out all the people who owe Zin money and making them pay.",
    "release_date": "2008-02-06"
  },
  {
    "title": "The Guilty",
    "vote_average": 7.319,
    "vote_count": 1571,
    "poster_path": "/pBeRHioTDNRlgIKzkOCSk0ihkLW.jpg",
    "genre_ids": [
      53,
      18,
      80
    ],
    "overview": "Police officer Asger Holm, demoted to desk work as an alarm dispatcher, answers a call from a panicked woman who claims to have been kidnapped. Confined to the police station and with the phone as his only tool, Asger races against time to get help and find her.",
    "release_date": "2018-02-22"
  },
  {
    "title": "Ghost Dog: The Way of the Samurai",
    "vote_average": 7.318,
    "vote_count": 1082,
    "poster_path": "/gjcl07r9zgQ9tVo9alyHmysPFfX.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "An African-American Mafia hit man who models himself after the samurai of ancient Japan finds himself targeted for death by the mob.",
    "release_date": "1999-09-13"
  },
  {
    "title": "Gangs of New York",
    "vote_average": 7.318,
    "vote_count": 6218,
    "poster_path": "/lemqKtcCuAano5aqrzxYiKC8kkn.jpg",
    "genre_ids": [
      18,
      36,
      80
    ],
    "overview": "In 1863, Amsterdam Vallon returns to the Five Points of America to seek vengeance against the psychotic gangland kingpin, Bill the Butcher, who murdered his father years earlier. With an eager pickpocket by his side and a whole new army, Vallon fights his way to seek vengeance on the Butcher and restore peace in the area.",
    "release_date": "2002-12-14"
  },
  {
    "title": "Batman: Assault on Arkham",
    "vote_average": 7.316,
    "vote_count": 1049,
    "poster_path": "/b9KxvIAZkl2f57kjObj8Z9z9LhL.jpg",
    "genre_ids": [
      53,
      16,
      28,
      80
    ],
    "overview": "Batman works desperately to find a bomb planted by the Joker while Amanda Waller sends her newly-formed Suicide Squad to break into Arkham Asylum and recover vital information stolen by the Riddler.",
    "release_date": "2014-08-12"
  },
  {
    "title": "To Catch a Thief",
    "vote_average": 7.312,
    "vote_count": 1393,
    "poster_path": "/cbMRkBGBgo3aLJK2M4MyicvkPLQ.jpg",
    "genre_ids": [
      9648,
      53,
      10749,
      35,
      80
    ],
    "overview": "An ex-thief is accused of enacting a new crime spree, so to clear his name he sets off to catch the new thief, who’s imitating his signature style.",
    "release_date": "1955-08-03"
  },
  {
    "title": "Detroit",
    "vote_average": 7.307,
    "vote_count": 1552,
    "poster_path": "/tmCt2hy9QoFHft3UcHwpGX2Sihl.jpg",
    "genre_ids": [
      80,
      18,
      53,
      36
    ],
    "overview": "A police raid in Detroit in 1967 results in one of the largest citizens' uprisings in the history of the United States.",
    "release_date": "2017-07-28"
  },
  {
    "title": "Pickpocket",
    "vote_average": 7.307,
    "vote_count": 469,
    "poster_path": "/kxpvceDv9fhFc4OAs82fmdzu17Y.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Michel takes up pickpocketing on a lark and is arrested soon after. His mother dies shortly after his release, and despite the objections of his only friend, Jacques, and his mother's neighbor Jeanne, Michel teams up with a couple of petty thieves in order to improve his craft. With a police inspector keeping an eye on him, Michel also tries to get a straight job, but the temptation to steal is hard to resist.",
    "release_date": "1959-12-16"
  },
  {
    "title": "Gone Baby Gone",
    "vote_average": 7.305,
    "vote_count": 3484,
    "poster_path": "/rm3Dl8DWYGO3UQ3w2kju62L9rkn.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "When 4 year old Amanda McCready disappears from her home and the police make little headway in solving the case, the girl's aunt, Beatrice McCready hires two private detectives, Patrick Kenzie and Angie Gennaro. The detectives freely admit that they have little experience with this type of case, but the family wants them for two reasons—they're not cops and they know the tough neighborhood in which they all live.",
    "release_date": "2007-09-18"
  },
  {
    "title": "Enola Holmes",
    "vote_average": 7.298,
    "vote_count": 5677,
    "poster_path": "/riYInlsq2kf1AWoGm80JQW5dLKp.jpg",
    "genre_ids": [
      12,
      9648,
      80
    ],
    "overview": "While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.",
    "release_date": "2020-09-23"
  },
  {
    "title": "Hell or High Water",
    "vote_average": 7.3,
    "vote_count": 4206,
    "poster_path": "/ljRRxqy2aXIkIBXLmOVifcOR021.jpg",
    "genre_ids": [
      37,
      80,
      18
    ],
    "overview": "A divorced dad and his ex-con brother resort to a desperate scheme in order to save their family's farm in West Texas.",
    "release_date": "2016-08-11"
  },
  {
    "title": "Lord of War",
    "vote_average": 7.299,
    "vote_count": 4418,
    "poster_path": "/3MGQD4yXokufNlW1AyRXdiy7ytP.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Yuri Orlov is a globetrotting arms dealer and, through some of the deadliest war zones, he struggles to stay one step ahead of a relentless Interpol agent, his business rivals and even some of his customers who include many of the world's most notorious dictators. Finally, he must also face his own conscience.",
    "release_date": "2005-09-16"
  },
  {
    "title": "Heathers",
    "vote_average": 7.297,
    "vote_count": 1553,
    "poster_path": "/dGbVfM4WlM7uvIbyRehfPZUIgp2.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "A girl who halfheartedly tries to be part of the \"in crowd\" of her school meets a rebel who teaches her a more devious way to play social politics: by killing the popular kids.",
    "release_date": "1989-03-31"
  },
  {
    "title": "Suburra",
    "vote_average": 7.294,
    "vote_count": 1208,
    "poster_path": "/v2PscdczRtYVxiHDGgsNGJNv1AO.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A gangster known as \"Samurai\" wants to turn the waterfront of Rome into a new Las Vegas. All the local mob bosses have agreed to work for this common goal. But peace is not to last long.",
    "release_date": "2015-10-14"
  },
  {
    "title": "Lethal Weapon",
    "vote_average": 7.289,
    "vote_count": 4258,
    "poster_path": "/fTq4ThIP3pQTYR9eDepsbDHqdcs.jpg",
    "genre_ids": [
      12,
      28,
      35,
      53,
      80
    ],
    "overview": "Veteran buttoned-down LAPD detective Roger Murtaugh is partnered with unhinged cop Martin Riggs, who -- distraught after his wife's death -- has a death wish and takes unnecessary risks with criminals at every turn. The odd couple embark on their first homicide investigation as partners, involving a young woman known to Murtaugh with ties to a drug and prostitution ring.",
    "release_date": "1987-03-06"
  },
  {
    "title": "An American Crime",
    "vote_average": 7.3,
    "vote_count": 624,
    "poster_path": "/aGATXFPK09klLs0JmxLKtCSyg24.jpg",
    "genre_ids": [
      80,
      18,
      27
    ],
    "overview": "The true story of suburban housewife Gertrude Baniszewski, who kept a teenage girl locked in the basement of her Indiana home during the 1960s.",
    "release_date": "2007-07-27"
  },
  {
    "title": "Batman: Year One",
    "vote_average": 7.282,
    "vote_count": 881,
    "poster_path": "/mLZRhulJcDsxZWTdfx0trtk6y07.jpg",
    "genre_ids": [
      28,
      16,
      80
    ],
    "overview": "A wealthy playboy named Bruce Wayne and a Chicago cop named Jim Gordon both return to Gotham City where their lives unexpectedly intersect.",
    "release_date": "2011-09-27"
  },
  {
    "title": "Shoot the Piano Player",
    "vote_average": 7.28,
    "vote_count": 371,
    "poster_path": "/9hFy8LJshKYvW5vzguEhvgphIHJ.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "Charlie is a former classical pianist who has changed his name and now plays jazz in a grimy Paris bar. When Charlie's brothers, Richard and Chico, surface and ask for Charlie's help while on the run from gangsters they have scammed, he aids their escape. Soon Charlie and Lena, a waitress at the same bar, face trouble when the gangsters arrive, looking for his brothers.",
    "release_date": "1960-11-25"
  },
  {
    "title": "Tell No One",
    "vote_average": 7.271,
    "vote_count": 1299,
    "poster_path": "/fr2wEeO1H8dzx6EDfzYTRBIvZaE.jpg",
    "genre_ids": [
      18,
      53,
      80,
      9648
    ],
    "overview": "A man receives a mysterious e-mail appearing to be from his wife, who was murdered years earlier. As he frantically tries to find out whether she's alive, he finds himself being implicated in her death.",
    "release_date": "2006-11-01"
  },
  {
    "title": "Assault on Precinct 13",
    "vote_average": 7.27,
    "vote_count": 986,
    "poster_path": "/RtGDEmXbSxE8NThCCY1SXFXLLw.jpg",
    "genre_ids": [
      53,
      28,
      80
    ],
    "overview": "The lone inhabitants of an abandoned police station are under attack by the overwhelming numbers of a seemingly unstoppable street gang.",
    "release_date": "1976-11-05"
  },
  {
    "title": "Cape Fear",
    "vote_average": 7.266,
    "vote_count": 3186,
    "poster_path": "/9Fu4lPpGVnUP2lZxN604QNwoFGX.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "Sam Bowden is a small-town corporate attorney. Max Cady is a tattooed, cigar-smoking, Bible-quoting, psychotic rapist. What do they have in common? 14 years ago, Sam was a public defender assigned to Max Cady's rape trial, and he made a serious error: he hid a document from his illiterate client that could have gotten him acquitted. Now, the cagey Cady has been released, and he intends to teach Sam Bowden and his family a thing or two about loss.",
    "release_date": "1991-11-13"
  },
  {
    "title": "The Equalizer",
    "vote_average": 7.265,
    "vote_count": 8461,
    "poster_path": "/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg",
    "genre_ids": [
      53,
      28,
      80
    ],
    "overview": "McCall believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when he meets Teri, a young girl under the control of ultra-violent Russian gangsters, he can’t stand idly by – he has to help her. Armed with hidden skills that allow him to serve vengeance against anyone who would brutalize the helpless, McCall comes out of his self-imposed retirement and finds his desire for justice reawakened. If someone has a problem, if the odds are stacked against them, if they have nowhere else to turn, McCall will help. He is The Equalizer.",
    "release_date": "2014-09-24"
  },
  {
    "title": "Infernal Affairs II",
    "vote_average": 7.3,
    "vote_count": 368,
    "poster_path": "/q9MCjc4CMXju59slJEzYEtr7F3W.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "In this prequel to the original, a bloody power struggle among the Triads coincides with the 1997 handover of Hong Kong, setting up the events of the first film.",
    "release_date": "2003-10-01"
  },
  {
    "title": "OSS 117: Cairo, Nest of Spies",
    "vote_average": 7.259,
    "vote_count": 1623,
    "poster_path": "/dDVHVZVEbTV4JsB8ZjdXNmMK7rA.jpg",
    "genre_ids": [
      80,
      28,
      12,
      35
    ],
    "overview": "Secret agent OSS 117 foils Nazis, beds local beauties, and brings peace to the Middle East.",
    "release_date": "2006-04-19"
  },
  {
    "title": "West Side Story",
    "vote_average": 7.259,
    "vote_count": 1758,
    "poster_path": "/nzCMu6D5q60i2bVrIQ0DxlRSgCZ.jpg",
    "genre_ids": [
      80,
      18,
      10749
    ],
    "overview": "In the slums of the upper West Side of Manhattan, New York, a gang of Polish-American teenagers called the Jets compete with a rival gang of recently immigrated Puerto Ricans, the Sharks, to \"own\" the neighborhood streets. Tensions are high between the gangs but two romantics, one from each gang, fall in love leading to tragedy.",
    "release_date": "1961-12-13"
  },
  {
    "title": "Old Henry",
    "vote_average": 7.262,
    "vote_count": 463,
    "poster_path": "/eE1SL0QoDsvAMqQly56IkRtlN1W.jpg",
    "genre_ids": [
      28,
      37,
      53,
      80,
      9648
    ],
    "overview": "A widowed farmer and his son warily take in a mysterious, injured man with a satchel of cash. When a posse of men claiming to be the law come for the money, the farmer must decide who to trust. Defending a siege of his homestead, the farmer reveals a talent for gun-slinging that surprises everyone calling his true identity into question.",
    "release_date": "2021-10-01"
  },
  {
    "title": "The Ladykillers",
    "vote_average": 7.3,
    "vote_count": 431,
    "poster_path": "/9LJ6ZV59Q92LAJAbmb7xm9dUBGU.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Five oddball criminals planning a bank robbery rent rooms on a cul-de-sac from an octogenarian widow under the pretext that they are classical musicians.",
    "release_date": "1955-12-08"
  },
  {
    "title": "A Shot in the Dark",
    "vote_average": 7.255,
    "vote_count": 486,
    "poster_path": "/pR6tNqNLYIbRRYC5TFKWVWaVvvK.jpg",
    "genre_ids": [
      35,
      80,
      9648
    ],
    "overview": "When rich Mr. Benjamin Ballon’s Spanish driver is found shot dead, Inspector Jacques Clouseau is the first official on the scene. All evidence suggests Maria Gambrelli, the maid, to be the murderer. But Clouseau, being attracted to the beautiful girl, is convinced that she is hiding something. So, he has her released from jail and secretly tries to follow her. Things do not work out the way the inspector wants and people keep ending up murdered, and every time, innocent Maria seems to be the killer. But with someone important wanting Clouseau and nobody else to cover this case, his tolerance-challenged boss Charles Dreyfus is close to losing his mind when casualties keep turning up. And Clouseau keeps on causing trouble without knowing it…",
    "release_date": "1964-06-23"
  },
  {
    "title": "The Boondock Saints",
    "vote_average": 7.253,
    "vote_count": 2222,
    "poster_path": "/gj3V39yiGPH1FAylXxzzVneflxA.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Tired of the crime overrunning the streets of Boston, Irish Catholic twin brothers Conner and Murphy are inspired by their faith to cleanse their hometown of evil with their own brand of zealous vigilante justice. As they hunt down and kill one notorious gangster after another, they become controversial folk heroes in the community. But Paul Smecker, an eccentric FBI agent, is fast closing in on their blood-soaked trail.",
    "release_date": "1999-01-22"
  },
  {
    "title": "The Stranger",
    "vote_average": 7.251,
    "vote_count": 534,
    "poster_path": "/bzjoPScBLUWpSu10m3GbSbSwVhS.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "An investigator from the War Crimes Commission travels to Connecticut to find an infamous Nazi, who may be hiding out in a small town in the guise of a distinguished professor engaged to the Supreme Court Justice’s daughter.",
    "release_date": "1946-07-02"
  },
  {
    "title": "Fast Five",
    "vote_average": 7.2,
    "vote_count": 7733,
    "poster_path": "/c5rgA1EYwMmxsQdyvLkQ8LD5Qun.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Former cop Brian O'Conner partners with ex-con Dom Toretto on the opposite side of the law. Since Brian and Mia Toretto broke Dom out of custody, they've blown across many borders to elude authorities. Now backed into a corner in Rio de Janeiro, they must pull one last job in order to gain their freedom.",
    "release_date": "2011-04-20"
  },
  {
    "title": "Green Street Hooligans",
    "vote_average": 7.25,
    "vote_count": 2198,
    "poster_path": "/tfLj69EoP1b8ZWfLyg5FGJ5LC38.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "After being wrongfully expelled from Harvard University, American Matt Buckner flees to his sister's home in England. Once there, he is befriended by her charming and dangerous brother-in-law, Pete Dunham, and introduced to the underworld of British football hooliganism. Matt learns to stand his ground through a friendship that develops against the backdrop of this secret and often violent world. 'Green Street Hooligans' is a story of loyalty, trust and the sometimes brutal consequences of living close to the edge.",
    "release_date": "2005-09-09"
  },
  {
    "title": "Dolores Claiborne",
    "vote_average": 7.248,
    "vote_count": 692,
    "poster_path": "/gfCh3TEQNEoro8lq21y4zYIic4D.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "Dolores Claiborne was accused of killing her abusive husband twenty years ago, but the court's findings were inconclusive and she was allowed to walk free. Now she has been accused of killing her employer, Vera Donovan, and this time there is a witness who can place her at the scene of the crime. Things look bad for Dolores when her daughter Selena, a successful Manhattan magazine writer, returns to cover the story.",
    "release_date": "1995-03-24"
  },
  {
    "title": "The Naked Gun: From the Files of Police Squad!",
    "vote_average": 7.247,
    "vote_count": 3395,
    "poster_path": "/wQHTHJ3jBKtz2c6VT9JZ8TD73yl.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "When the incompetent Lieutenant Frank Drebin seeks the ruthless killer of his partner, he stumbles upon an attempt to assassinate Queen Elizabeth II.",
    "release_date": "1988-12-02"
  },
  {
    "title": "Blood Simple",
    "vote_average": 7.247,
    "vote_count": 1281,
    "poster_path": "/n8D1gVXUgmW4kkDzUzzoezAmUUa.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "The owner of a seedy small-town Texas bar discovers that one of his employees is having an affair with his wife. A chaotic chain of misunderstandings, lies and mischief ensues after he devises a plot to have them murdered.",
    "release_date": "1984-09-07"
  },
  {
    "title": "Juice",
    "vote_average": 7.241,
    "vote_count": 365,
    "poster_path": "/fLOB1MdIf2jWexxOzq441lNTIpW.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Four Harlem friends -- Bishop, Q, Steel and Raheem -- dabble in petty crime, but they decide to go big by knocking off a convenience store. Bishop, the magnetic leader of the group, has the gun. But Q has different aspirations. He wants to be a DJ and happens to have a gig the night of the robbery. Unfortunately for him, Bishop isn't willing to take no for answer in a game where everything's for keeps.",
    "release_date": "1992-01-17"
  },
  {
    "title": "Headhunters",
    "vote_average": 7.2,
    "vote_count": 1153,
    "poster_path": "/ll32Hyillq6VSC1F7v4m2uZjGKI.jpg",
    "genre_ids": [
      53,
      80,
      28
    ],
    "overview": "An accomplished headhunter risks everything to obtain a valuable painting owned by a former mercenary.",
    "release_date": "2011-08-26"
  },
  {
    "title": "Furious 7",
    "vote_average": 7.236,
    "vote_count": 10149,
    "poster_path": "/ktofZ9Htrjiy0P6LEowsDaxd3Ri.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
    "release_date": "2015-04-01"
  },
  {
    "title": "The Public Enemy",
    "vote_average": 7.235,
    "vote_count": 311,
    "poster_path": "/vVxdaRMprQO2DM4AFyJ6C4qZSFO.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Two young Chicago hoodlums, Tom Powers and Matt Doyle, rise up from their poverty-stricken slum life to become petty thieves, bootleggers and cold-blooded killers. But with street notoriety and newfound wealth, the duo feels the heat from the cops and rival gangsters both. Despite his ruthless criminal reputation, Tom tries to remain connected to his family, however, gang warfare and the need for revenge eventually pull him away.",
    "release_date": "1931-04-23"
  },
  {
    "title": "Irreversible",
    "vote_average": 7.231,
    "vote_count": 2681,
    "poster_path": "/rxeDxo8FvZpLu6iplNpxdtAVnfu.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "A woman’s lover and her ex-boyfriend take justice into their own hands after she becomes the victim of a rapist. Because some acts can’t be undone. Because man is an animal. Because the desire for vengeance is a natural impulse. Because most crimes remain unpunished.",
    "release_date": "2002-05-22"
  },
  {
    "title": "The Outsiders",
    "vote_average": 7.225,
    "vote_count": 1231,
    "poster_path": "/iwbbE0xiOuflxE99gESWC2b5Ohc.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "When two poor Greasers, Johnny and Ponyboy, are assaulted by a vicious gang, the Socs, and Johnny kills one of the attackers, tension begins to mount between the two rival gangs, setting off a turbulent chain of events.",
    "release_date": "1983-03-25"
  },
  {
    "title": "Batman",
    "vote_average": 7.222,
    "vote_count": 7301,
    "poster_path": "/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg",
    "genre_ids": [
      14,
      28,
      80
    ],
    "overview": "Batman must face his most ruthless nemesis when a deformed madman calling himself \"The Joker\" seizes control of Gotham's criminal underworld.",
    "release_date": "1989-06-21"
  },
  {
    "title": "Maria Full of Grace",
    "vote_average": 7.221,
    "vote_count": 357,
    "poster_path": "/30CImATfvHWLXy6a3KmHXnYXB6c.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "A pregnant Colombian teenager becomes a drug mule to make some desperately needed money for her family.",
    "release_date": "2004-01-18"
  },
  {
    "title": "Monster",
    "vote_average": 7.2,
    "vote_count": 2153,
    "poster_path": "/aevmNtJCNG4ZlfEeEGZ79frMUes.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "An emotionally scarred highway drifter shoots a sadistic trick who rapes her, and ultimately becomes America's first female serial killer.",
    "release_date": "2003-12-24"
  },
  {
    "title": "Violent Cop",
    "vote_average": 7.218,
    "vote_count": 347,
    "poster_path": "/9MmLBW1xFlSBu0xcv5KZOKp89OC.jpg",
    "genre_ids": [
      80,
      53,
      28
    ],
    "overview": "A detective breaks all rules of ethical conduct while investigating a colleague’s involvement in drug pushing and Yakuza activities.",
    "release_date": "1989-08-12"
  },
  {
    "title": "Clue",
    "vote_average": 7.215,
    "vote_count": 1571,
    "poster_path": "/aRxbYOYHS8T73nzR8hsLousoplR.jpg",
    "genre_ids": [
      35,
      53,
      80,
      9648
    ],
    "overview": "Clue finds six colorful dinner guests gathered at the mansion of their host, Mr. Boddy -- who turns up dead after his secret is exposed: He was blackmailing all of them. With the killer among them, the guests and Boddy's chatty butler must suss out the culprit before the body count rises.",
    "release_date": "1985-12-13"
  },
  {
    "title": "The Devil All the Time",
    "vote_average": 7.214,
    "vote_count": 3100,
    "poster_path": "/bVL7LGq528h3KzeNI90HOVbV5uW.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "In Knockemstiff, Ohio and its neighboring backwoods, sinister characters converge around young Arvin Russell as he fights the evil forces that threaten him and his family.",
    "release_date": "2020-09-11"
  },
  {
    "title": "Collateral",
    "vote_average": 7.213,
    "vote_count": 5219,
    "poster_path": "/iOpi3ut5DhQIbrVVjlnmfy2U7dI.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "Cab driver Max picks up a man who offers him $600 to drive him around. But the promise of easy money sours when Max realizes his fare is an assassin.",
    "release_date": "2004-08-04"
  },
  {
    "title": "Man Bites Dog",
    "vote_average": 7.211,
    "vote_count": 842,
    "poster_path": "/wFjMK1QaH8an5JcgDEDoSReQ7aL.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "The activities of rampaging, indiscriminate serial killer Ben are recorded by a willingly complicit documentary team, who eventually become his accomplices and active participants. Ben provides casual commentary on the nature of his work and arbitrary musings on topics of interest to him, such as music or the conditions of low-income housing, and even goes so far as to introduce the documentary crew to his family. But their reckless indulgences soon get the better of them.",
    "release_date": "1992-08-20"
  },
  {
    "title": "Cleveland Abduction",
    "vote_average": 7.2,
    "vote_count": 329,
    "poster_path": "/xSfHS7KnZWJrMf6l54UU7yKAsAI.jpg",
    "genre_ids": [
      18,
      80,
      10770
    ],
    "overview": "A single mother becomes Ariel Castro's first kidnapping victim, and finds herself trapped in his home with two other women for 11 years.",
    "release_date": "2015-05-02"
  },
  {
    "title": "Sherlock Holmes",
    "vote_average": 7.208,
    "vote_count": 13374,
    "poster_path": "/momkKuWburNTqKBF6ez7rvhYVhE.jpg",
    "genre_ids": [
      28,
      12,
      80,
      9648
    ],
    "overview": "Eccentric consulting detective Sherlock Holmes and Doctor John Watson battle to bring down a new nemesis and unravel a deadly plot that could destroy England.",
    "release_date": "2009-12-23"
  },
  {
    "title": "The Town",
    "vote_average": 7.2,
    "vote_count": 4723,
    "poster_path": "/3NIzyXkfylsjflRKSz8Fts3lXzm.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Doug MacRay is a longtime thief, who, smarter than the rest of his crew, is looking for his chance to exit the game. When a bank job leads to the group kidnapping an attractive branch manager, he takes on the role of monitoring her – but their burgeoning relationship threatens to unveil the identities of Doug and his crew to the FBI Agent who is on their case.",
    "release_date": "2010-09-15"
  },
  {
    "title": "Good Time",
    "vote_average": 7.203,
    "vote_count": 2658,
    "poster_path": "/yE1c9hj5Hf8a9KplAdRdhADqUro.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "After a botched bank robbery lands his younger brother in prison, Connie Nikas embarks on a twisted odyssey through New York City's underworld to get his brother Nick out of jail.",
    "release_date": "2017-08-11"
  },
  {
    "title": "Murder by Death",
    "vote_average": 7.202,
    "vote_count": 747,
    "poster_path": "/9HlvA3JUn0yuUvWUXJTfMJB1Vge.jpg",
    "genre_ids": [
      35,
      80,
      9648,
      53
    ],
    "overview": "Lionel Twain invites the world's five greatest detectives to a 'dinner and murder'. Included are a blind butler, a deaf-mute maid, screams, spinning rooms, secret passages, false identities and more plot turns and twists than are decently allowed.",
    "release_date": "1976-06-23"
  },
  {
    "title": "A Fish Called Wanda",
    "vote_average": 7.2,
    "vote_count": 2001,
    "poster_path": "/hkSGFNVfEEUXFCxRZDITFHVhUlu.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "While a diamond advocate attempts to steal a collection of diamonds, troubles arise when he realises he’s not the only one after the collection.",
    "release_date": "1988-07-15"
  },
  {
    "title": "Les Misérables",
    "vote_average": 7.201,
    "vote_count": 568,
    "poster_path": "/3TOgmlIY8X3WjIjvU7Z0jqeNkyU.jpg",
    "genre_ids": [
      80,
      18,
      36,
      10749
    ],
    "overview": "Jean Valjean, a Frenchman imprisoned for stealing bread, must flee a police officer named Javert. The pursuit consumes both men's lives, and soon Valjean finds himself in the midst of the student revolutions in France.",
    "release_date": "1998-05-01"
  },
  {
    "title": "Last Night of Amore",
    "vote_average": 7.205,
    "vote_count": 339,
    "poster_path": "/yKxmEfFrLjPLutpi7alffLOwMSj.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "On the night before his retirement, police lieutenant Franco Amore is called to investigate the death of a long-time partner of his in a diamond heist in which he was involved.",
    "release_date": "2023-03-09"
  },
  {
    "title": "Romanzo Criminale",
    "vote_average": 7.196,
    "vote_count": 629,
    "poster_path": "/jd06ZOSBpjfKEthqli5O2urO0nm.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "After serving prison time for a juvenile offense, Freddo gathers his old buddies Libano and Dandi and embarks on a crime spree that makes the trio the most powerful gangsters in Rome. Libano loves their new status, and seeks to spread their influence throughout the underworld, while the other two pursue more fleshly desires. For decades, their gang perpetrates extravagant crimes, until paranoia threatens to split the friends apart.",
    "release_date": "2005-09-30"
  },
  {
    "title": "Midnight Run",
    "vote_average": 7.196,
    "vote_count": 989,
    "poster_path": "/avLXoDhPPbKgdOU7wsoVlOzYfUP.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "A bounty hunter pursues a former Mafia accountant who embezzled $15 million of mob money. He is also being chased by a rival bounty hunter, the F.B.I., and his old mob boss after jumping bail.",
    "release_date": "1988-07-20"
  },
  {
    "title": "The Lincoln Lawyer",
    "vote_average": 7.195,
    "vote_count": 3007,
    "poster_path": "/gOn8Ve9Yi8fxjRkmLr5BZoOc7KV.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A lawyer conducts business from the back of his Lincoln town car while representing a high-profile client in Beverly Hills.",
    "release_date": "2011-03-17"
  },
  {
    "title": "Pusher II",
    "vote_average": 7.2,
    "vote_count": 409,
    "poster_path": "/qxvyw5NZBphzWliVdSzn7gSxUel.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Tonny is released from prison - again. This time he has his mind set on changing his broken down life, but that is easier said than done.",
    "release_date": "2004-12-25"
  },
  {
    "title": "The Player",
    "vote_average": 7.191,
    "vote_count": 728,
    "poster_path": "/pOOTEr4c5Rk7s4YSQ6Uii2T6rr6.jpg",
    "genre_ids": [
      9648,
      18,
      35,
      80
    ],
    "overview": "A Hollywood studio executive is being sent death threats by a writer whose script he rejected - but which one?",
    "release_date": "1992-04-03"
  },
  {
    "title": "Beverly Hills Cop",
    "vote_average": 7.188,
    "vote_count": 3726,
    "poster_path": "/eBJEvKkhQ0tUt1dBAcTEYW6kCle.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "Fast-talking, quick-thinking Detroit street cop Axel Foley has bent more than a few rules and regs in his time, but when his best friend is murdered, he heads to sunny Beverly Hills to work the case like only he can.",
    "release_date": "1984-12-05"
  },
  {
    "title": "Vanishing Point",
    "vote_average": 7.186,
    "vote_count": 411,
    "poster_path": "/mUiXVJebn3QvM4ZODFepjYNGvy5.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "Kowalski works for a car delivery service, and takes delivery of a 1970 Dodge Challenger to drive from Colorado to San Francisco. Shortly after pickup, he takes a bet to get the car there in less than 15 hours.",
    "release_date": "1971-01-15"
  },
  {
    "title": "Broker",
    "vote_average": 7.2,
    "vote_count": 362,
    "poster_path": "/x86xaUnxU31JYiwlO35corDEV1i.jpg",
    "genre_ids": [
      18,
      35,
      80
    ],
    "overview": "Sang-hyun is always struggling from debt, and Dong-soo works at a baby box facility. On a rainy night, they steal the baby Woo-sung, who was left in the baby box, to sell him at a good price. Meanwhile, detectives were watching, and they quietly track them down to capture the crucial evidence.",
    "release_date": "2022-06-08"
  },
  {
    "title": "Kiss Kiss Bang Bang",
    "vote_average": 7.183,
    "vote_count": 2515,
    "poster_path": "/aWfjIkpENFX6Uw82pET7EQ6jnrd.jpg",
    "genre_ids": [
      35,
      80,
      9648
    ],
    "overview": "A petty thief posing as an actor is brought to Los Angeles for an unlikely audition and finds himself in the middle of a murder investigation along with his high school dream girl and a detective who's been training him for his upcoming role...",
    "release_date": "2005-09-05"
  },
  {
    "title": "The Talented Mr. Ripley",
    "vote_average": 7.183,
    "vote_count": 3354,
    "poster_path": "/6ojHgqtIR41O2qLKa7LFUVj0cZa.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "Tom Ripley is a calculating young man who believes it's better to be a fake somebody than a real nobody. Opportunity knocks in the form of a wealthy U.S. shipbuilder who hires Tom to travel to Italy to bring back his playboy son, Dickie. Ripley worms his way into the idyllic lives of Dickie and his girlfriend, plunging into a daring scheme of duplicity, lies and murder.",
    "release_date": "1999-12-25"
  },
  {
    "title": "Polytechnique",
    "vote_average": 7.181,
    "vote_count": 566,
    "poster_path": "/k0xmtct9cSseksuFKMSXxM8hfni.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A dramatization of the Montreal Massacre of 1989 where several female engineering students were murdered by an unstable misogynist.",
    "release_date": "2009-02-06"
  },
  {
    "title": "Felon",
    "vote_average": 7.18,
    "vote_count": 825,
    "poster_path": "/1eYGh6DETJFXQt5PWjV8lp8YZvx.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A family man convicted of killing an intruder must cope with life afterward in the violent penal system.",
    "release_date": "2008-07-17"
  },
  {
    "title": "Set It Off",
    "vote_average": 7.18,
    "vote_count": 320,
    "poster_path": "/wpiARyUqTfabzakAXHMIUY6Tl1A.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Four inner-city Black women, determined to end their constant struggle, decide to live by one rule — get what you want or die trying. So the four women take back their lives and take out some banks in the process.",
    "release_date": "1996-11-06"
  },
  {
    "title": "Pusher 3",
    "vote_average": 7.2,
    "vote_count": 327,
    "poster_path": "/8E2LGgDRI8N6P3u0ng10cXfyLPu.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Milo is aging, he is planning his daughter's 25th birthday, and his shipment of heroin turns out to be 10,000 pills of ecstasy. When Milo tries to sell the pills anyway, all Hell breaks loose and his only chance is to ask for help from his ex-henchman and old friend Radovan.",
    "release_date": "2005-08-22"
  },
  {
    "title": "The Purity of Vengeance",
    "vote_average": 7.172,
    "vote_count": 442,
    "poster_path": "/uTdaeGpznkLfyhAzLlrdssD621R.jpg",
    "genre_ids": [
      80,
      53,
      9648,
      18
    ],
    "overview": "Copenhagen, 2018. A frightening discovery is made in an old apartment. The subsequent investigation of Department Q leads them to an infamous institution for girls that was suddenly closed in the early sixties.",
    "release_date": "2018-10-04"
  },
  {
    "title": "Fast X",
    "vote_average": 7.2,
    "vote_count": 4685,
    "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    "release_date": "2023-05-17"
  },
  {
    "title": "Wall Street",
    "vote_average": 7.171,
    "vote_count": 1898,
    "poster_path": "/2tQYq9ntzn2dEwDIGLBSipYPenv.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "A young and impatient stockbroker is willing to do anything to get to the top, including trading on illegal inside information taken through a ruthless and greedy corporate raider whom takes the youth under his wing.",
    "release_date": "1987-12-10"
  },
  {
    "title": "Queen & Slim",
    "vote_average": 7.166,
    "vote_count": 641,
    "poster_path": "/qfIJOmsiBcum6EGosiy5gTF6ihk.jpg",
    "genre_ids": [
      18,
      10749,
      80
    ],
    "overview": "While on a forgettable first date together in Ohio, a black man and a black woman are pulled over for a minor traffic infraction. The situation escalates, with sudden and tragic results.",
    "release_date": "2019-11-27"
  },
  {
    "title": "A Simple Plan",
    "vote_average": 7.166,
    "vote_count": 821,
    "poster_path": "/wO2gH7DMqpMeHlj5QmDhW4IkgAr.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Captivated by the lure of sudden wealth, the quiet rural lives of two brothers erupt into conflicts of greed, paranoia and distrust when over $4 million in cash is discovered at the remote site of a downed small airplane. Their simple plan to retain the money while avoiding detection opens a Pandora's box when the fear of getting caught triggers panicked behavior and leads to virulent consequences.",
    "release_date": "1998-12-11"
  },
  {
    "title": "A History of Violence",
    "vote_average": 7.166,
    "vote_count": 2973,
    "poster_path": "/A26rcvipOqptVs7i5uRmKicXRxE.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "An average family is thrust into the spotlight after the father commits a seemingly self-defense murder at his diner.",
    "release_date": "2005-09-23"
  },
  {
    "title": "Marnie",
    "vote_average": 7.157,
    "vote_count": 1040,
    "poster_path": "/nRRy4VO2A3Py7wiZBPz11PAlogp.jpg",
    "genre_ids": [
      53,
      9648,
      18,
      10749,
      80
    ],
    "overview": "Marnie is a thief, a liar, and a cheat. When her new boss, Mark Rutland, catches on to her routine kleptomania, she finds herself being blackmailed.",
    "release_date": "1964-07-17"
  },
  {
    "title": "November",
    "vote_average": 7.158,
    "vote_count": 616,
    "poster_path": "/A5wae5M81jLTuv3WbCJfORxapRA.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "In November 2015, a series of unprecedented and deadly attacks hits Paris. The anti-terrorist police led by Heloise and her chief commander Fred - face an unprecedented level of pressure: in a race against the clock, they must find the perpetrators of the attacks as quickly as possible before they can strike again, travelling across Europe and beyond in one of the biggest manhunts in history.",
    "release_date": "2022-10-05"
  },
  {
    "title": "Bedevilled",
    "vote_average": 7.155,
    "vote_count": 370,
    "poster_path": "/3ZgFJY1kje1XhXPvC8UtRKA2tX.jpg",
    "genre_ids": [
      53,
      80,
      18,
      27
    ],
    "overview": "A woman subject to mental, physical, and sexual abuse on a remote island seeks a way out.",
    "release_date": "2010-08-19"
  },
  {
    "title": "La Chèvre",
    "vote_average": 7.153,
    "vote_count": 616,
    "poster_path": "/mgLYXSwF9I0kttCpkJE47xIqYln.jpg",
    "genre_ids": [
      35,
      80,
      12
    ],
    "overview": "When the boss' unlucky daughter is missing in South America, Campana is sent to watch the boss' most unlucky employee who is sent as a private detective in hopes he can duplicate the daughter's mistakes.",
    "release_date": "1981-12-09"
  },
  {
    "title": "Batman: Hush",
    "vote_average": 7.152,
    "vote_count": 808,
    "poster_path": "/eiVQORVyVuNNZHPAELuWtlXoQsD.jpg",
    "genre_ids": [
      28,
      16,
      80,
      9648
    ],
    "overview": "A mysterious new villain known only as Hush uses a gallery of villains to destroy Batman's crime-fighting career as well as Bruce Wayne's personal life, which has been further complicated by a relationship with Selina Kyle/Catwoman.",
    "release_date": "2019-07-19"
  },
  {
    "title": "Thief",
    "vote_average": 7.151,
    "vote_count": 589,
    "poster_path": "/bpjRGwfYJ71bU0hNhLIz7g3t6Oy.jpg",
    "genre_ids": [
      80,
      53,
      28
    ],
    "overview": "Frank is an expert professional safecracker, specialized in high-profile diamond heists. He plans to use his ill-gotten income to retire from crime and build a nice life for himself complete with a home, wife and kids. To accelerate the process, he signs on with a top gangster for a big score.",
    "release_date": "1981-03-27"
  },
  {
    "title": "Molly's Game",
    "vote_average": 7.15,
    "vote_count": 3483,
    "poster_path": "/in43bQ7k0ttr666IPP94IlbQbTR.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Molly Bloom, a young skier and former Olympic hopeful becomes a successful entrepreneur (and a target of an FBI investigation) when she establishes a high-stakes, international poker game.",
    "release_date": "2017-12-07"
  },
  {
    "title": "Kiss Me Deadly",
    "vote_average": 7.15,
    "vote_count": 340,
    "poster_path": "/z7me91nrpWLHY1mZOB2v20cK0zY.jpg",
    "genre_ids": [
      9648,
      53,
      80
    ],
    "overview": "One evening, Hammer gives a ride to Christina, an attractive hitchhiker on a lonely country road, who has escaped from the nearby lunatic asylum. Thugs waylay them and force his car to crash. When Hammer returns to semi-consciousness, he hears Christina being tortured until she dies. Hammer, both for vengeance and in hopes that \"something big\" is behind it all, decides to pursue the case.",
    "release_date": "1955-04-28"
  },
  {
    "title": "Uncut Gems",
    "vote_average": 7.148,
    "vote_count": 4378,
    "poster_path": "/6XN1vxHc7kUSqNWtaQKN45J5x2v.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "A charismatic New York City jeweler always on the lookout for the next big score makes a series of high-stakes bets that could lead to the windfall of a lifetime. Howard must perform a precarious high-wire act, balancing business, family, and encroaching adversaries on all sides in his relentless pursuit of the ultimate win.",
    "release_date": "2019-08-30"
  },
  {
    "title": "The House That Jack Built",
    "vote_average": 7.1,
    "vote_count": 2526,
    "poster_path": "/bMUGNkPaHOurcBK9g3XpJx3fxuO.jpg",
    "genre_ids": [
      18,
      27,
      80,
      53
    ],
    "overview": "Failed architect, engineer and vicious murderer Jack narrates the details of some of his most elaborately orchestrated crimes, each of them a towering piece of art that defines his life's work as a serial killer for twelve years.",
    "release_date": "2018-07-05"
  },
  {
    "title": "The Wrong Man",
    "vote_average": 7.147,
    "vote_count": 498,
    "poster_path": "/pO5XR2R56RAbVjdks9gGGn0fbOa.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "In 1953, an innocent man named Christopher Emmanuel \"Manny\" Balestrero is arrested after being mistaken for an armed robber.",
    "release_date": "1956-12-22"
  },
  {
    "title": "The Driver",
    "vote_average": 7.147,
    "vote_count": 390,
    "poster_path": "/zSpk2OH4MCgLGB06XDv4YUfBTv6.jpg",
    "genre_ids": [
      80,
      53,
      28
    ],
    "overview": "The Driver specializes in driving getaway cars for robberies. His exceptional talent has prevented him from being caught yet. After another successful flight from the police a self-assured detective makes it his primary goal to catch the Driver. He promises pardons to a gang if they help to convict him in a set-up robbery. The Driver seeks help from The Player to mislead the detective.",
    "release_date": "1978-06-08"
  },
  {
    "title": "Deadpool: No Good Deed",
    "vote_average": 7.145,
    "vote_count": 454,
    "poster_path": "/7p1v2CMnEd0Hb3eFi0iEA6kDAMU.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "Deadpool sees an opportunity to save the day, but it doesn't go entirely as planned.",
    "release_date": "2017-03-03"
  },
  {
    "title": "Gangs of Wasseypur - Part 1",
    "vote_average": 7.145,
    "vote_count": 335,
    "poster_path": "/yd7ltAY4j2tRrLAFpVVqh9EhahC.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "In 1970s India, Sardar Khan vows to take revenge on the man who killed his father decades earlier.",
    "release_date": "2012-06-22"
  },
  {
    "title": "The Outfit",
    "vote_average": 7.145,
    "vote_count": 854,
    "poster_path": "/lZa5EB6PVJBT5mxhgZS5ftqdAm6.jpg",
    "genre_ids": [
      80,
      18,
      53,
      9648
    ],
    "overview": "Leonard is an English tailor who used to craft suits on London’s world-famous Savile Row. After a personal tragedy, he’s ended up in Chicago, operating a small tailor shop in a rough part of town where he makes beautiful clothes for the only people around who can afford them: a family of vicious gangsters.",
    "release_date": "2022-02-25"
  },
  {
    "title": "Murder in the First",
    "vote_average": 7.144,
    "vote_count": 523,
    "poster_path": "/sU37ONoL9qUyYXUhubJSYH9tEoc.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Inspired by a true story. A petty criminal sent to Alcatraz in the 1930s is caught attempting to make an escape. As punishment he is put in solitary confinement. The maximum stay is supposed to be 19 days, but Henri spends years alone, cold and in complete darkness, only to emerge a madman and soon to be a murderer. The story follows a rookie lawyer attempting to prove that Alcatraz was to blame.",
    "release_date": "1995-01-20"
  },
  {
    "title": "Brother",
    "vote_average": 7.1,
    "vote_count": 420,
    "poster_path": "/rSRJozSafFFuiFT9XnwsE1ricHT.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A Japanese Yakuza gangster's deadly existence in his homeland gets him exiled to Los Angeles, where he is taken in by his little brother and his brother's gang.",
    "release_date": "2000-12-13"
  },
  {
    "title": "Bullitt",
    "vote_average": 7.1,
    "vote_count": 1019,
    "poster_path": "/uDg7tHvK8aFcG6DkN5eHiZAurOU.jpg",
    "genre_ids": [
      28,
      80,
      53,
      10749
    ],
    "overview": "Senator Walter Chalmers is aiming to take down mob boss Pete Ross with the help of testimony from the criminal's hothead brother Johnny, who is in protective custody in San Francisco under the watch of police lieutenant Frank Bullitt. When a pair of mob hitmen enter the scene, Bullitt follows their trail through a maze of complications and double-crosses. This thriller includes one of the most famous car chases ever filmed.",
    "release_date": "1968-10-17"
  },
  {
    "title": "Trash",
    "vote_average": 7.139,
    "vote_count": 572,
    "poster_path": "/6GJyreDWg6n1FtO2AvKaWVBqDZc.jpg",
    "genre_ids": [
      12,
      80,
      18,
      53
    ],
    "overview": "Set in Brazil, three kids who make a discovery in a garbage dump soon find themselves running from the cops and trying to right a terrible wrong.",
    "release_date": "2014-10-09"
  },
  {
    "title": "Point Break",
    "vote_average": 7.139,
    "vote_count": 3285,
    "poster_path": "/tlbERIghrQ4oofqlbF7H0K0EYnx.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "In Los Angeles, a gang of bank robbers who call themselves The Ex-Presidents commit their crimes while wearing masks of Reagan, Carter, Nixon and Johnson. Believing that the members of the gang could be surfers, the F.B.I. sends young agent Johnny Utah to the beach undercover to mix with the surfers and gather information.",
    "release_date": "1991-01-31"
  },
  {
    "title": "Magnum Force",
    "vote_average": 7.137,
    "vote_count": 971,
    "poster_path": "/cmQuj67qbijnC9dAQZf8x4X1KEr.jpg",
    "genre_ids": [
      18,
      80,
      28
    ],
    "overview": "\"Dirty\" Harry Callahan is a San Francisco Police Inspector on the trail of a group of rogue cops who have taken justice into their own hands. When shady characters are murdered one after another in grisly fashion, only Dirty Harry can stop them.",
    "release_date": "1973-12-13"
  },
  {
    "title": "Sherlock Holmes: A Game of Shadows",
    "vote_average": 7.136,
    "vote_count": 9899,
    "poster_path": "/y1MYZkwhZK6L0Jy4YMuPktzDOfn.jpg",
    "genre_ids": [
      12,
      28,
      80,
      9648
    ],
    "overview": "There is a new criminal mastermind at large (Professor Moriarty) and not only is he Holmes’ intellectual equal, but his capacity for evil and lack of conscience may give him an advantage over the  detective.",
    "release_date": "2011-11-22"
  },
  {
    "title": "Take the Money and Run",
    "vote_average": 7.134,
    "vote_count": 700,
    "poster_path": "/dT7cKFxsuHzSnDBxKeP5acoIpWZ.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Virgil Starkwell is intent on becoming a notorious bank robber. Unfortunately for Virgil and his not-so-budding career, he is completely incompetent.",
    "release_date": "1969-08-18"
  },
  {
    "title": "Bad Boys for Life",
    "vote_average": 7.133,
    "vote_count": 7660,
    "poster_path": "/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
    "genre_ids": [
      53,
      28,
      80
    ],
    "overview": "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
    "release_date": "2020-01-15"
  },
  {
    "title": "The Exorcism of God",
    "vote_average": 7.131,
    "vote_count": 947,
    "poster_path": "/hangTmbxpSV4gpHG7MgSlCWSSFa.jpg",
    "genre_ids": [
      27,
      80,
      18
    ],
    "overview": "An American priest working in Mexico is considered a saint by many local parishioners. However, due to a botched exorcism, he carries a secret that’s eating him alive until he gets an opportunity to face his demon one final time.",
    "release_date": "2022-03-11"
  },
  {
    "title": "New Police Story",
    "vote_average": 7.129,
    "vote_count": 659,
    "poster_path": "/ece4Ivxpt6GKVQaed9xQjKrUwun.jpg",
    "genre_ids": [
      28,
      53,
      80,
      18
    ],
    "overview": "Sent into a drunken tailspin when his entire unit is killed by a gang of thrill-seeking punks, disgraced Hong Kong police inspector Wing needs help from his new rookie partner, with a troubled past of his own, to climb out of the bottle and track down the gang and its ruthless leader.",
    "release_date": "2004-09-23"
  },
  {
    "title": "OSS 117: Lost in Rio",
    "vote_average": 7.128,
    "vote_count": 1348,
    "poster_path": "/rhv06T3gTFOShIVkQ0UipZFIyDw.jpg",
    "genre_ids": [
      80,
      28,
      35
    ],
    "overview": "French top secret agent, Hubert Bonisseur de la Bath, is sent to Rio to buy microfilms from a running nazi. To do so, he has to team up with Mossad secret services.",
    "release_date": "2009-04-15"
  },
  {
    "title": "The Visitor",
    "vote_average": 7.127,
    "vote_count": 409,
    "poster_path": "/9XRRSD7swlYrGBhZ8vOR2yngIKZ.jpg",
    "genre_ids": [
      80,
      18,
      10402
    ],
    "overview": "A college professor travels to New York City to attend a conference and finds a young couple living in his apartment.",
    "release_date": "2007-09-07"
  },
  {
    "title": "The Connection",
    "vote_average": 7.123,
    "vote_count": 785,
    "poster_path": "/4IAmHRGH8JRFuL4RYLvzOKNSBuz.jpg",
    "genre_ids": [
      53,
      80,
      28
    ],
    "overview": "Newly transferred to the bustling port city of Marseille to assist with a crackdown on organized crime, energetic young magistrate Pierre Michel is given a rapid-fire tutorial on the ins and outs of an out-of-control drug trade. Pierre's wildly ambitious mission is to take on the French Connection, a highly organized operation that controls the city's underground heroin economy and is overseen by the notorious —and reputedly untouchable— Gaetan Zampa. Fearless, determined and willing to go the distance, Pierre plunges into an underworld world of insane danger and ruthless criminals.",
    "release_date": "2014-12-03"
  },
  {
    "title": "Kick-Ass",
    "vote_average": 7.121,
    "vote_count": 11149,
    "poster_path": "/8citjdBmjddZjlPsAHEyCKwGVvD.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "Dave Lizewski is an unnoticed high school student and comic book fan who one day decides to become a super-hero, even though he has no powers, training or meaningful reason to do so.",
    "release_date": "2010-03-22"
  },
  {
    "title": "Read My Lips",
    "vote_average": 7.122,
    "vote_count": 304,
    "poster_path": "/1YIkOan9JzbBVAQRvq5fIjHHBAP.jpg",
    "genre_ids": [
      80,
      18,
      10749,
      53
    ],
    "overview": "She is almost deaf and she lip-reads. He is an ex-convict. She wants to help him. He thinks no one can help except himself.",
    "release_date": "2001-10-17"
  },
  {
    "title": "Speed",
    "vote_average": 7.122,
    "vote_count": 5737,
    "poster_path": "/o1Zs7VaS9y2GYH9CLeWxaVLWd3x.jpg",
    "genre_ids": [
      28,
      12,
      80
    ],
    "overview": "Los Angeles SWAT cop Jack Traven is up against bomb expert Howard Payne, who's after major ransom money. First it's a rigged elevator in a very tall building. Then it's a rigged bus--if it slows, it will blow, bad enough any day, but a nightmare in LA traffic. And that's still not the end.",
    "release_date": "1994-06-09"
  },
  {
    "title": "F9",
    "vote_average": 7.1,
    "vote_count": 6808,
    "poster_path": "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
    "genre_ids": [
      28,
      12,
      80
    ],
    "overview": "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
    "release_date": "2021-05-19"
  },
  {
    "title": "To Live and Die in L.A.",
    "vote_average": 7.121,
    "vote_count": 586,
    "poster_path": "/2iW3pSihBIhXjnBQmUJ0mAiZbB5.jpg",
    "genre_ids": [
      80,
      53,
      28
    ],
    "overview": "A fearless Secret Service agent will stop at nothing to bring down the counterfeiter who killed his partner.",
    "release_date": "1985-11-01"
  },
  {
    "title": "Bullets Over Broadway",
    "vote_average": 7.12,
    "vote_count": 556,
    "poster_path": "/8nEgDgNg59w2reCfgmnNKGMpxIr.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "After young playwright, David Shayne obtains funding for his play from gangster Nick Valenti, Nick's girlfriend Olive miraculously lands the role of a psychiatrist—but not only is she a bimbo who could never pass for a psychiatrist—she's a dreadful actress. David puts up with the leading man who is a compulsive eater, the grand dame who wants her part jazzed up, and Olive's interfering hitman/bodyguard—but, eventually he must decide whether art or life is more important.",
    "release_date": "1994-10-14"
  },
  {
    "title": "The Long Good Friday",
    "vote_average": 7.118,
    "vote_count": 309,
    "poster_path": "/pXS667me5Jfoj1b0xuxgjEMKunF.jpg",
    "genre_ids": [
      9648,
      80,
      53,
      18
    ],
    "overview": "In the late 1970s, Cockney crime boss Harold Shand, a gangster trying to become a legitimate property mogul, has big plans to get the American Mafia to bankroll his transformation of a derelict area of London into the possible venue for a future Olympic Games. However, a series of bombings targets his empire on the very weekend the Americans are in town. Shand is convinced there is a traitor in his organization, and sets out to eliminate the rat in typically ruthless fashion.",
    "release_date": "1980-11-01"
  },
  {
    "title": "United 93",
    "vote_average": 7.118,
    "vote_count": 1381,
    "poster_path": "/aahr1uIPrEej8q4baE1RYXOXwFB.jpg",
    "genre_ids": [
      18,
      36,
      80,
      53,
      28
    ],
    "overview": "A real-time account of the events on United Flight 93, one of the planes hijacked on 9/11 that crashed near Shanksville, Pennsylvania when passengers foiled the terrorist plot.",
    "release_date": "2006-04-28"
  },
  {
    "title": "Hustle & Flow",
    "vote_average": 7.115,
    "vote_count": 347,
    "poster_path": "/9skOqw9sld2MKKqkKKU78e0Jw7W.jpg",
    "genre_ids": [
      80,
      18,
      10402
    ],
    "overview": "With help from his friends, a Memphis pimp in a mid-life crisis attempts to become a successful hip-hop emcee.",
    "release_date": "2005-07-22"
  },
  {
    "title": "Bullhead",
    "vote_average": 7.114,
    "vote_count": 316,
    "poster_path": "/j9XzaLtFAJIozDH4MQwxaR2aDvJ.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "A young  cattle farmer is approached by an unscrupulous veterinarian to make a shady deal with a notorious beef trader.",
    "release_date": "2011-02-02"
  },
  {
    "title": "I'm Not Scared",
    "vote_average": 7.114,
    "vote_count": 913,
    "poster_path": "/vTf4qR0OSuV4qBT8As4QoWxSJSq.jpg",
    "genre_ids": [
      9648,
      18,
      53,
      80
    ],
    "overview": "While playing outside one day, nine-year-old Michele discovers Filippo, who is chained to the ground at the bottom of a hole. Michele witnesses town baddie Felice nearby and suspects something bad is happening. Michele is unsure whom he should tell about his discovery, eventually spilling the beans to his closest friend. Michele's parents learn of his discovery and warn him to forget what he saw",
    "release_date": "2003-02-08"
  },
  {
    "title": "The Nice Guys",
    "vote_average": 7.113,
    "vote_count": 7398,
    "poster_path": "/uXdQztKoAtx7UU3RvqeF52KsoQP.jpg",
    "genre_ids": [
      35,
      80,
      28
    ],
    "overview": "A private eye investigates the apparent suicide of a fading porn star in 1970s Los Angeles and uncovers a conspiracy.",
    "release_date": "2016-05-15"
  },
  {
    "title": "Dead Man's Shoes",
    "vote_average": 7.109,
    "vote_count": 506,
    "poster_path": "/78TBKzEZ2cNdeLNrgcPiJTggiNd.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "A soldier returns to his small town and exacts a deadly revenge on the thugs who tormented his disabled brother while he was away.",
    "release_date": "2004-09-29"
  },
  {
    "title": "John Q",
    "vote_average": 7.109,
    "vote_count": 2239,
    "poster_path": "/xEE91LvXiqgs7Hmdl44LCzHtFf6.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "John Quincy Archibald is a father and husband whose son is diagnosed with an enlarged heart and then finds out he cannot receive a transplant because HMO insurance will not cover it. Therefore, he decides to take a hospital full of patients hostage until the hospital puts his son's name on the donor's list.",
    "release_date": "2002-02-15"
  },
  {
    "title": "Chicago",
    "vote_average": 7.108,
    "vote_count": 2435,
    "poster_path": "/v1Sg3GuHDz9uhrKqYozOeCMLSpj.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "Murderesses Velma Kelly and Roxie Hart find themselves on death row together and fight for the fame that will keep them from the gallows in 1920s Chicago.",
    "release_date": "2002-12-10"
  },
  {
    "title": "High Heels",
    "vote_average": 7.107,
    "vote_count": 377,
    "poster_path": "/xUpMr3ma8XMpdDhM27s4EuFxdyC.jpg",
    "genre_ids": [
      18,
      35,
      80
    ],
    "overview": "After being estranged for 15 years, flamboyant actress Becky del Paramo re-enters her daughter Rebeca's life when she comes to perform a concert.  Rebeca, she finds, is now married to one of Becky's ex-lovers, Manuel. The mother and daughter begin making up for lost time, when suddenly, a murder occurs...",
    "release_date": "1991-10-23"
  },
  {
    "title": "Shooter",
    "vote_average": 7.107,
    "vote_count": 4511,
    "poster_path": "/tyRP8JedrDkPPvH3JxKYsdP2esu.jpg",
    "genre_ids": [
      28,
      18,
      9648,
      53,
      80
    ],
    "overview": "A top Marine sniper, Bob Lee Swagger, leaves the military after a mission goes horribly awry and disappears, living in seclusion. He is coaxed back into service after a high-profile government official convinces him to help thwart a plot to kill the President of the United States. Ultimately double-crossed and framed for the attempt, Swagger becomes the target of a nationwide manhunt. He goes on the run to track the real killer and find out who exactly set him up, and why, eventually seeking revenge against some of the most powerful and corrupt leaders in the free world.",
    "release_date": "2007-03-22"
  },
  {
    "title": "Before the Devil Knows You're Dead",
    "vote_average": 7.106,
    "vote_count": 1365,
    "poster_path": "/egIP0s1ws6fGHqTsVqVNcaEa5i2.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "When two brothers organize the robbery of their parents' jewelry store, the job goes horribly wrong, triggering a series of events that send them and their family hurtling towards a shattering climax.",
    "release_date": "2007-09-26"
  },
  {
    "title": "Angst",
    "vote_average": 7.105,
    "vote_count": 311,
    "poster_path": "/biC5etj540m9qNj3w9zETQZpsN6.jpg",
    "genre_ids": [
      53,
      80,
      27
    ],
    "overview": "A killer is released from prison and breaks into a remote home to kill a woman, her handicapped son and her pretty daughter.",
    "release_date": "1983-01-01"
  },
  {
    "title": "Frenzy",
    "vote_average": 7.1,
    "vote_count": 830,
    "poster_path": "/4SFvqrlSigAt9tnhXFSMyKeJWQk.jpg",
    "genre_ids": [
      80,
      53,
      27
    ],
    "overview": "After a serial killer strangles several women with a necktie, London police identify a suspect—but he claims vehemently to be the wrong man.",
    "release_date": "1972-05-25"
  },
  {
    "title": "Dirty Rotten Scoundrels",
    "vote_average": 7.1,
    "vote_count": 782,
    "poster_path": "/3176xH21fSetstKpEtAD1giHbyT.jpg",
    "genre_ids": [
      80,
      35
    ],
    "overview": "Two con men try to settle their rivalry by betting on who can be the first to swindle a young American heiress out of $50,000.",
    "release_date": "1988-12-14"
  },
  {
    "title": "Snowden",
    "vote_average": 7.1,
    "vote_count": 4140,
    "poster_path": "/yfK7zxNL63VWfluFuoUaJj5PdNw.jpg",
    "genre_ids": [
      18,
      36,
      80,
      53
    ],
    "overview": "CIA employee Edward Snowden leaks thousands of classified documents to the press.",
    "release_date": "2016-09-15"
  },
  {
    "title": "22 July",
    "vote_average": 7.099,
    "vote_count": 1114,
    "poster_path": "/rd940KzuIZwbdOvOUF7XDTzn8te.jpg",
    "genre_ids": [
      36,
      18,
      53,
      80
    ],
    "overview": "On 22 July 2011, neo-Nazi terrorist Anders Behring Breivik murdered 77 young people attending a Labour Party Youth Camp on Utøya Island outside of Oslo. This three-part story focuses on the survivors, the political leadership of Norway, and the lawyers involved.",
    "release_date": "2018-10-04"
  },
  {
    "title": "Scream VI",
    "vote_average": 7.098,
    "vote_count": 2179,
    "poster_path": "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
    "genre_ids": [
      27,
      80,
      53
    ],
    "overview": "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
    "release_date": "2023-03-08"
  },
  {
    "title": "Drugstore Cowboy",
    "vote_average": 7.097,
    "vote_count": 481,
    "poster_path": "/2bQXK39axyedUL6DE1pzdMYgAw1.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Portland, Oregon, 1971. Bob Hughes is the charismatic leader of a peculiar quartet, formed by his wife, Dianne, and another couple, Rick and Nadine, who skillfully steal from drugstores and hospital medicine cabinets in order to appease their insatiable need for drugs. But neither fun nor luck last forever.",
    "release_date": "1989-10-20"
  },
  {
    "title": "At the End of the Tunnel",
    "vote_average": 7.095,
    "vote_count": 365,
    "poster_path": "/z6qrI5irqqDS7Pt1WjNVe6vbYHG.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "A paraplegic computer engineer that moves in a wheelchair and works in his basement starts hearing noises and voices of bank-robbers.",
    "release_date": "2016-04-21"
  },
  {
    "title": "A Hard Day",
    "vote_average": 7.1,
    "vote_count": 406,
    "poster_path": "/aIkc5DwGPZIdImSudkUDQ799rq3.jpg",
    "genre_ids": [
      80,
      53,
      9648
    ],
    "overview": "After trying to cover up a car accident that left a man dead, a crooked homicide detective is stalked by a mysterious man claiming to have witnessed the event.",
    "release_date": "2014-05-29"
  },
  {
    "title": "SLC Punk",
    "vote_average": 7.094,
    "vote_count": 323,
    "poster_path": "/7u3IZPuIOPjICi55K7cJgzV3e3B.jpg",
    "genre_ids": [
      35,
      18,
      80,
      10402
    ],
    "overview": "Two former geeks become 1980s punks, then party and go to concerts while deciding what to do with their lives.",
    "release_date": "1998-09-24"
  },
  {
    "title": "Mean Streets",
    "vote_average": 7.094,
    "vote_count": 1935,
    "poster_path": "/9msfwOeGc9uL1iRRTBdEf15XonC.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A small-time hood must choose from among love, friendship and the chance to rise within the mob.",
    "release_date": "1973-10-14"
  },
  {
    "title": "Boy A",
    "vote_average": 7.091,
    "vote_count": 422,
    "poster_path": "/dfX5bbDmOpqiMge49W5wjUPrUz0.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Freed after a lengthy term in a juvenile detention center, convicted child killer Jack Burridge (Andrew Garfield) finds work as a deliveryman and begins dating co-worker Michelle (Katie Lyons). While out on the road one day, the young Englishman notices a distressed child, and, after reuniting the girl with her family, becomes a local celebrity. But, when a local newspaper unearths his past, Jack must cope with the anger of citizens who fear for the safety of their children.",
    "release_date": "2007-10-28"
  },
  {
    "title": "I Confess",
    "vote_average": 7.09,
    "vote_count": 398,
    "poster_path": "/5IYyJetEctAypFYIffqx55PXTPT.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "Unable, due to the seal of the confessional, to be forthcoming with information that would serve to clear himself during a murder investigation, a priest becomes the prime suspect.",
    "release_date": "1953-02-18"
  },
  {
    "title": "Ong-Bak",
    "vote_average": 7.089,
    "vote_count": 1577,
    "poster_path": "/oagqAwp48dMPoCT94yDJUDOCVPi.jpg",
    "genre_ids": [
      28,
      53,
      80,
      12
    ],
    "overview": "When the head of a statue sacred to a village is stolen, a young martial artist goes to the big city and finds himself taking on the underworld to retrieve it.",
    "release_date": "2003-01-21"
  },
  {
    "title": "The Enforcer",
    "vote_average": 7.081,
    "vote_count": 360,
    "poster_path": "/pXC8JJbfnRWtbD8i2yKFqqWEO4X.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "A noir thriller set in Miami, the film follows an enforcer who discovers his femme fatale boss has branched out into cyber sex trafficking, putting a young runaway he’s befriended at risk. He sacrifices everything to save the young girl from the deadly organization he’s spent his life building.",
    "release_date": "2022-09-22"
  },
  {
    "title": "The Protector",
    "vote_average": 7.087,
    "vote_count": 797,
    "poster_path": "/uKE9BxgtT5g2pE3ZKC7MnzsAbTZ.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "A young fighter named Kham must go to Australia to retrieve his stolen elephant. With the help of a Thai-born Australian detective, Kham must take on all comers, including a gang led by an evil woman and her two deadly bodyguards.",
    "release_date": "2005-08-11"
  },
  {
    "title": "Elephant",
    "vote_average": 7.087,
    "vote_count": 1769,
    "poster_path": "/pbdm3Z45fwgcfPndm4wmQAhDWjN.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Several ordinary high school students go through their daily routine as two others prepare for something more malevolent.",
    "release_date": "2003-09-20"
  },
  {
    "title": "Dope",
    "vote_average": 7.084,
    "vote_count": 1408,
    "poster_path": "/n6u00imN7AX2NiyWUc5kTgHXmEf.jpg",
    "genre_ids": [
      80,
      18,
      35
    ],
    "overview": "Malcolm is carefully surviving life in a tough neighborhood in Los Angeles while juggling college applications, academic interviews, and the SAT. A chance invitation to an underground party leads him into an adventure that could allow him to go from being a geek, to being dope, to ultimately being himself.",
    "release_date": "2015-06-19"
  },
  {
    "title": "Witness",
    "vote_average": 7.08,
    "vote_count": 1523,
    "poster_path": "/cRcZLT75uQG2NHNAkZ3v8E9IpPs.jpg",
    "genre_ids": [
      80,
      18,
      10749,
      53
    ],
    "overview": "A sheltered Amish child is the sole witness of a brutal murder in a restroom at a Philadelphia train station, and he must be protected.  The assignment falls to a taciturn detective who goes undercover in a Pennsylvania Dutch community. On the farm, he slowly assimilates despite his urban grit and forges a romantic bond with the child's beautiful mother.",
    "release_date": "1985-02-08"
  },
  {
    "title": "The Getaway",
    "vote_average": 7.08,
    "vote_count": 509,
    "poster_path": "/8SvnGUJsr16zUJ2CN7ONX1ZWtZ8.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "A recently released ex-convict and his loyal wife go on the run after a heist goes wrong.",
    "release_date": "1972-09-20"
  },
  {
    "title": "Bring Me the Head of Alfredo Garcia",
    "vote_average": 7.075,
    "vote_count": 334,
    "poster_path": "/gRWVf3InNlIlFT3WB9MnFdOwcYQ.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "An American bartender and his prostitute girlfriend go on a road trip through the Mexican underworld to collect a $1 million bounty on the head of a dead gigolo.",
    "release_date": "1974-08-01"
  },
  {
    "title": "The Keeper of Lost Causes",
    "vote_average": 7.075,
    "vote_count": 698,
    "poster_path": "/cqf51OvCEkk5cTQV1hldHxU27ix.jpg",
    "genre_ids": [
      53,
      9648,
      80
    ],
    "overview": "Denmark, 2013. Police officers Carl Mørck and Hafez el-Assad, sole members of Department Q, which is focused on closing cold cases, investigate the disappearance of politician Merete Lynggaard, vanished when she and her brother were traveling aboard a ferry five years ago.",
    "release_date": "2013-10-03"
  },
  {
    "title": "The Next Three Days",
    "vote_average": 7.074,
    "vote_count": 2693,
    "poster_path": "/wBaRZ3aHa7qoYTSY0ONbXrXYk4B.jpg",
    "genre_ids": [
      10749,
      18,
      53,
      80
    ],
    "overview": "A married couple's life is turned upside down when the wife is accused of murdering her boss. Her husband John would spend the next few years trying to get her released, but there's no evidence that negates the evidence against her. When the strain of being separated from her husband and son gets to her, John decides to find a way to break her out.",
    "release_date": "2010-11-18"
  },
  {
    "title": "The Girl Who Kicked the Hornet's Nest",
    "vote_average": 7.074,
    "vote_count": 1264,
    "poster_path": "/92byRQBuuiLcfKnBi5NOuipSgV8.jpg",
    "genre_ids": [
      28,
      53,
      80,
      9648
    ],
    "overview": "After taking a bullet to the head, Salander is under close supervision in a hospital and is set to face trial for attempted murder on her eventual release. With the help of journalist Mikael Blomkvist and his researchers at Millennium magazine, Salander must prove her innocence. In doing this she plays against powerful enemies and her own past.",
    "release_date": "2009-11-27"
  },
  {
    "title": "The Negotiator",
    "vote_average": 7.074,
    "vote_count": 1918,
    "poster_path": "/moiaZupHkPNd4ryCRqaocjKPeId.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "The police try to arrest expert hostage negotiator Danny Roman, who insists he's being framed for his partner's murder in what he believes is an elaborate conspiracy. Thinking there's evidence in the Internal Affairs offices that might clear him, he takes everyone in the office hostage and demands that another well-known negotiator be brought in to handle the situation and secretly investigate the conspiracy.",
    "release_date": "1998-07-29"
  },
  {
    "title": "The Accountant",
    "vote_average": 7.072,
    "vote_count": 5741,
    "poster_path": "/oHMRhVytkVApLyCNML659LQZiQ1.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "overview": "As a math savant uncooks the books for a new client, the Treasury Department closes in on his activities and the body count starts to rise.",
    "release_date": "2016-10-13"
  },
  {
    "title": "7 Prisoners",
    "vote_average": 7.068,
    "vote_count": 329,
    "poster_path": "/5svMKCGnR6Yvj8wxldvDvgUi0Jk.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "An impoverished teen seeking to escape the clutches of a human trafficker must weigh living up to his moral code against his struggle to survive.",
    "release_date": "2021-10-22"
  },
  {
    "title": "The Legend of Al, John and Jack",
    "vote_average": 7.065,
    "vote_count": 1101,
    "poster_path": "/4xnYGJ8CoFFE5EEC23rL5L7kwfE.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Hapless Depression-era gangsters Al, John and Jack discover their boss wants to get rid of them and come up with a plan to sell him to the FBI, but Al's short-term memory loss could be a problem...",
    "release_date": "2002-12-13"
  },
  {
    "title": "Natural Born Killers",
    "vote_average": 7.064,
    "vote_count": 3165,
    "poster_path": "/fEKZwT91gxvkAoyPgpNXo8W5fu0.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "overview": "Two victims of traumatized childhoods become lovers and serial murderers irresponsibly glorified by the mass media.",
    "release_date": "1994-08-26"
  },
  {
    "title": "Sharper",
    "vote_average": 7.063,
    "vote_count": 397,
    "poster_path": "/tq8x5F17q95T1j0up5rpzXFAylN.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "A small, wealthy family in New York City gets progressively torn apart by secrets, lies, and the theft that orchestrates all of it.",
    "release_date": "2023-02-10"
  },
  {
    "title": "Glass Onion: A Knives Out Mystery",
    "vote_average": 7.051,
    "vote_count": 4832,
    "poster_path": "/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
    "genre_ids": [
      35,
      80,
      9648
    ],
    "overview": "World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.",
    "release_date": "2022-11-12"
  },
  {
    "title": "Patriots Day",
    "vote_average": 7.049,
    "vote_count": 2454,
    "poster_path": "/mIDxsJTrOC7NhgOo3GziiHyKfsQ.jpg",
    "genre_ids": [
      28,
      80,
      18,
      36,
      53
    ],
    "overview": "In the aftermath of an unspeakable act of terror, Police Sergeant Tommy Saunders joins courageous survivors, first responders and investigators in a race against the clock to hunt down the Boston Marathon bombers before they strike again.",
    "release_date": "2016-12-12"
  },
  {
    "title": "Dawn of the Dead",
    "vote_average": 7.049,
    "vote_count": 3699,
    "poster_path": "/ttquyxStEEctzghtA2f4PUGprDr.jpg",
    "genre_ids": [
      27,
      28,
      80,
      18,
      14
    ],
    "overview": "A group of survivors take refuge in a shopping mall after the world is taken over by aggressive, flesh-eating zombies.",
    "release_date": "2004-03-19"
  },
  {
    "title": "Raising Arizona",
    "vote_average": 7.048,
    "vote_count": 1914,
    "poster_path": "/tPX13Qpq1SjqPzzMIaFtL8G4lYA.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "When a childless couple of an ex-con and an ex-cop decide to help themselves to one of another family's quintuplets, their lives become more complicated than they anticipated.",
    "release_date": "1987-03-01"
  },
  {
    "title": "Bad Lieutenant",
    "vote_average": 7.044,
    "vote_count": 778,
    "poster_path": "/mVJ2mXykqq3t2v1nuouf1P10g0d.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "While investigating a young nun's rape, a corrupt New York City police detective, with a serious drug and gambling addiction, tries to change his ways and find forgiveness.",
    "release_date": "1992-11-20"
  },
  {
    "title": "The Proposition",
    "vote_average": 7.043,
    "vote_count": 581,
    "poster_path": "/p7VtceDSgEsbpaxaU8NMiYStx1H.jpg",
    "genre_ids": [
      28,
      12,
      80,
      18,
      53,
      37
    ],
    "overview": "In 1880s Australia, a lawman offers renegade Charlie Burns a difficult choice. In order to save his younger brother from the gallows, Charlie must hunt down and kill his older brother, who is wanted for rape and murder. Venturing into one of the Outback's most inhospitable regions, Charlie faces a terrible moral dilemma that can end only in violence.",
    "release_date": "2005-10-06"
  },
  {
    "title": "The Night of the 12th",
    "vote_average": 7.035,
    "vote_count": 482,
    "poster_path": "/9IHnpje2aZ6TI6B385BqGfhcMuB.jpg",
    "genre_ids": [
      80,
      9648,
      18
    ],
    "overview": "Young and ambitious Captain Vivés has just been appointed group leader at the Grenoble Criminal Squad when Clara's murder case lands on his desk. Vivés and his team investigate Clara's complex life and relations, but what starts as a professional and methodical immersion into the victim's life soon turns into a haunting obsession.",
    "release_date": "2022-07-13"
  },
  {
    "title": "Traffic",
    "vote_average": 7.041,
    "vote_count": 1981,
    "poster_path": "/jbccmnqE4oAPI67bApgt2JiRPz8.jpg",
    "genre_ids": [
      53,
      18,
      80
    ],
    "overview": "An exploration of the United States of America's war on drugs from multiple perspectives. For the new head of the Office of National Drug Control Policy, the war becomes personal when he discovers his well-educated daughter is abusing cocaine within their comfortable suburban home. In Mexico, a flawed, but noble policeman agrees to testify against a powerful general in league with a cartel, and in San Diego, a drug kingpin's sheltered trophy wife must learn her husband's ruthless business after he is arrested, endangering her luxurious lifestyle.",
    "release_date": "2000-12-27"
  },
  {
    "title": "Brubaker",
    "vote_average": 7.042,
    "vote_count": 424,
    "poster_path": "/zd8clKupTMTOtO2fq4i6Z4YBhXx.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "The new warden of a small prison farm in Arkansas tries to clean it up of corruption after initially posing as an inmate.",
    "release_date": "1980-06-20"
  },
  {
    "title": "Lawless",
    "vote_average": 7.041,
    "vote_count": 2883,
    "poster_path": "/Ahtzwts22ayviD3LEVslfL4nRWB.jpg",
    "genre_ids": [
      80,
      18,
      37
    ],
    "overview": "In 1931, the Bondurant brothers of Franklin County, Virginia, run a multipurpose backwoods establishment that hides their true business — bootlegging. Middle brother Forrest is the brain of the operation; older Howard is the brawn, and younger Jack, the lookout. Though the local police have taken bribes and left the brothers alone, a violent war erupts when a sadistic lawman from Chicago arrives and tries to shut down the Bondurants operation.",
    "release_date": "2012-08-29"
  },
  {
    "title": "The Postman Always Rings Twice",
    "vote_average": 7.041,
    "vote_count": 308,
    "poster_path": "/3qdX948vUXi4q8raUUOHHlbP9q8.jpg",
    "genre_ids": [
      18,
      10749,
      80,
      53
    ],
    "overview": "A married woman and a drifter fall in love, then plot to murder her husband.",
    "release_date": "1946-05-02"
  },
  {
    "title": "Nerve",
    "vote_average": 7.04,
    "vote_count": 6606,
    "poster_path": "/qmSpHC0CSNyNll9WhlwWYuwoQ28.jpg",
    "genre_ids": [
      9648,
      12,
      80
    ],
    "overview": "Industrious high school senior Vee Delmonico has had it with living life on the sidelines. When pressured by friends to join the popular online game Nerve, Vee decides to sign up for just one dare in what seems like harmless fun. But as she finds herself caught up in the thrill of the adrenaline-fueled competition partnered with a mysterious stranger, the game begins to take a sinister turn with increasingly dangerous acts, leading her into a high stakes finale that will determine her entire future.",
    "release_date": "2016-06-27"
  },
  {
    "title": "Marshland",
    "vote_average": 7.04,
    "vote_count": 906,
    "poster_path": "/moQkaslWyRgBxwp5KxljMyDKyd3.jpg",
    "genre_ids": [
      53,
      80,
      9648
    ],
    "overview": "The Spanish deep South, 1980. A series of brutal murders of adolescent girls in a remote and forgotten town bring together two disparate characters - both detectives in the homicide division - to investigate the cases. With deep divisions in their ideology, detectives Juan and Pedro must put aside their differences if they are to successfully hunt down a killer who for years has terrorized a community in the shadow of a general disregard for women rooted in a misogynistic past.",
    "release_date": "2014-09-25"
  },
  {
    "title": "The Three Burials of Melquiades Estrada",
    "vote_average": 7.038,
    "vote_count": 541,
    "poster_path": "/uHOEb6mo45qMSJaZqbkVa7oW1Y7.jpg",
    "genre_ids": [
      12,
      80,
      18,
      9648,
      37
    ],
    "overview": "When brash Texas border officer Mike Norton wrongfully kills and buries the friend and ranch hand of Pete Perkins, the latter is reminded of a promise he made to bury his friend, Melquiades Estrada, in his Mexican home town. He kidnaps Norton and exhumes Estrada's corpse, and the odd caravan sets out on horseback for Mexico.",
    "release_date": "2005-11-17"
  },
  {
    "title": "Gridiron Gang",
    "vote_average": 7.034,
    "vote_count": 920,
    "poster_path": "/uwAlznw4yrBHbT3fPfTbSRy9UfG.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together.",
    "release_date": "2006-09-15"
  },
  {
    "title": "The Swimming Pool",
    "vote_average": 7,
    "vote_count": 439,
    "poster_path": "/7KQOEJ0LV6umRVM9xTRSmGSfvVJ.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Set in a magnificent villa near a sun-drenched St. Tropez, lovers Jean-Paul and Marianne are spending a happy, lazy summer holiday. Their only concern is to gratify their mutual passion - until the day when Marianne invites her former lover and his beautiful teenage daughter to spend a few days with them. From the first moment, a certain uneasiness and tension begin to develop between the four, which soon escalates in a dangerous love-game.",
    "release_date": "1969-01-31"
  },
  {
    "title": "Wild at Heart",
    "vote_average": 7,
    "vote_count": 1494,
    "poster_path": "/uLUFI5sJIfWrBUWB2Y1dEuyvvVy.jpg",
    "genre_ids": [
      80,
      53,
      10749
    ],
    "overview": "After serving prison time for a self-defense killing, Sailor Ripley reunites with girlfriend Lula Fortune. Lula's mother, Marietta, desperate to keep them apart, hires a hitman to kill Sailor. But he finds a whole new set of troubles when he and Bobby Peru, an old buddy who's also out to get Sailor, try to rob a store. When Sailor lands in jail yet again, the young lovers appear further than ever from the shared life they covet.",
    "release_date": "1990-08-17"
  },
  {
    "title": "Legend",
    "vote_average": 7.031,
    "vote_count": 3607,
    "poster_path": "/4shf5Alq4KWCKqrAAQe0JGJHYp5.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "Suave, charming and volatile, Reggie Kray and his unstable twin brother Ronnie start to leave their mark on the London underworld in the 1960s. Using violence to get what they want, the siblings orchestrate robberies and murders while running nightclubs and protection rackets. With police Detective Leonard \"Nipper\" Read hot on their heels, the brothers continue their rapid rise to power and achieve tabloid notoriety.",
    "release_date": "2015-09-09"
  },
  {
    "title": "Manhunter",
    "vote_average": 7.03,
    "vote_count": 1216,
    "poster_path": "/6rb24x39vV8n5301IelC8rCPJTH.jpg",
    "genre_ids": [
      80,
      27,
      53
    ],
    "overview": "FBI Agent Will Graham, who retired after catching Hannibal Lecter, returns to duty to engage in a risky cat-and-mouse game with Lecktor to capture a new killer.",
    "release_date": "1986-08-14"
  },
  {
    "title": "The Rainmaker",
    "vote_average": 7.027,
    "vote_count": 1176,
    "poster_path": "/twLGHXPjQtS8UyVGp5GXmhJiTM7.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "When Rudy Baylor, a young attorney with no clients, goes to work for a seedy ambulance chaser, he wants to help the parents of a terminally ill boy in their suit against an insurance company. But to take on corporate America, Rudy and a scrappy paralegal must open their own law firm.",
    "release_date": "1997-11-18"
  },
  {
    "title": "West Side Story",
    "vote_average": 7.025,
    "vote_count": 1403,
    "poster_path": "/myAX5qoD6YVLNGiWpk2wcU66Vfq.jpg",
    "genre_ids": [
      18,
      10749,
      80
    ],
    "overview": "Two youngsters from rival New York City gangs fall in love, but tensions between their respective friends build toward tragedy.",
    "release_date": "2021-12-08"
  },
  {
    "title": "Body Heat",
    "vote_average": 7.024,
    "vote_count": 533,
    "poster_path": "/5LipPcaW1J9IjAP7TOTesw8OcMS.jpg",
    "genre_ids": [
      80,
      10749
    ],
    "overview": "In the midst of a searing Florida heat wave, a woman convinces her lover, a small-town lawyer, to murder her rich husband.",
    "release_date": "1981-08-28"
  },
  {
    "title": "Red Dragon",
    "vote_average": 7,
    "vote_count": 3986,
    "poster_path": "/ou9ZKA2cms02b7CdCdVqGkKu0O0.jpg",
    "genre_ids": [
      80,
      53,
      27
    ],
    "overview": "Former FBI Agent Will Graham, who was once almost killed by the savage Hannibal 'The Cannibal' Lecter, now has no choice but to face him again, as it seems Lecter is the only one who can help Graham track down a new serial killer.",
    "release_date": "2002-10-02"
  },
  {
    "title": "Rush Hour",
    "vote_average": 7.022,
    "vote_count": 4507,
    "poster_path": "/we7wOLVFgxhzLzUt0qNe50xdIQZ.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "When Hong Kong Inspector Lee is summoned to Los Angeles to investigate a kidnapping, the FBI doesn't want any outside help and assigns cocky LAPD Detective James Carter to distract Lee from the case. Not content to watch the action from the sidelines, Lee and Carter form an unlikely partnership and investigate the case themselves.",
    "release_date": "1998-09-18"
  },
  {
    "title": "Face/Off",
    "vote_average": 7.021,
    "vote_count": 4944,
    "poster_path": "/69Xzn8UdPbVnmqSChKz2RTpoNfB.jpg",
    "genre_ids": [
      28,
      80,
      878
    ],
    "overview": "In order to foil a terrorist plot, an FBI agent undergoes facial transplant surgery and assumes the identity of a criminal mastermind. The plan turns sour when the criminal wakes up prematurely and seeks revenge.",
    "release_date": "1997-06-27"
  },
  {
    "title": "The Accused",
    "vote_average": 7.02,
    "vote_count": 528,
    "poster_path": "/5DlWHYb5Q65GaHYHDo6PqGOuoF1.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "After a young woman suffers a brutal rape in a bar one night, a prosecutor assists in bringing the perpetrators to justice, including the ones who encouraged and cheered on the attack.",
    "release_date": "1988-10-14"
  },
  {
    "title": "Extremely Wicked, Shockingly Evil and Vile",
    "vote_average": 7.02,
    "vote_count": 3171,
    "poster_path": "/zSuJ3r5zr5T26tTxyygHhgkUAIM.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A chronicle of the crimes of Ted Bundy, from the perspective of his longtime girlfriend, Elizabeth Kloepfer, who refused to believe the truth about him for years.",
    "release_date": "2019-05-02"
  },
  {
    "title": "Crows Zero",
    "vote_average": 7.019,
    "vote_count": 316,
    "poster_path": "/aZTuM2I9YuyQCCdCuIFtI069OYa.jpg",
    "genre_ids": [
      28,
      12,
      35,
      80
    ],
    "overview": "The students of Suzuran High compete for the King of School title. An ex-graduate yakuza is sent to kill the son of a criminal group, but he can't make himself do it as he reminds him of his youth.",
    "release_date": "2007-10-26"
  },
  {
    "title": "Naked Lunch",
    "vote_average": 7.018,
    "vote_count": 975,
    "poster_path": "/u01kh5jKUWjhom76mguRqUgdvja.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Blank-faced bug killer Bill Lee and his dead-eyed wife, Joan, like to get high on Bill's pest poisons while lounging with Beat poet pals. After meeting the devilish Dr. Benway, Bill gets a drug made from a centipede. Upon indulging, he accidentally kills Joan, takes orders from his typewriter-turned-cockroach, ends up in a constantly mutating Mediterranean city and learns that his hip friends have published his work -- which he doesn't remember writing.",
    "release_date": "1991-12-27"
  },
  {
    "title": "24: Redemption",
    "vote_average": 7.016,
    "vote_count": 416,
    "poster_path": "/wUrk00cYdy7mrSyPOv32u4H8Zyg.jpg",
    "genre_ids": [
      28,
      12,
      80
    ],
    "overview": "Former federal agent Jack Bauer confronts African dictator Benjamin Juma, whose forces have been ordered to capture the children Bauer oversees for malicious military training.",
    "release_date": "2008-11-23"
  },
  {
    "title": "From Dusk Till Dawn",
    "vote_average": 7.015,
    "vote_count": 5531,
    "poster_path": "/uBoQytp3KTQFaVqTe6d0ECGaKh9.jpg",
    "genre_ids": [
      27,
      28,
      53,
      80
    ],
    "overview": "Seth Gecko and his younger brother Richard are on the run after a bloody bank robbery in Texas. They escape across the border into Mexico and will be home-free the next morning, when they pay off the local kingpin. They just have to survive 'from dusk till dawn' at the rendezvous point, which turns out to be a Hell of a strip joint.",
    "release_date": "1996-01-19"
  },
  {
    "title": "A Conspiracy of Faith",
    "vote_average": 7.012,
    "vote_count": 526,
    "poster_path": "/o8ttROXRy2obfcO3IFnORFq9nW8.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "Denmark, 2016. A blurred note is found in a bottle that has traveled across the ocean for a long time. After deciphering the cryptic note, Department Q follow a sinister trail that leads them to investigate a case that occurred in 2008. At the same time, new tragic events take place that test their faith and deepest beliefs.",
    "release_date": "2016-03-03"
  },
  {
    "title": "The Great Train Robbery",
    "vote_average": 7.012,
    "vote_count": 565,
    "poster_path": "/vEYr1sJR1dOFGXwXawpBN6hDRGF.jpg",
    "genre_ids": [
      80,
      28,
      37,
      18,
      12,
      53,
      36
    ],
    "overview": "After the train station clerk is assaulted and left bound and gagged, then the departing train and its passengers robbed, a posse goes in hot pursuit of the fleeing bandits.",
    "release_date": "1903-12-07"
  },
  {
    "title": "Point Blank",
    "vote_average": 7.01,
    "vote_count": 343,
    "poster_path": "/5wzZipiC0THdgPpViVV5OqDj3Xr.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "After being double-crossed and left for dead, a mysterious man named Walker single-mindedly tries to retrieve the rather inconsequential sum of money that was stolen from him.",
    "release_date": "1967-08-30"
  },
  {
    "title": "Get Carter",
    "vote_average": 7.01,
    "vote_count": 437,
    "poster_path": "/suvNK1hd7LnVhsumteyflDGlrgL.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "Jack Carter is a small-time hood working in London. When word reaches him of his brother's death, he travels to Newcastle to attend the funeral. Refusing to accept the police report of suicide, Carter seeks out his brother’s friends and acquaintances to learn who murdered his sibling and why.",
    "release_date": "1971-02-03"
  },
  {
    "title": "Rounders",
    "vote_average": 7.009,
    "vote_count": 1602,
    "poster_path": "/7JfFYnOLWi2X4TZXJ7qQ7xO1D2x.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A young reformed gambler must return to playing big stakes poker to help a friend pay off loan sharks.",
    "release_date": "1998-09-11"
  },
  {
    "title": "Lethal Weapon 2",
    "vote_average": 7.009,
    "vote_count": 3165,
    "poster_path": "/1EEIUw0tkX7AJZ1ikZrtKZZKlC6.jpg",
    "genre_ids": [
      28,
      12,
      35,
      80,
      53
    ],
    "overview": "In the opening chase, Martin Riggs and Roger Murtaugh stumble across a trunk full of Krugerrands. They follow the trail to a South African diplomat who's using his immunity to conceal a smuggling operation. When he plants a bomb under Murtaugh's toilet, the action explodes!",
    "release_date": "1989-07-07"
  },
  {
    "title": "Running Scared",
    "vote_average": 6.999,
    "vote_count": 963,
    "poster_path": "/wVlwZbwJlI5C33STslTyVNRGjg6.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "A low-ranking thug is entrusted by his boss to dispose of a gun that killed corrupt cops, but things spiral out of control when the gun ends up in wrong hands.",
    "release_date": "2006-01-06"
  },
  {
    "title": "The Girl Who Played with Fire",
    "vote_average": 6.998,
    "vote_count": 1535,
    "poster_path": "/A8UjhPjINIBgmoH37aqt40u53PQ.jpg",
    "genre_ids": [
      18,
      28,
      53,
      80,
      9648
    ],
    "overview": "Mikael Blomkvist, publisher of Millennium magazine, has made his living exposing the crooked and corrupt practices of establishment Swedish figures. So when a young journalist approaches him with a meticulously researched thesis about sex trafficking in Sweden and those in high office who abuse underage girls, Blomkvist immediately throws himself into the investigation.",
    "release_date": "2009-09-18"
  },
  {
    "title": "Nightmare Alley",
    "vote_average": 6.997,
    "vote_count": 2640,
    "poster_path": "/680klE0dIreQQOyWKFgNnCAJtws.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "overview": "An ambitious carnival man with a talent for manipulating people with a few well-chosen words hooks up with a female psychologist who is even more dangerous than he is.",
    "release_date": "2021-12-02"
  },
  {
    "title": "Arlington Road",
    "vote_average": 6.997,
    "vote_count": 991,
    "poster_path": "/4yYHyZuyTTQaEZuHKS7561jXjtR.jpg",
    "genre_ids": [
      80,
      18,
      53,
      9648
    ],
    "overview": "Threats from sinister foreign nationals aren't the only thing to fear. Bedraggled college professor Michael Faraday has been vexed (and increasingly paranoid) since his wife's accidental death in a botched FBI operation. But all that takes a backseat when a seemingly all-American couple set up house next door.",
    "release_date": "1999-03-19"
  },
  {
    "title": "Strange Days",
    "vote_average": 6.996,
    "vote_count": 1220,
    "poster_path": "/rY5BrDRcYAKE0BYmmT66YG6Uy5Q.jpg",
    "genre_ids": [
      80,
      18,
      878,
      53
    ],
    "overview": "Former policeman Lenny Nero has moved into a more lucrative trade: the illegal sale of virtual reality-like recordings that allow users to experience the emotions and past experiences of others. While they typically contain tawdry incidents, Nero is shocked when he receives one showing a murder.",
    "release_date": "1995-10-13"
  },
  {
    "title": "Shallow Grave",
    "vote_average": 6.995,
    "vote_count": 908,
    "poster_path": "/gqvSKLbfIg1mja1ulVkVcLhdwWF.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "When David, Juliet, and Alex are searching for a fourth roommate for their flat, they settle on the aloof Hugo. However, they soon find Hugo dead, with a large sum of cash being among his belongings. The three friends decide to keep the money, dismembering and burying Hugo's body. However, their newfound fortune begins to corrode their friendships, with each roommate resorting to manipulation tactics to scam the others out of the money.",
    "release_date": "1994-12-22"
  },
  {
    "title": "Matchstick Men",
    "vote_average": 6.997,
    "vote_count": 1606,
    "poster_path": "/mW6HZe1aoipzH8U7ucjma6E3LLx.jpg",
    "genre_ids": [
      35,
      18,
      80,
      53
    ],
    "overview": "A phobic con artist and his protege are on the verge of pulling off a lucrative swindle when the con artist's teenage daughter arrives unexpectedly.",
    "release_date": "2003-09-12"
  },
  {
    "title": "The Italian Job",
    "vote_average": 7,
    "vote_count": 666,
    "poster_path": "/8NOw3HPHkcBndJW2K6ofbcSb7WD.jpg",
    "genre_ids": [
      28,
      80,
      35,
      53
    ],
    "overview": "Charlie's got a 'job' to do. Having just left prison he finds one of his friends has attempted a high-risk job in Torino, Italy, right under the nose of the mafia. Charlie's friend doesn't get very far, so Charlie takes over the 'job'. Using three Mini Coopers, a couple of Jaguars, and a bus, he hopes to bring Torino to a standstill, steal a fortune in gold and escape in the chaos.",
    "release_date": "1969-06-02"
  },
  {
    "title": "Capote",
    "vote_average": 6.991,
    "vote_count": 1330,
    "poster_path": "/k7z0tDxzbDNev7F8l3Y56Pk5seR.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "A biopic of writer Truman Capote and his assignment for The New Yorker to write the non-fiction book \"In Cold Blood\".",
    "release_date": "2005-09-30"
  },
  {
    "title": "Police Story 2",
    "vote_average": 6.99,
    "vote_count": 482,
    "poster_path": "/cZKuFo3nQbyRqGZtVmx3WsitJRB.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "The Hong Kong super-cop must stop a group of blackmailing bombers at the same time that the villains of the first Police Story are out for revenge.",
    "release_date": "1988-08-13"
  },
  {
    "title": "And Then There Were None",
    "vote_average": 6.99,
    "vote_count": 338,
    "poster_path": "/maV1jQZ58NZIjwRbdtmRcaW3fZo.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "Ten strangers are summoned to a remote island and while they are waiting for the mysterious host to appear, a recording levels serious accusations at each of the guests. Soon they start being murdered, one by one. As the survivors try to keep their wits, they reach a disturbing conclusion: one of them must be the killer.",
    "release_date": "1945-10-31"
  },
  {
    "title": "Ocean's Eight",
    "vote_average": 6.988,
    "vote_count": 7909,
    "poster_path": "/MvYpKlpFukTivnlBhizGbkAe3v.jpg",
    "genre_ids": [
      80,
      35,
      28
    ],
    "overview": "Debbie Ocean, a criminal mastermind, gathers a crew of female thieves to pull off the heist of the century at New York's annual Met Gala.",
    "release_date": "2018-06-07"
  },
  {
    "title": "Bronson",
    "vote_average": 6.986,
    "vote_count": 2328,
    "poster_path": "/o5JaAtcvjRJz3utEaptk0L77FjM.jpg",
    "genre_ids": [
      18,
      28,
      80
    ],
    "overview": "A young man who was sentenced to 7 years in prison for robbing a post office ends up spending 30 years in solitary confinement. During this time, his own personality is supplanted by his alter ego, Charles Bronson.",
    "release_date": "2008-10-09"
  },
  {
    "title": "Ichi the Killer",
    "vote_average": 6.985,
    "vote_count": 882,
    "poster_path": "/k8j4YLZlda98dqp9ErymKzjYowG.jpg",
    "genre_ids": [
      28,
      80,
      27
    ],
    "overview": "As sadomasochistic yakuza enforcer Kakihara searches for his missing boss he comes across Ichi, a repressed and psychotic killer who may be able to inflict levels of pain that Kakihara has only dreamed of.",
    "release_date": "2001-12-22"
  },
  {
    "title": "The Guard",
    "vote_average": 6.983,
    "vote_count": 1108,
    "poster_path": "/dtQiStID0le2EMTmJXupPRybARB.jpg",
    "genre_ids": [
      28,
      35,
      53,
      80
    ],
    "overview": "When a small-town Irish cop with a crass personality is partnered with a straight-laced FBI agent to bust an international drug-trafficking ring, they must settle their differences in order to take down a dangerous gang.",
    "release_date": "2011-07-07"
  },
  {
    "title": "The Walk",
    "vote_average": 6.983,
    "vote_count": 3025,
    "poster_path": "/tiESRqurrZwAC0hpERogOsBhjeg.jpg",
    "genre_ids": [
      18,
      80,
      35,
      53
    ],
    "overview": "The story of French high-wire artist Philippe Petit's attempt to cross the Twin Towers of the World Trade Center in 1974.",
    "release_date": "2015-09-30"
  },
  {
    "title": "Saw",
    "vote_average": 6.982,
    "vote_count": 540,
    "poster_path": "/ys7zRSQOzPgOyiw46LeVbL4iTDR.jpg",
    "genre_ids": [
      80,
      27,
      53
    ],
    "overview": "David, an orderly at a hospital, tells his horrific story of being kidnapped and forced to play a vile game of survival.",
    "release_date": "2003-10-16"
  },
  {
    "title": "State of Grace",
    "vote_average": 6.98,
    "vote_count": 301,
    "poster_path": "/dNMeRLY3MeY2FFeh639plHai3F1.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "Hell's Kitchen, New York. Terry Noonan returns home after a ten-year absence. He soon reconnects with Jackie, a childhood friend and member of the Irish mob, and rekindles his love affair with Jackie's sister Kathleen.",
    "release_date": "1990-09-14"
  },
  {
    "title": "Rumble Fish",
    "vote_average": 7,
    "vote_count": 619,
    "poster_path": "/vwMfVhBwAcRT7K0xjFrNoNf9YRb.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Rusty James, an absent-minded street thug, struggles to live up to his legendary older brother's reputation and longs for the days when gang warfare was going on.",
    "release_date": "1983-10-09"
  },
  {
    "title": "ACAB : All Cops Are Bastards",
    "vote_average": 6.974,
    "vote_count": 781,
    "poster_path": "/lmpkw9hRmuI0pk7CWDJRWSksl3i.jpg",
    "genre_ids": [
      28,
      18,
      80
    ],
    "overview": "A look at the controversial riot cops unit, told through the stories of three veteran cops and a young recruit.",
    "release_date": "2012-01-27"
  },
  {
    "title": "The Fast and the Furious",
    "vote_average": 7,
    "vote_count": 9421,
    "poster_path": "/gqY0ITBgT7A82poL9jv851qdnIb.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Dominic Toretto is a Los Angeles street racer suspected of masterminding a series of big-rig hijackings. When undercover cop Brian O'Conner infiltrates Toretto's iconoclastic crew, he falls for Toretto's sister and must choose a side: the gang or the LAPD.",
    "release_date": "2001-06-22"
  },
  {
    "title": "In the Line of Fire",
    "vote_average": 6.971,
    "vote_count": 1427,
    "poster_path": "/3NvOFpmyECI3DNExYMtFIRcGMsu.jpg",
    "genre_ids": [
      28,
      18,
      53,
      80,
      9648
    ],
    "overview": "Veteran Secret Service agent Frank Horrigan is a man haunted by his failure to save President Kennedy while serving protection detail in Dallas. Thirty years later, a man calling himself \"Booth\" threatens the life of the current President, forcing Horrigan to come back to protection detail to confront the ghosts from his past.",
    "release_date": "1993-07-08"
  },
  {
    "title": "Pusher",
    "vote_average": 7,
    "vote_count": 676,
    "poster_path": "/9Myfvq4e2BySE5aosX8UzV9cUME.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "A drug pusher grows increasingly desperate after a botched deal leaves him with a large debt to a ruthless drug lord.",
    "release_date": "1996-08-30"
  },
  {
    "title": "Brawl in Cell Block 99",
    "vote_average": 6.969,
    "vote_count": 1266,
    "poster_path": "/bfB1J6jsjdGWKjXxKQ5hNd1OyAs.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "After working as a drug courier and getting into a brutal shootout with police, a former boxer finds himself at the mercy of his enemies as they force him to instigate violent acts that turn the prison he resides in into a battleground.",
    "release_date": "2017-09-23"
  },
  {
    "title": "Sexy Beast",
    "vote_average": 6.967,
    "vote_count": 684,
    "poster_path": "/9OlmWIEuSec27HiOPuMJASnff6f.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Ex-safecracker Gal Dove has served his time behind bars and is blissfully retired to a Spanish villa paradise with a wife he adores. The idyll is shattered by the arrival of his nemesis Don Logan, intent on persuading Gal to return to London for one last big job.",
    "release_date": "2001-01-12"
  },
  {
    "title": "The Place Beyond the Pines",
    "vote_average": 6.965,
    "vote_count": 4605,
    "poster_path": "/vY5j2xQzMGWmxBuhQo0HfA4Lxqb.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A motorcycle stunt rider considers committing a crime in order to provide for his wife and child, an act that puts him on a collision course with a cop-turned-politician.",
    "release_date": "2013-03-14"
  },
  {
    "title": "Frailty",
    "vote_average": 6.963,
    "vote_count": 1064,
    "poster_path": "/hER3sVCZ9cZRBO0KNI7NbtiLacn.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "A man confesses to an FBI agent his family's story of how his religious fanatic father's visions lead to a series of murders to destroy supposed 'demons'.",
    "release_date": "2001-11-17"
  },
  {
    "title": "RocknRolla",
    "vote_average": 6.96,
    "vote_count": 2766,
    "poster_path": "/i7eyngqjdvKB7NvrWtCjjTNNq8N.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "When a Russian mobster sets up a real estate scam that generates millions of pounds, various members of London's criminal underworld pursue their share of the fortune. Various shady characters, including Mr One-Two, Stella the accountant, and Johnny Quid, a druggie rock-star, try to claim their slice.",
    "release_date": "2008-09-04"
  },
  {
    "title": "Four Lions",
    "vote_average": 6.959,
    "vote_count": 1059,
    "poster_path": "/x4JzaRPXBs9wiHCe3e3ymXWuwfd.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "A group of Muslim men living in Sheffield hatch an inept plan to become suicide bombers.",
    "release_date": "2010-05-07"
  },
  {
    "title": "El Camino: A Breaking Bad Movie",
    "vote_average": 6.954,
    "vote_count": 4557,
    "poster_path": "/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.",
    "release_date": "2019-10-11"
  },
  {
    "title": "Benny's Video",
    "vote_average": 6.954,
    "vote_count": 312,
    "poster_path": "/4mWNkjnsd1tjb26x3Q1IdOwD8Cj.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "A 14-year-old video enthusiast obsessed with violent films decides to make one of his own and show it to his parents, with tragic results.",
    "release_date": "1992-10-20"
  },
  {
    "title": "Ronin",
    "vote_average": 7,
    "vote_count": 2187,
    "poster_path": "/AirrhRJjHwytOV0pdLu7YZ4DEyr.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "A briefcase with undisclosed contents – sought by Irish terrorists and the Russian mob – makes its way into criminals' hands. An Irish liaison assembles a squad of mercenaries, or 'ronin', and gives them the thorny task of recovering the case.",
    "release_date": "1998-09-25"
  },
  {
    "title": "Odds and Evens",
    "vote_average": 6.949,
    "vote_count": 362,
    "poster_path": "/ankqh5ykTnjXiDizWtnbKRu8LPo.jpg",
    "genre_ids": [
      35,
      80,
      28
    ],
    "overview": "A bumbling government agent recruits a trucker whose gambling knowledge can help crack an illegal Florida operation.",
    "release_date": "1978-10-28"
  },
  {
    "title": "Street Flow",
    "vote_average": 6.948,
    "vote_count": 329,
    "poster_path": "/rhOFpiEDA9S2rmuz5990KBjLgcP.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Noumouké, from the suburb of Paris, is about to decide which brother's foot steps to follow - the lawyer student Soulaymaan or the gangster Demba.",
    "release_date": "2019-10-12"
  },
  {
    "title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
    "vote_average": 6.947,
    "vote_count": 9803,
    "poster_path": "/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
    "release_date": "2020-02-05"
  },
  {
    "title": "The Golden Glove",
    "vote_average": 6.944,
    "vote_count": 449,
    "poster_path": "/wi9K8quRC3oYfFjGrO7CODR5nWC.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "A serial killer strikes fear in the hearts of residents of Hamburg during the early 1970s.",
    "release_date": "2019-02-21"
  },
  {
    "title": "The Mask",
    "vote_average": 6.943,
    "vote_count": 9609,
    "poster_path": "/xbbXp9px4o8Oe7IbGd0yIbla8mZ.jpg",
    "genre_ids": [
      10749,
      35,
      80,
      14
    ],
    "overview": "When timid bank clerk Stanley Ipkiss discovers a magical mask containing the spirit of the Norse god Loki, his entire life changes. While wearing the mask, Ipkiss becomes a supernatural playboy exuding charm and confidence which allows him to catch the eye of local nightclub singer Tina Carlyle. Unfortunately, under the mask's influence, Ipkiss also robs a bank, which angers junior crime lord Dorian Tyrell, whose goons get blamed for the heist.",
    "release_date": "1994-07-29"
  },
  {
    "title": "Tsotsi",
    "vote_average": 6.94,
    "vote_count": 300,
    "poster_path": "/fvPGF7NYuZJACYVRAAF3FXicVf0.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "The South African multi-award winning film about a young South African boy from the ghetto named Tsotsi, meaning Gangster. Tsotsi, who left home as a child to get away from helpless parents, finds a baby in the back seat of a car that he has just stolen. He decides that it his responsibility to take care of the baby and in the process learns that maybe the gangster life isn’t the best way.",
    "release_date": "2005-12-23"
  },
  {
    "title": "The Good Nurse",
    "vote_average": 6.937,
    "vote_count": 1095,
    "poster_path": "/rSq6cq0LCcbro10jbEaPTEb3WmW.jpg",
    "genre_ids": [
      18,
      80,
      9648
    ],
    "overview": "Suspicious that her colleague is responsible for a series of mysterious patient deaths, a nurse risks her own life to uncover the truth.",
    "release_date": "2022-10-19"
  },
  {
    "title": "The Baader Meinhof Complex",
    "vote_average": 6.937,
    "vote_count": 537,
    "poster_path": "/4D1MllpbRMt6DDsSCxQxbl2JYM5.jpg",
    "genre_ids": [
      28,
      80,
      18,
      36,
      53
    ],
    "overview": "'Der Baader Meinhof Komplex' depicts the political turmoil in the period from 1967 to the bloody \"Deutschen Herbst\" in 1977. The movie approaches the events based on Stefan Aust's standard work on the Rote Armee Fraktion (RAF). The story centers on the leadership of the self named anti-fascist resistance to state violence: Andreas Baader, Ulrike Meinhof and Gudrun Ensslin.",
    "release_date": "2008-09-25"
  },
  {
    "title": "Kill Boksoon",
    "vote_average": 6.9,
    "vote_count": 350,
    "poster_path": "/7QKkvGgwMCvYrdkyNFgxfLESBtx.jpg",
    "genre_ids": [
      28,
      18,
      53,
      80
    ],
    "overview": "At work, she's a renowned assassin. At home, she's a single mom to a teenage daughter. Killing? That's easy. It's parenting that's the hard part.",
    "release_date": "2023-02-17"
  },
  {
    "title": "Shot Caller",
    "vote_average": 6.934,
    "vote_count": 1875,
    "poster_path": "/qLmLz2wtyYvmW8Ult3l2ngOnW8v.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A newly-released prison gangster is forced by the leaders of his gang to orchestrate a major crime with a brutal rival gang on the streets of Southern California.",
    "release_date": "2017-07-13"
  },
  {
    "title": "Insomnia",
    "vote_average": 6.933,
    "vote_count": 4428,
    "poster_path": "/riVXh3EimGO0y5dgQxEWPRy5Itg.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "Two Los Angeles homicide detectives are dispatched to a northern town where the sun doesn't set to investigate the methodical murder of a local teen.",
    "release_date": "2002-05-24"
  },
  {
    "title": "The Crimson Rivers",
    "vote_average": 6.9,
    "vote_count": 1413,
    "poster_path": "/npvDhiKkpQBuTaQ8cbWRT2iEfkE.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "overview": "Two French policemen, one investigating a grisly murder at a remote mountain college, the other working on the desecration of a young girl's grave by skinheads, are brought together by the clues from their respective cases. Soon after they start working together, more murders are committed, and the pair begin to discover just what dark secrets are behind the killings.",
    "release_date": "2000-09-27"
  },
  {
    "title": "The Woodsman",
    "vote_average": 6.9,
    "vote_count": 444,
    "poster_path": "/4fDgLcc35A0IpxhMyJMP33bSDXj.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A paedophile returns to his hometown after 12 years in prison and attempts to start a new life.",
    "release_date": "2004-12-24"
  },
  {
    "title": "White Chicks",
    "vote_average": 6.929,
    "vote_count": 3601,
    "poster_path": "/aHTUpo45qy9QYIOnVITGGqLoVcA.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Two FBI agent brothers, Marcus and Kevin Copeland, accidentally foil a drug bust. To avoid being fired they accept a mission escorting a pair of socialites to the Hamptons--but when the girls are disfigured in a car accident, they refuse to go. Left without options, Marcus and Kevin decide to pose as the sisters, transforming themselves from black men into rich white women.",
    "release_date": "2004-06-23"
  },
  {
    "title": "Layer Cake",
    "vote_average": 6.925,
    "vote_count": 1905,
    "poster_path": "/rDOxXteqxALBaSa3V3zTjGJuyWB.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "When a seemingly straight-forward drug deal goes awry, XXXX has to break his die-hard rules and turn up the heat, not only to outwit the old regime and come out on top, but to save his own skin...",
    "release_date": "2004-09-30"
  },
  {
    "title": "Robot & Frank",
    "vote_average": 6.922,
    "vote_count": 1008,
    "poster_path": "/602vUwe1GPmaRvcrT3OQWqH1Nm1.jpg",
    "genre_ids": [
      878,
      35,
      18,
      80
    ],
    "overview": "Curmudgeonly old Frank lives by himself. His routine involves daily visits to his local library, where he has a twinkle in his eye for the librarian. His grown children are concerned about their father’s well-being and buy him a caretaker robot. Initially resistant to the idea, Frank soon appreciates the benefits of robotic support – like nutritious meals and a clean house – and eventually begins to treat his robot like a true companion. With his robot’s assistance, Frank’s passion for his old, unlawful profession is reignited, for better or worse.",
    "release_date": "2012-08-16"
  },
  {
    "title": "Desperado",
    "vote_average": 6.922,
    "vote_count": 2651,
    "poster_path": "/e3gwpBeXpvGZsxUya9zNym5QXrw.jpg",
    "genre_ids": [
      53,
      28,
      80
    ],
    "overview": "Mariachi plunges headfirst into the dark border underworld when he follows a trail of blood to the last of the infamous Mexican drug lords, Bucho, for an action-packed, bullet-riddled showdown. With the help of his best friend and a beautiful bookstore owner, the Mariachi tracks Bucho, takes on his army of desperados, and leaves a trail of blood of his own.",
    "release_date": "1995-08-25"
  },
  {
    "title": "The Beat That My Heart Skipped",
    "vote_average": 6.92,
    "vote_count": 401,
    "poster_path": "/tGH2kEVM78VsdXPX4TnhHq7Qdxa.jpg",
    "genre_ids": [
      10402,
      18,
      80
    ],
    "overview": "Like his father, Tom is a real estate agent who makes his money from dirty, and sometimes brutal, deals. But a chance encounter prompts him to take up the piano and become a concert pianist. He auditions with the help of a beautiful, young virtuoso pianist who cannot speak French - music is their only exchange. But pressures from the ugly world of his day job soon become more than he can handle.",
    "release_date": "2005-03-16"
  },
  {
    "title": "Outrage",
    "vote_average": 6.916,
    "vote_count": 394,
    "poster_path": "/s6VVl5WKuGIDlSAm8hgvTsrzODK.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "When a tough yakuza gangster is betrayed by his bosses, it means all out war. Bodies pile up as he takes out everyone in his way to the top in a brutal quest for revenge.",
    "release_date": "2010-05-17"
  },
  {
    "title": "12",
    "vote_average": 6.916,
    "vote_count": 310,
    "poster_path": "/7bl0aH8u7oBcd4QK9Fml01IN8KU.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "A loose remake of “12 Angry Men”, “12” is set in contemporary Moscow where 12 very different men must unanimously decide the fate of a young Chechen accused of murdering his step-father, a Russian army officer. Consigned to a makeshift jury room in a school gymnasium, one by one each man takes center stage to confront, connect, and confess while the accused awaits a verdict and revisits his heartbreaking journey through war in flashbacks.",
    "release_date": "2007-06-06"
  },
  {
    "title": "Go",
    "vote_average": 6.916,
    "vote_count": 640,
    "poster_path": "/kP0OOAa4GTZSUPW8fgPbk1OmKEW.jpg",
    "genre_ids": [
      80,
      35,
      53
    ],
    "overview": "Grocery store clerk Simon occasionally sells drugs from his cash register at work, so when soap opera actors Adam and Zack come looking for Ecstasy on a quiet Christmas Eve, they are surprised to find Ronna covering his shift. Desperate for money, Ronna decides to become an impromptu drug dealer, unaware that Adam and Zack are secretly working for obsessed narcotics officer Burke.",
    "release_date": "1999-04-09"
  },
  {
    "title": "Spy Game",
    "vote_average": 6.914,
    "vote_count": 1923,
    "poster_path": "/6y8M1rxjKofQCRKKe6xeV91K2Fc.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "On the day of his retirement, a veteran CIA agent learns that his former protégé has been arrested in China, is sentenced to die the next morning in Beijing, and that the CIA is considering letting that happen to avoid an international scandal.",
    "release_date": "2001-11-18"
  },
  {
    "title": "Wheels on Meals",
    "vote_average": 6.912,
    "vote_count": 351,
    "poster_path": "/i5iZVBfOqlRs4g50dm2G6YGfhYD.jpg",
    "genre_ids": [
      10749,
      28,
      35,
      80
    ],
    "overview": "Cousins Thomas and David, owners of a mobile restaurant, team up with their friend Moby, a bumbling private detective, to save the beautiful Sylvia, a pickpocket.",
    "release_date": "1984-08-17"
  },
  {
    "title": "Mr. Brooks",
    "vote_average": 6.911,
    "vote_count": 1596,
    "poster_path": "/yYleq0qmb67Ig2ViY3hFmUOrH77.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "A psychological thriller about a man who is sometimes controlled by his murder-and-mayhem-loving alter ego.",
    "release_date": "2007-06-01"
  },
  {
    "title": "War Dogs",
    "vote_average": 6.908,
    "vote_count": 4601,
    "poster_path": "/uH9qGH5XS1iZXCSb3tgu40dxQoh.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "Based on the true story of two young men, David Packouz and Efraim Diveroli, who won a $300 million contract from the Pentagon to arm America's allies in Afghanistan.",
    "release_date": "2016-08-18"
  },
  {
    "title": "The Pink Panther",
    "vote_average": 6.9,
    "vote_count": 935,
    "poster_path": "/aCjJ0sKayks2uL7MJBzdp2i67NI.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "The trademark of The Phantom, a renowned jewel thief, is a glove left at the scene of the crime. Inspector Clouseau, an expert on The Phantom's exploits, feels sure that he knows where The Phantom will strike next and leaves Paris for the Tyrolean Alps, where the famous Lugashi jewel 'The Pink Panther' is going to be. However, he does not know who The Phantom really is, or for that matter who anyone else really is...",
    "release_date": "1963-12-18"
  },
  {
    "title": "Sicario: Day of the Soldado",
    "vote_average": 6.906,
    "vote_count": 3288,
    "poster_path": "/msqWSQkU403cQKjQHnWLnugv7EY.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Agent Matt Graver teams up with operative Alejandro Gillick to prevent Mexican drug cartels from smuggling terrorists across the United States border.",
    "release_date": "2018-06-27"
  },
  {
    "title": "Sneakers",
    "vote_average": 6.905,
    "vote_count": 831,
    "poster_path": "/l2pIGwCvpZEpBuMb55YBl6A04Jv.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "When shadowy U.S. intelligence agents blackmail a reformed computer hacker and his eccentric team of security experts into stealing a code-breaking 'black box' from a Soviet-funded genius, they uncover a bigger conspiracy. Now, he and his 'sneakers' must save themselves and the world economy by retrieving the box from their blackmailers.",
    "release_date": "1992-09-09"
  },
  {
    "title": "Unleashed",
    "vote_average": 6.903,
    "vote_count": 1871,
    "poster_path": "/eOmXfQgDLUndae2xnwJfV0JZ2JN.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "Raised as a slave, Danny is used to fighting for his survival. In fact, his \"master,\" Bart, thinks of him as a pet and goes as far as leashing him with a collar so they can make money in fight clubs, where Danny is the main contender. When Bart's crew is in a car accident, Danny escapes and meets a blind, kindhearted piano tuner who takes him in and uses music to free the fighter's long-buried heart.",
    "release_date": "2005-02-02"
  },
  {
    "title": "In the Fade",
    "vote_average": 6.9,
    "vote_count": 774,
    "poster_path": "/n53oMPqwnZxnk07uR0wYcgfH9vB.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Katja's life collapses after the deaths of her husband and son in a bomb attack. After a time of mourning and injustice, Katja seeks revenge.",
    "release_date": "2017-11-23"
  },
  {
    "title": "Retribution",
    "vote_average": 6.897,
    "vote_count": 821,
    "poster_path": "/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
    "release_date": "2023-08-23"
  },
  {
    "title": "Death Wish",
    "vote_average": 6.898,
    "vote_count": 758,
    "poster_path": "/n0MJPBLSCtt7DBYZGFsOfQkZCWt.jpg",
    "genre_ids": [
      80,
      18,
      28
    ],
    "overview": "After his wife is murdered by street punks, a pacifistic New York City architect becomes a one-man vigilante squad, prowling the streets for would-be muggers after dark.",
    "release_date": "1974-07-24"
  },
  {
    "title": "Women Talking",
    "vote_average": 6.898,
    "vote_count": 469,
    "poster_path": "/twUbb6Irktv0VEsJXQWJ3VKyxFX.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A group of women in an isolated religious colony struggle to reconcile their faith with a series of sexual assaults committed by the colony's men.",
    "release_date": "2022-12-23"
  },
  {
    "title": "Masquerade",
    "vote_average": 6.889,
    "vote_count": 341,
    "poster_path": "/31KgCTaOuLJsUm2cGN2OffripeD.jpg",
    "genre_ids": [
      18,
      35,
      10749,
      80
    ],
    "overview": "Adrien, an attractive dancer whose career was shattered by a motorcycle accident, squanders his youth in idleness. His life changes when he meets Margot, who lives off scams and amorous manipulations.",
    "release_date": "2022-11-01"
  },
  {
    "title": "Cold Fish",
    "vote_average": 6.885,
    "vote_count": 309,
    "poster_path": "/669GmEZsyMlPliURX5myHTStslv.jpg",
    "genre_ids": [
      18,
      53,
      80,
      27
    ],
    "overview": "Shamoto runs a small tropical fish shop. When his daughter Mitsuko is caught shoplifting at a grocery store a man named Murata steps in to settle things between the girl and the store manager. Murata also runs a tropical fish shop and he and Shamoto soon become friendly. However Murata hides many dark secrets behind his friendly face.",
    "release_date": "2011-01-29"
  },
  {
    "title": "The Fate of the Furious",
    "vote_average": 6.9,
    "vote_count": 9869,
    "poster_path": "/dImWM7GJqryWJO9LHa3XQ8DD5NH.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "When a mysterious woman seduces Dom into the world of crime and a betrayal of those closest to him, the crew face trials that will test them as never before.",
    "release_date": "2017-04-12"
  },
  {
    "title": "Hard Eight",
    "vote_average": 6.881,
    "vote_count": 784,
    "poster_path": "/1l5UaoP25Ak8PWCKIULQz70yF03.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A stranger mentors a young Reno gambler who weds a hooker and befriends a vulgar casino regular.",
    "release_date": "1997-02-28"
  },
  {
    "title": "21 Jump Street",
    "vote_average": 6.88,
    "vote_count": 9809,
    "poster_path": "/8v3Sqv9UcIUC4ebmpKWROqPBINZ.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "In high school, Schmidt was a dork and Jenko was the popular jock. After graduation, both of them joined the police force and ended up as partners riding bicycles in the city park. Since they are young and look like high school students, they are assigned to an undercover unit to infiltrate a drug ring that is supplying high school students synthetic drugs.",
    "release_date": "2012-03-14"
  },
  {
    "title": "Focus",
    "vote_average": 6.879,
    "vote_count": 7449,
    "poster_path": "/lOzGWjceYTd0kd5HyX7Ch46O9kh.jpg",
    "genre_ids": [
      10749,
      35,
      80
    ],
    "overview": "Nicky, an accomplished con artist, gets romantically involved with his disciple Jess but later ends their relationship. Years later, she returns as a femme fatale to spoil his plans.",
    "release_date": "2015-02-25"
  },
  {
    "title": "The Pale Blue Eye",
    "vote_average": 6.877,
    "vote_count": 1582,
    "poster_path": "/9xkGlFRqrN8btTLU0KQvOfn2PHr.jpg",
    "genre_ids": [
      53,
      80,
      27,
      9648
    ],
    "overview": "West Point, New York, 1830. When a cadet at the burgeoning military academy is found hanged with his heart cut out, the top brass summons former New York City constable Augustus Landor to investigate. While attempting to solve this grisly mystery, the reluctant detective engages the help of one of the cadets: a strange but brilliant young fellow by the name of Edgar Allan Poe.",
    "release_date": "2022-12-22"
  },
  {
    "title": "Step Up",
    "vote_average": 6.877,
    "vote_count": 3554,
    "poster_path": "/9Y2i54Etpx7JvCxj6D8P3VAH152.jpg",
    "genre_ids": [
      10402,
      18,
      10749,
      80
    ],
    "overview": "Tyler Gage receives the opportunity of a lifetime after vandalizing a performing arts school, gaining him the chance to earn a scholarship and dance with an up and coming dancer, Nora.",
    "release_date": "2006-08-11"
  },
  {
    "title": "The Night Comes for Us",
    "vote_average": 6.9,
    "vote_count": 639,
    "poster_path": "/8lI1p5cPqgXN2qrKZrmI3mhKBfs.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "After sparing a girl's life during a massacre, an elite Triad assassin is targeted by an onslaught of murderous gangsters.",
    "release_date": "2018-10-05"
  },
  {
    "title": "Gomorrah",
    "vote_average": 6.875,
    "vote_count": 1144,
    "poster_path": "/3XcCTqSovFZE5GRebJmh1kHwziw.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "An inside look at Italy's modern-day crime families, the Camorra in Naples and Caserta. Based on a book by Roberto Saviano. Power, money and blood: these are the \"values\" that the residents of the Province of Naples and Caserta have to face every day. They hardly ever have a choice and are forced to obey the rules of the Camorra. Only a lucky few can even think of leading a normal life.",
    "release_date": "2008-05-16"
  },
  {
    "title": "Kids",
    "vote_average": 6.874,
    "vote_count": 1040,
    "poster_path": "/8qV8hUVCUnFIQKewzlhaFWhdszK.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A day in the life of a group of teens as they travel around New York City skating, drinking, smoking and deflowering virgins.",
    "release_date": "1995-07-28"
  },
  {
    "title": "In Order of Disappearance",
    "vote_average": 6.873,
    "vote_count": 558,
    "poster_path": "/ujlJLvzWRh2hR0UoHypv9QLZ2os.jpg",
    "genre_ids": [
      53,
      28,
      35,
      80
    ],
    "overview": "Upstanding community leader Nils has just won an award for \"Citizen of the Year\" when he learns the news that his son has died of a heroin overdose. Suspecting foul play, Nils begins to investigate, and soon finds himself at the center of an escalating underworld gang war between Serbian drug dealers and a sociopathic criminal mastermind known only as “The Count.”",
    "release_date": "2014-02-21"
  },
  {
    "title": "Batman & Mr. Freeze: SubZero",
    "vote_average": 6.873,
    "vote_count": 402,
    "poster_path": "/kjjz8mVNrwNUa9uz8IMnqS79rxj.jpg",
    "genre_ids": [
      16,
      28,
      80
    ],
    "overview": "When Mr. Freeze kidnaps Barbara Gordon, as an involuntary organ donor to save his dying wife, Batman and Robin must find her before the operation can begin.",
    "release_date": "1998-02-11"
  },
  {
    "title": "American Made",
    "vote_average": 6.872,
    "vote_count": 4226,
    "poster_path": "/23ILgoPSO5ShKcTZOuiTVfqFAUB.jpg",
    "genre_ids": [
      28,
      35,
      80,
      18,
      53
    ],
    "overview": "The true story of pilot Barry Seal, who transported contraband for the CIA and the Medellin cartel in the 1980s.",
    "release_date": "2017-08-18"
  },
  {
    "title": "Evil Under the Sun",
    "vote_average": 6.87,
    "vote_count": 389,
    "poster_path": "/rQNMZoVVURf9YyYiBTsrOTEKALH.jpg",
    "genre_ids": [
      53,
      80,
      9648,
      18
    ],
    "overview": "An opulent beach resort provides a scenic background to this amusing whodunit as Poirot attempts to uncover the nefarious evildoer behind the strangling of a notorious stage star.",
    "release_date": "1982-03-05"
  },
  {
    "title": "Don't Let Go",
    "vote_average": 6.865,
    "vote_count": 341,
    "poster_path": "/uNHueGo5TYCTLzoGULse65GC32Q.jpg",
    "genre_ids": [
      878,
      53,
      9648,
      80
    ],
    "overview": "A detective suffering from a personal loss receives a call from his recently deceased niece. Being able to communicate across time, the two work together to try and stop the crime before it occurs.",
    "release_date": "2019-08-30"
  },
  {
    "title": "The Villainess",
    "vote_average": 6.864,
    "vote_count": 616,
    "poster_path": "/5igv2DsGx1JbmwJnq2uKucJpLOS.jpg",
    "genre_ids": [
      28,
      18,
      80,
      53,
      12
    ],
    "overview": "A young girl is raised as a killer in the Yanbian province of China. She hides her identity and travels to South Korea where she hopes to lead a quiet life but becomes involved with two mysterious men.",
    "release_date": "2017-06-08"
  },
  {
    "title": "Filth",
    "vote_average": 6.863,
    "vote_count": 1595,
    "poster_path": "/AeIodobH6Z8jvtHhqRSrqYrxGSo.jpg",
    "genre_ids": [
      80,
      18,
      35
    ],
    "overview": "A bigoted junkie cop suffering from bipolar disorder and drug addiction manipulates and hallucinates his way through the festive season in a bid to secure promotion and win back his wife and daughter.",
    "release_date": "2013-09-23"
  },
  {
    "title": "Year of the Dragon",
    "vote_average": 6.859,
    "vote_count": 362,
    "poster_path": "/c8SfIgwR5mfu0c0qTBKbsvBfecJ.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "In New York, racist Capt. Stanley White becomes obsessed with destroying a Chinese-American drug ring run by Joey Tai, an up-and-coming young gangster as ambitious as he is ruthless. While pursuing an unauthorized investigation, White grows increasingly willing to violate police protocol, resorting to progressively violent measures -- even as his concerned wife, Connie, and his superiors beg him to consider the consequences of his actions.",
    "release_date": "1985-08-16"
  },
  {
    "title": "Dirty Pretty Things",
    "vote_average": 6.856,
    "vote_count": 407,
    "poster_path": "/nWpXOqB1STDq8ji3rQawcg1fGS9.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "An undocumented immigrant finds a human heart in one of the toilets of the west London hotel where he works with other undocumented immigrants.",
    "release_date": "2002-09-05"
  },
  {
    "title": "The Thomas Crown Affair",
    "vote_average": 6.856,
    "vote_count": 443,
    "poster_path": "/oODAwa2AK3fXvK93GCbq7dFLZPi.jpg",
    "genre_ids": [
      80,
      10749,
      18
    ],
    "overview": "Young businessman, Thomas Crown is bored and decides to plan a robbery and assigns a professional agent with the right information to the job. However, Crown is soon betrayed yet cannot blow his cover because he’s in love.",
    "release_date": "1968-06-26"
  },
  {
    "title": "Memory",
    "vote_average": 6.855,
    "vote_count": 1339,
    "poster_path": "/4Q1n3TwieoULnuaztu9aFjqHDTI.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",
    "release_date": "2022-04-28"
  },
  {
    "title": "Game Night",
    "vote_average": 6.854,
    "vote_count": 5476,
    "poster_path": "/85R8LMyn9f2Lev2YPBF8Nughrkv.jpg",
    "genre_ids": [
      9648,
      35,
      80
    ],
    "overview": "Max and Annie's weekly game night gets kicked up a notch when Max's brother Brooks arranges a murder mystery party -- complete with fake thugs and federal agents. So when Brooks gets kidnapped, it's all supposed to be part of the game. As the competitors set out to solve the case, they start to learn that neither the game nor Brooks are what they seem to be. The friends soon find themselves in over their heads as each twist leads to another unexpected turn over the course of one chaotic night.",
    "release_date": "2018-02-15"
  },
  {
    "title": "American Hustle",
    "vote_average": 6.854,
    "vote_count": 6936,
    "poster_path": "/koXGRfatN0tURFWMA0Keb0p0Gtg.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A conman and his seductive partner are forced to work for a wild FBI agent, who pushes them into a world of Jersey power-brokers and the Mafia.",
    "release_date": "2013-12-03"
  },
  {
    "title": "The Crying Game",
    "vote_average": 6.854,
    "vote_count": 687,
    "poster_path": "/4nbMk5qoZqIL7vdGFip5VAxI1Jc.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Irish Republican Army member Fergus forms an unexpected bond with Jody, a kidnapped British soldier in his custody, despite the warnings of fellow IRA members Jude and Maguire. Jody makes Fergus promise he'll visit his girlfriend, Dil, in London, and when Fergus flees to the city, he seeks her out. Hounded by his former IRA colleagues, he finds himself increasingly drawn to the enigmatic, and surprising, Dil.",
    "release_date": "1992-09-02"
  },
  {
    "title": "36th Precinct",
    "vote_average": 6.853,
    "vote_count": 522,
    "poster_path": "/exD0FsvhkZqetOVOYrfGqwnc7nX.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "The film takes place in Paris, where two cops are competing for the vacant seat of chief of police while in the middle of a search for a gang of violent thieves. The movie is directed by Olivier Marchal, a former police officer who spent 12 years with the French police before creating this story, which is taken in part from real facts that happened during the 1980s in France.",
    "release_date": "2004-11-24"
  },
  {
    "title": "Army of Thieves",
    "vote_average": 6.852,
    "vote_count": 1826,
    "poster_path": "/iPTZGFmPs7HsXHYxiuxGolihjOH.jpg",
    "genre_ids": [
      28,
      53,
      80,
      35
    ],
    "overview": "A mysterious woman recruits bank teller Ludwig Dieter to lead a group of aspiring thieves on a top-secret heist during the early stages of the zombie apocalypse.",
    "release_date": "2021-10-27"
  },
  {
    "title": "Piranhas",
    "vote_average": 6.851,
    "vote_count": 490,
    "poster_path": "/pWRGR6xqgXmODBhlLdxSsYJASTR.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A gang of teenage boys stalk the streets of Naples armed with hand guns and AK-47s to do their mob bosses' bidding – until they decide to be the bosses themselves.",
    "release_date": "2019-02-14"
  },
  {
    "title": "Dheepan",
    "vote_average": 6.846,
    "vote_count": 434,
    "poster_path": "/vsOgF4KppWNm7fs71YrERviNNl4.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Three people who have lost everything, a soldier tired of fighting, a young woman and a little girl, pose as a family to escape the civil war in Sri Lanka. They emigrate to France and settle in a chaotic neighborhood on the outskirts of Paris, where apparently the law no longer exists; but they, who barely know each other, struggle to survive there, even when the ghosts of war begin to haunt them again.",
    "release_date": "2015-08-26"
  },
  {
    "title": "Payback",
    "vote_average": 6.846,
    "vote_count": 1662,
    "poster_path": "/gl295sH8213lY8aQ8hS2tTbuzYD.jpg",
    "genre_ids": [
      80,
      28,
      18
    ],
    "overview": "With friends like these, who needs enemies? That's the question bad guy Porter is left asking after his wife and partner steal his heist money and leave him for dead -- or so they think. Five months and an endless reservoir of bitterness later, Porter's partners and the crooked cops on his tail learn how bad payback can be.",
    "release_date": "1999-02-05"
  },
  {
    "title": "Phone Booth",
    "vote_average": 6.844,
    "vote_count": 3477,
    "poster_path": "/o9b4cA1USAUXz0oxwWVja7sMNFa.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "A slick New York publicist who picks up a ringing receiver in a phone booth is told that if he hangs up, he'll be killed... and the little red light from a laser rifle sight is proof that the caller isn't kidding.",
    "release_date": "2003-04-04"
  },
  {
    "title": "22 Jump Street",
    "vote_average": 6.839,
    "vote_count": 7576,
    "poster_path": "/850chzYHYbT3IISl6Q7dbBuFP2B.jpg",
    "genre_ids": [
      80,
      35,
      28
    ],
    "overview": "After making their way through high school (twice), big changes are in store for officers Schmidt and Jenko when they go deep undercover at a local college. But when Jenko meets a kindred spirit on the football team, and Schmidt infiltrates the bohemian art major scene, they begin to question their partnership. Now they don't have to just crack the case - they have to figure out if they can have a mature relationship. If these two overgrown adolescents can grow from freshmen into real men, college might be the best thing that ever happened to them.",
    "release_date": "2014-06-05"
  },
  {
    "title": "Breakdown",
    "vote_average": 6.838,
    "vote_count": 838,
    "poster_path": "/h6POHvMnoqBVpAFQXCMBoTjru9.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "When his SUV breaks down on a remote Southwestern road, Jeff Taylor lets his wife, Amy, hitch a ride with a trucker to get help. When she doesn't return, Jeff fixes his SUV and tracks down the trucker -- who tells the police he's never seen Amy. Johnathan Mostow's tense thriller then follows Jeff's desperate search for his wife, which eventually uncovers a small town's murderous secret.",
    "release_date": "1997-05-02"
  },
  {
    "title": "Siberian Education",
    "vote_average": 6.835,
    "vote_count": 515,
    "poster_path": "/pSXguX0FmIvRr7r85uSZW96tLut.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "The story of a gang of children growing up in a community of banished criminals, in a forgotten corner of the former Soviet Union. This community rejects the world outside. The only law it obeys… is its own. Against this backdrop two best friends, Kolyma and Gagarin, gradually become fierce enemies as they find themselves on opposite sides of the strict code of honour of the ‘honest criminal’ brotherhood.",
    "release_date": "2013-02-27"
  },
  {
    "title": "The Mule",
    "vote_average": 6.834,
    "vote_count": 4677,
    "poster_path": "/vkOfx5meJvFb4qmAJU7j6v8IIpZ.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Earl Stone, a man in his eighties, is broke, alone, and facing foreclosure of his business when he is offered a job that simply requires him to drive. Easy enough, but, unbeknownst to Earl, he's just signed on as a drug courier for a Mexican cartel. He does so well that his cargo increases exponentially, and Earl hit the radar of hard-charging DEA agent Colin Bates.",
    "release_date": "2018-12-14"
  },
  {
    "title": "Bad Times at the El Royale",
    "vote_average": 6.834,
    "vote_count": 3345,
    "poster_path": "/iNtFgXqXPRMkm1QO8CHn5sHfUgE.jpg",
    "genre_ids": [
      53,
      18,
      9648,
      80
    ],
    "overview": "Lake Tahoe, 1969. Seven strangers, each one with a secret to bury, meet at El Royale, a decadent motel with a dark past. In the course of a fateful night, everyone will have one last shot at redemption.",
    "release_date": "2018-10-04"
  },
  {
    "title": "Let Him Go",
    "vote_average": 6.833,
    "vote_count": 577,
    "poster_path": "/EsLZoT8oHhQlGd1QpdbnvnwTzO.jpg",
    "genre_ids": [
      18,
      53,
      80,
      37
    ],
    "overview": "Following the loss of their son, a retired sheriff and his wife leave their Montana ranch to rescue their young grandson from the clutches of a dangerous family living off the grid in the Dakotas.",
    "release_date": "2020-11-05"
  },
  {
    "title": "The Pink Panther Strikes Again",
    "vote_average": 6.833,
    "vote_count": 489,
    "poster_path": "/GGCch9LNAKwp4ZADAcNz1hd1dn.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Charles Dreyfus, who has finally cracked over inspector Clouseau's antics, escapes from a mental institution and launches an elaborate plan to get rid of Clouseau once and for all.",
    "release_date": "1976-12-15"
  },
  {
    "title": "Fantomas",
    "vote_average": 6.833,
    "vote_count": 672,
    "poster_path": "/59I8CjwhPvYOhTlQDMRxVKdafw2.jpg",
    "genre_ids": [
      35,
      80,
      12
    ],
    "overview": "Fantômas is a man of many disguises. He uses maquillage as a weapon. He can impersonate anyone using an array of masks and can create endless confusion by constantly changing his appearance.",
    "release_date": "1964-11-04"
  },
  {
    "title": "Spy",
    "vote_average": 6.831,
    "vote_count": 5741,
    "poster_path": "/6On9Ed52fz8W1h9PzaDQ12ZfHdn.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "A desk-bound CIA analyst volunteers to go undercover to infiltrate the world of a deadly arms dealer, and prevent diabolical global disaster.",
    "release_date": "2015-05-06"
  },
  {
    "title": "Now You See Me 2",
    "vote_average": 6.828,
    "vote_count": 10311,
    "poster_path": "/A81kDB6a1K86YLlcOtZB27jriJh.jpg",
    "genre_ids": [
      80,
      53,
      28,
      9648
    ],
    "overview": "One year after outwitting the FBI and winning the public’s adulation with their mind-bending spectacles, the Four Horsemen resurface only to find themselves face to face with a new enemy who enlists them to pull off their most dangerous heist yet.",
    "release_date": "2016-06-02"
  },
  {
    "title": "The Bank Job",
    "vote_average": 6.829,
    "vote_count": 2132,
    "poster_path": "/ayrGDJDsSBczjztGUWKqmzL97xg.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "Terry is a small-time car dealer trying to leave his shady past behind and start a family. Martine is a beautiful model from Terry's old neighbourhood who knows that Terry is no angel. When Martine proposes a foolproof plan to rob a bank, Terry recognises the danger but realises this may be the opportunity of a lifetime. As the resourceful band of thieves burrows its way into a safe-deposit vault at a Lloyds Bank, they quickly realise that, besides millions in riches, the boxes also contain secrets that implicate everyone from London's most notorious underworld gangsters to powerful government figures, and even the Royal Family. Although the heist makes headlines throughout Britain for several days, a government gag order eventually brings all reporting of the case to an immediate halt.",
    "release_date": "2008-02-28"
  },
  {
    "title": "Mean Creek",
    "vote_average": 6.827,
    "vote_count": 335,
    "poster_path": "/47icHsfwq7qpfPTuGwZxAtQ0olJ.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Teenagers living in small-town Oregon take a boat trip for a birthday celebration. When they get an idea to play a mean trick on the town bully, it suddenly goes too far. Soon they're forced to deal with the unexpected consequences of their actions.",
    "release_date": "2004-01-15"
  },
  {
    "title": "Burn Out",
    "vote_average": 6.825,
    "vote_count": 379,
    "poster_path": "/3LeFOvzjZuIC7cQiXDeSIy1ym7a.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Tony, a promising young motorcycle racer, is forced to do perilous drug runs to save the mother of his child from a dangerous mobster.",
    "release_date": "2018-01-03"
  },
  {
    "title": "Police Story 3: Super Cop",
    "vote_average": 6.825,
    "vote_count": 441,
    "poster_path": "/1C49MPtKZ8fZXtzwSj4Ha0eEEjl.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "A Hong Kong detective teams up with his female Red Chinese counterpart to stop a Chinese drug czar.",
    "release_date": "1992-07-04"
  },
  {
    "title": "We're the Millers",
    "vote_average": 6.822,
    "vote_count": 8459,
    "poster_path": "/qF2LJ0jwWrtXSuT4AFD5OS2IqaT.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
    "release_date": "2013-08-07"
  },
  {
    "title": "Kiss of the Dragon",
    "vote_average": 6.821,
    "vote_count": 1095,
    "poster_path": "/A1GrGdX4AgCRDweg9X3x8JsZrEc.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Liu Jian, an elite Chinese police officer, comes to Paris to arrest a Chinese drug lord. When Jian is betrayed by a French officer and framed for murder, he must go into hiding and find new allies.",
    "release_date": "2001-07-06"
  },
  {
    "title": "Fast & Furious 6",
    "vote_average": 6.8,
    "vote_count": 10150,
    "poster_path": "/thSmnRdrzPBBospIOJjLZBReqzo.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries; Dominic unexpectedly gets sidetracked with facing his presumed deceased girlfriend, Letty.",
    "release_date": "2013-05-21"
  },
  {
    "title": "Can You Ever Forgive Me?",
    "vote_average": 6.814,
    "vote_count": 1193,
    "poster_path": "/hPuZR2bFoV0kuBrA98exWyvTf40.jpg",
    "genre_ids": [
      18,
      80,
      35
    ],
    "overview": "When a bestselling celebrity biographer is no longer able to get published because she has fallen out of step with current tastes, she turns her art form to deception.",
    "release_date": "2018-10-19"
  },
  {
    "title": "Seven Psychopaths",
    "vote_average": 6.812,
    "vote_count": 3681,
    "poster_path": "/cfkdwxJd1gWGmT9kI0XXYfXNLmw.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "A struggling screenwriter inadvertently becomes entangled in the Los Angeles criminal underworld after his oddball friends kidnap a gangster's beloved Shih Tzu.",
    "release_date": "2012-10-12"
  },
  {
    "title": "Rumble in the Bronx",
    "vote_average": 6.813,
    "vote_count": 941,
    "poster_path": "/1nAfchiXHQB3iyhK8fCJJEnNs5A.jpg",
    "genre_ids": [
      80,
      28,
      35,
      53
    ],
    "overview": "Keong comes from Hong Kong to visit New York for his uncle's wedding. His uncle runs a market in the Bronx and Keong offers to help out while Uncle is on his honeymoon. During his stay in the Bronx, Keong befriends a neighbor kid and beats up some neighborhood thugs who cause problems at the market. One of those petty thugs in the local gang stumbles into a criminal situation way over his head.",
    "release_date": "1995-01-21"
  },
  {
    "title": "Vanilla Sky",
    "vote_average": 6.813,
    "vote_count": 3906,
    "poster_path": "/l1MBK6BUkZtjEqceEMubDUtvvK3.jpg",
    "genre_ids": [
      14,
      878,
      18,
      53,
      10749,
      9648,
      80
    ],
    "overview": "David Aames has it all: wealth, good looks and gorgeous women on his arm. But just as he begins falling for the warmhearted Sofia, his face is horribly disfigured in a car accident. That's just the beginning of his troubles as the lines between illusion and reality, between life and death, are blurred.",
    "release_date": "2001-12-10"
  },
  {
    "title": "Reptile",
    "vote_average": 6.808,
    "vote_count": 630,
    "poster_path": "/soIgqZBoTiTgMqUW0JtxsPWAilQ.jpg",
    "genre_ids": [
      80
    ],
    "overview": "Following the brutal murder of a young real estate agent, a hardened detective attempts to uncover the truth in a case where nothing is as it seems, and by doing so dismantles the illusions in his own life.",
    "release_date": "2023-09-29"
  },
  {
    "title": "Harry Brown",
    "vote_average": 6.809,
    "vote_count": 972,
    "poster_path": "/lk9qVzvPHuL2vX9ixNut9n0KfYD.jpg",
    "genre_ids": [
      53,
      80,
      18,
      28
    ],
    "overview": "An elderly ex-serviceman and widower looks to avenge his best friend's murder by doling out his own form of justice.",
    "release_date": "2009-11-11"
  },
  {
    "title": "11:14",
    "vote_average": 6.809,
    "vote_count": 787,
    "poster_path": "/pR2hj9MvnLeax2efwrEvRkHadgp.jpg",
    "genre_ids": [
      80,
      18,
      53,
      9648
    ],
    "overview": "Tells the seemingly random yet vitally connected story of a set of incidents that all converge one evening at 11:14pm. The story follows the chain of events of five different characters and five different storylines that all converge to tell the story of murder and deceit.",
    "release_date": "2003-09-05"
  },
  {
    "title": "Lock Up",
    "vote_average": 6.805,
    "vote_count": 1110,
    "poster_path": "/WihoHaU9yvhhdoSqDAhiIlNN8g.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "Frank Leone is nearing the end of his prison term for a relatively minor crime. Just before he is paroled, however, Warden Drumgoole takes charge. Drumgoole was assigned to a hell-hole prison after his administration was publicly humiliated by Leone, and has now arrived on the scene to ensure that Leone never sees the light of day.",
    "release_date": "1989-08-04"
  },
  {
    "title": "A Gang Story",
    "vote_average": 6.804,
    "vote_count": 331,
    "poster_path": "/nN3osmlYWNZZtg8vtXrt8c5t8ET.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "After growing up in a poor gypsy camp, Edmond Vidal, aka Momon, has retained a sense of family, unfailing loyalty and pride in his origins. Most of all, he has remained friends with Serge Suttel, with whom he first discovered prison life - for stealing cherries. The two of them inevitably got involved in organized crime. The team they formed, the Ganf Des Lyonnais, made them the most notorious armed robbers of the early 1970s. Their irresistible rise ended in 1974 with a spectacular arrest. Today, as he nears 60, Momon would like to forget that part of his life. He has found peace by retiring from the \"business\". He tends to his wife Janou, who suffered so in the past, and to his children and grandchildren, all of whom have great respect for this man of simple and universal values, so clear-headed and full of kindness. But then Serge Suttel, who has disowned nothing of his past, comes back into the picture.",
    "release_date": "2011-11-10"
  },
  {
    "title": "The Dry",
    "vote_average": 6.801,
    "vote_count": 533,
    "poster_path": "/zM12bfL2TEqVRXjiQIFUWUMLcCg.jpg",
    "genre_ids": [
      80,
      53,
      9648
    ],
    "overview": "Aaron Falk returns to his drought-stricken hometown to attend a tragic funeral. But his return opens a decades-old wound - the unsolved death of a teenage girl.",
    "release_date": "2021-01-01"
  },
  {
    "title": "Blue Ruin",
    "vote_average": 6.798,
    "vote_count": 1359,
    "poster_path": "/q0itEsso2drJXqH9kfdidxIT5dF.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "When the quiet life of a beach bum is upended by dreadful news, he sets off for his childhood home to carry out an act of vengeance. However, he proves an inept assassin and finds himself in a brutal fight to protect his estranged family.",
    "release_date": "2014-04-25"
  },
  {
    "title": "The Call",
    "vote_average": 6.796,
    "vote_count": 2758,
    "poster_path": "/bpYVSeoaQ8MURmmqnojoMJEUmQj.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "Jordan Turner is an experienced 911 operator but when she makes an error in judgment and a call ends badly, Jordan is rattled and unsure if she can continue. But when teenager Casey Welson is abducted in the back of a man's car and calls 911, Jordan is the one called upon to use all of her experience, insights and quick thinking to help Casey escape, and not just to save her, but to make sure the man is brought to justice.",
    "release_date": "2013-03-14"
  },
  {
    "title": "The Unbearable Weight of Massive Talent",
    "vote_average": 6.796,
    "vote_count": 1670,
    "poster_path": "/aqhLeieyTpTUKPOfZ3jzo2La0Mq.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "Creatively unfulfilled and facing financial ruin, Nick Cage must accept a $1 million offer to attend the birthday of a dangerous superfan. Things take a wildly unexpected turn when Cage is recruited by a CIA operative and forced to live up to his own legend, channeling his most iconic and beloved on-screen characters in order to save himself and his loved ones.",
    "release_date": "2022-04-20"
  },
  {
    "title": "The Return of the Pink Panther",
    "vote_average": 6.793,
    "vote_count": 552,
    "poster_path": "/cDi6lHXmY12SxtjcP6IdK7mB3W1.jpg",
    "genre_ids": [
      9648,
      35,
      80
    ],
    "overview": "The famous Pink Panther jewel has once again been stolen and Inspector Clouseau is called in to catch the thief. The Inspector is convinced that 'The Phantom' has returned and utilises all of his resources – himself and his Asian manservant – to reveal the identity of 'The Phantom'.",
    "release_date": "1975-05-21"
  },
  {
    "title": "Bad Boys",
    "vote_average": 6.792,
    "vote_count": 5865,
    "poster_path": "/qKiLKvJaT6rRmd3IBsoVV58luXH.jpg",
    "genre_ids": [
      28,
      35,
      80,
      53
    ],
    "overview": "Marcus Burnett is a henpecked family man. Mike Lowry is a footloose and fancy free ladies' man. Both Miami policemen, they have 72 hours to reclaim a consignment of drugs stolen from under their station's nose. To complicate matters, in order to get the assistance of the sole witness to a murder, they have to pretend to be each other.",
    "release_date": "1995-04-07"
  },
  {
    "title": "The Last Seduction",
    "vote_average": 6.789,
    "vote_count": 322,
    "poster_path": "/kK8IiJDkz2Tv6DwaK60vJVHKH85.jpg",
    "genre_ids": [
      53,
      80,
      10749,
      18
    ],
    "overview": "A devious femme fatale steals her husband’s drug money and hides out in a small town where she meets the perfect dupe for her next scheme.",
    "release_date": "1994-05-26"
  },
  {
    "title": "Presumed Innocent",
    "vote_average": 6.789,
    "vote_count": 610,
    "poster_path": "/jSPWptOsqU1nxXQe6muSPB0kD3c.jpg",
    "genre_ids": [
      9648,
      80,
      53
    ],
    "overview": "Rusty Sabich is a deputy prosecutor engaged in an obsessive affair with a coworker who is murdered. Soon after, he's accused of the crime. And his fight to clear his name becomes a whirlpool of lies and hidden passions.",
    "release_date": "1990-07-27"
  },
  {
    "title": "SuperFly",
    "vote_average": 6.788,
    "vote_count": 356,
    "poster_path": "/gGk9H5PVpWzbsYkmnBeKevQkwwf.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "Career criminal Youngblood Priest wants out of the Atlanta drug scene, but as he ramps up sales, one little slip up threatens to bring the whole operation down before he can make his exit.",
    "release_date": "2018-06-13"
  },
  {
    "title": "Red Notice",
    "vote_average": 6.787,
    "vote_count": 5318,
    "poster_path": "/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
    "release_date": "2021-11-04"
  },
  {
    "title": "Den of Thieves",
    "vote_average": 6.8,
    "vote_count": 2679,
    "poster_path": "/AfybH6GbGFw1F9bcETe2yu25mIE.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "A gritty crime saga which follows the lives of an elite unit of the LA County Sheriff's Dept. and the state's most successful bank robbery crew as the outlaws plan a seemingly impossible heist on the Federal Reserve Bank.",
    "release_date": "2018-01-18"
  },
  {
    "title": "The Naked Gun 2½: The Smell of Fear",
    "vote_average": 6.8,
    "vote_count": 2045,
    "poster_path": "/v9niLQWVzVPB1cP1ThNdEaLZG1Q.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Bumbling lieutenant Frank Drebin is out to foil the big boys in the energy industry, who intend to suppress technology that will put them out of business.",
    "release_date": "1991-06-28"
  },
  {
    "title": "Fallen",
    "vote_average": 6.787,
    "vote_count": 1302,
    "poster_path": "/nEDvTB9cP2oIKY0M1ZdDvuUEJ8d.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Homicide detective John Hobbes witnesses the execution of serial killer Edgar Reese. Soon after the execution the killings start again, and they are very similar to Reese's style.",
    "release_date": "1998-01-16"
  },
  {
    "title": "Cop Land",
    "vote_average": 6.787,
    "vote_count": 1441,
    "poster_path": "/qzR7m6kUhsbdid3xRK2jTXjyNmG.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "Freddy Heflin is the sheriff of a place everyone calls “Cop Land” — a small and seemingly peaceful town populated by the big city police officers he’s long admired. Yet something ugly is taking place behind the town’s peaceful facade. And when Freddy uncovers a massive, deadly conspiracy among these local residents, he is forced to take action and make a dangerous choice between protecting his idols and upholding the law.",
    "release_date": "1997-08-15"
  },
  {
    "title": "Animal Kingdom",
    "vote_average": 6.786,
    "vote_count": 747,
    "poster_path": "/zhj8YPQKuRev5N3KoHacsPnF4mB.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Joshua “J” is taken in by his extended family after his mother dies of an overdose. The clan, ruled by J’s scheming grandmother, is heavily involved in criminal activities, and J is soon indoctrinated into their way of life. But J is given a chance to take another path when a cop seeks to help him.",
    "release_date": "2010-06-03"
  },
  {
    "title": "The Bone Collector",
    "vote_average": 6.784,
    "vote_count": 3248,
    "poster_path": "/4HiIegmRMV147NDLAEhXI8duho.jpg",
    "genre_ids": [
      18,
      9648,
      53,
      80
    ],
    "overview": "Rookie cop, Amelia Donaghy reluctantly teams with Lincoln Rhyme – formerly the department's top homicide detective but now paralyzed as a result of a spinal injury – to catch a grisly serial killer dubbed 'The Bone Collector'. The murderer's special signature is to leave tantalizing clues based on the grim remains of his crimes.",
    "release_date": "1999-11-04"
  },
  {
    "title": "Avengement",
    "vote_average": 6.781,
    "vote_count": 445,
    "poster_path": "/rXPxSAYf3FdQktnOtQnvhUPMhFp.jpg",
    "genre_ids": [
      80,
      28
    ],
    "overview": "While on a prison furlough, a lowly criminal evades his guards and returns to his old stomping ground to take revenge on the people who turned him into a cold blooded killer.",
    "release_date": "2019-05-24"
  },
  {
    "title": "Get Rich or Die Tryin'",
    "vote_average": 6.778,
    "vote_count": 839,
    "poster_path": "/aaEJu8vFKtrAoSRtw3xjCf1aM5d.jpg",
    "genre_ids": [
      18,
      80,
      10402
    ],
    "overview": "A tale of an inner city drug dealer who turns away from crime to pursue his passion, rap music.",
    "release_date": "2005-11-09"
  },
  {
    "title": "Emily the Criminal",
    "vote_average": 6.776,
    "vote_count": 654,
    "poster_path": "/iZvzMpREGiqDQ5eYbx8z70qPgst.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Desperate for income, Emily takes a shady gig buying goods with stolen credit cards supplied by a charismatic middleman named Youcef. Seduced by the quick cash and illicit thrills, they hatch a plan to take their business to the next level.",
    "release_date": "2022-08-12"
  },
  {
    "title": "Chappie",
    "vote_average": 6.776,
    "vote_count": 7543,
    "poster_path": "/6zmKkfSvo4tBtvGSjn5PofWIvP9.jpg",
    "genre_ids": [
      80,
      28,
      878
    ],
    "overview": "Every child comes into the world full of promise, and none more so than Chappie: he is gifted, special, a prodigy. Like any child, Chappie will come under the influence of his surroundings—some good, some bad—and he will rely on his heart and soul to find his way in the world and become his own man. But there's one thing that makes Chappie different from any one else: he is a robot.",
    "release_date": "2015-03-04"
  },
  {
    "title": "Niagara",
    "vote_average": 6.775,
    "vote_count": 346,
    "poster_path": "/m9ftjuwaaKHR4iv5SgMpXA5pIGN.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "Rose Loomis and her older, gloomier husband, George, are vacationing at a cabin in Niagara Falls, N.Y. The couple befriend Polly and Ray Cutler, who are honeymooning in the area. Polly begins to suspect that something is amiss between Rose and George, and her suspicions grow when she sees Rose in the arms of another man. While Ray initially thinks Polly is overreacting, things between George and Rose soon take a shockingly dark turn.",
    "release_date": "1953-01-26"
  },
  {
    "title": "French Connection II",
    "vote_average": 6.774,
    "vote_count": 387,
    "poster_path": "/4DFwE45gtQocpqNrt74O1mFqxyn.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "\"Popeye\" Doyle travels to Marseilles to find Alain Charnier, the drug smuggler that eluded him in New York.",
    "release_date": "1975-05-18"
  },
  {
    "title": "The Fugitives",
    "vote_average": 6.773,
    "vote_count": 346,
    "poster_path": "/kJD3aDqXJs8RZI6LnpscqkSBH5R.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Coming out from jail, Lucas has decided to change his life and behave like a good citizen. But when he is taken hostage in a bank by a hare-brained robber, no cops can believe he is not part of the action.",
    "release_date": "1986-12-17"
  },
  {
    "title": "Hannibal",
    "vote_average": 6.8,
    "vote_count": 4418,
    "poster_path": "/v5wAZwRqpGWmyAaaJ8BBHYuNXnj.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "After having successfully eluded the authorities for years, Hannibal peacefully lives in Italy in disguise as an art scholar. Trouble strikes again when he's discovered leaving a deserving few dead in the process. He returns to America to make contact with now disgraced Agent Clarice Starling, who is suffering the wrath of a malicious FBI rival as well as the media.",
    "release_date": "2001-02-08"
  },
  {
    "title": "Michael Clayton",
    "vote_average": 6.773,
    "vote_count": 1597,
    "poster_path": "/hhkW4yVIGo8Bee3UITKvqOvhNMG.jpg",
    "genre_ids": [
      18,
      53,
      9648,
      80
    ],
    "overview": "A law firm brings in its \"fixer\" to remedy the situation after a lawyer has a breakdown while representing a chemical company that he knows is guilty in a multi-billion dollar class action suit.",
    "release_date": "2007-09-28"
  },
  {
    "title": "The Girl in the Fog",
    "vote_average": 6.77,
    "vote_count": 956,
    "poster_path": "/fuJApAPgHrur08y6icGB5k5Umzo.jpg",
    "genre_ids": [
      9648,
      53,
      80
    ],
    "overview": "A gripping and chilling thriller that brings us to a hazy mountain village where an enigmatic detective is investigating the sudden disappearance of fifteen-year-old girl.",
    "release_date": "2017-10-26"
  },
  {
    "title": "The Drop",
    "vote_average": 6.769,
    "vote_count": 2020,
    "poster_path": "/ehFOkPH0tRdbyghxGDR418Mgn9V.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Bob Saginowski finds himself at the center of a robbery gone awry and entwined in an investigation that digs deep into the neighborhood's past where friends, families, and foes all work together to make a living - no matter the cost.",
    "release_date": "2014-09-12"
  },
  {
    "title": "Shadows and Fog",
    "vote_average": 6.768,
    "vote_count": 332,
    "poster_path": "/5q7ibBZO5uKhkdP9Eeqrc6ypF5u.jpg",
    "genre_ids": [
      35,
      9648,
      80
    ],
    "overview": "With a serial strangler on the loose, a bookkeeper wanders around town searching for the vigilante group intent on catching the killer.",
    "release_date": "1991-12-05"
  },
  {
    "title": "The Italian Job",
    "vote_average": 6.768,
    "vote_count": 5224,
    "poster_path": "/eSkjK4kctyrWpFhxl35GPvSs6tI.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "Charlie Croker pulled off the crime of a lifetime. The one thing that he didn't plan on was being double-crossed. Along with a drop-dead gorgeous safecracker, Croker and his team take off to re-steal the loot and end up in a pulse-pounding, pedal-to-the-metal chase that careens up, down, above and below the streets of Los Angeles.",
    "release_date": "2003-05-30"
  },
  {
    "title": "Fantomas Unleashed",
    "vote_average": 6.768,
    "vote_count": 473,
    "poster_path": "/m5fyoLC3CAZbeo1lJnGtbLsC949.jpg",
    "genre_ids": [
      35,
      80,
      12,
      14
    ],
    "overview": "In the second episode of the trilogy Fantômas kidnaps distinguished scientist professor Marchand with the aim to develop a super weapon that will enable him to menace the world. Fantômas is also planning to abduct a second scientist, professor Lefebvre.",
    "release_date": "1965-12-08"
  },
  {
    "title": "Panic Room",
    "vote_average": 6.767,
    "vote_count": 4625,
    "poster_path": "/7BabiNfuSycl58M9Cgl3Nf97n1F.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Trapped in their New York brownstone's panic room, a hidden chamber built as a sanctuary in the event of break-ins, newly divorced Meg Altman and her young daughter Sarah play a deadly game of cat-and-mouse with three intruders - Burnham, Raoul and Junior - during a brutal home invasion. But the room itself is the focal point because what the intruders really want is inside it.",
    "release_date": "2002-03-29"
  },
  {
    "title": "The World Is Yours",
    "vote_average": 6.765,
    "vote_count": 405,
    "poster_path": "/b8l0pdMuVgqIYXBvNUr4TXdpmFj.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "To escape his life of crime, a Paris drug dealer takes on one last job involving Spain, unhinged gangsters, his longtime crush and his scheming mother.",
    "release_date": "2018-08-15"
  },
  {
    "title": "Black and Blue",
    "vote_average": 6.8,
    "vote_count": 781,
    "poster_path": "/1cSHEKYYP8Dpi4o1iBVd4U75FYt.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "A rookie cop inadvertently captures the murder of a young drug dealer on her body cam. After realizing that the murder was committed by corrupt cops, she teams up with the one person from her community who is willing to help her as she tries to escape both the criminals out for revenge and the police who are desperate to destroy the incriminating footage.",
    "release_date": "2019-10-25"
  },
  {
    "title": "The Enforcer",
    "vote_average": 6.764,
    "vote_count": 804,
    "poster_path": "/vhNk7MYb8OGh8sXL1wgdLlpyJnk.jpg",
    "genre_ids": [
      80,
      28
    ],
    "overview": "Dirty Harry Callahan returns again, this time saddled with a rookie female partner. Together, they must stop a terrorist group consisting of angry Vietnam veterans.",
    "release_date": "1976-12-16"
  },
  {
    "title": "In the Valley of Elah",
    "vote_average": 6.8,
    "vote_count": 925,
    "poster_path": "/aQx5vOURCo4SD71s7BBJIozGmt3.jpg",
    "genre_ids": [
      36,
      18,
      53,
      80,
      9648
    ],
    "overview": "A career officer and his wife work with a police detective to uncover the truth behind their son's disappearance following his return from a tour of duty in Iraq.",
    "release_date": "2007-09-14"
  },
  {
    "title": "Batman: Soul of the Dragon",
    "vote_average": 6.8,
    "vote_count": 313,
    "poster_path": "/uDhnTtSxU5a8DtZdbbin3aZmkmU.jpg",
    "genre_ids": [
      16,
      28,
      12,
      80,
      14
    ],
    "overview": "Bruce Wayne faces a deadly menace from his past, with the help of three former classmates: world-renowned martial artists Richard Dragon, Ben Turner and Lady Shiva.",
    "release_date": "2021-01-12"
  },
  {
    "title": "21 Bridges",
    "vote_average": 6.76,
    "vote_count": 1820,
    "poster_path": "/kDlmrGZROewneCoSwPjKx6Qfown.jpg",
    "genre_ids": [
      80,
      28,
      18
    ],
    "overview": "An embattled NYPD detective, is thrust into a citywide manhunt for a pair of cop killers after uncovering a massive and unexpected conspiracy. As the night unfolds, lines become blurred on who he is pursuing, and who is in pursuit of him.",
    "release_date": "2019-10-24"
  },
  {
    "title": "Bad Education",
    "vote_average": 6.758,
    "vote_count": 623,
    "poster_path": "/gizz5FphOtfSnLaGpRALOZgILd5.jpg",
    "genre_ids": [
      18,
      80,
      36
    ],
    "overview": "A superintendent of a school district works for the betterment of the student’s education when an embezzlement scheme is discovered, threatening to destroy everything.",
    "release_date": "2019-09-08"
  },
  {
    "title": "A Prayer Before Dawn",
    "vote_average": 6.758,
    "vote_count": 526,
    "poster_path": "/toYs3tZrHbSKJS1hmiTY1fJnPjm.jpg",
    "genre_ids": [
      18,
      28,
      80
    ],
    "overview": "The amazing true story of Billy Moore, an English boxer incarcerated in Thailand’s most notorious prison. Thrown into a world of drugs and violence, he finds his best chance to escape is to fight his way out in prison Muay Thai tournaments.",
    "release_date": "2018-05-24"
  },
  {
    "title": "Serial Mom",
    "vote_average": 6.756,
    "vote_count": 612,
    "poster_path": "/lWLLBMvMDafBXH5CRkahOtCORc8.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "She's the perfect all-American parent: a great cook and homemaker, a devoted recycler, and a woman who'll literally kill to keep her family happy.",
    "release_date": "1994-04-13"
  },
  {
    "title": "Four Brothers",
    "vote_average": 6.756,
    "vote_count": 1946,
    "poster_path": "/8cO39cnWSZQi2ncPG5TxL3YRzKc.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "Four adopted brothers return to their Detroit hometown when their mother is murdered and vow to exact revenge on the killers.",
    "release_date": "2005-08-11"
  },
  {
    "title": "Samaritan",
    "vote_average": 6.754,
    "vote_count": 1813,
    "poster_path": "/zgH8Ej50n2cvJCMJrxd4twEwSqz.jpg",
    "genre_ids": [
      878,
      80,
      28
    ],
    "overview": "Thirteen year old Sam Cleary suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 25 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.",
    "release_date": "2022-08-25"
  },
  {
    "title": "Boiler Room",
    "vote_average": 6.752,
    "vote_count": 606,
    "poster_path": "/uYbkko9u3RUbrFO7oDCScxdOlvQ.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A college dropout gets a job as a broker for a suburban investment firm and is on the fast track to success—but the job might not be as legitimate as it sounds.",
    "release_date": "2000-02-18"
  },
  {
    "title": "Klute",
    "vote_average": 6.752,
    "vote_count": 385,
    "poster_path": "/tVyINAsNGSgD1OIstqwCcs7wyGH.jpg",
    "genre_ids": [
      53,
      9648,
      80
    ],
    "overview": "A high-priced call girl is forced to depend on a reluctant private eye when she is stalked by a psychopath.",
    "release_date": "1971-06-23"
  },
  {
    "title": "A Haunting in Venice",
    "vote_average": 6.744,
    "vote_count": 1664,
    "poster_path": "/1Xgjl22MkAZQUavvOeBqRehrvqO.jpg",
    "genre_ids": [
      9648,
      53,
      80
    ],
    "overview": "Celebrated sleuth Hercule Poirot, now retired and living in self-imposed exile in Venice, reluctantly attends a Halloween séance at a decaying, haunted palazzo. When one of the guests is murdered, the detective is thrust into a sinister world of shadows and secrets.",
    "release_date": "2023-09-13"
  },
  {
    "title": "The Highwaymen",
    "vote_average": 6.746,
    "vote_count": 1873,
    "poster_path": "/4bRYg4l12yDuJvAfqvUOPnBrxno.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "In 1934, Frank Hamer and Manny Gault, two former Texas Rangers, are commissioned to put an end to the wave of vicious crimes perpetrated by Bonnie Parker and Clyde Barrow, a notorious duo of infamous robbers and cold-blooded killers who nevertheless are worshiped by the public.",
    "release_date": "2019-03-15"
  },
  {
    "title": "The Clan",
    "vote_average": 6.744,
    "vote_count": 388,
    "poster_path": "/m6iPqGhtIAgGRQcfqxSYbRrlK3F.jpg",
    "genre_ids": [
      18,
      36,
      80
    ],
    "overview": "In Argentina, between 1982 and 1985, the Puccios, a well-established family of San Isidro, an upper-class suburb of Buenos Aires, kidnap several people and hold them as hostages for a ransom.",
    "release_date": "2015-08-13"
  },
  {
    "title": "The Whistleblower",
    "vote_average": 6.744,
    "vote_count": 508,
    "poster_path": "/iIVcea2BHHi7RJgucGEmpt3zkED.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "Nebraska cop Kathryn Bolkovac discovers a deadly sex trafficking ring while serving as a U.N. peacekeeper in post-war Bosnia. Risking her own life to save the lives of others, she uncovers an international conspiracy that is determined to stop her, no matter the cost.",
    "release_date": "2010-09-13"
  },
  {
    "title": "Kung Fu Jungle",
    "vote_average": 6.743,
    "vote_count": 401,
    "poster_path": "/myZQ4WocOQQCXNGVJkHeeJ1jTEj.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "A martial arts instructor working at a police academy gets imprisoned after killing a man by accident. But when a vicious killer starts targeting martial arts masters, the instructor offers to help the police in return for his freedom.",
    "release_date": "2014-10-31"
  },
  {
    "title": "The Devil's Rejects",
    "vote_average": 6.743,
    "vote_count": 1314,
    "poster_path": "/drZz4AuI7trq6BxlH9Xa4v4O0Pb.jpg",
    "genre_ids": [
      18,
      27,
      80
    ],
    "overview": "The murderous, backwoods Firefly family take to the road to escape the vengeful Sheriff Wydell, who is not afraid of being as ruthless as his target.",
    "release_date": "2005-07-22"
  },
  {
    "title": "Carbone",
    "vote_average": 6.7,
    "vote_count": 396,
    "poster_path": "/gbFYXClD52Axdvo5h9XRVLDsBY.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "In danger of losing his business, Anthony Roca, an ordinary man, develops a scam that will become the heist of the century. Overtaken by the crime, he will have to deal with betrayal, murder and settling.",
    "release_date": "2017-11-01"
  },
  {
    "title": "The Thomas Crown Affair",
    "vote_average": 6.738,
    "vote_count": 1073,
    "poster_path": "/5yqs1MVlqdIg1DY5adC5jFx3d7j.jpg",
    "genre_ids": [
      18,
      80,
      10749
    ],
    "overview": "A very rich and successful playboy amuses himself by stealing artwork, but may have met his match in a seductive detective.",
    "release_date": "1999-08-06"
  },
  {
    "title": "Bad Samaritan",
    "vote_average": 6.738,
    "vote_count": 625,
    "poster_path": "/nOeRjOEvx63NPohJPJMXCkQaz4X.jpg",
    "genre_ids": [
      53,
      80,
      27
    ],
    "overview": "A thief makes a disturbing discovery in the house where he breaks in. Later, when he returns to the same house with his partner in crime, things are no longer how he expected.",
    "release_date": "2018-04-19"
  },
  {
    "title": "The Equalizer 2",
    "vote_average": 6.737,
    "vote_count": 4907,
    "poster_path": "/cQvc9N6JiMVKqol3wcYrGshsIdZ.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Robert McCall, who serves an unflinching justice for the exploited and oppressed, embarks on a relentless, globe-trotting quest for vengeance when a long-time girl friend is murdered.",
    "release_date": "2018-07-19"
  },
  {
    "title": "Family Plot",
    "vote_average": 6.736,
    "vote_count": 415,
    "poster_path": "/bv8vJAZE8xTUBOevErn15D9w6lJ.jpg",
    "genre_ids": [
      35,
      80,
      53
    ],
    "overview": "Spiritualist Blanche Tyler and her cab-driving boyfriend encounter a pair of serial kidnappers while trailing a missing heir in California.",
    "release_date": "1976-04-09"
  },
  {
    "title": "Con Air",
    "vote_average": 6.736,
    "vote_count": 3850,
    "poster_path": "/kOKjgrEzGOP92rVQ6srA9jtp60l.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Newly-paroled former US Army ranger Cameron Poe is headed back to his wife, but must fly home aboard a prison transport flight dubbed \"Jailbird\" taking the “worst of the worst” prisoners, a group described as “pure predators”, to a new super-prison. Poe faces impossible odds when the transport plane is skyjacked mid-flight by the most vicious criminals in the country led by the mastermind — genius serial killer Cyrus \"The Virus\" Grissom, and backed by black militant Diamond Dog and psychopath Billy Bedlam.",
    "release_date": "1997-06-05"
  },
  {
    "title": "Death Sentence",
    "vote_average": 6.7,
    "vote_count": 1055,
    "poster_path": "/3rdEAMh4a3pc7GO6fSkJwpt7BWX.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "Nick Hume is a mild-mannered executive with a perfect life, until one gruesome night he witnesses something that changes him forever. Transformed by grief, Hume eventually comes to the disturbing conclusion that no length is too great when protecting his family.",
    "release_date": "2007-08-31"
  },
  {
    "title": "Body Double",
    "vote_average": 6.733,
    "vote_count": 709,
    "poster_path": "/lRFm5P2AdOGpELwm3HHhmUz6k5I.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "overview": "After losing an acting role and his girlfriend, Jake Scully finally catches a break: he gets offered a gig house-sitting in the Hollywood Hills. While peering through the beautiful home's telescope one night, he spies a gorgeous woman dancing in her window. But when he witnesses the girl's murder, it leads Scully through the netherworld of the adult entertainment industry on a search for answers—with porn actress Holly Body as his guide.",
    "release_date": "1984-10-25"
  },
  {
    "title": "Machine Gun Preacher",
    "vote_average": 6.731,
    "vote_count": 971,
    "poster_path": "/A9gRYTyNLGJuxHmqdGM5UxHxJtB.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "The true story of Sam Childers, a former drug-dealing biker who finds God and became a crusader for hundreds of Sudanese children who've been kidnapped and pressed into duty as soldiers.",
    "release_date": "2011-09-23"
  },
  {
    "title": "Oliver Twist",
    "vote_average": 6.732,
    "vote_count": 1112,
    "poster_path": "/zhPdYZ3x2uanhM1SyBj4CuL6hSa.jpg",
    "genre_ids": [
      80,
      18,
      10751
    ],
    "overview": "Oliver Twist the modern filmed version of Charles Dickens bestseller, a Roman Polanski adaptation. The classic Dickens tale, where an orphan meets a pickpocket on the streets of London. From there, he joins a household of boys who are trained to steal for their master.",
    "release_date": "2005-09-23"
  },
  {
    "title": "Kill the Irishman",
    "vote_average": 6.73,
    "vote_count": 573,
    "poster_path": "/2alYRtXyNKdCvIhMRofdC0lvLZi.jpg",
    "genre_ids": [
      28,
      80,
      53,
      18
    ],
    "overview": "Over the summer of 1976, thirty-six bombs detonate in the heart of Cleveland while a turf war raged between Irish mobster Danny Greene and the Italian mafia. Based on a true story, Kill the Irishman chronicles Greene's heroic rise from a tough Cleveland neighborhood to become an enforcer in the local mob.",
    "release_date": "2011-03-10"
  },
  {
    "title": "Logan Lucky",
    "vote_average": 6.729,
    "vote_count": 3279,
    "poster_path": "/mQrhrBaaHvRfBQq0Px3HtVbH9iE.jpg",
    "genre_ids": [
      35,
      80,
      28,
      18
    ],
    "overview": "Trying to reverse a family curse, brothers Jimmy and Clyde Logan set out to execute an elaborate robbery during the legendary Coca-Cola 600 race at the Charlotte Motor Speedway.",
    "release_date": "2017-08-17"
  },
  {
    "title": "Bottle Rocket",
    "vote_average": 6.7,
    "vote_count": 976,
    "poster_path": "/6E7mJ5wpzTFbYFbJvTzzZ8Til9C.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "Upon his release from a mental hospital following a nervous breakdown, the directionless Anthony joins his friend Dignan, who seems far less sane than the former. Dignan has hatched a harebrained scheme for an as-yet-unspecified crime spree that somehow involves his former boss, the (supposedly) legendary Mr. Henry.",
    "release_date": "1996-02-21"
  },
  {
    "title": "Ocean's Thirteen",
    "vote_average": 6.724,
    "vote_count": 5979,
    "poster_path": "/pBsZs4zYUiUTemqbikTZ76iQRaU.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "Danny Ocean's team of criminals are back and composing a plan more personal than ever. When ruthless casino owner Willy Bank doublecrosses Reuben Tishkoff, causing a heart attack, Danny Ocean vows that he and his team will do anything to bring down Willy Bank along with everything he's got. Even if it means asking for help from an enemy.",
    "release_date": "2007-06-05"
  },
  {
    "title": "May God Save Us",
    "vote_average": 6.723,
    "vote_count": 408,
    "poster_path": "/nTF8FzV5CgiH4Qi8YrF1Ef3w63U.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "Madrid, summer 2011. Economic crisis. 15-M movement and 1.5 million pilgrims waiting for the Pope’s arrival live side by side in a Madrid that’s hotter and more chaotic than ever. In this context, detectives Velarde and Alfaro must find what seems to be a serial killer. Their against-the-clock hunt will make them realise something they’d never imagined: neither of them are so very different from the killer.",
    "release_date": "2016-10-28"
  },
  {
    "title": "See No Evil, Hear No Evil",
    "vote_average": 6.723,
    "vote_count": 894,
    "poster_path": "/2eX1RUVj4mIGJTX5p8fJ0SSIcn4.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "A murder takes place in the shop of David Lyons, a deaf man who fails to hear the gunshot being fired. Outside, blind man Wally Karue hears the shot but cannot see the perpetrator. Both are arrested, but escape to form an unlikely partnership. Being chased by both the law AND the original killers, can the pair work together to outwit them all?",
    "release_date": "1989-05-12"
  },
  {
    "title": "Luther: The Fallen Sun",
    "vote_average": 6.721,
    "vote_count": 791,
    "poster_path": "/tvX2JltXjmpHLQ7BBijyVc9STv4.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "overview": "A gruesome serial killer is terrorizing London while brilliant but disgraced detective John Luther sits behind bars. Haunted by his failure to capture the cyber psychopath who now taunts him, Luther decides to break out of prison to finish the job by any means necessary.",
    "release_date": "2023-02-24"
  },
  {
    "title": "Henry: Portrait of a Serial Killer",
    "vote_average": 6.721,
    "vote_count": 636,
    "poster_path": "/yIvaGoLc95R4noKPjfTYUvuV7qp.jpg",
    "genre_ids": [
      80,
      27,
      53
    ],
    "overview": "Henry likes to kill people, in different ways each time. Henry shares an apartment with Otis. When Otis' sister comes to stay, we see both sides of Henry: \"the guy next door\" and the serial killer.",
    "release_date": "1986-09-24"
  },
  {
    "title": "Fletch",
    "vote_average": 6.7,
    "vote_count": 613,
    "poster_path": "/zYYWgIIY1YPuABQgGw6mOdQsQ4g.jpg",
    "genre_ids": [
      35,
      80,
      9648
    ],
    "overview": "When investigative reporter Irwin \"Fletch\" Fletcher goes undercover to write a piece on the drug trade at a local beach, he's approached by wealthy businessman Alan Stanwyk, who offers him $50,000 to murder him. With sarcastic wit and a knack for disguises, Fletch sets out to uncover Stanwyk's story.",
    "release_date": "1985-05-31"
  },
  {
    "title": "Fantomas vs. Scotland Yard",
    "vote_average": 6.721,
    "vote_count": 475,
    "poster_path": "/wrs0leNyQwVbUOoXCnfMf3Bix4V.jpg",
    "genre_ids": [
      35,
      80,
      12,
      14
    ],
    "overview": "In the third and final episode of the trilogy, Fantômas imposes a head tax on the rich, threatening to kill those who do not comply.",
    "release_date": "1967-03-16"
  },
  {
    "title": "King of New York",
    "vote_average": 6.72,
    "vote_count": 583,
    "poster_path": "/1MyH4MJAJZJbb6wDVeOc2bTECtK.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "A former drug lord returns from prison determined to wipe out all his competition and distribute the profits of his operations to New York's poor and lower classes in this stylish and ultra violent modern twist on Robin Hood.",
    "release_date": "1990-07-18"
  },
  {
    "title": "Rush Hour 2",
    "vote_average": 6.718,
    "vote_count": 3775,
    "poster_path": "/aBQf2vMiCINeVC9v6BGVYKXurTh.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "It's vacation time for Carter as he finds himself alongside Lee in Hong Kong wishing for more excitement. While Carter wants to party and meet the ladies, Lee is out to track down a Triad gang lord who may be responsible for killing two men at the American Embassy. Things get complicated as the pair stumble onto a counterfeiting plot. The boys are soon up to their necks in fist fights and life-threatening situations. A trip back to the U.S. may provide the answers about the bombing, the counterfeiting, and the true allegiance of sexy customs agent Isabella.",
    "release_date": "2001-08-03"
  },
  {
    "title": "Green Room",
    "vote_average": 6.718,
    "vote_count": 2507,
    "poster_path": "/evZicaR7nXe4LiD9G6QYTorcJGO.jpg",
    "genre_ids": [
      27,
      80,
      53
    ],
    "overview": "A punk rock band becomes trapped in a secluded venue after finding a scene of violence. For what they saw, the band themselves become targets of violence from a gang of white power skinheads, who want to eliminate all evidence of the crime.",
    "release_date": "2016-04-15"
  },
  {
    "title": "Thunderbolt and Lightfoot",
    "vote_average": 6.715,
    "vote_count": 476,
    "poster_path": "/530RZ2HsxAgKVO4joNFjAgucbri.jpg",
    "genre_ids": [
      80,
      35,
      28
    ],
    "overview": "With the help of an irreverent young sidekick, a bank robber gets his old gang back together to organise a daring new heist.",
    "release_date": "1974-05-23"
  },
  {
    "title": "Ruby & Quentin",
    "vote_average": 6.715,
    "vote_count": 764,
    "poster_path": "/cVmCfQJ1U744FsWWJmeK5bujy2d.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "After hiding his loot and getting thrown in jail, Ruby, a brooding outlaw encounters Quentin, a dim-witted and garrulous giant who befriends him. After Quentin botches a solo escape attempt, they make a break together. Unable to shake the clumsy Quentin Ruby is forced to take him along as he pursues his former partners in crime to avenge the death of the woman he loved and get to the money.",
    "release_date": "2003-10-22"
  },
  {
    "title": "Boston Strangler",
    "vote_average": 6.713,
    "vote_count": 536,
    "poster_path": "/oZJfw78ZyPmgNJ0YJ8070nKEF4Y.jpg",
    "genre_ids": [
      80,
      9648,
      53,
      18,
      36
    ],
    "overview": "Reporters Loretta McLaughlin and Jean Cole bravely pursue the story of the Boston Strangler at great personal risk, putting their own lives on the line in their quest to uncover the truth.",
    "release_date": "2023-03-17"
  },
  {
    "title": "El Mariachi",
    "vote_average": 6.712,
    "vote_count": 1042,
    "poster_path": "/zRh7K4SV1xQ419m8gzGITak51vc.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "El Mariachi just wants to play his guitar and carry on the family tradition. Unfortunately, the town he tries to find work in has another visitor, a killer who carries his guns in a guitar case. The drug lord and his henchmen mistake el Mariachi for the killer, Azul, and chase him around town trying to kill him and get his guitar case.",
    "release_date": "1992-09-04"
  },
  {
    "title": "Confessions of a Dangerous Mind",
    "vote_average": 6.712,
    "vote_count": 1054,
    "poster_path": "/mM58ABMRzwn5zVx6BS7IiNK0j3F.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "Television made him famous, but his biggest hits happened off screen. Television producer by day, CIA assassin by night, Chuck Barris was recruited by the CIA at the height of his TV career and trained to become a covert operative. Or so Barris said.",
    "release_date": "2002-12-31"
  },
  {
    "title": "Pain Hustlers",
    "vote_average": 6.709,
    "vote_count": 378,
    "poster_path": "/m0gM9jE1KmCkXZRqkeNYEQZdVsZ.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "After losing her job, a single mom falls into a lucrative but ultimately dangerous scheme selling prescription drugs.",
    "release_date": "2023-10-20"
  },
  {
    "title": "Murder on the Orient Express",
    "vote_average": 6.71,
    "vote_count": 9422,
    "poster_path": "/iBlfxlw8qwtUS0R8YjIU7JtM6LM.jpg",
    "genre_ids": [
      9648,
      18,
      80
    ],
    "overview": "Genius Belgian detective Hercule Poirot investigates the murder of an American tycoon aboard the Orient Express train.",
    "release_date": "2017-11-03"
  },
  {
    "title": "The Score",
    "vote_average": 6.708,
    "vote_count": 1519,
    "poster_path": "/fsb4m9XW59mei8GKznvI3lLzcfp.jpg",
    "genre_ids": [
      28,
      80,
      53,
      9648
    ],
    "overview": "An aging thief hopes to retire and live off his ill-gotten wealth when a young kid convinces him into doing one last heist.",
    "release_date": "2001-07-13"
  },
  {
    "title": "Hitman's Wife's Bodyguard",
    "vote_average": 6.7,
    "vote_count": 2042,
    "poster_path": "/6zwGWDpY8Zu0L6W4SYWERBR8Msw.jpg",
    "genre_ids": [
      28,
      35,
      80,
      53
    ],
    "overview": "The world’s most lethal odd couple – bodyguard Michael Bryce and hitman Darius Kincaid – are back on another life-threatening mission. Still unlicensed and under scrutiny, Bryce is forced into action by Darius's even more volatile wife, the infamous international con artist Sonia Kincaid. As Bryce is driven over the edge by his two most dangerous protectees, the trio get in over their heads in a global plot and soon find that they are all that stand between Europe and a vengeful and powerful madman.",
    "release_date": "2021-06-14"
  },
  {
    "title": "Border",
    "vote_average": 6.707,
    "vote_count": 748,
    "poster_path": "/8KzOTRlKjdAKQTemV41hq86ldFS.jpg",
    "genre_ids": [
      14,
      18,
      80
    ],
    "overview": "When a border guard with a sixth sense for identifying smugglers encounters the first person she cannot prove is guilty, she is forced to confront terrifying revelations about herself and humankind.",
    "release_date": "2018-09-27"
  },
  {
    "title": "Weird: The Al Yankovic Story",
    "vote_average": 6.7,
    "vote_count": 333,
    "poster_path": "/qcj2z13G0KjaIgc01ifiUKu7W07.jpg",
    "genre_ids": [
      10402,
      35,
      80
    ],
    "overview": "Exploring every facet of ‘Weird Al’ Yankovic’s life, from his meteoric rise to fame with early hits like ‘Eat It’ and ‘Like a Surgeon’ to his torrid celebrity love affairs and famously depraved lifestyle, this biopic takes audiences on a truly unbelievable journey through Yankovic’s life and career, from gifted child prodigy to the greatest musical legend of all time.",
    "release_date": "2022-09-08"
  },
  {
    "title": "Lethal Weapon 3",
    "vote_average": 6.703,
    "vote_count": 2698,
    "poster_path": "/8FnOudDHPOY7MFJnvQMR1qpuyek.jpg",
    "genre_ids": [
      12,
      28,
      35,
      53,
      80
    ],
    "overview": "Archetypal buddy cops Riggs and Murtaugh are back for another round of high-stakes action, this time setting their collective sights on bringing down a former Los Angeles police lieutenant turned black market weapons dealer. Lorna Cole joins as the beautiful yet hardnosed internal affairs sergeant who catches Riggs's eye.",
    "release_date": "1992-05-15"
  },
  {
    "title": "Demolition Man",
    "vote_average": 6.7,
    "vote_count": 3409,
    "poster_path": "/dq6AmlVFo92PRuoLCcIyFdoRuxf.jpg",
    "genre_ids": [
      80,
      28,
      878
    ],
    "overview": "Simon Phoenix, a violent criminal cryogenically frozen in 1996, escapes during a parole hearing in 2032 in the utopia of San Angeles. Police are incapable of dealing with his violent ways and turn to his captor, who had also been cryogenically frozen after being wrongfully accused of killing 30 innocent people while apprehending Phoenix.",
    "release_date": "1993-10-08"
  },
  {
    "title": "The Transporter",
    "vote_average": 6.698,
    "vote_count": 5010,
    "poster_path": "/v3QIFUWgtVN4wejVuDZowuyJ20W.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Former Special Forces officer, Frank Martin will deliver anything to anyone for the right price, and his no-questions-asked policy puts him in high demand. But when he realizes his latest cargo is alive, it sets in motion a dangerous chain of events. The bound and gagged Lai is being smuggled to France by a shady American businessman, and Frank works to save her as his own illegal activities are uncovered by a French detective.",
    "release_date": "2002-10-02"
  },
  {
    "title": "Going in Style",
    "vote_average": 6.697,
    "vote_count": 2629,
    "poster_path": "/4nfWsdsJfO5srRZgxiWC9xHub0W.jpg",
    "genre_ids": [
      80,
      35
    ],
    "overview": "Desperate to pay the bills and come through for their loved ones, three lifelong pals risk it all by embarking on a daring bid to knock off the very bank that absconded with their money.",
    "release_date": "2017-04-06"
  },
  {
    "title": "The Client",
    "vote_average": 6.7,
    "vote_count": 1045,
    "poster_path": "/oLdkJ4ZjxPtFSUChdjDQvHM9l75.jpg",
    "genre_ids": [
      18,
      53,
      80,
      9648
    ],
    "overview": "A street-wise kid, Mark Sway, sees the suicide of Jerome Clifford, a prominent Louisiana lawyer, whose current client is Barry 'The Blade' Muldano, a Mafia hit-man. Before Jerome shoots himself, he tells Mark where the body of a Senator is buried. Clifford shoots himself and Mark is found at the scene, and both the FBI and the Mafia quickly realize that Mark probably knows more than he says.",
    "release_date": "1994-07-20"
  },
  {
    "title": "21",
    "vote_average": 6.7,
    "vote_count": 4401,
    "poster_path": "/efG8Po57alqSlhqHU1lXJ3duG6t.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Ben Campbell is a young, highly intelligent student at M.I.T. who strives to succeed. Wanting a scholarship to transfer to Harvard School of Medicine to become a doctor, Ben learns that he cannot afford the $300,000 tuition as he comes from a poor, working-class background. But one evening, Ben is introduced by his unorthodox math professor to a small but secretive club of five students, Jill, Choi, Kianna, and Fisher, who are being trained by Professor Rosa to count cards at blackjack.",
    "release_date": "2008-03-27"
  },
  {
    "title": "Taxi",
    "vote_average": 6.696,
    "vote_count": 2315,
    "poster_path": "/egBxj3ude84theXc3cLbBHrWOkQ.jpg",
    "genre_ids": [
      35,
      28,
      80,
      12
    ],
    "overview": "In Marseilles (France), skilled pizza delivery boy Daniel who drives a scooter finally has his dreams come true. He gets a taxi license. Caught by the police for a huge speed infraction, he will help Emilien, a loser inspector who can't drive, on the track of German bank robbers, so he doesn't lose his license and his dream job.",
    "release_date": "1998-04-08"
  },
  {
    "title": "Narc",
    "vote_average": 6.695,
    "vote_count": 473,
    "poster_path": "/uGHFyVdMQKvIXlsLAoXa5nOUGF.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "When the trail goes cold on a murder investigation of a policeman, an undercover narcotics officer is lured back to the force to help solve the case.",
    "release_date": "2002-01-14"
  },
  {
    "title": "Hot Summer Nights",
    "vote_average": 6.693,
    "vote_count": 683,
    "poster_path": "/gsWdYsXkpJx2CYkveEw779O5eMg.jpg",
    "genre_ids": [
      18,
      35,
      80
    ],
    "overview": "A teen winds up in over his head while dealing drugs with a rebellious partner in Cape Cod, Mass.",
    "release_date": "2018-07-26"
  },
  {
    "title": "We Own the Night",
    "vote_average": 6.693,
    "vote_count": 1269,
    "poster_path": "/fcb2c9BcRc21iiWih23FQfT39uB.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "A New York nightclub manager tries to save his brother and father from Russian mafia hitmen.",
    "release_date": "2007-10-12"
  },
  {
    "title": "The Devil's Double",
    "vote_average": 6.692,
    "vote_count": 528,
    "poster_path": "/mpzo9adHhc9WPFtAnbZEHbOff8U.jpg",
    "genre_ids": [
      18,
      28,
      53,
      80,
      10752
    ],
    "overview": "A chilling vision of the House of Saddam Hussein comes to life through the eyes of the man who was forced to become the double of Hussein's sadistic son.",
    "release_date": "2011-02-11"
  },
  {
    "title": "RED",
    "vote_average": 6.689,
    "vote_count": 6382,
    "poster_path": "/8eeK3OB5PeSRQD7BpZcGZKkehG.jpg",
    "genre_ids": [
      28,
      12,
      35,
      80,
      53
    ],
    "overview": "After surviving an assault from a squad of hit men, retired CIA black ops agent Frank Moses reassembles his old team for an all-out war. Frank reunites with old Joe, crazy Marvin and wily Victoria to uncover a massive conspiracy that threatens their lives. Only their expert training will allow them to survive a near-impossible mission -- breaking into CIA headquarters.",
    "release_date": "2010-10-13"
  },
  {
    "title": "Chopper",
    "vote_average": 6.7,
    "vote_count": 326,
    "poster_path": "/IvoftTE67DCTfZDMoS2cSNXpnu.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "The true and infamous story of Australia's notorious criminal Mark 'Chopper' Read and his years of crime, interest in violence, drugs and prostitutes.",
    "release_date": "2000-06-21"
  },
  {
    "title": "Sabotage",
    "vote_average": 6.686,
    "vote_count": 303,
    "poster_path": "/A6cyOt9mhmvWA2uHcVsGkcCaHCz.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "Karl Anton Verloc and his wife own a small cinema in a quiet London suburb where they live seemingly happily. But Mrs. Verloc does not know that her husband has a secret that will affect their relationship and threaten her teenage brother's life.",
    "release_date": "1937-01-08"
  },
  {
    "title": "Zulu",
    "vote_average": 6.685,
    "vote_count": 459,
    "poster_path": "/h5OZD7pVkIKR5jf4lGFzQQrLmLc.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "As a child, Ali Neuman narrowly escaped being murdered by Inkhata, a militant political party at war with Nelson Mandela's African National Congress. Only he and his mother survived the carnage of those years. But as with many survivors, the psychological scars remain.",
    "release_date": "2013-12-04"
  },
  {
    "title": "Quick Change",
    "vote_average": 6.685,
    "vote_count": 325,
    "poster_path": "/8q0VQYwOhhuRFMsyzdZ5JoB676g.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "With the aid of his girlfriend, Phyllis Potter, and best friend, Loomis, Grimm enters a Manhattan bank dressed as a clown, creates a hostage situation and executes a flawless robbery. The only thing left for the trio to do is make their getaway out of the city and to the airport. It sounds simple enough, but it seems that fate deserts them immediately after the bank heist. One mishap after another conspires to keep these robbers from reaching freedom.",
    "release_date": "1990-07-13"
  },
  {
    "title": "The Good Liar",
    "vote_average": 6.684,
    "vote_count": 1039,
    "poster_path": "/6kmxXfg3aSWrzUlEPt2L0YD4jz9.jpg",
    "genre_ids": [
      80
    ],
    "overview": "Career con man Roy sets his sights on his latest mark: recently widowed Betty, worth millions. And he means to take it all. But as the two draw closer, what should have been another simple swindle takes on the ultimate stakes.",
    "release_date": "2019-11-08"
  },
  {
    "title": "Fast & Furious",
    "vote_average": 6.682,
    "vote_count": 6846,
    "poster_path": "/lUtVoRukW7WNtUySwd8hWlByBds.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "When a crime brings them back to L.A., fugitive ex-con Dom Toretto reignites his feud with agent Brian O'Conner. But as they are forced to confront a shared enemy, Dom and Brian must give in to an uncertain new trust if they hope to outmaneuver him. And the two men will find the best way to get revenge: push the limits of what's possible behind the wheel.",
    "release_date": "2009-04-02"
  },
  {
    "title": "Patriot Games",
    "vote_average": 6.679,
    "vote_count": 1488,
    "poster_path": "/yToAJg67r3hk3Ux3sfXOdpiqxU.jpg",
    "genre_ids": [
      18,
      28,
      53,
      80
    ],
    "overview": "When CIA Analyst Jack Ryan interferes with an IRA assassination, a renegade faction targets Jack and his family as revenge.",
    "release_date": "1992-06-04"
  },
  {
    "title": "48 Hrs.",
    "vote_average": 6.678,
    "vote_count": 1358,
    "poster_path": "/rvvjXHzEDBIvIVDBHNOwHS7hVPu.jpg",
    "genre_ids": [
      53,
      28,
      35,
      80,
      18
    ],
    "overview": "A hard-nosed cop reluctantly teams up with a wise-cracking criminal temporarily paroled to him, in order to track down a killer.",
    "release_date": "1982-12-07"
  },
  {
    "title": "Public Enemies",
    "vote_average": 6.677,
    "vote_count": 4201,
    "poster_path": "/ezFQaPf4cOEfsl39Me0gSV29d7V.jpg",
    "genre_ids": [
      80,
      28
    ],
    "overview": "Depression-era bank robber John Dillinger's charm and audacity endear him to much of America's downtrodden public, but he's also a thorn in the side of J. Edgar Hoover and the fledgling FBI. Desperate to capture the elusive outlaw, Hoover makes Dillinger his first Public Enemy Number One and assigns his top agent, Melvin Purvis, the task of bringing him in dead or alive.",
    "release_date": "2009-07-01"
  },
  {
    "title": "Out of Sight",
    "vote_average": 6.677,
    "vote_count": 1153,
    "poster_path": "/v49q7AMR3pB4M762woWB1NYMCLF.jpg",
    "genre_ids": [
      10749,
      35,
      80
    ],
    "overview": "Meet Jack Foley, a smooth criminal who bends the law and is determined to make one last heist. Karen Sisco is a federal marshal who chooses all the right moves … and all the wrong guys. Now they're willing to risk it all to find out if there's more between them than just the law.",
    "release_date": "1998-06-26"
  },
  {
    "title": "22 Bullets",
    "vote_average": 6.67,
    "vote_count": 1138,
    "poster_path": "/4spRV4Qw0YGaWBHYJ6enu84sR81.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "Charly Matteï has turned his back on his life as an outlaw. For the last three years, he's led a peaceful life devoting himself to his wife and two children. Then, one winter morning, he's left for dead in the parking garage in Marseille's Old Port, with 22 bullets in his body. Against all the odds, he doesn't die...",
    "release_date": "2010-03-23"
  },
  {
    "title": "The Infiltrator",
    "vote_average": 6.667,
    "vote_count": 1576,
    "poster_path": "/758F57DxVRLe38S1Je4O1Bjx2u6.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A U.S Customs official uncovers a massive money laundering scheme involving Pablo Escobar.",
    "release_date": "2016-07-13"
  },
  {
    "title": "The First Great Train Robbery",
    "vote_average": 6.667,
    "vote_count": 323,
    "poster_path": "/4LqLUNoCwoPQNmrRuDZa0zC3hT8.jpg",
    "genre_ids": [
      53,
      12,
      18,
      80
    ],
    "overview": "In Victorian England, a master criminal makes elaborate plans to steal a shipment of gold from a moving train.",
    "release_date": "1978-12-14"
  },
  {
    "title": "Police Academy",
    "vote_average": 6.667,
    "vote_count": 2476,
    "poster_path": "/m5a1U549gokC1kxsqgQoRb6XpFg.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "New rules enforced by the Lady Mayoress mean that sex, weight, height and intelligence need no longer be a factor for joining the Police Force. This opens the floodgates for all and sundry to enter the Police Academy, much to the chagrin of the instructors. Not everyone is there through choice, though. Social misfit Mahoney has been forced to sign up as the only alternative to a jail sentence and it doesn't take long before he falls foul of the boorish Lieutenant Harris. But before long, Mahoney realises that he is enjoying being a police cadet and decides he wants to stay... while Harris decides he wants Mahoney out!",
    "release_date": "1984-03-22"
  },
  {
    "title": "My Name Is Vendetta",
    "vote_average": 6.664,
    "vote_count": 555,
    "poster_path": "/7l3war94J4tRyWUiLAGokr3ViF2.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "After old enemies kill his family, a former mafia enforcer and his feisty daughter flee to Milan, where they hide out while plotting their revenge.",
    "release_date": "2022-11-30"
  },
  {
    "title": "Batman: Gotham Knight",
    "vote_average": 6.663,
    "vote_count": 625,
    "poster_path": "/3i1o0sHBP0VUpuSVmkdCRKYoDBC.jpg",
    "genre_ids": [
      878,
      16,
      28,
      80,
      53
    ],
    "overview": "A chronicle of Bruce Wayne's establishment and progression into Gotham City’s legendary caped crusader through 6 standalone episodes.",
    "release_date": "2008-07-08"
  },
  {
    "title": "Stillwater",
    "vote_average": 6.66,
    "vote_count": 1074,
    "poster_path": "/cPdmPwcIcmu0ugfKcdFtI3vmOJq.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "Bill Baker, an American oil-rig roughneck from Oklahoma, travels to Marseille to visit his estranged daughter, Allison, who is in prison for a murder she claims she did not commit. Confronted with language barriers, cultural differences, and a complicated legal system, Bill builds a new life for himself in France as he makes it his personal mission to exonerate his daughter.",
    "release_date": "2021-07-29"
  },
  {
    "title": "The Wizard of Lies",
    "vote_average": 6.658,
    "vote_count": 531,
    "poster_path": "/8k4lJ4e0hvDQtKpItXmmPdw69sO.jpg",
    "genre_ids": [
      80,
      18,
      36,
      53,
      10770
    ],
    "overview": "A look behind the scenes at Bernie Madoff's massive Ponzi scheme, how it was perpetrated on the public and the trail of destruction it left in its wake, both for the victims and Madoff's family.",
    "release_date": "2017-05-11"
  },
  {
    "title": "The Immortal",
    "vote_average": 6.657,
    "vote_count": 449,
    "poster_path": "/kWLsOI2CPpdCBiAxpAXPdoE9435.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "After reuniting with his first mentor Bruno and receiving his latest mission, an exiled Ciro is left to fearlessly confront whatever comes his way, navigating a new chapter of gang warfare while grappling with devastating memories of loss and trauma. Weaving between his past as an orphan in Naples' cruel underworld and present as a hardened, cunning assassin with nothing left to lose, Ciro is plunged into the cold, dark depths of a world where immortality is just another form of damnation.",
    "release_date": "2019-12-05"
  },
  {
    "title": "Bully",
    "vote_average": 6.7,
    "vote_count": 431,
    "poster_path": "/vMJ2WHBbK4Jr3eDuF1e7O6lbC8m.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "A pack of naïve teenagers conspire to murder a mutual friend, whose aggressive demeanor has proved too much.",
    "release_date": "2001-06-15"
  },
  {
    "title": "Young Guns",
    "vote_average": 6.652,
    "vote_count": 840,
    "poster_path": "/stvh1A3mj8NYyczE7RvwdtDRCo2.jpg",
    "genre_ids": [
      37,
      80,
      28,
      12
    ],
    "overview": "A group of young gunmen, led by Billy the Kid, become deputies to avenge the murder of the rancher who became their benefactor. But when Billy takes their authority too far, they become the hunted.",
    "release_date": "1988-02-17"
  },
  {
    "title": "Alpha Dog",
    "vote_average": 6.651,
    "vote_count": 1288,
    "poster_path": "/t9pirEsDxe102mSQGoDZWBbdcCD.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Johnny Truelove likes to see himself as tough. He's the son of an underworld figure and a drug dealer. Johnny also likes to get tough when things don't go his way. When Jake Mazursky fails to pay up for Johnny, things get worse for the Mazursky family, as Johnny and his 'gang' kidnap Jake's 15 year old brother and holds him hostage. Problem now is what to do with 'stolen boy?'",
    "release_date": "2006-01-27"
  },
  {
    "title": "Absolute Power",
    "vote_average": 6.651,
    "vote_count": 990,
    "poster_path": "/xX9gmwtnTi0Y8WcTF7Jsg9Hdp6W.jpg",
    "genre_ids": [
      80,
      18,
      28
    ],
    "overview": "A master thief coincidentally is robbing a house where a murder—in which the President of The United States is involved—occurs in front of his eyes. He is forced to run, while holding evidence that could convict the President.",
    "release_date": "1997-02-14"
  },
  {
    "title": "The Longest Yard",
    "vote_average": 6.649,
    "vote_count": 3151,
    "poster_path": "/nbKcVBcxF96ARW2oKHqDYAcLdu.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "Pro quarter-back, Paul Crewe and former college champion and coach, Nate Scarboro are doing time in the same prison. Asked to put together a team of inmates to take on the guards, Crewe enlists the help of Scarboro to coach the inmates to victory in a football game 'fixed' to turn out quite another way.",
    "release_date": "2005-05-27"
  },
  {
    "title": "Crank",
    "vote_average": 6.642,
    "vote_count": 3502,
    "poster_path": "/toaY9CoMAy37QNv8HbbUqWS4X1Q.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Chev Chelios, a hit man wanting to go straight, lets his latest target slip away. Then he awakes the next morning to a phone call that informs him he has been poisoned and has only an hour to live unless he keeps adrenaline coursing through his body while he searches for an antidote.",
    "release_date": "2006-08-31"
  },
  {
    "title": "Big Bad Wolves",
    "vote_average": 6.641,
    "vote_count": 347,
    "poster_path": "/7SEdoH6qBIYNhIV7H9cFSRe3wO1.jpg",
    "genre_ids": [
      35,
      80,
      53,
      27
    ],
    "overview": "Tel Aviv, Israel. The twisted paths of three very different men brutally collide due to a chain of unspeakable murders: a grieving father who has been doomed to seek vengeance and a police detective who boldly crosses the narrow boundary between law and crime meet a religion teacher suspected of being the murderer.",
    "release_date": "2013-04-21"
  },
  {
    "title": "The Lookout",
    "vote_average": 6.641,
    "vote_count": 589,
    "poster_path": "/wTYyXCoIBy2TDxetoGS4Sc0VBP1.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Chris is a once promising high school athlete whose life is turned upside down following a tragic accident. As he tries to maintain a normal life, he takes a job as a janitor at a bank, where he ultimately finds himself caught up in a planned heist.",
    "release_date": "2007-03-09"
  },
  {
    "title": "Backdraft",
    "vote_average": 6.641,
    "vote_count": 1300,
    "poster_path": "/bymJtYNIdiAiBR1LRetaJXbfryc.jpg",
    "genre_ids": [
      18,
      53,
      28,
      80
    ],
    "overview": "Firemen brothers Brian and Stephen McCaffrey battle each other over past slights while trying to stop an arsonist with a diabolical agenda from torching Chicago.",
    "release_date": "1991-05-24"
  },
  {
    "title": "JCVD",
    "vote_average": 6.638,
    "vote_count": 471,
    "poster_path": "/8fdLq1X9n770THGtGDx2e74ETvE.jpg",
    "genre_ids": [
      18,
      28,
      35,
      80
    ],
    "overview": "Between his tax problems and his legal battle with his wife for the custody of his daughter, these are hard times for the action movie star who finds that even Steven Seagal has pinched a role from him! This fictionalized version of Jean-Claude Van Damme returns to the country of his birth to seek the peace and tranquility he can no longer enjoy in the United States, but inadvertently gets involved in a bank robbery with hostages.",
    "release_date": "2008-06-04"
  },
  {
    "title": "Ms .45",
    "vote_average": 6.636,
    "vote_count": 320,
    "poster_path": "/9ulPP8hcBjIrWRqeXsZVjL0uX3E.jpg",
    "genre_ids": [
      80,
      53,
      28
    ],
    "overview": "A shy and mute seamstress goes insane after being attacked and raped twice in one day. She wanders the New York streets at night in a sexy black dress with her attacker's gun strapped to her garter belt, blowing away any man who tries to pick her up.",
    "release_date": "1981-04-24"
  },
  {
    "title": "A Simple Favor",
    "vote_average": 6.633,
    "vote_count": 3922,
    "poster_path": "/aIYsjQM0piKc0ibPBCTWv3sqshj.jpg",
    "genre_ids": [
      80,
      53,
      9648,
      35
    ],
    "overview": "Stephanie, a dedicated mother and popular vlogger, befriends Emily, a mysterious upper-class woman whose son Nicky attends the same school as Miles, Stephanie's son. When Emily asks her to pick Nicky up from school and then disappears, Stephanie undertakes an investigation that will dive deep into Emily's cloudy past.",
    "release_date": "2018-08-29"
  },
  {
    "title": "Life",
    "vote_average": 6.633,
    "vote_count": 701,
    "poster_path": "/saWYpX3ADdmdByQZVrSYUNbQ9GC.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Two men in 1930s Mississippi become friends after being sentenced to life in prison together for a crime they did not commit.",
    "release_date": "1999-04-16"
  },
  {
    "title": "U Turn",
    "vote_average": 6.632,
    "vote_count": 668,
    "poster_path": "/lffvjJU8j7RLfz1SJVMfrn2wH6i.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "When Bobby's car breaks down in the desert while on the run from some of the bookies who have already taken two of his fingers, he becomes trapped in the nearby small town where the people are stranger than anyone he's encountered. After becoming involved with a young married woman, her husband hires Bobby to kill her. Later, she hires Bobby to kill the husband.",
    "release_date": "1997-10-03"
  },
  {
    "title": "Kill the Messenger",
    "vote_average": 6.631,
    "vote_count": 795,
    "poster_path": "/8gaNZiKZHvKCqMDByY00dUIV0YC.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "A reporter becomes the target of a vicious smear campaign that drives him to the point of suicide after he exposes the CIA's role in arming Contra rebels in Nicaragua and importing cocaine into California. Based on the true story of journalist Gary Webb.",
    "release_date": "2014-10-09"
  },
  {
    "title": "Point Blank",
    "vote_average": 6.631,
    "vote_count": 425,
    "poster_path": "/tt2UlArx3joZWBYctJehCGmHGZZ.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Samuel Pierret is a nurse who saves the wrong guy – a thief whose henchmen take Samuel's pregnant wife hostage to force him to spring their boss from the hospital. A race through the subways and streets of Paris ensues, and the body count rises. Can Samuel evade the cops and the criminal underground and deliver his beloved to safety?",
    "release_date": "2010-11-08"
  },
  {
    "title": "Dead Men Don't Wear Plaid",
    "vote_average": 6.631,
    "vote_count": 347,
    "poster_path": "/cwYwZBEE73PakUWzbICzxYKlXAz.jpg",
    "genre_ids": [
      35,
      9648,
      80
    ],
    "overview": "Juliet Forrest is convinced that the reported death of her father in a mountain car crash was no accident. Her father was a prominent cheese scientist working on a secret recipe. To prove it was murder, she enlists the services of private eye Rigby Reardon. He finds a slip of paper containing a list of people who are 'The Friends and Enemies of Carlotta'.",
    "release_date": "1982-05-21"
  },
  {
    "title": "The Girl Next Door",
    "vote_average": 6.629,
    "vote_count": 659,
    "poster_path": "/dXjLp7k7ILyg22T0s9VvpPKc9jn.jpg",
    "genre_ids": [
      53,
      80,
      18,
      27
    ],
    "overview": "In a quiet suburban town in the summer of 1958, two recently orphaned sisters are placed in the care of their mentally unstable Aunt Ruth. But Ruth's depraved sense of discipline will soon lead to unspeakable acts of abuse and torture that involve her young sons, the neighborhood children, and one 12-year-old boy whose life will be changed forever.",
    "release_date": "2007-07-19"
  },
  {
    "title": "Ninja: Shadow of a Tear",
    "vote_average": 6.628,
    "vote_count": 348,
    "poster_path": "/teoMsHkF3fhWgl6dIbX673nckyq.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Fight everyone and trust no one: it's the code of survival practiced by martial-arts master Casey Bowman after his life of domestic bliss is shattered by a savage act of violence. Vowing revenge, the fearless American stealthily tracks the killer from Osaka to Bangkok to Rangoon with the help of a wise and crafty sensei. His only clues: a series of victims whose necks bear the distinctive mark of strangulation by barbed wire. Fighting to avenge as well as to survive, Casey must sharpen his razor-like responses and take his battle skills to the next level, even using deep meditation to fake his own death. His target: the sinister drug lord Goro, who is flooding the streets with deadly meth cooked at his remote jungle factory. To prepare for his ultimate confrontation, Casey must finally become an invisible warrior worthy of the name Ninja. But just when his prey is cornered, an unexpected twist shows Casey that his battle is only beginning: he truly can trust no one.",
    "release_date": "2013-12-27"
  },
  {
    "title": "Pineapple Express",
    "vote_average": 6.628,
    "vote_count": 3553,
    "poster_path": "/6E50WjeOYjDZg9HXgPjYdGtY2jG.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "A stoner and his dealer are forced to go on the run from the police after the pothead witnesses a cop commit a murder.",
    "release_date": "2008-08-06"
  },
  {
    "title": "Trance",
    "vote_average": 6.627,
    "vote_count": 2073,
    "poster_path": "/3MVYuyVknNA9yC0Gy6z3zDAiWfX.jpg",
    "genre_ids": [
      53,
      80,
      18,
      9648
    ],
    "overview": "A violent gang enlists the help of a hypnotherapist in an attempt to locate a painting which somehow vanished in the middle of a heist.",
    "release_date": "2013-03-27"
  },
  {
    "title": "Flawless",
    "vote_average": 6.627,
    "vote_count": 479,
    "poster_path": "/qENzVKfdyNBAwShcS0YhWeJe34M.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A female executive and a night janitor conspire to commit a daring diamond heist from their mutual employer, The London Diamond Corporation.",
    "release_date": "2007-09-01"
  },
  {
    "title": "House of Gucci",
    "vote_average": 6.625,
    "vote_count": 2889,
    "poster_path": "/oJCQjD2byiVF1EG408F9dBn9ndU.jpg",
    "genre_ids": [
      18,
      36,
      80
    ],
    "overview": "When Patrizia Reggiani, an outsider from humble beginnings, marries into the Gucci family, her unbridled ambition begins to unravel the family legacy and triggers a reckless spiral of betrayal, decadence, revenge, and ultimately… murder.",
    "release_date": "2021-11-24"
  },
  {
    "title": "Traitor",
    "vote_average": 6.623,
    "vote_count": 601,
    "poster_path": "/va4Uo7L2b4d96JTdRMclO9L2hY0.jpg",
    "genre_ids": [
      18,
      28,
      53,
      80
    ],
    "overview": "When straight arrow FBI agent Roy Clayton heads up the investigation into a dangerous international conspiracy, all clues seem to lead back to former U.S. Special Operations officer Samir Horn.",
    "release_date": "2008-08-23"
  },
  {
    "title": "Breach",
    "vote_average": 6.62,
    "vote_count": 542,
    "poster_path": "/m2iVkJPxDrrink7NiE412nFBMQj.jpg",
    "genre_ids": [
      18,
      53,
      80,
      36
    ],
    "overview": "Eric O'Neill, a computer specialist who wants to be made an agent is assigned to clerk for Robert Hanssen, a senior agent with 25 years in the FBI, and to write down everything Hanssen does. O'Neill's told it's an investigation of Hanssen's sexual habits, however Hanssen is really suspected of spying for the Soviet Union and Russia for years and being responsible for the deaths of agents working for the United States.",
    "release_date": "2007-02-12"
  },
  {
    "title": "The Killer",
    "vote_average": 6.619,
    "vote_count": 1479,
    "poster_path": "/ipkcgvN7h3yZnbYowthloHLKsf4.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "After a fateful near-miss, an assassin battles his employers, and himself, on an international manhunt he insists isn't personal.",
    "release_date": "2023-10-25"
  },
  {
    "title": "I Care a Lot",
    "vote_average": 6.618,
    "vote_count": 2473,
    "poster_path": "/gKnhEsjNefpKnUdAkn7INzIFLSu.jpg",
    "genre_ids": [
      35,
      80,
      53,
      18
    ],
    "overview": "A court-appointed legal guardian defrauds her older clients and traps them under her care. But her latest mark comes with some unexpected baggage.",
    "release_date": "2021-02-19"
  },
  {
    "title": "Jack Reacher",
    "vote_average": 6.618,
    "vote_count": 6608,
    "poster_path": "/uQBbjrLVsUibWxNDGA4Czzo8lwz.jpg",
    "genre_ids": [
      80,
      18,
      53,
      28
    ],
    "overview": "One morning in an ordinary town, five people are shot dead in a seemingly random attack. All evidence points to a single suspect: an ex-military sniper who is quickly brought into custody. The interrogation yields one written note: 'Get Jack Reacher!'. Reacher, an enigmatic ex-Army investigator, believes the authorities have the right man but agrees to help the sniper's defense attorney. However, the more Reacher delves into the case, the less clear-cut it appears. So begins an extraordinary chase for the truth, pitting Jack Reacher against an unexpected enemy, with a skill for violence and a secret to keep.",
    "release_date": "2012-12-20"
  },
  {
    "title": "The Long Kiss Goodnight",
    "vote_average": 6.6,
    "vote_count": 1092,
    "poster_path": "/yREdXX5lMFUKhTvb0ofI7mzUHlR.jpg",
    "genre_ids": [
      80,
      28,
      9648,
      53
    ],
    "overview": "Samantha Caine, suburban homemaker, is the ideal mom to her 8 year old daughter Caitlin. She lives in Honesdale, PA, is a school teacher and makes the best Rice Krispie treats in town. But when she receives a bump on her head, she begins to remember small parts of her previous life as a lethal, top-secret agent.",
    "release_date": "1996-10-11"
  },
  {
    "title": "The Wild Goose Lake",
    "vote_average": 6.617,
    "vote_count": 308,
    "poster_path": "/w49o4vmNFpCt4VFJp7ip6tjHh3x.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A gangster on the run sacrifices everything for his family and a woman he meets while on the lam.",
    "release_date": "2019-12-06"
  },
  {
    "title": "Street Kings",
    "vote_average": 6.6,
    "vote_count": 1369,
    "poster_path": "/csXyZ1BsDBlH0PXkOFWxggEf9WF.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "Tom Ludlow is a disillusioned L.A. Police Officer, rarely playing by the rules and haunted by the death of his wife. When evidence implicates him in the execution of a fellow officer, he is forced to go up against the cop culture he's been a part of his entire career, ultimately leading him to question the loyalties of everyone around him.",
    "release_date": "2008-04-10"
  },
  {
    "title": "Veronica Mars",
    "vote_average": 6.616,
    "vote_count": 1012,
    "poster_path": "/1qUhPDaNalxl7CpVqcbjm09fZz0.jpg",
    "genre_ids": [
      80,
      18,
      35
    ],
    "overview": "Years after walking away from her past as a teenage private eye, Veronica Mars gets pulled back to her hometown - just in time for her high school reunion - in order to help her old flame Logan Echolls, who's embroiled in a murder mystery.",
    "release_date": "2014-03-13"
  },
  {
    "title": "Colombiana",
    "vote_average": 6.614,
    "vote_count": 2427,
    "poster_path": "/rEdGDgRB3gducezNSIyx2lbKQy4.jpg",
    "genre_ids": [
      28,
      53,
      80,
      18
    ],
    "overview": "After witnessing her parents’ murder as a child in Bogota, Cataleya Restrepo grows up to be a stone-cold assassin. She works for her uncle as a hitman by day, but her personal time is spent engaging in vigilante murders that she hopes will lead her to her ultimate target: the mobster responsible for her parents' death.",
    "release_date": "2011-07-27"
  },
  {
    "title": "Bad Boys II",
    "vote_average": 6.609,
    "vote_count": 5027,
    "poster_path": "/yCvB5fG5aEPqa1St7ihY6KEAsHD.jpg",
    "genre_ids": [
      28,
      80,
      35
    ],
    "overview": "Detectives Marcus Burnett and Mike Lowrey of the Miami Narcotics Task Force are tasked with stopping the flow of the drug ecstasy into Miami. They track the drugs to the whacked-out Cuban drug lord Johnny Tapia, who is also involved in a bloody war with Russian and Haitian mobsters. If that isn't bad enough, there's tension between the two detectives when Marcus discovers that playboy Mike is secretly romancing Marcus’ sister, Syd.",
    "release_date": "2003-07-18"
  },
  {
    "title": "The Nile Hilton Incident",
    "vote_average": 6.602,
    "vote_count": 325,
    "poster_path": "/fcQOeSQV6flz28ybZCkcmCsdqkR.jpg",
    "genre_ids": [
      53,
      18,
      80
    ],
    "overview": "Cairo, 2011. A police officer investigates the murder of a woman in a luxurious hotel in the days leading up to the Egyptian revolution.",
    "release_date": "2017-06-19"
  },
  {
    "title": "The Heat",
    "vote_average": 6.603,
    "vote_count": 3750,
    "poster_path": "/yERBa1y5zNUOTRKQPiDCPIc2fuv.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "Uptight and straight-laced, FBI Special Agent Sarah Ashburn is a methodical investigator with a reputation for excellence--and hyper-arrogance. Shannon Mullins, one of Boston P.D.'s \"finest,\" is foul-mouthed and has a very short fuse, and uses her gut instinct and street smarts to catch the most elusive criminals. Neither has ever had a partner, or a friend for that matter. When these two wildly incompatible law officers join forces to bring down a ruthless drug lord, they become the last thing anyone expected: buddies.",
    "release_date": "2013-06-27"
  },
  {
    "title": "Risky Business",
    "vote_average": 6.602,
    "vote_count": 1184,
    "poster_path": "/82KOHShH9raGhkcAN3TztVjqjj3.jpg",
    "genre_ids": [
      10749,
      35,
      18,
      80
    ],
    "overview": "Meet Joel Goodson, an industrious, college-bound 17-year-old and a responsible, trustworthy son. However, when his parents go away and leave him home alone in the wealthy Chicago suburbs with the Porsche at his disposal he quickly decides he has been good for too long and it is time to enjoy himself. After an unfortunate incident with the Porsche Joel must raise some cash, in a risky way.",
    "release_date": "1983-08-05"
  },
  {
    "title": "Bernie",
    "vote_average": 6.601,
    "vote_count": 845,
    "poster_path": "/rW5CetooG545jpkPNpD4FjFAXfe.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "In small-town Texas, affable and popular mortician Bernie Tiede strikes up a friendship with Marjorie Nugent, a wealthy widow well known for her sour attitude. When she becomes controlling and abusive, Bernie goes to great lengths to remove himself from her grasp.",
    "release_date": "2012-04-27"
  },
  {
    "title": "Micmacs",
    "vote_average": 6.599,
    "vote_count": 543,
    "poster_path": "/tU5oKpfIjUlI2fYpG7RCNObfHwi.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "While standing in the doorway of the video shop where he works, Bazil is inadvertently shot in the head. Now homeless and jobless, he is taken in by a troupe of misfits who live in a giant mound of trash. There Bazil begins his quest for revenge against the people who produced the gun that shot him.",
    "release_date": "2009-10-28"
  },
  {
    "title": "The Poughkeepsie Tapes",
    "vote_average": 6.595,
    "vote_count": 531,
    "poster_path": "/8ppkhu3pO3fnXr05YeE7ryKloVd.jpg",
    "genre_ids": [
      27,
      9648,
      80,
      53
    ],
    "overview": "When hundreds of videotapes showing torture, murder and dismemberment are found in an abandoned house, they reveal a serial killer's decade-long reign of terror and become the most disturbing collection of evidence homicide detectives have ever seen.",
    "release_date": "2007-04-27"
  },
  {
    "title": "Batman: The Killing Joke",
    "vote_average": 6.593,
    "vote_count": 1717,
    "poster_path": "/lrQ3LeNIN0nmviZ692seNBUl1Pq.jpg",
    "genre_ids": [
      28,
      16,
      80,
      18
    ],
    "overview": "As Batman hunts for the escaped Joker, the Clown Prince of Crime attacks the Gordon family to prove a diabolical point mirroring his own fall into madness.",
    "release_date": "2016-07-24"
  },
  {
    "title": "A Most Violent Year",
    "vote_average": 6.593,
    "vote_count": 1325,
    "poster_path": "/861WY0triAjO0A6VWMhrZ6s7VFG.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A thriller set in New York City during the winter of 1981, statistically one of the most violent years in the city's history, and centered on the lives of an immigrant and his family trying to expand their business and capitalize on opportunities as the rampant violence, decay, and corruption of the day drag them in and threaten to destroy all they have built.",
    "release_date": "2014-12-31"
  },
  {
    "title": "Lost Bullet",
    "vote_average": 6.591,
    "vote_count": 746,
    "poster_path": "/qnlChF8U4diiykXQYs1miigGy7t.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "A small time delinquent, turned police mechanic for a go fast task force, is forced to defend his innocence when his mentor is killed by dirty cops.",
    "release_date": "2020-06-19"
  },
  {
    "title": "Side Effects",
    "vote_average": 6.591,
    "vote_count": 2929,
    "poster_path": "/k7l1ZDWxfLcd4mMOLprq9t9H46Y.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "A woman turns to prescription medication as a way of handling her anxiety concerning her husband's upcoming release from prison.",
    "release_date": "2013-02-07"
  },
  {
    "title": "Cruising",
    "vote_average": 6.6,
    "vote_count": 477,
    "poster_path": "/bb9CND0WyfwdHOZY5XmP4Qn8taz.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "overview": "A serial killer brutally slays and dismembers several gay men in New York's S&M and leather districts. The young police officer Steve Burns is sent undercover onto the streets as a decoy for the murderer. Working almost completely isolated from his department, he has to learn and practice the complex rules and signals of this little society.",
    "release_date": "1980-02-15"
  },
  {
    "title": "The Burning Plain",
    "vote_average": 6.588,
    "vote_count": 405,
    "poster_path": "/AsCx41ZUEur3fYrbo8ouGi5a76g.jpg",
    "genre_ids": [
      18,
      10749,
      80
    ],
    "overview": "A trailer is burning in the middle of a plain. The bodies of two adulterous lovers are found. Scenes from both families, before and after the dramatic events, suggest an unusual connection between them. But what is their secret?",
    "release_date": "2008-11-07"
  },
  {
    "title": "Lethal Weapon 4",
    "vote_average": 6.584,
    "vote_count": 2450,
    "poster_path": "/d1ij7hjqAFwINADxuMyL9VsqCtw.jpg",
    "genre_ids": [
      28,
      12,
      35,
      80,
      53
    ],
    "overview": "Officers Martin Riggs and Roger Murtaugh of the Los Angeles Police Department must stop a dangerous crime lord from China from getting his brother out of jail.",
    "release_date": "1998-07-10"
  },
  {
    "title": "Sea of Love",
    "vote_average": 6.583,
    "vote_count": 574,
    "poster_path": "/vJ88WmJ12eAK9CRb3cggn9CJthH.jpg",
    "genre_ids": [
      80,
      18,
      10749,
      9648,
      53
    ],
    "overview": "Seen-it-all New York detective Frank Keller is unsettled - he has done twenty years on the force and could retire, and he hasn't come to terms with his wife leaving him for a colleague. Joining up with an officer from another part of town to investigate a series of murders linked by the lonely hearts columns he finds he is getting seriously and possibly dangerously involved with Helen, one of the main suspects.",
    "release_date": "1989-09-15"
  },
  {
    "title": "The Last Days of American Crime",
    "vote_average": 6.581,
    "vote_count": 789,
    "poster_path": "/ygCQnDEqUEIamBpdQdDYnFfxvgM.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "In the not-too-distant future, as a final response to crime and terrorism, the U.S. government plans to broadcast a signal that will make it impossible for anyone to knowingly break the law.",
    "release_date": "2020-06-05"
  },
  {
    "title": "Out of the Furnace",
    "vote_average": 6.581,
    "vote_count": 1827,
    "poster_path": "/cOuQQ4eRpSBxb0G9OXzWE1pHPeq.jpg",
    "genre_ids": [
      53,
      18,
      80
    ],
    "overview": "Two brothers live in the economically-depressed Rust Belt, when a cruel twist of fate lands one in prison. His brother is then lured into one of the most violent crime rings in the Northeast.",
    "release_date": "2013-11-09"
  },
  {
    "title": "The Sugarland Express",
    "vote_average": 6.58,
    "vote_count": 345,
    "poster_path": "/csahjHhtJ9NzFKcxVcw7S4Pyfj.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Married small-time crooks Lou-Jean and Clovis Poplin lose their baby to the state of Texas and resolve to do whatever it takes to get him back. Lou-Jean gets Clovis out of jail, and the two steal their son from his foster home, in addition to taking a highway patrolman hostage. As a massive dragnet starts to pursue them across Texas, the couple become unlikely folk heroes and even start to bond with the captive policeman.",
    "release_date": "1974-04-05"
  },
  {
    "title": "Horrible Bosses",
    "vote_average": 6.574,
    "vote_count": 6045,
    "poster_path": "/uQkUwgyFHAm0jGQERPG6Z9o9Zbj.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "For Nick, Kurt and Dale, the only thing that would make the daily grind more tolerable would be to grind their intolerable bosses into dust. Quitting is not an option, so, with the benefit of a few-too-many drinks and some dubious advice from a hustling ex-con, the three friends devise a convoluted and seemingly foolproof plan to rid themselves of their respective employers... permanently.",
    "release_date": "2011-07-08"
  },
  {
    "title": "The Gauntlet",
    "vote_average": 6.573,
    "vote_count": 472,
    "poster_path": "/hYXkHixmH2W4hXA0qVJpT4ONPt1.jpg",
    "genre_ids": [
      18,
      28,
      80,
      53
    ],
    "overview": "Phoenix cop Ben Shockley is well on his way to becoming a derelict when he is assigned to transport a witness from Las Vegas. The witness turns out to be a belligerent prostitute with mob ties—and incriminating information regarding a high-ranking figure.",
    "release_date": "1977-12-17"
  },
  {
    "title": "New Jack City",
    "vote_average": 6.573,
    "vote_count": 484,
    "poster_path": "/k9VjzXyGElRAxXyXgPvtRRSznyL.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "A gangster, Nino, is in the Cash Money Brothers, making a million dollars every week selling crack. A cop, Scotty, discovers that the only way to infiltrate the gang is to become a dealer himself.",
    "release_date": "1991-03-08"
  },
  {
    "title": "The Curse of the Jade Scorpion",
    "vote_average": 6.573,
    "vote_count": 710,
    "poster_path": "/cHrHnkFoi7nrZCzAv7nFFTMdMCJ.jpg",
    "genre_ids": [
      35,
      80,
      10749
    ],
    "overview": "CW Briggs is a veteran insurance investigator, with many successes. Betty Ann Fitzgerald is a new employee in the company he works for, with the task of reorganizing the office. They don't like each other - or at least that's what they think. During a night out with the rest of the office employees, they go to watch Voltan, a magician who secretly hypnotizes both of them.",
    "release_date": "2001-08-05"
  },
  {
    "title": "The Limey",
    "vote_average": 6.567,
    "vote_count": 387,
    "poster_path": "/efAnFInZYrenNvBlLIXN2oLYyNc.jpg",
    "genre_ids": [
      18,
      9648,
      80
    ],
    "overview": "The Limey follows Wilson, a tough English ex-con who travels to Los Angeles to avenge his daughter's death. Upon arrival, Wilson goes to task battling Valentine and an army of L.A.'s toughest criminals, hoping to find clues and piece together what happened. After surviving a near-death beating, getting thrown from a building and being chased down a dangerous mountain road, the Englishman decides to dole out some bodily harm of his own.",
    "release_date": "1999-10-08"
  },
  {
    "title": "Ocean's Twelve",
    "vote_average": 6.567,
    "vote_count": 6857,
    "poster_path": "/Ad55M8newGWemFWCsMAkxO3fDwl.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "Danny Ocean reunites with his old flame and the rest of his merry band of thieves in carrying out three huge heists in Rome, Paris and Amsterdam – but a Europol agent is hot on their heels.",
    "release_date": "2004-12-09"
  },
  {
    "title": "The Legacy of the Bones",
    "vote_average": 6.566,
    "vote_count": 387,
    "poster_path": "/3sXHjTQGnlLJEVGxpmOa29Rr53O.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "Inspector Amaia Salazar must return to the Baztan valley in order to solve a series of suicides that seem to follow a similar pattern.",
    "release_date": "2019-12-05"
  },
  {
    "title": "Austin Powers: International Man of Mystery",
    "vote_average": 6.566,
    "vote_count": 3156,
    "poster_path": "/qSvfLwdDBLjZaPwA7qdn0yYePq5.jpg",
    "genre_ids": [
      878,
      35,
      80
    ],
    "overview": "As a swingin' fashion photographer by day and a groovy British superagent by night, Austin Powers is the '60s' most shagadelic spy, baby! But can he stop megalomaniac Dr. Evil after the bald villain freezes himself and unthaws in the '90s? With the help of sexy sidekick Vanessa Kensington, he just might.",
    "release_date": "1997-05-02"
  },
  {
    "title": "Trust",
    "vote_average": 6.563,
    "vote_count": 886,
    "poster_path": "/qpTTWFkBTfDdC9k9t24rvJPxQTG.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A suburban family is torn apart when fourteen-year-old Annie meets her first boyfriend online. After months of communicating via online chat and phone, Annie discovers her friend is not who he originally claimed to be. Shocked into disbelief, her parents are shattered by their daughter's actions and struggle to support her as she comes to terms with what has happened to her once innocent life.",
    "release_date": "2010-09-10"
  },
  {
    "title": "To Die For",
    "vote_average": 6.6,
    "vote_count": 716,
    "poster_path": "/d1VP7GNl1hh43Nyuy1Cb2BSrhEj.jpg",
    "genre_ids": [
      18,
      35,
      80
    ],
    "overview": "Suzanne Stone wants to be a world-famous news anchor and she is willing to do anything to get what she wants. What she lacks in intelligence, she makes up for in cold determination and diabolical wiles. As she pursues her goal with relentless focus, she is forced to destroy anything and anyone that may stand in her way, regardless of the ultimate cost or means necessary.",
    "release_date": "1995-09-22"
  },
  {
    "title": "You Were Never Really Here",
    "vote_average": 6.562,
    "vote_count": 2610,
    "poster_path": "/nx4lUyQNEzJowcF55VAP0TQEaX0.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A traumatised veteran, unafraid of violence, tracks down missing girls for a living. When a job spins out of control, his nightmares overtake him as a conspiracy is uncovered leading to what may be his death trip or his awakening.",
    "release_date": "2017-11-08"
  },
  {
    "title": "Super Troopers",
    "vote_average": 6.561,
    "vote_count": 1011,
    "poster_path": "/yJyxPItcLNVfYr7idOphQTmQ9hK.jpg",
    "genre_ids": [
      35,
      80,
      9648
    ],
    "overview": "Five bored, occasionally high and always ineffective Vermont state troopers must prove their worth to the governor or lose their jobs. After stumbling on a drug ring, they plan to make a bust, but a rival police force is out to steal the glory.",
    "release_date": "2001-02-15"
  },
  {
    "title": "The Ref",
    "vote_average": 6.559,
    "vote_count": 305,
    "poster_path": "/bxMjOeECQxHPf6QvkBChdxaOxVh.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "A cat burglar is forced to take a bickering, dysfunctional family hostage on Christmas Eve.",
    "release_date": "1994-03-09"
  },
  {
    "title": "Sudden Impact",
    "vote_average": 6.557,
    "vote_count": 821,
    "poster_path": "/ilJAikUtoJKd5f4GceMI0cmnlvD.jpg",
    "genre_ids": [
      53,
      80,
      28
    ],
    "overview": "When a young rape victim takes justice into her own hands and becomes a serial killer, it's up to Dirty Harry Callahan, on suspension from the SFPD, to bring her to justice.",
    "release_date": "1983-12-08"
  },
  {
    "title": "Dragged Across Concrete",
    "vote_average": 6.556,
    "vote_count": 890,
    "poster_path": "/dQ9EkVyPYJNVCfP5jWXRe4faUFA.jpg",
    "genre_ids": [
      80,
      28,
      53
    ],
    "overview": "Two policemen, one an old-timer, the other his volatile younger partner, find themselves suspended when a video of their strong-arm tactics becomes the media's cause du jour. Low on cash and with no other options, these two embittered soldiers descend into the criminal underworld to gain their just due, but instead find far more than they wanted awaiting them in the shadows.",
    "release_date": "2018-09-03"
  },
  {
    "title": "The Exorcism of Emily Rose",
    "vote_average": 6.553,
    "vote_count": 2610,
    "poster_path": "/qMN0HIP34f736kkQcfvTfmL9TP3.jpg",
    "genre_ids": [
      80,
      18,
      27,
      53
    ],
    "overview": "When a younger girl called Emily Rose dies, everyone puts blame on the exorcism which was performed on her by Father Moore prior to her death. The priest is arrested on suspicion of murder. The trial begins with lawyer Erin Bruner representing Moore, but it is not going to be easy, as no one wants to believe what Father Moore says is true.",
    "release_date": "2005-09-09"
  },
  {
    "title": "Double Jeopardy",
    "vote_average": 6.555,
    "vote_count": 1201,
    "poster_path": "/lSYMeHoUh9uWX2kXi9Fqe4BX2Ml.jpg",
    "genre_ids": [
      53,
      80,
      9648,
      18
    ],
    "overview": "Framed for the murder of her husband, Libby Parsons survives the long years in prison with two burning desires sustaining her -- finding her son and solving the mystery that destroyed her once-happy life. Standing between her and her quest; however, is her parole officer, Travis Lehman. Libby poses a challenge to the cynical officer, one that forces him to face up to his own failings while pitting him against his superiors and law enforcement colleagues.",
    "release_date": "1999-09-24"
  },
  {
    "title": "The Conspirator",
    "vote_average": 6.551,
    "vote_count": 413,
    "poster_path": "/qaUALpadysRP794bGC3rFfHoZOs.jpg",
    "genre_ids": [
      80,
      18,
      36
    ],
    "overview": "Mary Surratt is the lone female charged as a co-conspirator in the assassination trial of Abraham Lincoln. As the whole nation turns against her, she is forced to rely on her reluctant lawyer to uncover the truth and save her life.",
    "release_date": "2011-04-15"
  },
  {
    "title": "I Don't Feel at Home in This World Anymore",
    "vote_average": 6.55,
    "vote_count": 1219,
    "poster_path": "/1stdUlXBc3nxqhdWvZ6wWWEbCQW.jpg",
    "genre_ids": [
      53,
      18,
      80,
      35
    ],
    "overview": "When a depressed woman is burglarized, she finds a new sense of purpose by tracking down the thieves alongside her obnoxious neighbor. But they soon find themselves dangerously out of their depth against a pack of degenerate criminals.",
    "release_date": "2017-01-19"
  },
  {
    "title": "Get the Gringo",
    "vote_average": 6.549,
    "vote_count": 1528,
    "poster_path": "/v43pBEbRILw2CylmaC170kjY2DN.jpg",
    "genre_ids": [
      28,
      53,
      80,
      18
    ],
    "overview": "A career criminal nabbed by Mexican authorities is placed in a tough prison where he learns to survive with the help of a 9-year-old boy.",
    "release_date": "2012-03-15"
  },
  {
    "title": "Appaloosa",
    "vote_average": 6.549,
    "vote_count": 914,
    "poster_path": "/qLLUC8QaNx4BK1Vuf7XqSyd8icX.jpg",
    "genre_ids": [
      18,
      37,
      80
    ],
    "overview": "Two friends hired to police a small town that is suffering under the rule of a rancher find their job complicated by the arrival of a young widow.",
    "release_date": "2008-09-19"
  },
  {
    "title": "Shaft",
    "vote_average": 6.547,
    "vote_count": 1602,
    "poster_path": "/kfZqwGuvEBAysAbCsa0QLKoSYR.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "JJ, aka John Shaft Jr., may be a cyber security expert with a degree from MIT, but to uncover the truth behind his best friend’s untimely death, he needs an education only his dad can provide. Absent throughout JJ’s youth, the legendary locked-and-loaded John Shaft agrees to help his progeny navigate Harlem’s heroin-infested underbelly.",
    "release_date": "2019-06-14"
  },
  {
    "title": "The Postman Always Rings Twice",
    "vote_average": 6.545,
    "vote_count": 457,
    "poster_path": "/xH3sEe7AVQ1bevdKVoBqdXWu3f5.jpg",
    "genre_ids": [
      80,
      10749,
      18,
      53
    ],
    "overview": "The sensuous wife of a lunch wagon proprietor and a rootless drifter begin a sordidly steamy affair and conspire to murder her Greek husband.",
    "release_date": "1981-03-20"
  },
  {
    "title": "Kalifornia",
    "vote_average": 6.544,
    "vote_count": 698,
    "poster_path": "/484ULYA80XecqqgFTzC9R4jmctS.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "A journalist duo go on a tour of serial killer murder sites with two companions, unaware that one of them is a serial killer himself.",
    "release_date": "1993-06-24"
  },
  {
    "title": "True Crime",
    "vote_average": 6.5,
    "vote_count": 681,
    "poster_path": "/aZnlxXwMgk68gIKezbMkzKY8eyi.jpg",
    "genre_ids": [
      18,
      80,
      53,
      9648
    ],
    "overview": "Boozer, skirt chaser, careless father. You could create your own list of reporter Steve Everett's faults but there's no time. A San Quentin Death Row prisoner is slated to die at midnight – a man Everett has suddenly realized is innocent.",
    "release_date": "1999-03-19"
  },
  {
    "title": "Find Me Guilty",
    "vote_average": 6.542,
    "vote_count": 453,
    "poster_path": "/8M0dkX7jOor7exKor1txoUl9Ynu.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "Based on the true story of Jack DiNorscio, a mobster who defended himself in court for what would be the longest mafia trial in U.S. history.",
    "release_date": "2006-03-16"
  },
  {
    "title": "The Cotton Club",
    "vote_average": 6.541,
    "vote_count": 365,
    "poster_path": "/jgCsLhIRLKlvUy1p1iImCi0nPnX.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Harlem's legendary Cotton Club becomes a hotbed of passion and violence as the lives and loves of entertainers and gangsters collide.",
    "release_date": "1984-12-14"
  },
  {
    "title": "2 Guns",
    "vote_average": 6.538,
    "vote_count": 3899,
    "poster_path": "/ptURGAFktibhk7DEAbMazlmNqWa.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "A DEA agent and an undercover Naval Intelligence officer who have been tasked with investigating one another find they have been set up by the mob -- the very organization the two men believe they have been stealing money from.",
    "release_date": "2013-08-02"
  },
  {
    "title": "Irrational Man",
    "vote_average": 6.5,
    "vote_count": 2283,
    "poster_path": "/ipAqhEWRzEuD6aXlAWIvEEF1KUe.jpg",
    "genre_ids": [
      18,
      35,
      80
    ],
    "overview": "On a small town college campus, a philosophy professor in existential crisis gives his life new purpose when he enters into a relationship with his student.",
    "release_date": "2015-07-17"
  },
  {
    "title": "Bad Santa",
    "vote_average": 6.538,
    "vote_count": 1996,
    "poster_path": "/rfClLIyeHqpMofmrPY8DaLe4z9x.jpg",
    "genre_ids": [
      18,
      35,
      80
    ],
    "overview": "A miserable conman and his partner pose as Santa and his Little Helper to rob department stores on Christmas Eve. But they run into problems when the conman befriends a troubled kid.",
    "release_date": "2003-11-26"
  },
  {
    "title": "My Friend Dahmer",
    "vote_average": 6.537,
    "vote_count": 538,
    "poster_path": "/c6HoPIBcRv9l2tPB8hbivq71Nw.jpg",
    "genre_ids": [
      36,
      18,
      80,
      27
    ],
    "overview": "Jeffrey Dahmer struggles with a difficult family life as a young boy. During his teenage years he slowly transforms, edging closer to the serial killer he was to become.",
    "release_date": "2017-11-03"
  },
  {
    "title": "The Brave One",
    "vote_average": 6.535,
    "vote_count": 880,
    "poster_path": "/9UZ07Rie56aJwPeYPzDDsSyqoc5.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A woman struggles to recover from a brutal attack by setting out on a mission for revenge.",
    "release_date": "2007-09-12"
  },
  {
    "title": "The Informer",
    "vote_average": 6.532,
    "vote_count": 749,
    "poster_path": "/pbGveUC8mk0QRkdXpERPLbMFnrg.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "In New York, former convict Pete Koslow, related to the Polish mafia, must deal with both Klimek the General, his ruthless boss, and the twisted ambitions of two federal agents, as he tries to survive and protect the lives of his loved ones.",
    "release_date": "2019-08-30"
  },
  {
    "title": "Big Stan",
    "vote_average": 6.532,
    "vote_count": 825,
    "poster_path": "/zS1uUwKEFcd8ak0NTXxw97DlbAa.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "A weak con man panics when he learns he's going to prison for fraud. He hires a mysterious martial arts guru who helps transform him into a martial arts expert who can fight off inmates who want to hurt or love him.",
    "release_date": "2007-11-03"
  },
  {
    "title": "Judgment Night",
    "vote_average": 6.531,
    "vote_count": 311,
    "poster_path": "/3rvvpS9YPM5HB2f4HYiNiJVtdam.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "While racing to a boxing match, Frank, Mike, John and Rey get more than they bargained for. A wrong turn lands them directly in the path of Fallon, a vicious, wise-cracking drug lord. After accidentally witnessing Fallon murder a disloyal henchman, the four become his unwilling prey in a savage game of cat and mouse as they are mercilessly stalked through the urban jungle in this taut suspense drama.",
    "release_date": "1993-10-15"
  },
  {
    "title": "Miss Congeniality",
    "vote_average": 6.5,
    "vote_count": 3660,
    "poster_path": "/q1m9ME0zvncnFDmKXC43RqZr8mU.jpg",
    "genre_ids": [
      35,
      80,
      28
    ],
    "overview": "When the local FBI office receives a letter from a terrorist known only as 'The Citizen', it's quickly determined that he's planning his next act at the Miss America beauty pageant. Because tough-as-nails Gracie Hart is the only female Agent at the office, she's chosen to go undercover as the contestant from New Jersey.",
    "release_date": "2000-12-22"
  },
  {
    "title": "Lost Bullet 2",
    "vote_average": 6.524,
    "vote_count": 331,
    "poster_path": "/uAeZI1JJbLPq7Bu5dziH7emHeu7.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Having cleared his name, genius mechanic Lino has only one goal in mind: getting revenge on the corrupt cops who killed his brother and his mentor.",
    "release_date": "2022-11-10"
  },
  {
    "title": "RED 2",
    "vote_average": 6.524,
    "vote_count": 3804,
    "poster_path": "/jW7bHZgkHKUtUJCsThFuqbZGVUL.jpg",
    "genre_ids": [
      28,
      35,
      80,
      53
    ],
    "overview": "Retired C.I.A. agent Frank Moses reunites his unlikely team of elite operatives for a global quest to track down a missing portable nuclear device.",
    "release_date": "2013-07-18"
  },
  {
    "title": "Killer Joe",
    "vote_average": 6.524,
    "vote_count": 1312,
    "poster_path": "/6Tt1TQeOI4TpXu1cBUgNGNGeznW.jpg",
    "genre_ids": [
      80,
      35,
      53,
      18
    ],
    "overview": "A cop who moonlights as a hit man agrees to kill the hated mother of a desperate drug dealer in exchange for a tumble with the young man's virginal sister.",
    "release_date": "2011-09-10"
  },
  {
    "title": "Saving Grace",
    "vote_average": 6.524,
    "vote_count": 394,
    "poster_path": "/ml8XwUomPfisNsKmluP8TIZOR89.jpg",
    "genre_ids": [
      80,
      35
    ],
    "overview": "Unexpectedly widowed, prim and proper housewife Grace Trevethyn finds herself in dire financial straits when she inherits massive debts her late husband had been accruing for years. Faced with losing her house, she decides to use her talent for horticulture and hatches a plan to grow potent marijuana which can be sold at an astronomical price, thus solving her financial crisis.",
    "release_date": "2000-01-24"
  },
  {
    "title": "Queenpins",
    "vote_average": 6.523,
    "vote_count": 341,
    "poster_path": "/55uYpBNnlsUE9fCb3Eibx7F4zps.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Bored and frustrated suburban homemaker Connie and her best pal JoJo, a vlogger with dreams, turn a hobby into a multi-million-dollar counterfeit coupon caper. After firing off a letter to the conglomerate behind a box of cereal gone stale, and receiving an apology along with dozens of freebies, the duo hatch an illegal coupon club scheme that scams millions from mega-corporations and delivers deals to legions of fellow coupon clippers. On the trail to total coupon dominance, a hapless Loss Prevention Officer from the local supermarket chain joins forces with a determined U.S. Postal Inspector in hot pursuit of these newly minted “Queenpins” of pink collar crime.",
    "release_date": "2021-08-26"
  },
  {
    "title": "Spun",
    "vote_average": 6.521,
    "vote_count": 421,
    "poster_path": "/jiwNobUsd29ooowQyTeh0cvPBFL.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "Over the course of three days Ross, a college dropout addicted to crystal-meth, encounters a variety of oddball folks - including a stripper named Nikki and her boyfriend, the local meth producer, The Cook - but all he really wants to do is hook up with his old girlfriend, Amy.",
    "release_date": "2003-02-07"
  },
  {
    "title": "The Pledge",
    "vote_average": 6.521,
    "vote_count": 931,
    "poster_path": "/9QOzFL3FPMAUNNPrNiKC3mEDxco.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "A police chief about to retire pledges to help a woman find her daughter's killer.",
    "release_date": "2001-01-19"
  },
  {
    "title": "Things to Do in Denver When You're Dead",
    "vote_average": 6.519,
    "vote_count": 348,
    "poster_path": "/oPp6Gbrasox66WyMvPS0k8OakQf.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Five different criminals face imminent death after botching a job quite badly.",
    "release_date": "1995-12-01"
  },
  {
    "title": "Colors",
    "vote_average": 6.517,
    "vote_count": 415,
    "poster_path": "/5KueYME8A449pxaKTJZp3cWKKSX.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "A confident young cop is shown the ropes by a veteran partner in the dangerous gang-controlled barrios of Los Angeles, where the gang culture is enforced by the colors the members wear.",
    "release_date": "1988-04-15"
  },
  {
    "title": "Paranoid Park",
    "vote_average": 6.517,
    "vote_count": 494,
    "poster_path": "/qdxQ8vZJoZuLqU9MXYW2vnRwhan.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A teenage skateboarder becomes suspected of being connected with a security guard who suffered a brutal death in a skate park called \"Paranoid Park\".",
    "release_date": "2007-07-12"
  },
  {
    "title": "Everybody Knows",
    "vote_average": 6.516,
    "vote_count": 914,
    "poster_path": "/1TuuM451os3NaltCwGfPCVL2BST.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "Laura, a Spanish woman living in Buenos Aires, returns to her hometown outside Madrid with her Argentinian husband and children. However, the trip is upset by unexpected events that bring secrets into the open.",
    "release_date": "2018-05-09"
  },
  {
    "title": "Basic",
    "vote_average": 6.516,
    "vote_count": 970,
    "poster_path": "/uXgx1wQgH7KhqK2Y4ZeicPd9PaN.jpg",
    "genre_ids": [
      28,
      18,
      9648,
      53,
      80
    ],
    "overview": "A DEA agent investigates the disappearance of a legendary Army ranger drill sergeant and several of his cadets during a training exercise gone severely awry.",
    "release_date": "2003-04-18"
  },
  {
    "title": "Wanted",
    "vote_average": 6.515,
    "vote_count": 6668,
    "poster_path": "/cbDMsV4VJAL2xJ2JXdWWjmUXZkT.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Doormat Wesley Gibson discovers that his recently murdered father - who Wesley never knew - belonged to a secret guild of assassins. After a leather-clad sexpot drafts Wesley into the society, he hones his innate killing skills and turns avenger.",
    "release_date": "2008-06-19"
  },
  {
    "title": "A Perfect Murder",
    "vote_average": 6.517,
    "vote_count": 1272,
    "poster_path": "/wC0ax12N9GQ8vMXPEs4nES5AAiB.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "overview": "Millionaire industrialist Steven Taylor is a man who has everything but what he craves most: the love and fidelity of his wife. A hugely successful player in the New York financial world, he considers her to be his most treasured acquisition. But she needs more than simply the role of dazzling accessory.",
    "release_date": "1998-06-05"
  },
  {
    "title": "Honest Thief",
    "vote_average": 6.512,
    "vote_count": 1604,
    "poster_path": "/zeD4PabP6099gpE0STWJrJrCBCs.jpg",
    "genre_ids": [
      53,
      28,
      80
    ],
    "overview": "A bank robber tries to turn himself in because he's falling in love and wants to live an honest life...but when he realizes the Feds are more corrupt than him, he must fight back to clear his name.",
    "release_date": "2020-09-03"
  },
  {
    "title": "The Grifters",
    "vote_average": 6.513,
    "vote_count": 360,
    "poster_path": "/zMpGfkiDIdg5bB7WGcAT3Fdrfpt.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "A young short-con grifter suffers both injury and the displeasure of reuniting with his criminal mother, all the while dating an unpredictable young lady.",
    "release_date": "1990-08-08"
  },
  {
    "title": "Undisputed",
    "vote_average": 6.512,
    "vote_count": 669,
    "poster_path": "/xgnCABtbMDaDqn9bt3ZFJTnpA3e.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Monroe Hutchens is the heavyweight champion of Sweetwater, a maximum security prison. He was convicted to a life sentence due to a passionate crime. Iceman Chambers is the heavyweight champion, who lost his title due to a rape conviction to ten years in Sweetwater. WHen these two giants collide in the same prison, they fight against each other disputing who is the real champion.",
    "release_date": "2002-07-17"
  },
  {
    "title": "Black Mass",
    "vote_average": 6.505,
    "vote_count": 3163,
    "poster_path": "/zfwciv4LIJkNQsfuhYGv0Nkiweg.jpg",
    "genre_ids": [
      18,
      80,
      36
    ],
    "overview": "The true story of Whitey Bulger, the brother of a state senator and the most infamous violent criminal in the history of South Boston, who became an FBI informant to take down a Mafia family invading his turf.",
    "release_date": "2015-09-17"
  },
  {
    "title": "Lone Wolf McQuade",
    "vote_average": 6.505,
    "vote_count": 320,
    "poster_path": "/dTUTDPilI2Ozi5GeoBRczidQTaZ.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "The archetypical renegade Texas Ranger wages war against a drug kingpin with automatic weapons, his wits and martial arts after a gun battle leaves his partner dead. All of this inevitably culminates in a martial arts showdown between the drug lord and the ranger, and involving the woman they both love.",
    "release_date": "1983-04-15"
  },
  {
    "title": "The Iceman",
    "vote_average": 6.504,
    "vote_count": 938,
    "poster_path": "/56KPE9tPYh2WBdnUMq9EIOwEXGQ.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "The true story of Richard Kuklinski, the notorious contract killer and family man.",
    "release_date": "2012-09-01"
  },
  {
    "title": "Swimming Pool",
    "vote_average": 6.503,
    "vote_count": 643,
    "poster_path": "/bwBAUlEXhUKmegdguoFj9grF9t3.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "A British crime novelist travels to her publisher's upmarket summer house in Southern France to seek solitude in order to work on her next book. However, the unexpected arrival of the publisher's daughter induces complications and a subsequent crime.",
    "release_date": "2003-05-21"
  },
  {
    "title": "Four Flies on Grey Velvet",
    "vote_average": 6.5,
    "vote_count": 344,
    "poster_path": "/hEFlF2M4nJ9OszjZaJ2oaRt9lr0.jpg",
    "genre_ids": [
      53,
      9648,
      80,
      27
    ],
    "overview": "Roberto, a drummer in a rock band, keeps receiving weird phone calls and being followed by a mysterious man. One night he manages to catch up with his persecutor and tries to get him to talk but in the ensuing struggle he accidentally stabs him. He runs away, but he understands his troubles have just begun when the following day he receives an envelope with photos of him killing the man. Someone is killing all his friends and trying to frame him for the murders.",
    "release_date": "1971-12-17"
  },
  {
    "title": "Copycat",
    "vote_average": 6.501,
    "vote_count": 871,
    "poster_path": "/lKNjGQXTy5WkSjAtLzLzAN9IHCD.jpg",
    "genre_ids": [
      53,
      80,
      9648
    ],
    "overview": "An agoraphobic psychologist and a female detective must work together to take down a serial killer who copies serial killers from the past.",
    "release_date": "1995-10-27"
  },
  {
    "title": "The Mechanic",
    "vote_average": 6.5,
    "vote_count": 3021,
    "poster_path": "/k37axEHszFP9WOVvbozxF0r7X7g.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Arthur Bishop is a 'mechanic' - an elite assassin with a strict code and unique talent for cleanly eliminating targets. It's a job that requires professional perfection and total detachment, and Bishop is the best in the business. But when he is ordered to take out his mentor and close friend Harry, Bishop is anything but detached.",
    "release_date": "2011-01-13"
  },
  {
    "title": "Kiss the Girls",
    "vote_average": 6.5,
    "vote_count": 1394,
    "poster_path": "/25h5I3E3ydhazsPDnscWHivq5pn.jpg",
    "genre_ids": [
      53,
      80,
      9648,
      18
    ],
    "overview": "Forensic psychologist Alex Cross travels to North Carolina and teams with escaped kidnap victim Kate McTiernan to hunt down \"Casanova,\" a serial killer who abducts strong-willed women and forces them to submit to his demands. The trail leads to Los Angeles, where the duo discovers that the psychopath may not be working alone.",
    "release_date": "1997-09-29"
  },
  {
    "title": "Awake",
    "vote_average": 6.497,
    "vote_count": 1291,
    "poster_path": "/jIPIxaBcppLLkygko7tV5yuTIs1.jpg",
    "genre_ids": [
      53,
      80,
      9648
    ],
    "overview": "While undergoing heart surgery, a man experiences a phenomenon called ‘anesthetic awareness’, which leaves him awake but paralyzed throughout the operation. As various obstacles present themselves, his wife must make life-altering decisions while wrestling with her own personal drama.",
    "release_date": "2007-11-28"
  },
  {
    "title": "Nothing to Lose",
    "vote_average": 6.497,
    "vote_count": 555,
    "poster_path": "/5al8I28ufKJDxGWDcNGw6xCkZHH.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Advertising executive Nick Beame learns that his wife is sleeping with his employer. In a state of despair, he encounters a bumbling thief whose attempted carjacking goes awry when Nick takes him on an involuntary joyride. Soon the betrayed businessman and the incompetent crook strike up a partnership and develop a robbery-revenge scheme. But it turns out that some other criminals in the area don't appreciate the competition.",
    "release_date": "1997-07-18"
  },
  {
    "title": "U.S. Marshals",
    "vote_average": 6.496,
    "vote_count": 1458,
    "poster_path": "/5ST0BydDSXtW5AtfDDhTVS13pTt.jpg",
    "genre_ids": [
      53,
      80,
      28
    ],
    "overview": "U.S. Marshal Sam Gerard is accompanying a plane load of convicts from Chicago to New York. The plane crashes spectacularly, and Mark Sheridan escapes. But when Diplomatic Security Agent John Royce is assigned to help Gerard recapture Sheridan, it becomes clear that Sheridan is more than just another murderer.",
    "release_date": "1998-03-06"
  },
  {
    "title": "Sleeping with the Enemy",
    "vote_average": 6.5,
    "vote_count": 990,
    "poster_path": "/lhkfSDKWvu6fX9LSyVaEklaLNZP.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "A young woman fakes her own death in an attempt to escape her nightmarish marriage, but discovers it is impossible to elude her controlling husband.",
    "release_date": "1991-01-13"
  },
  {
    "title": "Shaft",
    "vote_average": 6.495,
    "vote_count": 326,
    "poster_path": "/yJChPuu2V339IiDPQDHeIh1SYpA.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Cool black private eye John Shaft is hired by a crime lord to find and retrieve his kidnapped daughter.",
    "release_date": "1971-06-25"
  },
  {
    "title": "I Spit on Your Grave",
    "vote_average": 6.494,
    "vote_count": 2100,
    "poster_path": "/4VZ9eqel8Fsp54KMnesr3xIc67N.jpg",
    "genre_ids": [
      53,
      80,
      27
    ],
    "overview": "Jennifer is a writer working on a new novel and, needing to get out of the city to finish it, hires a riverside apartment in upstate New York to finish her book—attracting the attention of a number of rowdy male locals.",
    "release_date": "2010-06-17"
  },
  {
    "title": "2 Fast 2 Furious",
    "vote_average": 6.5,
    "vote_count": 6977,
    "poster_path": "/6nDZExrDKIXvSAghsFKVFRVJuSf.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "It's a major double-cross when former police officer Brian O'Conner teams up with his ex-con buddy Roman Pearce to transport a shipment of \"dirty\" money for shady Miami-based import-export dealer Carter Verone. But the guys are actually working with undercover agent Monica Fuentes to bring Verone down.",
    "release_date": "2003-06-05"
  },
  {
    "title": "Widows",
    "vote_average": 6.488,
    "vote_count": 2181,
    "poster_path": "/d31SGJSaX29ba5ZUbZcesGoDE7I.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "A police shootout leaves four thieves dead during an explosive armed robbery attempt in Chicago. Their widows have nothing in common except a debt left behind by their spouses' criminal activities. Hoping to forge a future on their own terms, they join forces to pull off a heist.",
    "release_date": "2018-11-06"
  },
  {
    "title": "Analyze This",
    "vote_average": 6.5,
    "vote_count": 1746,
    "poster_path": "/eqa4TEgkx63WRhqyD8eTwmL7bUi.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Countless wiseguy films are spoofed in this film that centers on the neuroses and angst of a powerful Mafia racketeer who suffers from panic attacks. When Paul Vitti needs help dealing with his role in the \"family,\" unlucky shrink Dr. Ben Sobel is given just days to resolve Vitti's emotional crisis and turn him into a happy, well-adjusted gangster.",
    "release_date": "1999-03-05"
  },
  {
    "title": "Hustlers",
    "vote_average": 6.487,
    "vote_count": 2791,
    "poster_path": "/zBhv8rsLOfpFW2M5b6wW78Uoojs.jpg",
    "genre_ids": [
      18,
      35,
      80
    ],
    "overview": "A crew of savvy former strip club employees band together to turn the tables on their Wall Street clients.",
    "release_date": "2019-09-12"
  },
  {
    "title": "Safe",
    "vote_average": 6.488,
    "vote_count": 2278,
    "poster_path": "/kOCpkoMUVae9UIf85gO71SyjLbW.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "After a former elite agent rescues a 12-year-old Chinese girl who's been abducted, they find themselves in the middle of a standoff between Triads, the Russian Mafia and high-level corrupt New York City politicians and police.",
    "release_date": "2012-04-16"
  },
  {
    "title": "Smokin' Aces",
    "vote_average": 6.484,
    "vote_count": 1525,
    "poster_path": "/nrdnN8WqvyOt8Bnl3hgWcZD6ZyM.jpg",
    "genre_ids": [
      28,
      35,
      80,
      53
    ],
    "overview": "When a Las Vegas performer-turned-snitch named Buddy Israel decides to turn state's evidence and testify against the mob, it seems that a whole lot of people would like to make sure he's no longer breathing.",
    "release_date": "2006-12-09"
  },
  {
    "title": "Mr. Right",
    "vote_average": 6.483,
    "vote_count": 1263,
    "poster_path": "/aSx5YUCLcSUAR4nt93aeIpZYHF6.jpg",
    "genre_ids": [
      35,
      28,
      10749,
      80
    ],
    "overview": "A girl falls for the \"perfect\" guy, who happens to have a very fatal flaw: he's a hitman on the run from the crime cartels who employ him.",
    "release_date": "2016-02-29"
  },
  {
    "title": "All the Money in the World",
    "vote_average": 6.481,
    "vote_count": 2148,
    "poster_path": "/q6nE9Hf0ezszjI4DbCxwzQ73MMy.jpg",
    "genre_ids": [
      80,
      36,
      53
    ],
    "overview": "The story of the kidnapping of 16-year-old John Paul Getty III and the desperate attempt by his devoted mother to convince his billionaire grandfather Jean Paul Getty to pay the ransom.",
    "release_date": "2017-12-21"
  },
  {
    "title": "Mad Money",
    "vote_average": 6.479,
    "vote_count": 631,
    "poster_path": "/le0r7Hf7YOy3QFdOoYXRI29T1mW.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "Three female employees of the Federal Reserve plot to steal money that is about to be destroyed.",
    "release_date": "2008-01-17"
  },
  {
    "title": "Blue Streak",
    "vote_average": 6.481,
    "vote_count": 1378,
    "poster_path": "/jek2osBtFhzU6Hjj7yp1egOtbqO.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "Miles Logan is a jewel thief who just hit the big time by stealing a huge diamond. However, after two years in jail, he comes to find out that he hid the diamond in a police building that was being built at the time of the robbery. In an attempt to regain his diamond, he poses as an LAPD detective.",
    "release_date": "1999-09-17"
  },
  {
    "title": "Reservation Road",
    "vote_average": 6.481,
    "vote_count": 351,
    "poster_path": "/pZaYofgshgEkeW4Huo3o6tEX89C.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "Two fathers' lives intersect when one of them is involved in a terrible and sudden hit-and-run car accident that leaves the other's son dead. In response, the two men react in unexpected ways as a reckoning looms in the near future.",
    "release_date": "2007-09-13"
  },
  {
    "title": "Naked Gun 33⅓: The Final Insult",
    "vote_average": 6.48,
    "vote_count": 1892,
    "poster_path": "/p0AYsdgkudR9P5fNV5AjzbwQt8W.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Frank Drebin is persuaded out of retirement to go undercover in a state prison. There he has to find out what top terrorist, Rocco, has planned for when he escapes. Adding to his problems, Frank's wife, Jane, is desperate for a baby.",
    "release_date": "1994-03-18"
  },
  {
    "title": "Mother's Day",
    "vote_average": 6.479,
    "vote_count": 387,
    "poster_path": "/ykoZhok4DVEJI8q1st7c3VZ5SvD.jpg",
    "genre_ids": [
      53,
      80,
      27
    ],
    "overview": "Crazed members of a sadistic family return to their childhood home to terrorize the new owners.",
    "release_date": "2010-09-23"
  },
  {
    "title": "Mr. Nice Guy",
    "vote_average": 6.5,
    "vote_count": 608,
    "poster_path": "/wAAt2gvbkbeefzjd06GPfkdfUho.jpg",
    "genre_ids": [
      80,
      28,
      35
    ],
    "overview": "A Chinese chef accidentally gets involved with a news reporter who filmed a drug bust that went awry and is now being chased by gangs who are trying to get the video tape.",
    "release_date": "1997-01-31"
  },
  {
    "title": "Dobermann",
    "vote_average": 6.479,
    "vote_count": 466,
    "poster_path": "/3rahpIHJBenGJKI1EfAHlGSfKEY.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "The charismatic criminal Dobermann, who got his first gun when he was christened, leads a gang of brutal robbers. After a complex and brutal bank robbery, they are being hunted by the Paris police. The hunt is led by the sadistic cop Christini, who only has one goal: to catch Dobermann at any cost.",
    "release_date": "1997-06-18"
  },
  {
    "title": "Beverly Hills Cop II",
    "vote_average": 6.475,
    "vote_count": 2206,
    "poster_path": "/egDakU8O5yUwpUJP9IMAUVtIDll.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "Axel Foley returns to the land of sunshine and palm trees to investigate the near-fatal shooting of police Captain Andrew Bogomil. With the help of Sgt. Taggart and Det. Rosewood, they soon uncover that the shooting is associated with a series of \"alphabet\" robberies masterminded by a heartless weapons kingpin—and the chase is on.",
    "release_date": "1987-05-18"
  },
  {
    "title": "Project Power",
    "vote_average": 6.473,
    "vote_count": 2678,
    "poster_path": "/TnOeov4w0sTtV2gqICqIxVi74V.jpg",
    "genre_ids": [
      28,
      80,
      878
    ],
    "overview": "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
    "release_date": "2020-08-14"
  },
  {
    "title": "The Last House on the Left",
    "vote_average": 6.47,
    "vote_count": 1632,
    "poster_path": "/2Y35XCUS8U8vC8vs0HDEVkPu1BM.jpg",
    "genre_ids": [
      80,
      53,
      27,
      18
    ],
    "overview": "A group of teenage girls heading into the city hook up with a gang of drug-addled ne'er-do-wells and are brutally murdered. The killers find their way to the home of one of their victim's parents, where both father and mother exact a horrible revenge.",
    "release_date": "2009-03-13"
  },
  {
    "title": "The Fast and the Furious: Tokyo Drift",
    "vote_average": 6.471,
    "vote_count": 6394,
    "poster_path": "/46xqGOwHbh2TH2avWSw3SMXph4E.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "In order to avoid a jail sentence, Sean Boswell heads to Tokyo to live with his military father. In a low-rent section of the city, Shaun gets caught up in the underground world of drift racing",
    "release_date": "2006-06-03"
  },
  {
    "title": "Assassins",
    "vote_average": 6.5,
    "vote_count": 1449,
    "poster_path": "/kgqS4jn60E8UIExfceMUExB3ZKK.jpg",
    "genre_ids": [
      28,
      12,
      80,
      53
    ],
    "overview": "Assassin Robert Rath arrives at a funeral to kill a prominent mobster, only to witness a rival hired gun complete the job for him -- with grisly results. Horrified by the murder of innocent bystanders, Rath decides to take one last job and then return to civilian life. But finding his way out of the world of contract killing grows ever more dangerous as Rath falls for his female target and becomes a marked man himself.",
    "release_date": "1995-10-06"
  },
  {
    "title": "Murder Mystery 2",
    "vote_average": 6.465,
    "vote_count": 1479,
    "poster_path": "/s1VzVhXlqsevi8zeCMG9A16nEUf.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding.",
    "release_date": "2023-03-28"
  },
  {
    "title": "Mr. Holmes",
    "vote_average": 6.464,
    "vote_count": 1765,
    "poster_path": "/iNnHMoj2oldH7O9uL08iGhfHzh.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "In 1947, long-retired and near the end of his life, Sherlock Holmes grapples with an unreliable memory and must rely on his housekeeper's son as he revisits the still-unsolved case that led to his retirement.",
    "release_date": "2015-06-19"
  },
  {
    "title": "Big Nothing",
    "vote_average": 6.46,
    "vote_count": 391,
    "poster_path": "/nBqD9k5UECzHRwuc0Gt9SgkI1YN.jpg",
    "genre_ids": [
      28,
      35,
      80,
      53
    ],
    "overview": "A frustrated, unemployed teacher joins forces with a scammer and his girlfriend in a blackmailing scheme.",
    "release_date": "2006-12-01"
  },
  {
    "title": "Police Story 4: First Strike",
    "vote_average": 6.5,
    "vote_count": 440,
    "poster_path": "/bRHbteT4IORJOXY0Qrnb4FPXRS0.jpg",
    "genre_ids": [
      28,
      12,
      35,
      80,
      18,
      53
    ],
    "overview": "Hong Kong cop Chan Ka-Kui returns, working with Interpol to track down and arrest an illegal weapons dealer. Chan later realizes that things are not as simple as they appear and soon finds himself to be a pawn of an organization posing as Russian intelligence.",
    "release_date": "1996-02-10"
  },
  {
    "title": "Small Time Crooks",
    "vote_average": 6.456,
    "vote_count": 629,
    "poster_path": "/eIJRFZFDmh0xXPlKt3WwN5fiSLe.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "A loser of a crook and his wife strike it rich when a botched bank job's cover business becomes a spectacular success.",
    "release_date": "2000-05-19"
  },
  {
    "title": "Shoot 'Em Up",
    "vote_average": 6.456,
    "vote_count": 1758,
    "poster_path": "/pbHpZfjzF4hKomaSmSZWRWKhO0P.jpg",
    "genre_ids": [
      28,
      53,
      35,
      80
    ],
    "overview": "A man named Mr. Smith delivers a woman's baby during a shootout, and is then called upon to protect the newborn from the army of gunmen.",
    "release_date": "2007-07-26"
  },
  {
    "title": "Paulette",
    "vote_average": 6.455,
    "vote_count": 378,
    "poster_path": "/vrOmk9UVy5MW1fMpwVAMMlmCdWk.jpg",
    "genre_ids": [
      80,
      35
    ],
    "overview": "Paulette lives alone in a housing project in the Paris suburbs. With her meager pension, she can no longer make ends meet.",
    "release_date": "2012-10-04"
  },
  {
    "title": "Mindhunters",
    "vote_average": 6.455,
    "vote_count": 1088,
    "poster_path": "/uTTGRvnqCI9ZC7WkyP9u7XRiOaA.jpg",
    "genre_ids": [
      9648,
      53,
      80
    ],
    "overview": "Trainees in the FBI's psychological profiling program must put their training into practice when they discover a killer in their midst.  Based very loosely on Agatha Christie's And Then There Were None.",
    "release_date": "2004-05-07"
  },
  {
    "title": "Get Shorty",
    "vote_average": 6.454,
    "vote_count": 942,
    "poster_path": "/r82SdPhg4fnIcLt0ogIjQxqjdcO.jpg",
    "genre_ids": [
      35,
      53,
      80
    ],
    "overview": "Chili Palmer is a Miami mobster who gets sent by his boss, the psychopathic \"Bones\" Barboni, to collect a bad debt from Harry Zimm, a Hollywood producer who specializes in cheesy horror films. When Chili meets Harry's leading lady, the romantic sparks fly. After pitching his own life story as a movie idea, Chili learns that being a mobster and being a Hollywood producer really aren't all that different.",
    "release_date": "1995-10-20"
  },
  {
    "title": "Summer of Sam",
    "vote_average": 6.453,
    "vote_count": 419,
    "poster_path": "/vRClUmlP4nr1q3xMYMz32MT3Rdc.jpg",
    "genre_ids": [
      53,
      18,
      80
    ],
    "overview": "During the summer of 1977, a killer known as the Son of Sam keeps all of New York City on edge with a series of brutal murders.",
    "release_date": "1999-07-02"
  },
  {
    "title": "Death on the Nile",
    "vote_average": 6.451,
    "vote_count": 3276,
    "poster_path": "/kVr5zIAFSPRQ57Y1zE7KzmhzdMQ.jpg",
    "genre_ids": [
      9648,
      80,
      53
    ],
    "overview": "Belgian sleuth Hercule Poirot's Egyptian vacation aboard a glamorous river steamer turns into a terrifying search for a murderer when a picture-perfect couple's idyllic honeymoon is tragically cut short.",
    "release_date": "2022-02-09"
  },
  {
    "title": "The Disappearance of Alice Creed",
    "vote_average": 6.45,
    "vote_count": 510,
    "poster_path": "/iJT7eXt09OffD4WBOvV7eGgL3Lt.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A rich man's daughter is held captive in an abandoned apartment by two former convicts who abducted her and hold her ransom in exchange for her father's money.",
    "release_date": "2009-09-12"
  },
  {
    "title": "The Whole Nine Yards",
    "vote_average": 6.449,
    "vote_count": 1741,
    "poster_path": "/r4FvRHW1J9FAOnCYchZ7QanQ04e.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "After a mobster agrees to cooperate with an FBI investigation in order to stay out of prison, he's relocated by the authorities to a life of suburban anonymity as part of a witness protection program. It's not long before a couple of his new neighbours figure out his true identity and come knocking to see if he'd be up for one more hit—suburban style.",
    "release_date": "2000-02-18"
  },
  {
    "title": "The Whole Nine Yards",
    "vote_average": 6.449,
    "vote_count": 1741,
    "poster_path": "/r4FvRHW1J9FAOnCYchZ7QanQ04e.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "After a mobster agrees to cooperate with an FBI investigation in order to stay out of prison, he's relocated by the authorities to a life of suburban anonymity as part of a witness protection program. It's not long before a couple of his new neighbours figure out his true identity and come knocking to see if he'd be up for one more hit—suburban style.",
    "release_date": "2000-02-18"
  },
  {
    "title": "Imperium",
    "vote_average": 6.446,
    "vote_count": 1271,
    "poster_path": "/fEwo3gZfbeoovdcTyf4o4wATE1r.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Nate Foster, a young, idealistic FBI agent, goes undercover to take down a radical white supremacy terrorist group. The bright up-and-coming analyst must confront the challenge of sticking to a new identity while maintaining his real principles as he navigates the dangerous underworld of white supremacy. Inspired by real events.",
    "release_date": "2016-08-19"
  },
  {
    "title": "Revenge of the Pink Panther",
    "vote_average": 6.443,
    "vote_count": 384,
    "poster_path": "/pvFiI8Kkq6JIf9uxDUU5FEvet7f.jpg",
    "genre_ids": [
      35,
      80,
      9648
    ],
    "overview": "Chief Inspector Jacques Clouseau is dead. At least that is what the world—and Charles Dreyfus—believe when a dead body is discovered in Clouseau's car after being shot off the road. Naturally, Clouseau knows differently and, taking advantage of not being alive, sets out to discover why an attempt was made on his life.",
    "release_date": "1978-01-08"
  },
  {
    "title": "Rush Hour 3",
    "vote_average": 6.44,
    "vote_count": 2993,
    "poster_path": "/iXsbAIZezI0gh0dnOnBbeFuG3AO.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "After a botched assassination attempt, the mismatched duo finds themselves in Paris, struggling to retrieve a precious list of names, as the murderous crime syndicate's henchmen try their best to stop them. Once more, Lee and Carter must fight their way through dangerous gangsters; however, this time, the past has come back to haunt Lee. Will the boys get the job done once and for all?",
    "release_date": "2007-08-08"
  },
  {
    "title": "16 Blocks",
    "vote_average": 6.4,
    "vote_count": 1826,
    "poster_path": "/jQFJXgniMAerNbck0bxZfUXO43v.jpg",
    "genre_ids": [
      28,
      12,
      80,
      53
    ],
    "overview": "An aging cop is assigned the ordinary task of escorting a fast-talking witness from police custody to a courthouse, but they find themselves running the gauntlet as other forces try to prevent them from getting there.",
    "release_date": "2006-03-01"
  },
  {
    "title": "Spree",
    "vote_average": 6.433,
    "vote_count": 389,
    "poster_path": "/kaYi1XKLqM5k3eC5wQFLVDxqQ52.jpg",
    "genre_ids": [
      35,
      80,
      27
    ],
    "overview": "Desperate for an online following, a rideshare driver has figured out a deadly plan to go viral and he will stop at nothing to get his five minutes of fame.",
    "release_date": "2020-08-14"
  },
  {
    "title": "Man on a Ledge",
    "vote_average": 6.433,
    "vote_count": 2461,
    "poster_path": "/fn75crX6sRcKRc7lhuqKTenppQE.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "An ex-cop turned con threatens to jump to his death from a Manhattan hotel rooftop. The NYPD dispatch a female police psychologist to talk him down. However, unbeknownst to the police on the scene, the suicide attempt is a cover for the biggest diamond heist ever pulled.",
    "release_date": "2012-01-13"
  },
  {
    "title": "I Love You Phillip Morris",
    "vote_average": 6.433,
    "vote_count": 1547,
    "poster_path": "/qtAuWLGQ7N4PNQ6boZeqqoUY2l9.jpg",
    "genre_ids": [
      35,
      80,
      18,
      10749
    ],
    "overview": "Steven Russell leads a seemingly average life – an organ player in the local church, happily married to Debbie, and a member of the local police force. That is until he has a severe car accident that leads him to the ultimate epiphany: he’s gay and he’s going to live life to the fullest – even if he has to break the law to do it. Taking on an extravagant lifestyle, Steven turns to cons and fraud to make ends meet and is eventually sent to the State Penitentiary where he meets the love of his life, a sensitive, soft-spoken man named Phillip Morris. His devotion to freeing Phillip from jail and building the perfect life together prompts him to attempt (and often succeed at) one impossible con after another.",
    "release_date": "2010-02-04"
  },
  {
    "title": "The Girl on the Train",
    "vote_average": 6.432,
    "vote_count": 5483,
    "poster_path": "/AhTO2QWG0tug7yDoh0XoaMhPt3J.jpg",
    "genre_ids": [
      53,
      9648,
      18,
      80
    ],
    "overview": "Rachel Watson, devastated by her recent divorce, spends her daily commute fantasizing about the seemingly perfect couple who live in a house that her train passes every day, until one morning she sees something shocking happen there and becomes entangled in the mystery that unfolds.",
    "release_date": "2016-10-05"
  },
  {
    "title": "Harsh Times",
    "vote_average": 6.426,
    "vote_count": 633,
    "poster_path": "/raBWBnGz2X6FQ3iUwPwYQE4FrkY.jpg",
    "genre_ids": [
      80,
      18,
      53,
      28
    ],
    "overview": "Jim Davis is an ex-Army Ranger who finds himself slipping back into his old life of petty crime after a job offer from the LAPD evaporates. His best friend is pressured by his girlfriend Sylvia to find a job, but Jim is more interested in hanging out and making cash from small heists, while trying to get a law enforcement job so he can marry his Mexican girlfriend.",
    "release_date": "2005-09-11"
  },
  {
    "title": "Headshot",
    "vote_average": 6.425,
    "vote_count": 407,
    "poster_path": "/dpdmO3PNKwCOzf68y8J4Gu19i3r.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "A young man washes ashore, his memory gone - but his past comes back to haunt him after he is nursed back to health and his killing ability is needed when he takes on a powerful drug lord.",
    "release_date": "2016-09-24"
  },
  {
    "title": "The Clovehitch Killer",
    "vote_average": 6.424,
    "vote_count": 626,
    "poster_path": "/6NmsbUJqnopbnLun2E4KvtVNj8T.jpg",
    "genre_ids": [
      18,
      9648,
      80
    ],
    "overview": "A picture-perfect family is torn apart after Tyler finds a cache of disturbing images in his father's possession. He begins to suspect that the man he trusts most in the world may be responsible for the murder of 13 women ten years prior.",
    "release_date": "2018-11-16"
  },
  {
    "title": "The Old Man & the Gun",
    "vote_average": 6.422,
    "vote_count": 1310,
    "poster_path": "/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
    "release_date": "2018-09-27"
  },
  {
    "title": "8MM",
    "vote_average": 6.42,
    "vote_count": 1851,
    "poster_path": "/oSEGCtrYWRZzusN6xu2BdIGLM40.jpg",
    "genre_ids": [
      53,
      80,
      9648
    ],
    "overview": "A small, seemingly innocuous plastic reel of film leads surveillance specialist Tom Welles down an increasingly dark and frightening path. With the help of the streetwise Max, he relentlessly follows a bizarre trail of evidence to determine the fate of a complete stranger. As his work turns into obsession, he drifts farther and farther away from his wife, family and simple life as a small-town PI.",
    "release_date": "1999-02-26"
  },
  {
    "title": "Central Intelligence",
    "vote_average": 6.417,
    "vote_count": 5586,
    "poster_path": "/7irCMBIivXAqjZ7MgZoGVLrgACR.jpg",
    "genre_ids": [
      28,
      35,
      80,
      9648
    ],
    "overview": "After he reunites with an old pal through Facebook, a mild-mannered accountant is lured into the world of international espionage.",
    "release_date": "2016-06-16"
  },
  {
    "title": "Gone in Sixty Seconds",
    "vote_average": 6.417,
    "vote_count": 4123,
    "poster_path": "/lFsJJjnGcNhewSIM9XBTaHsI2et.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Upon learning that he has to come out of retirement to steal 50 cars in one night to save his brother Kip's life, former car thief Randall \"Memphis\" Raines enlists help from a few \"boost happy\" pals to accomplish a seemingly impossible feat. From countless car chases to relentless cops, the high-octane excitement builds as Randall swerves around more than a few roadblocks to keep Kip alive.",
    "release_date": "2000-06-09"
  },
  {
    "title": "Master Z: Ip Man Legacy",
    "vote_average": 6.416,
    "vote_count": 489,
    "poster_path": "/6VxEvOF7QDovsG6ro9OVyjH07LF.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "Following his defeat by Master Ip, Cheung Tin Chi tries to make a life with his young son in Hong Kong, waiting tables at a bar that caters to expats. But it's not long before the mix of foreigners, money, and triad leaders draw him once again to the fight.",
    "release_date": "2018-12-20"
  },
  {
    "title": "Dead Again",
    "vote_average": 6.416,
    "vote_count": 344,
    "poster_path": "/irEnDVtxox6gnRJuwtEZuxvl2vZ.jpg",
    "genre_ids": [
      9648,
      18,
      80
    ],
    "overview": "In 1949, composer Roman Strauss is executed for the murder of his wife. In 1990s Los Angeles, a detective comes across a mute amnesiac woman who is somehow linked to the Strauss murder.",
    "release_date": "1991-08-23"
  },
  {
    "title": "R.I.P.D. 2: Rise of the Damned",
    "vote_average": 6.411,
    "vote_count": 536,
    "poster_path": "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
    "genre_ids": [
      28,
      35,
      14,
      80
    ],
    "overview": "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
    "release_date": "2022-11-15"
  },
  {
    "title": "WHAT DID JACK DO?",
    "vote_average": 6.41,
    "vote_count": 445,
    "poster_path": "/68FofMgclH1qCNXoL6foBqPfNFD.jpg",
    "genre_ids": [
      35,
      80,
      9648
    ],
    "overview": "In a locked down train station, a homicide detective conducts an interview with a tormented monkey  who is suspected of murder.",
    "release_date": "2017-11-08"
  },
  {
    "title": "Run All Night",
    "vote_average": 6.409,
    "vote_count": 2668,
    "poster_path": "/frzdzHceByAIlwVKvSvY9zqpjyV.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Brooklyn mobster and prolific hit man Jimmy Conlon has seen better days. Longtime best friend of a mob boss, Jimmy is haunted by the sins of his past—as well as a dogged police detective who’s been one step behind Jimmy for 30 years. But when Jimmy’s estranged son becomes a target, Jimmy must make a choice between the crime family he chose and the real family he abandoned long ago. Now, with nowhere safe to turn, Jimmy has just one night to figure out exactly where his loyalties lie and to see if he can finally make things right.",
    "release_date": "2015-03-11"
  },
  {
    "title": "The Number 23",
    "vote_average": 6.407,
    "vote_count": 3041,
    "poster_path": "/mlNU8a1SkTu6cKA4LAoZxfNPng0.jpg",
    "genre_ids": [
      53,
      9648,
      80
    ],
    "overview": "Walter Sparrow is an animal control officer that becomes obsessed with a mysterious book that seems to be based on his own life. As soon as he opens the book, he notices strange parallels between what he reads and what he's experienced. But now he's worried that a fictional murder might materialize.",
    "release_date": "2007-02-23"
  },
  {
    "title": "Flypaper",
    "vote_average": 6.407,
    "vote_count": 705,
    "poster_path": "/sdZGuHaZGRAq72wb9xfAAFQUbVF.jpg",
    "genre_ids": [
      9648,
      35,
      80
    ],
    "overview": "A man caught in the middle of two simultaneous robberies at a bank desperately tries to protect the teller with whom he's secretly in love.",
    "release_date": "2011-08-19"
  },
  {
    "title": "Crooked House",
    "vote_average": 6.406,
    "vote_count": 852,
    "poster_path": "/n3Nwj7WrV42osuILi4ErBCoqkQl.jpg",
    "genre_ids": [
      9648,
      80,
      53
    ],
    "overview": "A private investigator helps a former flame solve the murder of her wealthy grandfather, who lived in a sprawling estate surrounded by his idiosyncratic family.",
    "release_date": "2017-09-06"
  },
  {
    "title": "Cheap Thrills",
    "vote_average": 6.404,
    "vote_count": 380,
    "poster_path": "/cnGzB8L2Y4oEyAZ4VvLxAwTRA3N.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "Recently fired and facing eviction, a new dad has his life turned upside down when he meets a wealthy couple who offer a path to financial security... but at a price.",
    "release_date": "2013-03-08"
  },
  {
    "title": "Need for Speed",
    "vote_average": 6.402,
    "vote_count": 4128,
    "poster_path": "/z42kyMizgDKetejusZgucSQsQ4l.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "The film revolves around a local street-racer who partners with a rich and arrogant business associate, only to find himself framed by his colleague and sent to prison. After he gets out, he joins a New York-to-Los Angeles race to get revenge. But when the ex-partner learns of the scheme, he puts a massive bounty on the racer's head, forcing him to run a cross-country gauntlet of illegal racers in all manner of supercharged vehicles.",
    "release_date": "2014-03-12"
  },
  {
    "title": "Butterfly on a Wheel",
    "vote_average": 6.402,
    "vote_count": 483,
    "poster_path": "/qcjjYcMaaSKD2C8xn0hy6o6yj2L.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A sociopathic kidnapper methodically pushes a desperate pair of parents to their absolute breaking point.",
    "release_date": "2007-07-27"
  },
  {
    "title": "District 13: Ultimatum",
    "vote_average": 6.401,
    "vote_count": 1077,
    "poster_path": "/8okAUSzfWiudSYMXLJYBnlcILcz.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Damien and Leito return to District 13 on a mission to bring peace to the troubled sector that is controlled by five different gang bosses, before the city’s secret services take drastic measures to solve the problem.",
    "release_date": "2009-02-18"
  },
  {
    "title": "The A-Team",
    "vote_average": 6.4,
    "vote_count": 4377,
    "poster_path": "/k3mKy2zYfzqGg9o5JeDyzSEPPHO.jpg",
    "genre_ids": [
      53,
      28,
      12,
      35,
      80
    ],
    "overview": "A group of Iraq War veterans goes on the run from U.S. military forces while they try to clear their names after being framed for a crime they didn't commit. Along the way, Col. Hannibal Smith, Capt. H.M. ‘Howling Mad’ Murdock , Sgt. Bosco ‘B.A.’ Baracus, and Lt. Templeton ‘Faceman’ Peck help out various people they encounter.",
    "release_date": "2010-06-09"
  },
  {
    "title": "Showdown in Little Tokyo",
    "vote_average": 6.398,
    "vote_count": 428,
    "poster_path": "/dqWBvqgaaeTJF9iCj3BYiJAwm7M.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "An American with a Japanese upbringing, Chris Kenner is a police officer assigned to the Little Tokyo section of Los Angeles. Kenner is partnered with Johnny Murata, a Japanese-American who isn't in touch with his roots. Despite their differences, both men excel at martial arts, and utilize their formidable skills when they go up against Yoshida, a vicious yakuza drug dealer with ties to Kenner's past.",
    "release_date": "1991-08-23"
  },
  {
    "title": "Solace",
    "vote_average": 6.396,
    "vote_count": 2103,
    "poster_path": "/pbcXpZgem8kgr90RwIUNAbC2ite.jpg",
    "genre_ids": [
      53,
      80,
      9648
    ],
    "overview": "A psychic doctor, John Clancy, works with an FBI special agent in search of a serial killer.",
    "release_date": "2015-09-03"
  },
  {
    "title": "Kick-Ass 2",
    "vote_average": 6.394,
    "vote_count": 5870,
    "poster_path": "/1go2A3gdQjaMuHWquybgoJlQRcX.jpg",
    "genre_ids": [
      28,
      12,
      80
    ],
    "overview": "After Kick-Ass’ insane bravery inspires a new wave of self-made masked crusaders, he joins a patrol led by the Colonel Stars and Stripes. When these amateur superheroes are hunted down by Red Mist — reborn as The Mother Fucker — only the blade-wielding Hit-Girl can prevent their annihilation.",
    "release_date": "2013-07-17"
  },
  {
    "title": "The General's Daughter",
    "vote_average": 6.393,
    "vote_count": 848,
    "poster_path": "/yGQ26eQUPaU2cWpZsdn2RgSOj0D.jpg",
    "genre_ids": [
      53,
      9648,
      80
    ],
    "overview": "When the body of Army Capt. Elisabeth Campbell is found on a Georgia military base, two investigators, Warrant Officers Paul Brenner and Sara Sunhill, are ordered to solve her murder. What they uncover is anything but clear-cut. Unseemly details emerge about Campbell's life, leading to allegations of a possible military coverup of her death and the involvement of her father, Lt. Gen. Joseph Campbell.",
    "release_date": "1999-06-18"
  },
  {
    "title": "The Many Saints of Newark",
    "vote_average": 6.393,
    "vote_count": 591,
    "poster_path": "/1UkbPQspPbq1FPbFP4VV1ELCfSN.jpg",
    "genre_ids": [
      80
    ],
    "overview": "Young Anthony Soprano is growing up in one of the most tumultuous eras in Newark, N.J., history, becoming a man just as rival gangsters start to rise up and challenge the all-powerful DiMeo crime family. Caught up in the changing times is the uncle he idolizes, Dickie Moltisanti, whose influence over his nephew will help shape the impressionable teenager into the all-powerful mob boss, Tony Soprano.",
    "release_date": "2021-09-22"
  },
  {
    "title": "Secret in Their Eyes",
    "vote_average": 6.391,
    "vote_count": 1279,
    "poster_path": "/gJl4iTxQlazkPCplGmSLGBUwqg9.jpg",
    "genre_ids": [
      53,
      9648,
      18,
      80
    ],
    "overview": "A tight-knit team of FBI investigators, along with their District Attorney supervisor, is suddenly torn apart when they discover that one of their own teenage daughters has been brutally murdered.",
    "release_date": "2015-10-14"
  },
  {
    "title": "Defendor",
    "vote_average": 6.39,
    "vote_count": 515,
    "poster_path": "/luptj2pJWp8qshIVTQWLVlU51bU.jpg",
    "genre_ids": [
      18,
      28,
      35,
      80
    ],
    "overview": "A crooked cop, a mob boss and the young girl they abuse are the denizens of a city's criminal underworld. It's a world that ordinary Arthur Poppington doesn't understand and doesn't belong in, but is committed to fighting when he changes into a vigilante super-hero of his own making, Defendor. With no power other than courage Defendor takes to the streets to protect the city's innocents.",
    "release_date": "2009-09-12"
  },
  {
    "title": "Saw III",
    "vote_average": 6.39,
    "vote_count": 4230,
    "poster_path": "/9pWlgGYoPb0QPOsQTjfDmwMdBc6.jpg",
    "genre_ids": [
      27,
      53,
      80
    ],
    "overview": "Jigsaw has disappeared. Along with his new apprentice Amanda, the puppet-master behind the cruel, intricate games that have terrified a community and baffled police has once again eluded capture and vanished. While city detective scrambles to locate him, Doctor Lynn Denlon and Jeff Reinhart are unaware that they are about to become the latest pawns on his vicious chessboard.",
    "release_date": "2006-10-26"
  },
  {
    "title": "Below Zero",
    "vote_average": 6.389,
    "vote_count": 855,
    "poster_path": "/oYEORVxp2ZfknTQYhEsNkv2HYss.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "When a prisoner transfer van is attacked, the cop in charge must fight those inside and outside while dealing with a silent foe: the icy temperatures.",
    "release_date": "2021-01-29"
  },
  {
    "title": "Devil in a Blue Dress",
    "vote_average": 6.4,
    "vote_count": 349,
    "poster_path": "/5lcJhwKGavLbPva17QkTBhLfqEk.jpg",
    "genre_ids": [
      53,
      80,
      18,
      9648
    ],
    "overview": "In late 1940s Los Angeles, Easy Rawlins is an unemployed black World War II veteran with few job prospects. At a bar, Easy meets DeWitt Albright, a mysterious white man looking for someone to investigate the disappearance of a missing white woman named Daphne Monet, who he suspects is hiding out in one of the city's black jazz clubs. Strapped for money and facing house payments, Easy takes the job, but soon finds himself in over his head.",
    "release_date": "1995-09-15"
  },
  {
    "title": "Pride and Glory",
    "vote_average": 6.386,
    "vote_count": 821,
    "poster_path": "/8VZ1ABbtXqwPcc06yXbf3gj3anG.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "A saga centered on a multi-generational family of New York City Police officers. The family's moral codes are tested when Ray Tierney, investigates a case that reveals an incendiary police corruption scandal involving his own brother-in-law. For Ray, the truth is revelatory, a Pandora's Box that threatens to upend not only the Tierney legacy but the entire NYPD.",
    "release_date": "2008-09-09"
  },
  {
    "title": "Vantage Point",
    "vote_average": 6.386,
    "vote_count": 1910,
    "poster_path": "/4mSh7NZiW36rUbpIgcKeGVcbSSx.jpg",
    "genre_ids": [
      18,
      28,
      53,
      80
    ],
    "overview": "The attempted assassination of the American president is told and re-told from several different perspectives.",
    "release_date": "2008-02-01"
  },
  {
    "title": "Clean",
    "vote_average": 6.385,
    "vote_count": 310,
    "poster_path": "/kRpKJstAW7DsoPAEBW2Kk1uD9Q6.jpg",
    "genre_ids": [
      80
    ],
    "overview": "Tormented by a past life, garbage man Clean attempts a life of quiet redemption. But when his good intentions mark him a target of a local crime boss, Clean is forced to reconcile with the violence of his past.",
    "release_date": "2022-01-28"
  },
  {
    "title": "No Sudden Move",
    "vote_average": 6.385,
    "vote_count": 615,
    "poster_path": "/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "A group of criminals are brought together under mysterious circumstances and have to work together to uncover what's really going on when their simple job goes completely sideways.",
    "release_date": "2021-06-24"
  },
  {
    "title": "City of Lies",
    "vote_average": 6.384,
    "vote_count": 534,
    "poster_path": "/fEYM0T1HEMxkYtxu6Wsir4vu8M0.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "overview": "Los Angeles Police Department detective Russell Poole has spent years trying to solve his biggest case -- the murders of The Notorious B.I.G. and Tupac Shakur -- but after two decades, the investigation remains open. Jack Jackson, a reporter desperate to save his reputation and career, is determined to find out why. In search of the truth, the two team up and unravel a growing web of institutional corruption and lies.",
    "release_date": "2018-09-06"
  },
  {
    "title": "Under the Silver Lake",
    "vote_average": 6.384,
    "vote_count": 1262,
    "poster_path": "/cJ9aKlEgTLYtpYjNqin06YqJRUl.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "Young and disenchanted Sam meets a mysterious and beautiful woman who's swimming in his building's pool one night. When she suddenly vanishes the next morning, Sam embarks on a surreal quest across Los Angeles to decode the secret behind her disappearance, leading him into the murkiest depths of mystery, scandal and conspiracy.",
    "release_date": "2018-06-21"
  },
  {
    "title": "Ocean's Eleven",
    "vote_average": 6.382,
    "vote_count": 313,
    "poster_path": "/A4R6u7SidBPVXMVzGSysCiRGTRz.jpg",
    "genre_ids": [
      80,
      35,
      10402
    ],
    "overview": "Danny Ocean and his gang attempt to rob the five biggest casinos in Las Vegas in one night.",
    "release_date": "1960-08-10"
  },
  {
    "title": "Weekend at Bernie's",
    "vote_average": 6.381,
    "vote_count": 940,
    "poster_path": "/ym09EHiQYtwYnLqTv38KMjwwabc.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Two friends are invited for a weekend to a luxury island with their boss. The boss gets killed and nobody seems to notice, except for the two friends. In order not to become suspects of murder they treat the body as a puppet and make people believe he's still alive. The killer wants to do his job so when he is informed that the stiff is still alive he's got to shoot him again, and again, and again.",
    "release_date": "1989-07-05"
  },
  {
    "title": "Class of 1984",
    "vote_average": 6.38,
    "vote_count": 313,
    "poster_path": "/zaPeoSMiWM23g2M8qVMfNJdEeQa.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "Andy is a new teacher at an inner city high school that is unlike any he has seen before. There are metal detectors at the front door and the place is basically run by a tough kid named Peter Stegman. Soon, Andy and Stegman become enemies and Stegman will stop at nothing to protect his turf and drug dealing business.",
    "release_date": "1982-08-20"
  },
  {
    "title": "Taking Lives",
    "vote_average": 6.379,
    "vote_count": 1492,
    "poster_path": "/zeFGOS1kj0CxuZjGhtK3WlMCYsa.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "Recruited to assist Montreal police in their desperate search for a serial killer who assumes the identities of his victims, FBI profiler Illeana Scott knows it's only a matter of time before the killer strikes again. Her most promising lead is a museum employee who might be the killer's only eyewitness.",
    "release_date": "2004-03-19"
  },
  {
    "title": "TransSiberian",
    "vote_average": 6.379,
    "vote_count": 660,
    "poster_path": "/dhTOda5CLp9tEdDzQZiqBTdv5lR.jpg",
    "genre_ids": [
      53,
      80,
      9648
    ],
    "overview": "A TransSiberian train journey from China to Moscow becomes a thrilling chase of deception and murder when an American couple encounters a mysterious pair of fellow travelers.",
    "release_date": "2008-01-18"
  },
  {
    "title": "Son of a Gun",
    "vote_average": 6.378,
    "vote_count": 717,
    "poster_path": "/yRLVyhQfkW2hn15e8NIqarswLAr.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "Locked up for a minor crime, 19 year old JR quickly learns the harsh realities of prison life. Protection, if you can get it, is paramount. JR soon finds himself under the watchful eye of Australia's most notorious criminal, Brendan Lynch, but protection comes at a price.",
    "release_date": "2014-10-16"
  },
  {
    "title": "Cellular",
    "vote_average": 6.378,
    "vote_count": 1786,
    "poster_path": "/AhD3qVfVmxz5CXDxctXwK5nmrOp.jpg",
    "genre_ids": [
      28,
      53,
      18,
      80
    ],
    "overview": "A young man receives an emergency phone call on his cell phone from an older woman. She claims to have been kidnapped – and the kidnappers have targeted her husband and child next.",
    "release_date": "2004-09-06"
  },
  {
    "title": "Nighthawks",
    "vote_average": 6.376,
    "vote_count": 383,
    "poster_path": "/oqMl9RrdYerO1PYN6InmF91dahc.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "When one of Europe's most lethal terrorists shows up in New York, an elite undercover cop is assigned to take him down by any means necessary.",
    "release_date": "1981-03-17"
  },
  {
    "title": "Bugsy",
    "vote_average": 6.374,
    "vote_count": 352,
    "poster_path": "/qD2fidSLPvRqmd6bsC4HK29BapB.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "New York gangster Ben 'Bugsy' Siegel takes a brief business trip to Los Angeles. A sharp-dressing womanizer with a foul temper, Siegel doesn't hesitate to kill or maim anyone crossing him. In L.A. the life, the movies, and most of all strong-willed Virginia Hill detain him while his family wait back home. Then a trip to a run-down gambling joint at a spot in the desert known as Las Vegas gives him his big idea.",
    "release_date": "1991-12-10"
  },
  {
    "title": "Revolver",
    "vote_average": 6.371,
    "vote_count": 1265,
    "poster_path": "/cXJYFEIGNxiNTCekP1A68ICzJen.jpg",
    "genre_ids": [
      18,
      53,
      80,
      9648
    ],
    "overview": "Hotshot gambler Jake Green is long on bravado and seriously short of common sense. Rarely is he allowed in any casino because he's a bona fide winner and, in fact, has taken so much money over the years that he's the sole client of his accountant elder brother, Billy. Invited to a private game, Jake is in fear of losing his life.",
    "release_date": "2005-09-11"
  },
  {
    "title": "Sin City: A Dame to Kill For",
    "vote_average": 6.367,
    "vote_count": 3604,
    "poster_path": "/90LRjhJ5N4zavCB81L5d4TYstRP.jpg",
    "genre_ids": [
      80,
      28,
      53
    ],
    "overview": "Some of Sin City's most hard-boiled citizens cross paths with a few of its more reviled inhabitants.",
    "release_date": "2014-08-20"
  },
  {
    "title": "Gunpowder Milkshake",
    "vote_average": 6.362,
    "vote_count": 895,
    "poster_path": "/56ofGPMOZCwlTjTao5fB7vnGOoj.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "To protect an 8-year-old girl, a dangerous assassin reunites with her mother and her lethal associates to take down a ruthless crime syndicate and its army of henchmen.",
    "release_date": "2021-07-14"
  },
  {
    "title": "Gangster Squad",
    "vote_average": 6.36,
    "vote_count": 3848,
    "poster_path": "/1eW9kFSuTQfyMvZKtxlnwKRBvI.jpg",
    "genre_ids": [
      80,
      18,
      28,
      53
    ],
    "overview": "Los Angeles, 1949. Ruthless, Brooklyn-born mob king Mickey Cohen runs the show in this town, reaping the ill-gotten gains from the drugs, the guns, the prostitutes and — if he has his way — every wire bet placed west of Chicago. And he does it all with the protection of not only his own paid goons, but also the police and the politicians who are under his control. It’s enough to intimidate even the bravest, street-hardened cop… except, perhaps, for the small, secret crew of LAPD outsiders led by Sgt. John O’Mara and Jerry Wooters who come together to try to tear Cohen’s world apart.",
    "release_date": "2013-01-09"
  },
  {
    "title": "The Family",
    "vote_average": 6.359,
    "vote_count": 2778,
    "poster_path": "/3ER4u7T951pMv60hL5bUN6WsAMV.jpg",
    "genre_ids": [
      80,
      35,
      28
    ],
    "overview": "The Manzoni family, a notorious mafia clan, is relocated to Normandy, France under the witness protection program, where fitting in soon becomes challenging as their old habits die hard.",
    "release_date": "2013-09-13"
  },
  {
    "title": "The Perfect Host",
    "vote_average": 6.355,
    "vote_count": 385,
    "poster_path": "/tYqk1u5d3eARg5gV8cF4RZFZKKQ.jpg",
    "genre_ids": [
      35,
      53,
      80
    ],
    "overview": "Warwick Wilson is the consummate host. He carefully prepares for a dinner party, the table impeccably set and the duck perfectly timed for 8:30 p.m. John Taylor is a career criminal. He’s just robbed a bank and needs to get off the streets. He finds himself on Warwick’s doorstep posing as a friend of a friend, new to Los Angeles, who’s been mugged and lost his luggage.",
    "release_date": "2010-07-01"
  },
  {
    "title": "The Jackal",
    "vote_average": 6.354,
    "vote_count": 1733,
    "poster_path": "/wkLF73oenC1n1DDKKU7oyLKVcMa.jpg",
    "genre_ids": [
      28,
      53,
      12,
      80
    ],
    "overview": "Hired by a powerful member of the Russian mafia to avenge an FBI sting that left his brother dead, a psychopathic hitman known only as The Jackal proves an elusive target for the people charged with the task of bringing him down: a deputy FBI director, a Russian MVK Major,  and a jailed IRA terrorist who can recognize him.",
    "release_date": "1997-11-14"
  },
  {
    "title": "High Crimes",
    "vote_average": 6.351,
    "vote_count": 734,
    "poster_path": "/9sj9rUr7Vu5IfOQHnYKnJuVEw0B.jpg",
    "genre_ids": [
      18,
      9648,
      53,
      80
    ],
    "overview": "A female attorney learns that her husband is really a marine officer awol for fifteen years and accused of murdering fifteen civilians in El Salvador. Believing her husband when he tells her that he's being framed as part of a U.S. Military cover-up, the attorney defends him in a military court.",
    "release_date": "2002-04-05"
  },
  {
    "title": "Turner & Hooch",
    "vote_average": 6.351,
    "vote_count": 1200,
    "poster_path": "/g3LC4mc17fQIFnPsMi81zzKC5gF.jpg",
    "genre_ids": [
      28,
      35,
      53,
      80,
      10751
    ],
    "overview": "Scott Turner has 3 days left in the local police department before he moves to a bigger city to get some 'real' cases—not just misdemeanors. When Amos Reed is murdered, Scott sets himself on the case, but the closest thing to a witness to the murder is Reed's dog, Hooch, which Scott has to take care of—to avoid Hooch being 'put to sleep'.",
    "release_date": "1989-07-28"
  },
  {
    "title": "OtherLife",
    "vote_average": 6.35,
    "vote_count": 377,
    "poster_path": "/stSDsKsb4fS6NPzuHwfAWD2jim8.jpg",
    "genre_ids": [
      878,
      80,
      9648
    ],
    "overview": "Ren Amari is the driven inventor of a revolutionary new drug. OtherLife expands the brain's sense of time and creates virtual reality directly in the user's mind. With OtherLife, mere seconds in real life feel like hours or days of exciting adventures. As Ren and her colleagues race around the clock to launch OtherLife, the government muscles in to use the drugs as a radical solution to prison overcrowding. They will create virtual cells where criminals serve long sentences in just minutes of real time. When Ren resists, she finds herself an unwilling guinea pig trapped in a prison cell in her mind. She must escape before she descends into madness, and then regain control of OtherLife before others suffer the same fate.",
    "release_date": "2017-06-16"
  },
  {
    "title": "Savages",
    "vote_average": 6.349,
    "vote_count": 2043,
    "poster_path": "/a5h5FvryxiALwfv3FzgUKxJHHPG.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Pot growers Ben and Chon face off against the Mexican drug cartel who kidnapped their shared girlfriend.",
    "release_date": "2012-07-06"
  },
  {
    "title": "The Taking of Pelham 1 2 3",
    "vote_average": 6.3,
    "vote_count": 2937,
    "poster_path": "/baRXNiLDOpz3rH3VyjhayhgkWll.jpg",
    "genre_ids": [
      80,
      53,
      28
    ],
    "overview": "Armed men hijack a New York City subway train, holding the passengers hostage in return for a ransom, and turning an ordinary day's work for dispatcher Walter Garber into a face-off with the mastermind behind the crime.",
    "release_date": "2009-06-10"
  },
  {
    "title": "Millions",
    "vote_average": 6.348,
    "vote_count": 353,
    "poster_path": "/xKbnBopSedOmsKU94OD2vsrtcnf.jpg",
    "genre_ids": [
      35,
      80,
      18,
      10751
    ],
    "overview": "Two boys, still grieving the death of their mother, find themselves the unwitting benefactors of a bag of bank robbery loot in the week before the United Kingdom switches its official currency to the Euro. What's a kid to do?",
    "release_date": "2004-04-29"
  },
  {
    "title": "Prizzi's Honor",
    "vote_average": 6.348,
    "vote_count": 343,
    "poster_path": "/5azGfZXuUFYjYfz6etYOdlyLXwL.jpg",
    "genre_ids": [
      10749,
      35,
      80
    ],
    "overview": "Charley Partanna is a hitman who works for the Prizzis, one of the richest crime families in the US. When he sees Irene Walker, it's love at first sight. But he soon finds that she, too, is a killer for hire. Charley can overlook his suspicions, but he can't turn off his heart. And the couple must remember that even if they love each other, the Prizzis love only money.",
    "release_date": "1985-06-14"
  },
  {
    "title": "Edge of Darkness",
    "vote_average": 6.346,
    "vote_count": 1442,
    "poster_path": "/pvHjp1vEFmp5FquSCPQ2O95tIZJ.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "As a seasoned homicide detective, Thomas Craven has seen the bleakest side of humanity. But nothing prepares him for the toughest investigation of his life: the search for his only daughter Emma's killer. Now, he is on a personal mission to uncover the disturbing secrets surrounding her murder, including corporate corruption, government collusion and Emma's own mysterious life.",
    "release_date": "2010-01-28"
  },
  {
    "title": "Hostage",
    "vote_average": 6.345,
    "vote_count": 1513,
    "poster_path": "/vjhLmtjO2pMQXRgkxcwZoq2Ma8n.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "When a mafia accountant is taken hostage on his beat, a police officer – wracked by guilt from a prior stint as a negotiator – must negotiate the standoff, even as his own family is held captive by the mob.",
    "release_date": "2005-03-10"
  },
  {
    "title": "The Way of the Gun",
    "vote_average": 6.344,
    "vote_count": 392,
    "poster_path": "/wrjMMdgn1a4ChlaBmlzKnb78nr6.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "Two criminal drifters without sympathy get more than they bargained for after kidnapping and holding for ransom the surrogate mother of a powerful and shady man.",
    "release_date": "2000-09-08"
  },
  {
    "title": "Taken 2",
    "vote_average": 6.342,
    "vote_count": 6301,
    "poster_path": "/yzAlcuJhpnxRPjaj7AHBRbNPQCJ.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "In Istanbul, retired CIA operative Bryan Mills and his wife are taken hostage by the father of a kidnapper Mills killed while rescuing his daughter.",
    "release_date": "2012-09-27"
  },
  {
    "title": "The Man Who Knew Too Little",
    "vote_average": 6.341,
    "vote_count": 447,
    "poster_path": "/yVlIZa0u6CTN5LudxGX77Fk46iz.jpg",
    "genre_ids": [
      35,
      53,
      80,
      28
    ],
    "overview": "An American gets a ticket for an audience participation game in London, then gets involved in a case of mistaken identity. As an international plot unravels around him, he thinks it's all part of the act.",
    "release_date": "1997-11-14"
  },
  {
    "title": "Hard Target",
    "vote_average": 6.34,
    "vote_count": 1048,
    "poster_path": "/kufvuQYWdl82sYzmhy2naBLyMui.jpg",
    "genre_ids": [
      28,
      12,
      80,
      53
    ],
    "overview": "When a woman's father goes missing, she enlists a local to aid in her search.  The pair soon discover that her father has died at the hands of a wealthy sportsman who hunts homeless men as a form of recreation.",
    "release_date": "1993-04-27"
  },
  {
    "title": "Along Came a Spider",
    "vote_average": 6.339,
    "vote_count": 1743,
    "poster_path": "/1YtsND7vSNymylnOSzgg3DdVFMB.jpg",
    "genre_ids": [
      80,
      9648,
      53,
      28
    ],
    "overview": "After the harrowing death of his partner, detective and best-selling author Alex Cross has retreated to the peace of retirement. But when a brilliant criminal kidnaps a senator's young daughter, Alex is lured back into action. Teamed with the Secret Service agent assigned to protect the missing girl, Alex follows a serpentine trail of clues that leads him to a stunning discovery - the kidnapper wants more than just ransom.",
    "release_date": "2001-04-06"
  },
  {
    "title": "Bordertown",
    "vote_average": 6.336,
    "vote_count": 302,
    "poster_path": "/c0AR36VzvB5ileCoMfSlV9bFsVn.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "American corporations are using the North American Free Trade Agreement by opening large maquiladoras right across the United States–Mexico border. The maquiladoras hire mostly Mexican women to work long hours for little money in order to produce mass quantity products. Lauren Adrian, an impassioned American news reporter for the Chicago Sentinel wants to be assigned to the Iraq front-lines to cover the war. Instead, her editor George Morgan assigns her to investigate a series of slayings involving young maquiladora factory women in a Mexican bordertown.",
    "release_date": "2007-02-22"
  },
  {
    "title": "The Punisher",
    "vote_average": 6.3,
    "vote_count": 2636,
    "poster_path": "/7rmA1HwYp2GKM85BL0cVwCaosGr.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "When undercover FBI agent Frank Castle's wife and son are slaughtered, he becomes 'the Punisher' -- a ruthless vigilante willing to go to any length to avenge his family.",
    "release_date": "2004-04-15"
  },
  {
    "title": "Killer's Kiss",
    "vote_average": 6.336,
    "vote_count": 499,
    "poster_path": "/rJ5PukBOIgNeMdMSanSy3RY0Lor.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "The film revolves around Davey Gordon, a 29 year old welterweight New York boxer in the end of his career, and his relationship with a dancer and her violent employer.",
    "release_date": "1955-10-01"
  },
  {
    "title": "White Boy Rick",
    "vote_average": 6.331,
    "vote_count": 985,
    "poster_path": "/xjW2wgrC2ey0APDELP6NMD8tAq7.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "The story of a teenager, Richard Wershe Jr., who became an undercover informant for the police during the 1980s and was ultimately arrested for drug-trafficking and sentenced to life in prison.",
    "release_date": "2018-09-14"
  },
  {
    "title": "Hackers",
    "vote_average": 6.329,
    "vote_count": 1184,
    "poster_path": "/r9YuMy9afzIOrumQzIKpKxv711n.jpg",
    "genre_ids": [
      28,
      80,
      53,
      18
    ],
    "overview": "Along with his new friends, a teenager who was arrested by the US Secret Service and banned from using a computer for writing a computer virus discovers a plot by a nefarious hacker, but they must use their computer skills to find the evidence while being pursued by the Secret Service and the evil computer genius behind the virus.",
    "release_date": "1995-09-14"
  },
  {
    "title": "Faster",
    "vote_average": 6.328,
    "vote_count": 1780,
    "poster_path": "/AsUeaXrhw4oscCSjUZ6heh1pVvd.jpg",
    "genre_ids": [
      80,
      18,
      28,
      53
    ],
    "overview": "After 10 years in prison, Driver is now a free man with a single focus - hunting down the people responsible for brutally murdering his brother.",
    "release_date": "2010-11-23"
  },
  {
    "title": "The Little Things",
    "vote_average": 6.327,
    "vote_count": 2249,
    "poster_path": "/tLO1aD1ghdtVMT32z2sRmzgYKYd.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Deputy Sheriff Joe \"Deke\" Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who's terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke's past, uncovering disturbing secrets that could threaten more than his case.",
    "release_date": "2021-01-28"
  },
  {
    "title": "A Walk Among the Tombstones",
    "vote_average": 6.325,
    "vote_count": 2676,
    "poster_path": "/euPgyPsiNFp6gOBB7nUFxvN5ZaY.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "Private investigator Matthew Scudder is hired by a drug kingpin to find out who kidnapped and murdered his wife.",
    "release_date": "2014-09-18"
  },
  {
    "title": "Contraband",
    "vote_average": 6.325,
    "vote_count": 1962,
    "poster_path": "/dNNjyZQ0zVtmPa74nJE63Kn0xEx.jpg",
    "genre_ids": [
      53,
      28,
      18,
      80
    ],
    "overview": "When his brother-in-law runs afoul of a drug lord, family man Chris Farraday turns to a skill he abandoned long ago—smuggling—to repay the debt. But the job goes wrong, and Farraday finds himself wanted by cops, crooks and killers alike.",
    "release_date": "2012-01-12"
  },
  {
    "title": "Out of Time",
    "vote_average": 6.325,
    "vote_count": 1076,
    "poster_path": "/zMExJ6RdJQmRMydvozhEBlOLX1m.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "Matt Lee Whitlock, respected chief of police in small Banyan Key, Florida, must solve a vicious double homicide before he himself falls under suspicion. Matt Lee has to stay a few steps ahead of his own police force and everyone he's trusted in order to find out the truth.",
    "release_date": "2003-10-03"
  },
  {
    "title": "Quantum of Solace",
    "vote_average": 6.321,
    "vote_count": 7452,
    "poster_path": "/e3DXXLJHGqMx9yYpXsql1XNljmM.jpg",
    "genre_ids": [
      12,
      28,
      53,
      80
    ],
    "overview": "Betrayed by Vesper, the woman he loved, 007 fights the urge to make his latest mission personal. Pursuing his determination to uncover the truth, Bond and M interrogate Mr. White, who reveals that the organization that blackmailed Vesper is far more complex and dangerous than anyone had imagined.",
    "release_date": "2008-10-29"
  },
  {
    "title": "Premium Rush",
    "vote_average": 6.321,
    "vote_count": 1991,
    "poster_path": "/gHnGhJmE0LByOd4RS2mOASmUqQu.jpg",
    "genre_ids": [
      80,
      28,
      53
    ],
    "overview": "In Manhattan, a bike messenger picks up an envelope that attracts the interest of a dirty cop, who pursues the cyclist throughout the city.",
    "release_date": "2012-08-24"
  },
  {
    "title": "Chaos",
    "vote_average": 6.319,
    "vote_count": 959,
    "poster_path": "/oOQ3PS8wp5Iezqc5LChOq2S97Jl.jpg",
    "genre_ids": [
      18,
      28,
      80
    ],
    "overview": "In Seattle, detective Quentin Conners is unfairly suspended and his partner Jason York leaves the police force after a tragic shooting on Pearl Street Bridge, when the hostage and the criminal die. During a bank heist with a hostage situation, Conners is assigned in charge of the operation with the rookie Shane Dekker as his partner. The thieves, lead by Lorenz, apparently do not steal a penny from the bank. While chasing the gangsters, the police team disclose that they planted a virus in the system, stealing one billion dollars from the different accounts, using the principle of the Chaos Theory. Further, they find that Lorenz is killing his accomplices.",
    "release_date": "2005-01-17"
  },
  {
    "title": "The Emperor of Paris",
    "vote_average": 6.319,
    "vote_count": 468,
    "poster_path": "/7mZBfj3dFIzQgMVfkDwi9u4JBxI.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "Paris, France, early 19th century. The legendary convict François Vidocq lives in disguise trying to escape from a tragic past that torments him. When, after an unfortunate event, he crosses paths with the police chief, he makes a bold decision that will turn the ruthless mastermind of the Parisian underworld against him.",
    "release_date": "2018-12-19"
  },
  {
    "title": "Transporter 2",
    "vote_average": 6.317,
    "vote_count": 3362,
    "poster_path": "/cdm17vK8PxHfTi7ayZf6WKbOgUO.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Professional driver Frank Martin is living in Miami, where he is temporarily filling in for a friend as the chauffeur for a government narcotics control policymaker and his family. The young boy in the family is targeted for kidnapping, and Frank immediately becomes involved in protecting the child and exposing the kidnappers.",
    "release_date": "2005-08-03"
  },
  {
    "title": "Roman J. Israel, Esq.",
    "vote_average": 6.316,
    "vote_count": 1187,
    "poster_path": "/epTCHVcyLkT8Aqt08Ki3PWC2sUh.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "Hard-nosed liberal lawyer Roman J. Israel has been fighting the good fight forever while others take the credit. When his partner – the firm's frontman – has a heart attack, Israel suddenly takes on that role. He soon discovers some unsettling truths about the firm – truths that conflict with his values of helping the poor and dispossessed – and finds himself in an existential crisis that leads to extreme actions.",
    "release_date": "2017-11-17"
  },
  {
    "title": "Muppets Most Wanted",
    "vote_average": 6.316,
    "vote_count": 765,
    "poster_path": "/o9mGTVnnsqMS3Oh2IloPKPpLiL3.jpg",
    "genre_ids": [
      35,
      12,
      80,
      10751
    ],
    "overview": "While on a grand world tour, The Muppets find themselves wrapped into an European jewel-heist caper headed by a Kermit the Frog look-alike and his dastardly sidekick.",
    "release_date": "2014-03-20"
  },
  {
    "title": "Heist",
    "vote_average": 6.314,
    "vote_count": 499,
    "poster_path": "/5yKomryA4Oak54fPjBS9TXBmYji.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "Joe Moore has a job he loves. He's a thief. His job goes sour when he gets caught on security camera tape. His fence, Bergman, reneges on the money he's owed, and his wife may be betraying him with the fence's young lieutenant. Moore and his partner, Bobby Blane, and their utility man, Pinky Pincus, find themselves broke, betrayed, and blackmailed. Moore is forced to commit his crew to do one last big job.",
    "release_date": "2001-11-09"
  },
  {
    "title": "Repo Men",
    "vote_average": 6.313,
    "vote_count": 1795,
    "poster_path": "/briDKf5nrLzox2zcI6pquKeqWz8.jpg",
    "genre_ids": [
      28,
      878,
      53,
      80
    ],
    "overview": "In the future, medical technology has advanced to the point where people can buy artificial organs to extend their lives. But if they default on payments, an organization known as the Union sends agents to repossess the organs. Remy is one of the best agents in the business, but when he becomes the recipient of an artificial heart, he finds himself in the same dire straits as his many victims.",
    "release_date": "2010-03-18"
  },
  {
    "title": "Ace Ventura: When Nature Calls",
    "vote_average": 6.313,
    "vote_count": 3864,
    "poster_path": "/wcinCf1ov2D6M3P7BBZkzQFOiIb.jpg",
    "genre_ids": [
      80,
      35,
      12
    ],
    "overview": "Summoned from an ashram in Tibet, Ace finds himself on a perilous journey into the jungles of Africa to find Shikaka, the missing sacred animal of the friendly Wachati tribe. He must accomplish this before the wedding of the Wachati's Princess to the prince of the warrior Wachootoos. If Ace fails, the result will be a vicious tribal war.",
    "release_date": "1995-11-10"
  },
  {
    "title": "Last Man Standing",
    "vote_average": 6.309,
    "vote_count": 803,
    "poster_path": "/nEMNuHELBxPAglynxuc9ZvKOlpv.jpg",
    "genre_ids": [
      80,
      28,
      37,
      18
    ],
    "overview": "John Smith is a mysterious stranger who is drawn into a vicious war between two Prohibition-era gangs. In a dangerous game, he switches allegiances from one to another, offering his services to the highest bidder. As the death toll mounts, Smith takes the law into his own hands in a deadly race to stay alive.",
    "release_date": "1996-09-20"
  },
  {
    "title": "Midnight in the Garden of Good and Evil",
    "vote_average": 6.308,
    "vote_count": 522,
    "poster_path": "/wjOZQfffXsNCV18vrXHLm8XUbPn.jpg",
    "genre_ids": [
      9648,
      80,
      18
    ],
    "overview": "A visiting city reporter's assignment suddenly revolves around the murder trial of a local millionaire, whom he befriends.",
    "release_date": "1997-11-21"
  },
  {
    "title": "Batman",
    "vote_average": 6.305,
    "vote_count": 798,
    "poster_path": "/zzoPxWHnPa0eyfkMLgwbNvdEcVF.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "The Dynamic Duo faces four super-villains who plan to hold the world for ransom with the help of a secret invention that instantly dehydrates people.",
    "release_date": "1966-07-30"
  },
  {
    "title": "The Other Guys",
    "vote_average": 6.303,
    "vote_count": 3907,
    "poster_path": "/wNEHNqo3MgHmj3BUiPSqqq5czcm.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "Unlike their heroic counterparts on the force, desk-bound NYPD detectives Gamble and Hoitz garner no headlines as they work day to day. When a seemingly minor case turns out to be a big deal, the two cops get the opportunity to finally prove to their comrades that they have the right stuff.",
    "release_date": "2010-08-06"
  },
  {
    "title": "Triple Frontier",
    "vote_average": 6.3,
    "vote_count": 2998,
    "poster_path": "/aBw8zYuAljVM1FeK5bZKITPH8ZD.jpg",
    "genre_ids": [
      28,
      53,
      80,
      12
    ],
    "overview": "Struggling to make ends meet, former special ops soldiers reunite for a high-stakes heist: stealing $75 million from a South American drug lord.",
    "release_date": "2019-03-06"
  },
  {
    "title": "The Interpreter",
    "vote_average": 6.298,
    "vote_count": 1346,
    "poster_path": "/wTidq3J9fh8sEOAlD8WZFHVLSuB.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "After Silvia Broome, an interpreter at United Nations headquarters, overhears plans of an assassination, an American Secret Service agent is sent to investigate.",
    "release_date": "2005-04-08"
  },
  {
    "title": "The Air I Breathe",
    "vote_average": 6.296,
    "vote_count": 334,
    "poster_path": "/hx89b5sinoXmkMNyK1PUgwjWQX4.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "A drama based on an ancient Chinese proverb that breaks life down into four emotional cornerstones: happiness, pleasure, sorrow and love. A businessman bets his life on a horse race; a gangster sees the future; a pop star falls prey to a crime boss; a doctor must save the love of his life.",
    "release_date": "2007-02-07"
  },
  {
    "title": "Baby's Day Out",
    "vote_average": 6.293,
    "vote_count": 1238,
    "poster_path": "/21U2jwl36hoTHsXB3fDuIQkcchu.jpg",
    "genre_ids": [
      10751,
      35,
      12,
      80,
      18
    ],
    "overview": "Baby Bink couldn't ask for more: he has adoring (if somewhat sickly-sweet) parents, lives in a huge mansion, and he's just about to appear in the social pages of the paper. Unfortunately, not everyone in the world is as nice as Baby Bink's parents—especially the three enterprising kidnappers who pretend to be photographers from the newspaper. Successfully kidnapping Baby Bink, they have a harder time keeping hold of the rascal, who not only keeps one step ahead of them, but seems to be more than a little bit smarter than the three bumbling criminals.",
    "release_date": "1994-07-01"
  },
  {
    "title": "I Came By",
    "vote_average": 6.292,
    "vote_count": 600,
    "poster_path": "/pFB9jZDl52jBNbMPVSlISXD1ggS.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "A rebellious young graffiti artist, who targets the homes of the wealthy elite, discovers a shocking secret that leads him on a journey endangering himself and those closest to him.",
    "release_date": "2022-08-19"
  },
  {
    "title": "I Spit on Your Grave 2",
    "vote_average": 6.292,
    "vote_count": 1181,
    "poster_path": "/cy3zp7PA4JFq8bT0WwSi8uDlrbD.jpg",
    "genre_ids": [
      53,
      27,
      80
    ],
    "overview": "Naturally beautiful, Katie has just settled into New York where she, like many other young women, is trying to make it as a model. But what starts out as an innocent and simple photo shoot soon turns into something disturbingly unthinkable! Raped, tortured and kidnapped to a foreign country, Jessica is buried alive and left to die. Against all odds, she manages to escape. Severely injured, she will have to tap into the darkest places of the human psyche to not only survive, but to exact her revenge…",
    "release_date": "2013-08-25"
  },
  {
    "title": "The Siege",
    "vote_average": 6.287,
    "vote_count": 1219,
    "poster_path": "/6aSo9FepBA6zNEHgA3bgqt3UaOk.jpg",
    "genre_ids": [
      18,
      28,
      53,
      80
    ],
    "overview": "The secret US abduction of a suspected terrorist from his Middle East homeland leads to a wave of terrorist attacks in New York.  An FBI senior agent and his team attempt to locate and decommission the enemy cells, but must also deal with an Army General gone rogue and a female CIA agent of uncertain loyalties.",
    "release_date": "1998-11-06"
  },
  {
    "title": "Brooklyn's Finest",
    "vote_average": 6.286,
    "vote_count": 851,
    "poster_path": "/9ZyJJpMsc3bF8gduDaxo0zo1gwK.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Enforcing the law within the notoriously rough Brownsville section of the city and especially within the Van Dyke housing projects is the NYPD's sixty-fifth precinct. Three police officers struggle with the sometimes fine line between right and wrong.",
    "release_date": "2010-03-04"
  },
  {
    "title": "Confidence",
    "vote_average": 6.286,
    "vote_count": 401,
    "poster_path": "/yJzmAtY9DmhhjJwFnW0Zjlvz6yg.jpg",
    "genre_ids": [
      28,
      35,
      53,
      80,
      9648
    ],
    "overview": "What Jake Vig doesn't know just might get him killed. A sharp and polished grifter, Jake has just swindled thousands of dollars from the unsuspecting Lionel Dolby with the help of his crew. It becomes clear that Lionel wasn't just any mark, he was an accountant for eccentric crime boss Winston King. Jake and his crew will have to stay one step ahead of both the criminals and the cops to finally settle their debt.",
    "release_date": "2003-04-25"
  },
  {
    "title": "Half Baked",
    "vote_average": 6.286,
    "vote_count": 511,
    "poster_path": "/14TmEac4bquNaEld9t0uIliYoKE.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Three lovable party buds try to bail their friend out of jail. But just when the guys have mastered a plan, everything comes dangerously close to going up in smoke.",
    "release_date": "1998-01-16"
  },
  {
    "title": "The Rover",
    "vote_average": 6.285,
    "vote_count": 887,
    "poster_path": "/734OOkr69mt8lyPk8iw3TwgQ90R.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "10 years after a global economic collapse, a hardened loner pursues the men who stole his car through the lawless wasteland of the Australian outback, aided by the brother of one of the thieves.",
    "release_date": "2014-06-04"
  },
  {
    "title": "Sightseers",
    "vote_average": 6.285,
    "vote_count": 468,
    "poster_path": "/l52cpdZcVkEVTaLqga6xxSQoaKX.jpg",
    "genre_ids": [
      35,
      80,
      10749
    ],
    "overview": "Chris wants to show girlfriend Tina his world, but events soon conspire against the couple and their dream caravan holiday takes a very wrong turn.",
    "release_date": "2012-11-30"
  },
  {
    "title": "Kajillionaire",
    "vote_average": 6.282,
    "vote_count": 408,
    "poster_path": "/fkqJJDb4u9rEyJu8Jm8H1P2mux4.jpg",
    "genre_ids": [
      80,
      18,
      35
    ],
    "overview": "Two con artists have spent 26 years training their only daughter to swindle, scam and steal at every turn. During a desperate and hastily conceived heist, they charm a stranger into joining them, only to have their entire world turned upside down.",
    "release_date": "2020-09-25"
  },
  {
    "title": "The Raven",
    "vote_average": 6.281,
    "vote_count": 1262,
    "poster_path": "/boE0JFhZRpWLLrKOQE6bCBZGerP.jpg",
    "genre_ids": [
      80,
      53,
      9648,
      27
    ],
    "overview": "A fictionalized account of the last days of Edgar Allan Poe's life, in which the poet is in pursuit of a serial killer whose murders mirror those in the writer's stories.",
    "release_date": "2012-03-09"
  },
  {
    "title": "Austin Powers: The Spy Who Shagged Me",
    "vote_average": 6.281,
    "vote_count": 3102,
    "poster_path": "/f2ohIBEbc3eERyU5pgSknm8DqUj.jpg",
    "genre_ids": [
      12,
      35,
      80,
      878
    ],
    "overview": "When diabolical genius Dr. Evil travels back in time to steal superspy Austin Powers's ‘mojo,’ Austin must return to the swingin' '60s himself - with the help of American agent, Felicity Shagwell - to stop the dastardly plan. Once there, Austin faces off against Dr. Evil's army of minions to try to save the world in his own unbelievably groovy way.",
    "release_date": "1999-06-08"
  },
  {
    "title": "Aftermath",
    "vote_average": 6.28,
    "vote_count": 551,
    "poster_path": "/fzEb71u0HOucjdjcVoOqfCqOM0T.jpg",
    "genre_ids": [
      27,
      80,
      18,
      53
    ],
    "overview": "Desperate to save their marriage, a young couple takes a deal to move into their dream home, but disturbing events reveal the house's troubled history.",
    "release_date": "2021-08-04"
  },
  {
    "title": "Very Bad Things",
    "vote_average": 6.28,
    "vote_count": 568,
    "poster_path": "/rYmyRxF5e9fBdgcQScKu0CUtMy5.jpg",
    "genre_ids": [
      35,
      80,
      53
    ],
    "overview": "Kyle Fisher has one last night to celebrate life as a single man before marrying Laura, so he sets out to Vegas with four of his best buddies. But a drug and alcohol filled night on the town with a stripper who goes all the way, turns into a cold night in the desert with shovels when the stripper goes all the way into a body bag after dying in their bathroom. And that's just the first of the bodies to pile up before Kyle can walk down the aisle...",
    "release_date": "1998-09-11"
  },
  {
    "title": "Red Corner",
    "vote_average": 6.28,
    "vote_count": 330,
    "poster_path": "/xsIbKOO1CacqTagyJmEGGf4kOnn.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "An American attorney on business in China, ends up wrongfully on trial for murder and his only key to innocence is a female defense lawyer from the country.",
    "release_date": "1997-10-30"
  },
  {
    "title": "Loving Pablo",
    "vote_average": 6.277,
    "vote_count": 957,
    "poster_path": "/aV3kKzTCycGfZc5Lh29Tk6avKPL.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "The film chronicles the rise and fall of the world's most feared drug lord Pablo Escobar and his volatile love affair with Colombia's most famous journalist Virginia Vallejo throughout a reign of terror that tore a country apart.",
    "release_date": "2017-10-12"
  },
  {
    "title": "Universal Soldier",
    "vote_average": 6.275,
    "vote_count": 1553,
    "poster_path": "/fp0mWrHl1SW9PhP8QcsgYPoVYFc.jpg",
    "genre_ids": [
      53,
      28,
      878,
      80
    ],
    "overview": "An American soldier who had been killed during the Vietnam War is revived 25 years later by the military as a semi-android, UniSols, a high-tech soldier of the future. After the failure of the initiative to erase all the soldier's memories, he begins to experience flashbacks that are forcing him to recall his past.",
    "release_date": "1992-07-10"
  },
  {
    "title": "From Paris with Love",
    "vote_average": 6.274,
    "vote_count": 1869,
    "poster_path": "/poVoLKLxUqsTLSntA40Po2F78dZ.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "James Reese has a good job as an ambassador's aid in France, but his real passion is a side gig—working in a minor role in the CIA. He would love to be a full-fledged agent and can't believe his luck when he lands an assignment with Charlie Wax. Trigger-happy Charlie soon has James crying for his desk job, but when he learns that the same guys they're trying to catch are after him, James realises that Charlie may be his only hope of survival.",
    "release_date": "2010-02-04"
  },
  {
    "title": "Jawbreaker",
    "vote_average": 6.3,
    "vote_count": 494,
    "poster_path": "/gwjJPAraQy5fDd3NJvK677uItU4.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "When an exclusive clique of teenage socialites accidentally murder their best friend on the morning of her birthday, the three girls responsible conspire to hide the truth.",
    "release_date": "1999-01-30"
  },
  {
    "title": "The Matador",
    "vote_average": 6.3,
    "vote_count": 427,
    "poster_path": "/oJnlAGmrhsg4QrlVKGgP91J6WPu.jpg",
    "genre_ids": [
      28,
      35,
      80,
      18,
      53
    ],
    "overview": "The life of Danny Wright, a salesman forever on the road, veers into dangerous and surreal territory when he wanders into a Mexican bar and meets a mysterious stranger, Julian, who's very likely a hit man. Their meeting sets off a chain of events that will change their lives forever, as Wright is suddenly thrust into a far-from-mundane existence that he takes to surprisingly well … once he gets acclimated to it.",
    "release_date": "2005-05-12"
  },
  {
    "title": "Security",
    "vote_average": 6.3,
    "vote_count": 774,
    "poster_path": "/9FN5n8wGYrfSJaKGF9uObdKimIh.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "An ex-special services veteran, down on his luck and desperate for work, takes a job as a security guard at a run-down mall in a rough area of town. On his first night on the job, he opens the door to a distraught and desperate young girl who has fled the hijacking of a Police motorcade that was transporting her to testify as a witness in a trial. Hot on her heels is the psychopathic hijacker and his team of henchmen, who will stop at nothing to extract and eliminate the witness.",
    "release_date": "2017-03-04"
  },
  {
    "title": "The Losers",
    "vote_average": 6.273,
    "vote_count": 1706,
    "poster_path": "/e5oD3fuQpjZ8Po6WNW0VkUJmW52.jpg",
    "genre_ids": [
      28,
      12,
      80,
      9648,
      53
    ],
    "overview": "On a mission deep in the Bolivian jungle, a team of elite commandos finds itself on the receiving end of a lethal betrayal. Now presumed dead, the men join forces with a mysterious operative named Aisha to hunt down their enemy and even the score.",
    "release_date": "2010-04-23"
  },
  {
    "title": "Beckett",
    "vote_average": 6.269,
    "vote_count": 610,
    "poster_path": "/fBJducGBcmrcIOQdhm4BUBNDiMu.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "overview": "An American tourist in Greece finds himself on the run after a tragic accident plunges him into a political conspiracy that makes him a target for assassination.",
    "release_date": "2021-08-04"
  },
  {
    "title": "Child 44",
    "vote_average": 6.268,
    "vote_count": 1567,
    "poster_path": "/qqGhMt31HVUN3WnH0L2r0OWq38E.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "Set in Stalin-era Soviet Union, a disgraced MGB agent is dispatched to investigate a series of child murders -- a case that begins to connect with the very top of party leadership.",
    "release_date": "2015-03-15"
  },
  {
    "title": "The Dead Pool",
    "vote_average": 6.268,
    "vote_count": 767,
    "poster_path": "/mqwGpW0Ptrvz1GmfCnLAOA4cQ8g.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Dirty Harry Callahan returns for his final film adventure. Together with his partner Al Quan, he must investigate the systematic murder of actors and musicians. By the time Harry learns that the murders are a part of a sick game to predict the deaths of celebrities before they happen, it may be too late...",
    "release_date": "1988-07-13"
  },
  {
    "title": "True Story",
    "vote_average": 6.27,
    "vote_count": 1869,
    "poster_path": "/ncP8XQ0bXP0xSpJmMsRt8mUcEXd.jpg",
    "genre_ids": [
      80,
      18,
      36
    ],
    "overview": "A drama centered around the relationship between journalist Michael Finkel and Christian Longo, an FBI Most Wanted List murderer who for years lived outside the U.S. under Finkel's name.",
    "release_date": "2015-04-17"
  },
  {
    "title": "The Frozen Ground",
    "vote_average": 6.262,
    "vote_count": 1365,
    "poster_path": "/hHDj1h3lJvYd9Cervoswz9crhWg.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "An Alaska State Trooper partners with a young woman who escaped the clutches of serial killer Robert Hansen to bring the murderer to justice. Based on actual events.",
    "release_date": "2013-07-11"
  },
  {
    "title": "Disclosure",
    "vote_average": 6.26,
    "vote_count": 1092,
    "poster_path": "/eBWkYsKvOVClb4pdgCuxxB8QaGY.jpg",
    "genre_ids": [
      53,
      18,
      80
    ],
    "overview": "A computer specialist is sued for sexual harassment by a former lover turned boss who initiated the act forcefully, which threatens both his career and his personal life.",
    "release_date": "1994-12-09"
  },
  {
    "title": "Polar",
    "vote_average": 6.259,
    "vote_count": 2054,
    "poster_path": "/qOBEpKVLl8Q9CZScbOcRRVISezV.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "When a retiring assassin realizes that he is the target of a hit, he winds up back in the game going head to head with a gang of younger, ruthless killers.",
    "release_date": "2019-01-25"
  },
  {
    "title": "Bandits",
    "vote_average": 6.257,
    "vote_count": 907,
    "poster_path": "/67AUAkiT4rbgqN7SNlIJn0zWZqU.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "After escaping from prison, Joe and Terry go on a crime spree, robbing banks through Oregon and California in order to finance their scheme for a new life south of the border. Unfortunately, things get more complicated when they meet Kate, who runs into them with her car. She joins the bandits on their cross-country spree, and eventually she steals something, too: their hearts.",
    "release_date": "2001-10-12"
  },
  {
    "title": "Pain & Gain",
    "vote_average": 6.256,
    "vote_count": 4207,
    "poster_path": "/9WqA0Ry9wmTzFvom8mNbcyKZQgP.jpg",
    "genre_ids": [
      28,
      80,
      35
    ],
    "overview": "Daniel Lugo, manager of the Sun Gym in 1990s Miami, decides that there is only one way to achieve his version of the American dream: extortion. To achieve his goal, he recruits musclemen Paul and Adrian as accomplices. After several failed attempts, they abduct rich businessman Victor Kershaw and convince him to sign over all his assets to them. But when Kershaw makes it out alive, authorities are reluctant to believe his story.",
    "release_date": "2013-04-18"
  },
  {
    "title": "Internal Affairs",
    "vote_average": 6.3,
    "vote_count": 351,
    "poster_path": "/A4pH8DiNFEf2AgXkM4zk3ZpblV.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Keen young Raymold Avila joins the Internal Affairs Department of the Los Angeles police. He and partner Amy Wallace are soon looking closely at the activities of cop Dennis Peck whose financial holdings start to suggest something shady. Indeed Peck is involved in any number of dubious or downright criminal activities. He is also devious, a womaniser, and a clever manipulator, and he starts to turn his attention on Avila.",
    "release_date": "1990-01-12"
  },
  {
    "title": "Unknown",
    "vote_average": 6.254,
    "vote_count": 388,
    "poster_path": "/NpXb4mFl6xotP3D44lZlDDGH5H.jpg",
    "genre_ids": [
      53,
      9648,
      12,
      80
    ],
    "overview": "Five men wake up in a locked-down warehouse with no memory of who they are. They are forced to figure out who is good and who is bad to stay alive.",
    "release_date": "2006-11-03"
  },
  {
    "title": "Mercury Rising",
    "vote_average": 6.254,
    "vote_count": 1423,
    "poster_path": "/60AAso6I2TzQCy2SjqtzPni8csA.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "Renegade FBI agent Art Jeffries protects a nine-year-old autistic boy who has cracked the government's new \"unbreakable\" code.",
    "release_date": "1998-04-03"
  },
  {
    "title": "Cassandra's Dream",
    "vote_average": 6.253,
    "vote_count": 726,
    "poster_path": "/9Cu2XA9TSHm4T1n7JBE5DEL60U3.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "The tale of two brothers with serious financial woes. When a third party proposes they turn to crime, things go bad and the two become enemies.",
    "release_date": "2007-06-18"
  },
  {
    "title": "Death Wish II",
    "vote_average": 6.252,
    "vote_count": 413,
    "poster_path": "/1bhSCZAifl229B1vCLCiE9BZp7l.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "Paul Kersey is again a vigilante trying to find five punks who murdered his housekeeper and daughter in Los Angeles.",
    "release_date": "1982-02-20"
  },
  {
    "title": "Free Fire",
    "vote_average": 6.249,
    "vote_count": 1042,
    "poster_path": "/21WsmKivqOE2Vut73z07M8yx84F.jpg",
    "genre_ids": [
      28,
      80,
      9648
    ],
    "overview": "Set in Boston in 1978, a meeting in a deserted warehouse between two gangs turns into a shoot-out and a game of survival.",
    "release_date": "2017-03-31"
  },
  {
    "title": "Live by Night",
    "vote_average": 6.2,
    "vote_count": 1233,
    "poster_path": "/bkd46T4RplawnDjpHoI8mhzTLks.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A group of Boston-bred gangsters set up shop in balmy Florida during the Prohibition era, facing off against the competition and the Ku Klux Klan.",
    "release_date": "2016-12-25"
  },
  {
    "title": "The Replacement Killers",
    "vote_average": 6.249,
    "vote_count": 462,
    "poster_path": "/5JAVd0lYhkB2dsDtt84Qt6grNIn.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Hired assassin John Lee is asked by Chinatown crime boss Terence Wei to murder the young son of policeman Stan Zedkov. Lee has the boy in his sights, but his conscience gets the better of him, and he spares the child's life. Afraid that Wei will take revenge on his family in China, Lee seeks out expert forger Meg Coburn to obtain the passport he needs to get out of the country, but a band of replacement killers is soon on his trail.",
    "release_date": "1998-02-06"
  },
  {
    "title": "The Voices",
    "vote_average": 6.245,
    "vote_count": 1654,
    "poster_path": "/weY5OVSFmxvA3D4lfyhgvugklEh.jpg",
    "genre_ids": [
      35,
      80,
      27,
      14
    ],
    "overview": "A mentally unhinged factory worker must decide whether to listen to his talking cat and become a killer, or follow his dog's advice to keep striving for normalcy.",
    "release_date": "2014-01-19"
  },
  {
    "title": "Hannibal Rising",
    "vote_average": 6.245,
    "vote_count": 2077,
    "poster_path": "/7FTDMQoac0uqJUquZk4KenDzLMZ.jpg",
    "genre_ids": [
      80,
      18,
      53,
      27
    ],
    "overview": "The story of the early, murderous roots of the cannibalistic killer, Hannibal Lecter – from his hard-scrabble Lithuanian childhood, where he witnesses the repulsive lengths to which hungry soldiers will go to satiate themselves, through his sojourn in France, where as a med student he hones his appetite for the kill.",
    "release_date": "2007-02-06"
  },
  {
    "title": "Killing Zoe",
    "vote_average": 6.245,
    "vote_count": 310,
    "poster_path": "/k3UEKMVnkljOlsO5sLmz87YGlaG.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "Zed is an American vault-cracker who travels to Paris to meet up with his old friend Eric. Eric and his gang have planned to raid the only bank in the city which is open on Bastille day. After offering his services, Zed soon finds himself trapped in a situation beyond his control when heroin abuse, poor planning and a call-girl named Zoe all conspire to turn the robbery into a very bloody siege.",
    "release_date": "1993-10-01"
  },
  {
    "title": "To Steal from a Thief",
    "vote_average": 6.243,
    "vote_count": 354,
    "poster_path": "/elEaCDGOymaTePaM7oL41WaT0aC.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "Valencia, Spain. On a rainy morning, six armed men in disguise assault a bank. But what seemed like an easy heist, quickly goes wrong with nothing unfolding as planned, and mistrust quickly builds between the two leaders of the gang.",
    "release_date": "2016-03-03"
  },
  {
    "title": "Goodnight Mommy",
    "vote_average": 6.241,
    "vote_count": 363,
    "poster_path": "/oHhD5jD4S5ElPNNFCDKXJAzMZ5h.jpg",
    "genre_ids": [
      27,
      18,
      53,
      80,
      9648
    ],
    "overview": "When twin brothers arrive home to find their mother’s demeanor altered and face covered in surgical bandages, they begin to suspect the woman beneath the gauze might not be their mother.",
    "release_date": "2022-09-16"
  },
  {
    "title": "Army of the Dead",
    "vote_average": 6.239,
    "vote_count": 3722,
    "poster_path": "/z8CExJekGrEThbpMXAmCFvvgoJR.jpg",
    "genre_ids": [
      28,
      80,
      18,
      27,
      878,
      53
    ],
    "overview": "Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.",
    "release_date": "2021-05-14"
  },
  {
    "title": "Swordfish",
    "vote_average": 6.2,
    "vote_count": 2492,
    "poster_path": "/mM6h4jMqC4q5IaFgBIGKQDLnRU.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Rogue agent Gabriel Shear is determined to get his mitts on $9 billion stashed in a secret Drug Enforcement Administration account. He wants the cash to fight terrorism, but lacks the computer skills necessary to hack into the government mainframe. Enter Stanley Jobson, a n'er-do-well encryption expert who can log into anything.",
    "release_date": "2001-06-08"
  },
  {
    "title": "Copshop",
    "vote_average": 6.234,
    "vote_count": 668,
    "poster_path": "/szArp3dQlVajpsqpyPFVAFHFsa3.jpg",
    "genre_ids": [
      53,
      80,
      28
    ],
    "overview": "On the run from a lethal assassin, a wily con artist devises a scheme to hide out inside a small-town police station. However, when the hit man turns up at the precinct, an unsuspecting rookie cop finds herself caught in the crosshairs.",
    "release_date": "2021-09-09"
  },
  {
    "title": "Romeo Must Die",
    "vote_average": 6.2,
    "vote_count": 1096,
    "poster_path": "/aLjBcVUfw3eT5csKi28pvs0V8he.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Two warring gang families (one African-American, the other Chinese) maneuver for bragging rights to the Oakland, California, docks. Hang Sing and Trish O'Day uncover a trail of deceit that leaves most of the warring factions dead … or worse!",
    "release_date": "2000-03-22"
  },
  {
    "title": "Kimi",
    "vote_average": 6.229,
    "vote_count": 772,
    "poster_path": "/okNgwtxIWzGsNlR3GsOS0i0Qgbn.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "overview": "A tech worker with agoraphobia discovers recorded evidence of a violent crime but is met with resistance when she tries to report it. Seeking justice, she must do the thing she fears the most: leave her apartment.",
    "release_date": "2022-02-10"
  },
  {
    "title": "Point of No Return",
    "vote_average": 6.228,
    "vote_count": 645,
    "poster_path": "/ixWqZZMkTbLbcbCn9mJgSlCjQcg.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Hardened criminal Maggie Hayward's consistent violence, even in police custody, ends in the execution chamber. However, top-secret US government agent 'Bob' arranges a staged death, so Maggie can be elaborately trained as a phantom killer and subdued into obedience.",
    "release_date": "1993-03-19"
  },
  {
    "title": "Deliver Us from Evil",
    "vote_average": 6.228,
    "vote_count": 1935,
    "poster_path": "/Uz32ERsyCmGwV8Eg2wmT2ooWpo.jpg",
    "genre_ids": [
      53,
      80,
      27
    ],
    "overview": "When a frightening wave of violence sweeps through New York City, troubled cop Sarchie fails to find a rational explanation for the bizarre crimes. However, his eyes are opened to a frightening alternate reality when renegade Jesuit priest Mendoza convinces him that demonic possession may be to blame for the gruesome murders. Together, they wage a valiant supernatural struggle to rid the city of an otherworldly evil.",
    "release_date": "2014-07-01"
  },
  {
    "title": "Johnny English Reborn",
    "vote_average": 6.227,
    "vote_count": 3100,
    "poster_path": "/1T6qnlTVkrGr0mpgZbpSwVU5FWW.jpg",
    "genre_ids": [
      80,
      28,
      35
    ],
    "overview": "The most prominent heads of state in the world begin gathering for a conference that could have a major impact on global politics. When MI-7 receives word that the Chinese premier has become the target of some high-powered killers, it falls on Johnny English to save the day. Armed with the latest high-tech weaponry and gadgets that would make even James Bond jealous, the once-disgraced agent uncovers evidence of a massive conspiracy involving some of the world's most powerful organisations, and vows to redeem his tarnished reputation by stopping the killers before they can strike.",
    "release_date": "2011-09-15"
  },
  {
    "title": "The Ruthless",
    "vote_average": 6.226,
    "vote_count": 390,
    "poster_path": "/tlm4Jtl8WJfoW2jg52f5ewKQWym.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Milan, Italy, 1967. Santo Russo, a boy of Calabrian origin, arrives north with his parents and younger brother to find better living conditions. Due to an absurd misunderstanding and his father's contempt, Santo ends up in prison, where he gets a “true education.” In 1978, he and his friends Slim and Mario embark on a 15-year criminal career, a successful and ruthless spiral of robberies, kidnappings, murders and heroin smuggling.",
    "release_date": "2019-04-08"
  },
  {
    "title": "J. Edgar",
    "vote_average": 6.224,
    "vote_count": 2301,
    "poster_path": "/hWHFPhGvCvfHbZCxJSR3n6GsXIf.jpg",
    "genre_ids": [
      18,
      80,
      36
    ],
    "overview": "As the face of law enforcement in the United States for almost 50 years, J. Edgar Hoover was feared and admired, reviled and revered. But behind closed doors, he held secrets that would have destroyed his image, his career, and his life.",
    "release_date": "2011-11-09"
  },
  {
    "title": "Takers",
    "vote_average": 6.221,
    "vote_count": 1188,
    "poster_path": "/2It3pUKN9EdG1bIzfvKJccd0gW8.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "A seasoned team of bank robbers, including Gordon Jennings, John Rahway, A.J., and brothers Jake and Jesse Attica successfully complete their latest heist and lead a life of luxury while planning their next job. When Ghost, a former member of their team, is released from prison he convinces the group to strike an armored car carrying $20 million. As the \"Takers\" carefully plot out their strategy and draw nearer to exacting the grand heist, a reckless police officer inches closer to apprehending the criminals.",
    "release_date": "2010-08-26"
  },
  {
    "title": "Hoodwinked!",
    "vote_average": 6.22,
    "vote_count": 1643,
    "poster_path": "/tjuMvHg7NJmE9hqKD3p86kW2Jvk.jpg",
    "genre_ids": [
      16,
      35,
      10751,
      80
    ],
    "overview": "Little Red Riding Hood: A classic story, but there's more to every tale than meets the eye. Before you judge a book by its cover, you've got to flip through the pages. In the re-telling of this classic fable, the story begins at the end of the tale and winds its way back. Chief Grizzly and Detective Bill Stork investigate a domestic disturbance at Granny's cottage, involving a karate-kicking Red Riding Hood, a sarcastic wolf and an oafish Woodsman.",
    "release_date": "2005-12-16"
  },
  {
    "title": "The International",
    "vote_average": 6.22,
    "vote_count": 1150,
    "poster_path": "/2r8qgOaBy6EiKbKRLwurjmHIgFs.jpg",
    "genre_ids": [
      28,
      53,
      18,
      80
    ],
    "overview": "An interpol agent and an attorney are determined to bring one of the world's most powerful banks to justice. Uncovering money laundering, arms trading, and conspiracy to destabilize world governments, their investigation takes them from Berlin, Milan, New York and Istanbul. Finding themselves in a chase across the globe, their relentless tenacity puts their own lives at risk.",
    "release_date": "2009-02-03"
  },
  {
    "title": "The Night Clerk",
    "vote_average": 6.215,
    "vote_count": 677,
    "poster_path": "/hPWjid7yMatyIDHvku7lCMN7zSi.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "Hotel night clerk Bart Bromley is a highly intelligent young man on the Autism spectrum. When a woman is murdered during his shift, Bart becomes the prime suspect. As the police investigation closes in, Bart makes a personal connection with a beautiful guest named Andrea, but soon realises he must stop the real murderer before she becomes the next victim.",
    "release_date": "2020-02-19"
  },
  {
    "title": "The Hustle",
    "vote_average": 6.213,
    "vote_count": 2368,
    "poster_path": "/qZniBGQRESLIfxw6GeZLZ2G1osa.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Two female scam artists, one low rent and the other high class, compete to swindle a naïve tech prodigy out of his fortune. A remake of the 1988 comedy \"Dirty Rotten Scoundrels.\"",
    "release_date": "2019-05-09"
  },
  {
    "title": "The Good Neighbor",
    "vote_average": 6.211,
    "vote_count": 415,
    "poster_path": "/ub0hBxjkfOUoymQR3NOWIVH400A.jpg",
    "genre_ids": [
      18,
      80,
      53,
      27
    ],
    "overview": "Two high school filmmakers decide to create the illusion of a haunting on an unsuspecting neighbor.",
    "release_date": "2016-09-16"
  },
  {
    "title": "Death Wish 3",
    "vote_average": 6.209,
    "vote_count": 370,
    "poster_path": "/16vTFZISP6JaDV1rHSWpdOcDvY0.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "Architect/vigilante Paul Kersey arrives back in New York City and is forcibly recruited by a crooked police chief to fight street crime caused by a large gang terrorizing the neighborhoods.",
    "release_date": "1985-11-01"
  },
  {
    "title": "Death Warrant",
    "vote_average": 6.209,
    "vote_count": 506,
    "poster_path": "/95mcKAcTgvonhx3BS5psLguyEVu.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "The Canadian policeman Louis Burke is assigned in a jail to investigate the murders of prisoners and jailors. When in jail, Louis, using his outstandings martial arts skills, is able to save his life and make himself respected in that violent world. At least, helped by two another prisoners, he succeded in finding the truth about the dreadful crimes.  In a violent and corrupt prison, decorated cop Louis Burke must infiltrate the jail to find answers to a number of inside murders. What he finds is a struggle of life and death tied in to his own past.",
    "release_date": "1990-09-14"
  },
  {
    "title": "Femme Fatale",
    "vote_average": 6.209,
    "vote_count": 541,
    "poster_path": "/i2OgxmZVbIsJxaLiYMjCSewsLty.jpg",
    "genre_ids": [
      9648,
      80,
      53
    ],
    "overview": "A $10-million diamond rip-off, a stolen identity, a new life married to a diplomat. Laure Ash has risked big, won big. But then a tabloid shutterbug snaps her picture in Paris, and suddenly, enemies from Laure's secret past know who and where she is. And they all want their share of the diamond heist. Or her life. Or both.",
    "release_date": "2002-04-30"
  },
  {
    "title": "Pink Flamingos",
    "vote_average": 6.208,
    "vote_count": 452,
    "poster_path": "/71IwGRZmEds1yuD2xbaExAofoLS.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Notorious Baltimore criminal and underground figure Divine goes up against Connie & Raymond Marble, a sleazy married couple who make a passionate attempt to humiliate her and seize her tabloid-given title as \"The Filthiest Person Alive\".",
    "release_date": "1972-03-17"
  },
  {
    "title": "Red Heat",
    "vote_average": 6.206,
    "vote_count": 1347,
    "poster_path": "/AoJTHXmO01EZgT0p1YTsGBEQxLj.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "A tough Russian policeman is forced to partner up with a cocky Chicago police detective when he is sent to Chicago to apprehend a Georgian drug lord who killed his partner and fled the country.",
    "release_date": "1988-06-17"
  },
  {
    "title": "Fun with Dick and Jane",
    "vote_average": 6.2,
    "vote_count": 2266,
    "poster_path": "/1NBVGBi8Z6MhJBAJ5SuRMqP7o3T.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "After Dick Harper loses his job at Globodyne in an Enron-esque collapse, he and his wife, Jane, turn to crime in order to handle the massive debt they now face. Two intelligent people, Dick and Jane actually get pretty good at robbing people and even enjoy it -- but they have second thoughts when they're reminded that crime can hurt innocent people. When the couple hears that Globodyne boss Jack McCallister actually swindled the company, they plot revenge.",
    "release_date": "2005-12-21"
  },
  {
    "title": "Trapped",
    "vote_average": 6.199,
    "vote_count": 523,
    "poster_path": "/4sujD0KP5O90TXAWrTjqDPBTnfQ.jpg",
    "genre_ids": [
      28,
      80,
      53,
      18
    ],
    "overview": "When their daughter is abducted by experienced kidnappers, the Jennings turn the tables on their seemingly fool-proof plan.",
    "release_date": "2002-09-20"
  },
  {
    "title": "The Hole",
    "vote_average": 6.194,
    "vote_count": 758,
    "poster_path": "/zVDhZHjcE0ksNfFSsJVoxDdAYCJ.jpg",
    "genre_ids": [
      80,
      18,
      27,
      53
    ],
    "overview": "Four teenagers at a British private school secretly uncover and explore the depths of a sealed underground hole created decades ago as a possible bomb shelter.",
    "release_date": "2001-04-20"
  },
  {
    "title": "The Outsider",
    "vote_average": 6.191,
    "vote_count": 594,
    "poster_path": "/m2riQcEzjVrkP8wKHDXwC5EQpHQ.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "A former American G.I. joins a yakuza family after his release from prison in post-World War II Osaka.",
    "release_date": "2018-03-09"
  },
  {
    "title": "The Hunted",
    "vote_average": 6.191,
    "vote_count": 729,
    "poster_path": "/girIlHTtWXMxyFxR2HpHBWlXCe1.jpg",
    "genre_ids": [
      18,
      28,
      53,
      80
    ],
    "overview": "In the wilderness of British Columbia, two hunters are tracked and viciously murdered by Aaron Hallum. A former Special Operations instructor is approached and asked to apprehend Hallum—his former student—who has 'gone rogue' after suffering severe battle stress from his time in Kosovo.",
    "release_date": "2003-03-11"
  },
  {
    "title": "Kill List",
    "vote_average": 6.189,
    "vote_count": 717,
    "poster_path": "/qwT2I3ons0oD58jIppKmd4qLtvB.jpg",
    "genre_ids": [
      27,
      53,
      80
    ],
    "overview": "Nearly a year after a botched job, a hitman takes a new assignment with the promise of a big payoff for three killings. What starts off as an easy task soon unravels, sending the killer into the heart of darkness.",
    "release_date": "2011-09-02"
  },
  {
    "title": "The Crew",
    "vote_average": 6.188,
    "vote_count": 316,
    "poster_path": "/zq4QUvbPS2bf6mesCPW04awrBoJ.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "One of the members of a gang of thieves commits a serious mistake that force them to work for a ruthless gang of drug dealers, endangering the future of the team, their lives and those of their families.",
    "release_date": "2016-05-04"
  },
  {
    "title": "Throw Momma from the Train",
    "vote_average": 6.185,
    "vote_count": 506,
    "poster_path": "/Ap0Wo7hNS6WW1wdPOKYM3SNpewY.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Larry Donner, an author with a cruel ex-wife, teaches a writing workshop in which one of his students, Owen, is fed up with his domineering mother. When Owen watches a Hitchcock classic that seems to mirror his own life, he decides to put the movie's plot into action and offers to kill Larry's ex-wife, if Larry promises to murder his mom. Before Larry gets a chance to react to the plan, it seems that Owen has already set things in motion.",
    "release_date": "1987-12-11"
  },
  {
    "title": "Nick of Time",
    "vote_average": 6.185,
    "vote_count": 661,
    "poster_path": "/A1FJwUVg84sQSjHVz5jVMXQvifJ.jpg",
    "genre_ids": [
      53,
      80,
      28
    ],
    "overview": "An unimpressive, every-day man is forced into a situation where he is told to kill a politician to save his kidnapped daughter.",
    "release_date": "1995-11-22"
  },
  {
    "title": "Spartan",
    "vote_average": 6.184,
    "vote_count": 340,
    "poster_path": "/wIaihDzXF0ie3oALucbUZmvGRBu.jpg",
    "genre_ids": [
      9648,
      28,
      18,
      53,
      80
    ],
    "overview": "U.S. government agent Scott is assigned to rescue the daughter of a high-ranking government official. As willing as he is to bend the rules to get things done, though, Scott is shocked to find that others are willing to go even further to protect a political career.",
    "release_date": "2004-03-12"
  },
  {
    "title": "Criminal",
    "vote_average": 6.2,
    "vote_count": 1624,
    "poster_path": "/lm0NlIsgGDqdx7CGFCDDJo1ptgh.jpg",
    "genre_ids": [
      28,
      80,
      878
    ],
    "overview": "CIA Agent Bill Pope is on a mission to track down a shadowy hacker named 'The Dutchman'. When he gets mysteriously killed, an experimental procedure transfers his memories into a dangerous ex-convict. When he wakes up Pope's memories, his mission is to eliminate The Dutchman before the hacker launches ICBMs and starts World War III.",
    "release_date": "2016-04-07"
  },
  {
    "title": "My Son",
    "vote_average": 6.176,
    "vote_count": 398,
    "poster_path": "/8d4q6bf1PS6OX6F3syWnfBzFZg9.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "When a man's only son goes missing, he travels to the town where his ex-wife lives in search of answers. To play a man whose life is clouded by mystery, McAvoy will not be given a script of dialogue.",
    "release_date": "2021-09-23"
  },
  {
    "title": "The Unknown Girl",
    "vote_average": 6.2,
    "vote_count": 374,
    "poster_path": "/owxEl8EMMTwiy73L5n5zM9jaTws.jpg",
    "genre_ids": [
      53,
      18,
      80
    ],
    "overview": "Jenny, a young doctor who feels guilty after a young woman she refused to see winds up dead a few days later, decides to find out who the girl was, after the police can't identify the young woman.",
    "release_date": "2016-10-05"
  },
  {
    "title": "Blood Work",
    "vote_average": 6.2,
    "vote_count": 734,
    "poster_path": "/A6wWJkIREagRWFNu3YotID3n9aW.jpg",
    "genre_ids": [
      53,
      80,
      28,
      9648
    ],
    "overview": "Still recovering from a heart transplant, a retired FBI profiler returns to service when his own blood analysis offers clues to the identity of a serial killer.",
    "release_date": "2002-08-09"
  },
  {
    "title": "Code 8",
    "vote_average": 6.2,
    "vote_count": 1633,
    "poster_path": "/izGX7npHEopDQvngYcxMJEfcFbj.jpg",
    "genre_ids": [
      878,
      28,
      80
    ],
    "overview": "In Lincoln City, some inhabitants have extraordinary abilities. Most live below the poverty line, under the close surveillance of a heavily militarized police force. Connor, a construction worker with powers, involves with a criminal gang to help his ailing mother. (Based on the short film “Code 8,” 2016.)",
    "release_date": "2019-12-06"
  },
  {
    "title": "The Yards",
    "vote_average": 6.173,
    "vote_count": 402,
    "poster_path": "/AtwXtU8CDWvVADgOwRkOSRZFPWI.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "In the rail yards of Queens, contractors repair and rebuild the city's subway cars. These contracts are lucrative, so graft and corruption are rife. When Leo Handler gets out of prison, he finds his aunt married to Frank Olchin, one of the big contractors; he's battling with a minority-owned firm for contracts.",
    "release_date": "2000-04-27"
  },
  {
    "title": "Dead Man Down",
    "vote_average": 6.172,
    "vote_count": 1369,
    "poster_path": "/8xWo2WE36JdBwlCmwvXM4bb5rBg.jpg",
    "genre_ids": [
      53,
      28,
      80,
      18
    ],
    "overview": "In New York City, a crime lord's right-hand man is seduced by a woman seeking retribution.",
    "release_date": "2013-03-08"
  },
  {
    "title": "Blitz",
    "vote_average": 6.171,
    "vote_count": 1541,
    "poster_path": "/qjqmhhc7uLub22mhu4V6DjOBwXM.jpg",
    "genre_ids": [
      80,
      28,
      53
    ],
    "overview": "A tough cop is dispatched to take down a serial killer who has been targeting police officers.",
    "release_date": "2011-05-20"
  },
  {
    "title": "We're No Angels",
    "vote_average": 6.17,
    "vote_count": 460,
    "poster_path": "/5XBVURkON7jyzxr0cONWeTbgAov.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Two escaped cons' only prayer to escape is to pass themselves off as priests and pass by the police blockade at the border into the safety of Canada.",
    "release_date": "1989-06-02"
  },
  {
    "title": "Untraceable",
    "vote_average": 6.167,
    "vote_count": 815,
    "poster_path": "/ySUwDRDEn01lKIMPQorpFCMLWqE.jpg",
    "genre_ids": [
      53,
      80,
      9648,
      18
    ],
    "overview": "Special Agent Jennifer Marsh works in an elite division of the FBI dedicated to fighting cybercrime. She thinks she has seen it all, until a particularly sadistic criminal arises on the Internet. This tech-savvy killer posts live feeds of his crimes on his website; the more hits the site gets, the faster the victim dies. Marsh and her team must find the elusive killer before time runs out.",
    "release_date": "2008-01-22"
  },
  {
    "title": "Saw V",
    "vote_average": 6.166,
    "vote_count": 3265,
    "poster_path": "/cAVsTZTFGmPlZYhdgiRhu3GRLU3.jpg",
    "genre_ids": [
      27,
      53,
      80
    ],
    "overview": "Detective Hoffman is seemingly the last person alive to carry on the Jigsaw legacy. But when his secret is threatened, he must go on the hunt to eliminate all the loose ends.",
    "release_date": "2008-10-23"
  },
  {
    "title": "The Hard Way",
    "vote_average": 6.166,
    "vote_count": 376,
    "poster_path": "/c6u5p9A6dfbyFArkNM5Y6kHdTQw.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "Seeking to raise his credibility as an actor and to land a role as a tough cop on a new show, Hollywood action star Nick Lang works a deal with New York City Police Capt. Brix, who by chance is one of his fans. Nick will be paired with detective Lt. John Moss and learn how to act like a real cop. But when Nick drives John crazy with questions and imitating him, he gets in the way of John's pursuit of a serial killer.",
    "release_date": "1991-03-08"
  },
  {
    "title": "Saw IV",
    "vote_average": 6.164,
    "vote_count": 3523,
    "poster_path": "/ku1QdCXOU4ckz3zxLLlis8MIJVm.jpg",
    "genre_ids": [
      27,
      53,
      80
    ],
    "overview": "Jigsaw and his apprentice Amanda are dead. Now, upon the news of Detective Kerry's murder, two seasoned FBI profilers, Agent Strahm and Agent Perez, arrive in the terrified community to assist the veteran Detective Hoffman in sifting through Jigsaw's latest grisly remains and piecing together the puzzle. However, when SWAT Commander Rigg is abducted and thrust into a game, the last officer untouched by Jigsaw has but ninety minutes to overcome a series of demented traps and save an old friend or face the deadly consequences.",
    "release_date": "2007-10-25"
  },
  {
    "title": "Friday the 13th Part 2",
    "vote_average": 6.2,
    "vote_count": 1522,
    "poster_path": "/6s3Fl0rGf1G2MZm97rhqZ3yS82d.jpg",
    "genre_ids": [
      27,
      80
    ],
    "overview": "Five years after the horrible bloodbath at Camp Crystal Lake, a new group of counselors roam the area, not sensing an ominous lurking presence that proves the grisly legend is real.",
    "release_date": "1981-05-01"
  },
  {
    "title": "A Lonely Place to Die",
    "vote_average": 6.16,
    "vote_count": 536,
    "poster_path": "/k5mKx1l8hjKV52aB652cpxOzoYV.jpg",
    "genre_ids": [
      12,
      28,
      53,
      80
    ],
    "overview": "A group of five mountaineers are hiking and climbing in the Scottish Highlands when they discover a young Serbian girl buried in a small chamber in the wilderness. They become caught up in a terrifying game of cat and mouse with the kidnappers as they try to get the girl to safety.",
    "release_date": "2011-04-09"
  },
  {
    "title": "The Kitchen",
    "vote_average": 6.159,
    "vote_count": 627,
    "poster_path": "/l3smhHvnczXg8E2WzysRVKIXSYJ.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "The mobster husbands of three 1978 Hell's Kitchen housewives are sent to prison by the FBI. Left with little but a sharp ax to grind, the ladies take the Irish mafia's matters into their own hands — proving unexpectedly adept at everything from running the rackets to taking out the competition… literally.",
    "release_date": "2019-08-08"
  },
  {
    "title": "The Devil's Own",
    "vote_average": 6.158,
    "vote_count": 1111,
    "poster_path": "/3KIPu7H3tST0j4tpqdKpQZUBCQz.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "overview": "Frankie McGuire, one of the IRA's deadliest assassins, draws an American family into the crossfire of terrorism. But when he is sent to the U.S. to buy weapons, Frankie is housed with the family of Tom O'Meara, a New York cop who knows nothing about Frankie's real identity. Their surprising friendship, and Tom's growing suspicions, forces Frankie to choose between the promise of peace or a lifetime of murder.",
    "release_date": "1997-03-13"
  },
  {
    "title": "Snake Eyes",
    "vote_average": 6.2,
    "vote_count": 1236,
    "poster_path": "/gsh9mQKRrr4M90XC9Rr0wxefc9u.jpg",
    "genre_ids": [
      53,
      80,
      9648,
      18
    ],
    "overview": "All bets are off when shady homicide cop Rick Santoro witnesses a murder during a boxing match. It's up to him and lifelong friend, Naval intelligence agent Kevin Dunne to uncover the conspiracy behind the killing. At every turn, Santoro makes increasingly shocking discoveries that even he can't turn a blind eye to.",
    "release_date": "1998-08-07"
  },
  {
    "title": "American Pastoral",
    "vote_average": 6.156,
    "vote_count": 649,
    "poster_path": "/pgpMzdML9FUj3GpDU3LFi7AWbHQ.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Set in postwar America, a man watches his seemingly perfect life fall apart as his daughter's new political affiliation threatens to destroy their family.",
    "release_date": "2016-10-20"
  },
  {
    "title": "The Art of the Steal",
    "vote_average": 6.157,
    "vote_count": 515,
    "poster_path": "/4R6ojBfyO8fj3WszLE9rog5qR4W.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Crunch Calhoun, a third-rate motorcycle daredevil and part-time art thief, teams up with his snaky brother to steal one of the most valuable books in the world. But it's not just about the book for Crunch — he's keen to rewrite some chapters of his own past as well.",
    "release_date": "2013-09-20"
  },
  {
    "title": "The Death and Life of Bobby Z",
    "vote_average": 6.153,
    "vote_count": 349,
    "poster_path": "/sgIthxRLUBTbaetVXvXwQEmbfn2.jpg",
    "genre_ids": [
      18,
      28,
      53,
      80
    ],
    "overview": "A DEA agent provides former Marine Tim Kearney with a way out of his prison sentence: impersonate Bobby Z, a recently deceased drug dealer, in a hostage switch with a crime lord. When the negotiations go awry, Kearney flees, with Z's son in tow.",
    "release_date": "2007-07-23"
  },
  {
    "title": "Assault on Precinct 13",
    "vote_average": 6.151,
    "vote_count": 1007,
    "poster_path": "/oBpsRvMN1ONl8oFHuWt1rasDYFJ.jpg",
    "genre_ids": [
      53,
      28,
      12,
      80,
      18
    ],
    "overview": "On New Year's Eve, inside a police station that's about to be closed for good, officer Jake Roenick must cobble together a force made up cops and criminals to save themselves from a mob looking to kill mobster Marion Bishop.",
    "release_date": "2005-01-19"
  },
  {
    "title": "After the Sunset",
    "vote_average": 6.1,
    "vote_count": 708,
    "poster_path": "/1mo3OdxeR6pLgAVt4a3cyvUUQri.jpg",
    "genre_ids": [
      28,
      35,
      80,
      18
    ],
    "overview": "An FBI agent is suspicious of two master thieves, quietly enjoying their retirement near what may - or may not - be the biggest score of their careers.",
    "release_date": "2004-11-12"
  },
  {
    "title": "S.W.A.T.",
    "vote_average": 6.1,
    "vote_count": 2349,
    "poster_path": "/bon63yPVIgUFLP2653Dg9GCOJLJ.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Hondo Harrelson recruits Jim Street to join an elite unit of the Los Angeles Police Department. Together they seek out more members, including tough Deke Kay and single mom Chris Sanchez. The team's first big assignment is to escort crime boss Alex Montel to prison. It seems routine, but when Montel offers a huge reward to anyone who can break him free, criminals of various stripes step up for the prize.",
    "release_date": "2003-08-08"
  },
  {
    "title": "Crossing Over",
    "vote_average": 6.146,
    "vote_count": 338,
    "poster_path": "/6A4WdvbWHJoIN4Y9Q5HXG8R1VYV.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "Immigrants from around the world enter Los Angeles every day, with hopeful visions of a better life, but little notion of what that life may cost. Their desperate scenarios test the humanity of immigration enforcement officers. In Crossing Over, writer-director Wayne Kramer explores the allure of the American dream, and the reality that immigrants find – and create -- in 21st century L.A.",
    "release_date": "2009-02-10"
  },
  {
    "title": "Transporter 3",
    "vote_average": 6.146,
    "vote_count": 3167,
    "poster_path": "/o4w9VF3GRZuXe9NHHvZ07pJespl.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Frank Martin puts the driving gloves on to deliver Valentina, the kidnapped daughter of a Ukranian government official, from Marseilles to Odessa on the Black Sea. En route, he has to contend with thugs who want to intercept Valentina's safe delivery and not let his personal feelings get in the way of his dangerous objective.",
    "release_date": "2008-11-26"
  },
  {
    "title": "Devil's Knot",
    "vote_average": 6.142,
    "vote_count": 625,
    "poster_path": "/8DMDx7XMylIL7lpBEOMzIjuwhw0.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "The savage murders of three young children sparks a controversial trial of three teenagers accused of killing the kids as part of a satanic ritual.",
    "release_date": "2013-05-09"
  },
  {
    "title": "Death Wish",
    "vote_average": 6.138,
    "vote_count": 2402,
    "poster_path": "/g0eEEZAqMf98ULQnoiORuazjOpn.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "A mild-mannered father is transformed into a killing machine after his family is torn apart by a violent act.",
    "release_date": "2018-03-02"
  },
  {
    "title": "The Girl in the Spider's Web",
    "vote_average": 6.138,
    "vote_count": 1248,
    "poster_path": "/w4ibr8R702DCjwYniry1D1XwQXj.jpg",
    "genre_ids": [
      28,
      12,
      80
    ],
    "overview": "After being enlisted to recover a dangerous computer program, hacker Lisbeth Salander and journalist Mikael Blomkvist find themselves caught in a web of spies, cybercriminals and corrupt government officials.",
    "release_date": "2018-10-25"
  },
  {
    "title": "xXx: Return of Xander Cage",
    "vote_average": 6.137,
    "vote_count": 8614,
    "poster_path": "/hba8zREJpP1AYhaXgb2oJLQeO0K.jpg",
    "genre_ids": [
      28,
      12,
      80
    ],
    "overview": "Extreme athlete turned government operative Xander Cage comes out of self-imposed exile, thought to be long dead, and is set on a collision course with deadly alpha warrior Xiang and his team in a race to recover a sinister and seemingly unstoppable weapon known as Pandora's Box. Recruiting an all-new group of thrill-seeking cohorts, Xander finds himself enmeshed in a deadly conspiracy that points to collusion at the highest levels of world governments.",
    "release_date": "2017-01-13"
  },
  {
    "title": "Police Story: Lockdown",
    "vote_average": 6.136,
    "vote_count": 331,
    "poster_path": "/q5i3Qkid4bAxhO11UeTclZbGhIX.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "A man looking for the release of a long-time prisoner takes a police officer, his daughter, and a group of strangers hostage.",
    "release_date": "2013-12-24"
  },
  {
    "title": "Dick Tracy",
    "vote_average": 6.136,
    "vote_count": 869,
    "poster_path": "/xY6D5Ti44xuwzCkmf6Ygbj86BkP.jpg",
    "genre_ids": [
      12,
      35,
      80
    ],
    "overview": "The comic strip detective finds his life vastly complicated when Breathless Mahoney makes advances towards him while he is trying to battle Big Boy Caprice's united mob.",
    "release_date": "1990-04-05"
  },
  {
    "title": "Murder by Numbers",
    "vote_average": 6.135,
    "vote_count": 947,
    "poster_path": "/plH3TujSUVttiIikToKfwdCorJI.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Tenacious homicide detective Cassie Mayweather and her still-green partner are working a murder case, attempting to profile two malevolently brilliant young men: cold, calculating killers whose dark secrets might explain their crimes.",
    "release_date": "2002-04-19"
  },
  {
    "title": "Cocaine Bear",
    "vote_average": 6.134,
    "vote_count": 1698,
    "poster_path": "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
    "genre_ids": [
      53,
      35,
      80
    ],
    "overview": "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
    "release_date": "2023-02-22"
  },
  {
    "title": "The Ladykillers",
    "vote_average": 6.131,
    "vote_count": 1494,
    "poster_path": "/l4g9R39NCp6VaYFrw6q8JwKNW9x.jpg",
    "genre_ids": [
      35,
      80,
      53
    ],
    "overview": "An eccentric, if not charming Southern professor and his crew pose as a band in order to rob a casino, all under the nose of his unsuspecting landlord – a sharp old woman.",
    "release_date": "2004-03-25"
  },
  {
    "title": "K-9",
    "vote_average": 6.134,
    "vote_count": 896,
    "poster_path": "/21mBNUe0X4WYywe6w5DyihltmAn.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "The extravagant cop Michael Dooley needs some help to fight a drug dealer who has tried to kill him. A \"friend\" gives him a dog named Jerry Lee (Officer Lewis), who has been trained to smell drugs. With his help, Dooley sets out to put his enemy behind the bars, but Jerry Lee has a personality of his own and works only when he wants to. On the other hand, the dog is quite good at destroying Dooley's car, house and sex-life...",
    "release_date": "1989-04-28"
  },
  {
    "title": "Bad Lieutenant: Port of Call - New Orleans",
    "vote_average": 6.134,
    "vote_count": 1040,
    "poster_path": "/zRULXsd0rb1lVfnSyQkYPi2nLcB.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Terrence McDonagh is a New Orleans Police sergeant, who recieves a medal and a promotion to lieutenant for heroism during Hurricane Katrina. Due to his heroic act, McDonagh injures his back and becomes addicted to prescription pain medication. He then finds himself involved with a drug dealer who is suspected of murdering a family of African immigrants.",
    "release_date": "2009-09-11"
  },
  {
    "title": "American Gigolo",
    "vote_average": 6.127,
    "vote_count": 576,
    "poster_path": "/igXGCwti23PHOjLKQX6eGIGzQiJ.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "Julian makes a lucrative living as an escort to older women in the Los Angeles area. He begins a relationship with Michelle, a local politician's wife, without expecting any pay. One of his clients is murdered and Detective Sunday begins pumping him for details on his different clients, something he is reluctant to do considering the nature of his work. Julian begins to suspect he's being framed. Meanwhile Michelle begins to fall in love with him.",
    "release_date": "1980-02-08"
  },
  {
    "title": "CHiPS",
    "vote_average": 6.126,
    "vote_count": 1212,
    "poster_path": "/mIHA8Xf6WmxbS83ia4vQ5ojvxV8.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "The adventures of two California Highway Patrol motorcycle officers as they make their rounds on the freeways of Los Angeles.",
    "release_date": "2017-03-23"
  },
  {
    "title": "Every Secret Thing",
    "vote_average": 6.123,
    "vote_count": 313,
    "poster_path": "/jR3rrAtFhK6MufgJIlNYoo0Iyfd.jpg",
    "genre_ids": [
      53,
      80,
      9648
    ],
    "overview": "One clear summer day in a Baltimore suburb, a baby goes missing from her front porch. Two young girls serve seven years for the crime and are released into a town that hasn't fully forgiven or forgotten. Soon, another child is missing, and two detectives are called in to investigate the mystery in a community where everyone seems to have a secret.",
    "release_date": "2014-04-20"
  },
  {
    "title": "Accident Man",
    "vote_average": 6.122,
    "vote_count": 455,
    "poster_path": "/bHFKej3Dbr8kGRSRHpkoFHq9TJQ.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Mike Fallon, the Accident Man, is a stone cold killer.  When a loved one is murdered by his own crew, Fallon is forced to avenge the one person who actually meant something to him.",
    "release_date": "2018-02-06"
  },
  {
    "title": "Ain't Them Bodies Saints",
    "vote_average": 6.121,
    "vote_count": 397,
    "poster_path": "/xkGkVjeMcvEg7P3VxWy8wYBJ7Dv.jpg",
    "genre_ids": [
      80,
      18,
      10749
    ],
    "overview": "Bob Muldoon and Ruth Guthrie, an impassioned young outlaw couple on an extended crime spree, are finally apprehended by lawmen after a shootout in the Texas hills. Although Ruth wounds a local officer, Bob takes the blame. But four years later, Bob escapes from prison and sets out to find Ruth and their daughter, born during his incarceration.",
    "release_date": "2013-07-03"
  },
  {
    "title": "The November Man",
    "vote_average": 6.113,
    "vote_count": 1391,
    "poster_path": "/4ejNFbCgLMDAuy7jFQmc7cr6UAW.jpg",
    "genre_ids": [
      80,
      28,
      53
    ],
    "overview": "An ex-CIA operative is brought back in on a very personal mission and finds himself pitted against his former pupil in a deadly game involving high level CIA officials and the Russian president-elect.",
    "release_date": "2014-08-27"
  },
  {
    "title": "6 Bullets",
    "vote_average": 6.11,
    "vote_count": 314,
    "poster_path": "/tniFHeiQU55feNik7X0mHlEe9DE.jpg",
    "genre_ids": [
      53,
      28,
      80
    ],
    "overview": "An ex-mercenary known for finding missing children is hired by a mixed martial arts fighter whose daughter has been kidnapped.",
    "release_date": "2012-09-11"
  },
  {
    "title": "The Informant!",
    "vote_average": 6.109,
    "vote_count": 810,
    "poster_path": "/qqcmJrzVx3Yx3IcBpqrgb2SK1Rx.jpg",
    "genre_ids": [
      18,
      35,
      80
    ],
    "overview": "A rising star at agri-industry giant Archer Daniels Midland (ADM), Mark Whitacre suddenly turns whistleblower. Even as he exposes his company’s multi-national price-fixing conspiracy to the FBI, Whitacre envisions himself being hailed as a hero of the common man and handed a promotion.",
    "release_date": "2009-09-18"
  },
  {
    "title": "Maniac Cop",
    "vote_average": 6.108,
    "vote_count": 422,
    "poster_path": "/kFml1HbZlsekXO0m11UN4oPwZvo.jpg",
    "genre_ids": [
      28,
      80,
      27,
      9648
    ],
    "overview": "In New York, people are slain and strangled to death brutally on the open street. All witnesses agree that the murderer was in a cop's uniform. Soon the police search and find a suspect in its own ranks: Jack Forrest, suspected of murdering his own wife and the rest of the unfortunate individuals to die by the Maniac Cop’s reign of terror. To prove his innocence, he investigates the case with his partner, Theresa Mallory.",
    "release_date": "1988-05-13"
  },
  {
    "title": "The 51st State",
    "vote_average": 6.1,
    "vote_count": 566,
    "poster_path": "/e3LLDt1fl2INSiNAZwIK3JFPf6N.jpg",
    "genre_ids": [
      53,
      28,
      35,
      80
    ],
    "overview": "An American master chemist plans to score big on a once in a lifetime drug deal. All does not go as planned and he is soon entangled in a web of deceit.",
    "release_date": "2001-12-07"
  },
  {
    "title": "Wheelman",
    "vote_average": 6.106,
    "vote_count": 590,
    "poster_path": "/yeHRsKOlNDsbEIALS1ve6S42Nl6.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "A getaway driver for a bank robbery realizes he has been double crossed and races to find out who betrayed him.",
    "release_date": "2017-10-20"
  },
  {
    "title": "Airheads",
    "vote_average": 6.105,
    "vote_count": 670,
    "poster_path": "/4xPG8pPMyeoec48gKWbbC85EC8j.jpg",
    "genre_ids": [
      35,
      80,
      10402
    ],
    "overview": "The Lone Rangers have heavy-metal dreams and a single demo tape they can't get anyone to play. The solution: Hijack an FM rock radio station and hold the deejays hostage until they agree to broadcast the band's tape.",
    "release_date": "1994-08-05"
  },
  {
    "title": "Heist",
    "vote_average": 6.103,
    "vote_count": 868,
    "poster_path": "/eKdz5i9gbzJthAxUZBBj5SVbzKR.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "A father is without the means to pay for his daughter's medical treatment. As a last resort, he partners with a greedy co-worker to rob a casino. When things go awry they're forced to hijack a city bus.",
    "release_date": "2015-11-13"
  },
  {
    "title": "Crimson Rivers II: Angels of the Apocalypse",
    "vote_average": 6.1,
    "vote_count": 659,
    "poster_path": "/hvQZKLVzW3cYfR5bjgGTGZuCuHs.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "No one is safe when seemingly random killings emerge as a deadly pattern intended to usher in the end of the world.  A murder victim with the same DNA as Christ. A serial killer mimicking the deaths of the 12 Apostles. Inspector Niemans and a young, rebellious detective team up with a beautiful expert in religion to crack the case before their elusive suspect completes the cycle of terror, paving the way to an even bigger bloody catastrophe.",
    "release_date": "2004-02-18"
  },
  {
    "title": "Heartbreakers",
    "vote_average": 6.097,
    "vote_count": 843,
    "poster_path": "/bwvec0gRMSpLakcPuxe0RWScNv3.jpg",
    "genre_ids": [
      35,
      10749,
      80
    ],
    "overview": "Max and Page are a brilliant mother/daughter con team who have their grift down to a fine science. Max targets wealthy, willing men and marries them. Page then seduces them, and Max catches her husband in the act. Then it's off to palimony city and the next easy mark.",
    "release_date": "2001-03-23"
  },
  {
    "title": "Double Impact",
    "vote_average": 6.092,
    "vote_count": 968,
    "poster_path": "/tmzwvSqoMC37Tgqwj4mA2dHNSmw.jpg",
    "genre_ids": [
      53,
      28,
      80,
      18
    ],
    "overview": "Jean Claude Van Damme plays a dual role as Alex and Chad, twins separated at the death of their parents. Chad is raised by a family retainer in Paris, Alex becomes a petty crook in Hong Kong. Seeing a picture of Alex, Chad rejoins him and convinces him that his rival in Hong Kong is also the man who killed their parents. Alex is suspicious of Chad, especially when it comes to his girlfriend.",
    "release_date": "1991-07-31"
  },
  {
    "title": "Baywatch",
    "vote_average": 6.093,
    "vote_count": 7655,
    "poster_path": "/6HE4xd8zloDqmjMZuhUCCw2UcY1.jpg",
    "genre_ids": [
      35,
      28,
      80
    ],
    "overview": "Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit. Together, they uncover a local criminal plot that threatens the future of the Bay.",
    "release_date": "2017-05-25"
  },
  {
    "title": "Hollywoodland",
    "vote_average": 6.092,
    "vote_count": 365,
    "poster_path": "/iHSbYI7l9ID1vuH3PiM4CWek38g.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "When Hollywood superstar George Reeves dies in his home, private detective Louis Simo is hired to investigate his death and gets caught in a web of lies involving a big studio executive's wife.",
    "release_date": "2006-08-31"
  },
  {
    "title": "Blood Ties",
    "vote_average": 6.1,
    "vote_count": 438,
    "poster_path": "/7tMuywiZUoaAihEIkCu3BAL1xPC.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "Two brothers, on either side of the law, face off over organized crime in Brooklyn during the 1970s.",
    "release_date": "2013-08-22"
  },
  {
    "title": "Wall Street: Money Never Sleeps",
    "vote_average": 6.089,
    "vote_count": 1427,
    "poster_path": "/i9DFTWbD6mpM6UT3HlzZwlA92l4.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "As the global economy teeters on the brink of disaster, a young Wall Street trader partners with disgraced former Wall Street corporate raider Gordon Gekko on a two tiered mission: To alert the financial community to the coming doom, and to find out who was responsible for the death of the young trader's mentor.",
    "release_date": "2010-09-20"
  },
  {
    "title": "Cradle 2 the Grave",
    "vote_average": 6.1,
    "vote_count": 852,
    "poster_path": "/8iXpVITXenqPG8gQ0lCFpUMtZIx.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "Gang leader Tony pulls off a major diamond heist with his crew, but cop-turned-criminal Ling knows who has the loot and responds by kidnapping Tony's daughter and holding her for ransom. Unfortunately, Tony's lost the diamonds as well. As he frantically searches for his daughter and the jewels, Tony pairs with a high-kicking government agent who once worked with Ling and seeks revenge on him.",
    "release_date": "2003-02-28"
  },
  {
    "title": "Faces in the Crowd",
    "vote_average": 6.088,
    "vote_count": 462,
    "poster_path": "/A3EtPBwTZe1Dfx1xvjCtReUxDsD.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "A horror-thriller centered on a woman living with \"face-blindness\" after surviving a serial killer's attack. As she lives with her condition, one in which facial features change each time she loses sight of them, the killer closes in.",
    "release_date": "2011-10-25"
  },
  {
    "title": "Out for Justice",
    "vote_average": 6.088,
    "vote_count": 398,
    "poster_path": "/nmfM1diysOyrX4JbvwS7uOomyes.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "Gino Felino is an NYPD detective from Brooklyn who knows everyone and everything in his neighborhood. Killing his partner was someone's big mistake... because he's now out for justice.",
    "release_date": "1991-04-12"
  },
  {
    "title": "Hounds of Love",
    "vote_average": 6.087,
    "vote_count": 314,
    "poster_path": "/b4niGo8hpxIpmAZsGkpZK4mXiDo.jpg",
    "genre_ids": [
      80,
      18,
      27
    ],
    "overview": "When Vicki Maloney is randomly abducted from a suburban street by a disturbed couple, she soon observes the dynamic between her captors and quickly realises she must drive a wedge between them if she is to survive.",
    "release_date": "2016-10-07"
  },
  {
    "title": "Nancy Drew",
    "vote_average": 6.087,
    "vote_count": 485,
    "poster_path": "/a1aAZolyLFRwKhs0IWhFyTa8Z2Z.jpg",
    "genre_ids": [
      10751,
      12,
      80,
      9648,
      35
    ],
    "overview": "Intrepid teenage private eye Nancy Drew heads to Tinseltown with her father to investigate the unsolved murder of a movie star in this old-fashioned whodunit based on Carolyn Keene's popular series of books for young adults. But can the small-town girl cut through the Hollywood hype to solve the case?",
    "release_date": "2007-06-15"
  },
  {
    "title": "Diabolik",
    "vote_average": 6.1,
    "vote_count": 535,
    "poster_path": "/9bOwV2V9r6LikmKHMDgmu9jcE92.jpg",
    "genre_ids": [
      80,
      28,
      9648,
      53
    ],
    "overview": "1960s, the city of Clerville. The forthcoming visit of heiress Eva Kant, who'll be bringing a famous pink diamond with her, catches the attention of Diabolik, the infallible and elusive thief whose real identity is unknown: while trying to steal the jewel, he finds himself bewitched by Eva's charm, a feeling she may be reciprocating. But the police, led by relentless Inspector Ginko, is rapidly closing in on him...",
    "release_date": "2021-12-16"
  },
  {
    "title": "So I Married an Axe Murderer",
    "vote_average": 6.08,
    "vote_count": 382,
    "poster_path": "/wMr6ZjfOnCHOA9Qm3jvo0e7nzfx.jpg",
    "genre_ids": [
      35,
      80,
      10749
    ],
    "overview": "Just after a bad breakup, Charlie MacKenzie falls for lovely butcher Harriet Michaels and introduces her to his parents. But, as voracious consumers of sensational tabloids, his parents soon come to suspect that Harriet is actually a notorious serial killer -- \"Mrs. X\" -- wanted in connection with a string of bizarre honeymoon killings. Thinking his parents foolish, Charlie proposes to Harriet. But while on his honeymoon with her, he begins to fear they were right.",
    "release_date": "1993-07-30"
  },
  {
    "title": "A Man Apart",
    "vote_average": 6.08,
    "vote_count": 826,
    "poster_path": "/z0JUBNk4BTBmeMOudrRH9GnOmK0.jpg",
    "genre_ids": [
      28,
      18,
      80
    ],
    "overview": "When Vetter's wife is killed in a botched hit organized by Diablo, he seeks revenge against those responsible. But in the process, Vetter and Hicks have to fight their way up the chain to get to Diablo but it's easier said than done when all Vetter can focus on is revenge.",
    "release_date": "2003-04-04"
  },
  {
    "title": "In the Electric Mist",
    "vote_average": 6.078,
    "vote_count": 391,
    "poster_path": "/gsyUJovik2t5vzPyXL5tq5VWLym.jpg",
    "genre_ids": [
      53,
      18,
      80,
      9648
    ],
    "overview": "Lt. Dave Robicheaux, a detective in New Iberia, Louisiana, is trying to link the murder of a local hooker to New Orleans mobster Julie (Baby Feet) Balboni, who is co-producer of a Civil War film. At the same time, after Elrod Sykes, the star of the film, reports finding another corpse in the Atchafalaya Swamp near the movie set, Robicheaux starts another investigation, believing the corpse to be the remains of a black man who he saw being murdered 35 years before.",
    "release_date": "2009-04-15"
  },
  {
    "title": "Under Suspicion",
    "vote_average": 6.071,
    "vote_count": 422,
    "poster_path": "/2snkCKKthT5S8Ua0aMZkeaXkmBi.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "A lawyer is asked to come to the police station to clear up a few loose ends in his witness report of a foul murder. \"This will only take ten minutes\", they say, but it turns out to be one loose end after another, and the ten minutes he is away from his speech become longer and longer.",
    "release_date": "2000-08-24"
  },
  {
    "title": "Tightrope",
    "vote_average": 6.077,
    "vote_count": 310,
    "poster_path": "/3TozQxUUX291sM68PlwsucoGatw.jpg",
    "genre_ids": [
      9648,
      53,
      80,
      27
    ],
    "overview": "Wes Block is a detective who's put on the case of a serial killer whose victims are young and pretty women. The murders are getting personal when the killer chooses victims who are acquaintances of Block. Even his daughters are threatened.",
    "release_date": "1984-08-17"
  },
  {
    "title": "Marked for Death",
    "vote_average": 6.078,
    "vote_count": 480,
    "poster_path": "/xYaetJsSm5FC1zxhdW8UR1NVXzc.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "Just retired from the Drug Enforcement Agency, John Hatcher returns to his hometown and quickly discovers that drugs have infiltrated his old neighborhood. Determined to drive the dealers out, Hatcher crosses paths with a ferocious Jamaican drug lord who vows that Hatcher and his family are now marked for death.",
    "release_date": "1990-10-05"
  },
  {
    "title": "The Trouble with You",
    "vote_average": 6.072,
    "vote_count": 424,
    "poster_path": "/n8MFhzVkIYhsZYFgzJNnl2wDxmi.jpg",
    "genre_ids": [
      35,
      18,
      10749,
      80
    ],
    "overview": "Detective Yvonne is the widow of police chief Santi, a local hero in a town on the French Riviera. When she learns he was in fact a crooked cop, she tries to right his wrongs. Crossing paths with Antoine, a victim of Santi, sets off a series of wild events.",
    "release_date": "2018-10-06"
  },
  {
    "title": "Murder at 1600",
    "vote_average": 6.071,
    "vote_count": 492,
    "poster_path": "/5S469MSJIzb6J0PIsghUn52uzfP.jpg",
    "genre_ids": [
      28,
      18,
      9648,
      53,
      80
    ],
    "overview": "A secretary is found dead in a White House bathroom during an international crisis, and Detective Harlan Regis is in charge of the investigation. Despite resistance from the Secret Service, Regis partners with agent Nina Chance. As political tensions rise, they learn that the crime could be part of an elaborate cover-up. Framed as traitors, the pair, plus Regis' partner, break into the White House in order to expose the true culprit.",
    "release_date": "1997-04-18"
  },
  {
    "title": "Cobra",
    "vote_average": 6.07,
    "vote_count": 1608,
    "poster_path": "/jCxfbTh8JvJil5edhNywxaTHoWv.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "A tough-on-crime street cop must protect the only surviving witness to a strange murderous cult with far reaching plans.",
    "release_date": "1986-05-22"
  },
  {
    "title": "Tequila Sunrise",
    "vote_average": 6.067,
    "vote_count": 468,
    "poster_path": "/8LoG0GL5N5e7zvvXezwwGnUfRHL.jpg",
    "genre_ids": [
      53,
      80,
      10749
    ],
    "overview": "In a seaside California town, best friends Mac and Nick are on opposite sides of the law. Mac is a former drug dealer trying to clean up his act, while Nick is a high-profile detective trying to take down a Mexican drug lord named Carlos. Soon Nick's loyalties are put to the test when he begins an affair with restaurateur Jo Ann  -- a love interest of Mac's -- unwittingly leading his friend into a police-orchestrated trap.",
    "release_date": "1988-12-02"
  },
  {
    "title": "Keanu",
    "vote_average": 6.066,
    "vote_count": 978,
    "poster_path": "/dPWlBmCixh9k3Jjb7c7jkIaxBbL.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "Friends hatch a plot to retrieve a stolen cat by posing as drug dealers for a street gang.",
    "release_date": "2016-04-21"
  },
  {
    "title": "Desperately Seeking Susan",
    "vote_average": 6.066,
    "vote_count": 396,
    "poster_path": "/5vLHhO05KEBYVrCmp1bvI06r32t.jpg",
    "genre_ids": [
      18,
      35,
      80
    ],
    "overview": "Roberta is a bored suburban housewife who is fascinated with a woman, Susan, she only knows about by reading messages to and from her in the personals section of the newspaper. This fascination reaches a peak when an ad with the headline \"Desperately Seeking Susan\" proposes a rendezvous. Roberta goes too, and in a series of events involving amnesia and mistaken identity, steps into Susan's life.",
    "release_date": "1985-03-29"
  },
  {
    "title": "Amsterdam",
    "vote_average": 6.067,
    "vote_count": 1267,
    "poster_path": "/6sJcVzGCwrDCBMV0DU6eRzA2UxM.jpg",
    "genre_ids": [
      9648,
      36,
      53,
      35,
      80
    ],
    "overview": "In the 1930s, three friends—a doctor, a nurse, and an attorney—witness a murder, become suspects themselves and uncover one of the most outrageous plots in American history.",
    "release_date": "2022-09-27"
  },
  {
    "title": "Police Academy 2: Their First Assignment",
    "vote_average": 6.061,
    "vote_count": 1431,
    "poster_path": "/xyljfyGSJOdghPsycreHMsnhpU9.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Officer Carey Mahoney and his cohorts have finally graduated from the Police Academy and are about to hit the streets on their first assignment. Question is, are they ready to do battle with a band of graffiti-tagging terrorists? Time will tell, but don't sell short this cheerful band of doltish boys in blue.",
    "release_date": "1985-03-28"
  },
  {
    "title": "Restless",
    "vote_average": 6.061,
    "vote_count": 346,
    "poster_path": "/9MP21x0OPv0R72obd63tMHssmGt.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "After going to extremes to cover up an accident, a corrupt cop's life spirals out of control when he starts receiving threats from a mysterious witness.",
    "release_date": "2022-02-25"
  },
  {
    "title": "The Last Stand",
    "vote_average": 6.06,
    "vote_count": 2646,
    "poster_path": "/3tP4r47v8v6mEj5X5RuG9y8Frbh.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Ray Owens is sheriff of the quiet US border town of Sommerton Junction after leaving the LAPD following a bungled operation. Following his escape from the FBI, a notorious drug baron, his gang, and a hostage are heading toward Sommerton Junction where the police are preparing to make a last stand to intercept them before they cross the border. Owens is reluctant to become involved but ultimately joins in with the law enforcement efforts",
    "release_date": "2013-01-12"
  },
  {
    "title": "Crank: High Voltage",
    "vote_average": 6.1,
    "vote_count": 2650,
    "poster_path": "/tzTC4EEvF0OPL63frEiogxL2T8M.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Chelios faces a Chinese mobster who has stolen his nearly indestructible heart and replaced it with a battery-powered ticker that requires regular jolts of electricity to keep working.",
    "release_date": "2009-04-16"
  },
  {
    "title": "Cleaner",
    "vote_average": 6.055,
    "vote_count": 770,
    "poster_path": "/8KhDbFg9STRlvrOLvaQ7PjOo7XT.jpg",
    "genre_ids": [
      80,
      53,
      9648
    ],
    "overview": "Single father and former cop Tom Cutler has an unusual occupation: he cleans up death scenes. But when he's called in to sterilize a wealthy suburban residence after a brutal shooting, Cutler is shocked to learn he may have unknowingly erased crucial evidence, entangling himself in a dirty criminal cover-up.",
    "release_date": "2007-09-11"
  },
  {
    "title": "Two for the Money",
    "vote_average": 6.054,
    "vote_count": 582,
    "poster_path": "/5SedPYdGLrp6LX9C2cWXLx38w1D.jpg",
    "genre_ids": [
      35,
      80,
      18,
      53
    ],
    "overview": "A former college athlete joins forces with a sports consultant to handicap football games for high-rolling gamblers.",
    "release_date": "2005-10-07"
  },
  {
    "title": "Killing Them Softly",
    "vote_average": 6.053,
    "vote_count": 2020,
    "poster_path": "/heaz45kpFa4Oa7iLis0OBas68ls.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "Jackie Cogan is an enforcer hired to restore order after three dumb guys rob a Mob protected card game, causing the local criminal economy to collapse.",
    "release_date": "2012-07-30"
  },
  {
    "title": "Raising Cain",
    "vote_average": 6.048,
    "vote_count": 313,
    "poster_path": "/5vRn138vnZeUNFe32qTuPGKkVLR.jpg",
    "genre_ids": [
      53,
      80,
      18,
      27
    ],
    "overview": "When neighborhood kids begin vanishing, Jenny suspects her child psychologist husband, Carter, may be resuming the deranged experiments his father performed on Carter when he was young. Now, it falls to Jenny to unravel the mystery. And as more children disappear, she fears for her own child's safety.",
    "release_date": "1992-08-07"
  },
  {
    "title": "Carter",
    "vote_average": 6.047,
    "vote_count": 330,
    "poster_path": "/uzAh3Ub2YttCz13cnyB9PvhpmIL.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Carter, who awakens two months into a deadly pandemic originating from the DMZ that has already devastated US and North Korea. He who has no recollections of his past finds a mysterious device in his head, and a lethal bomb in his mouth. A voice in his ears gives him orders to avoid getting killed and he's thrown into a mysterious operation while the CIA and North Korean coup chase him close.",
    "release_date": "2022-08-05"
  },
  {
    "title": "Jennifer Eight",
    "vote_average": 6.035,
    "vote_count": 326,
    "poster_path": "/vFqDqRhNwCLZ9pAJUnwrMP7Y66B.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "John Berlin, a big-city cop from LA moves to a small-town police force and immediately finds himself investigating a murder. Using theories rejected by his colleagues, Berlin meets a young blind woman named Helena, whom he is attracted to. Meanwhile, a serial killer is on the loose—and only John knows it.",
    "release_date": "1992-11-06"
  },
  {
    "title": "Lonely Hearts",
    "vote_average": 6.031,
    "vote_count": 325,
    "poster_path": "/qnQK4JUwEUFDKt7dSMY2fJmhv2f.jpg",
    "genre_ids": [
      18,
      53,
      80,
      10749
    ],
    "overview": "In the late 1940s, a murderous couple known as the 'The Lonely Hearts Killers' kills close to a dozen people. Two detectives try to nab the duo who find their targets via the personals in the paper.",
    "release_date": "2006-04-30"
  },
  {
    "title": "Parker",
    "vote_average": 6.029,
    "vote_count": 2872,
    "poster_path": "/u1cl4RsdqMjolVVsHwiLRPN1CT2.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "A thief with a unique code of professional ethics is double-crossed by his crew and left for dead. Assuming a new disguise and forming an unlikely alliance with a woman on the inside, he looks to hijack the score of the crew's latest heist.",
    "release_date": "2013-01-23"
  },
  {
    "title": "The Woman in the Window",
    "vote_average": 6.028,
    "vote_count": 1808,
    "poster_path": "/wcrjc1uwQaqoqtqi67Su4VCOYo0.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "overview": "An agoraphobic woman living alone in New York begins spying on her new neighbors only to witness a disturbing act of violence.",
    "release_date": "2021-05-13"
  },
  {
    "title": "The Sentinel",
    "vote_average": 6.028,
    "vote_count": 720,
    "poster_path": "/wPFVeVYuFhCnnOAZZHpMROCbssE.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "A secret service agent is framed as the mole in an assassination attempt on the president. He must clear his name and foil another assassination attempt while on the run from a relentless FBI agent.",
    "release_date": "2006-04-19"
  },
  {
    "title": "Leaves of Grass",
    "vote_average": 6.02,
    "vote_count": 385,
    "poster_path": "/9OKhPNN3vNqXHJfNKW1YndyyzkK.jpg",
    "genre_ids": [
      35,
      80,
      53
    ],
    "overview": "An Ivy League professor returns home, where his pot-growing twin brother has concocted a plan to take down a local drug lord.",
    "release_date": "2009-09-13"
  },
  {
    "title": "Diabolik - Ginko Attacks",
    "vote_average": 6.019,
    "vote_count": 417,
    "poster_path": "/8QVbWBv94BAT9u1q9uJccwOxMzt.jpg",
    "genre_ids": [
      80,
      28
    ],
    "overview": "Diabolik narrowly escapes Inspector Ginko's latest trap, leaving his partner in crime Eva Kant behind. Furious, Eva offers Ginko her help in capturing him, but the former has to face first the return of an old flame of his.",
    "release_date": "2022-11-17"
  },
  {
    "title": "Bandidas",
    "vote_average": 6.018,
    "vote_count": 1032,
    "poster_path": "/3qdc6SohDYb1pe9ypv4NShWZMAN.jpg",
    "genre_ids": [
      28,
      35,
      37,
      80
    ],
    "overview": "Set in the late 19th century. When a ruthless robber baron takes away everything they cherish, a rough-and-tumble, idealistic peasant and a sophisticated heiress embark on a quest for justice, vengeance…and a few good heists.",
    "release_date": "2006-01-18"
  },
  {
    "title": "Mad Dog and Glory",
    "vote_average": 6.012,
    "vote_count": 335,
    "poster_path": "/wmgmTe9uQ5mtudN6e4IVEGvSqg1.jpg",
    "genre_ids": [
      35,
      80,
      10749,
      18
    ],
    "overview": "Wayne Dobie is a shy cop whose low-key demeanor has earned him the affectionate nickname \"Mad Dog.\" After Mad Dog saves the life of Frank Milo, a crime boss and aspiring stand-up comedian, he's offered the company of an attractive young waitress named Glory for a week. At first both are uneasy about the arrangement, but they eventually fall in love. However, the situation becomes complicated when Milo demands Glory back.",
    "release_date": "1993-03-05"
  },
  {
    "title": "National Lampoon's Loaded Weapon 1",
    "vote_average": 6.012,
    "vote_count": 670,
    "poster_path": "/tIdlDgiVQ4kbgVXXIlP8LswubkN.jpg",
    "genre_ids": [
      35,
      80,
      28
    ],
    "overview": "An LA detective is murdered because she has microfilm with the recipe to make cocaine cookies. Two cops partner to find and stop the fiends before they can dope the nation by distributing their wares via the 'Wilderness Girls' cookie drive.",
    "release_date": "1993-02-04"
  },
  {
    "title": "Yamakasi",
    "vote_average": 6.01,
    "vote_count": 525,
    "poster_path": "/7INcVJWvyT5pwnGHTYrhZXD7zvS.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "Yamakasi - Les samouraïs des temps modernes is a 2001 French movie written by Luc Besson. It demonstrates the skills of the Yamakasi, a group of traceurs who battle against injustice in the Paris ghetto. They use parkour to steal from the rich in order to pay off medical bills for a kid injured copying their techniques.",
    "release_date": "2001-04-04"
  },
  {
    "title": "Money Talks",
    "vote_average": 6.006,
    "vote_count": 346,
    "poster_path": "/bN57Rl003E9pYred5kw9Rp8h9Np.jpg",
    "genre_ids": [
      35,
      28,
      80
    ],
    "overview": "Sought by police and criminals, a small-time huckster makes a deal with a TV newsman for protection.",
    "release_date": "1997-08-22"
  },
  {
    "title": "The Net",
    "vote_average": 6.005,
    "vote_count": 1237,
    "poster_path": "/dtupntUFMD5iXBo8HLfALt2ET4R.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53,
      28
    ],
    "overview": "Angela Bennett is a freelance software engineer who lives in a world of computer technology. When a cyber friend asks Bennett to debug a new game, she inadvertently becomes involved in a conspiracy that will soon turn her life upside down and make her the target of an assassination.",
    "release_date": "1995-07-28"
  },
  {
    "title": "Kidnapping Mr. Heineken",
    "vote_average": 6.003,
    "vote_count": 599,
    "poster_path": "/6JAb9jQa4sONkutfqfR3I7LFpGd.jpg",
    "genre_ids": [
      18,
      28,
      80,
      53,
      9648
    ],
    "overview": "The true story of the kidnapping of Freddy Heineken, the grandson of the founder of the Heineken brewery, and his driver. They were released after a ransom of 35 million Dutch guilders was paid.",
    "release_date": "2015-03-12"
  },
  {
    "title": "Midnight in the Switchgrass",
    "vote_average": 5.999,
    "vote_count": 376,
    "poster_path": "/1OTSuh2HNcTRfme8caU8DjgJ39K.jpg",
    "genre_ids": [
      80,
      9648,
      53,
      28
    ],
    "overview": "FBI Agent Karl Helter and his partner Rebecca Lombardo are very close to busting a sex-trafficking ring. When they realize their investigation has crossed the path of a brutal serial killer, they team up with a FDLE agent to put an end to the infamous 'Truck Stop Killer'.",
    "release_date": "2021-07-23"
  },
  {
    "title": "The Laundromat",
    "vote_average": 6,
    "vote_count": 1130,
    "poster_path": "/hwNMJgbiUUvPCxsnADjbV9ysM5j.jpg",
    "genre_ids": [
      18,
      80,
      35
    ],
    "overview": "When her idyllic vacation takes an unthinkable turn, Ellen Martin begins investigating a fake insurance policy, only to find herself down a rabbit hole of questionable dealings that can be linked to a Panama City law firm and its vested interest in helping the world's wealthiest citizens amass larger fortunes.",
    "release_date": "2019-09-27"
  },
  {
    "title": "Antitrust",
    "vote_average": 5.999,
    "vote_count": 485,
    "poster_path": "/9PXyfcJe53A9qFkcj5dkTJwIWoS.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "A computer programmer's dream job at a hot Portland-based firm turns nightmarish when he discovers his boss has a secret and ruthless means of dispatching anti-trust problems.",
    "release_date": "2001-01-11"
  },
  {
    "title": "Austin Powers in Goldmember",
    "vote_average": 5.999,
    "vote_count": 2916,
    "poster_path": "/aSNnxSNc7HftXa6EULM4Lq6mUDn.jpg",
    "genre_ids": [
      35,
      80,
      878
    ],
    "overview": "The world's most shagadelic spy continues his fight against Dr. Evil. This time, the diabolical doctor and his clone, Mini-Me, team up with a new foe—'70s kingpin Goldmember. While pursuing the team of villains to stop them from world domination, Austin gets help from his dad and an old girlfriend.",
    "release_date": "2002-07-26"
  },
  {
    "title": "Saw 3D",
    "vote_average": 5.996,
    "vote_count": 2814,
    "poster_path": "/oY7ZLUftMCTku7lQVrKdLS4skuv.jpg",
    "genre_ids": [
      27,
      80
    ],
    "overview": "As a deadly battle rages over Jigsaw's brutal legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
    "release_date": "2010-10-22"
  },
  {
    "title": "Spiral: From the Book of Saw",
    "vote_average": 5.995,
    "vote_count": 1802,
    "poster_path": "/8rORNBvvxiE9lq0Swbpar8iQNW8.jpg",
    "genre_ids": [
      27,
      80,
      9648
    ],
    "overview": "Working in the shadow of an esteemed police veteran, brash Detective Ezekiel “Zeke” Banks and his rookie partner take charge of a grisly investigation into murders that are eerily reminiscent of the city’s gruesome past.  Unwittingly entrapped in a deepening mystery, Zeke finds himself at the center of the killer’s morbid game.",
    "release_date": "2021-05-12"
  },
  {
    "title": "Timecop",
    "vote_average": 5.994,
    "vote_count": 1075,
    "poster_path": "/bgxP6ws8ErBiarnb4S93vv0lkf4.jpg",
    "genre_ids": [
      53,
      878,
      28,
      80
    ],
    "overview": "An officer for a security agency that regulates time travel, must fend for his life against a shady politician who has a tie to his past.",
    "release_date": "1994-09-15"
  },
  {
    "title": "Shaft",
    "vote_average": 5.992,
    "vote_count": 1187,
    "poster_path": "/5ncvnNPaN73cOqD4muE413sSOyY.jpg",
    "genre_ids": [
      28,
      12,
      80,
      53
    ],
    "overview": "New York police detective John Shaft arrests Walter Wade Jr. for a racially motivated slaying. But the only eyewitness disappears, and Wade jumps bail for Switzerland. Two years later Wade returns to face trial, confident his money and influence will get him acquitted -- especially since he's paid a drug kingpin to kill the witness.",
    "release_date": "2000-06-15"
  },
  {
    "title": "Ninja",
    "vote_average": 5.99,
    "vote_count": 312,
    "poster_path": "/tKjH1IQVeUmHOlxZinQdjFHkFVG.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "A westerner named Casey, studying Ninjutsu in Japan, is asked by the Sensei to return to New York to protect the legendary Yoroi Bitsu, an armored chest that contains the weapons of the last Koga Ninja.",
    "release_date": "2009-10-22"
  },
  {
    "title": "Another 48 Hrs.",
    "vote_average": 5.987,
    "vote_count": 787,
    "poster_path": "/3oSAuZP0346zcIo6awKzHyGUS44.jpg",
    "genre_ids": [
      53,
      28,
      35,
      80,
      18
    ],
    "overview": "For the past four years, San Francisco cop Jack Cates has been after an unidentified drug kingpin who calls himself the Ice Man. Jack finds a picture that proves that the Ice Man has put a price on the head of Reggie Hammond, who is scheduled to be released from prison on the next day.",
    "release_date": "1990-06-08"
  },
  {
    "title": "Breaking In",
    "vote_average": 6,
    "vote_count": 619,
    "poster_path": "/nuCxJwcQOEKYoiHTgcf4em8TxWv.jpg",
    "genre_ids": [
      53,
      80,
      28
    ],
    "overview": "Shaun Russell takes her son and daughter on a weekend getaway to her late father's secluded, high-tech vacation home in the countryside. The family soon gets an unwelcome surprise when four men break into the house to find hidden money. After managing to escape, Shaun must now figure out a way to turn the tables on the desperate thieves and save her captive children.",
    "release_date": "2018-05-05"
  },
  {
    "title": "Mechanic: Resurrection",
    "vote_average": 6,
    "vote_count": 3156,
    "poster_path": "/h651SE7s5z9hbKDiwn38Iubkz5w.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Arthur Bishop thought he had put his murderous past behind him when his most formidable foe kidnaps the love of his life. Now he is forced to travel the globe to complete three impossible assassinations, and do what he does best, make them look like accidents.",
    "release_date": "2016-08-25"
  },
  {
    "title": "Miami Vice",
    "vote_average": 5.982,
    "vote_count": 1633,
    "poster_path": "/z0C3FG7YU4nZgt8NzoXjHRVByVY.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "A case involving drug lords and murder in South Florida takes a personal turn for undercover detectives Sonny Crockett and Ricardo Tubbs. Unorthodox Crockett gets involved romantically with the Chinese-Cuban wife of a trafficker of arms and drugs, while Tubbs deals with an assault on those he loves.",
    "release_date": "2006-07-27"
  },
  {
    "title": "The Virtuoso",
    "vote_average": 5.978,
    "vote_count": 336,
    "poster_path": "/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg",
    "genre_ids": [
      53,
      80,
      28
    ],
    "overview": "Danger, deception and murder descend upon a sleepy town when a professional assassin accepts a new assignment from his enigmatic boss.",
    "release_date": "2021-04-30"
  },
  {
    "title": "The Boondock Saints II: All Saints Day",
    "vote_average": 5.974,
    "vote_count": 686,
    "poster_path": "/jFHtFInp3tYIBxkwWMfNJf1RBZW.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "Skillfully framed by an unknown enemy for the murder of a priest, wanted vigilante MacManus brothers Murphy and Connor must come out of hiding on a sheep farm in Ireland to fight for justice in Boston.",
    "release_date": "2009-11-24"
  },
  {
    "title": "RoboCop 2",
    "vote_average": 5.968,
    "vote_count": 1725,
    "poster_path": "/nhqBxhOJXUJeFsyLxTFkctH9H5F.jpg",
    "genre_ids": [
      28,
      12,
      80,
      878,
      53
    ],
    "overview": "After a successful deployment of the RoboCop Law Enforcement unit, OCP sees its goal of urban pacification come closer and closer, but as this develops, a new narcotic known as \"Nuke\" invades the streets led by God-delirious leader Cane. As this menace grows, it may prove to be too much for Murphy to handle. OCP tries to replicate the success of the first unit, but ends up with failed prototypes with suicidal issues... until Dr. Faxx, a scientist straying away from OCP's path, uses Cane as the new subject for the RoboCop 2 project, a living God.",
    "release_date": "1990-06-22"
  },
  {
    "title": "Triple 9",
    "vote_average": 5.964,
    "vote_count": 2006,
    "poster_path": "/hMW4p1CBF8Q94PqQk8b2EyT4IJk.jpg",
    "genre_ids": [
      28,
      80,
      12,
      53
    ],
    "overview": "A gang of criminals and corrupt cops plan the murder of a police officer in order to pull off their biggest heist yet across town.",
    "release_date": "2016-02-19"
  },
  {
    "title": "Thick as Thieves",
    "vote_average": 5.961,
    "vote_count": 740,
    "poster_path": "/sgRY2ie8koJxfOScMuvzHQ9TuZX.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "A master thief recruits a notorious thief to help him steal two famous Faberge eggs from an impenetrable vault in an effort to pull off one final job and repay his debt to the Russian mob.",
    "release_date": "2009-01-09"
  },
  {
    "title": "A Score to Settle",
    "vote_average": 5.958,
    "vote_count": 448,
    "poster_path": "/4PBwZGBP6ziKuOgHRpbVRyGoqy3.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "A former mob enforcer who is released from prison after serving 22 years for a crime he didn't commit sets out on a path for revenge against the people who wronged him.",
    "release_date": "2019-08-01"
  },
  {
    "title": "Deadfall",
    "vote_average": 5.956,
    "vote_count": 629,
    "poster_path": "/5ZM6uKhuEzWZD3xklmqKPuvq1Nj.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A thriller that follows two siblings who decide to fend for themselves in the wake of a botched casino heist, and their unlikely reunion during another family's Thanksgiving celebration.",
    "release_date": "2012-11-08"
  },
  {
    "title": "Rampage",
    "vote_average": 5.955,
    "vote_count": 400,
    "poster_path": "/a6N8QCsdWxAQvdob3oCHcsVyLvc.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "The boredom of small town life is eating Bill Williamson alive. Feeling constrained and claustrophobic in the meaningless drudgery of everyday life and helpless against overwhelming global dissolution, Bill begins a descent into madness. His shockingly violent plan will shake the very foundations of society by painting the streets red with blood.",
    "release_date": "2009-09-27"
  },
  {
    "title": "The Oxford Murders",
    "vote_average": 5.952,
    "vote_count": 610,
    "poster_path": "/aPGyZg44eCxccfoaNNbJwTJj66J.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "overview": "At Oxford University, a professor and a grad student work together to try and stop a potential series of murders seemingly linked by mathematical symbols.",
    "release_date": "2008-01-18"
  },
  {
    "title": "No Good Deed",
    "vote_average": 5.951,
    "vote_count": 595,
    "poster_path": "/wcDLqCS70LsPcovieuQrb311Qr1.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "Terri is a devoted wife and mother of two, living an ideal suburban life in Atlanta when Colin, a charming but dangerous escaped convict, shows up at her door claiming car trouble. Terri offers her phone to help him but soon learns that no good deed goes unpunished as she finds herself fighting for survival when he invades her home and terrorizes her family.",
    "release_date": "2014-09-10"
  },
  {
    "title": "Knockaround Guys",
    "vote_average": 5.9,
    "vote_count": 318,
    "poster_path": "/oYqsIxxIfJMRHiNEMLzgG81brkY.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "Four sons of well-known New York mobsters must retrieve a bag of cash from a small Montana town ruled by a corrupt sheriff.",
    "release_date": "2001-09-07"
  },
  {
    "title": "Nurse Betty",
    "vote_average": 5.946,
    "vote_count": 368,
    "poster_path": "/1OCHR9z9k7go669AsShOkTj4CFb.jpg",
    "genre_ids": [
      35,
      80,
      53
    ],
    "overview": "What happens when a person decides that life is merely a state of mind? If you're Betty, a small-town waitress and soap opera fan from Fair Oaks, Kansas, you refuse to believe that you can't be with the love of your life just because he doesn't really exist. After all, life is no excuse for not living. Traumatized by a savage event, Betty enters into a fugue state that allows -- even encourages -- her to keep functioning... in a kind of alternate reality.",
    "release_date": "2000-08-30"
  },
  {
    "title": "15 Minutes",
    "vote_average": 5.945,
    "vote_count": 663,
    "poster_path": "/bZ7Xx15zZdDzbKFKl4ULEJ11hWu.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "When Eastern European criminals Oleg and Emil come to New York City to pick up their share of a heist score, Oleg steals a video camera and starts filming their activities, both legal and illegal. When they learn how the American media circus can make a remorseless killer look like the victim and make them rich, they target media-savvy NYPD Homicide Detective Eddie Flemming and media-naive FDNY Fire Marshal Jordy Warsaw, the cops investigating their murder and torching of their former criminal partner, filming everything to sell to the local tabloid TV show \"Top Story.\"",
    "release_date": "2001-03-01"
  },
  {
    "title": "Hobo with a Shotgun",
    "vote_average": 5.942,
    "vote_count": 569,
    "poster_path": "/xxMaO7VoN2BnZit79PedVHnTjcO.jpg",
    "genre_ids": [
      80,
      28,
      53
    ],
    "overview": "A vigilante homeless man pulls into a new city and finds himself trapped in urban chaos, a city where crime rules and where the city's crime boss reigns. Seeing an urban landscape filled with armed robbers, corrupt cops, abused prostitutes and even a pedophile Santa, the Hobo goes about bringing justice to the city the best way he knows how - with a 20-gauge shotgun. Mayhem ensues when he tries to make things better for the future generation. Street justice will indeed prevail.",
    "release_date": "2011-05-06"
  },
  {
    "title": "Lakeview Terrace",
    "vote_average": 5.942,
    "vote_count": 952,
    "poster_path": "/2ThsS74hopBz0RveLgOWiwrMfE8.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "A young interracial couple has just moved into their California dream home when they become the target of their next-door neighbor, who disapproves of their relationship. A tightly wound LAPD officer has appointed himself the watchdog of the neighborhood. His nightly foot patrols and overly watchful eyes bring comfort to some, but he becomes increasingly aggressive to the newlyweds. These persistent intrusions into their lives cause the couple to fight back.",
    "release_date": "2008-09-19"
  },
  {
    "title": "The American",
    "vote_average": 5.941,
    "vote_count": 1263,
    "poster_path": "/5OEOsRaBsSxD0qBtAhus0iKDzr.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Dispatched to a small Italian town to await further orders, assassin Jack embarks on a double life that may be more relaxing than is good for him.",
    "release_date": "2010-08-31"
  },
  {
    "title": "1922",
    "vote_average": 5.938,
    "vote_count": 2574,
    "poster_path": "/q4FQOiSRhTLWulHl5Vpg37FMArH.jpg",
    "genre_ids": [
      27,
      80,
      18
    ],
    "overview": "A simple yet proud rancher conspires to murder his wife for financial gain, convincing his teenage son to participate.",
    "release_date": "2017-10-20"
  },
  {
    "title": "Point Break",
    "vote_average": 5.9,
    "vote_count": 2151,
    "poster_path": "/z7JOvw5Lqs9ezoFTJxmz3nx3av2.jpg",
    "genre_ids": [
      28,
      12,
      80,
      53
    ],
    "overview": "A young undercover FBI agent infiltrates a gang of thieves who share a common interest in extreme sports. A remake of the 1991 film, \"Point Break\".",
    "release_date": "2015-12-03"
  },
  {
    "title": "Death to Smoochy",
    "vote_average": 5.932,
    "vote_count": 358,
    "poster_path": "/jLOgkwcXzlCmwjbWVaWS1vETutl.jpg",
    "genre_ids": [
      35,
      80,
      18,
      53
    ],
    "overview": "Tells the story of Rainbow Randolph, the corrupt, costumed star of a popular children's TV show, who is fired over a bribery scandal and replaced by squeaky-clean Smoochy, a puffy fuscia rhinoceros. As Smoochy catapults to fame - scoring hit ratings and the affections of a network executive - Randolph makes the unsuspecting rhino the target of his numerous outrageous attempts to exact revenge and reclaim his status as America's sweetheart.",
    "release_date": "2002-03-29"
  },
  {
    "title": "Broken City",
    "vote_average": 5.929,
    "vote_count": 1392,
    "poster_path": "/hqa5FwNZC55zqSpdeGFtBDqw55y.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "In a broken city rife with injustice, ex-cop Billy Taggart seeks redemption and revenge after being double-crossed and then framed by its most powerful figure, the mayor. Billy's relentless pursuit of justice, matched only by his streetwise toughness, makes him an unstoppable force - and the mayor's worst nightmare.",
    "release_date": "2013-01-18"
  },
  {
    "title": "Dragnet",
    "vote_average": 5.927,
    "vote_count": 439,
    "poster_path": "/77H17YDeHoJCHebpfGF1rY3Dfof.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "LAPD Sgt. Joe Friday -- the equally straight-laced nephew of the famous police sergeant of the same name -- is paired up with a young, freewheeling detective named Pep Streebeck. After investigating some strange robberies at the local zoo and the theft of a stockpile of pornographic magazines, they uncover cult activity in the heart of the city and are hot on the case to figure out who's behind it all.",
    "release_date": "1987-06-23"
  },
  {
    "title": "Domino",
    "vote_average": 5.924,
    "vote_count": 1131,
    "poster_path": "/pZdIfYkM5kV5BaUDYzwzgmpUxno.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "The story of the life of Domino Harvey, who abandoned her career as a Ford model to become a bounty hunter.",
    "release_date": "2005-10-14"
  },
  {
    "title": "Closed Circuit",
    "vote_average": 5.923,
    "vote_count": 427,
    "poster_path": "/keW2sLB9yJbdkRy9yHQjqUjmzbB.jpg",
    "genre_ids": [
      9648,
      18,
      80,
      53
    ],
    "overview": "A high-profile terrorism case unexpectedly binds together two ex-lovers on the defense team - testing the limits of their loyalties and placing their lives in jeopardy.",
    "release_date": "2013-08-28"
  },
  {
    "title": "Cop Car",
    "vote_average": 5.9,
    "vote_count": 796,
    "poster_path": "/o1JBr2htdBNyEKeIwGGr8Bwh1Bn.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "Two kids find themselves in the centre of a deadly game of cat and mouse after taking a sheriff's cruiser for a joy ride.",
    "release_date": "2015-01-24"
  },
  {
    "title": "The Gambler",
    "vote_average": 5.916,
    "vote_count": 1274,
    "poster_path": "/kL7DfJIje1srf8yliRiMjFEqLtM.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "Literature professor Jim Bennett leads a secret life as a high-stakes gambler. Always a risk-taker, Bennett bets it all when he borrows from a gangster and offers his own life as collateral. Staying one step ahead, he pits his creditor against the operator of an illicit gambling ring while garnering the attention of Frank, a paternalistic loan shark. As his relationship with a student deepens, Bennett must risk everything for a second chance.",
    "release_date": "2014-12-25"
  },
  {
    "title": "Hail, Caesar!",
    "vote_average": 5.914,
    "vote_count": 3609,
    "poster_path": "/txvoksUbyxqvaOvDfEbwW5nEcmX.jpg",
    "genre_ids": [
      35,
      80,
      9648
    ],
    "overview": "When a Hollywood star mysteriously disappears in the middle of filming, the studio sends their fixer to get him back.",
    "release_date": "2016-02-05"
  },
  {
    "title": "National Security",
    "vote_average": 5.914,
    "vote_count": 902,
    "poster_path": "/nWQqUPhvkSYCdIcc1iaaImuUBB0.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "Earl Montgomery, a bombastic police academy reject, and Hank Rafferty, a disgraced, mild-mannered cop, can't seem to escape each other. They met on opposite sides of the law during a routine traffic stop that escalated out of control; now as lowly security guards they're thrown together to bust a smuggling operation.",
    "release_date": "2003-01-17"
  },
  {
    "title": "London Boulevard",
    "vote_average": 5.912,
    "vote_count": 681,
    "poster_path": "/naQKmThKMtlur92CDgCP6b9aoQE.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "A parolee falls for a reclusive movie star while trying to evade a ruthless gangster.",
    "release_date": "2010-11-10"
  },
  {
    "title": "The Mexican",
    "vote_average": 5.912,
    "vote_count": 1334,
    "poster_path": "/5GqF6rVjUW6CVTuj7w1A2JE49AF.jpg",
    "genre_ids": [
      28,
      35,
      80,
      10749
    ],
    "overview": "Jerry Welbach, a reluctant bagman, has been given two ultimatums: The first is from his mob boss to travel to Mexico and retrieve a priceless antique pistol, known as \"the Mexican\"... or suffer the consequences. The second is from his girlfriend Samantha to end his association with the mob. Jerry figures alive and in trouble with Samantha is better than the more permanent alternative, so he heads south of the border.",
    "release_date": "2001-03-01"
  },
  {
    "title": "Sleepless",
    "vote_average": 5.909,
    "vote_count": 1187,
    "poster_path": "/9WkUSY33MDPGmz0vtzbsfaxTHVa.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Undercover Las Vegas police officer Vincent Downs, who has got a lot of enemies, is caught in a high stakes web of corrupt cops and the mob-controlled casino underground. When a heist goes wrong, a crew of homicidal gangsters get T, Downs’ teenage son. In one sleepless night, he will have to rescue his son T (whom they got), evade an internal affairs investigation and bring the kidnappers to justice.",
    "release_date": "2017-01-12"
  },
  {
    "title": "Vidocq",
    "vote_average": 5.907,
    "vote_count": 490,
    "poster_path": "/xeoj8AOHjW1muVQRUPCvnOVxSfj.jpg",
    "genre_ids": [
      14,
      28,
      53,
      80,
      878,
      9648
    ],
    "overview": "Paris, 1830. In the heart of the town, Vidocq, a famous detective, disappears as he fights the Alchemist, an assassin that he has been pursuing for a few months. His young biographer, Etienne Boisset, decides to avenge Vidocq's death and takes the investigation on...",
    "release_date": "2001-09-18"
  },
  {
    "title": "Fortress",
    "vote_average": 5.902,
    "vote_count": 312,
    "poster_path": "/vQxtoPJVfpHgL7DCg9hQFZKDWJa.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "The story revolves around a top-secret resort for retired U.S. intelligence officers. A group of criminals led by Balzary breach the compound, hellbent on revenge on Robert, forcing the retired officer and his son to save the day.",
    "release_date": "2021-12-17"
  },
  {
    "title": "The Big Hit",
    "vote_average": 5.901,
    "vote_count": 388,
    "poster_path": "/aYDC6E9wi6vUmqnJtHsYJfMhFo2.jpg",
    "genre_ids": [
      28,
      12,
      35,
      53,
      80,
      18
    ],
    "overview": "Affable hit man Melvin Smiley is constantly being scammed by his cutthroat colleagues in the life-ending business. So, when he and his fellow assassins kidnap the daughter of an electronics mogul, it's naturally Melvin who takes the fall when their prime score turns sour. That's because the girl is the goddaughter of the gang's ruthless crime boss. But, even while dodging bullets, Melvin has to keep his real job secret from his unsuspecting fiancée, Pam.",
    "release_date": "1998-04-24"
  },
  {
    "title": "Dark Places",
    "vote_average": 5.9,
    "vote_count": 1214,
    "poster_path": "/acJXtT4ZX7nWIhOaCfSAGBxFw71.jpg",
    "genre_ids": [
      53,
      9648,
      18,
      80
    ],
    "overview": "A woman who survived the brutal killing of her family as a child is forced to confront the events of that day.",
    "release_date": "2015-04-08"
  },
  {
    "title": "12 Rounds",
    "vote_average": 5.9,
    "vote_count": 717,
    "poster_path": "/7k7qhrO57sVoBLrNo5HYoTp24sT.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "When New Orleans Police Detective Danny Fisher stops a brilliant thief from getting away with a multimillion-dollar heist, the thief's girlfriend is accidentally killed. After escaping from prison, the criminal mastermind enacts his revenge, taunting Danny with 12 rounds of near-impossible puzzles and tasks that he must somehow complete to save the life of the woman he loves.",
    "release_date": "2009-03-19"
  },
  {
    "title": "Righteous Kill",
    "vote_average": 5.898,
    "vote_count": 1159,
    "poster_path": "/uriFxRT3eIxGwoo4SgAeMHFfLu8.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "Two veteran New York City detectives work to identify the possible connection between a recent murder and a case they believe they solved years ago; is there a serial killer on the loose, and did they perhaps put the wrong person behind bars?",
    "release_date": "2008-09-11"
  },
  {
    "title": "Brick Mansions",
    "vote_average": 5.893,
    "vote_count": 1447,
    "poster_path": "/6OopiNRk7lWP0hPsY0eYqq2kQTi.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "In a dystopian Detroit, grand houses that once housed the wealthy are now homes of the city's most-dangerous criminals. Surrounding the area is a giant wall to keep the rest of Detroit safe. For undercover cop Damien Collier, every day is a battle against corruption as he struggles to bring his father's killer, Tremaine, to justice. Meanwhile, Damien and an ex-con named Lino work together to save the city from a plot to destroy it.",
    "release_date": "2014-04-22"
  },
  {
    "title": "Into the Blue",
    "vote_average": 5.892,
    "vote_count": 1404,
    "poster_path": "/h5oXcjRu0EOiAxSxYuGq58897tu.jpg",
    "genre_ids": [
      28,
      53,
      12,
      80
    ],
    "overview": "When they take some friends on an extreme sport adventure, the last thing Jared and Sam expect to see below the shark-infested waters is a legendary pirate ship rumored to contain millions of dollars in gold. But their good fortune is short-lived, as a ruthless gang of criminals gets word of what they have uncovered.",
    "release_date": "2005-09-30"
  },
  {
    "title": "Destroyer",
    "vote_average": 5.891,
    "vote_count": 659,
    "poster_path": "/sHw9gTdo43nJL82py0oaROkXXNr.jpg",
    "genre_ids": [
      53,
      80,
      18,
      28
    ],
    "overview": "When Erin Bell was a young cop, she was given an undercover assignment that ended badly and destroyed her life. Years later, she must face her demons in order to make peace with her past.",
    "release_date": "2018-12-25"
  },
  {
    "title": "Duplicity",
    "vote_average": 5.891,
    "vote_count": 726,
    "poster_path": "/vpWQs3CjwG6Er3DgZlv4L3NFjXg.jpg",
    "genre_ids": [
      10749,
      35,
      80
    ],
    "overview": "Two romantically-engaged corporate spies team up to manipulate a corporate race to corner the market on a medical innovation that will reap huge profits and enable them to lead an extravagant lifestyle together.",
    "release_date": "2009-03-18"
  },
  {
    "title": "King Cobra",
    "vote_average": 5.888,
    "vote_count": 455,
    "poster_path": "/sEun5y2q3aIrmpIAAhtS9G2JwH0.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "It's 2006, YouTube is in its infancy, and internet porn is still behind a paywall. Taking the stage name Brent Corrigan, a fresh-faced, wannabe adult video performer is molded into a star by Stephen, a closeted gay porn mogul who runs the skin flick empire Cobra Video from his seemingly ordinary suburban home. But as Brent's rise and demands for more money put him at odds with his boss, he also attracts the attention of a rival producer and his unstable lover who will stop at nothing to squash Cobra Video and steal its number one star.",
    "release_date": "2016-10-21"
  },
  {
    "title": "Gringo",
    "vote_average": 5.887,
    "vote_count": 683,
    "poster_path": "/dxeVPklFwng2IowqRPNI4od6aXv.jpg",
    "genre_ids": [
      35,
      28,
      80
    ],
    "overview": "An American businessman with a stake in a pharmaceutical company that's about to go public finds his life is thrown into turmoil by an incident in Mexico.",
    "release_date": "2018-03-08"
  },
  {
    "title": "Birthday Girl",
    "vote_average": 5.885,
    "vote_count": 373,
    "poster_path": "/rWJx5xe9JCyEi0Bl7iRHkxOUwGD.jpg",
    "genre_ids": [
      35,
      80,
      53
    ],
    "overview": "A shy bank clerk orders a Russian mail order bride, and finds his life turned upside down.",
    "release_date": "2001-09-06"
  },
  {
    "title": "In the Blood",
    "vote_average": 5.884,
    "vote_count": 333,
    "poster_path": "/zLqmFJWiXnkhKFmx1dbsARwNWgu.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "When her husband goes missing during their Caribbean vacation, a woman sets off on her own to take down the men she thinks are responsible.",
    "release_date": "2014-04-04"
  },
  {
    "title": "Lying and Stealing",
    "vote_average": 5.883,
    "vote_count": 317,
    "poster_path": "/4YrVrPfMEqtFsLmN4HdzERjbveo.jpg",
    "genre_ids": [
      80,
      35,
      18
    ],
    "overview": "Hoping to leave his criminal lifestyle behind him, a successful art thief teams up with a sexy con woman to pull off the ultimate heist and set himself free.",
    "release_date": "2019-07-12"
  },
  {
    "title": "Little Man",
    "vote_average": 5.879,
    "vote_count": 1598,
    "poster_path": "/zlmlkLVNexUciv3ffdtqHELEVgg.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "After leaving the prison, the dwarf criminal Calvin Sims joins to his moron brother Percy to steal an expensive huge diamond in a jewelry for the mobster Walken. They are chased by the police, and Calvin hides the stone in the purse of the executive Vanessa Edwards, whose husband Darryl Edwards wants to have a baby. Percy convinces Calvin to dress like a baby and be left in front of the Edwards's house to get inside the house and retrieve the diamond. Darryl and Vanessa keep Calvin for the weekend and decide to adopt him, while Walken threatens Darryl to get the stone back.",
    "release_date": "2006-08-31"
  },
  {
    "title": "Suburbicon",
    "vote_average": 5.877,
    "vote_count": 1611,
    "poster_path": "/a3IHgSwO5jWPLcGjKqbQ7pxVGkq.jpg",
    "genre_ids": [
      53,
      80,
      18,
      9648
    ],
    "overview": "In the quiet family town of Suburbicon during the 1950s, the best and worst of humanity is hilariously reflected through the deeds of seemingly ordinary people. When a home invasion turns deadly, a picture-perfect family turns to blackmail, revenge and murder.",
    "release_date": "2017-10-26"
  },
  {
    "title": "Horsemen",
    "vote_average": 5.874,
    "vote_count": 524,
    "poster_path": "/sIVBGmRXsPuI1TES9sKUImMOw2Q.jpg",
    "genre_ids": [
      80,
      18,
      27,
      9648,
      53
    ],
    "overview": "A recently widowed detective still grieving over his wife's death discovers a shocking connection between himself and the suspects in a serial killing spree linked to the Four Horsemen of the Apocalypse.",
    "release_date": "2009-02-06"
  },
  {
    "title": "Rogue City",
    "vote_average": 5.873,
    "vote_count": 557,
    "poster_path": "/9HT9982bzgN5on1sLRmc1GMn6ZC.jpg",
    "genre_ids": [
      80,
      53,
      28,
      18
    ],
    "overview": "Caught in the crosshairs of police corruption and Marseille’s warring gangs, a loyal cop must protect his squad by taking matters into his own hands.",
    "release_date": "2020-10-30"
  },
  {
    "title": "Super Troopers 2",
    "vote_average": 5.9,
    "vote_count": 429,
    "poster_path": "/57SZgdugVClIy22rfnANeBJ5KsN.jpg",
    "genre_ids": [
      35,
      80,
      9648
    ],
    "overview": "When an international border dispute arises between the U.S. and Canada, the Super Troopers- Mac, Thorny, Foster, Rabbit and Farva, are called in to set up a new Highway Patrol station in the disputed area.",
    "release_date": "2018-04-19"
  },
  {
    "title": "Beverly Hills Cop III",
    "vote_average": 5.868,
    "vote_count": 1638,
    "poster_path": "/7vIpCkgGEfk5LZwm78nMxswLJRH.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "When his boss is killed, Detroit cop Alex Foley finds evidence that the murderer had ties to a California amusement park called Wonder World. Returning to sunny Beverly Hills once more, Foley reunites with Detective Billy Rosewood to solve the case. Along with Billy's new partner, Detective Jon Flint, they discover that Wonder World is being used as a front for a massive counterfeiting ring.",
    "release_date": "1994-05-24"
  },
  {
    "title": "The Rookie",
    "vote_average": 5.9,
    "vote_count": 494,
    "poster_path": "/3FzNbTICABqy27CEHH9HaEi0tag.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "Veteran cop Nick Pulovski is used to playing musical partners; many of the partners he's had in the past have died on the job, and often as a result of Nick's risky tactics. But the rookie who's been assigned to help Nick bust a carjacking ring is almost as hotheaded as he is … and when Nick gets kidnapped, his newbie partner is his only hope.",
    "release_date": "1990-12-07"
  },
  {
    "title": "Fighting",
    "vote_average": 5.865,
    "vote_count": 623,
    "poster_path": "/xP1uogi5Gjnf6ybSN10lyDpqDlW.jpg",
    "genre_ids": [
      28,
      80,
      10749
    ],
    "overview": "Small-town boy Shawn MacArthur has come to New York City with nothing. Barely earning a living selling counterfeit goods on the streets, his luck changes when scam artist Harvey Boarden sees that he has a natural talent for streetfighting. When Harvey offers Shawn help at making the real cash, the two form an uneasy partnership.",
    "release_date": "2009-04-24"
  },
  {
    "title": "The Hitcher",
    "vote_average": 5.9,
    "vote_count": 861,
    "poster_path": "/r6AkbjQJ4FWrFNV3AA46A4fZYRc.jpg",
    "genre_ids": [
      27,
      80,
      53
    ],
    "overview": "While driving through the New Mexico Desert during a rainy night, the college students Jim Halsey and his girlfriend Grace Andrews give a ride to the hitchhiker John Ryder. While in their car, the stranger proves to be a psychopath threatening the young couple with a knife, but Jim succeeds to throw him out of the car on the road. On the next morning, the young couple sees John in another car.",
    "release_date": "2007-01-19"
  },
  {
    "title": "Only God Forgives",
    "vote_average": 5.9,
    "vote_count": 2299,
    "poster_path": "/kWjjFSng1JttmDRwDROoGcIArEh.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "Julian, who runs a Thai boxing club as a front organization for his family's drug smuggling operation, is forced by his mother Crystal to find and kill the individual responsible for his brother's recent death.",
    "release_date": "2013-05-30"
  },
  {
    "title": "Identity Thief",
    "vote_average": 5.86,
    "vote_count": 3199,
    "poster_path": "/lIliJCGoWT6tEVaDivLpXEf038w.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "When a mild-mannered businessman learns his identity has been stolen, he hits the road in an attempt to foil the thief -- a trip that puts him in the path of a deceptively harmless-looking woman.",
    "release_date": "2013-02-07"
  },
  {
    "title": "S.W.A.T.: Under Siege",
    "vote_average": 5.857,
    "vote_count": 336,
    "poster_path": "/sGcDltZ2aUgLV7oFxGlpO1oGmc0.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "When a D.E.A. and S.W.A.T. cartel takedown ends in a shootout, S.W.A.T. Agent Travis Hall seizes a mysterious prisoner taking him into custody. Before long, the S.W.A.T. compound is under siege by wave-after-wave of assault teams attempting to recover the prisoner known as “The Scorpion” for the tattoo blazed across his back. When Travis discovers that his prisoner is a Secret Ops double agent planted within the cartel, it’s up to him and his expert S.W.A.T. team to keep “The Scorpion” and his billion dollar secrets safe.",
    "release_date": "2017-08-01"
  },
  {
    "title": "Welcome to the Punch",
    "vote_average": 5.857,
    "vote_count": 609,
    "poster_path": "/6mCyfp7nk1sTZNtvLSVGrO0sPeH.jpg",
    "genre_ids": [
      28,
      12,
      80
    ],
    "overview": "When notorious criminal Jacob Sternwood is forced to return to London, it gives detective Max Lewinsky one last chance to take down the man he's always been after.",
    "release_date": "2013-03-15"
  },
  {
    "title": "RoboCop",
    "vote_average": 5.853,
    "vote_count": 5226,
    "poster_path": "/gM5ql3BKYmHG3WtZ0buKXN7xY8O.jpg",
    "genre_ids": [
      878,
      28,
      80,
      53,
      14,
      27
    ],
    "overview": "In RoboCop, the year is 2028 and multinational conglomerate OmniCorp is at the center of robot technology.  Overseas, their drones have been used by the military for years, but have been forbidden for law enforcement in America.  Now OmniCorp wants to bring their controversial technology to the home front, and they see a golden opportunity to do it.  When Alex Murphy – a loving husband, father and good cop doing his best to stem the tide of crime and corruption in Detroit – is critically injured, OmniCorp sees their chance to build a part-man, part-robot police officer.  OmniCorp envisions a RoboCop in every city and even more billions for their shareholders, but they never counted on one thing: there is still a man inside the machine.",
    "release_date": "2014-01-30"
  },
  {
    "title": "Stockholm",
    "vote_average": 5.852,
    "vote_count": 344,
    "poster_path": "/ko3AS33BLNEBcp1CO4FvdRltTxr.jpg",
    "genre_ids": [
      80,
      35
    ],
    "overview": "Based on the extraordinary true story of the European city’s 1973 bank heist and hostage crisis that was documented in the 1974 New Yorker article “The Bank Drama” by Daniel Lang. The events grasped the world’s attention when the hostages bonded with their captors and turned against the authorities, giving rise to the psychological phenomenon known as “Stockholm Syndrome.”",
    "release_date": "2019-04-12"
  },
  {
    "title": "Shimmer Lake",
    "vote_average": 5.851,
    "vote_count": 390,
    "poster_path": "/bQHhpTHiys0CZRrdDRKvXBmM5KL.jpg",
    "genre_ids": [
      53,
      80,
      18,
      9648
    ],
    "overview": "Shot in reverse day-by-day through a week—a local sheriff embarks on a quest to unlock the mystery of three small-town criminals and a bank heist gone wrong.",
    "release_date": "2017-06-09"
  },
  {
    "title": "Money Train",
    "vote_average": 5.847,
    "vote_count": 705,
    "poster_path": "/jWBDz6Mf9aQVBiUS76JQsEhvoJl.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "When a vengeful New York transit cop decides to steal a trainload of subway fares, his foster brother—a fellow cop—tries to protect him.",
    "release_date": "1995-11-21"
  },
  {
    "title": "7 Days in Entebbe",
    "vote_average": 5.843,
    "vote_count": 385,
    "poster_path": "/nrC63ikbK4jDp3knvBqxPoWYEMM.jpg",
    "genre_ids": [
      53,
      18,
      80
    ],
    "overview": "In 1976, four hijackers take over an Air France airplane en route from Tel Aviv to Paris and force it to land in Entebbe, Uganda. With 248 passengers on board, one of the most daring rescue missions ever is set in motion.",
    "release_date": "2018-03-15"
  },
  {
    "title": "Hitman: Agent 47",
    "vote_average": 5.838,
    "vote_count": 2855,
    "poster_path": "/52NXkgvzRYjRnqRPpqjpiwsIgRG.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "An assassin teams up with a woman to help her find her father and uncover the mysteries of her ancestry.",
    "release_date": "2015-08-20"
  },
  {
    "title": "Dom Hemingway",
    "vote_average": 5.838,
    "vote_count": 474,
    "poster_path": "/krXOk4h01673cHdDzbAMFHUqz9g.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "After spending 12 years in prison for keeping his mouth shut, notorious safe-cracker Dom Hemingway is back on the streets of London looking to collect what he's owed.",
    "release_date": "2013-11-14"
  },
  {
    "title": "Firewall",
    "vote_average": 5.8,
    "vote_count": 876,
    "poster_path": "/3YSPvnSpj9veUZ3dFq82YOnI9fI.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "State-of-the-art security system creator, Jack Stanfield has cemented his reputation as a man who's thought of everything. But when a criminal finds a way into Jack's personal life, everything Jack holds dear is suddenly at stake.",
    "release_date": "2006-02-08"
  },
  {
    "title": "The Captive",
    "vote_average": 5.835,
    "vote_count": 1037,
    "poster_path": "/wLoFxTZFEfAzFLk2qSoPbcz58Jb.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "overview": "Eight years after the disappearance of Cassandra, some disturbing incidents seem to indicate that she's still alive. Police, parents and Cassandra herself, will try to unravel the mystery of her disappearance.",
    "release_date": "2014-09-05"
  },
  {
    "title": "3 from Hell",
    "vote_average": 5.834,
    "vote_count": 428,
    "poster_path": "/nH6ZuEl0H9ZocqKItByG8ECsZsp.jpg",
    "genre_ids": [
      27,
      80,
      28
    ],
    "overview": "After barely surviving a furious shootout with the police, Baby Firefly, Otis Driftwood and Captain Spaulding are behind bars. But pure evil cannot be contained. Teaming up with Otis’ half-brother Winslow, the demented Firefly clan escape to unleash a whole new wave of murder, madness and mayhem.",
    "release_date": "2019-09-16"
  },
  {
    "title": "The Killer Inside Me",
    "vote_average": 5.831,
    "vote_count": 535,
    "poster_path": "/fhmdzywgGF9cvoLPuW8qqDn0Gtx.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "Deputy Sheriff Lou Ford is a pillar of the community in his small west Texas town, patient and apparently thoughtful. Some people think he is a little slow and maybe boring, but that is the worst they say about him. But then nobody knows about what Lou calls his \"sickness\": He is a brilliant, but disturbed sociopathic sadist.",
    "release_date": "2010-02-19"
  },
  {
    "title": "Striking Distance",
    "vote_average": 5.831,
    "vote_count": 755,
    "poster_path": "/e9NDPf8sfSdbsi8kGGMp6YXhqkh.jpg",
    "genre_ids": [
      80,
      28,
      9648,
      53
    ],
    "overview": "Coming from a police family, Tom Hardy ends up fighting his uncle after the murder of his father. Tom believes the killer is another cop, and goes on the record with his allegations. Demoted to water-way duty Tom, along with new partner Jo Christman, navigate the three rivers looking for clues and discovering bodies. This time the victims are women Tom knows, he must find the killer to prove his innocence.",
    "release_date": "1993-09-17"
  },
  {
    "title": "Reasonable Doubt",
    "vote_average": 5.83,
    "vote_count": 528,
    "poster_path": "/n0BUpxa6E8PYoZWbx5g6CxbdalX.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "When up-and-coming District Attorney Mitch Brockden commits a fatal hit-and-run, he feels compelled to throw the case against the accused criminal who was found with the body and blamed for the crime. Following the trial, Mitch's worst fears come true when he realizes that he acquitted a guilty man, and he soon finds himself on the hunt for the killer before more victims pile up.",
    "release_date": "2014-01-17"
  },
  {
    "title": "3000 Miles to Graceland",
    "vote_average": 5.83,
    "vote_count": 592,
    "poster_path": "/nJgr5sGoXnsgZ0EVt80i6X9dQiA.jpg",
    "genre_ids": [
      28,
      12,
      35,
      80,
      53
    ],
    "overview": "It was an ingenious enough plan: rob the Riviera Casino's count room during an Elvis impersonator convention. But Thomas Murphy decided to keep all the money for himself and shot all his partners, including recently-freed ex-con Michael Zane. With $3.2 million at stake, the Marshals Service closing in, Michael must track down Murphy.",
    "release_date": "2001-02-23"
  },
  {
    "title": "Charlie's Angels",
    "vote_average": 5.829,
    "vote_count": 3922,
    "poster_path": "/u5GbILxLgfeNHCnTtTRuhmAC9i4.jpg",
    "genre_ids": [
      28,
      12,
      35,
      80,
      53
    ],
    "overview": "The captivating crime-fighting trio who are masters of disguise, espionage and martial arts are back! When a devious mastermind embroils them in a plot to destroy individual privacy, the Angels, aided by their loyal sidekick Bosley, set out to bring down the bad guys. But when a terrible secret is revealed, it makes the Angels targets for assassination.",
    "release_date": "2000-11-02"
  },
  {
    "title": "The Pink Panther",
    "vote_average": 5.826,
    "vote_count": 1814,
    "poster_path": "/57ViRkdsddHLK32W8Nf3ZPLSAu4.jpg",
    "genre_ids": [
      35,
      9648,
      80,
      12,
      10751
    ],
    "overview": "When the coach of the France soccer team is killed by a poisoned dart in the stadium in the end of a game, and his expensive and huge ring with the diamond Pink Panther disappears, the ambitious Chief Inspector Dreyfus assigns the worst police inspector Jacques Clouseau to the case.",
    "release_date": "2006-02-10"
  },
  {
    "title": "One Night at McCool's",
    "vote_average": 5.817,
    "vote_count": 314,
    "poster_path": "/uGx1MdP4m4nurfB0HAwahaHMIU3.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Jewel murders her boyfriend and moves in with Randy, a bartender at McCool's. His cousin Carl is driven crazy by Jewel while Detective Dehling who is investigating the murder also gets smitten by her.",
    "release_date": "2001-04-19"
  },
  {
    "title": "Marauders",
    "vote_average": 5.815,
    "vote_count": 591,
    "poster_path": "/bAvmDn5C7arBoRrfaG3b3Kdue1q.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "An untraceable group of elite bank robbers is chased by a suicidal FBI agent who uncovers a deeper purpose behind the robbery-homicides.",
    "release_date": "2016-07-01"
  },
  {
    "title": "Redirected",
    "vote_average": 5.821,
    "vote_count": 340,
    "poster_path": "/qQUqHogCcyqFGbxAG26yGymSMfT.jpg",
    "genre_ids": [
      28,
      35,
      80,
      53
    ],
    "overview": "Four friends become stranded in Eastern Europe and have to become hit men, prostitutes, corrupt cops, smugglers and more to make it home.",
    "release_date": "2014-01-10"
  },
  {
    "title": "Raw Deal",
    "vote_average": 5.811,
    "vote_count": 729,
    "poster_path": "/e27G0o01y6aPYn6OScB2G6NbqVz.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Mark Kaminsky is kicked out of the FBI for his rough treatment of a suspect. He winds up as the sheriff of a small town in North Carolina. FBI Chief Harry Shannon, whose son has been killed by a mobster named Patrovina, enlists Kaminsky in a personal vendetta with a promise of reinstatement into the FBI if Patrovina is taken down. To accomplish this, he must go undercover and join Patrovina's gang.",
    "release_date": "1986-06-06"
  },
  {
    "title": "Punisher: War Zone",
    "vote_average": 5.807,
    "vote_count": 1066,
    "poster_path": "/oOvKJgYUIpfswGHAdW6159bPbvM.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "Waging his one-man war on the world of organized crime, ruthless vigilante-hero Frank Castle sets his sights on overeager mob boss Billy Russoti. After Russoti is left horribly disfigured by Castle, he sets out for vengeance under his new alias: Jigsaw. With the \"Punisher Task Force\" hot on his trail and the FBI unable to take Jigsaw in, Frank must stand up to the formidable army that Jigsaw has recruited before more of his evil deeds go unpunished.",
    "release_date": "2008-12-05"
  },
  {
    "title": "Analyze That",
    "vote_average": 5.803,
    "vote_count": 1150,
    "poster_path": "/q3R6Hno3WFfIkHQg7CeVAEOcHQQ.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "The mafia's Paul Vitti is back in prison and will need some serious counseling when he gets out. Naturally, he returns to his analyst Dr. Ben Sobel for help and finds that Sobel needs some serious help himself as he has inherited the family practice, as well as an excess stock of stress.",
    "release_date": "2002-12-06"
  },
  {
    "title": "Perfect Stranger",
    "vote_average": 5.801,
    "vote_count": 875,
    "poster_path": "/i7D5QqQ0q5EXU1UuZVY9KwIxoYR.jpg",
    "genre_ids": [
      53,
      80,
      9648
    ],
    "overview": "A journalist goes undercover to ferret out businessman Harrison Hill as her best friend's killer. Posing as one of his temps, she enters into a game of online cat-and-mouse.",
    "release_date": "2007-04-11"
  },
  {
    "title": "Ava",
    "vote_average": 5.8,
    "vote_count": 2395,
    "poster_path": "/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
    "release_date": "2020-07-02"
  },
  {
    "title": "Big Momma's House",
    "vote_average": 5.8,
    "vote_count": 2163,
    "poster_path": "/5YoSFqpTz5qIxsX61CPMGKONQIY.jpg",
    "genre_ids": [
      80,
      35
    ],
    "overview": "When a street-smart FBI agent is sent to Georgia to protect a beautiful single mother and her son from an escaped convict, he is forced to impersonate a crass Southern granny known as Big Momma in order to remain incognito.",
    "release_date": "2000-05-31"
  },
  {
    "title": "Trespass Against Us",
    "vote_average": 5.798,
    "vote_count": 305,
    "poster_path": "/soAl3j6UkSVycQ2TSRrMIfhMuFN.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "Three generations of the rowdy Cutler family live as outlaws in some of Britain's richest countryside – hunting hares, ram-raiding stately homes, and taunting the police. Struggling to retain a way of life fast becoming extinct, Chad Cutler ends up caught between his father's archaic principles and trying to do right by his kids, whilst the full force of the law is finally catching up with him.",
    "release_date": "2016-10-14"
  },
  {
    "title": "Starsky & Hutch",
    "vote_average": 5.797,
    "vote_count": 2149,
    "poster_path": "/i011DoAZF2krWvxhb7XAxl2lEcK.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Join uptight David Starsky and laid-back Ken \"Hutch\" Hutchinson as they're paired for the first time as undercover cops. The new partners must overcome their differences to solve an important case with help from street informant Huggy Bear and persuasive criminal Reese Feldman.",
    "release_date": "2004-03-05"
  },
  {
    "title": "Cold Pursuit",
    "vote_average": 5.793,
    "vote_count": 2419,
    "poster_path": "/hXgmWPd1SuujRZ4QnKLzrj79PAw.jpg",
    "genre_ids": [
      35,
      28,
      80,
      53
    ],
    "overview": "The quiet family life of Nels Coxman, a snowplow driver, is upended after his son's murder. Nels begins a vengeful hunt for Viking, the drug lord he holds responsible for the killing, eliminating Viking's associates one by one. As Nels draws closer to Viking, his actions bring even more unexpected and violent consequences, as he proves that revenge is all in the execution.",
    "release_date": "2019-02-07"
  },
  {
    "title": "Hard Rain",
    "vote_average": 5.789,
    "vote_count": 655,
    "poster_path": "/hhG5ppaEQIV83GbUVfPlBMDFvVu.jpg",
    "genre_ids": [
      53,
      80,
      28
    ],
    "overview": "An armored car driver tries to elude a gang of thieves while a flood ravages the countryside.",
    "release_date": "1998-01-16"
  },
  {
    "title": "Police Academy 3: Back in Training",
    "vote_average": 5.785,
    "vote_count": 1123,
    "poster_path": "/pBxGgWSR0CMaCVMA2kQS5MWU1z3.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "When police funding is cut, the Governor announces he must close one of the academies. To make it fair, the two police academies must compete against each other to stay in operation. Mauser persuades two officers in Lassard's academy to better his odds, but things don't quite turn out as expected...",
    "release_date": "1986-03-20"
  },
  {
    "title": "The Forger",
    "vote_average": 5.78,
    "vote_count": 346,
    "poster_path": "/x6wsmaVgIhtOwbMyIzOyfmZZSqf.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "A former child art prodigy and second generation petty thief arranges to buy his way out of prison to spend time with his ailing son, only to be forced to alter his plans and commit one more job for the man who financed his release.",
    "release_date": "2014-09-10"
  },
  {
    "title": "Hangman",
    "vote_average": 5.773,
    "vote_count": 534,
    "poster_path": "/iEpxKeX7SE3aLm9dTRIuk7o2kDA.jpg",
    "genre_ids": [
      9648,
      80,
      53
    ],
    "overview": "A homicide detective teams up with a criminal profiler to catch a serial killer whose crimes are inspired by the children's game, Hangman.",
    "release_date": "2017-12-22"
  },
  {
    "title": "The Double",
    "vote_average": 5.773,
    "vote_count": 616,
    "poster_path": "/t4W10sjJSDAWRUDn2Kb8DQKxiZv.jpg",
    "genre_ids": [
      28,
      18,
      80
    ],
    "overview": "The mysterious murder of a US senator bearing the distinctive trademark of the legendary Soviet assassin 'Cassius', forces retired CIA operative, Paul Shepherson to team with rookie FBI agent, Ben Geary  to solve the crime. Having spent his career chasing Cassius, Shepherdson is convinced his nemesis is long dead, but is pushed to take on the case by his former supervisor, Tom Highland. Geary, who wrote his Master's thesis on Shepherdson's pursuit of the Soviet killer, is certain that Cassius has resurfaced.",
    "release_date": "2011-10-27"
  },
  {
    "title": "The Perfect Score",
    "vote_average": 5.8,
    "vote_count": 439,
    "poster_path": "/xflTliVBvCztaLzTJx9luHnSqwD.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Six high school seniors decide to break into the Princeton Testing Center so they can steal the answers to their upcoming SAT tests and all get perfect scores.",
    "release_date": "2004-01-30"
  },
  {
    "title": "The Chase",
    "vote_average": 5.771,
    "vote_count": 323,
    "poster_path": "/lEmGW4Fc9wMRLIKq6NRojZnTbdp.jpg",
    "genre_ids": [
      12,
      35,
      28,
      80
    ],
    "overview": "Jack Hammond is sentenced to life in prison, but manages to escape. To get away from the police he takes a girl as hostage and drives off in her car. The girl happens to be the only daughter of one of the richest men in the state. In a while the car chase is being broadcast live on every TV-channel.",
    "release_date": "1994-03-04"
  },
  {
    "title": "Life of Crime",
    "vote_average": 5.761,
    "vote_count": 355,
    "poster_path": "/apO5xGmcEHpdIBc3Zreax7MXl2m.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Two common criminals get more than they bargained for after kidnapping the wife of a corrupt real-estate developer who shows no interest in paying the $1 million dollar ransom for her safe return.",
    "release_date": "2013-09-14"
  },
  {
    "title": "Domestic Disturbance",
    "vote_average": 5.758,
    "vote_count": 386,
    "poster_path": "/3yAhZB2fsaD1H69Vsro02ucvDO.jpg",
    "genre_ids": [
      53,
      80,
      9648
    ],
    "overview": "Frank Morrison is a divorced father with a 12-year-old son, Danny. His ex-wife Susan and son Danny now live with Rick Barnes, Susan's new husband. Danny, who has a reputation for telling lies, accuses his stepfather of committing a murder. Initially, no one believes his accusations, but then Frank becomes convinced and is the only one who believes him. Now, the father Danny trusts must protect him from the stepfather he fears.",
    "release_date": "2001-10-28"
  },
  {
    "title": "88 Minutes",
    "vote_average": 5.757,
    "vote_count": 1002,
    "poster_path": "/8rMiBz8kLMNmQyMbQXL9MPIlyw.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "overview": "A college professor who moonlights as a forensic psychiatrist for the FBI, receives a death threat claiming he has only 88 minutes to live.",
    "release_date": "2007-02-14"
  },
  {
    "title": "The Contract",
    "vote_average": 5.743,
    "vote_count": 476,
    "poster_path": "/sU2yzV3T1LetBdQPAeBRDb4YwLo.jpg",
    "genre_ids": [
      18,
      28,
      53,
      80
    ],
    "overview": "Attempting to recover from a recent family trauma by escaping into the woods for a peaceful hiking trip, an ex-lawman and his young son stumble across a dangerous contract killer.",
    "release_date": "2006-04-05"
  },
  {
    "title": "City by the Sea",
    "vote_average": 5.741,
    "vote_count": 318,
    "poster_path": "/vpjKtnE5SGTfmdw4YtJsnrfFJs0.jpg",
    "genre_ids": [
      80,
      18,
      9648
    ],
    "overview": "Vincent LaMarca is a dedicated and well-respected New York City police detective who has gone to great lengths to distance himself from his past, but then makes the terrible discovery that his own son has fallen into a life of crime.",
    "release_date": "2002-09-06"
  },
  {
    "title": "Big Momma's House 2",
    "vote_average": 5.741,
    "vote_count": 1490,
    "poster_path": "/wlbov6pkgySqYZilZcO54f29Dg1.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "FBI agent Malcolm Turner goes back undercover as Big Momma, a slick-talking, slam-dunking Southern granny with attitude to spare! Now this granny must play nanny to three dysfunctional upper class kids in order to spy on their computer hacked dad.",
    "release_date": "2006-01-26"
  },
  {
    "title": "The Punisher",
    "vote_average": 5.74,
    "vote_count": 535,
    "poster_path": "/94uI2GcM1Za0dJVUSSuyI8gvQgX.jpg",
    "genre_ids": [
      28,
      53,
      80,
      18,
      10749
    ],
    "overview": "The avenging angel of Marvel Comics fame comes brilliantly to life in this searing action-adventure thriller! Dolph Lundgren stars as Frank Castle, a veteran cop who loses his entire family to a mafia car bomb. His ex-partner believes Castle survived the blast and became the Punisher, living in the sewers and exacting vigilante violence against mob bosses throughout the city. When the populace is caught in the midst of a gang war that he caused, Castle must again emerge from the shadows and save the innocent.",
    "release_date": "1989-10-05"
  },
  {
    "title": "Henry's Crime",
    "vote_average": 5.739,
    "vote_count": 314,
    "poster_path": "/1i1sDWOZecbUZ4Yp9DG5UiTBBRl.jpg",
    "genre_ids": [
      80,
      35
    ],
    "overview": "An aimless man is sent to prison for a crime he did not commit, an ex-con targets the same bank he was sent away for robbing.",
    "release_date": "2010-01-14"
  },
  {
    "title": "The Gunman",
    "vote_average": 5.7,
    "vote_count": 891,
    "poster_path": "/lnUozDnDANTsDYEdsNsHC6b8IiS.jpg",
    "genre_ids": [
      28,
      18,
      80
    ],
    "overview": "Eight years after fleeing the Congo following his assassination of that country's minister of mining, former assassin Jim Terrier is back, suffering from PTSD and digging wells to atone for his violent past. After an attempt is made on his life, Terrier flies to London to find out who wants him dead -- and why. Terrier's search leads him to a reunion with Annie, a woman he once loved, who is now married to an oily businessman with dealings in Africa.",
    "release_date": "2015-02-16"
  },
  {
    "title": "The Man",
    "vote_average": 5.731,
    "vote_count": 506,
    "poster_path": "/bnofwLKvg2g7Ky9sSpyTHaan37n.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "A case of mistaken identity forces a Federal agent and a dental supply salesman to team up as they speed through the streets of Detroit to pull off a sting operation and solve the murder of the agent's former partner.",
    "release_date": "2005-09-08"
  },
  {
    "title": "Masterminds",
    "vote_average": 5.73,
    "vote_count": 1644,
    "poster_path": "/nuVcF1AflHwi54YRZjrakM7nBLH.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "A night guard at an armored car company in the Southern U.S. organizes one of the biggest bank heists in American history.",
    "release_date": "2016-09-29"
  },
  {
    "title": "Texas Killing Fields",
    "vote_average": 5.732,
    "vote_count": 438,
    "poster_path": "/oWGCz9txia8hJsQDNe6Lj91qr7K.jpg",
    "genre_ids": [
      18,
      53,
      80,
      9648
    ],
    "overview": "In the Texas bayous, a local homicide detective teams up with a cop from New York City to investigate a series of unsolved murders.",
    "release_date": "2011-10-14"
  },
  {
    "title": "S.W.A.T.: Firefight",
    "vote_average": 5.732,
    "vote_count": 328,
    "poster_path": "/hDeBVLKDeyavwHRPy8z5yBynNj4.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Los Angeles S.W.A.T. officer, Lt. Paul Cutler, is sent to train the Detroit S.W.A.T. team on new anti-terrorism and homeland security techniques. Cutler has a hard time settling into his assignment as he locks horns with his new captain and encounters resistance from the team he must lead. Cutler begins to adjust to his new assignment, starting a budding romance with police psychologist Kim Byers along the way. Unexpectedly, a routine hostage call turns deadly, and a relentless ex-government agent named Walter Hatch vows revenge on Cutler and the entire S.W.A.T. team for killing the woman he loves. Cutler must use his considerable S.W.A.T. training and knowledge to save his teammates and defeat a trained killer.",
    "release_date": "2011-03-01"
  },
  {
    "title": "The Skulls",
    "vote_average": 5.728,
    "vote_count": 522,
    "poster_path": "/pYuggibfzm8LWgjnUKMMtii2430.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A senior at an Ivy League college, who depends on scholarships and working on the side, gets accepted into the secret society The Skulls. He hopes it betters chances at Harvard but The Skulls is not what he thought and comes at a price.",
    "release_date": "2000-03-31"
  },
  {
    "title": "The Happytime Murders",
    "vote_average": 5.724,
    "vote_count": 947,
    "poster_path": "/rWxkur51srfVnMn2QOFjE7mbq6h.jpg",
    "genre_ids": [
      28,
      35,
      80,
      27
    ],
    "overview": "In a world where human beings and puppets live together, when the members of the cast of a children's television show aired during the 1990s begin to get murdered one by one, puppet Phil Philips, a former LAPD detective who fell in disgrace and turned into a private eye, takes on the case at the request of his old boss in order to assist detective Edwards, who was his partner in the past.",
    "release_date": "2018-08-22"
  },
  {
    "title": "The Whole Ten Yards",
    "vote_average": 5.724,
    "vote_count": 893,
    "poster_path": "/4fbglyCpPqK1u40fhncLXKAF74A.jpg",
    "genre_ids": [
      35,
      53,
      80
    ],
    "overview": "Jimmy \"The Tulip\" Tudeski now spends his days compulsively cleaning his house and perfecting his culinary skills with his wife, Jill, a purported assassin who has yet to pull off a clean hit. Suddenly, an uninvited and unwelcome connection to their past unexpectedly shows up on Jimmy and Jill's doorstep; it's Oz, and he's begging them to help him rescue his wife, Cynthia.",
    "release_date": "2004-04-07"
  },
  {
    "title": "The Getaway",
    "vote_average": 5.701,
    "vote_count": 308,
    "poster_path": "/4tWvZ4BQu3ICmtUL8lXHa9OgkoF.jpg",
    "genre_ids": [
      28,
      80,
      18,
      9648,
      10749,
      53
    ],
    "overview": "Doc McCoy is put in prison because his partners chickened out and flew off without him after exchanging a prisoner with a lot of money. Doc knows Jack Benyon, a rich \"business\"-man, is up to something big, so he tells his wife (Carol McCoy) to tell him that he's for sale if Benyon can get him out of prison. Benyon pulls some strings and Doc McCoy is released again. Unfortunately he has to cooperate with the same person that got him to prison.",
    "release_date": "1994-02-11"
  },
  {
    "title": "Exit Wounds",
    "vote_average": 5.693,
    "vote_count": 435,
    "poster_path": "/tGIJhBejmredgUZRNdteZyiahag.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Maverick cop Orin Boyd always brings down the domestic terrorists he tracks, but he ruffles feathers with his unorthodox techniques -- and soon finds himself reassigned to the toughest district in Detroit. When he discovers a group of detectives secretly operating a drug ring, Boyd joins forces with an unlikely ally -- gangster Latrell Walker -- to bring down the rotten cops.",
    "release_date": "2001-03-16"
  },
  {
    "title": "Armored",
    "vote_average": 5.683,
    "vote_count": 597,
    "poster_path": "/oQrAXGkBy84FyGpWrY71ptqs7zD.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53,
      9648
    ],
    "overview": "A crew of officers at an armored transport security firm risk their lives when they embark on the ultimate heist against their own company. Armed with a seemingly fool-proof plan, the men plan on making off with a fortune with harm to none. But when an unexpected witness interferes, the plan quickly unravels and all bets are off.",
    "release_date": "2009-12-04"
  },
  {
    "title": "Reindeer Games",
    "vote_average": 5.682,
    "vote_count": 603,
    "poster_path": "/mj9OYd0bL6iGcrk53G6981OCICG.jpg",
    "genre_ids": [
      53,
      28,
      80
    ],
    "overview": "After assuming his dead cellmate's identity to get with his girlfriend, an ex-con finds himself the reluctant participant in a casino heist.",
    "release_date": "2000-02-25"
  },
  {
    "title": "First Kill",
    "vote_average": 5.68,
    "vote_count": 523,
    "poster_path": "/zoia9YSg82UNYbtum9QYjKSqdLw.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "A police chief tries to solve a kidnapping that involves a bank robber holding a young boy hostage.",
    "release_date": "2017-07-21"
  },
  {
    "title": "The Art of War",
    "vote_average": 5.679,
    "vote_count": 450,
    "poster_path": "/m3DsrJC3qzm1GPzjDeb5dRXN6AF.jpg",
    "genre_ids": [
      80,
      28,
      12
    ],
    "overview": "When ruthless terrorists threaten to bring down the United Nations, they frame the one man they believe can stop them: an international security expert named Shaw. Now he must run from his own allies and become a solitary force for good, as he tries to stop what could become World War III.",
    "release_date": "2000-08-25"
  },
  {
    "title": "Mickey Blue Eyes",
    "vote_average": 5.678,
    "vote_count": 521,
    "poster_path": "/5nIqLKEhWdA2QpzyaI2sbsTPaxP.jpg",
    "genre_ids": [
      35,
      80,
      10749
    ],
    "overview": "An English auctioneer proposes to the daughter of a mafia kingpin, only to realize that certain \"favors\" would be asked of him.",
    "release_date": "1999-08-16"
  },
  {
    "title": "The Hurricane Heist",
    "vote_average": 5.676,
    "vote_count": 951,
    "poster_path": "/rAmcj5IZcx59dhev3UnVDEGlImK.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.",
    "release_date": "2018-02-28"
  },
  {
    "title": "Men at Work",
    "vote_average": 5.674,
    "vote_count": 341,
    "poster_path": "/6bd0rOeZtTmVJObOAXHXBMurvyt.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Two garbage men find the body of a city councilman in a trash can on their route. With help from a supervisor, the duo must solve the case and find the man's killer while hiding the body from the cops.",
    "release_date": "1990-08-24"
  },
  {
    "title": "The Tax Collector",
    "vote_average": 5.671,
    "vote_count": 432,
    "poster_path": "/3eg0kGC2Xh0vhydJHO37Sp4cmMt.jpg",
    "genre_ids": [
      28,
      80,
      18
    ],
    "overview": "David Cuevas is a family man who works as a gangland tax collector for high ranking Los Angeles gang members. He makes collections across the city with his partner Creeper making sure people pay up or will see retaliation. An old threat returns to Los Angeles that puts everything David loves in harm’s way.",
    "release_date": "2020-08-07"
  },
  {
    "title": "Fire with Fire",
    "vote_average": 5.67,
    "vote_count": 637,
    "poster_path": "/kziBJGQFo9f0Vkj9s37qI0G9I0I.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "A fireman takes an unexpected course of action when a man whom he's been ordered to testify against—after being held up at a local convenience store—threatens him.",
    "release_date": "2012-08-31"
  },
  {
    "title": "Momentum",
    "vote_average": 5.669,
    "vote_count": 506,
    "poster_path": "/49bPrxvgwUqEtvOfvTe3x92hEFV.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "When Alex, an infiltration expert with a secret past, accidentally reveals her identity during what should have been a routine heist, she quickly finds herself mixed up in a government conspiracy and entangled in a deadly game of cat-and-mouse with a master assassin and his team of killers.  Armed with her own set of lethal skills, Alex looks to exact revenge for her murdered friends while uncovering the truth.",
    "release_date": "2015-10-15"
  },
  {
    "title": "Bulletproof",
    "vote_average": 5.667,
    "vote_count": 544,
    "poster_path": "/gPzTPl5PumZurZMZwIyPIkBEmay.jpg",
    "genre_ids": [
      35,
      80,
      28
    ],
    "overview": "An undercover police officer named Rock Keats befriends a drug dealer and car thief named Archie Moses in a bid to catch the villainous drug lord Frank Coltan. But the only problem is that Keats is a cop, his real name is Jack Carter, and he is working undercover with the LAPD to bust Moses and Colton at a sting operation the LAPD has set up.",
    "release_date": "1996-09-06"
  },
  {
    "title": "Mara",
    "vote_average": 5.662,
    "vote_count": 352,
    "poster_path": "/gQDmXAef1Oc1SXci5mui2x5DJwt.jpg",
    "genre_ids": [
      80,
      27,
      53
    ],
    "overview": "Criminal psychologist Kate Fuller is assigned to the murder of a man who has seemingly been strangled in his sleep by his wife and the only witness is their eight-year-old daughter, Sophie. As Kate digs into the mystery of an ancient demon which kills people in their sleep, she experiences the same petrifying symptoms as all previous victims and spirals through a chilling nightmare to save herself and Sophie before she dares fall asleep again.",
    "release_date": "2018-08-22"
  },
  {
    "title": "Survivor",
    "vote_average": 5.659,
    "vote_count": 958,
    "poster_path": "/npyCpfYyYknFoY2iJPyfqp70FVX.jpg",
    "genre_ids": [
      28,
      80,
      9648,
      53
    ],
    "overview": "A Foreign Service Officer in London tries to prevent a terrorist attack set to hit New York, but is forced to go on the run when she is framed for crimes she did not commit.",
    "release_date": "2015-05-21"
  },
  {
    "title": "Acts of Violence",
    "vote_average": 5.658,
    "vote_count": 383,
    "poster_path": "/pK9CugRd3DIP0THBH8WlGrvk5vy.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "When his fiancee is kidnapped by human traffickers, Roman and his ex-military brothers set out to track her down and save her before it is too late. Along the way, Roman teams up with Avery, a cop investigating human trafficking and fighting the corrupt bureaucracy that has harmful intentions.",
    "release_date": "2018-01-12"
  },
  {
    "title": "Pathology",
    "vote_average": 5.655,
    "vote_count": 435,
    "poster_path": "/tK9DvIwAuX5AExgEZqLCnf7qy5k.jpg",
    "genre_ids": [
      80,
      27,
      53
    ],
    "overview": "Medical student Ted Grey graduates at the top of his class and quickly joins an elite pathology program, whose top students invite him into their circle. There he uncovers a gruesome secret: They play a game in which one tries to commit the perfect, undetectable murder, then the others compete to determine the victim's cause of death.",
    "release_date": "2008-04-11"
  },
  {
    "title": "Q",
    "vote_average": 5.653,
    "vote_count": 340,
    "poster_path": "/hm5mvCN7IMAFjtkQwL4U1qwoJ4c.jpg",
    "genre_ids": [
      80,
      27,
      9648
    ],
    "overview": "New York police are bemused by reports of a giant flying lizard that has been spotted around the rooftops of New York, until the lizard starts to eat people. An out-of-work ex-con is the only person who knows the location of the monster's nest and is determined to turn the knowledge to his advantage, but will his gamble pay off or will he end up as lizard food?",
    "release_date": "1982-09-08"
  },
  {
    "title": "Metro",
    "vote_average": 5.651,
    "vote_count": 512,
    "poster_path": "/nvfyHYv1EDpYai5pCGqBeRf3tax.jpg",
    "genre_ids": [
      28,
      12,
      35,
      80,
      53
    ],
    "overview": "Roper, a hostage negotiator catches a murderous bank robber after a blown heist. The bank robber escapes and immediately goes after the man who put him behind bars.",
    "release_date": "1997-01-16"
  },
  {
    "title": "Runner Runner",
    "vote_average": 5.642,
    "vote_count": 1178,
    "poster_path": "/ck5jZjv7WVoCBBgTH1gJlhyCLPy.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "overview": "When a poor college student who cracks an online poker game goes bust, he arranges a face-to-face with the man he thinks cheated him, a sly offshore entrepreneur.",
    "release_date": "2013-09-24"
  },
  {
    "title": "Wild Card",
    "vote_average": 5.6,
    "vote_count": 1653,
    "poster_path": "/zN80Tlly8oMpKbVJv2TfRIj8dHG.jpg",
    "genre_ids": [
      53,
      80,
      28
    ],
    "overview": "When a Las Vegas bodyguard with lethal skills and a gambling problem gets in trouble with the mob, he has one last play… and it's all or nothing.",
    "release_date": "2015-01-14"
  },
  {
    "title": "The Maiden Heist",
    "vote_average": 5.633,
    "vote_count": 311,
    "poster_path": "/vrp0dqlp74A02YaUiwNpLElgTR0.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "A comedy centered on three museum security guards who devise a plan to steal back the artworks to which they have become attached after they are transferred to another museum.",
    "release_date": "2009-05-09"
  },
  {
    "title": "The Black Dahlia",
    "vote_average": 5.616,
    "vote_count": 1023,
    "poster_path": "/su7yuXqGUHICfoijtcSaxWLE34Y.jpg",
    "genre_ids": [
      80,
      53,
      18
    ],
    "overview": "In 1940s Los Angeles, two former boxers-turned-cops must grapple with corruption, narcissism, stag films and family madness as they pursue the killer of an aspiring young actress.",
    "release_date": "2006-09-15"
  },
  {
    "title": "El Camino Christmas",
    "vote_average": 5.608,
    "vote_count": 300,
    "poster_path": "/74FjQrZ9SSkfh3rts4PXm9wArqd.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "A young man seeking a father he has never met, through no fault of his own, ends up barricaded in a liquor store with five other people on Christmas Eve in the fictitious town of El Camino, NV.",
    "release_date": "2017-12-08"
  },
  {
    "title": "Machete Kills",
    "vote_average": 5.6,
    "vote_count": 1795,
    "poster_path": "/3i4UgSZmAJXt6Euy5azvknmzsm9.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Ex-Federale agent Machete is recruited by the President of the United States for a mission which would be impossible for any mortal man – he must take down a madman revolutionary and an eccentric billionaire arms dealer who has hatched a plan to spread war and anarchy across the planet.",
    "release_date": "2013-09-12"
  },
  {
    "title": "Sabotage",
    "vote_average": 5.589,
    "vote_count": 1329,
    "poster_path": "/f5L0WlOAzFiKTOGNZTcKkEJ4iOT.jpg",
    "genre_ids": [
      28,
      18,
      53,
      80
    ],
    "overview": "John \"Breacher\" Wharton leads an elite DEA task force that takes on the world's deadliest drug cartels. When the team successfully executes a high-stakes raid on a cartel safe house, they think their work is done – until, one-by-one, the team members mysteriously start to be eliminated. As the body count rises, everyone is a suspect.",
    "release_date": "2014-03-28"
  },
  {
    "title": "Saving Silverman",
    "vote_average": 5.586,
    "vote_count": 488,
    "poster_path": "/5mq8J11266ZL7HCOwDGXoaU6eIO.jpg",
    "genre_ids": [
      35,
      80,
      10749
    ],
    "overview": "A pair of buddies conspire to save their best friend from marrying the wrong woman, a cold-hearted beauty who snatches him from them and breaks up their Neil Diamond cover band.",
    "release_date": "2001-02-09"
  },
  {
    "title": "Bullet to the Head",
    "vote_average": 5.585,
    "vote_count": 1188,
    "poster_path": "/arJfxShfuZPhqfBZZU6DkPZfnjn.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "After watching their respective partners die, a cop and a hitman form an alliance in order to bring down their common enemy.",
    "release_date": "2013-01-31"
  },
  {
    "title": "Taxi",
    "vote_average": 5.583,
    "vote_count": 998,
    "poster_path": "/eLDoNLJHZPcavTT1vJqZoGydoWB.jpg",
    "genre_ids": [
      28,
      35,
      53,
      80
    ],
    "overview": "A mouthy and feisty taxicab driver has hot tips for a green and inept cop set on solving a string of New York City bank robberies committed by a quartet of female Brazilian bank robbers.",
    "release_date": "2004-10-06"
  },
  {
    "title": "See You Yesterday",
    "vote_average": 5.579,
    "vote_count": 505,
    "poster_path": "/d5uA1DdiWK5KH5yzyMfh1X3uXie.jpg",
    "genre_ids": [
      878,
      18,
      12,
      80,
      28
    ],
    "overview": "As two teen prodigies try to master the art of time travel, a tragic police shooting sends them on a series of dangerous trips to the past.",
    "release_date": "2019-05-03"
  },
  {
    "title": "The Green Hornet",
    "vote_average": 5.577,
    "vote_count": 3036,
    "poster_path": "/q1fXWEoZXogYjAUy32pUc6NL2IH.jpg",
    "genre_ids": [
      28,
      80,
      35
    ],
    "overview": "Britt Reid, the heir to the largest newspaper fortune in Los Angeles, is a spoiled playboy who has been, thus far, happy to lead an aimless life. After his father dies, Britt meets Kato, a resourceful company employee. Realizing that they have the talent and resources to make something of their lives, Britt and Kato join forces as costumed crime-fighters to bring down the city's most-powerful criminal, Chudnofsky.",
    "release_date": "2011-01-12"
  },
  {
    "title": "On the Other Side of the Tracks",
    "vote_average": 5.576,
    "vote_count": 634,
    "poster_path": "/lJSNu2WJ5PGuEnyD8mfSVp5yY0H.jpg",
    "genre_ids": [
      35,
      28,
      80
    ],
    "overview": "Two mismatched cops team up to investigate the murder of a business mogul's wife.",
    "release_date": "2012-12-15"
  },
  {
    "title": "7 Women and a Murder",
    "vote_average": 5.568,
    "vote_count": 315,
    "poster_path": "/iz2tpJJgSDBS646VYhmNkUmot4l.jpg",
    "genre_ids": [
      35,
      9648,
      80
    ],
    "overview": "When the family patriarch is killed, seven women, each with ulterior motives, find themselves trapped together in a mansion to solve the mystery of his murder.",
    "release_date": "2021-12-25"
  },
  {
    "title": "The Juror",
    "vote_average": 5.568,
    "vote_count": 344,
    "poster_path": "/31mRYhJvaknQx8PQnR2UV7YCkLT.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "With his gangster boss on trial for murder, a mob thug known as \"the Teacher\" tells Annie Laird she must talk her fellow jurors into a not-guilty verdict, implying that he'll kill her son Oliver if she fails. She manages to do this, but, when it becomes clear that the mobsters might want to silence her for good, she sends Oliver abroad and tries to gather evidence of the plot against her, setting up a final showdown.",
    "release_date": "1996-02-02"
  },
  {
    "title": "Inconceivable",
    "vote_average": 5.566,
    "vote_count": 316,
    "poster_path": "/ubGjD2DK6Fi4IC5xRc3aEDwVD9i.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A mother looks to escape her abusive past by moving to a new town where she befriends another mother, who grows suspicious of her.",
    "release_date": "2017-06-30"
  },
  {
    "title": "Whiteout",
    "vote_average": 5.564,
    "vote_count": 696,
    "poster_path": "/kkXXA3353MX60B8PRSkTGRabxXu.jpg",
    "genre_ids": [
      28,
      80,
      9648,
      53
    ],
    "overview": "The only U.S. Marshal assigned to Antarctica, Carrie Stetko will soon leave the harsh environment behind for good – in three days, the sun will set and the Amundsen-Scott Research Station will shut down for the long winter. When a body is discovered out on the open ice, Carrie's investigation into the continent's first homicide plunges her deep into a mystery that may cost her her own life.",
    "release_date": "2009-09-09"
  },
  {
    "title": "I Am Wrath",
    "vote_average": 5.553,
    "vote_count": 597,
    "poster_path": "/6NvLA3BP5ktLaZ1qdLY0oHsaqwD.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "A man is out for justice after a group of corrupt police officers are unable to catch his wife's killer.",
    "release_date": "2016-04-14"
  },
  {
    "title": "Cop Out",
    "vote_average": 5.55,
    "vote_count": 1413,
    "poster_path": "/qA31i7FPVDHezuoevx3497CvZd4.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "Detectives Jimmy and Paul, despite nine years as partners, can still sometimes seem like polar opposites—especially when Paul's unpredictable antics get them suspended without pay. Already strapped for cash and trying to pay for his daughter's wedding, Jimmy decides to sell a rare baseball card that's worth tens of thousands. Unfortunately, when the collector's shop is robbed and the card vanishes with the crook, Paul and Jimmy end up going rogue, tracking down the card and the drug ring behind its theft, all on their own time and without any backup—except for each other.",
    "release_date": "2010-02-26"
  },
  {
    "title": "Striptease",
    "vote_average": 5.55,
    "vote_count": 1005,
    "poster_path": "/edkpT3vgjEjVrF461AbIwZgkvC7.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "Bounced from her job, Erin Grant needs money if she's to have any chance of winning back custody of her child. But, eventually, she must confront the naked truth: to take on the system, she'll have to take it all off. Erin strips to conquer, but she faces unintended circumstances when a hound dog of a Congressman zeroes in on her and sharpens the shady tools at his fingertips, including blackmail and murder.",
    "release_date": "1996-06-28"
  },
  {
    "title": "One for the Money",
    "vote_average": 5.548,
    "vote_count": 923,
    "poster_path": "/eeltLl5jLUl9d96tpKkCAWu4JWu.jpg",
    "genre_ids": [
      28,
      35,
      80
    ],
    "overview": "An unemployed lingerie buyer convinces her bail bondsman cousin to give her a shot as a bounty hunter. Her first assignment is to track down a former cop on the run for murder – the same man who broke her heart years before. With the help of some friends and the best bounty hunter in the business, she slowly learns what it takes to be a true bounty hunter.",
    "release_date": "2012-01-26"
  },
  {
    "title": "Twisted",
    "vote_average": 5.548,
    "vote_count": 482,
    "poster_path": "/nfdfU9tYsEnjlFGoY2HabFMdHLi.jpg",
    "genre_ids": [
      28,
      12,
      80,
      18,
      53
    ],
    "overview": "Recently promoted and transferred to the homicide division, Inspector Jessica Shepard feels pressure to prove herself -- and what better way than by solving San Francisco's latest murder? However, as Shepard and her partner, Mike Delmarco, soon discover, the victim shared a romantic connection to her. As more of Shepard's ex-lovers turn up dead, her mind starts to become unstable, and she begins to wonder if she could be the very killer she's trying to track down.",
    "release_date": "2004-02-27"
  },
  {
    "title": "Big Mommas: Like Father, Like Son",
    "vote_average": 5.537,
    "vote_count": 1156,
    "poster_path": "/n1GSxFcDaZ6lMVf21M0KloPfuhu.jpg",
    "genre_ids": [
      80,
      35,
      28
    ],
    "overview": "FBI agent Malcolm Turner and his 17-year-old son, Trent, go undercover at an all-girls performing arts school after Trent witnesses a murder. Posing as Big Momma and Charmaine, they must find the murderer before he finds them.",
    "release_date": "2011-02-16"
  },
  {
    "title": "Spinning Man",
    "vote_average": 5.536,
    "vote_count": 401,
    "poster_path": "/lb73nmpv97C4C5WXoxTE0DD7ptU.jpg",
    "genre_ids": [
      9648,
      53,
      80
    ],
    "overview": "Evan Birch is a family man and esteemed professor at a distinguished university. When a female student goes missing, police Detective Malloy has reason to be suspicious when crucial evidence makes Evan the prime suspect in her disappearance.",
    "release_date": "2018-04-06"
  },
  {
    "title": "Terminal",
    "vote_average": 5.5,
    "vote_count": 742,
    "poster_path": "/xi7pA3lL6Wb78p6Y6PgWoHDMjrM.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "In the dark heart of a sprawling, anonymous city, two assassins carry out a sinister mission, a teacher battles a fatal illness, and an enigmatic janitor and a curious waitress lead dangerous double lives.  Murderous consequences unravel in the dead of night, as their lives intertwine at the hands of a mysterious criminal mastermind who is hell-bent on revenge.",
    "release_date": "2018-05-10"
  },
  {
    "title": "The Transporter Refueled",
    "vote_average": 5.511,
    "vote_count": 1403,
    "poster_path": "/71kaQfdrMy0LHSeLRADsvlDGCgb.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "overview": "The fast-paced action movie is again set in the criminal underworld in France, where Frank Martin is known as The Transporter, because he is the best driver and mercenary money can buy. In this installment, he meets Anna and they attempt to take down a group of ruthless Russian human traffickers who also have kidnapped Frank’s father.",
    "release_date": "2015-09-02"
  },
  {
    "title": "Virtuosity",
    "vote_average": 5.502,
    "vote_count": 496,
    "poster_path": "/5emgnXYrXjqyiup2JsvtuENseiV.jpg",
    "genre_ids": [
      28,
      80,
      878,
      53
    ],
    "overview": "The Law Enforcement Technology Advancement Centre (LETAC) has developed SID version 6.7: a Sadistic, Intelligent, and Dangerous virtual reality entity which is synthesized from the personalities of more than 150 serial killers, and only one man can stop him.",
    "release_date": "1995-08-04"
  },
  {
    "title": "Coffee & Kareem",
    "vote_average": 5.5,
    "vote_count": 385,
    "poster_path": "/jFzPMOJrjZfwCxllm3IIEKN7ceF.jpg",
    "genre_ids": [
      35,
      28,
      80
    ],
    "overview": "A Detroit cop reluctantly teams with his girlfriend's 11-year-old son to clear his name and take down the city's most ruthless criminal.",
    "release_date": "2020-04-03"
  },
  {
    "title": "Police Academy 4: Citizens on Patrol",
    "vote_average": 5.489,
    "vote_count": 1073,
    "poster_path": "/vvk5aWBJE3EqDX2ln6M4J4UiUXr.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "A new batch of recruits arrives at Police Academy, this time a group of civilian volunteers who have joined Commandant Lassard's new Citizens on Patrol program. Although the community relations project has strong governmental support, a disgusted Captain Harris is determined to see it fail.",
    "release_date": "1987-04-02"
  },
  {
    "title": "Gambit",
    "vote_average": 5.5,
    "vote_count": 626,
    "poster_path": "/6KOHKBa6toWdGOKHkzmLGjlOLdS.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "An art curator decides to seek revenge on his abusive boss by conning him into buying a fake Monet, but his plan requires the help of an eccentric and unpredictable Texas rodeo queen.",
    "release_date": "2012-04-25"
  },
  {
    "title": "Good People",
    "vote_average": 5.48,
    "vote_count": 434,
    "poster_path": "/zNhzWvhOJ18Twl5oKanVWT7bcSk.jpg",
    "genre_ids": [
      53,
      80,
      28
    ],
    "overview": "Tom and Anna Wright, a young American couple, fall into severe debt while renovating Anna's family home in London. As the couple faces the loss of their dream to have a house and start a family, they discover that the tenant in the apartment below them is dead, and he's left behind a stash of cash—$400,000 worth. Though initially hesitant, Tom and Anna decide that the plan is simple: all they have to do is quietly take the money and use only what's necessary to get them out of debt. But when they start spending the money and can't seem to stop, they find themselves the target of a deadly adversary—the thief who stole it—and that's when very bad things start happening to good people.",
    "release_date": "2014-08-12"
  },
  {
    "title": "King of Thieves",
    "vote_average": 5.473,
    "vote_count": 392,
    "poster_path": "/rtfS7y2XQ0vjTrm6khq508N0Ehk.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "London, England, April 2015. Brian Reader, a retired thief, gathers an unlikely gang of burglars to perpetrate the biggest and boldest heist in British history. The thieves assault the Hatton Garden Safe Deposit Company and escape with millions in goods and money. But soon the cracks between the gang members begin to appear when they discuss how to share the loot.",
    "release_date": "2018-09-04"
  },
  {
    "title": "Drive Angry",
    "vote_average": 5.472,
    "vote_count": 1725,
    "poster_path": "/g0hQNqLkPZC5wOnNhzUH0KvPda4.jpg",
    "genre_ids": [
      14,
      53,
      28,
      80
    ],
    "overview": "Milton is a hardened felon who has broken out of Hell, intent on finding the vicious cult who brutally murdered his daughter and kidnapped her baby. He joins forces with a sexy, tough-as-nails waitress, who's also seeking redemption of her own. Caught in a deadly race against time, Milton has three days to avoid capture, avenge his daughter's death, and save her baby before she's mercilessly sacrificed by the cult.",
    "release_date": "2011-02-24"
  },
  {
    "title": "The Butterfly Effect 3: Revelations",
    "vote_average": 5.472,
    "vote_count": 522,
    "poster_path": "/7utgDyfae053YExAuUKcwkzUKMs.jpg",
    "genre_ids": [
      878,
      53,
      18,
      80
    ],
    "overview": "The story revolves around a man trying to uncover the mysterious death of his girlfriend and save an innocent man from the death chamber in the process, by using his unique power to time travel. However in attempting to do this, he also frees a spiteful serial-killer.",
    "release_date": "2009-01-09"
  },
  {
    "title": "Blackhat",
    "vote_average": 5.471,
    "vote_count": 1920,
    "poster_path": "/7zu6HPnKPjNA7NuR4DGRdaH0PdX.jpg",
    "genre_ids": [
      80,
      53,
      28
    ],
    "overview": "Nicholas Hathaway, a furloughed convict, and his American and Chinese partners hunt a high-level cybercrime network from Chicago to Los Angeles to Hong Kong to Jakarta. As Hathaway closes in, the stakes become personal as he discovers that the attack on a Chinese nuclear power plant was just the beginning.",
    "release_date": "2015-01-13"
  },
  {
    "title": "A Serbian Film",
    "vote_average": 5.47,
    "vote_count": 1783,
    "poster_path": "/yIQqiw3Az5QYNHLCUoCTtxXH24G.jpg",
    "genre_ids": [
      80,
      27,
      53
    ],
    "overview": "Milos, a retired porn star, leads a normal family life trying to make ends meet. Presented with the opportunity of a lifetime to financially support his family for the rest of their lives, Milos must participate in one last mysterious film. From then on, Milos is drawn into a maelstrom of unbelievable cruelty and mayhem.",
    "release_date": "2010-06-16"
  },
  {
    "title": "Proud Mary",
    "vote_average": 5.464,
    "vote_count": 472,
    "poster_path": "/5luceoVMU2FzWuyty7mZFcSY5ZW.jpg",
    "genre_ids": [
      53,
      28,
      80
    ],
    "overview": "Mary is a hit woman working for an organized crime family in Boston, whose life is completely turned around when she meets a young boy whose path she crosses when a professional hit goes bad.",
    "release_date": "2018-01-12"
  },
  {
    "title": "Rampart",
    "vote_average": 5.464,
    "vote_count": 335,
    "poster_path": "/wUlYwDmkytszsDvyIPn66pdqgZe.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "The story follows veteran police officer Dave Brown, the last of the renegade cops, as he struggles to take care of his family, and fights for his own survival.",
    "release_date": "2011-11-23"
  },
  {
    "title": "Observe and Report",
    "vote_average": 5.46,
    "vote_count": 626,
    "poster_path": "/z2wcS9UbUfJIn6xAzs1ZdGCGCnQ.jpg",
    "genre_ids": [
      35,
      80,
      18
    ],
    "overview": "Mall security guard Ronnie Barnhardt is called into action to stop a flasher from turning shopper's paradise into his personal peep show. But when Barnhardt can't bring the culprit to justice, a surly police detective is recruited to close the case.",
    "release_date": "2009-04-10"
  },
  {
    "title": "The Assignment",
    "vote_average": 5.455,
    "vote_count": 475,
    "poster_path": "/egFJGvUy7G5trYjY2ufrSSNTtLJ.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Ace assassin Frank Kitchen is double crossed by gangsters and falls into the hands of rogue surgeon known as The Doctor who turns him into a woman. The hitman, now a hitwoman, sets out for revenge, aided by a nurse named Johnnie who also has secrets.",
    "release_date": "2016-06-08"
  },
  {
    "title": "Be Cool",
    "vote_average": 5.4,
    "vote_count": 823,
    "poster_path": "/ekKCH7Zkb5ZTr1f1AczZY23FH.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Disenchanted with the movie industry, Chili Palmer tries the music industry, meeting and romancing a widow of a music executive along the way.",
    "release_date": "2005-03-04"
  },
  {
    "title": "Snakes on a Plane",
    "vote_average": 5.438,
    "vote_count": 1652,
    "poster_path": "/9wqWQ5rXQG6daMpowqwadGjI768.jpg",
    "genre_ids": [
      28,
      80,
      53,
      12
    ],
    "overview": "America is on the search for the murderer Eddie Kim. Sean Jones must fly to L.A. to testify in a hearing against Kim. Accompanied by FBI agent Neville Flynn, the flight receives some unexpected visitors.",
    "release_date": "2006-08-17"
  },
  {
    "title": "The Glimmer Man",
    "vote_average": 5.429,
    "vote_count": 354,
    "poster_path": "/fMXc2nf3iZFsVbNNmJ5MCtjcwlk.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "A former government operative renowned for his stealth, Jack Cole is now a Los Angeles police detective. When a series of horrible murders occurs in the metro area, Cole is assigned to the case, along with tough-talking fellow cop Jim Campbell. Although the two men clash, they gradually become effective partners as they uncover a conspiracy linked to the killings, which also involves terrorism and organized crime.",
    "release_date": "1996-10-04"
  },
  {
    "title": "Teaching Mrs. Tingle",
    "vote_average": 5.423,
    "vote_count": 308,
    "poster_path": "/hHKiifRFrC0IM7Ba2HX3sAjnSBr.jpg",
    "genre_ids": [
      35,
      80,
      27
    ],
    "overview": "A bright high-school senior has her impending status as valedictorian jeopardized when her bitter history teacher, Mrs. Tingle, gives her a poor grade on a project.  When an attempt to get ahead in Mrs. Tingle's class goes awry, mayhem ensues and friendships, loyalties and trust are tested by the teacher's intricate mind-games.",
    "release_date": "1999-08-11"
  },
  {
    "title": "Batman Forever",
    "vote_average": 5.415,
    "vote_count": 4862,
    "poster_path": "/mzzNBVwTiiY94xAXDMWJpNPW2US.jpg",
    "genre_ids": [
      28,
      80,
      14
    ],
    "overview": "Batman must battle a disfigured district attorney and a disgruntled former employee with help from an amorous psychologist and a young circus acrobat.",
    "release_date": "1995-06-16"
  },
  {
    "title": "Stolen",
    "vote_average": 5.414,
    "vote_count": 960,
    "poster_path": "/9UDl3jgTsITaaIJw8nlo9TdW7if.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Master thief Will Montgomery is just released from the State penitentiary after serving a 10 year sentence, is contacted by Vincent, his ex comrade in crime, who is holding Will’s teenage daughter ransom in a hijacked taxi cab. Vincent will only surrender her when Will reveals the whereabouts of the 20 million dollars he contrived to conceal from their last robbery.",
    "release_date": "2012-09-06"
  },
  {
    "title": "The Bling Ring",
    "vote_average": 5.4,
    "vote_count": 2917,
    "poster_path": "/tYLHIM8LIhqCYKS2wdaIOX8tetf.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "Inspired by actual events, a group of fame-obsessed teenagers use the Internet to track celebrities' whereabouts in order to rob their homes.",
    "release_date": "2013-06-12"
  },
  {
    "title": "Bad Santa 2",
    "vote_average": 5.4,
    "vote_count": 733,
    "poster_path": "/xmsEwpA2fSq6IO3sfKrLuIPLHSc.jpg",
    "genre_ids": [
      35,
      80,
      18,
      9648
    ],
    "overview": "Fueled by cheap whiskey, greed and hatred, Willie Soke teams up with his angry little sidekick, Marcus, to knock off a Chicago charity on Christmas Eve. Along for the ride is chubby and cheery Thurman Merman, a 250-pound ray of sunshine who brings out Willie's sliver of humanity. Issues arise when the pair are joined by Willie's horror story of a mother, who raises the bar for the gang's ambitions, while somehow lowering the standards of criminal behavior.",
    "release_date": "2016-11-23"
  },
  {
    "title": "211",
    "vote_average": 5.394,
    "vote_count": 420,
    "poster_path": "/81RColr4rau6DZ7z9eMsksokcfk.jpg",
    "genre_ids": [
      80,
      28,
      53
    ],
    "overview": "Inspired by one of the longest and bloodiest real-life events in police history, Officer Mike Chandler and a young civilian passenger find themselves under-prepared and outgunned when fate puts them squarely in the crosshairs of a daring bank heist in progress by a fearless team of highly-trained and heavily-armed men.",
    "release_date": "2018-05-30"
  },
  {
    "title": "Hold the Dark",
    "vote_average": 5.382,
    "vote_count": 887,
    "poster_path": "/1etEySwZQnBJpzgplgadPi5y4PL.jpg",
    "genre_ids": [
      53,
      9648,
      80
    ],
    "overview": "In the grim Alaskan winter, a naturalist hunts for wolves blamed for killing a local boy, but he soon finds himself swept into a chilling mystery.",
    "release_date": "2018-09-22"
  },
  {
    "title": "Home Sweet Hell",
    "vote_average": 5.379,
    "vote_count": 421,
    "poster_path": "/vETciJiWTLD0AdDHUANb8HkFdJ5.jpg",
    "genre_ids": [
      80,
      35,
      53
    ],
    "overview": "Don Champagne seems to have it all, but when his wife, Mona, learns of his affair with a pretty new salesgirl, she will stop at nothing to maintain their storybook life.",
    "release_date": "2015-03-13"
  },
  {
    "title": "Windfall",
    "vote_average": 5.377,
    "vote_count": 377,
    "poster_path": "/njBc0nNdl9QbsfMwyRqJkmW4NQO.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "A man breaks into a tech billionaire's empty vacation home, but things go sideways when the arrogant mogul and his wife arrive for a last-minute getaway.",
    "release_date": "2022-03-11"
  },
  {
    "title": "Tekken",
    "vote_average": 5.375,
    "vote_count": 643,
    "poster_path": "/1xO2LirDZstkqZic1FwfK6GJIHH.jpg",
    "genre_ids": [
      80,
      18,
      28,
      53,
      878
    ],
    "overview": "In the year of 2039, after World Wars destroy much of the civilization as we know it, territories are no longer run by governments, but by corporations; the mightiest of which is the Mishima Zaibatsu. In order to placate the seething masses of this dystopia, Mishima sponsors Tekken, a tournament in which fighters battle until only one is left standing.",
    "release_date": "2010-03-20"
  },
  {
    "title": "Max Payne",
    "vote_average": 5.367,
    "vote_count": 1933,
    "poster_path": "/3cWnCG5NyXJYARO2hmNqfbbgrMA.jpg",
    "genre_ids": [
      80,
      28,
      18,
      53
    ],
    "overview": "A DEA agent whose family was slain as part of a conspiracy, and an assassin out to avenge her sister's death, join forces to solve a series of murders in New York City.",
    "release_date": "2008-10-15"
  },
  {
    "title": "Escape Plan: The Extractors",
    "vote_average": 5.4,
    "vote_count": 779,
    "poster_path": "/r15SUgzjL8bablcdEkHk9T7TSRl.jpg",
    "genre_ids": [
      28,
      12,
      80,
      53
    ],
    "overview": "After security expert Ray Breslin is hired to rescue the kidnapped daughter of a Hong Kong tech mogul from a formidable Latvian prison, Breslin's girlfriend is also captured. Now he and his team must pull off a deadly rescue mission to confront their sadistic foe and save the hostages before time runs out.",
    "release_date": "2019-06-20"
  },
  {
    "title": "The Bag Man",
    "vote_average": 5.329,
    "vote_count": 325,
    "poster_path": "/iWVuYsgZYhtDVroaxu6zCF5FA63.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A criminal waits in a seedy motel for his boss after killing several men to steal a bag.",
    "release_date": "2014-02-28"
  },
  {
    "title": "Gotti",
    "vote_average": 5.326,
    "vote_count": 576,
    "poster_path": "/q869M8MTy0eynwfiE5vIlFgAUze.jpg",
    "genre_ids": [
      80,
      18,
      36,
      53
    ],
    "overview": "John Gotti rises to the top of the New York underworld to become the boss of the Gambino crime family. His life takes a tumultuous turn as he faces tragedy, multiple trials and a prison sentence.",
    "release_date": "2018-06-14"
  },
  {
    "title": "Knock Off",
    "vote_average": 5.325,
    "vote_count": 326,
    "poster_path": "/hK7hKDA51FCbtFCuXZNiQ6gPq3S.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "Marcus Ray, a sales representative for \"V SIX\" jeans, and his partner, Tommy Hendricks, are about to be busted for selling \"knock off\" jeans. Their American contact, Karan Leigh, who by the way is not only their employer but a CIA agent sent to find the mole in their operation, is threatening them with a jail term if they do not prove their innocence.",
    "release_date": "1998-09-04"
  },
  {
    "title": "Arsène Lupin",
    "vote_average": 5.309,
    "vote_count": 312,
    "poster_path": "/qWx7MN0fvqXPUO2Ebc1r3f0MMc8.jpg",
    "genre_ids": [
      10749,
      28,
      12,
      80,
      9648
    ],
    "overview": "As the daring thief Arsène Lupin ransacks the homes of wealthy Parisians, the police, with a secret weapon in their arsenal, attempt to ferret him out.",
    "release_date": "2004-09-17"
  },
  {
    "title": "Blues Brothers 2000",
    "vote_average": 5.308,
    "vote_count": 623,
    "poster_path": "/nCoY8UK2x4DWpICipL40Hg4cDmO.jpg",
    "genre_ids": [
      10402,
      28,
      35,
      80
    ],
    "overview": "Finally released from prison, Elwood Blues is once again enlisted by Sister Mary Stigmata in her latest crusade to raise funds for a children's hospital. Hitting the road to re-unite the band and win the big prize at the New Orleans Battle of the Bands, Elwood is pursued cross-country by the cops.",
    "release_date": "1998-02-05"
  },
  {
    "title": "November Criminals",
    "vote_average": 5.295,
    "vote_count": 576,
    "poster_path": "/m2JxGgarPvtemudLZ1CB6gLJeUb.jpg",
    "genre_ids": [
      80,
      18,
      9648,
      53
    ],
    "overview": "When Addison investigates the murder of his friend Kevin with the help of Phoebe, they discover that the truth is darker than they had ever imagined.",
    "release_date": "2017-11-07"
  },
  {
    "title": "Kangaroo Jack",
    "vote_average": 5.279,
    "vote_count": 875,
    "poster_path": "/nflh9On0de4l7ItCl3n4NVXjmnm.jpg",
    "genre_ids": [
      28,
      12,
      35,
      10751,
      80
    ],
    "overview": "Two childhood friends — a New York hairstylist and a wanna-be musician — get mixed-up with the mob and are forced to deliver $50,000 to Australia, but things go all wrong when the money is lost to a wild kangaroo.",
    "release_date": "2003-01-17"
  },
  {
    "title": "The Counselor",
    "vote_average": 5.269,
    "vote_count": 1750,
    "poster_path": "/aNiLkGnzVb5CorZHKk16w9S4COt.jpg",
    "genre_ids": [
      53,
      80,
      18
    ],
    "overview": "A lawyer finds himself in far over his head when he attempts to get involved in drug trafficking.",
    "release_date": "2013-10-25"
  },
  {
    "title": "Rage",
    "vote_average": 5.263,
    "vote_count": 698,
    "poster_path": "/1pC6xTd15iLIs5De7JKQfrDmKyd.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "When the Russian mob kidnaps the daughter of a reformed criminal, he rounds up his old crew and seeks his own brand of justice.",
    "release_date": "2014-05-09"
  },
  {
    "title": "And Soon the Darkness",
    "vote_average": 5.241,
    "vote_count": 350,
    "poster_path": "/jucoq5jnIwS44ykgLEgCdYD3B0K.jpg",
    "genre_ids": [
      27,
      53,
      80,
      9648
    ],
    "overview": "When two American girls on a bike trip in a remote part of Argentina split up and one of them goes missing, the other must find her before her worst fears are realized.",
    "release_date": "2010-02-25"
  },
  {
    "title": "Passion",
    "vote_average": 5.234,
    "vote_count": 389,
    "poster_path": "/o9DoB4Rsuc8wdkSZCJWB6fq9QPP.jpg",
    "genre_ids": [
      53,
      18,
      80,
      9648
    ],
    "overview": "The rivalry between the manipulative boss of an advertising agency and her talented protégée escalates from stealing credit to public humiliation to murder.",
    "release_date": "2012-09-07"
  },
  {
    "title": "Balls of Fury",
    "vote_average": 5.2,
    "vote_count": 490,
    "poster_path": "/obrDHxgyGcrbCpKbfsqOICeYy7S.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Randy Daytona was a child ping pong prodigy who lost his chance at Olympic gold when his father is murdered by the mysterious Feng over a gambling debt. 15yrs later he's down on his luck and scraping a living doing seedy back room shows in Vegas; when the FBI turn up and ask for his help to take down Feng... who just happens to love Ping Pong.",
    "release_date": "2007-08-29"
  },
  {
    "title": "Force of Nature",
    "vote_average": 5.225,
    "vote_count": 478,
    "poster_path": "/ucktgbaMSaETUDLUBp1ubGD6aNj.jpg",
    "genre_ids": [
      28,
      12,
      80,
      53
    ],
    "overview": "A gang of thieves plan a heist during a hurricane and encounter trouble when a disgraced cop tries to force everyone in the building to evacuate.",
    "release_date": "2020-07-02"
  },
  {
    "title": "Spring Breakers",
    "vote_average": 5.221,
    "vote_count": 3664,
    "poster_path": "/h3ufD3KszAl19r1gBv5wgvw4xpn.jpg",
    "genre_ids": [
      18,
      80
    ],
    "overview": "After four college girls rob a restaurant to fund their spring break in Florida, they get entangled with a weird dude with his own criminal agenda.",
    "release_date": "2013-01-24"
  },
  {
    "title": "The Snowman",
    "vote_average": 5.205,
    "vote_count": 2133,
    "poster_path": "/mKsQ8KMOk0VBX26Ev0Lj6EmfGJu.jpg",
    "genre_ids": [
      80,
      53
    ],
    "overview": "Detective Harry Hole investigates the disappearance of a woman whose pink scarf is found wrapped around an ominous looking snowman.",
    "release_date": "2017-10-12"
  },
  {
    "title": "Alex Cross",
    "vote_average": 5.185,
    "vote_count": 680,
    "poster_path": "/bQYXid9o6nunJBgmmjo6JFIQe1p.jpg",
    "genre_ids": [
      28,
      53,
      80,
      9648
    ],
    "overview": "Alex Cross, a genius homicide detective/psychologist is trying to clean up the mean streets of Detroit while keeping his family out of the line of fire. As he mulls over accepting a job with the FBI, he is told that a friend has been murdered and he vows to track down the killer. Soon, he and his team are forced to match wits with a psychotic contract killer, who displays a disturbing commitment towards seeing his job through.",
    "release_date": "2012-10-18"
  },
  {
    "title": "Freedomland",
    "vote_average": 5.173,
    "vote_count": 313,
    "poster_path": "/fM9MYcI7BHJ2YqEtcr8JKPE8nDB.jpg",
    "genre_ids": [
      18,
      53,
      80,
      9648
    ],
    "overview": "A black police detective must solve a strange case of a kidnapped boy and deal with a big racial protest.",
    "release_date": "2006-02-17"
  },
  {
    "title": "Police Academy 5: Assignment Miami Beach",
    "vote_average": 5.168,
    "vote_count": 832,
    "poster_path": "/4m1qfTiVxdEDv0fgUf0FI7CA9Fe.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "The Police Academy misfits travel to Miami Beach for Commandant Lassard to be honored with a prestigious lifetime award pending his retirement. Things take a turn when Lassard unknowingly ends up in possession of stolen diamonds from a jewel heist.",
    "release_date": "1988-03-17"
  },
  {
    "title": "Bangkok Dangerous",
    "vote_average": 5.167,
    "vote_count": 949,
    "poster_path": "/iTRftxHW8i4H7ONaOiCIwEXjNDJ.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "overview": "When carrying out a hit, assassin Joe always makes use of the knowledge of the local population. On arriving in Bangkok, Joe meets street kid Kong and he becomes his primary aide. But when Kong is nearly killed, he asks Joe to train him up in the deadly arts and unwittingly becomes a target of a band of killers.",
    "release_date": "2008-08-21"
  },
  {
    "title": "Get Carter",
    "vote_average": 5.159,
    "vote_count": 518,
    "poster_path": "/xGANaRWD6638ch1qQmqgRp395R6.jpg",
    "genre_ids": [
      28,
      18,
      53,
      80
    ],
    "overview": "Jack Carter, a mob enforcer living in Las Vegas, travels back to his hometown of Seattle for his brother's funeral. During this visit, Carter realizes that the death of his brother was not accidental, but a murder. With this knowledge, Carter sets out to kill all those responsible.",
    "release_date": "2000-10-06"
  },
  {
    "title": "Half Past Dead",
    "vote_average": 5.155,
    "vote_count": 329,
    "poster_path": "/fJhudecoqyoZLoCwAZvqNPd7MK5.jpg",
    "genre_ids": [
      80,
      28,
      53
    ],
    "overview": "A man goes undercover in a hi-tech prison to find out information to help prosecute those who killed his wife. While there, he stumbles onto a plot involving a death-row inmate and his $200 million stash of gold.",
    "release_date": "2002-11-15"
  },
  {
    "title": "Dog Eat Dog",
    "vote_average": 5.1,
    "vote_count": 321,
    "poster_path": "/2oWwyYAu3JZSXXaU7rrbz27hPLn.jpg",
    "genre_ids": [
      18,
      80,
      53
    ],
    "overview": "Carved from a lifetime of experience that runs the gamut from incarceration to liberation, Dog Eat Dog is the story of three men who are all out of prison and now have the task of adapting themselves to civilian life.",
    "release_date": "2016-11-04"
  },
  {
    "title": "The Trust",
    "vote_average": 5.1,
    "vote_count": 445,
    "poster_path": "/q0bjJiN7CzW0qbNajGPYIRF83qr.jpg",
    "genre_ids": [
      53,
      18,
      80
    ],
    "overview": "A pair of cops investigating a drug invasion stumble upon a mysterious bank vault.",
    "release_date": "2016-04-29"
  },
  {
    "title": "Police Academy 6: City Under Siege",
    "vote_average": 5.1,
    "vote_count": 784,
    "poster_path": "/gRFJ3xLewH1rwEplZBfKS4vGpFV.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "Our favourite police men are called together to deal with a gang who rob banks and jewelers. Using their various talents as well as their extraordinary luck, the crooks stand no chance against our men and women in blue.",
    "release_date": "1989-03-09"
  },
  {
    "title": "Open Windows",
    "vote_average": 5.096,
    "vote_count": 417,
    "poster_path": "/6BWNf7pztCW8Xax0OS5fc2QG7xw.jpg",
    "genre_ids": [
      53,
      28,
      80
    ],
    "overview": "Nick is excited to discover that he's won a dinner date with his favorite actress, Jill Goddard. But when Jill refuses to honor the contest, he receives an offer he can't refuse: the ability to view Jill secretly via computer. Nick begins watching the unknowing star on her webcam, not realizing that this decision will put both himself and Jill at risk as they enter a terrifying world of cat-and-mouse where nothing-and no one-are as they seem.",
    "release_date": "2014-07-04"
  },
  {
    "title": "Basic Instinct 2",
    "vote_average": 5.071,
    "vote_count": 710,
    "poster_path": "/2cyAr10tG9p9mUEc7BA98RsetCp.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "overview": "Novelist Catherine Tramell is once again in trouble with the law, and Scotland Yard appoints psychiatrist Dr. Michael Glass to evaluate her. Though, like Detective Nick Curran before him, Glass is entranced by Tramell and lured into a seductive game.",
    "release_date": "2006-03-29"
  },
  {
    "title": "Getaway",
    "vote_average": 5.042,
    "vote_count": 591,
    "poster_path": "/z4sEWm1ykf9WX5WJU4XMD4oI5sI.jpg",
    "genre_ids": [
      28,
      80
    ],
    "overview": "Former race car driver Brent Magna is pitted against the clock. Desperately trying to save the life of his kidnapped wife, Brent commandeers a custom Ford Shelby GT500 Super Snake, taking it and its unwitting owner on a high-speed race against time, at the command of the mysterious villain holding his wife hostage.",
    "release_date": "2013-08-29"
  },
  {
    "title": "xXx: State of the Union",
    "vote_average": 5.02,
    "vote_count": 1728,
    "poster_path": "/jFDsnFmlZaYyRL2uN8ZrMfZoeCe.jpg",
    "genre_ids": [
      28,
      12,
      80,
      9648,
      53
    ],
    "overview": "Darius Stone's criminal record and extreme sports obsession make him the perfect candidate to be the newest XXX agent. He must save the U.S. government from a deadly conspiracy led by five-star general and Secretary of Defense George Deckert.",
    "release_date": "2005-04-27"
  },
  {
    "title": "Capone",
    "vote_average": 4.982,
    "vote_count": 334,
    "poster_path": "/75gDv38UgRtAukSxNXcjatyQmEa.jpg",
    "genre_ids": [
      80,
      18
    ],
    "overview": "The 47-year old Al Capone, after 10 years in prison, starts suffering from dementia and comes to be haunted by his violent past.",
    "release_date": "2020-06-26"
  },
  {
    "title": "Belleville Cop",
    "vote_average": 4.976,
    "vote_count": 347,
    "poster_path": "/6lY1GnJcZeZq3PXsoEwrF3izufJ.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "When a childhood friend from Miami gets killed after he comes to warn of encroaching drug gangs, Baaba moves to Miami and teams up with a local officer to bring down the criminals.",
    "release_date": "2018-10-17"
  },
  {
    "title": "Bullet Head",
    "vote_average": 4.952,
    "vote_count": 491,
    "poster_path": "/ySmKQPjWnNzuZ5YliQaOVEnWn2.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "overview": "A group of career criminals finds itself trapped in a warehouse with the law – and an Attack Dog named DeNiro closing in.",
    "release_date": "2017-12-07"
  },
  {
    "title": "Home Sweet Home Alone",
    "vote_average": 4.927,
    "vote_count": 571,
    "poster_path": "/fP3VvqUjEBjawxZHL4sYCq2ZdJD.jpg",
    "genre_ids": [
      35,
      80,
      10751
    ],
    "overview": "After being left at home by himself for the holidays, 10-year-old Max Mercer must work to defend his home from a married couple who tries to steal back a valuable heirloom.",
    "release_date": "2021-11-12"
  },
  {
    "title": "Setup",
    "vote_average": 4.92,
    "vote_count": 380,
    "poster_path": "/h74bol6GYG6eyXIAZVGmQBraI8c.jpg",
    "genre_ids": [
      28,
      80,
      18,
      53
    ],
    "overview": "A group of friends plan out a detailed heist that turns deadly when one betrays the other by taking off with the goods. Taking matters into his own hands, Sonny seeks out his revenge teaming up with the most dangerous mob boss in town to get back what is rightfully his. When he finally comes face to face with his longtime friend he will be forced to make a life changing choice.",
    "release_date": "2011-10-17"
  },
  {
    "title": "Exposed",
    "vote_average": 4.921,
    "vote_count": 477,
    "poster_path": "/nM26QosEfgjEegONCiNNrYMBTxD.jpg",
    "genre_ids": [
      18,
      80,
      53,
      9648
    ],
    "overview": "After witnessing a miracle, a young Latina woman experiences strange things as a police detective searches for the truth behind his partner's death.",
    "release_date": "2016-01-22"
  },
  {
    "title": "Captivity",
    "vote_average": 4.869,
    "vote_count": 397,
    "poster_path": "/diP1wQRnmvKHPFcHGoi0WkUSHXw.jpg",
    "genre_ids": [
      80,
      27,
      53
    ],
    "overview": "The sought-after images of top model Jennifer adorn magazine covers and billboards worldwide. When alone at a charity event, she is abducted and incarcerated in a cell with another prisoner. When their captor subjects the two to torture, they commit to escaping the chamber of horrors before they're killed.",
    "release_date": "2007-03-01"
  },
  {
    "title": "Baise-moi",
    "vote_average": 4.825,
    "vote_count": 401,
    "poster_path": "/fYijiVwEyP2JsDuSenGOsFNXEbn.jpg",
    "genre_ids": [
      80,
      18,
      10749,
      53
    ],
    "overview": "Manu has lived a difficult life. Abused and violently raped, she sets off to find herself only to meet Nadine, a prostitute who has encountered one too many injustices in the world. Angry at the world, they embark on a twisted, rage-filled road trip. They choose to have sex when they please and kill when they need. Leaving a trail of mischief and dead bodies in their wake. Generating a media blitz and manhunt, soon everyone is out to capture the young fugitives.",
    "release_date": "2000-06-28"
  },
  {
    "title": "The Human Centipede 2 (Full Sequence)",
    "vote_average": 4.793,
    "vote_count": 1237,
    "poster_path": "/2cMTX2BQVJDZfFlnPL5dDstmLfz.jpg",
    "genre_ids": [
      18,
      27,
      80
    ],
    "overview": "Inspired by the fictional Dr. Heiter, disturbed loner Martin dreams of creating a 12-person centipede and sets out to realize his sick fantasy.",
    "release_date": "2011-10-06"
  },
  {
    "title": "RoboCop 3",
    "vote_average": 4.777,
    "vote_count": 1166,
    "poster_path": "/ppLSSwCuC5ERRWbu9H3R8SPL9AM.jpg",
    "genre_ids": [
      28,
      12,
      80,
      878,
      53
    ],
    "overview": "The mega corporation Omni Consumer Products is still bent on creating their pet project, Delta City, to replace the rotting city of Detroit. Unfortunately, the inhabitants of the area have no intention of abandoning their homes simply for desires of the company. To this end, OCP have decided to force them to leave by employing a ruthless mercenary army to attack and harass them. An underground resistance begins and in this fight, RoboCop must decide where his loyalties lie.",
    "release_date": "1993-01-21"
  },
  {
    "title": "The Spirit",
    "vote_average": 4.727,
    "vote_count": 902,
    "poster_path": "/g9qawfzR3LWRC8r8YZ9w2yaQi5W.jpg",
    "genre_ids": [
      28,
      35,
      80,
      14,
      18
    ],
    "overview": "Down these mean streets a man must come.  A hero born, murdered, and born again.  A Rookie cop named Denny Colt returns from the beyond as The Spirit, a hero whose mission is to fight against the bad forces from the shadows of Central City.  The Octopus, who kills anyone unfortunate enough to see his face, has other plans; he is going to wipe out the entire city.",
    "release_date": "2008-12-25"
  },
  {
    "title": "Siberia",
    "vote_average": 4.708,
    "vote_count": 525,
    "poster_path": "/eGfIsvdrUhTlQOkxQIELU7obDYj.jpg",
    "genre_ids": [
      80,
      10749,
      53
    ],
    "overview": "Lucas, a diamond trader who travels to Saint Petersburg to arrange a sale, discovers that his Russian business partner has left his hotel and gone to a small Siberian village, so Lucas also heads there to try find him.",
    "release_date": "2018-07-13"
  },
  {
    "title": "The Poison Rose",
    "vote_average": 4.647,
    "vote_count": 307,
    "poster_path": "/gSzyUmg719TgAxarFZYWjLLMqvS.jpg",
    "genre_ids": [
      53,
      80
    ],
    "overview": "A down-on-his-luck PI is hired by his old flame to investigate a murder. But while the case at first appears routine, it slowly reveals itself to be a complex interwoven web of crimes, suspects and dead bodies.",
    "release_date": "2019-05-23"
  },
  {
    "title": "Catwoman",
    "vote_average": 4.597,
    "vote_count": 3143,
    "poster_path": "/pvnPgukFyEKgCzyOxyLiwyZ8T1C.jpg",
    "genre_ids": [
      28,
      14,
      9648,
      80
    ],
    "overview": "Liquidated after discovering a corporate conspiracy, mild-mannered graphic artist Patience Phillips washes up on an island, where she's resurrected and endowed with the prowess of a cat — and she's eager to use her new skills... as a vigilante. Before you can say \"cat and mouse\", handsome gumshoe Tom Lone is on her tail, fascinated by both of her personas.",
    "release_date": "2004-07-22"
  },
  {
    "title": "From Dusk Till Dawn 2: Texas Blood Money",
    "vote_average": 4.588,
    "vote_count": 419,
    "poster_path": "/in11KZuaVuJnxVBipxYocDqMQbW.jpg",
    "genre_ids": [
      80,
      28,
      27,
      53
    ],
    "overview": "A gang of bank-robbing misfits heads to Mexico with the blueprints for the perfect million-dollar heist, but when one of the crooks wanders into the wrong bar... and crosses the wrong vampire... the thieving cohorts develop a thirst for blood!",
    "release_date": "1999-03-16"
  },
  {
    "title": "Police Academy: Mission to Moscow",
    "vote_average": 4.576,
    "vote_count": 788,
    "poster_path": "/3517XQ9LpoEykyYq2TuDNS45MPP.jpg",
    "genre_ids": [
      35,
      80
    ],
    "overview": "The Russians seek help in dealing with the Mafia from the veterans of the Police Academy. They head off to Moscow, in order to find evidence against Konstantin Konali, who marketed a computer game that everyone in the world is playing.",
    "release_date": "1994-06-09"
  },
  {
    "title": "S. Darko",
    "vote_average": 4.412,
    "vote_count": 439,
    "poster_path": "/rQJjsKhqL4VZx0VN2sD8PR0dK1h.jpg",
    "genre_ids": [
      53,
      80,
      878,
      9648
    ],
    "overview": "Seven years after the events of the first film, Samantha Darko finds herself stranded in a small desert town after her car breaks down where she is plagued by bizarre visions telling of the universe's end. As a result, she must face her own demons, and in doing so, save the world and herself.",
    "release_date": "2009-04-28"
  },
  {
    "title": "Holmes & Watson",
    "vote_average": 4.281,
    "vote_count": 781,
    "poster_path": "/orEUlKndjV1rEcWqXbbjegjfv97.jpg",
    "genre_ids": [
      9648,
      12,
      35,
      80
    ],
    "overview": "Detective Sherlock Holmes and Dr. John Watson join forces to investigate a murder at Buckingham Palace. They soon learn that they have only four days to solve the case, or the queen will become the next victim.",
    "release_date": "2018-12-25"
  },
  {
    "title": "Death Note",
    "vote_average": 4.242,
    "vote_count": 3787,
    "poster_path": "/1X19j2albvewAdnTNHx2fFXjOcC.jpg",
    "genre_ids": [
      80,
      14,
      27,
      53
    ],
    "overview": "A young man comes to possess a supernatural notebook, the Death Note, that grants him the power to kill any person simply by writing down their name on the pages. He then decides to use the notebook to kill criminals and change the world, but an enigmatic detective attempts to track him down and end his reign of terror.",
    "release_date": "2017-08-25"
  },
  {
    "title": "Gigli",
    "vote_average": 4.049,
    "vote_count": 429,
    "poster_path": "/7bdljyrk22rhGeHb1g2UJejPgCp.jpg",
    "genre_ids": [
      35,
      80,
      18,
      10749
    ],
    "overview": "Gigli is ordered to kidnap the psychologically challenged younger brother of a powerful federal prosecutor. When plans go awry, Gigli's boss sends in Ricki, a gorgeous free-spirited female gangster who has her own set of orders to assist with the kidnapping. But Gigli begins falling for the decidedly unavailable Ricki, which could be a hazard to his occupation.",
    "release_date": "2003-08-01"
  },
  {
    "title": "Fear Dot Com",
    "vote_average": 3.7,
    "vote_count": 335,
    "poster_path": "/phcd5AJvA1S45JMKYoNLhTzFwsE.jpg",
    "genre_ids": [
      27,
      53,
      80
    ],
    "overview": "When four bodies are discovered among the industrial decay and urban grime of New York City, brash young detective Mike Reilly teams with ambitious Department of Health researcher Terry Huston to uncover the cause behind their violent and inexplicable deaths. The only common factor shared by the victims? Each died exactly 48 hours after logging onto a website called feardotcom.",
    "release_date": "2002-08-09"
  }
]
setTimeout(() => {
  crimeGenreBTN = document.getElementById("80");
  crimeGenreBTN.classList.remove("buttonsDisabled")
  crimeGenreBTN.classList.add("buttonsEnabled")
  crimeGenreBTN.removeAttribute("disabled")
}, 5000)