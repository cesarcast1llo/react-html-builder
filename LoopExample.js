<div>
  {data.candidateInterviewDataById.map((diffJob, i) => {
    return (
      <div key={i}>
        <div>
          <h5>{diffjob.name}</h5>
          <span>{diffjob.lastJobTitle}</span>
          <span>{diffjob.oneLinePresentation}</span>
        </div>
      </div>
    );
  })}
</div>;
