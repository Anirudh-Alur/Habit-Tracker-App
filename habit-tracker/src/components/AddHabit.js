// src/components/AddHabit.js
import React, { useState } from "react";
import "./AddHabit.css"; // Link to its CSS file

function AddHabit({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    onAddHabit(habitName); // Call the function passed from App.js
    setHabitName(""); // Clear the input field after adding
  };

  return (
    <form className="add-habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter habit name" // Updated placeholder as per screenshot
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)} // Update state on input change
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default AddHabit;
