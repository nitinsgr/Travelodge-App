import '../styles/globals.css'
import '../styles/Fonts.css'
import '../Components/Header.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import { UserProvider } from '@auth0/nextjs-auth0';


function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
       <ParallaxProvider>
       <NextNProgress color="#4338C9" />
      <Component {...pageProps} />
    </ParallaxProvider>
    </UserProvider>
   
    
  )
}

export default MyApp
