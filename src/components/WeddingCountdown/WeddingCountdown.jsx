import React, { useEffect, useState } from "react";
import "./weddingcountdown.css";

const WeddingCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date("December 10, 2025 00:00:00").getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container-countdown">
      <h1 className="title">Nos estamos casando</h1>

      <div className="venue">
        <h2 className="venue__name">Jardín de las Rosas</h2>
        <p className="venue__location">Santa Cruz, Bolivia</p>
      </div>

      <p className="message">
        Con la gracia y la bendición de Dios.
        <br />
        Esperamos celebrar nuestra boda en
        <br />
        presencia de nuestra familia y amigos el:
      </p>

      <p className="date">10 de Diciembre del 2025</p>

      <div className="countdown">
        <div className="countdown__item">
          <div className="countdown__number">
            {timeLeft.days.toString().padStart(2, "0")}
          </div>
          <div className="countdown__label">D</div>
        </div>
        <div className="countdown__item">
          <div className="countdown__number">
            {timeLeft.hours.toString().padStart(2, "0")}
          </div>
          <div className="countdown__label">H</div>
        </div>
        <div className="countdown__item">
          <div className="countdown__number">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </div>
          <div className="countdown__label">M</div>
        </div>
        <div className="countdown__item">
          <div className="countdown__number">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </div>
          <div className="countdown__label">S</div>
        </div>
      </div>

      <button className="calendar-button">Agregar al Calendario</button>
    </div>
  );
};

export default WeddingCountdown;
