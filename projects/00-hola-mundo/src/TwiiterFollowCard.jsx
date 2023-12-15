import './App.css'
import { useState } from 'react'


export function TwitterFollowCard ({children, userName, initalIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initalIsFollowing)

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                src={`https://unavatar.io/twitter/${userName}`}
                alt={`Avatar de ${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-username'>
                        @{userName}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'> {text} </span>
                    <span className='tw-followCard-stopFollow'>Unfollow</span>
                </button>
            </aside>
        </article>
    )
}