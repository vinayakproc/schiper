<template>
  <div>
    <b-container>
      <b-row>
      <b-col>
  <b-dropdown text="Area" size="lg" class="m-4" block>
    <b-dropdown-item href="#">All</b-dropdown-item>
    <b-dropdown-item href="#">East</b-dropdown-item>
    <b-dropdown-item href="#">West</b-dropdown-item>
  </b-dropdown>
  </b-col>
  <b-col>
  <b-dropdown size="lg" class="m-4" block>
    <template #button-content>
      Territory
    </template>
    <b-dropdown-item href="#">An item</b-dropdown-item>
    <b-dropdown-item href="#">Another item</b-dropdown-item>
  </b-dropdown>
  </b-col>
      </b-row>
</b-container>
</div>
</template>

<script>
export default {
  name: 'Dropdown'
}
</script>
