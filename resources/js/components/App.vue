<script setup>
import Layout from "./Layout.vue";
import Navbar from "./header/Navbar.vue";
import ContentHeader from "./header/ContentHeader.vue";
import Form from "./header/Form.vue";
import ContentMain from "./main/ContentMain.vue";
import IconePlane from "./icone/IconePlane.vue";
import HeaderMain from "./main/HeaderMain.vue";
import BodyMain from "./main/BodyMain.vue";
import ModeOperatoire from "./main/ModeOperatoire.vue";
import DivShadow from "./main/header-main/DivShadow.vue";
import DivSvg from "./main/header-main/DivSvg.vue";
import SvgPlane from "./icone/SvgPlane.vue";
import TitleHearderMain from "./main/header-main/TitleHearderMain.vue";
import ContentFooter from "./footer/ContentFooter.vue";
</script>

<template>
    <Layout>
        <template #header>
            <Navbar/>
            <ContentHeader>
                <IconePlane top="200px" left="433px" z-index="-1"/>;
                <IconePlane top="235px" left="1227px" />
                <IconePlane/>
                <Form />
            </ContentHeader>
        </template>
        <template #main>
            <ContentMain>
                <div class="positionMain">
                    <HeaderMain class="contentHeader d-flex justify-content-lg-between align-items-center">
                        <template #title-header>
                            <TitleHearderMain
                                title="Nos Services"
                                width="58px"
                                height="4px"
                            />
                        </template>
                        <template #div>
                            <DivShadow  position="absolute" top="98px" left="1144px" z-index="1"/>
                            <DivSvg position="absolute" top="155px" left="1100px" z-index="1">
                                <template #svgindiv>
                                    <SvgPlane position="absolute" top="45px" left="52px"/>
                                </template>
                            </DivSvg>
                        </template>
                    </HeaderMain>
                    <BodyMain />
                    <ModeOperatoire >
                        <template #headerModeOperatoire>
                            <HeaderMain>
                                <template #title-header>
                                    <TitleHearderMain
                                        title="Mode Opératoire"
                                        width="87px"
                                        height="4px"
                                        :class="`positionTitle`"
                                    />
                                </template>
                                <template #div>
                                    <DivShadow  position="relative" top="110px" left="40px" z-index="-1"/>
                                    <DivSvg position="" top="" left="" z-index="1">
                                        <template #svgindiv>
                                            <SvgPlane position="relative" top="45px" left="52px"/>
                                        </template>
                                    </DivSvg>
                                </template>
                            </HeaderMain>
                        </template>
                    </ModeOperatoire>
                </div>
            </ContentMain>
        </template>
        <template #footer>
            <ContentFooter/>
        </template>
    </Layout>
</template>
<style scoped>
.positionMain{
    position: relative;
    top: 360px;
    width: 1440px;
    height: 863px;
    left: 2px;
    padding: 100px 150px 100px 150px;
    gap: 100px;
    background-color: #f5fbf4;
}
.contentHeader{
    width: 1140px;
    height: 204px;
    gap: 659px;
}
.positionTitle{
    position: relative;
    top: 240px;
    left: 486px;
}



</style>
