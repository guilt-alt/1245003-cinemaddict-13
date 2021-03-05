export const onEscKeyDown = (evt) => evt.key === `Escape` ? true : false;

export const onCtrlEnterKeyDown = (evt) => (evt.ctrlKey && evt.key === `Enter`) ? true : false;

export const generateDuration = (hours, minutes) => hours === 0 ? `${minutes}m` : `${hours}h ${minutes}m`;

export const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};

export const shake = (element) => {
  element.style.animation = `shake ${600 / 1000}s`;
  setTimeout(() => {
    element.style.animation = ``;
  }, 600);
};
