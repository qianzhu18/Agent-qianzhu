import WelcomeAnimation from '../components/WelcomeAnimation'
import Carousel from '../components/Carousel'
import Introduction from '../components/Introduction'
import Experience from '../components/Experience'
import Hobbies from '../components/Hobbies'
import Portfolio from '../components/Portfolio'
import ThankYou from '../components/ThankYou'

export default function Home() {
  return (
    <div className="min-h-screen">
      <WelcomeAnimation />
      <Carousel />
      <Introduction />
      <Experience />
      <Hobbies />
      <Portfolio />
      <ThankYou />
    </div>
  )
}

