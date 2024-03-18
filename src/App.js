import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

function App() {
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const [theme, setTheme] = useState('light');
    const history = useHistory();
    const handleStartClick = () => {
        setIsLoginVisible(true); // При нажатии на кнопку "Начать" делаем поля ввода видимыми
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark': 'light');
    }

    const continueWithoutLogin = () => {
        history.push('/landing'); // Перенаправляем пользователя на лендинг-страницу
    };

    return (
        <div className={`App ${theme}`}>
            <button className="theme-toggle-button" onClick={toggleTheme}>
                {theme === 'light' ? '🌚' : '🌝'}
            </button>
            <div className="card">
                {!isLoginVisible ? (
                    <div className="front">
                        <h1>Добро пожаловать в FinanceApp!</h1>
                        <p>Ваш надежный инструмент для управления финансами.</p>
                        <button className="button-glass" onClick={handleStartClick}>Начать</button>
                    </div>
                ) : (
                    <div className="login-form">
                        <h1>Войдите в аккаунт</h1>
                        <input type="text" placeholder="Логин" />
                        <input type="password" placeholder="Пароль" />
                        <button className="button-glass">Войти</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
