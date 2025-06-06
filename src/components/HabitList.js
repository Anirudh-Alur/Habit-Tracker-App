import React from "react";
import HabitItem from "./HabitItem";
import "./HabitList.css";

function HabitList({ habits, onToggleDay, onDeleteHabit }) {
  // Added onDeleteHabit
  return (
    <div className="habit-list">
      {habits.length === 0 ? (
        <p className="no-habits-message">
          No habits added yet. Start tracking!
        </p>
      ) : (
        habits.map((habit) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            onToggleDay={onToggleDay}
            onDeleteHabit={onDeleteHabit} // Pass onDeleteHabit
          />
        ))
      )}
    </div>
  );
}

export default HabitList;
