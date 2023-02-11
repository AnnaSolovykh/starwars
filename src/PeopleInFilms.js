const PeopleInFilms = ({id, people}) => {
console.log(people)
    return ( 
        <div key={id} className="special-details">
            <p>{people.name}</p>
            <p>Birth year: {people.birth_year}</p>
            <p>Gender is {people.gender}</p>
            <p>The color of eyes is {people.eye_color} </p>
            <p>The color of hair is {people.hair_color}</p>
            <p>The color of skin is {people.skin_color}</p>
        </div>
    )
}

export default PeopleInFilms;