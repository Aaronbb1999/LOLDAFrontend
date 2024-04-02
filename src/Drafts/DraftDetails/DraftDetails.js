function DraftDetails({ draft }) {
    return (
      <div>
        <h2>Detalles del Partido</h2>
        {draft ? (
          <div>
            <h3>{draft.title}</h3>
            <p>{draft.description}</p>
          </div>
        ) : (
          <p>Selecciona un partido para ver los detalles</p>
        )}
      </div>
    );
  }

export default DraftDetails;