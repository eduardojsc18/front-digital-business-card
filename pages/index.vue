<template>
    <TheHeader />
    <ProfilePicture />
    <ProfileName />
    <div class="h-screen"></div>
</template>

<script>
import ProfilePicture from "~/components/ProfilePicture.vue";
import ProfileName from "~/components/ProfileName.vue";
import TheHeader from "~/components/layouts/TheHeader.vue";


export default {
    name: "index",
    layout: 'default',
    components: {TheHeader, ProfilePicture, ProfileName },
}
</script>
