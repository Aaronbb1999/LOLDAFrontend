import { React } from "react";

function DraftListItem({onSelectedDraft, draft, isSelected}) {
    const blueLogo = require(`../../resources/${draft.blue_team.initials}.webp`);
    const redLogo = require(`../../resources/${draft.red_team.initials}.webp`);

    const handleClick = () => {
        onSelectedDraft(draft); 
        console.log("clicked: " + draft.id)
      };
    

    return (
        <>
            <li className={`${isSelected ? 'selected' : ''}`} 
                onClick={() => handleClick()} 
                key={draft.id}>
                    <img src={blueLogo} alt="Blue Team Logo" />
                    <span className="initials">{draft.blue_team.initials}</span>
                    <span>-</span>
                    <span className="initials">{draft.red_team.initials}</span>
                    <img src={redLogo} alt="Red Team Logo" />
            </li>
        </>
    );
}

export default DraftListItem;