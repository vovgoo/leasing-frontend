import React, { useEffect, useRef } from 'react';

const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Задаем размеры canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];

    // Количество частиц
    const numberOfParticles = 100;

    // Класс частицы
    class Particle {
      constructor() {
        // Случайное начальное положение, радиус и скорость
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }

      // Обновление положения частицы
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Перемещаем частицы обратно, если они выходят за пределы экрана
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY;
        }
      }

      // Отрисовка частицы
      draw() {
        ctx.fillStyle = 'white'; // Цвет частиц
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)'; // Цвет свечения
        ctx.shadowBlur = 15; // Радиус свечения
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Создаем частицы и помещаем их в массив
    function initParticles() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    // Функция анимации
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем холст
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate); // Запускаем анимацию
    }

    // Инициализируем и запускаем анимацию
    initParticles();
    animate();

    // Обновляем размеры canvas при изменении размеров окна
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Очистка при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas className='absolute z-20 opacity-30' ref={canvasRef} />;
};

export default Particles;
