import { configureStore } from '@reduxjs/toolkit';

// Пример пустого редьюсера
const rootReducer = {
    // Добавляйте ваши слайсы сюда
};

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
