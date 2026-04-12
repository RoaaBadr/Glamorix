import { useEffect, useState, useCallback } from 'react';

const THEMES = {
    LIGHT: 'winter',
    DARK: 'night',
};

const DEFAULT_THEME = THEMES.LIGHT;

function useTheme() {
    const [theme, setThemeState] = useState(() => {
        if (typeof window === 'undefined') return DEFAULT_THEME;
        const savedTheme = DEFAULT_THEME; // Always start with light
        document.documentElement.setAttribute('data-theme', savedTheme);
        localStorage.setItem('theme', savedTheme); // Ensure it's saved
        return savedTheme;
    });

    const setTheme = useCallback((newTheme) => {
        const validTheme = Object.values(THEMES).includes(newTheme) ? newTheme : DEFAULT_THEME;
        
        try {
            localStorage.setItem('theme', validTheme);
        } catch (error) {
            console.warn('Failed to save theme to localStorage:', error);
        }
        
        document.documentElement.setAttribute('data-theme', validTheme);
        setThemeState(validTheme);
    }, []);

    useEffect(() => {
        const updateTheme = () => {
            const current = document.documentElement.getAttribute('data-theme');
            setThemeState(current || DEFAULT_THEME);
        };

        updateTheme();

        const observer = new MutationObserver(() => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            setThemeState(currentTheme || DEFAULT_THEME);
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });

        return () => observer.disconnect();
    }, []);

    return { theme, setTheme, themes: THEMES };
}

export { useTheme, THEMES, DEFAULT_THEME };
export default useTheme;