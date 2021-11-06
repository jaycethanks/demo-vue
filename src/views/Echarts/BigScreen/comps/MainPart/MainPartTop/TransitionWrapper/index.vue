<template>
  <div class="transition-root-wrapper">
    <transition
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <div v-if="toggle" class="transition-boxs flag-left-side-box1">
        <dv-border-box-13
          :reverse="true"
          :color="['rgb(80, 224, 247)']"
          style="padding:1rem"
          :background-color="'rgba(56, 228, 255, 0.2)'"
        >
          <div class="transition-innner-wrapper flex justify-between">
            <div class="left-flex-con">
              <div class="flag flag-icon" :class="regionName"></div>
            </div>
            <div class="right-flex-con flex flex-col justify-around">
              <div class="title-country">
                {{ country }}
              </div>
              <div class="fake-fielda">
                {{ fake.fakea }}
              </div>
            </div>
          </div>
        </dv-border-box-13>
      </div>
    </transition>

    <transition
      enter-active-class="animate__animated animate__fadeInLeft animate__delay-1s"
      leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <div v-if="toggle" class="transition-boxs flag-left-side-box2">
        <dv-border-box-8
          :color="['rgba(80, 224, 247, 0.56)', 'rgba(80, 224, 247, 0.64)']"
          style="padding:1rem"
          :background-color="'rgba(56, 228, 255, 0.13)'"
          ><span class="text-field"
            >XXXXXXXXXXXXXXXXXXXXXX</span
          ></dv-border-box-8
        >
      </div>
    </transition>

    <transition
      enter-active-class="animate__animated animate__fadeInLeft animate__delay-2s"
      leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <div v-if="toggle" class="transition-boxs flag-left-side-box3">
        <dv-border-box-8
          :color="['rgba(80, 224, 247, 0.56)', 'rgba(80, 224, 247, 0.64)']"
          style="padding:1rem"
          :background-color="'rgba(56, 228, 255, 0.13)'"
          ><span class="text-field"
            >XXXXXXXXXXXXXXXXXXXXXX</span
          ></dv-border-box-8
        >
      </div>
    </transition>

    <transition
      enter-active-class="animate__animated animate__fadeInLeft animate__delay-3s"
      leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <div v-if="toggle" class="transition-boxs flag-left-side-box4">
        <dv-border-box-8
          :color="['rgba(80, 224, 247, 0.56)', 'rgba(80, 224, 247, 0.64)']"
          style="padding:1rem"
          :background-color="'rgba(56, 228, 255, 0.13)'"
          ><span class="text-field"
            >XXXXXXXXXXXXXXXXXXXXXX</span
          ></dv-border-box-8
        >
      </div>
    </transition>
    <transition
      enter-active-class="animate__animated animate__fadeInLeft animate__delay-4s"
      leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <div v-if="toggle" class="transition-boxs flag-left-side-box5">
        <dv-border-box-8
          :color="['rgba(80, 224, 247, 0.56)', 'rgba(80, 224, 247, 0.64)']"
          style="padding:1rem"
          :background-color="'rgba(56, 228, 255, 0.13)'"
          ><span class="text-field"
            >XXXXXXXXXXXXXXXXXXXXXX</span
          ></dv-border-box-8
        >
      </div>
    </transition>

    <transition
      enter-active-class="animate__animated animate__zoomIn"
      leave-active-class="animate__animated animate__fadeOutRight"
    >
      <div v-if="toggle" class="transition-boxs-right tran-right-side-1">
        <dv-border-box-5
          :color="['rgba(80, 224, 247, 0.56)', 'rgba(80, 224, 247, 0.64)']"
          style="padding:2rem"
          :background-color="'rgba(56, 228, 255, 0.13)'"
          :reverse="true"
        >
          <PieA />
        </dv-border-box-5>
      </div>
    </transition>
    <!-- <transition
      enter-active-class="animate__animated animate__zoomInRight "
      leave-active-class="animate__animated animate__zoomOutRight"
    >
    </transition> -->
  </div>
