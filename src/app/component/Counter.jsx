"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [workout, setWorkout] = useState("");
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [workoutList, setWorkoutList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [searchWorkout, setSearchWorkout] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!workout.trim()) return;
          if (editId !== null) {
            //TODO: use new ID instead of index
            setWorkoutList(
              workoutList.map((item) =>
                item.id === editId
                  ? {
                      id: editId,
                      workout: workout,
                      weight: weight,
                      sets: sets,
                      reps: reps,
                    }
                  : item,
              ),
            );
            setEditId(null);
          } else {
            // TODO: add ID so when search is active, the right id is used
            setWorkoutList([
              ...workoutList,
              {
                id: Date.now(),
                workout: workout,
                weight: weight,
                sets: sets,
                reps: reps,
              },
            ]);
          }
          setWorkout("");
          setWeight("");
          setSets("");
          setReps("");
        }}
      >
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
        <button type="submit">Add workout</button>
        <button
          type="button"
          onClick={() => {
            setWorkout("");
            setWeight("");
            setSets("");
            setReps("");
          }}
        >
          Clear
        </button>
      </form>
      {workoutList //filters the array
        .filter((work, i) =>
          work.workout.toLowerCase().includes(searchWorkout.toLowerCase()),
        ) //renders the array contents
        .map((workout) => (
          <div key={workout.id}>
            <h2>{workout.workout}</h2>
            <h2>Weight: {workout.weight}</h2>
            <h2>Sets: {workout.sets}</h2>
            <h2>Reps: {workout.reps}</h2>
            <button
              onClick={() =>
                setWorkoutList(
                  workoutList.filter((item) => item.id !== workout.id),
                )
              }
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => {
                setWorkout(workout.workout);
                setWeight(workout.weight);
                setSets(workout.sets);
                setReps(workout.reps);
                setEditId(workout.id);
              }}
            >
              Edit
            </button>
          </div>
        ))}
      {/* <h2>{workoutList.length}</h2> */}
      {/* <h2>{workout}</h2> */}
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
