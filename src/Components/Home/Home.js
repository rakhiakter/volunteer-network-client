import React from 'react';

import Header from '../Header/Header';
import VolunteerCard from '../VolunteerCard/VolunteerCard';

const tasks = [
  {
    eventName: "Forester a shelter animal",
    pic: "animalShelter.png",
    color: "#421FCF",
  },
  {
    eventName: "BabySit during PTA meetings",
    pic: "babySit.png",
    color: "#FFBD3E",
  },
  {
    eventName: "Give birdhouse for your neigbhors",
    pic: "birdHouse.png",
    color: "#9F90FC",
  },
  {
    eventName: "Child Support",
    pic: "childSupport.png",
    color: "#FF7044",
  },
  {
    eventName: "Clean Water",
    pic: "cleanWater.png",
    color: "#9F90FC",
  },
  {
    eventName: "Clean-up your local Park",
    pic: "clearnPark.png",
    color: "#421FCF",
  },
  {
    eventName: "Host a clothing swap",
    pic: "clothSwap.png",
    color: "#FF7044",
  },
  {
    eventName: "Give a seminer on driving safety",
    pic: "driveSafety.png",
    color: "#FFBD3E",
  },
  {
    eventName: "Good Education",
    pic: "goodEducation.png",
    color: "#9F90FC",
  },
  {
    eventName: "Food Charity",
    pic: "foodCharity.png",
    color: "#FF7044",
  },
  {
    eventName: "Give IT help to local adults",
    pic: "ITHelp.png",
    color: "#421FCF",
  },
  {
    eventName: "New books for children",
    pic: "libraryBooks.png",
    color: "#FFBD3E",
  },
  {
    eventName: "Give free music lessons",
    pic: "musicLessons.png",
    color: "#FFBD3E",
  },
  {
    eventName: "New books for children",
    pic: "newBooks.png",
    color: "#421FCF",
  },
  {
    eventName: "Refuge shelter",
    pic: "refuseShelter.png",
    color: "#9F90FC",
  },
  {
    eventName: "Host a river clean-up",
    pic: "riverClean.png",
    color: "#FF7044",
  },
  {
    eventName: "Collect school supplies",
    pic: "schoolSuffiles.png",
    color: "#FFBD3E",
  },
  {
    eventName: "Host a study group",
    pic: "studyGroup.png",
    color: "#FF7044",
  },
  {
    eventName: "Collect stuffed animals",
    pic: "stuffedAnimals.png",
    color: "#9F90FC",
  },
  {
    eventName: "Teach people how to register to vote",
    pic: "voteRegister.png",
    color: "#421FCF",
  },
];
const Home = () => {
    return (
      <div>
        <Header></Header>

        <div className="row">
          {tasks.map((task) => (
            <VolunteerCard task={task}></VolunteerCard>
          ))}
        </div>
      </div>
    );
};

export default Home;