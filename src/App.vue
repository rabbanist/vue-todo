<script setup></script>

<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title text-center">Task list</h2>
            <div class="row mb-3">
              <form action="">
                <div class="col-md-12">
                  <label class="form-label" for="">Add new task</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mt-3">
                  <input
                    type="button"
                    class="btn btn-success"
                    value="Add Task"
                  />
                </div>
              </form>
            </div>
          </div>
          <div class="card-body">
            <h4 class="text-danger">Tasks</h4>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                List item
                <a href="" class="btn">
                  <i class="fa-solid fa-xmark"></i>
                </a>
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
                  integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ=="
                  crossorigin="anonymous"
                  referrerpolicy="no-referrer"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
