import './App.css'
import { TwitterFollowCard } from "./TwiiterFollowCard"

export function App (){
    return(
        <div className="App">
            <TwitterFollowCard 
                isFollowing
                userName="maugarciav" 
                name="mau garcia"
            />
            <TwitterFollowCard 
                isFollowing 
                userName="midudev"
                name="Miguel Angel"
            />
            <TwitterFollowCard 
                isFollowing={false} 
                userName="pherab" 
                name="Pablito Gamer"
            />
        </div>
    )
}