<template>
  <div class="wrapper">
    <div class="circular-slider">
      <div class="card">
        <RightThree />
      </div>
      <div class="card">
        <RightThree />
      </div>
      <div class="card">
        <RightThree />
      </div>
      <div class="card">
        <RightThree />
      </div>
    </div>
  </div>
</template>
<script>
import PiaChart from "../Charts/PieChart.vue";
import RightThree from "../RightPart/RightThree.vue";

export default {
  components: {
    PiaChart,
    RightThree,
  },
  mounted() {
    let slider;

    window.onload = () => {
      let cards = [...document.querySelectorAll(".card")];
      slider = document.querySelector(".circular-slider");
      distribute(cards);
    };

    function distribute(cards) {
      if (cards.length == 0) return;
      let angle = (Math.PI * 2) / cards.length;
      let radius = cards[0].offsetWidth / (2 * Math.tan(angle / 2)) + 16;
      slider.style.transformOrigin = `center center ${-radius}px`;
      cards.forEach((card, index) => {
        let tiltAngle = index * angle;
        let deltaZ = radius * (1 - Math.cos(tiltAngle));
        let deltaY = radius * Math.sin(tiltAngle);
        card.style.transform = `
            translate3d(${deltaY}px,0px,${-deltaZ}px)
            rotateY(${(tiltAngle * 180) / Math.PI}deg)
        `;
      });
      clg;
    }
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  perspective: 800px;
}

.circular-slider {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
}

.card {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  /* border-radius: 16px; */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.15);
  backface-visibility: hidden;
  transform-style: preserve-3d;
  perspective: 800px;
}

.circular-slider {
  /* background: linear-gradient(135deg, #ce9ffc 0%, #7367f0 100%); */
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0ff0b388 0%, #036ed988 100%);
}

.circular-slider {
  animation: trans 10s infinite ease-in-out;
}
@keyframes trans {
  0% {
    transform: rotateY(0) scale(1);
  }
  12.5% {
    transform: rotateY(30deg) scale(0.7);
  }
  20% {
    transform: rotateY(90deg) scale(1);
  }
  25% {
    transform: rotateY(90deg) scale(1);
  }
  37.5% {
    transform: rotateY(120deg) scale(0.7);
  }
  45% {
    transform: rotateY(180deg) scale(1);
  }
  50% {
    transform: rotateY(180deg) scale(1);
  }
  62.5% {
    transform: rotateY(210deg) scale(0.7);
  }
  70% {
    transform: rotateY(270deg) scale(1);
  }
  75% {
    transform: rotateY(270deg) scale(1);
  }
  87.5% {
    transform: rotateY(300deg) scale(0.7);
  }
  95% {
    transform: rotateY(360deg) scale(1);
  }
  100% {
    transform: rotateY(360deg) scale(1);
  }
}
/* 5 cards */
/* @keyframes trans {
  0% {
    transform: rotateY(0);
  }
  20% {
    transform: rotateY(72deg);
  }
  40% {
    transform: rotateY(144deg);
  }
  60% {
    transform: rotateY(216deg);
  }
  80% {
    transform: rotateY(288deg);
  }
  100% {
    transform: rotateY(360deg);
  }
} */
</style>
