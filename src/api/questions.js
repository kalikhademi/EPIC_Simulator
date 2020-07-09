var quizQuestions = [
  {
    question:
      "What is the total number of prior convictions that offender had?",
    answers: [
      {
        type: "prosocial",
        content: "0",
      },
      {
        type: "prosocial",
        content: "1",
      },
      {
        type: "antisocial",
        content: "2",
      },
      {
        type: "antisocial",
        content: "3",
      },
      {
        type: "antisocial",
        content: "over 3",
      },
    ],
    type: "raterBox",
  },
  {
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
  },
  {
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
  },
  {
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
  },
  // {
  //   question: "Is the earliest arrest time under age 16?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Is the offender incarcerated upon conviction?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Did the offender ever escape from a correctional facility?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Was the offender ever punished for institutional misconduct?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "Was the probation/parole suspended during prior community supervision",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Does the offender has any records of assult or violence?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Is the offener currently unemployed",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Is the offender frequently unemployed",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Was the offender never employed for a full year?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Does offender has education status less than regular grade 10?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Does offender has education status less than regular grade 12?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "Was the offender suspended or expelled from school at least once?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Rate the participation/performance score in the school",
  //   answers: [
  //     {
  //       type: "prosocial",
  //       content: "0",
  //     },
  //     {
  //       type: "prosocial",
  //       content: "1",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "2",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "3",
  //     },
  //   ],
  //   type: "raterBox",
  //   // correctAnswer: "NA",
  //   // raterBoxyesno: "y",
  // },
  // {
  //   question: "Rate the offender's interaction with other peers  in school",
  //   answers: [
  //     {
  //       type: "prosocial",
  //       content: "0",
  //     },
  //     {
  //       type: "prosocial",
  //       content: "1",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "2",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "3",
  //     },
  //   ],
  //   type: "raterBox",
  //   // correctAnswer: "NA",
  //   // raterBoxyesno: "y",
  // },
  // {
  //   question: "Rate the interactions with authority figures",
  //   answers: [
  //     {
  //       type: "prosocial",
  //       content: "0",
  //     },
  //     {
  //       type: "prosocial",
  //       content: "1",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "2",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "3",
  //     },
  //   ],
  //   type: "raterBox",
  //   // correctAnswer: "NA",
  //   // raterBoxyesno: "y",
  // },
  // {
  //   question: "Rate the financial status of the offender",
  //   answers: [
  //     {
  //       type: "prosocial",
  //       content: "0",
  //     },
  //     {
  //       type: "prosocial",
  //       content: "1",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "2",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "3",
  //     },
  //   ],
  //   type: "raterBox",
  //   // correctAnswer: "NA",
  //   // raterBoxyesno: "y",
  // },
  // {
  //   question: "Is the offender relied upon social assistance",
  //   answers: [
  //     {
  //       type: "prosocial",
  //       content: "0",
  //     },
  //     {
  //       type: "prosocial",
  //       content: "1",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "2",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "3",
  //     },
  //   ],
  //   type: "raterBox",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "Rate the offender's level of satisfaction with marital or equivalent situation",
  //   answers: [
  //     {
  //       type: "prosocial",
  //       content: "0",
  //     },
  //     {
  //       type: "prosocial",
  //       content: "1",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "2",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "3",
  //     },
  //   ],
  //   type: "raterBox",
  //   // correctAnswer: "NA",
  //   // raterBoxyesno: "y",
  // },
  // {
  //   question: "Rate the offernder's non-rewarding relation with parents",
  //   answers: [
  //     {
  //       type: "prosocial",
  //       content: "0",
  //     },
  //     {
  //       type: "prosocial",
  //       content: "1",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "2",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "3",
  //     },
  //   ],
  //   type: "raterBox",
  //   // correctAnswer: "NA",
  //   // raterBoxyesno: "y",
  // },
  // {
  //   question:
  //     "Rate the offernder's non-rewarding relation with other relatives",
  //   answers: [
  //     {
  //       type: "prosocial",
  //       content: "0",
  //     },
  //     {
  //       type: "prosocial",
  //       content: "1",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "2",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "3",
  //     },
  //   ],
  //   type: "raterBox",
  //   // correctAnswer: "NA",
  //   // raterBoxyesno: "y",
  // },
  // {
  //   question:
  //     "Do offender's close relatives (e.g. parent, sibling, spouse/partner) have a criminal record, or an established pattern of criminal behavior?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Does the offender has unsatisfactory accomodation?",
  //   answers: [
  //     {
  //       type: "prosocial",
  //       content: "0",
  //     },
  //     {
  //       type: "prosocial",
  //       content: "1",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "2",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "3",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "NA",
  //   // raterBoxyesno: "y",
  // },
  // {
  //   question:
  //     "Does the offender change the residential address more than three times in the past 12 months?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Does the offender live in the high-crime neighborhood?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Was absent from any organized activity in the last 12 months?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Does the offenender have no leisure activity?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "y",
  // },
  // {
  //   question: "Is the offender isolated socially?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "Is the offender associated with some individuals (not closed friends) which have criminal records or are involved in criminal activity?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "Does the offender have friends who have criminal records or are involved in criminal activity?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "Does most of the offender's social network are involved in criminal activity or have a criminal record?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "Does most of the offender's friends are involved in criminal activity or have a criminal record?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Does offender has a history of alchohol problems?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Does offender has a history of substance abuse problems?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Does offender currently has an alcohol problem?",
  //   answers: [
  //     {
  //       type: "prosocial",
  //       content: "0",
  //     },
  //     {
  //       type: "prosocial",
  //       content: "1",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "2",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "3",
  //     },
  //   ],
  //   type: "raterBox",
  //   // correctAnswer: "NA",
  //   // raterBoxyesno: "y",
  // },
  // {
  //   question: "Does offender currently has a drug problem?",
  //   answers: [
  //     {
  //       type: "prosocial",
  //       content: "0",
  //     },
  //     {
  //       type: "prosocial",
  //       content: "1",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "2",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "3",
  //     },
  //   ],
  //   type: "raterBox",
  //   // correctAnswer: "NA",
  //   // raterBoxyesno: "y",
  // },
  // {
  //   question:
  //     "Does offender's alchohol or drug problem contribute to the violation of law?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "Does offender's alchohol or drug problem contribute to family/marital situations?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "Does offender's alchohol or drug problem contribute to school/work problems?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "Does offender's alchohol or drug problem contribute to medical or physical health problems in the past 12 months?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "does offender has other clinical indicators for drug/alcohol problem?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "Does the offender report moderate interference or emotional distress e.g., signs of mild anxiety (insomnia or worrying), mild depression (quiet, under assertive), withdrawn?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "Does the offender suffer from a possible serious mental health problem (e.g. active psychosis)?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Did the offender recieve a mental health treatment in past?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question: "Does the offender recieve a mental health treatment currently?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "Does the offender’s behavior or emotional/personal condition seem irregular to such a degree that they should be further evaluated by a mental health professional?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "To what degree are they: self-centered; high sensation seeking; indifferent or callous towards others?",
  //   answers: [
  //     {
  //       type: "prosocial",
  //       content: "0",
  //     },
  //     {
  //       type: "prosocial",
  //       content: "1",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "2",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "3",
  //     },
  //   ],
  //   type: "raterBox",
  //   // raterBoxyesno: "y",
  // },
  // {
  //   question:
  //     "are they looking for quick fixes or are they committed to something basically stable and pro-social?",
  //   answers: [
  //     {
  //       type: "prosocial",
  //       content: "0",
  //     },
  //     {
  //       type: "prosocial",
  //       content: "1",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "2",
  //     },
  //     {
  //       type: "antisocial",
  //       content: "3",
  //     },
  //   ],
  //   type: "raterBox",
  //   // correctAnswer: "NA",
  //   // raterBoxyesno: "y",
  // },
  // {
  //   question:
  //     "Does the offender deny the fairness or appropriateness of the sentence?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // raterBoxyesno: "n",
  // },
  // {
  //   question:
  //     "Does the offender object to his classification or placement, and/or is there an unwillingness to comply or cooperate, or to seek assistance for significant issues?",
  //   answers: [
  //     {
  //       type: "negative",
  //       content: "yes",
  //     },
  //     {
  //       type: "positive",
  //       content: "no",
  //     },
  //   ],
  //   type: "yes/no",
  //   // correctAnswer: "yes",
  //   // raterBoxyesno: "n",
  // },
];

export default quizQuestions;
