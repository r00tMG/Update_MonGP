<script setup>
import {computed, onMounted, ref} from "vue";
import axios from '../../axios/axiosNoAuth.js'

const annonces = ref([]);
const searchDepart = ref('');
const searchArrivee = ref('');
const searchOrigin = ref('');
const searchDestination = ref('');

const hasSearched = ref(false);
const isLoading = ref(false)

const searchAnnonces = async () => {
    //EventBus.emit('show-loader');
    if (searchDepart.value || searchArrivee.value || searchOrigin.value || searchDestination.value) {
        const r = await axios.get('/annonce_on_home', {
            params: {
                date_depart: searchDepart.value,
                date_arrivee: searchArrivee.value,
                origin: searchOrigin.value,
                destination: searchDestination.value
            }
        });
        annonces.value = r.data.annonces;
        hasSearched.value = true;
    }
    //EventBus.emit('hide-loader');
};

const filteredAnnonces = computed(() => {

    if (searchDepart.value || searchArrivee.value || searchOrigin.value || searchDestination.value) {
        return annonces.value.filter((annonce) => {
            return (
                annonce.date_depart.includes(searchDepart.value) &&
                annonce.date_arrivee.includes(searchArrivee.value) &&
                annonce.origin.toLowerCase().includes(searchOrigin.value.toLowerCase()) &&
                annonce.destination.toLowerCase().includes(searchDestination.value.toLowerCase())
            );
        });

    } else {
        return [];
    }
});
const options = ref([])
onMounted(async () => {
    const r = await fetch('https://restcountries.com/v3.1/independent?status=true&fields=capital')
    const capitals = await r.json()
    options.value = capitals.map((item) =>{
        return item.capital[0]
    })
})
</script>

<template>
    <div class="container containerStyle bg-white flex align-items-center m-auto">
            <form @submit.prevent="onSubmit" class="form-floating mx-auto">
                <div class="d-flex gap-3">
                    <div class="relative">
                            <input type="date" v-model="searchDepart" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-dark dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Départ</label>
                    </div>
                    <div class="relative">
                            <input type="date" v-model="searchArrivee" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-dark dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Arrivée</label>
                    </div>
                    <div class="relative">
                            <input type="text" v-model="searchOrigin" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-dark dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Origine</label>
                    </div>
                    <div class="relative">
                            <input type="text" v-model="searchDestination" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_outlined" class="absolute text-sm text-dark dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Déstination</label>
                    </div>
                    <div>
                        <button @click="searchAnnonces" class="btn btn-success px-1 py-3 flex align-items-center gap-1" type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                            Trouver un GP
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-body">
<!--                                        <Loader  :isLoading="isLoading"/>-->
                                        <div v-if="hasSearched && filteredAnnonces.length > 0" class="album py-5 bg-body-tertiary">
                                            <div class="container">
                                                <div class="container w-75  d-flex m-4 p-5 gap-5">
                                                    <div class="rounded-circle shadow p-3 bg-light">
                                                        <svg stroke="currentColor" class="text-success" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="3.1em" width="3.1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    <div class="">
                                                        <h4 class="hover:underline mt-2">Liste des annonces disponibles</h4>
                                                        <div class="h4 pb-2 width mb-4 border-bottom border-success"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bg-white mb-3 p-3 shadow m-auto border-success border rounded-5" v-for="annonce in filteredAnnonces" :key="annonce.id">
                                                <div class="card-header bg-white border-0">
                                                    <div class="d-flex justify-content-between align-items">
                                                        <div>
                                                            <img class="rounded-circle" :src="`${annonce.user.storage}/${annonce.user.photo_profile}`" width="40px" height="40px" alt="Photo Profile">
                                                            {{ annonce.user.name }}
                                                        </div>
                                                        <div>
                                                            <p class="text-muted mt-1">Publiée il y a {{ Math.abs(new Date(annonce.date_now).getHours() - new Date(annonce.created_at).getHours()) }}h</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-10">
                                                        <div class="card-body border-success rounded-5 shadow border">
                                                            <div class="row p-5">
                                                                <div class="col-md-3">
                                                                    <h4 class="card-title">Départ</h4>
                                                                    <div class="card-title text-success"><strong>{{ new Date(annonce.date_depart).toLocaleDateString() }}</strong></div>
                                                                    <div class="card-title text-success"><strong>{{(new Date(annonce.date_depart).getHours().toString())}}h {{(new Date(annonce.date_depart).getMinutes().toString())}}min</strong></div>
                                                                    <div class="card-title">{{ annonce.origin }}</div>
                                                                </div>
                                                                <div class="col-md-6 text-center">
                                                                    <div class="m-auto">
                                                                        <div class="card-title text-success">{{Math.abs((new Date(annonce.date_arrivee).getHours().toString()) - (new Date(annonce.date_depart).getHours().toString()))}}h {{Math.abs((new Date(annonce.date_arrivee).getMinutes().toString()) - (new Date(annonce.date_depart).getMinutes().toString()))}}min</div>
                                                                        <hr class="border-success border-2">
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <h4 class="card-title">Arrivée</h4>
                                                                    <div class="card-title text-success"><strong>{{ new Date(annonce.date_arrivee).toLocaleDateString() }}</strong></div>
                                                                    <div class="card-title text-success"><strong>{{(new Date(annonce.date_arrivee).getHours().toString())}}h {{(new Date(annonce.date_arrivee).getMinutes().toString())}}min</strong></div>
                                                                    <div class="card-title">{{ annonce.destination }}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-2 ">
                                                        <h4 class="card-title mt-5">Poids</h4>
                                                        <div class="card-title"><span class="text-muted">Disponible</span></div>
                                                        <div class="card-title"><strong>{{ annonce.kilos_disponibles }} Kg</strong></div>
                                                        <a :href="`/annonces/${annonce.id}`" class="btn btn-sm btn-success rounded-4">Réserver</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-else-if="hasSearched && filteredAnnonces.length === 0" class="text-center bg-danger rounded-5 px-5 py-3 w-50 m-auto text-light">
                                            <p>Aucune annonce trouvée pour ces critères de recherche.</p>
                                        </div>
                                        <div v-else class="text-center bg-danger rounded-5 px-5 py-3 w-50 m-auto text-light">
                                            <p>Aucune recherche n'a été effectuée</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
    </div>
</template>

<style scoped>
.containerStyle {
    position: relative;
    top: 166px;
    width: 1140px;
    height: 151px;
    border-radius: 30px 30px 30px 30px;
    box-shadow: 0px 0px 10px 1px #eaeaea;
}

.contentForm {
    width: 1068px;
    height: 79px;
}
.postionBtn{
    position: relative;
    top: 4px;
}
.relative{
    width: 216px;
}




</style>
