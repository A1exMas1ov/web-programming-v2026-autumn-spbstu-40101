function makeCover(title, color) {
  const word = title.split(' ')[0];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="170" viewBox="0 0 120 170"><rect width="120" height="170" fill="${color}"/><text x="60" y="90" font-size="14" fill="#ffffff" text-anchor="middle" font-family="Arial">${word}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const data = [
  {
    id: 1,
    title: 'Война и мир',
    rating: 4.8,
    price: 890,
    color: '#8b3a3a',
    description: 'Роман-эпопея о судьбах нескольких семей во время войны с Наполеоном.',
  },
  {
    id: 2,
    title: 'Преступление и наказание',
    rating: 4.7,
    price: 520,
    color: '#3a5a8b',
    description: 'История студента Раскольникова и его борьбы с совестью.',
  },
  {
    id: 3,
    title: 'Мастер и Маргарита',
    rating: 4.9,
    price: 610,
    color: '#2f6b4f',
    description: 'Москва 1930-х, визит дьявола и история любви Мастера и Маргариты.',
  },
  {
    id: 4,
    title: 'Евгений Онегин',
    rating: 4.6,
    price: 350,
    color: '#7a5a2f',
    description: 'Роман в стихах о жизни русского дворянства начала XIX века.',
  },
  {
    id: 5,
    title: 'Мёртвые души',
    rating: 4.5,
    price: 430,
    color: '#5a3a7a',
    description: 'Чичиков скупает «мёртвые души» и путешествует по провинции.',
  },
  {
    id: 6,
    title: 'Анна Каренина',
    rating: 4.7,
    price: 570,
    color: '#3a6b7a',
    description: 'Трагическая история любви замужней женщины в высшем обществе.',
  },
];

const books = data.map((b) => ({ ...b, cover: makeCover(b.title, b.color) }));

export default books;
