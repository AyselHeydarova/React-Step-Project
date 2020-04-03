import React, {useEffect, useState} from 'react';

const SingleNote = ({match}) => {

    const [note, setNote] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/notes?id=${match.params.id}` || `http://localhost:3001/notes?id=${match.params.id}`)
            .then(note => note.json())
            .then(note => setNote(note[0]))
    }, []);


    const {title, text, color} = note;

    return (
        <>
            <div>
                <div>
                    <h3>{title}</h3>
                </div>

                <div>
                    <p>{text}</p>
                </div>

            </div>

            <button>EDIT</button>
            <button>ARCHIVE</button>
            <button>DELETE</button>
        </>
    );
};

export default SingleNote;