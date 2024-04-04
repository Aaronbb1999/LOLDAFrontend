import './DraftDetails.css'
import { Row, Col, Container } from 'react-bootstrap';
import ChampCard from './ChampCard.js'
import ChampBan from './ChampBan.js';

function DraftLayout({draft}) {

    const blue_picks = draft && [draft.draft.blue_pick_1, draft.draft.blue_pick_2, draft.draft.blue_pick_3, draft.draft.blue_pick_4, draft.draft.blue_pick_5];
    const red_picks = draft && [draft.draft.red_pick_1, draft.draft.red_pick_2, draft.draft.red_pick_3, draft.draft.red_pick_4, draft.draft.red_pick_5];

    const blue_bans = draft && [draft.draft.blue_ban_1, draft.draft.blue_ban_2, draft.draft.blue_ban_3, draft.draft.blue_ban_4, draft.draft.blue_ban_5];
    const red_bans = draft && [draft.draft.red_ban_1, draft.draft.red_ban_2, draft.draft.red_ban_3, draft.draft.red_ban_4, draft.draft.red_ban_5];

    return(
      <>
          <Container fluid className='draftChamps'>
            <Container fluid="md" className='blueDraft'>
              {blue_picks.map((champ, index) => (
                <Col key={index}>
                    <ChampCard key={index} champName={champ.name} isBlue = {true}/>
                </Col>
              ))}
            </Container>
            <Container fluid="md" className='redDraft'>
              {red_picks.map((champ, index) => (
                <Col key={index}>
                    <ChampCard key={index} champName={champ.name} isBlue = {false}/>
                </Col>
              ))}
            </Container>
          </Container>
          <Container fluid className='draftBans'>
            <Container fluid="md" className='blueBans'>
              {blue_bans.map((champ, index) => (
                <Col key={index}>
                    <ChampBan key={index} champName={champ.name} isBlue = {true}/>
                </Col>
              ))}
            </Container>
            <Container fluid="md" className='redBans'>
              {red_bans.map((champ, index) => (
                <Col key={index}>
                    <ChampBan key={index} champName={champ.name} isBlue = {false}/>
                </Col>
              ))}
            </Container>
          </Container>
      </>

    );
}

export default DraftLayout;