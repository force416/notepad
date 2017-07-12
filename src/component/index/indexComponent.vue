<template>
    <div>
        <el-row :gutter="20">
            <sidebarComponent @onrChooseDoc="onrChooseDoc"></sidebarComponent>
            <el-col :span="8">
                <el-input type="textarea" :autosize="{ minRows: 35, maxRows: 35}" placeholder="請輸入 Markdown 内容" v-model="inputData"></el-input>
            </el-col>
            <el-col :span="8">
                <div v-html="compiledMarkdown"></div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import sidebarComponent from "./sidebarComponent.vue";
import marked from "marked";

export default {
    data: function () {
        return {
            inputData: "",
            currentDocId: ""
        }
    },
    methods: {
        onrChooseDoc: function (docId) {
            this.currentDocId = docId;
            const markdownData = localStorage.getItem(docId);
            if (markdownData) {
                this.inputData = markdownData;
            } else {
                 this.inputData = "";
            }
        }
    },
    components: {
        "sidebarComponent": sidebarComponent
    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.inputData);
        }
    },
    watch: {
        inputData: function (val) {
            localStorage.setItem(this.currentDocId, val);
        }
    }
}

</script>