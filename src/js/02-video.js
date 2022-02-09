// Добавь библиотеку как зависимость проекта через npm.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Инициализируй плеер в файле скрипта
const player = new Player('vimeo-player');

// Сохраняй время воспроизведения в локальное хранилище.
// Пусть ключом для хранилища будет строка "videoplayer-current-time".

const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

// Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения
// обновлялось в хранилище не чаще чем раз в секунду.
// Начни отслеживать событие timeupdate - обновление времени воспроизведения.

player.on('timeupdate', throttle(onPlay, 1000));
const currentTime = localStorage.getItem('videoplayer-current-time');


// При перезагрузке страницы воспользуйся методом setCurrentTime()
// для того чтобы возобновить воспроизведение с сохраненной позиции.

if (currentTime) {
  player.setCurrentTime(currentTime || 0);
}



