import React from "react";
import Profile from "./Profile";


const mainFeed = [
  {
    userNames:'Thato and Haley',
    tweet: 'Firebase won\'t save record. Halp.'
  },
  {
    userNames:'Sleater and Kinney',
    tweet: 'Prop types are throwing an error.'
  },
  {
    userNames:'Imani & Jacob',
    tweet: 'Child component isn\'t rendering.'
  }
];

function Feed(){
  return (
   <React.Fragment> 
    <hr/>
    {mainFeed.map((profile, index) =>
      <Profile userNames={profile.userNames}
      tweet={profile.tweet}
      key={index}/>
    )}
   </React.Fragment>
  );
}

export default Feed;



