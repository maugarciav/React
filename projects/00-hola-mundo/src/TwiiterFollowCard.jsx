import './App.css'

export function TwitterFollowCard ({userName, name, isFollowing}){

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                src={`https://unavatar.io/twitter/${userName}`}
                alt={`Avatar de ${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-username'>
                        @{userName}
                    </span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir 
                </button>
            </aside>
        </article>
    )
}