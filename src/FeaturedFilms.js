const FeaturedFilms = ({id, info}) => {
    return( 
        <div key={id} className="special-details">
            <p>{info.title}</p>
                <p>The director is {info.director}</p>
                <p>The episode number: {info.episode_id}</p>
                <p>Released: {info.release_date}</p>
        </div>

    )
}

export default FeaturedFilms;