</template>
<script>
import PieA from "../TransitionChart/PieA.vue";
export default {
  components: { PieA },
  data() {
    return {
      toggle: false,
      country: "",
      fake: {
        fakea: "",
      },
      regionName: "flag-icon-ls",
    };
  },
  methods: {
    toggleEvent(val) {
      console.log(val, "--line81");
      // return;
      this.country = val;
      this.toggle = true;
      this.fake.fakea = (Math.random() * 9999999).toFixed(0);
      let regionList = [
        {
          name: "Angola",
          simp: "ao",
        },
        {
          name: "Benin",
          simp: "bj",
        },
        {
          name: "Cameroon",
          simp: "cm",
        },
        {
          name: "Kenya",
          simp: "ke",
        },
        {
          name: "Botswana",
          simp: "bw",
        },
        {
          name: "Ghana",
          simp: "gh",
        },
        {
          name: "Gabon",
          simp: "ga",
        },
        {
          name: "Rwanda",
          simp: "rw",
        },
        {
          name: "Sierra Leone",
          simp: "sl",
        },
        {
          name: "Swaziland",
          simp: "sz",
        },
        {
          name: "Tanzania",
          simp: "tz",
        },
        {
          name: "Togo",
          simp: "tg",
        },
        {
          name: "Uganda",
          simp: "ug",
        },
        {
          name: "Namibia",
          simp: "na",
        },
        {
          name: "Mozambique",
          simp: "mz",
        },
        {
          name: "Ethiopia",
          simp: "et",
        },
        {
          name: "Lesotho",
          simp: "ls",
        },
        {
          name: "Madagascar",
          simp: "mg",
        },
        {
          name: "Malawi",
          simp: "mw",
        },
        {
          name: "Zambia",
          simp: "zm",
        },
        {
          name: "Zimbabwe",
          simp: "zw",
        },
        {
          name: "Peru",
          simp: "pe",
        },
        {
          name: "Vietnam",
          simp: "vn",
        },
        {
          name: "Nigeria",
          simp: "ng",
        },
        {
          name: "Indonesia",
          simp: "id",
        },
        {
          name: "France",
          simp: "fr",
        },
        {
          name: "India",
          simp: "in",
        },
        {
          name: "Italy",
          simp: "it",
        },
        {
          name: "Cambodia",
          simp: "kh",
        },
        {
          name: "Greece",
          simp: "gr",
        },
        {
          name: "Burkina Faso",
          simp: "bf",
        },
        {
          name: "Liberia",
          simp: "lr",
        },
        {
          name: "Philippines",
          simp: "ph",
        },
        {
          name: "Niger",
          simp: "ne",
        },
        {
          name: "Kazakhstan",
          simp: "kz",
        },
        {
          name: "Egypt",
          simp: "eg",
        },
      ];
      regionList.forEach((i) => {
        if (i.name == val) {
          this.regionName = "flag-icon-" + i.simp;
        }
      });
      console.log(this.regionName, "--line381");
      setTimeout(() => {
        this.toggle = false;
      }, 4000);
    },
  },
};
</script>
<style lang="scss">
:root {
  --animate-delay: 0.1s !important ; //animate.css 延迟时长系数
}
.transition-root-wrapper {
  .transition-boxs {
    position: absolute;
    left: 1rem;
    .text-field {
      font-size: 1rem;
      font-weight: bold;
      color: rgb(56, 228, 255);
      filter: brightness(110%);
      text-shadow: 0 0 5px rgb(80, 224, 247), 0 0 30px rgba(80, 224, 247, 0.77);
    }
  }
  .transition-boxs-right {
    position: absolute;
    right: 1rem;
  }
  .flag-left-side-box1 {
    bottom: 18rem;
    .transition-innner-wrapper {
      position: relative;
      width: 20rem;
      .left-flex-con {
        .flag {
          height: 6rem;
          width: 8rem;
        }
      }
      .right-flex-con {
        .title-country {
          font-size: 1.4rem;
          font-weight: bold;
          color: rgb(56, 228, 255);
          filter: brightness(110%);
          text-shadow: 0 0 5px rgb(80, 224, 247),
            0 0 30px rgba(80, 224, 247, 0.77);
        }
        .fake-fielda {
          font-size: 40px;
          filter: brightness(110%);
          color: rgb(0, 255, 242);
          text-shadow: 0 0 5px rgb(80, 224, 247),
            0 0 30px rgba(80, 224, 247, 0.77);
        }
      }
    }
  }
  .flag-left-side-box2 {
    min-width: 22rem;
    // min-height: 4rem;
    bottom: 13rem;
  }
  .flag-left-side-box3 {
    min-width: 22rem;
    // min-height: 4rem;
    bottom: 9rem;
  }
  .flag-left-side-box4 {
    min-width: 22rem;
    // min-height: 4rem;
    bottom: 5rem;
  }
  .flag-left-side-box5 {
    min-width: 22rem;
    // min-height: 4rem;
    bottom: 1rem;
  }
  .tran-right-side-1 {
    // border: 1px solid red;
    bottom: 1rem;
    width: 15rem;
    height: 15rem;
  }
}
</style>
