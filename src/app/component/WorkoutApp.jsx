"use client";
import { useState } from "react";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";

const WorkoutApp = () => {

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

    </div>
  );
};

export default WorkoutApp;
