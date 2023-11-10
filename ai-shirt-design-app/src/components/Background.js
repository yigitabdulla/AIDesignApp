import React from 'react';
import Particles from "react-particles"
import { loadLinksPreset } from "tsparticles-preset-links"

export class ParticlesContainer extends React.PureComponent {
  // this customizes the component tsParticles installation
  async customInit(engine) {
    // this adds the preset to tsParticles, you can safely use the
    await loadLinksPreset(engine)
  }

  render() {
    const options = {
      preset: "links",
      fullScreen: { "zIndex": -1 },
      background: {
        color: "000000",
      },
      particles: {
        number: {
          value: 25,
        },
        
      },

    }

    return <Particles options={options} init={this.customInit} />
  }
}
