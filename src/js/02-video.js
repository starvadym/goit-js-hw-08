// Добавь библиотеку как зависимость проекта через npm.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Инициализируй плеер в файле скрипта
const player = new Player('vimeo-player');

// Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения
// обновлялось в хранилище не чаще чем раз в секунду.

const throttledFunction = throttle(updateTime, 1000);

function updateTime(e) {
  localStorage.setItem(VIDEO_CURRENT_TIME, e.seconds);
}

// Начни отслеживать событие timeupdate - обновление времени воспроизведения.

player.on('timeupdate', throttledFunction);

// Сохраняй время воспроизведения в локальное хранилище.
// Пусть ключом для хранилища будет строка "videoplayer-current-time".

const VIDEO_CURRENT_TIME = 'videoplayer-current-time';

// При перезагрузке страницы воспользуйся методом setCurrentTime()
// для того чтобы возобновить воспроизведение с сохраненной позиции.

if (localStorage[VIDEO_CURRENT_TIME]) {
  player.setCurrentTime(localStorage[VIDEO_CURRENT_TIME]);
}



