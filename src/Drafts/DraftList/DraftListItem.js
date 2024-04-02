function DraftListItem({onSelectedDraft, draft, index}) {
    const blueLogo = require(`../../resources/${draft.blue_team.initials}.webp`);
    const redLogo = require(`../../resources/${draft.red_team.initials}.webp`);

    return (
        <div>
            <li key = {index} onClick={() => onSelectedDraft(draft)}>
                <img src={blueLogo} alt="Blue Team Logo" />
                <span className="initials">{draft.blue_team.initials}</span>
                <span>-</span>
                <span className="initials">{draft.red_team.initials}</span>
                <img src={redLogo} alt="Red Team Logo" />

            </li>
        </div>
    );
}

export default DraftListItem;