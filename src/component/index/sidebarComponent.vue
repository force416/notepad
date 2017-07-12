<style scoped>

</style>

<template>
    <el-col :span="4">
        <el-menu default-active="1-1" class="el-menu-vertical" theme="light">
            <template v-for="(folder, index) in folders">
                <el-submenu :index="(index + 1).toString()">
                    <template slot="title">{{ folder.name }}</template>
                    <template v-for="(doc, subIndex) in folder.docs">
                        <el-menu-item :index="(index + 1) + '-' + (subIndex + 1)" @click="onChooseDoc(doc.id)">{{doc.name}}</el-menu-item>
                    </template>
                    <el-menu-item index="99">
                        <el-button type="primary" icon="plus" @click="onAddDocument(folder.id, 'newDocument')">add document</el-button>
                    </el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </el-col>
</template>


<script>
import * as UUID from "uuid"

export default {
    data: function () {
        return {
            folders: JSON.parse(localStorage.getItem("folders")) || [{
                id: UUID(),
                name: name || "Documents",
                docs: []
            }]
        }
    },
    methods: {
        onAddDocument: function (folderId, documentName) {
            this.folders.forEach(function (folder, index) {
                if (folder.id === folderId) {
                    folder.docs.push({
                        id: UUID(),
                        name: documentName || "",
                        markdownContent: ""
                    });
                }
            });
            
            localStorage.setItem("folders", JSON.stringify(this.folders));
        },
        onChooseDoc: function (docId) {
            this.$emit("onrChooseDoc", docId);
        }
    }
}

</script>