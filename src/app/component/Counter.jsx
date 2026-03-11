"use client";
import { useState } from "react";

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

const Counter = () => {
  //random counter
  //const [count, setCount] = useState(0);

  //properties for workout
  const [workout, setWorkout] = useState("");
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const [workoutList, setWorkoutList] = useState([]);

  const [editId, setEditId] = useState(null);

  const [searchWorkout, setSearchWorkout] = useState("");

  const resetForm = () => {
    setWorkout("");
    setWeight("");
    setSets("");
    setReps("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!workout.trim()) return;

    const workoutItem = {
      id: editId ?? Date.now(),
      workout: workout,
      weight: weight,
      sets: sets,
      reps: reps,
    };

    if (editId !== null) {
      //TODO: use new ID instead of index - Done
      setWorkoutList(
        workoutList.map((item) => (item.id === editId ? workoutItem : item)),
      );
      setEditId(null);
    } else {
      // TODO: add ID so when search is active, the right id is used - DONE
      setWorkoutList([workoutItem, ...workoutList]);
    }
    resetForm();
  };

  const handleClear = () => {
    resetForm();
    setEditId(null);
  };

  const handleEdit = (workoutItem) => {
    setWorkout(workoutItem.workout);
    setWeight(workoutItem.weight);
    setSets(workoutItem.sets);
    setReps(workoutItem.reps);
    setEditId(workoutItem.id);
  };

  const handleDelete = (id) => {
    setWorkoutList(workoutList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <WorkoutForm
        workout={workout}
        setWorkout={setWorkout}
        weight={weight}
        setWeight={setWeight}
        sets={sets}
        setSets={setSets}
        reps={reps}
        setReps={setReps}
        onSubmit={handleSubmit}
        onClear={handleClear}
        searchWorkout={searchWorkout}
        setSearchWorkout={setSearchWorkout}
        editId={editId}
      />

      <WorkoutList
        workoutList={workoutList}
        searchWorkout={searchWorkout}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      {/* <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        -
      </button> */}
    </div>
  );
};

export default Counter;
