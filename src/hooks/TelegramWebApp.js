const bot = window.Telegram.WebApp;

export function useTelegram() {
    const onClose = () => {
        bot.close();
    };

    const increment = (value, setValue) => {
        setValue(value + 1)
    };
    const decrement = (value, setValue) => {
        if (value > 0) {
            setValue(value - 1)
        }
    };
    return {
        onClose,
        increment,
        decrement,
        bot
    }

}