<template>
   <q-responsive :ratio="4 / 2" style="width: 100%;">
      <div style="width: 100%; height: auto;" class="big-screen-container">
        <div class="con">
          <div class="con-2">
            <div class="wrapper">
              <a href="#"><span>Hover Me!</span></a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1564400143768-2f8ea3f310f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=984&q=80"
              class="scale-2"
              style="width: 100%; height: 100%;"
              alt=""
            /> 
          </div>
        </div>
        <div class="con" style="">
          <div class="con-2">
            <div class="wrapper">
              <a href="#"><span>Hover Me!</span></a>
            </div> 
            <img
              src="https://images.unsplash.com/photo-1596827893769-75feedfbec29?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTkyfHxwYW50c3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              class="scale-2"
              style="width: 100%; height: 100%;"
              alt=""
            />
          </div>
        </div>
      </div>
    </q-responsive>
  
</template>

<script>
export default {
  name: "doublepicks-component"
}
</script>

<style lang="css" scoped>
  
.big-screen-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.con {
  width: 50%;
  height: 100%;
  overflow: hidden;
  padding: 2%;
}
.con-2 {
 position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.scale-2 {
  transform-origin: 50% 65%;
  transition: transform 5s, filter 3s ease-in-out;
  filter: brightness(150%);
}

.scale-2:hover {
  filter: brightness(100%);
  transform: scale(1.3);
}
.wrapper {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 19;
}

a {
  display: block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-family: sans-serif;
  text-decoration: none;
  color: #333;
  border: 2px solid #333;
  background: whitesmoke;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all 0.35s;
    z-index: 19;
}

a span {
  position: relative;
  z-index: 20;
}

a:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: rgb(136, 14, 79);
  transition: all 0.45s;
}

a:hover {
  color: #fff;
}

a:hover:after {
  width: 100%;
}
</style>