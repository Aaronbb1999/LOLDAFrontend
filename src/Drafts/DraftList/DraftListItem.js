import logo from '../../resources/FNC.webp'
import logob from '../../resources/VIT.webp'


function DraftListItem({onSelectedDraft, draft}) {
    const blueLogo = require(`../../resources/${draft.blue_team.initials}.webp`);
    const redLogo = require(`../../resources/${draft.red_team.initials}.webp`);

    return (
        <div>
            <li onClick={() => onSelectedDraft(draft)}>
                <img src={blueLogo} alt="Blue Team Logo" />
                <span>{draft.blue_team.initials}</span>
                <span>-</span>
                <span>{draft.red_team.initials}</span>
                <img src={redLogo} alt="Red Team Logo" />

            </li>
        </div>
    );
}

export default DraftListItem;