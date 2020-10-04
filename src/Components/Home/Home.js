import React from 'react';

import Header from '../Header/Header';
import VolunteerCard from '../VolunteerCard/VolunteerCard';

const tasks = [
  {
    name: "Animal Shelter",
    pic: "animalShelter.png",
    color: "#421FCF",
  },
  {
    name: "Baby Sit",
    pic: "babySit.png",
    color: "#FFBD3E",
  },
  {
    name: "Bird House",
    pic: "birdHouse.png",
    color: "#9F90FC",
  },
  {
    name: "Child Support",
    pic: "childSupport.png",
    color: "#FF7044",
  },
  {
    name: "Clean Water",
    pic: "cleanWater.png",
    color: "#9F90FC",
  },
  {
    name: "Clean Park",
    pic: "clearnPark.png",
    color: "#421FCF",
  },
  {
    name: "Cloth Swap",
    pic: "clothSwap.png",
    color: "#FF7044",
  },
  {
    name: "Drive Safety",
    pic: "driveSafety.png",
    color: "#FFBD3E",
  },
  {
    name: "Good education",
    pic: "goodEducation.png",
    color: "#9F90FC",
  },
  {
    name: "Food Charity",
    pic: "foodCharity.png",
    color: "#FF7044",
  },
  {
    name: "it help",
    pic: "ITHelp.png",
    color: "#421FCF",
  },
  {
    name: "Books",
    pic: "libraryBooks.png",
    color: "#FFBD3E",
  },
  {
    name: "Drive Safety",
    pic: "musicLessons.png",
    color: "#FFBD3E",
  },
  {
    name: "Drive Safety",
    pic: "newBooks.png",
    color: "#421FCF",
  },
  {
    name: "Drive Safety",
    pic: "refuseShelter.png",
    color: "#9F90FC",
  },
  {
    name: "Drive Safety",
    pic: "riverClean.png",
    color: "#FF7044",
  },
  {
    name: "Drive Safety",
    pic: "schoolSuffiles.png",
    color: "#FFBD3E",
  },
  {
    name: "Drive Safety",
    pic: "studyGroup.png",
    color: "#FF7044",
  },
  {
    name: "Drive Safety",
    pic: "stuffedAnimals.png",
    color: "#9F90FC",
  },
  {
    name: "Drive Safety",
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