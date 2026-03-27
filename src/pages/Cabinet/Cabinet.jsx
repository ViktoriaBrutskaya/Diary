import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header'; 
import Alert from '../../components/Alert';   
import LessonCard from '../../components/LessonCard';
import './Cabinet.css'; // Импорт стилей

import ml1_1 from "../../images/ml1_1.svg";

const Cabinet = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main-wrapper">
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="content-area">
        <Header onMenuClick={() => setMenuOpen(true)} />

        <div className="scroll-container">
          
          <div className="top-section">
            <h1 className="group-title">Группа ВТ 16:00</h1>
            <Alert />
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default Cabinet;