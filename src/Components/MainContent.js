import React, {Component} from 'react';
import './mainContent.css';

class MainContext extends Component {
    render(){
        let person = this.props.person
        return (
            <div className='main-container'>
                <div className='card-wrapper'>
                    <section className='main-text'>
                        <div>
                        <div className="slides">{`${this.props.index + 1}/25`}</div>
                        </div>
                        <div className='fullname'>
                            {person.name.first} {person.name.last}
                        </div>
                        <div className='employee-main'>
                            <div>
                                <b>From:</b> {person.city},{' '} {person.country}
                            </div>
                            <div>
                                <b>Job Title:</b> {person.title}
                            </div>
                            <div>
                                <b>Employer:</b> {person.employer}
                            </div>
                        </div>
                        <article className='employee-favorites'>
                            <div>
                                {" "}
                                <b>Favorite Movies:</b>{" "}
                            </div>
                            <section className='movie-list'>
                                <div>1. {person.favoriteMovies[0]}</div>
                                <div>2. {person.favoriteMovies[1]}</div>
                                <div>3. {person.favoriteMovies[2]}</div>
                            </section>
                        </article>
                    </section>
                </div>
            </div>
        )
    }
}

export default MainContext;