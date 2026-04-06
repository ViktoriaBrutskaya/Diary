import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import GroupBar from './GroupBar';
import ModuleCard from '../../components/ModuleCard'; 
import ModuleModal from '../Modules/ModuleModal';

import ml1_1 from '../../images/ml1_1.svg';

const Groups = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedGroupId, setExpandedGroupId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);

  const isMobile = window.innerWidth <= 600;

  const mockGroups = [
    { id: 1, dayTime: "Пн 16:00", groupName: "Ср 1 год", color: "#F9D423" },
    { id: 2, dayTime: "Пн 18:20", groupName: "Мл 2 год", color: "var(--color-green)" },
    { id: 3, dayTime: "Вт 18:20", groupName: "Ср 1 год", color: "#F9D423" },
    { id: 4, dayTime: "Ср 16:00", groupName: "Ст 1 год", color: "#F9D423" },
  ];

  const mockModules = [
    { title: "Вводный модуль. Креативный инжиниринг и магия ИИ", desc: "Первые уроки с элементами визуального кодинга и ИИ", icon: ml1_1, lessonsCount: 4 },
    { title: "Scrath JR", desc: "Первые шаги в программировании", icon: ml1_1, lessonsCount: 5 },
  ];

  const toggleGroup = (id) => {
    setExpandedGroupId(prev => (prev === id ? null : id));
  };

  // --- СТИЛИ ДЛЯ АНИМАЦИИ ---
  
  const accordionContentStyle = (isOpen) => ({
    // Скрываем контент через высоту и прозрачность
    maxHeight: isOpen ? "1500px" : "0px", 
    opacity: isOpen ? 1 : 0,
    overflow: "hidden",
    // Плавный переход для высоты и прозрачности
    transition: "max-height 0.5s ease-in-out, opacity 0.4s ease-in-out",
    width: "100%"
  });

  const gridStyle = {
    display: "grid",
    // Если на мобилке 1 в ряд, на десктопе 250px
    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, 250px)", 
    gap: isMobile ? "15px" : "30px",
    padding: "30px 10px", // Добавили отступов, чтобы карточки не липли к полоске
    justifyContent: "center",
    justifyItems: "center"
  };

  const scrollContainer = { 
    padding: isMobile ? "20px 15px" : "40px 60px", 
    maxWidth: "1400px", 
    margin: "0 auto", 
    width: "100%", 
    boxSizing: "border-box" 
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden" }}>
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", backgroundColor: "white", overflowY: "auto" }}>
        <Header onMenuClick={() => setMenuOpen(true)} />

        <div style={scrollContainer}>
          <h1 style={{ marginBottom: '30px' }}>Мои группы</h1>

          {mockGroups.map(group => {
            const isOpen = expandedGroupId === group.id;
            return (
              <div key={group.id} style={{ marginBottom: "15px" }}>
                <GroupBar 
                  dayTime={group.dayTime}
                  groupName={group.groupName}
                  color={group.color}
                  onClick={() => toggleGroup(group.id)}
                />

                {/* Обертка для анимации */}
                <div style={accordionContentStyle(isOpen)}>
                  <div style={gridStyle}>
                    {mockModules.map((module, index) => (
                      <div key={index} onClick={() => {
                        setSelectedModule(module);
                        setIsModalOpen(true);
                      }} style={{ cursor: "pointer" }}>
                        <ModuleCard 
                          color={group.color}
                          title={module.title}
                          desc={module.desc}
                          icon={module.icon}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedModule && (
        <ModuleModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedModule.title}
          desc={selectedModule.desc}
          icon={selectedModule.icon}
          lessonsCount={selectedModule.lessonsCount}
        />
      )}
    </div>
  );
};

export default Groups;  