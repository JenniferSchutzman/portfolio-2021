import tallo from '../../assets/images/tallo.jpg'
import gotcha from '../../assets/images/gotcha.png'
import vizbii from '../../assets/images/vizbii.png'
import fountain from '../../assets/images/fountain.jpeg'
import reactHooks from '../../assets/images/reactHooks.png'
import github from '../../assets/images/github.jpeg'
import JRSdog from '../../assets/images/JRSdog.jpeg'


const myCodeData = {
  gridSection: [
    {
      gridImage: tallo,
      gridHeader: `Tallo`,
      gridSubHeader: `Full-Stack Software Engineer since October 2018 to current in Mount Pleasant, SC`,
      gridDescription: [`For the past 2 and a half years, I've been a Full-Stack Software Engineer at
      the Mount Pleasant based tech company Tallo. On a team with 5
      other developers, we maintain the Tallo tech product from back
      to front for millions of users. Main highlights of my
      direct involvement include: worked with 2 other developers on the complete redesign of the
      Tallo app profile functionality utilizing AngularJS, Java, MySQL,
      and LESS; personally created several of React components for the
      new UI kit; a lead in the transition to React Hooks; and
      currently 1 of 2 developers converting the existing app from AngularJS
      to React.`],
      gridButtonOneLink:`https://app.tallo.com/register`,
      gridButtonOneText: ` Create a free Tallo account to see the app I work on`,
      gridButtonTwoLink: `https://github.com/STEMPremier/celula`,
      gridButtonTwoText: `See the UI kit where I created several components`
    },
    {
      gridImage: gotcha,
      gridHeader: `Gotcha (Holy Spokes Bike Share)`,
      gridSubHeader: `Temporary full-time front-end contract for 3 months in downtown Charleston, SC`,
      gridDescription: [` Before settling into a permanent position at Tallo, I did a
      couple of full-time consultancy projects for other local tech
      companies. Using
      React, Redux, and CSS, I drafted their new marketing website.
      This was built in CSS without any helper style libraries or packages. It was too customized to allow for
      outside style frameworks or templates. Thus, this contract gave me the
      opportunitiy to drastically improve my CSS skills; launching me
      into a new level of design code understanding and appreciation
      for further front-end expertise. Click below to check it out.`],
      gridButtonOneLink:`https://ridegotcha.com/`,
      gridButtonOneText: `View the marketing website I built`
    },
    {
      gridImage: vizbii,
      gridHeader: `Vizbii`,
      gridSubHeader: `Temporary full-time front-end contract for 5 months in downtown Charleston, SC`,
      gridDescription: [`My first contract after code camp was for another
      local company in downtown Charleston called Vizbii. There I
      built the front-end of the their new admin app, along with a
      couple of other small apps. Utilizing AuthO, React, Redux, CSS, and
      Axios, I was the sole front-end developer on the admin
      app. Personal highlights at this project include getting to
      plug in Auth0, working with styled React components, developed my React skills with form management,
      and numerous API calls. Unfortunately, the client admin app is not
      publicly accessible, but click below to learn more about this
      ground-breaking company. I believe the company now just goes by
      the name "Morphii".  I am forever grateful to the Vizbii team for taking the time to mentor me and taking me on straight out of code camp.  I'm sure most developers can relate to how overwhelming that first 
      software engineer position can feel.
        Thank you Vizbii for giving me my first chance to dive in!`],
      gridButtonOneLink:`https://morphii.com/`,
      gridButtonOneText: ` Check out Morphii`
    },
    {
      gridImage: reactHooks,
      gridHeader: `Hooks Live Coding Instruction`,
      gridSubHeader: `2 different live coding presentations I've lead in the past year on Hooks`,
      gridDescription: [`I created a demo on React Hooks and presented it to the CTO and Senior Dev while working at Tallo.  
      We soon after implementented Hooks into the react components we were building in the new UI kit.  
      You can follow along with my comments and examples inside the components directory.
      `, `I also created a second more intermediate demo and presented it live on zoom to the Charleston Women Devs group in December of 2020. `],
      gridButtonOneLink:`https://github.com/JenniferSchutzman/hooks-practice`,
      gridButtonOneText: `Check out the basic intro to react hooks demo`,
      gridButtonTwoLink: `https://github.com/JenniferSchutzman/live-coding-demo-to-share`,
      gridButtonTwoText: `Check out the "Helpful Hooks" live coding demo`
    },
    {
      gridImage: github ,
      gridHeader: `My Github Page`,
      gridSubHeader: `A little bit of everything`,
      gridDescription: [`While the majority of my code is proprietary, you can still see the regular activity and professional flow of commits.  This January will mark 3 years of full-time software development.`],
      gridButtonOneLink:`https://github.com/JenniferSchutzman`,
      gridButtonOneText: `Check out the repos on my github page`
    },
    {
      gridImage: fountain ,
      gridHeader: `Charleston Tour Finder`,
      gridSubHeader: `Full-Stack app I made at the end of bootcamp for graduation` ,
      gridDescription: [` At the end of code camp, each student was responsible for
      building their own app from back to front utilizing
      CouchDB/PouchDB, React, and Redux. I also chose to use Material
      UI. In those last 2 weeks I worked completely by myself to
      create this "Charleston Tour Finder App". I've recentely updated
      the code using hooks in another repo and would be happy to present the newer repo in person.`],
      gridButtonOneLink:`https://github.com/JenniferSchutzman/tourPlanner-reactHooks-reactRouter-jsonServer-only`,
      gridButtonOneText: `  View my code for the Charleston Tour Finder
      app demo`
    },
    {
      gridImage: JRSdog ,
      gridHeader: `JRS Code School`,
      gridSubHeader: `Full stack bootcamp`,
      gridDescription: [`Under the leadership of Tom Wilson and Trip Ottinger, I attended the 3 month code bootcamp in Shem Creek.  In this full-stack bootcamp we dove into Javascript, NodeJS (with full CRUD), React, Redux, MySQL, PouchDB/CouchDB, Material UI, and more!  Thank you guys for this amazing gift.`],
      gridButtonOneLink:`https://www.harborec.com/jrs-coding-school`,
      gridButtonOneText: `  Learn more about the coding bootcamp`
    }
  ]

}

export default myCodeData;