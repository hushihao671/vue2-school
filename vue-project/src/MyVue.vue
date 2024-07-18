<template>
    <body>
        <div>
            <h1>模板语法</h1>
            <p>{{ msg }}</p>
            <p>{{ date }}</p>
            <p>{{ isTrue ? msg: data }}</p>
        
        </div>
        <div v-html="buttonHtml">
        </div>
        <div>
            <h1>属性绑定</h1>
            <div v-bind:class="active">属性绑定</div>
        </div>
    </body>
</template>

<script>
export default {
    data() {
        return {
            msg:'我是胡世豪',
            date: new Date().toLocaleString(),
            isTrue: true,
            buttonHtml:'<a href="https://www.baidu.com">百度链接</a>',
            active:'active'
        }
    }
}
</script>
