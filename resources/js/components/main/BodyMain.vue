<script setup>

import CardCarousel from "./CardCarousel.vue";
import SvgPerson from "../icone/SvgPerson.vue";
import SvgPubication from "../icone/SvgPubication.vue";
import SvgSearch from "../icone/SvgSearch.vue";
import SvgReservation from "../icone/SvgReservation.vue";
import SvgPayementCard from "../icone/SvgPayementCard.vue";
import SvgCommunication from "../icone/SvgCommunication.vue";
</script>

<template>


    <div id="controls-carousel" class="relative contentBody" data-carousel="static">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <!-- Item 1 -->
            <div class="hidden duration-700  ease-in-out d-flex justify-content-between" data-carousel-item>
                <!-- Connexion -->
                <CardCarousel
                    title="Connexion"
                    body="En tant que bénéficiaire de la gratuité partielle (GP), accédez facilement à votre compte en quelques clics.
                            Connectez-vous avec vos identifiants pour gérer vos annonces, suivre les kilos disponibles et interagir avec les clients intéressés.
                            Profitez d'une interface simple et sécurisée, conçue pour vous permettre de publier rapidement et de manière efficace."
                >
                    <template #svg>
                        <SvgPerson position="absolute" top="42px" left="42px"/>
                    </template>
                </CardCarousel>
                <!-- Publication -->
                <CardCarousel
                    title="Publication"
                    body="Une fois connecté, publiez vos kilos disponibles en quelques étapes simples.
                        Ajoutez des détails tels que la quantité, la date et les lieux de récupération,
                        et mettez vos annonces à la disposition des utilisateurs qui recherchent des produits à récupérer.
                        Gagnez du temps grâce à un système de publication optimisé qui vous permet de gérer vos kilos de manière fluide
                        et intuitive."
                >
                   <template #svg>
                       <SvgPubication position="absolute" top="42px" left="423px"/>
                   </template>
                </CardCarousel>
                <!-- Search -->
                <CardCarousel
                    title="Rechercher"
                    body="Grâce à notre système de recherche intuitif,
                        trouvez rapidement les kilos disponibles mis en ligne par les bénéficiaires de la gratuité partielle (GP).
                        Filtrez par origine, destination, et date pour repérer les offres qui correspondent à vos besoins.
                        Chaque annonce est mise à jour en temps réel, vous garantissant une recherche fluide et précise."
                >
                    <template #svg>
                        <SvgSearch position="absolute" top="42px" left="807px"/>
                    </template>
                </CardCarousel>
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out d-flex justify-content-between" data-carousel-item="active">
                <!--Reservation-->
                <CardCarousel
                    title="Réservation"
                    body="Une fois que vous avez trouvé les kilos qui vous intéressent,
                        réservez-les en quelques clics. Sélectionnez la quantité
                        et recevez une confirmation immédiate de votre réservation.
                        Planifiez vos récupérations en toute simplicité grâce à notre interface de réservation efficace et transparente."
                >
                  <template #svg>
                    <SvgReservation />
                  </template>
                </CardCarousel>
                <!--Payement Par carte-->
                <CardCarousel
                    title="Payement par carte"
                    body="Effectuez vos paiements directement en ligne avec une carte de crédit ou de débit en toute sécurité.
                        Notre plateforme de paiement est rapide et fiable, vous permettant de finaliser vos réservations sans souci.
                        Vos informations de paiement sont protégées grâce à des standards de sécurité de pointe."
                >
                    <template #svg>
                        <SvgPayementCard />
                    </template>
                </CardCarousel>
                <!--Communication-->
                <CardCarousel
                    title="Communication"
                    body="Restez en contact avec les GP et les autres utilisateurs grâce à notre système de messagerie intégré.
                        Posez des questions, organisez la récupération des kilos ou échangez des informations en toute simplicité.
                        Une communication fluide et rapide pour un service transparent et réactif."
                >
                    <template #svg>
                        <SvgCommunication />
                    </template>
                </CardCarousel>
            </div>

        </div>
        <!-- Slider controls -->
        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white hover:text-dark dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white hover:text-dark dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
        </button>
    </div>

</template>

<style scoped>
.contentBody{
    width: 1140px;
    height: 187px;
    gap: 75px;
    position: relative;
    top: 140px;
}


</style>
