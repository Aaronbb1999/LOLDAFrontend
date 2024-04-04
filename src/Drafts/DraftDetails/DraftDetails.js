import './DraftDetails.css'
import { Container, Row, Col } from 'react-bootstrap';
import DraftLayout from './DraftLayout.js';

function DraftDetails({ draft }) {

    const winnerResult = <span className='winner'>1</span>
    const looserResult = <span className='looser'>0</span>

    return (
      <Container fluid className='draftDetails'>
        {draft ? (
          <>
            <Row className="matchHeader">
              <Col xs lg="2"><img src={require(`../../resources/${draft.blue_team.initials}.webp`)} alt="Blue Team Logo" /></Col>
              <Col xs lg="5"><span className={`teamName`}>{draft.blue_team.name}</span></Col>
              <Col xs lg="2">
                <div className='result'>
                    {draft.blue_wins ? winnerResult : looserResult}
                    <span> - </span>
                    {draft.blue_wins ? looserResult: winnerResult}
                </div>
              </Col>
              <Col xs lg="5"><span className={`teamName`}>{draft.red_team.name}</span></Col>
              <Col xs lg="2"><img src={require(`../../resources/${draft.red_team.initials}.webp`)} alt="Red Team Logo" /></Col>
            </Row>
            <Row>
              <DraftLayout draft={draft}/>
            </Row>
          </>
        ) : (
          <p>Selecciona un partido para ver los detalles</p>
        )}
      </Container>
    );
  }

export default DraftDetails;