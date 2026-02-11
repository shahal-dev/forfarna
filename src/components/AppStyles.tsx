import React from 'react';

const AppStyles: React.FC = () => (
  <style>{`
    @keyframes gradient-shift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-gradient-shift {
      animation: gradient-shift 3s ease infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-40px) rotate(2deg); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    @keyframes wiggle {
      0%, 100% { transform: rotate(-15deg); }
      50% { transform: rotate(15deg); }
    }
    .animate-wiggle {
      animation: wiggle 2.5s ease-in-out infinite;
    }
  `}</style>
);

export default AppStyles;
