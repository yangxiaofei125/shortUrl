<script setup lang="ts">
import { ref, watch } from 'vue';
import { getShortUrl } from "@/api/home";

let longUrl = ref();

watch(longUrl, (newUrl) => {
  console.log('longUrl', longUrl);
});

let shortUrl = ref();

const longUrlInput = ref()

async function requestServer() {
  getShortUrl(longUrl.value).then((res) => {
    shortUrl.value = res;
    longUrl = '';
    copy(shortUrl.value);
  });
}

function copy(text) {
  const textToCopy = text;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log("复制成功");
    })
    .catch((err) => {
      console.error("复制失败:", err);
    });
};

</script>

<template>
  <div class="home">
    <div class="container">
      <span class="marginR10">请输入网址:</span>
      <input ref="longUrlInput" type="text" v-model="longUrl" @keyup.enter="requestServer()">
      <button class="marginL10 btn" @click="requestServer()">提交</button>
    </div>
    <p>{{ shortUrl }}</p>

  </div>
</template>

<style scoped >
.marginR10 {
  display: inline-block;
  margin-right: 10px;
}

.marginL10 {
  display: inline-block;
  margin-left: 10px;
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {}

  p {
    color: blue;
  }

}
</style>