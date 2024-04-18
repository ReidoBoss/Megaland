<template>
<div class="hidden">
    {{ currentUser }}
</div>
</template>

<script setup>
import {ref,onMounted} from "vue"
import {useRouter,useRoute} from "vue-router"
defineProps({
    currentUser:String
});

const current = ref();

const router = useRouter();
const route = useRoute();

const authCheck = localStorage.getItem('authCheck');
const currentUser = localStorage.getItem('currentUser');

if(current==='admin'){

}
else if(current==='agent'){
    
}

if(!authCheck){
    alert('You need to login first!');
    router.push("/");
}
else{

    if(currentUser=='admin'&&currentUser!='agent'){
        router.push("/adminNew");

    }
    else if(currentUser=='agent'&&currentUser!='admin'){
        router.push("/agentNew");
    }
}


</script>