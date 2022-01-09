// pages/index.js

import Banner from "../Components/Banner";
import Header from "../Components/Header";
import MediumCard from "../Components/MediumCard";
import SmallCard from "../Components/SmallCard";
import CardImage from '../Images/Arizona2.jpg'
import Image from 'next/image'
import HomeImage from '../Images/Home.jpg'
import LargeCard from "../Components/LargeCard";
import Foooter from "../Components/Foooter";
import SecHeader from "../Components/SecHeader";
import { motion } from "framer-motion"


export default function Home({exploreData}) {
  return (
    <div className=""> 
      <Header/>
      <Banner/>      
      <Foooter/>
    </div>
  )
}


export async function getStaticProps(){
  const exploreData = await fetch("https://links.papareact.com/pyp").
  then(
    (res) => res.json()
  );

  return{
    props: {
      exploreData,
    },
  };
}