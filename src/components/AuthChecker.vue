<script setup>
import {ref} from "vue"
import {useRouter} from "vue-router"

const router = useRouter();

const authCheck = localStorage.getItem('authCheck');
const currentUser = localStorage.getItem('currentUser');


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