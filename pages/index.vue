<template>
    <div class="flex-grow w-full bg-white rounded-t-[35px] mt-[280px] md:mt-[400px] rounded-b-md px-10 pb-10 shadow-[0_-10px_20px_-5px_#25191125]">
        <ProfilePicture/>
        <ProfileName/>
        <ProfileProfession/>
        <ProfileQuickInfo/>
        <ProfileAbout/>
        <ProfileService/>
        <ProfilePlaceCare/>
        <ProfileContact/>
    </div>
</template>

<script setup>
import ProfilePicture from "~/components/ProfilePicture.vue";
import ProfileName from "~/components/ProfileName.vue";
import ProfileContact from "~/components/ProfileContact.vue";
import ProfileProfession from "~/components/ProfileProfession.vue";
import ProfileAbout from "~/components/ProfileAbout.vue";
import ProfileService from "~/components/ProfileService.vue";
import ProfileQuickInfo from "~/components/ProfileQuickInfo.vue";
import ProfilePlaceCare from "~/components/ProfilePlaceCare.vue";

</script>
