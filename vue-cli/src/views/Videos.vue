<template>
  <div id="videos">
    <h1>This is the page with all our videos for sale !</h1>
    <h2>New</h2>
    <section v-for="item in videoList" :key="item.title">
      <div v-if="isNew(item)">
        <VideoItem :item="item" />
      </div>
    </section>
    <hr>

    <h2>Coming soon</h2>
    <section v-for="item in videoList" :key="item.title">
      <div v-if="isComing(item)">
        <VideoItem :item="item" />
      </div>
    </section>
    <hr>

    <h2>Other</h2>
    <section v-for="item in videoList" :key="item.title">
      <div v-if="!isNew(item) && !isComing(item)">
        <VideoItem :item="item" />
      </div>
    </section>
  </div>
</template>

<script>
import VideoItem from "../components/VideoItem.vue";

export default {
  name: "app",
  components: {
    VideoItem,
  },
  data() {
    return {
      videoList: [
        {
          id: "1",
          title: "Here's why the SAT still exists.",
          description: "The SAT is a standardized test widely used for admission to famous universities like Harvard and Yale, and more students are writing it than ever before. At the same time, education reform continues to gain popularity the effectiveness of standardized tests come into question. So, if we know that the SAT is broken, why does it still exist ? In this episode of Nerdonomics, I dive into the problematic origin of the SAT, and figure out why colleges and universities still use the SAT. I also try to write the SAT... without studying.",
          price: "28",
          link: "https://www.youtube.com/embed/XqmrRxLlZTs",
          saleDate: "2022/01/04",
        },
        {
          id: "2",
          title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
          description: "“Never Gonna Give You Up” was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s native UK and the US Billboard Hot 100.  It also won the Brit Award for Best single in 1988. Stock Aitken and Waterman wrote and produced the track which was the lead-off single and lead track from Rick’s debut LP “Whenever You Need Somebody”.  The album was itself a UK number one and would go on to sell over 15 million copies worldwide.",
          price: "1200",
          link: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          saleDate: "2021/11/22",
        },
        {
          id: "3",
          title: "Ancient Coins: The Aureus",
          description: "The Aureus, a 25-denarius piece was the main storage of wealth used by the romans and the king of its monetary standard for centuries. Today, lets explore some of the history and curiosities about this majestic coin.",
          price: "2",
          link: "https://www.youtube.com/embed/8DC40wRFvSA",
          saleDate: "2022/02/15",
        },
        {
          id: "4",
          title: "Sue Takes on the Sutton Hoo Helmet",
          description: "The excavations at Sutton Hoo during 1939 were unique for a number reasons. We're not sure the exact number of reasons (like Irving, maths really isn't our thing), but there were definitely enough for Netflix to make an original, dramatized version of it in the form of 'The Dig'. A ship burial of this level of wealth has not been found before or since in England, and excavations were conducted under the shadow of the United Kingdoms impending involvement in World War Two. Though a great number of exceptional objects were found in the mound at Sutton Hoo, none have captured the public imagination like the Sutton Hoo helmet. And tonight, for the first time in 10 years, we got to get the incredibly delicate helmet out of its display case, and hopefully do it justice (it was incredibly intimidating to film with).",
          price: "20",
          link: "https://www.youtube.com/embed/zYk0GH5iFYI",
          saleDate: "2022/01/06",
        },
      ],
    };
  },
  methods: {
    isComing(item) {
      //check if the video has a date after before today
      if (new Date(item.saleDate) > new Date()) {
        return true;
      } else {
        return false;
      }
    },
    isNew(item) {
      //check if the video has a less than 30 days old but not in the future
      if (
        new Date(item.saleDate) >
          new Date(new Date().setDate(new Date().getDate() - 30)) &&
        new Date(item.saleDate) < new Date()
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>