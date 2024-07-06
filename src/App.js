import { useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import { useTelegram } from './hooks/TelegramWebApp'

function App() {
  const {bot} = useTelegram();

  useEffect(() => {
    bot.ready()
  },[bot])



  
  return (
    <div className="Mobile">
      <Main/>
    </div>
  );
}

export default App;
