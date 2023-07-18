<script setup lang="js">
import { ref, watch } from 'vue';
import { getShortUrl } from "@/api/home";

let longUrl = ref('');
let shortUrl = ref('');

watch(longUrl, (newUrl) => {
  console.log('longUrl', newUrl);
});

async function requestServer() {
  getShortUrl(longUrl.value).then((res) => {
    shortUrl.value = res;
    longUrl.value = '';
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
    <p @click="copy(shortUrl)">{{ shortUrl }}</p>
    <input type="text" class="form__input" placeholder="Type anything...">

  </div>
</template>

<style scoped lang="scss">
:root {
  --primary-light: #8abdff;
  --primary: #6d5dfc;
  --primary-dark: #5b0eeb;

  --white: #FFFFFF;
  --greyLight-1: #E4EBF5;
  --greyLight-2: #c8d0e7;
  --greyLight-3: #bec8e4;
  --greyDark: #9baacf;
}

$shadow: .3rem .3rem .6rem var(--greyLight-2),
  -.2rem -.2rem .5rem var(--white);
$inner-shadow: inset .2rem .2rem .5rem var(--greyLight-2),
  inset -.2rem -.2rem .5rem var(--white);



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

  .from__input {
    width: 20.4rem;
    height: 4rem;
    border: none;
    border-radius: 1rem;
    font-size: 1.4rem;
    padding-left: 1.4rem;
    box-shadow: $inner-shadow;
    background: none;
    font-family: inherit;
    color: var(--greyDark);

    &::placeholder {
      color: var(--greyLight-3);
    }

    &:focus {
      outline: none;
      box-shadow: $shadow;
    }
  }

}
</style>