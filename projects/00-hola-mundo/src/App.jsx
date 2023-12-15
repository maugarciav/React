import './App.css'
import { TwitterFollowCard } from "./TwiiterFollowCard"

export function App (){
    return(
        <div className="App">
            <TwitterFollowCard 
                userName="maugarciav">
                <strong>Mau Garcia</strong>
            </TwitterFollowCard>

            <TwitterFollowCard 
                userName="pherab" >
                <strong>Pablito Gamer</strong>
            </TwitterFollowCard>
            
        </div>
    )
}