<template>
    <div itemscope itemtype="https://schema.org/NewsArticle" class="hidden">
        <div itemprop="headline">Title of News Article</div>
            <meta content="https://example.com/photos/1x1/photo.jpg" itemprop="image"/>
            <meta content="https://example.com/photos/4x3/photo.jpg" itemprop="image"/>
            <img itemprop="image" src="https://example.com/photos/16x9/photo.jpg" alt=""/>
        <div>
        <span content="2015-02-05T08:00:00+08:00" itemprop="datePublished">
            February 5, 2015 at 8:00am
        </span>
        (last modified
        <span content="2015-02-05T09:20:00+08:00" itemprop="dateModified">
            February 5, 2015 at 9:20am
        </span>
            )
        </div>
        <div>
            by
            <span itemprop="author" itemscope itemtype="https://schema.org/Person">
                <a href="https://example.com/profile/janedoe123" itemprop="url">
                    <span itemprop="name">Jane Doe</span>
                </a>
            </span>
            and
            <span itemprop="author" itemscope itemtype="https://schema.org/Person">
                <a href="https://example.com/profile/johndoe123" itemprop="url">
                    <span itemprop="name">John Doe</span>
                </a>
            </span>
        </div>
    </div>
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
