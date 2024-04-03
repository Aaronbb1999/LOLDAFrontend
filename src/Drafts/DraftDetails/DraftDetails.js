import './DraftDetails.css'
import ChampCard from './ChampCard.js';

function DraftDetails({ draft }) {

    const winnerResult = <span className='winner'>1</span>
    const looserResult = <span className='looser'>0</span>

    const blue_picks = draft && [draft.draft.blue_pick_1, draft.draft.blue_pick_2, draft.draft.blue_pick_3, draft.draft.blue_pick_4, draft.draft.blue_pick_5];
    const red_picks = draft && [draft.draft.red_pick_1, draft.draft.red_pick_2, draft.draft.red_pick_3, draft.draft.red_pick_4, draft.draft.red_pick_5];


    return (
      <div className='draftDetails'>
        {draft ? (
          <>
            <div className="matchHeader">
              <img src={require(`../../resources/${draft.blue_team.initials}.webp`)} alt="Blue Team Logo" />
              <span className={`teamName`}>{draft.blue_team.name}</span>
              <div className='result'>
                  {draft.blue_wins ? winnerResult : looserResult}
                  <span> - </span>
                  {draft.blue_wins ? looserResult: winnerResult}
                  </div>
              <span className={`teamName`}>{draft.red_team.name}</span>
              <img src={require(`../../resources/${draft.red_team.initials}.webp`)} alt="Red Team Logo" />
            </div>
            <div className='draftChamps'>
              <div className='blueDraft'>
                {blue_picks.map((champ, index) => (
                  <ChampCard key={index} champName={champ.name} isBlue = {true}/>
                ))}
              </div>
              <div className='redDraft'>
                {red_picks.map((champ, index) => (
                  <ChampCard key={index} champName={champ.name} isBlue = {false}/>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p>Selecciona un partido para ver los detalles</p>
        )}
      </div>
    );
  }

export default DraftDetails;