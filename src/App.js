import React, { useEffect } from 'react';
import Main from './components/Main';
import { useTelegram } from './hooks/TelegramWebApp';

const App = () => {
  const { bot } = useTelegram();

  useEffect(() => {
    if (bot) {
      bot.ready();
    }
  }, [bot]);

  return (
    <div className="Mobile">
      <Main />
    </div>
  );
};

export default App;
