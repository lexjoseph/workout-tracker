"use client";

const WorkoutForm = ({
  workout,
  setWorkout,
  weight,
  setWeight,
  sets,
  setSets,
  reps,
  setReps,
  onSubmit,
  onClear,
  searchWorkout,
  setSearchWorkout,
  editId,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          value={workout}
          placeholder="Enter a workout"
          onChange={(e) => setWorkout(e.target.value)}
        ></input>

        <input
          value={searchWorkout}
          placeholder="Search Workout"
          onChange={(e) => setSearchWorkout(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          value={weight}
          placeholder="Enter weight"
          onChange={(e) => setWeight(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          value={sets}
          placeholder="Enter sets"
          onChange={(e) => setSets(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          value={reps}
          placeholder="Enter reps"
          onChange={(e) => setReps(e.target.value)}
        ></input>
      </div>
      <button type="submit">
        {editId !== null ? "Update Workout" : "Add Workout"}
      </button>
      <button type="button" onClick={onClear}>
        Clear
      </button>
    </form>
  );
};

export default WorkoutForm;
