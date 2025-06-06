// src/App.js
import React, { useState } from "react";
import AddHabit from "./components/AddHabit";
import HabitList from "./components/HabitList";
import "./App.css"; // Link to its CSS file

function App() {
  const [habits, setHabits] = useState([]);

  // Function to add a new habit
  const addHabit = (habitName) => {
    if (habitName.trim() === "") return; // Prevent adding empty habits
    const newHabit = {
      id: Date.now(), // Unique ID (timestamp) for the habit
      name: habitName,
      days: Array(7).fill(false), // Initialize 7 days, all marked as incomplete (false)
    };
    setHabits([...habits, newHabit]); // Add new habit to the existing list
  };

  // Function to toggle the completion status of a specific day for a habit
  const toggleDay = (habitId, dayIndex) => {
    setHabits(
      habits.map(
        (habit) =>
          habit.id === habitId
            ? {
                // If it's the target habit, create a new object with updated 'days'
                ...habit,
                days: habit.days.map(
                  (completed, i) => (i === dayIndex ? !completed : completed) // Toggle the specific day's status
                ),
              }
            : habit // Otherwise, return the habit as is
      )
    );
  };

  // Function to delete a habit
  const deleteHabit = (habitId) => {
    setHabits(habits.filter((habit) => habit.id !== habitId)); // Filter out the habit to be deleted
  };

  return (
    <div className="app-container">
      <div className="app-card">
        {" "}
        {/* Container for the white card background as per screenshot */}
        <h1>Habit Tracker</h1>
        <AddHabit onAddHabit={addHabit} />{" "}
        <HabitList
          habits={habits}
          onToggleDay={toggleDay}
          onDeleteHabit={deleteHabit} // Pass deleteHabit function
        />
      </div>
    </div>
  );
}

export default App;
