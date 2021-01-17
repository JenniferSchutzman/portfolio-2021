import petrawall from '../../assets/images/petrawall.jpg';
import ICRW from '../../assets/images/ICRW.png';
import ywca from '../../assets/images/ywca.png'
import WCC from '../../assets/images/WCC.jpg'
import MCC from '../../assets/images/MCC.jpeg'

const formerLifeData = {
  img: petrawall,
  p: [
    `After spending a summer volunteering in Uganda during my junior year of college,
    I caught the "travel bug" and was hooked on international work for social good.  Immediately following my undergrad,
    I went back to Uganda for a full year.  This was then followed by an additional year and
    a half in Cali, Colombia while also remotely earning my Masters in International Relations and becoming bilingual.
    After completing my post-grad degree, I lived in Sudan and South Sudan for 2 years, 2 years in KY and an additional 4 years in Washington, D.C.
      before stumbling upon Charleston by chance. `,
    
      `Professionally during that decade of working with non-profits, I was always in some capacity designing data collection
      and analysis systems for both qualitative and quantitative undertakings.  This work mostly took place
      under the category of program and/or project evaluation.  In laymans terms, when non-profits wanted
      to win (or maintain) funding, I designed the data collection and analysis systems to help them better assess, understand and articulate their impact of
      social change in the community with evidence-based assertions.  I also helped funders evaluate whether these projects were indeed creating the
      lasting and impactful social behavioural change for sustainable community improvement that they intended.`,
      
      `So why software development?  During that time I worked mostly in Advanced Excel, Tablue and PowerBI, but over the final years I started to progress to using 
      more technical statistical analysis packages like STATA and R
      programming.  It was during this transition to using more sophisticated statistical analysis tools that
      I started to discover my passion for programming. I remember saying repeatedly in D.C. and abroad
      how "I wished I could get on projects where all I did was work in STATA and R programming all day".  Then it finally hit me that it
      might be time for a serious career change.  After visitng a friend in Charleston and seeking out
      information about the JRS Coding School in Shem Creek, I made the easy, yet drastic pivot to change my
      whole life.  Now 3 and a half years later I can honestly still say I've never once regretted the change and
      it's one of the best decisions I've ever made.  Software development is my perfect match and
          I'm grateful daily (well, when I'm not too stuck!) to have found this exciting career.`, `See below more detailed descriptions per each position where I worked before starting code camp, if curious.`
  ],
  gridSection: [{
      gridImage: ICRW,
      gridHeader: `Monitoring And Evaluation Data Specialist`,
      gridSubHeader: ` Washington D.C. based with international travel 25% - 75%`,
      gridDescription: ['•	Leading technical guidance of data systems in 8 countries for world-renown private foundations, universities, governmental agencies, private research companies and corporations',
            '•	Training international data handlers on research design, creation of data collection tools, data storage, database management and data analysis for research projects in Jordan, Ethiopia, India, Tanzania, Kenya, Uganda, South Africa and Guyana',
            '•	Facilitating 10-20-person workshops, focus group discussions, in-depth interviews, key informant interviews and survey collection in various countries'
      ],
      gridButtonOneLink:'https://www.icrw.org/',
      gridButtonOneText: 'Learn more about ICRW'
  },
  {
    gridImage: ywca,
    gridHeader: `Outcomes and Evaluation Coordinator`,
    gridSubHeader: `Remote based for Cincinnati company `,
    gridDescription: [`•	Led activities across data mining, analysis, and report writing for funders and high-level decision makers to better understand their process and results data`,
    `•	Managed a multimillion dollar qualitative and quantitative database`,
    `•	Worked across 5 different departments developing the data collection tools and database input storage systems for social workers and community contributors`
  ],
    gridButtonOneLink:'https://www.ywcacincinnati.org/',
    gridButtonOneText: 'Learn more about YWCA '
},
{
  gridImage: WCC,
  gridHeader: `Women's Crisis Center`,
  gridSubHeader: `Kentucky`,
  gridDescription: [`•	Surveyed the challenges of undocumented survivors in the region to improve strategic planning`,
  `•	Formulated winning proposals contributing to the growth of the department`,
  `•	Managed cases for mostly undocumented survivors of domestic violence and human trafficking`
],
  gridButtonOneLink:`https://www.wccky.org/`,
  gridButtonOneText: `Learn more about WCC`
},
{
  gridImage: MCC,
  gridHeader: `Program Support Officer, Data Monitoring & Evaluations`,
  gridSubHeader: `Based in Juba, South Sudan while also overseeing projects in northern Sudan`,
  gridDescription: [`• Managed research design and data analysis for 10+ projects`,
  `• Designed and trained local staff to implement effective data collection, analysis and reporting systems`,
],
  gridButtonOneLink:`https://mcc.org/learn/what/relief/south-sudan`,
  gridButtonOneText: `MCC South Sudan`,
  gridButtonTwoLink:`https://mcc.org/learn/where/africa/sudan`,
  gridButtonTwoText: ` MCC Sudan`
}
]
}

export default formerLifeData;