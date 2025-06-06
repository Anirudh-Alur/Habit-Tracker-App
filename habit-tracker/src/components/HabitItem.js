
import React from "react";
import "./HabitItem.css"; 

function HabitItem({ habit, onToggleDay, onDeleteHabit }) {
  const { id, name, days } = habit;

 
  const checkStreak = (daysArray) => {
    let streakCount = 0;
   
    for (let i = 0; i < daysArray.length; i++) {
      if (daysArray[i]) {
        streakCount++; 
        if (streakCount >= 3) {
          return true; 
        }
      } else {

        streakCount = 0; 
      }
    }
    return false; 
  };

  const hasStreak = checkStreak(days); 
  return (
    <div className="habit-item">
      <div className="habit-content">
        <div className="habit-name-and-streak">
          <h3>{name}</h3> {/* Habit name */}
          {hasStreak && <span className="fire-icon">🔥</span>}{" "}
          {/* Fire icon for streak */}
        </div>
        <div className="day-buttons">
          {days.map((completed, index) => (
            <button
              key={index} // Unique key for React list rendering of buttons
              className={
                completed ? "day-button completed" : "day-button incomplete"
              } 
              onClick={() => onToggleDay(id, index)} 
            >
              {index + 1} 
            </button>
          ))}
        </div>
      </div>
      <button className="delete-button" onClick={() => onDeleteHabit(id)}>
        Delete 
      </button>
    </div>
  );
}

export default HabitItem;
