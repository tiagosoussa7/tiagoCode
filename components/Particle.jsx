"use client";

import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particle() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const loaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      className="container h-[80%] -z-10 absolute"
      init={init}
      loaded={loaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "",
          },
        },
        fps_limit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#5d009d",
          },
          links: {
            color: "#a02fee",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outMode: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
