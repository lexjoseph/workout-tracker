const WorkoutList = ({ workoutList, searchWorkout, onDelete, onEdit }) => {
  return (
    <>
      {workoutList //filters the array
        .filter((work) =>
          work.workout.toLowerCase().includes(searchWorkout.toLowerCase()),
        ) //renders the array contents
        .map((workout) => (
          <div key={workout.id}>
            <h2>{workout.workout}</h2>
            <h2>Weight: {workout.weight}</h2>
            <h2>Sets: {workout.sets}</h2>
            <h2>Reps: {workout.reps}</h2>
            <button type="button" onClick={() => onDelete(workout.id)}>
              Delete
            </button>
            <button type="button" onClick={() => onEdit(workout)}>
              Edit
            </button>
          </div>
        ))}
    </>
  );
};

export default WorkoutList;
