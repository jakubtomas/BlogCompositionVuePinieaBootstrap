<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="mb-2">Add new blog</h1>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Tittle</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Title" />
        </div>
        <!--  -->
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Text</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Write text"
            rows="4"></textarea>
        </div>
        <button type="button" class="btn btn-primary my-2">Create new blog</button>
        <!-- LIST -->
      </div>
    </div>
  </div>
</template>
