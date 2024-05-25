import { useState } from 'react';
import './App.css';

interface DateAndTime {
  date: string;
  time: string[];
}

const initTime: string[] = [];

function handlePadStart(param: number): string {
  return String(param).padStart(2, '0');
}

function getDateAndTime(): DateAndTime {
  const dayMap: Array<string> = ['天', '一', '二', '三', '四', '五', '六'];
  const date = new Date();
  return {
    date: `${date.getFullYear()}-${handlePadStart(date.getMonth())}-${handlePadStart(date.getDate())} 星期${dayMap[date.getDay()]}`,
    time: [handlePadStart(date.getHours()), handlePadStart(date.getMinutes()), handlePadStart(date.getSeconds())]
  };
}

function App() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(initTime);

  setInterval(() => {
    const {date, time} = getDateAndTime();
    setDate(date);
    setTime(time);
  }, 1000);

  return (
    <div className='App'>
      <div className='flex flex-col justify-center items-center h-screen bg-black text-white'>
        <div className='w-full pb-36 text-8xl'>{date}</div>
        <ul className='flex justify-center w-full text-9xl'>
          {/* {time} */}
          <li className='bg-gray-600 p-8 mr-8 clock-time'>{time[0]}</li>
          <li className='bg-gray-600 p-8 mr-8 clock-time'>{time[1]}</li>
          <li className='bg-gray-600 p-8 clock-time'>{time[2]}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
