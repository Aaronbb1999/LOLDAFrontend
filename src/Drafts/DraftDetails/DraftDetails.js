import './DraftDetails.css'
import ChampCard from './ChampCard.js';

function DraftDetails({ draft }) {

    const winnerResult = <span className='winner'>1</span>
    const looserResult = <span className='looser'>0</span>

    

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
                <ChampCard champName={draft.draft.blue_pick_1.name}/>
                <ChampCard champName={draft.draft.blue_pick_2.name}/>
                <ChampCard champName={draft.draft.blue_pick_3.name}/>
                <ChampCard champName={draft.draft.blue_pick_4.name}/>
                <ChampCard champName={draft.draft.blue_pick_5.name}/>
            </div>
          </>
        ) : (
          <p>Selecciona un partido para ver los detalles</p>
        )}
      </div>
    );
  }

export default DraftDetails;