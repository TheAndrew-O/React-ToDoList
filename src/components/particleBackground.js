import Particles from "react-tsparticles";
import React from "react";
import particlesConfig from "./particleConfig";
const ParticleBackground = () => {
    return <div>
        <Particles options={{
        background: {
            color: "#c2c3c3",
        },
        fpsLimit: 60,
        interactivity: {
            detectsOn: "canvas",
            events: {
                resize: true
            },
        },
        particles: {
            color: {
                value: "f78da7",
            },
            number: {
                density: {
                    enable: true,
                    area: 1080
                },
                limit: 0,
                value: 400,
            },
            opacity: {
                animation: {
                    enable: true,
                    minimumValue: 0.5,
                    speed: 1,
                    sync: false
                },
                random: {
                    enable: true,
                    minimumValue: 0.5,
                },
                value: 1
            },
            shape: {
                type: "circle",
            },
            size: {
                random: {
                    enable: true,
                    minimumValue: 0.5,
                },
                value: 1,
            }
        }
    }}></Particles>
    </div>
};

export default ParticleBackground;
