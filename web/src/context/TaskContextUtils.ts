export const defaultTextColor = '#D9E3F0';

export const defaultTaskColor = '#697689';

export const defaultTaskHeight = 100;

export const defaultTaskWidth = 200;

export const data = JSON.parse(localStorage.getItem('tasks')!) || [
    {
        id: 0, 
        text: '',
        width: defaultTaskWidth,
        height: defaultTaskHeight,
        taskColor: defaultTaskColor,
        textColor: defaultTextColor
    }
];