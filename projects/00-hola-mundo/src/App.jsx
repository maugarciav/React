import './App.css'
import { TwitterFollowCard } from "./TwiiterFollowCard"

const users = [
    {
        userName: 'maugarciav',
        name: 'mau garcia',
        isFollowing: true
    },
    {
        userName: 'twitter',
        name: 'Twitter',
        isFollowing: false
    },
    {
        userName: 'midudev',
        name: 'Miguel Angel'
    },
]

export function App (){
    return(
        <div className="App">
            {
                users.map(({userName, name, isFollowing}) => {
                    return(
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initalIsFollowing = {isFollowing}
                        >
                            <strong>{name}</strong>
                        </TwitterFollowCard>
                    )
                })
            }
        </div>
    )
}
