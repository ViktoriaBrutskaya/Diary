import React, { useState, useRef } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header'; 
import Alert from '../../components/Alert';    
import LessonCard from '../../components/LessonCard';
import { useAuth } from '../../context/AuthContext';
import './Cabinet.css'; 

import ml1_1 from "../../images/ml1_1.svg";
import calendarIcon from "../../images/calendar.svg"; 

const Cabinet = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isTutor } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  
  const datePickerRef = useRef(null);

  const changeDate = (days) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + days);
    setSelectedDate(newDate);
  };

  const handleCalendarChange = (e) => {
    if (e.target.value) {
      setSelectedDate(new Date(e.target.value));
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
  };

  const isToday = selectedDate.toDateString() === new Date().toDateString();

 
  const tutorLessons = [
    { id: 1, time: "16:00", title: "Группа ВТ 16:00", num: "3", color: "var(--color-yellow)" },
    { id: 2, time: "18:20", title: "Группа ВТ 18:20", num: "12", color: "var(--color-green)" },
  ];

  return (
    <div className="main-wrapper">
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="content-area">
        <Header onMenuClick={() => setMenuOpen(true)} />

        <div className="scroll-container">
          
          <div className="top-section">
            {!isTutor ? (
              <>
                <h1 className="group-title">Группа ВТ 16:00</h1>
                <Alert />
              </>
            ) : (
             <div className="tutor-nav-container">
                <div className="calendar-controls">
                  <button className="arrow-btn" onClick={() => changeDate(-1)}>←</button>
                  
                  <div className={`date-display ${isToday ? 'is-today' : ''}`}>
                    <h1 className="group-title">{formatDate(selectedDate)}</h1>
                    {isToday && <span className="today-badge">Сегодня</span>}
                  </div>

                  <button className="arrow-btn" onClick={() => changeDate(1)}>→</button>

                  
                  <div className="calendar-icon-wrapper" onClick={() => datePickerRef.current.showPicker()}>
                    <img src={calendarIcon} alt="calendar" className="calendar-svg" />
                    <input 
                      type="date" 
                      ref={datePickerRef}
                      className="hidden-date-input" 
                      onChange={handleCalendarChange}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* КОНТЕНТ ДЛЯ ТЬЮТОРА */}
          {isTutor && (
            <div className="tutor-content">
              {tutorLessons.map(lesson => (
                <div key={lesson.id} className="lesson-block">
                  <div className="section-label">{lesson.time}</div>
                  <LessonCard 
                    lessonNum={lesson.num}
                    date={selectedDate.toLocaleDateString()}
                    coins="—"
                    color={lesson.color}
                    title={lesson.title}
                    desc="Нажмите, чтобы открыть детали занятия, список учеников и журнал посещаемости."
                    icon={ml1_1}
                  />
                </div>
              ))}
            </div>
          )}

          {/* КОНТЕНТ ДЛЯ УЧЕНИКА */}
          {!isTutor && (
            <>
              <div className="section-label">Текущее занятие</div>
              <LessonCard 
                lessonNum="3"
                date="21.10.2023"
                coins="150"
                color="var(--color-yellow)"
                title="Введение в мир программирования"
                desc="Первые уроки с элементами визуального кодинга и ИИ для вовлечения ребенка в мир программирования"
                icon={ml1_1}
              />
              <div className="section-label">Следующее занятие</div>
              <LessonCard 
                lessonNum="4"
                date="28.10.2023"
                coins="200"
                color="var(--color-yellow)"
                title="Введение в мир программирования"
                desc="Первые уроки с элементами визуального кодинга и ИИ для вовлечения ребенка в мир программирования"
                icon={ml1_1}
              />
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default Cabinet;