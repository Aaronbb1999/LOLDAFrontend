import { useState, useEffect } from "react";
import DraftListItem from "./DraftListItem";
import './DraftListItem.css'

function DraftList({onSelectDraft}) {
    const [drafts, setDrafts] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleDraftSelected = (draft) => {
        setSelectedIndex(draft.id === selectedIndex ? null : draft.id);
        onSelectDraft(draft);
    };
    
    useEffect(() => {
        fetch('http://localhost:8080/games')
          .then(response => response.json())
          .then(data => setDrafts(data.content))
          .catch(error => console.error('Error fetching data:', error));
        
      }, []);  

    return (
        <div>
            <h2>Lista de Partidos</h2>
            {drafts && 
                <ul className="list">
                    {drafts.slice(0,7).map((draft) => (
                        <DraftListItem 
                        onSelectedDraft={handleDraftSelected} 
                        draft={draft} 
                        key={draft.id}
                        isSelected={draft.id === selectedIndex}/>
                    ))}
                </ul>
            }
        </div>
    );
}

export default DraftList;