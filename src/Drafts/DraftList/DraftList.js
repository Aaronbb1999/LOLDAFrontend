import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import DraftListItem from "./DraftListItem";
import ListPagination from "../../General/ListPagination";

import './DraftListItem.css'


function DraftList({onSelectDraft}) {
    const [drafts, setDrafts] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const draftsPerPage = 10;

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

    const indexOfLastDraft = currentPage * draftsPerPage;
    const indexOfFirstDraft = indexOfLastDraft - draftsPerPage;
    const currentDrafts = drafts && drafts.slice(indexOfFirstDraft, indexOfLastDraft);
    const totalPages = drafts && Math.ceil(drafts.length / draftsPerPage);

    const paginate = (pageNumber) => {
        if(pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };
    

    return (
        <Container>
            <h2>Lista de Partidos</h2>
            {drafts && 
                <>
                    <ul className="list">
                        {currentDrafts.map((draft) => (
                            <DraftListItem 
                            onSelectedDraft={handleDraftSelected} 
                            draft={draft} 
                            key={draft.id}
                            isSelected={draft.id === selectedIndex}/>
                        ))}
                    </ul>
                    <ListPagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
                </>
            }
        </Container>
    );
}

export default DraftList;