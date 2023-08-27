<script setup lang="js">
import { ref, watch } from 'vue';
import { getShortUrl } from "@/api/home";

let longUrl = ref('');
let shortUrl = ref('');

watch(longUrl, (newUrl) => {
  console.log('longUrl', newUrl);
});

async function requestServer() {
  if((longUrl.value) === '') return;
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
      ElMessage({
        message: '复制成功',
        type: 'success',
      })
    })
    .catch((err) => {
       ElMessage.error('复制失败')
    });
};




</script>

<template>
  <div class="home">
    <div class="container">
      <span class="marginR10">请输入网址:</span>
      <input ref="longUrlInput" type="text" class="form_input marginR10" placeholder="Type anything..." v-model="longUrl"
        @keyup.enter="requestServer()">
      <div class="btn btn__primary" @click="requestServer()">
        <p>提交</p>
      </div>
    </div>
    <p @click="copy(shortUrl)">{{ shortUrl }}</p>

  </div>
</template>

<style scoped lang="scss">
$primary-light: #8abdff;
$primary: #6d5dfc;
$primary-dark: #5b0eeb;

$white: #FFFFFF;
$greyLight-1: #E4EBF5;
$greyLight-2: #c8d0e7;
$greyLight-3: #bec8e4;
$greyDark: #9baacf;


$white: #fff;

$shadow: .3rem .3rem .6rem $greyLight-2,
  -.2rem -.2rem .5rem $white;
$inner-shadow: inset .2rem .2rem .5rem $greyLight-2,
  inset -.2rem -.2rem .5rem $white;



.marginR10 {
  display: inline-block;
  margin-right: 10px;
}

.marginL10 {
  display: inline-block;
  margin-left: 10px;
}

.form_input {
  width: 14rem;
  height: 3rem;
  border: none;
  border-radius: .7rem;
  font-size: 1.2rem;
  padding-left: 1.4rem;
  box-shadow: inset .2rem .2rem .5rem $greyLight-2,
    inset -.2rem -.2rem .5rem $white;
  background: none;
  font-family: inherit;
  color: $greyDark;

  &::placeholder {
    color: $greyLight-3;
  }

  &:focus {
    outline: none;
    box-shadow: .3rem .3rem .6rem $greyLight-2,
      -.2rem -.2rem .5rem $white;
  }
}

.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background: $greyLight-1;
  background: tan;
  padding: 20px;

  .container {
    display: flex;
    align-items: center;
    span {
      font-size: 1.2rem;
    }
  }

  p {
    display: inline-block;
    color: $greyLight-3;
    margin-top: 20px;
    font-size: 1rem;
  }

  .btn {
    width: 5rem;
    height: 2rem;
    border-radius: .4rem;
    box-shadow: $shadow;
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .3s ease;

    &__primary {
      background: $primary;
      box-shadow: inset .2rem .2rem 1rem $primary-light,
        inset -.2rem -.2rem 1rem $primary-dark,
        $shadow;
      color: $greyLight-1;

      &:hover {
        color: $white;
      }

      &:active {
        box-shadow: inset .2rem .2rem 1rem $primary-dark,
          inset -.2rem -.2rem 1rem $primary-light;
      }
    }


  }
}
</style>
