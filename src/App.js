import {Component} from 'react'

import TabItem from './components/TabItem'
import ProjectItem from './components/ProjectItem'
import Header from './components/Header'
import './App.css'

const tabsList = [
  {tabId: 'React Js', displayText: 'React JS'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'}, 
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'STATIC', displayText: 'Static'},

  
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/static-website/flats-list-d2-img.png',
    title: 'Flat Booking',
    link: "https://flatbooking13.ccbp.tech/",
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    link: "https://toursim13.ccbp.tech/",
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/book-store-img.png',
    title: 'Book Store',
    link: "https://popularbook13.ccbp.tech/",
  },
     {
       projectId: 3,
       category: 'STATIC',
       imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s2-img.png',
       title: 'Happy Meals',
       link: "https://happymeals13.ccbp.tech/",
    },
  {
    projectId: 4,
       category: 'STATIC',
       imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/advanced-technologies-img.png',
       title: 'Advanced Technologies',
       link: "https://advancedtech13.ccbp.tech/",

  },
  {
    projectId: 5,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/chat-screen-img.png',
    title: 'Chat Page',
    link: "https://chatpage13.ccbp.tech/",},
  {
    projectId: 6,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/mobile-store-img.png',
    title: 'Mobile Store',
    link: "https://mobilestore13.ccbp.tech/",
  },
  {
    projectId: 7,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    link: "https://vr13.ccbp.tech/"
  },
  {
    projectId: 8,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    link: "https://fdmunch13.ccbp.tech/",
  },
  {
    projectId: 9,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    link: "https://portfolio13.ccbp.tech/",
    },

 {
   projectId: 10,
   category: 'RESPONSIVE',
   imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/design-section-img.png',
   title: 'Design Section',
   link: "https://designsec13.ccbp.tech/",
 },
 {
  projectId: 11,
  category: 'RESPONSIVE',
  imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/robotics-img.png',
  title: 'Robbotic Section',
  link: "https://robotics13.ccbp.tech/",
},{
  projectId: 12,
  category: 'RESPONSIVE',
  imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/dream-car-img.png',
  title: 'Dream Car Page',
  link: "https://dreamcar13.ccbp.tech/",
},{
  projectId: 13,
  category: 'RESPONSIVE',
  imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/color-palette-img.png',
  title: 'Color Palette',
  link: "https://colorp13.ccbp.tech/",
},{
  projectId: 14,
  category: 'RESPONSIVE',
  imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/product-launch-img.png',
  title: 'Product Launch Section',
  link: "https://productls13.ccbp.tech/",
},
{
  projectId: 15,
  category: 'RESPONSIVE',
  imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/weather-report-img.png',
  title: 'Wheather Report Section',
  link: "https://wreport13.ccbp.tech/",
},
{
  projectId: 16,
  category: 'RESPONSIVE',
  imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/travel-benefits-img.png',
  title: 'Travel Benifits',
  link: "https://seasonimgs.ccbp.tech/",
},
  {
    projectId: 17,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    link: "https://typespeed13.ccbp.tech/",
  },
  {
    projectId: 18,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    link: "https://rjoke13.ccbp.tech/",
  },
  {
    projectId: 19,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    link: "https://sizing13.ccbp.tech/",
  },
  {
    projectId: 20,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/seasons-switcher-img.png',
    title: 'Season Switcher',
    link: "https://seasonimgs.ccbp.tech/",
  },
  {
       projectId: 21,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/traffic-light-img.png',
    title: 'Traffic Light',
    link: "https://trafficlights13.ccbp.tech/",
  },
  {
    projectId: 22,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/tip-calculator-img.png',
    title: 'Tip Calculator',
    link: "https://tipscalsi1.ccbp.tech/",
  },
  {
    projectId: 23,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/chat-bot-img.png',
    title: 'Chatbot',
    link: "https://chatbot1301.ccbp.tech/",
  },
  {
    projectId: 24,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/bookmark-img.png',
    title: 'Bookmark Marker',
    link: "https://bookmarker13.ccbp.tech/",
  },
  {
    projectId: 25,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-showcase/book-search-img.png',
    title: 'Book Search',
    link: "https://library13.ccbp.tech/",
  },
  {
    projectId: 26,
    category: 'React Js',
    imageURL: './images/appointments.gif',
    title: 'Appointments App',
    link: "https://rapo.ccbp.tech/",
  },
  {
    projectId: 30,
    category: 'React Js',
    imageURL: 'https://assets.ccbp.in/frontend/content/react-js/fruits-counter-output.gif',
    title: 'Fruits Counter',
    link: "https://fcts.ccbp.tech/",
  },
  {
    projectId: 27,
    category: 'React Js',
    imageURL: './images/gallery.gif',
    title: 'Gallery App',
    link: "https://gats.ccbp.tech/",
  },
  {
    projectId: 28,
    category: 'React Js',
    imageURL: './images/money manager.gif',
    title: 'Money Manager',
    link: "https://rbal.ccbp.tech/",
  },
  {
    projectId: 29,
    category: 'React Js',
    imageURL: './images/emoji game.gif',
    title: 'Emoji Game',
    link: "https://rejg.ccbp.tech/",
  },
  {
    projectId: 31,
    category: 'React Js',
    imageURL: './images/appstore.gif',
    title: 'App Store',
    link: "https://ap03.ccbp.tech/",
  },
  {
    projectId: 32,
    category: 'React Js',
    imageURL: './images/github popular repos.gif',
    title: 'Github Popular Repos',
    link: "https://r022.ccbp.tech/",
  },
  {
    projectId: 33,
    category: 'React Js',
    imageURL: './images/gradient.gif',
    title: 'Gradient Generator',
    link: "https://ggts.ccbp.tech/",
  },
  {
    projectId: 34,
    category: 'React Js',
    imageURL: "./images/nxt trenz.gif",
    title: 'Nxt Trenz App',
    link: "https://ntap.ccbp.tech/login",
  },

]

class App extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = projectsList.filter(
      eachprojectDetails => eachprojectDetails.category === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state
    const filteredProjects = this.getFilteredProjects()
    return (
      <div className="app-container">
        <Header />
        <h1 className="title">Projects</h1>
        <p className="description">
        On this website, you'll discover my expertise in developing dynamic, responsive, and static web applications using React.js. These projects exemplify my ability to create engaging and user-friendly web experiences while continuously acquiring new skills and staying updated with the latest web development trends. I take pride in delivering exceptional results through innovative and interactive web solutions.
        </p>

        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App