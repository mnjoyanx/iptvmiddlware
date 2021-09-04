<template>
  <!-- Platform Settings Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: 0 }"
  >
    <template #title>
      <h6 class="font-semibold m-0">Platform Settings</h6>
    </template>
    <ul class="list settings-list">
      <li>
        <h6 class="list-header text-sm text-muted">ACCOUNT</h6>
      </li>
      <li>
        <!-- <a-switch v-model="emailForFollows" /> -->
        <a-icon type="mail" class="text-xl" />
        <span>Email </span>
      </li>
      <li>
        <!-- <a-switch v-model="emailForAnswers" /> -->
        <a-icon type="user" class="text-xl" />
        <span>Username</span>
      </li>
      <li>
        <!-- <a-switch v-model="emailForMentions" /> -->
        <a-icon type="man" class="text-xl" />
        <span>Name</span>
      </li>
      <li>
        <h6 class="list-header text-sm text-muted m-0">APPLICATION</h6>
      </li>
      <li>
        <!-- <a-switch v-model="emailForNewProjects" /> -->
        <a-icon type="phone" class="text-xl" />
        <span>Phone Numbeer</span>
      </li>
      <li>
        <!-- <a-switch v-model="emailForProductUpdates" /> -->
        <a-icon type="euro" class="text-xl" />
        <span>Tariff</span>
      </li>
      <li>
        <!-- <a-switch v-model="emailForNewsletter" /> -->
        <a-icon type="team" class="text-xl" />
        <span>Reseller</span>
      </li>
    </ul>
  </a-card>
  <!-- / Platform Settings Card -->
</template>

<script>
export default {
  data() {
    return {
      // Binded model property for "Platform Settings" switch button for "Email ... follows me" .
      emailForFollows: true,

      // Binded model property for "Platform Settings" switch button for "Email ... answers me" .
      emailForAnswers: false,

      // Binded model property for "Platform Settings" switch button for "Email ... mentions me" .
      emailForMentions: true,

      // Binded model property for "Platform Settings" switch button for "New launches and projects" .
      emailForNewProjects: true,

      // Binded model property for "Platform Settings" switch button for "Monthly product updates" .
      emailForProductUpdates: false,

      // Binded model property for "Platform Settings" switch button for "Subscribe to newsletter" .
      emailForNewsletter: true,
    };
  },
};
</script>
