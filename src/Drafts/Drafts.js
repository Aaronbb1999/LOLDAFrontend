import { Col, Row, Container } from "react-bootstrap";
import DraftDetails from "./DraftDetails/DraftDetails.js";
import DraftList from "./DraftList/DraftList.js";
import './Drafts.css'
import { useState } from "react";

function Drafts() {
    const [selectedDraft, setSelectedDraft] = useState(null);

    const handleDraftSelected = (draft) => {
        setSelectedDraft(draft);
    };

    return (
        <Container>
            <Row className="Drafts">
                <Col xs={12} md={4} className="bg-primary"> 
                    <DraftList onSelectDraft={handleDraftSelected}/>
                </Col>
                <Col xs={12} md={8} className="bg-secondary"> 
                    <DraftDetails draft={selectedDraft}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Drafts;