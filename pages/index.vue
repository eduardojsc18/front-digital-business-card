<template>
    <ProfilePicture />
    <ProfileName />
    <div class="h-screen"></div>
</template>

<script>
import ProfilePicture from "~/components/ProfilePicture.vue";
import ProfileName from "~/components/ProfileName.vue";


export default {
    name: "index",
    layout: 'default',
    components: { ProfilePicture, ProfileName },
}
</script>
