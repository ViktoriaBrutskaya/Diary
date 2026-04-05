import React, { useState } from 'react';
import ModuleModal from './ModuleModal'; 
import YearSection from './YearSection';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

import ml1_1 from '../../images/ml1_1.svg'
import ml1_2 from '../../images/ml1_2.svg'
import ml1_3 from '../../images/ml1_3.svg'


const Modules = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openYears, setOpenYears] = useState([1]); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);

  const toggleYear = (year) => {
    setOpenYears(prev => 
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };

  const handleModuleClick = (module) => {
    setSelectedModule(module);
    setIsModalOpen(true);
  };

  // --- Стили ---
  const mainWrapper = {
    display: "flex",
    height: "100vh",
    width: "100vw",
    overflow: "hidden" 
  };

  const contentArea = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    overflowY: "auto" 
  };

  const scrollContainer = {
    padding: "40px 60px", 
    maxWidth: "1400px",
    margin: "0 auto", 
    width: "100%",
    boxSizing: "border-box"
  };

  const mockModules = [
    { 
        title: "Вводный модуль. Креативный инжиниринг и магия ИИ", 
        desc: "Первые уроки с элементами визуального кодинга и ИИ для вовлечения ребенка", 
        icon: ml1_1, 
        lessonsCount: 4,
        isLocked: false 
    },
    { 
        title: "Scrath JR", 
        desc: "Первые шаги в программировании для детей. Учим и понимаем команды без кода", 
        icon: ml1_2,
        lessonsCount: 5,
        isLocked: true 
    },
    { 
        title: "Логика и алгоритмы через Code Monkey", 
        desc: "Изучим основы алгоритмики и логики, научимся креативно подходить к  решению задач разной сложности", 
        icon: ml1_3,
        lessonsCount: 12,
        isLocked: true 
    },
  ];

  return (
    <div style={mainWrapper}>
 
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      
      <div style={contentArea}>
      
        <Header onMenuClick={() => setMenuOpen(true)} />

        
        <div style={scrollContainer}>
          <YearSection 
            yearTitle="1 год" 
            color="#F9D423" 
            modules={mockModules}
            isOpen={openYears.includes(1)}
            onToggle={() => toggleYear(1)}
            onModuleClick={handleModuleClick} 
          />
          
          <YearSection 
            yearTitle="2 год" 
            color="var(--color-green)" 
            modules={mockModules}
            isOpen={openYears.includes(2)}
            onToggle={() => toggleYear(2)}
            onModuleClick={handleModuleClick}
          />

          <YearSection 
            yearTitle="3 год" 
            color="var(--color-light-blue)" 
            modules={mockModules}
            isOpen={openYears.includes(3)}
            onToggle={() => toggleYear(3)}
            onModuleClick={handleModuleClick}
          />

          <YearSection 
            yearTitle="4 год" 
            color="var(--color-blue)" 
            modules={mockModules}
            isOpen={openYears.includes(4)}
            onToggle={() => toggleYear(4)}
            onModuleClick={handleModuleClick}
          />
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

export default Modules;