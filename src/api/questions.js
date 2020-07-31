var quizQuestions = [
  {
    //2
    question: "Does the offender has any prior convictions?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "criminal",
  },
  {
    //3
    question: "Does the adult offender has more than two convictions?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "criminal",
  },
  {
    //4
    question: "Does the adult offender has more than three convictions?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "criminal",
  },
  {
    //5
    question: "Does the adult has more than three present offenses?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "criminal",
  },
  {
    //6
    question: "Is the earliest arrest time under age 16?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "criminal",
  },
  {
    //7
    question: "Is the offender incarcerated upon conviction?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "criminal",
  },
  {
    //8
    question: "Did the offender ever escape from a correctional facility?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "criminal",
  },
  {
    //9
    question: "Was the offender ever punished for institutional misconduct?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "criminal",
  },
  {
    //10
    question:
      "Was the probation/parole suspended during prior community supervision",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "criminal",
  },
  {
    //11
    question: "Does the offender has any records of assult or violence?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "criminal",
  },
  {
    //12
    question: "Is the offener currently unemployed",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "education/employment",
  },
  {
    //13
    question: "Is the offender frequently unemployed",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "education/employment",
  },
  {
    //14
    question: "Was the offender never employed for a full year?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "education/employment",
  },
  {
    //14
    question: "Was offender ever fired?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "education/employment",
  },
  {
    //15
    question: "Does offender has education status less than regular grade 10?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "education/employment",
  },
  {
    //16
    question: "Does offender has education status less than regular grade 12?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "education/employment",
  },
  {
    //17
    question:
      "Was the offender suspended or expelled from school at least once?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "education/employment",
  },
  {
    //18
    question: "Rate the participation/performance score in the school",
    answers: [
      {
        type: "0",
        content: "0",
      },
      {
        type: "1",
        content: "1",
      },
      {
        type: "2",
        content: "2",
      },
      {
        type: "3",
        content: "3",
      },
    ],
    type: "raterBox",
    category: "education/employment",
  },
  {
    //19
    question: "Rate the offender's interaction with other peers  in school",
    answers: [
      {
        type: "0",
        content: "0",
      },
      {
        type: "1",
        content: "1",
      },
      {
        type: "2",
        content: "2",
      },
      {
        type: "3",
        content: "3",
      },
    ],
    type: "raterBox",
    category: "education/employment",
  },
  {
    //20
    question: "Rate the interactions with authority figures",
    answers: [
      {
        type: "0",
        content: "0",
      },
      {
        type: "1",
        content: "1",
      },
      {
        type: "2",
        content: "2",
      },
      {
        type: "3",
        content: "3",
      },
    ],
    type: "raterBox",
    category: "education/employment",
  },
  {
    //21
    question: "Rate the financial status of the offender",
    answers: [
      {
        type: "0",
        content: "0",
      },
      {
        type: "1",
        content: "1",
      },
      {
        type: "2",
        content: "2",
      },
      {
        type: "3",
        content: "3",
      },
    ],
    type: "raterBox",
    category: "financial",
  },
  {
    //22
    question: "Is the offender relied upon social assistance",
    answers: [
      {
        type: "0",
        content: "0",
      },
      {
        type: "1",
        content: "1",
      },
      {
        type: "2",
        content: "2",
      },
      {
        type: "3",
        content: "3",
      },
    ],
    type: "raterBox",
    category: "financial",
  },
  {
    //23
    question:
      "Rate the offender's level of satisfaction with marital or equivalent situation",
    answers: [
      {
        type: "0",
        content: "0",
      },
      {
        type: "1",
        content: "1",
      },
      {
        type: "2",
        content: "2",
      },
      {
        type: "3",
        content: "3",
      },
    ],
    type: "raterBox",
    category: "family/marital",
  },
  {
    //24
    question: "Rate the offernder's non-rewarding relation with parents",
    answers: [
      {
        type: "0",
        content: "0",
      },
      {
        type: "1",
        content: "1",
      },
      {
        type: "2",
        content: "2",
      },
      {
        type: "3",
        content: "3",
      },
    ],
    type: "raterBox",
    category: "family/marital",
  },
  {
    //25
    question:
      "Rate the offernder's non-rewarding relation with other relatives",
    answers: [
      {
        type: "0",
        content: "0",
      },
      {
        type: "1",
        content: "1",
      },
      {
        type: "2",
        content: "2",
      },
      {
        type: "3",
        content: "3",
      },
    ],
    type: "raterBox",
    category: "family/marital",
  },
  {
    //26
    question:
      "Do offender's close relatives (e.g. parent, sibling, spouse/partner) have a criminal record, or an established pattern of criminal behavior?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "family/marital",
  },
  {
    //27
    question: "Does the offender has unsatisfactory accomodation?",
    answers: [
      {
        type: "0",
        content: "0",
      },
      {
        type: "1",
        content: "1",
      },
      {
        type: "2",
        content: "2",
      },
      {
        type: "3",
        content: "3",
      },
    ],
    type: "yes/no",
    category: "accommodation",
  },
  {
    //28
    question:
      "Does the offender change the residential address more than three times in the past 12 months?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "accommodation",
  },
  {
    //29
    question: "Does the offender live in the high-crime neighborhood?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "accommodation",
  },
  {
    //30
    question: "Was absent from any organized activity in the last 12 months?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "leisure/recreation",
  },
  {
    //31
    question: "Does the offenender have no leisure activity?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "leisure/recreation",
  },
  {
    //32
    question: "Is the offender isolated socially?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "companions",
  },
  {
    //33
    question:
      "Is the offender associated with some individuals (not closed friends) which have criminal records or are involved in criminal activity?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "companions",
  },
  {
    //34
    question:
      "Does the offender have friends who have criminal records or are involved in criminal activity?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "companions",
  },
  {
    //35
    question:
      "Does most of the offender's social network are involved in criminal activity or have a criminal record?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "companions",
  },
  {
    //36
    question:
      "Does most of the offender's friends are involved in criminal activity or have a criminal record?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "companions",
  },
  {
    //37
    question: "Does offender has a history of alchohol problems?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "alcohol/drug problems",
  },
  {
    //38
    question: "Does offender has a history of substance abuse problems?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "alcohol/drug problems",
  },
  {
    //39
    question: "Does offender currently has an alcohol problem?",
    answers: [
      {
        type: "0",
        content: "0",
      },
      {
        type: "1",
        content: "1",
      },
      {
        type: "2",
        content: "2",
      },
      {
        type: "3",
        content: "3",
      },
    ],
    type: "raterBox",
    category: "alcohol/drug problems",
  },
  {
    //40
    question: "Does offender currently has a drug problem?",
    answers: [
      {
        type: "0",
        content: "0",
      },
      {
        type: "1",
        content: "1",
      },
      {
        type: "2",
        content: "2",
      },
      {
        type: "3",
        content: "3",
      },
    ],
    type: "raterBox",
    category: "alcohol/drug problems",
  },
  {
    //41
    question:
      "Does offender's alchohol or drug problem contribute to the violation of law?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "alcohol/drug problems",
  },
  {
    //42
    question:
      "Does offender's alchohol or drug problem contribute to family/marital situations?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "alcohol/drug problems",
  },
  {
    //43
    question:
      "Does offender's alchohol or drug problem contribute to school/work problems?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "alcohol/drug problems",
  },
  {
    //44
    question:
      "Does offender's alchohol or drug problem contribute to medical or physical health problems in the past 12 months?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "alcohol/drug problems",
  },
  {
    //45
    question:
      "does offender has other clinical indicators for drug/alcohol problem?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "alcohol/drug problems",
  },
  {
    //46
    question:
      "Does the offender report moderate interference or emotional distress e.g., signs of mild anxiety (insomnia or worrying), mild depression (quiet, under assertive), withdrawn?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "emotional/personal",
  },
  {
    //47
    question:
      "Does the offender suffer from a possible serious mental health problem (e.g. active psychosis)?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "emotional/personal",
  },
  {
    //48
    question: "Did the offender recieve a mental health treatment in past?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "emotional/personal",
  },
  {
    //49
    question: "Does the offender recieve a mental health treatment currently?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "emotional/personal",
  },
  {
    //50
    question:
      "Does the offender’s behavior or emotional/personal condition seem irregular to such a degree that they should be further evaluated by a mental health professional?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "emotional/personal",
  },
  {
    //51
    question:
      "To what degree are they: self-centered; high sensation seeking; indifferent or callous towards others?",
    answers: [
      {
        type: "0",
        content: "0",
      },
      {
        type: "1",
        content: "1",
      },
      {
        type: "2",
        content: "2",
      },
      {
        type: "3",
        content: "3",
      },
    ],
    type: "raterBox",
    category: "attitude/orientation",
  },
  {
    //52
    question:
      "are they looking for quick fixes or are they committed to something basically stable and pro-social?",
    answers: [
      {
        type: "0",
        content: "0",
      },
      {
        type: "1",
        content: "1",
      },
      {
        type: "2",
        content: "2",
      },
      {
        type: "3",
        content: "3",
      },
    ],
    type: "raterBox",
    category: "attitude/orientation",
  },
  {
    //53
    question:
      "Does the offender deny the fairness or appropriateness of the sentence?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "attitude/orientation",
  },
  {
    //54
    question:
      "Does the offender object to his classification or placement, and/or is there an unwillingness to comply or cooperate, or to seek assistance for significant issues?",
    answers: [
      {
        type: "negative",
        content: "yes",
      },
      {
        type: "positive",
        content: "no",
      },
    ],
    type: "yes/no",
    category: "attitude/orientation",
  },
];

export default quizQuestions;
