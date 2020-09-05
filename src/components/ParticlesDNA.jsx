import React from 'react';
import Particles from 'react-particles-js';
import '../assets/styles/components/ParticlesDNA.scss';
import DNA from "../assets/dna.svg";

const ParticlesDNA = () => (
    <>
        {/* <Particles className="particles"
            params={{
	            "fps_limit": 28,
	            "particles": {
	                "collisions": {
	                    "enable": false
	                },
	                "number": {
	                    "value": 200,
	                    "density": {
	                        "enable": false
	                    }
	                },
	                "line_linked": {
	                    "enable": true,
	                    "distance": 30,
	                    "opacity": 0.4
	                },
	                "move": {
	                    "speed": 1
	                },
	                "opacity": {
	                    "anim": {
	                        "enable": true,
	                        "opacity_min": 0.05,
	                        "speed": 1,
	                        "sync": false
	                    },
	                    "value": 0.4
	                }
	            },
	            "polygon": {
	                "enable": true,
	                "scale": 0.5,
	                "type": "inline",
	                "move": {
	                    "radius": 10
	                },
	                "url": "../assets/letter.svg",
	                "inline": {
	                    "arrangement": "equidistant"
	                },
	                "draw": {
	                    "enable": true,
	                    "stroke": {
	                        "color": "rgba(255, 255, 255, .2)"
	                    }
	                }
	            },
	            "retina_detect": false,
	            "interactivity": {
	                "events": {
	                    "onhover": {
	                        "enable": true,
	                        "mode": "bubble"
	                    }
	                },
	                "modes": {
	                    "bubble": {
	                        "size": 6,
	                        "distance": 40
	                    }
	                }
	            }
	        }} 
        /> */}
        <Particles className="particles"
            params={{
	            "particles": {
	                "number": {
	                    "value": 150,
	                    "density": {
	                        "enable": true,
	                        "value_area": 1500
	                    }
					},
					"color": {
						"value":"random"
					},
	                "line_linked": {
	                    "enable": true,
						"opacity": 0.08,
						"color": "#556"
	                },
	                "move": {
	                    "direction": "right",
	                    "speed": 1
	                },
	                "size": {
						"value": 1.5,
						"random": true,
      					"anim": {
        					"enable": false,
        					"speed": 80,
        					"size_min": 0.1,
							"sync": false
						}
	                },
	                "opacity": {
	                    "anim": {
	                        "enable": true,
	                        "speed": 1,
	                        "opacity_min": 0.09
	                    }
	                }
	            },
	            "interactivity": {
	                "events": {
	                    "onclick": {
	                        "enable": true,
	                        "mode": "push"
	                    }
	                },
	                "modes": {
	                    "push": {
	                        "particles_nb": 1
	                    }
	                }
	            },
	            "retina_detect": true
            }}
        />

    </>
)

export default ParticlesDNA;