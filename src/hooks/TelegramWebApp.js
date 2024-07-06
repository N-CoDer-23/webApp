const bot = window.Telegram.WebApp;
 
export function useTelegram(){
    const onClose = () => {
        bot.close();
    };

    const increment = (value, setvalue) => {
        setvalue(value + 1)
    }
    const decrement = (value, setvalue) => {
        setvalue(value - 1)
    }
    return {
        onClose,
        increment,
        decrement,
        bot
    }
}