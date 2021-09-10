import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesJS: React.FC = (): JSX.Element => {
  return (
    <div
    style={{
      zIndex: -1,
      opacity: 0.3
    }}
    >
      <Particles
        params={{
          "fullScreen": {
            "enable": true,
            "zIndex": -1
          },
          "fpsLimit": 60,
          "particles": {
            "number": {
              "value": 60,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#fafafa",
              "animation": {
                "enable": true,
                "speed": 20,
                "sync": true
              }
            },
            "opacity": {
              "value": 0.5
            },
            "size": {
              "value": {
                "min": 0.1,
                "max": 3
              }
            },
            "links": {
              "enable": true,
              "distance": 100,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "outModes": {
                "default": "out"
              }
            }
          },
          "interactivity": {
            "detectsOn": "canvas",
            "events": {
              "onHover": {
                "enable": true,
                "mode": "grab"
              },
              "onClick": {
                "enable": true,
                "mode": "repulse"
              },
              "resize": true
            },
            "modes": {
              "repulse": {
                "distance": 250
              },
              "grab": {
                "distance": 230
              }
            }
          },
          "detectRetina": true,
          "background": {
            "color": "transparent"
          }
        }
        }
      />
    </div>
  )
}

export default ParticlesJS;