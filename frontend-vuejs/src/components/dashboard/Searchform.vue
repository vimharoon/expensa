<template>
  <div class="modal fade" id="search-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document" style="margin-top: 100px">
      <div class="modal-content">
        <form class="search-top-bar" action="#">
          <input class="form-control search-input" type="text" placeholder="Search...">
          <button class="reset input-search-icon" type="submit">
            <i class="la la-search"></i>
          </button>
          <button class="reset input-search-close" type="button" data-dismiss="modal">
            <i class="la la-times"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
