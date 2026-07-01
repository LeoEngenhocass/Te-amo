const slides = [
  {
    src: 'fotos/1.jpg',
    title: 'A primeira foto que a gente postou',
    text: 'Essa foi o começo da nossa história, e desde então meu coração só faz te amar mais.'
  },
  {
    src: 'fotos/2.jpg',
    title: 'Nossos momentos',
    text: 'Cada instante ao seu lado vira um carinho guardado no meu peito.'
  },
  {
    src: 'fotos/3.jpg',
    title: 'A foto dela criança',
    text: 'Mesmo criança, você já era a personificação da ternura e da beleza.'
  },
  {
    src: 'fotos/3be175e2-df98-43f1-89dc-a64dbe17c5b9.jpg',
    title: 'Nossa felicidade',
    text: 'Você é o meu amor, a minha razão e a minha casa.'
  },
  {
    src: 'fotos/70ca163f-e22a-4ef0-a731-366c2c3a6eed.jpg',
    title: 'Meu amor verdadeiro',
    text: 'Não consigo viver sem você, Ana. Meu coração te escolhe todos os dias.'
  },
  {
    src: 'fotos/7b46b561-49fa-4530-980d-e1791f463704.jpg',
    title: 'Nosso amor',
    text: 'Você é o meu sorriso, o meu abrigo e a minha eternidade.'
  },
  {
    src: 'fotos/e5bdca92-894a-4329-9d94-6fceb8f6060d.jpg',
    title: 'Sempre você',
    text: 'Mesmo nos dias mais simples, você é o meu amor mais bonito.'
  }
];

const slideImage = document.getElementById('slideImage');
const slideTitle = document.getElementById('slideTitle');
const slideText = document.getElementById('slideText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.getElementById('dots');

let currentIndex = 0;

function renderDots() {
  dots.innerHTML = '';
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `dot ${index === currentIndex ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Ir para a foto ${index + 1}`);
    dot.addEventListener('click', () => showSlide(index));
    dots.appendChild(dot);
  });
}

function showSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  const slide = slides[currentIndex];
  slideImage.src = slide.src;
  slideImage.alt = slide.title;
  slideTitle.textContent = slide.title;
  slideText.textContent = slide.text;
  renderDots();
}

prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

setInterval(() => showSlide(currentIndex + 1), 5000);

showSlide(0);
