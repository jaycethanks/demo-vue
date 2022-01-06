<template>
  <!-- <dv-decoration-8 class="header-left-decoration" />
    <dv-decoration-5 class="header-center-decoration" />
    <dv-decoration-8 class="header-right-decoration" :reverse="true" /> -->
  <div class="header-root-wrapper flex justify-between items-center">
    <div class="clock-wrapper">
      <dv-border-box-7 :color="['#0e2d5b', '#3781c2']" class="dv-border-box-7">
        <div style="height: 100%" class="flex justify-center items-center">
          {{ date }}
          <!-- <br /> -->
          {{ time }}
        </div>
      </dv-border-box-7>
    </div>
    <div class="title-wrapper flex flex-col justify-center items-center">
      <div class="main-title">
        <span>莱宸系统运营展示</span>
      </div>
      <div class="sub-title">
        <span>Laison. System Operation Visualization</span>
      </div>
    </div>
    <!-- <marquee-text :repeat="2" :duration="60">
      <span class="marquee-text">
        Laison
        致力于成为全球IoT产品和数据服务提供商。目前，Laison已经和28个国家的水务公司建立合作（中东，非洲国家），并在非洲建立了标杆管理系统。
        有着和国内 EPC 承包商有着丰富的合作经验。Laison
        在国内面向国外智能水表市场处于领先地位。- 2012 公司创建 - 2013
        首个认证中国智能水表 - 2014 首个STS Association 智能水表公司成员 - 2015
        - 被授予杭州高科技企业， - 埃及最大水表制造商唯一战略合作伙伴 - 2016
        首个东非智能水表项目 - 2017 - 中国水电集团认证智能水表供应商 -
        中国首家获批在Angola的智能水表公司 - 2018 - 被授予国家高科技企业 -
        在印度建立气表工厂 - 印度尼西亚pertagas首家中国STS预付气表供应 - 2019 -
        成为最大智能预付水表出口公司 - 卡梅隆CAMWATER认证智能水表供应商 - 2020 -
        LAISON 仪表在超过28个国家安装 - 在杭州建立了智能工厂
      </span>
    </marquee-text> -->

    <div class="summary-wrapper">
      <TopSummary />
    </div>
  </div>

  <!-- <div class="header-decoration" style="transform: rotateY(180deg);"></div> -->
</template>

<script>
import TopSummary from "./TopSummary/index.vue";
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "TopHeader",
  components: {
    TopSummary,
    MarqueeText,
  },
  data() {
    return {
      time: "",
      date: "",
    };
  },
  mounted() {
    console.log("123124", "--line64");
    let _this = this;
    !(function loop() {
      setTimeout(function() {
        let temp = new Date();
        let dateArr = temp.toLocaleDateString().split("/");
        _this.date = [
          dateArr[0],
          "年",
          dateArr[1],
          "月",
          dateArr[2],
          "日",
        ].join("");
        _this.time = temp.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        loop();
      }, 1000);
    })();
  },
};
</script>
<style lang="scss">
$gutter: 1rem; //各板块margin值
.header-root-wrapper {
  .clock-wrapper {
    width: calc(20vw - #{$gutter});
    height: inherit;
    margin-left: $gutter;
    .dv-border-box-7 {
      .border-box-content {
        position: unset; //这里不知道为什么，组件默认的是relative ,但是会导致发光字效果失效
      }
      padding: 5px;
      width: 100%;
      height: 100%;
      box-sizing: border-box;

      font-family: wgsFont;
      font-size: 30px;
      line-height: 30px;
      // color: rgb(255, 255, 255);
      letter-spacing: 0.2em;
      -webkit-text-stroke: 4px;
      -webkit-background-clip: text;
      -webkit-text-stroke-color: transparent;
      background-image: linear-gradient(
        to right,
        #2eeaff,
        #1499ff,
        #2eeaff,
        #1499ff
      );
      filter: brightness(120%);
    }
  }
}
</style>
<style lang="scss">
.header-decoration {
  width: 640px;
  height: 60px;
  background: rgb(6, 17, 49);
  background: linear-gradient(
    90deg,
    rgba(6, 17, 49, 1) 0%,
    rgba(29, 65, 149, 1) 48%,
    rgba(56, 105, 178, 1) 100%
  );
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
}

.header-root-wrapper {
  $mainTitleFontSize: 44px;
  $subtitleFontSize: 16px;
  width: inherit;
  // height: inherit;
  .marquee-text {
    font-size: 36px;
    color: #ffffff;
  }

  .title-wrapper {
    $color: #004cff;
    // height: inherit;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    white-space: nowrap;
    margin: 0;
    font-weight: 800;
    letter-spacing: 0.5em;
    color: rgb(0, 0, 0);
    -webkit-text-stroke: 6px;
    -webkit-text-stroke-color: transparent;
    -webkit-background-clip: text;

    background-image: linear-gradient(
      to right,
      #09f1b8,
      #00a2ff,
      #0033ff,
      #40a9ff
    );
    filter: brightness(110%);
    .main-title {
      font-size: $mainTitleFontSize;
    }
    .sub-title {
      font-size: $subtitleFontSize;
      -webkit-text-stroke: 4px;
      -webkit-text-stroke-color: transparent;
      -webkit-background-clip: text;
      font-style: italic;
    }
  }
  .summary-wrapper {
    position: absolute;
    right: 0;
    top: 0;
    // border: 1px solid blue;
    width: calc(20vw - 14px); //gutter:14px
    height: inherit;
  }
}
</style>
