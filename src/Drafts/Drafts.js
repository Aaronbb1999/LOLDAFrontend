import DraftDetails from "./DraftDetails/DraftDetails";
import DraftList from "./DraftList/DraftList";
import './Drafts.css'
import { useState } from "react";

function Drafts() {
    const [selectedDraft, setSelectedDraft] = useState(null);

    const handleDraftSelected = (draft) => {
        setSelectedDraft(draft);
    };

    return (
        <div className="Drafts">
            <DraftList onSelectDraft={handleDraftSelected}/>
            <DraftDetails draft={selectedDraft}/>
        </div>
    )
}

export default Drafts;