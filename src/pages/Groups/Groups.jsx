import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import GroupBar from './GroupBar';
import YearSection from '../Modules/YearSection'; 
import ModuleModal from '../Modules/ModuleModal';

import ml1_1 from '../../images/ml1_1.svg';

const Groups = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);

  const mockGroups = [
    { id: 1, dayTime: "Пн 16:00", groupName: "Ср 1 год", color: "#F9D423" },
    { id: 2, dayTime: "Пн 18:20", groupName: "Мл 2 год", color: "var(--color-green)" },
    { id: 3, dayTime: "Вт 18:20", groupName: "Ср 1 год", color: "#F9D423" },
    { id: 4, dayTime: "Ср 16:00", groupName: "Ст 1 год", color: "#F9D423" },
  ];

  const mockModules = [
    { 
        title: "Вводный модуль. Креативный инжиниринг и магия ИИ", 
        desc: "Первые уроки с элементами визуального кодинга и ИИ", 
        icon: ml1_1, 
        lessonsCount: 4,
        isLocked: false 
    },
    // ... можно добавить еще
  ];

  // Стили из твоего Modules.jsx
  const mainWrapper = { display: "flex", height: "100vh", width: "100vw", overflow: "hidden" };
  const contentArea = { flexGrow: 1, display: "flex", flexDirection: "column", backgroundColor: "white", overflowY: "auto" };
  const scrollContainer = { padding: "40px 60px", maxWidth: "1400px", margin: "0 auto", width: "100%", boxSizing: "border-box" };

  return (
    <div style={mainWrapper}>
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div style={contentArea}>
        <Header onMenuClick={() => setMenuOpen(true)} />

        <div style={scrollContainer}>
          {/* Кнопка Назад, если зашли в группу */}
          {selectedGroup && (
            <button 
              onClick={() => setSelectedGroup(null)}
              style={{ marginBottom: '20px', cursor: 'pointer', border: 'none', background: 'none', color: 'var(--color-blue)', fontWeight: 'bold' }}
            >
              ← Назад к списку групп
            </button>
          )}

          <h1 style={{ marginBottom: '30px' }}>
            {selectedGroup ? `Модули группы: ${selectedGroup.groupName}` : "Мои группы"}
          </h1>

          {!selectedGroup ? (
            // Рендерим список групп как на скрине
            mockGroups.map(group => (
              <GroupBar 
                key={group.id}
                dayTime={group.dayTime}
                groupName={group.groupName}
                color={group.color}
                onClick={() => setSelectedGroup(group)}
              />
            ))
          ) : (
            // Рендерим модули выбранной группы
            <YearSection 
              yearTitle={selectedGroup.groupName} 
              color={selectedGroup.color} 
              modules={mockModules}
              isOpen={true}
              onToggle={() => {}}
              onModuleClick={(mod) => {
                setSelectedModule(mod);
                setIsModalOpen(true);
              }} 
            />
          )}
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
          isLocked={selectedModule.isLocked}
        />
      )}
    </div>
  );
};

export default Groups;