import { useState, useEffect } from "react";
import DraftListItem from "./DraftListItem";
import './DraftListItem.css'

function DraftList({onSelectDraft}) {
    const [draft, setDraft] = useState(null);

    const handleDraftSelected = (draft) => {
        onSelectDraft(draft);
    };
    
    useEffect(() => {
        fetch('http://localhost:8080/games/8')
          .then(response => response.json())
          .then(data => setDraft(data))
          .catch(error => console.error('Error fetching data:', error));

      }, []);  

    console.log(draft);

    return (
        <div>
            <h2>Lista de Partidos</h2>
            <ul className="list">
                {draft && <DraftListItem onSelectedDraft={handleDraftSelected} draft={draft}/>}
            </ul>
        </div>
    );
}

export default DraftList;