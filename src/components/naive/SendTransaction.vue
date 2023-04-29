<template>
    <div class="my-component">
        <h2 style="color:#fff">Transaction</h2>

        <n-config-provider :theme="darkTheme" class=" form-wrapper-naive ">
            <n-form label-position="top" :model="form">
                <n-form-item :label="NAMESPACE_LABEL">
                    <n-input v-model.trim="formData.namespace_id" :placeholder="NAMESPACE_PLACEHOLDER" />
                </n-form-item>
                <n-form-item :label="HEX_ENCODED_LABEL">
                    <n-input v-model.trim="formData.data" type="textarea" rows="5" :placeholder="HEX_ENCODED_PLACEHOLDER" />
                </n-form-item>
                <n-button type="primary" :loading="isLoading" @click="submitForm">{{ SUBMIT_BUTTON_TEXT }}</n-button>
            </n-form>
        </n-config-provider>
        <h2 style="color:#fff">Result</h2>
        <div class=" form-wrapper-naive ">
            <TransactionResponse v-show="result.value" :jsonData="result.value"></TransactionResponse>
            <h3 style="color:#fff" v-show="!result.value">No Data</h3>
        </div>

    </div>
</template>
  
<script setup>
import { HEX_ENCODED_PLACEHOLDER, NAMESPACE_PLACEHOLDER, NAMESPACE_LABEL, HEX_ENCODED_LABEL, SUBMIT_BUTTON_TEXT } from '@constants/index';
import TransactionResponse from './TransactionResponse.vue';

import useSendTransactions from "@hooks/useSendTransactions"
import { darkTheme } from 'naive-ui'
const { formData, submitForm, isLoading, result } = useSendTransactions()

</script>
<style scoped>
.form-wrapper-naive {
    width: 100%;
    background: #000;
}

html,
body {
    height: 100%;
}

.my-component {
    height: 100vh;
    background-color: #000;
}
</style>